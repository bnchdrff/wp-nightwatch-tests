module.exports = {
  'Check for access restrictions when not logged in' : function(browser) {
    browser
      .url('https://panteracapital.com/download/venture-letter-august-2014/')
      .pause(1000)
      .assert.containsText('.need-login', 'YOU MUST BE LOGGED IN TO VIEW THIS CONTENT')
      .end();
  }
};