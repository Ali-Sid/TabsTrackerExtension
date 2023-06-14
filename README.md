# TabsTrackerExtension

## Manifest File (manifest.json)
The **manifest.json** file contains essential information about the extension. Here's an explanation of the key fields:

**manifest_version:** Specifies the version of the manifest file. In this case, we're using version 3.
**name:** The name of the extension, which is displayed in the extension store and toolbar.
**version:** The version number of the extension.
**description:** A brief description of the extension, highlighting its features and benefits.
**short_description:** A short and concise description of the extension.
**permissions:** Lists the permissions required by the extension. In this case, we need access to tabs and storage.
**action:** Configures the browser action, such as the default popup and icon.
**background:** Specifies the background script or service worker for handling background tasks.
**icons:** Defines the icons used for the extension in different sizes.
**web_accessible_resources:** Lists the web-accessible resources, such as CSS files, that can be accessed by other components of the extension.
## Popup HTML (popup.html)
The **popup.html** file represents the user interface of the extension's popup window. It contains the HTML structure and elements for displaying the extension's features and information.

## Popup JavaScript (popup.js)
The **popup.js** file handles the functionality of the extension's popup window. It retrieves productivity data from local storage and displays it in the popup UI. It dynamically creates list items for each website and its corresponding time spent.

## Background JavaScript (background.js)
The **background.js** file serves as the background script or service worker for the extension. It initializes the storage with an empty object when the extension is installed. It also listens for tab changes and updates the productivity data by incrementing the time spent on each website.

## CSS (popup.css)
The **popup.css** file contains the CSS styles for styling the popup window's appearance, including the container, headings, list items, and background color.

## Conclusion
This code explanation provides an overview of the key components and functionality of the TabsTracker extension. It covers the manifest file, popup window, background script, and CSS styling. Understanding these components will help you navigate and modify the extension's code effectively.
