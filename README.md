# wp-nightwatch-tests

## Run locally

`npm install` to install Nightwatch.

Install dependencies a la the included .travis.yml:

```
curl https://selenium-release.storage.googleapis.com/2.52/selenium-server-standalone-2.52.0.jar > bin/selenium-server-standalone-2.52.0.jar
curl -s https://chromedriver.storage.googleapis.com/2.21/chromedriver_linux64.zip | funzip > bin/chromedriver && chmod +x bin/chromedriver
```

`./runner.sh` to run tests.
