const pageCareers = require('../final_hw/Careers.page.js');
const openPositions = require('../final_hw/Openpositions.page.js');

describe.only('Go to GitHub select careers and load to console variants', () => {
  it.only('Load GitHub page', () => {
    browser.setWindowSize(1440, 900);//прищлось добавить разрешение окна изза 
    browser.url('https://github.com/');
    browser.pause(2000);
    });

  it.only('Scroll in to viev element careers', () => {
    pageCareers.scrollIntoViewCareers()
    browser.pause(1000);
  });

  it.only('Click element careers', () => {
    pageCareers.clickIntoViewCareers();
    browser.pause(1000);
  });

  it.only('Click element Open positions', () => {
    pageCareers.clickOpenPosition();
    browser.pause(1000);
  });

  it.only('Show to console positions', () => {
    openPositions.getTextForLi;
    browser.pause(2000);
  });
});