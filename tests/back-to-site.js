module.exports = {
  'Navigate back to site from login form' : function (browser) {
    browser
      .url('http://depleteduvulations.brunchcopter.com/wp-login.php')
      .waitForElementVisible('form', 1000)
      .click('#backtoblog a')
      .pause(1000)
      .assert.containsText('.site-title','Depleted Uvulations')
      .end();
  }
};