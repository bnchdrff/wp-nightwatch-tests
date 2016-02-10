module.exports = {
  'Enter a username only' : function (browser) {
    browser
      .url('http://depleteduvulations.brunchcopter.com/wp-login.php')
      .waitForElementVisible('form', 1000)
      .setValue('#user_login', 'ferryboat')
      .click('#wp-submit')
      .waitForElementVisible('#login_error', 1000)
      .assert.containsText('#login_error', 'The password field is empty')
      .end();
  }
};