const mainPage = require('../page/main.page.js');
const docsPageHW = require('../page/docs.page_hw.js');

describe('webdriver.io page', () => {
  it.skip('should demonstrate the addValue command', () => {
    browser.url('https://webdriver.io');
    mainPage.searchInput.addValue('test');
    browser.pause(2000);
    mainPage.setUserName('type with method');
    browser.pause(2000);
  });

  it.skip('should demonstrate the click Docs button', () => {
    browser.url('https://webdriver.io');
    docsPageHW.submit();
    browser.pause(2000);
  });

});