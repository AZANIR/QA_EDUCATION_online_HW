const mailPassGen = require('../final_hw/mail.pass_gen.js');
const userNameField2 = require('../final_hw/username.page2.js');
const emailField2 = require('../final_hw/email.page2.js');
const passwordlField2 = require('../final_hw/password.page2.js');
const signPage2 = require('../final_hw/sign.page2.js');
const verifyPage = require('../final_hw/verify.page.js');
const urlPage =  require('../final_hw/url.page.js');



describe.only('https://github.com/ page fake registration second form', () => {
  it.only('Load GitHub page', () => {
    browser.setWindowSize(1440, 900);//прищлось добавить разрешение окна изза верстки сайта многие элементы пропадают при меншем разрешении.
    browser.url('https://github.com/');
    browser.pause(1000);
  });
  //делаем прокрутку к обьекту 
  it.only('should move to element', () => {
    const gitHubLink = $('[id="user\[login\]-footer"]');
    gitHubLink.scrollIntoView();
    browser.pause(1000);
  });

  it.only('generate username and feel the field', () => {
    var userName = mailPassGen.makePassword(6);
    console.log("Generate username :" + userName);
    userNameField2.setUserName(userName);
    browser.pause(1000);
  });

  it.only('generate email and feel the field', () => {
    var emailName = mailPassGen.getEmail();
    console.log("Generate email :" + emailName);
    emailField2.setEmail(emailName);
    browser.pause(1000);
  });

  it.only('generate password and feel the field', () => {
    var passwordlName = mailPassGen.makePassword(9);
    console.log("Generate password :" + passwordlName);
    passwordlField2.setPass(passwordlName);
    browser.pause(2000);
  });

  it.only('click to Submit button', () => {
    signPage2.clickSignButton();
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