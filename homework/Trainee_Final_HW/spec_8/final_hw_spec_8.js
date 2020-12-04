const findRepo = require('../final_hw/FindRepo.page.js');


describe.only('search webdriverio repositiries', () => {
  it.only('Load GitHub page ', () => {
    browser.setWindowSize(1440, 900);//прищлось добавить разрешение окна изза 
    browser.url('https://github.com/');
    browser.pause(2000);
    });

  it.only('set value in search field', () => {
    findRepo.elemenSetValue('webdriverio');
    browser.pause(1000);
  });

  it.only('Enter search', () => {
    browser.keys("Enter");
    browser.pause(3000);
  });

  it.only('Select TypeScript menu', () => {
    findRepo.menuElementClick();
    browser.pause(1000);
  });

  it.only('Select first repo', () => {
    findRepo.clickFirstRepo();
    browser.pause(1000);
  });

  it.only('Chek in url name webdriverio', () => {
    console.log("Browser url contains word \"webdriverio\" is: " + findRepo.browserURLisTrue('webdriverio'));
    browser.pause(2000);
  });

});