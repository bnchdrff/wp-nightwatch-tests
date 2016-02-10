module.exports = {
  'Display login form' : function (browser) {
    browser
      .url('http://depleteduvulations.brunchcopter.com/wp-login.php')
      .waitForElementVisible('form', 1000)
      .assert.containsText('#loginform', 'Username')
      .assert.containsText('#loginform', 'Password')
      .end();
  }
};