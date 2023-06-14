// Retrieve productivity data and display it in the popup UI
chrome.storage.local.get('productivityData', function(result) {
  const productivityData = result.productivityData || {};

  const websiteList = document.getElementById('websiteList');

  for (const [website, timeSpent] of Object.entries(productivityData)) {
    const listItem = document.createElement('li');
    listItem.textContent = `${website}: ${timeSpent} minutes`;

    websiteList.appendChild(listItem);
  }
});
