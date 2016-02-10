module.exports = {
  'Enter an invalid username and password' : function (browser) {
    browser
      .url('http://depleteduvulations.brunchcopter.com/wp-login.php')
      .waitForElementVisible('form', 1000)
      .setValue('#user_login', 'ferryboat')
      .setValue('#user_pass', 'drawcard submerged')
      .click('#wp-submit')
      .waitForElementVisible('#login_error', 1000)
      .end();
  }
};