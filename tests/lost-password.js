module.exports = {
  'Click "Lost your password?" without entering username' : function (browser) {
    browser 
      .url('http://depleteduvulations.brunchcopter.com/wp-login.php')
      .waitForElementVisible('form', 1000)
      .click('#nav a')
      .pause(1000)
      .assert.containsText('#lostpasswordform', 'Username or Email')
      .end();
  }
};