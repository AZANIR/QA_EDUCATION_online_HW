const userNameField3 = require('../final_hw/username.page3.js');
const passwordlField3 = require('../final_hw/password.page3.js');
const signPage3 = require('../final_hw/sign.page3.js');
const verifyPage3 = require('../final_hw/verify.page3.js');
const isDisplayedPage3 =  require('../final_hw/displayed.page3.js');



describe.only('https://github.com/login page login vith real data', () => {
  it.only('Load GitHub login page', () => {
    browser.setWindowSize(1440, 900);//прищлось добавить разрешение окна изза 
    browser.url('https://github.com/login');
  });

  it.only('feel the field login', () => {
    userNameField3.setUserName('testuserwb');
    browser.pause(1000);
  });

  it.only('feel the field password', () => {
    passwordlField3.setPass('xWMnaha7e6MQXge');
    browser.pause(2000);
  });

  it.only('click to Submit button', () => {
    signPage3.clickSignButton();
    browser.pause(2000);
  });

  it.only('should detect if an element is displayed', () => {
    console.log("Button create new repo is displayed ?: "+ isDisplayedPage3.buttonDisplayed());
  });

  it.only('chek text NICNAME', () => {
    console.log("Text your nicname is: "+ verifyPage3.nicnameText());
    browser.pause(2000);
  });

});