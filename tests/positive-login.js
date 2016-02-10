module.exports = {
  'Successfully login with valid username and password' : function(browser) {
    browser
      .url('http://depleteduvulations.brunchcopter.com/wp-login.php')
      .waitForElementVisible('form', 1000)
      .setValue('#user_login', 'ferryboat')
      .setValue('#user_pass', 'drawcard submerged firewatcher medicin')
      .click('#wp-submit')
      .waitForElementVisible('#adminmenumain', 1000)
      .assert.containsText('.wp-menu-name', 'Dashboard')
      .end();
  }
};