# Smart Photo Frame/Dashboard

This package includes tools to run a smart photo frame from a Chromebook. The photo frame displays photos, shows the weather, time, and AQI. Press "p" or the space bar to pause image changing.

### Setup

1. Use the code in `listphotos.py` to generate a `image_names.js` file. Note that this must be run within the directory where the photos are, and the photos should be put in a photos folder. The file should be formatted similar to line 2 of `new_script.js`, just as the declaration of a static variable.
2. Install the [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en) extension.
3. Deploy! Open the web server, select the directory with all of this project's files plus the photos in it, and open it. Recommend the [Keep Awake](https://chrome.google.com/webstore/detail/keep-awake/bijihlabcfdnabacffofojgmehjdielb?hl=en) extension plus setting the website to fullscreen.

### Settings

**Location** is set within `index.html` in the weather widget and aqi widget.

**Image change interval** is how often the site changes photos. It is changed in `new_script.js` in the `changeImages()` function. Must be a multiple of 60.

**Weather update interval** is how often the weather and aqi widgets are forced to reload. Currently set to every 10 minutes, but can be changed in `new_script.js` in the `updateWeather()` function.
