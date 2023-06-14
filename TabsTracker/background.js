// Initialize the storage with an empty object
chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.local.set({ productivityData: {} });
});

// Listen for tab changes and update productivity data
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete') {
    chrome.storage.local.get('productivityData', function(result) {
      const productivityData = result.productivityData || {};
      const { hostname } = new URL(tab.url);

      if (!productivityData[hostname]) {
        productivityData[hostname] = 0;
      }

      productivityData[hostname] += 1; // Increment the time spent on the website (in this example, we increment by 1)

      chrome.storage.local.set({ productivityData });
    });
  }
});
