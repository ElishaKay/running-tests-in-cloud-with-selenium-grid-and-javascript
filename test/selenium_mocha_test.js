var assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');
 
test.describe('Selenium with Mocha Test', function() {
  this.timeout(30000);
  test.it('should work', function() {

var driver = new webdriver.Builder().usingServer('http://192.168.99.100:4444/wd/hub').withCapabilities({
  'browserName' : 'chrome'
}).build();
   
driver.get('http://www.google.com');
    var searchBox = driver.findElement(webdriver.By.name('q'));
    searchBox.sendKeys('simple programmer');
    searchBox.getAttribute('value').then(function(value) {
      assert.equal(value, 'simple programmer');
    });
    // driver.quit();
  });
});





// Older
 // var driver = new webdriver.Builder().
 //    withCapabilities(webdriver.Capabilities.chrome()).
 //    build();