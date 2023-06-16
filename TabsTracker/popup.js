// Retrieve productivity data and display it in the popup UI
chrome.storage.local.get('productivityData', function(result) {
  const productivityData = result.productivityData || {};

  const websiteList = document.getElementById('websiteList');

  document.getElementById('clearTabsButton').addEventListener('click', function() {
    chrome.storage.local.set({ productivityData: {} }); // Clear the stored data
    const taskList = document.getElementById('websiteList')
    taskList.innerHTML = ''
  });
  
  

  for (const [website, timeSpent] of Object.entries(productivityData)) {
    const listItem = document.createElement('li');
    const websiteName = website.replace(/^(https?:\/\/)?(www\.)?([^/]+)\..+$/i, '\$3'); // Extract the third capture group from the regular expression
    timeText = timeSpent > 1 ? 'minutes' : 'minute'
    listItem.textContent = `${websiteName}: ${timeSpent} ${timeText}`;
    
    websiteList.appendChild(listItem);
  }


});
