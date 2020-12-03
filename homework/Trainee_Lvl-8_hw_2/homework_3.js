const apiPage = require('../page/api.page_hw.js');
const helpPage = require('../page/help.page_hw.js');
const contributePage = require('../page/contribute.page_hw.js');
const browserdocsPage = require('../page/browsedocs.page_hw.js');
const versionsPage = require('../page/versions.page_hw.js')
const pastvPage = require('../page/pastv.page_hw.js')
const documentationPage =  require('../page/documentation.page_hw.js');

describe('webdriver.io page', () => {
  it.only('go to webdriver.io page', () => {
    browser.setWindowSize(1440, 900);//прищлось добавить разрешение окна изза верстки сайта многие элементы пропадают при меншем разрешении.
    browser.url('https://webdriver.io');
  });
  it.only('click to Api button', () => {
    apiPage.clickApiButton();
    browser.pause(2000);
  });
  it.only('click to Control link', () => {
    contributePage.clickContrButton();
    browser.pause(2000);
  });
  it.only('click to Help button', () => {
    helpPage.clickHelpButton();
    browser.pause(2000);
  });
  it.only('is displayed browsers text', () => {
    console.log("BrowsedocsText isDisplayed ?: "+ browserdocsPage.browsedocsTextisDisplayed());
  });
  it.only('click to Version link', () => {
    versionsPage.clickVersionsButton();
    browser.pause(2000);
  });
  it.only('click to PastV link', () => {
    pastvPage.clickPastvButton();
    browser.pause(2000);
  });
  it.only('click to Documentation link', () => {
    documentationPage.clickDocumentationButton();
  });

});