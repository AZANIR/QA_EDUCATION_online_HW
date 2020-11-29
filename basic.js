const assert = require('assert');

describe('webdriver.io page', () => {
  it('should have the right title', () => {
      browser.url('https://webdriver.io');
      expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js');
  });

  it('should demostrate the AddValue command', () =>{
    browser.url('https://webdriver.io');
    let input = $('#search_input_react');
    input.addValue('test');
    browser.pause(4000);
    input.addValue(123);
    browser.pause(4000);

    value = input.getValue();
    assert(value ==='test123');
  });

  it('should demostrate setValue command', () =>{
    browser.url('https://webdriver.io');
    let input = $('#search_input_react');
    input.setValue('test123');
    browser.pause(4000);
  });

  it('should demonstrate the click command', () => {
    browser.url('https://webdriver.io');
    const blogButton = $('[href="/blog/"]');
    browser.pause(2000);
    blogButton.click();
    browser.pause(2000);
    const guideButton = $('.nav-site.nav-site-internal [href="/docs/gettingstarted.html"]');
    guideButton.click();
    browser.pause(2000);
  });

  it('should demonstrate the getAttribute command', () => {
    browser.url('https://webdriver.io');
    const input = $('#search_input_react');
    let attr = input.getAttribute('title');
    console.log("Title attribute is: " + attr); // outputs: "Search"


    input.setValue('test123');
    attr = input.getAttribute('value');
    console.log("Value attribute is: " + attr); // outputs: test123
  });

  it('should demonstrate the getLocation function', () => {
    browser.url('https://webdriver.io');
    const logo = $('#search_input_react');
    const location = logo.getLocation();
    console.log(location); 

    const xLocation = logo.getLocation('x');
    console.log("xLocation" + xLocation);

  });

  it('should demonstrate the getText function', () => {
      browser.url('https://webdriver.io');
      const blogButton = $('[href="/blog/"]');
      console.log("Text for element:" + blogButton.getText());
  });
});
