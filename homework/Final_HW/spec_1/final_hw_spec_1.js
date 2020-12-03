const mailPassGen = require('../final_hw/mail.pass_gen.js');
const userNameField = require('../final_hw/username.page.js');
const emailField = require('../final_hw/email.page.js');
const passwordlField = require('../final_hw/password.page.js');
const signPage = require('../final_hw/sign.page.js');
const verifyPage = require('../final_hw/verify.page.js');
const urlPage =  require('../final_hw/url.page.js');



describe.only('https://github.com/ page fake registration', () => {
  it.only('Load GitHub page', () => {
    browser.setWindowSize(1440, 900);//прищлось добавить разрешение окна изза верстки сайта многие элементы пропадают при меншем разрешении.
    browser.url('https://github.com/');
    browser.pause(1000);
  });

  it.only('generate username and feel the field', () => {
    var userName = mailPassGen.makePassword(6);
    console.log("Generate username :" + userName);
    userNameField.setUserName(userName);
    browser.pause(1000);
  });

  it.only('generate email and feel the field', () => {
    var emailName = mailPassGen.getEmail();
    console.log("Generate email :" + emailName);
    emailField.setEmail(emailName);
    browser.pause(1000);
  });

  it.only('generate password and feel the field', () => {
    var passwordlName = mailPassGen.makePassword(9);
    console.log("Generate password :" + passwordlName);
    passwordlField.setPass(passwordlName);
    browser.pause(2000);
  });

  it.only('click to Submit button', () => {
    signPage.clickSignButton();
    browser.pause(2000);
  });

  it.only('chek url to the page join', () => {
    console.log("Browser url contains word \"join\" is: "+ urlPage.browserURLisTrue('join'));
  });

  it.only('chek text verify account', () => {
    verifyPage.browseTextisDisplayed();
    console.log("Browser text \"Verify your account\" is: "+ verifyPage.browseTextisDisplayed());
    browser.pause(2000);
  });
});