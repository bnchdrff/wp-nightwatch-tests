# wp-nightwatch-tests
## First time installs
Install nightwatch globally (requires node.js and npm): `npm install -g nightwatch`

Download the latest Selenium server following instructions here: http://nightwatchjs.org/guide#installation 

Create a /bin folder at the project root and put it there, so it matches the "server_path" in nightwatch.json. Notice that we've set Selenium's start process to true, so the server will start automatically when we're running tests.

To test using Chrome, download the chromedriver binary by following instructions here: https://sites.google.com/a/chromium.org/chromedriver/getting-started 

Put your chromedriver file in the same /bin folder as your server, again matching the path in nightwatch.json.

Make your chromedriver file executable: `chmod +x bin/chromedriver`

## Running tests
As simple as `nightwatch`
