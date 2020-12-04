const mailPassGen = require('../final_hw/mail.pass_gen.js');
const fillFields = require('../final_hw/fillFields.page.js');
const makeSignVerufyUrl = require('../final_hw/makeSignVerufyUrl.page.js');



describe.only('https://github.com/ page fake registration', () => {
  it.only('Load GitHub page', () => {
    browser.setWindowSize(1440, 900);//прищлось добавить разрешение окна изза верстки сайта многие элементы пропадают при меншем разрешении.
    browser.url('https://github.com/');
    browser.pause(1000);
  });

  it.only('generate username and feel the field', () => {
    var userName = mailPassGen.makePassword(6);
    console.log("Generate username :" + userName);
    fillFields.setUserName(userName);
    browser.pause(1000);
  });

  it.only('generate email and feel the field', () => {
    var emailName = mailPassGen.getEmail();
    console.log("Generate email :" + emailName);
    fillFields.setEmail(emailName);
    browser.pause(1000);
  });

  it.only('generate password and feel the field', () => {
    var passwordlName = mailPassGen.makePassword(9);
    console.log("Generate password :" + passwordlName);
    fillFields.setPass(passwordlName);
    browser.pause(2000);
  });

  it.only('click to Submit button', () => {
    makeSignVerufyUrl.clickSignButton();
    browser.pause(2000);
  });

  it.only('chek url to the page join', () => {
    console.log("Browser url contains word \"join\" is: "+ makeSignVerufyUrl.browserURLisTrue('join'));
  });

  it.only('chek text verify account', () => {
    makeSignVerufyUrl.browseTextisDisplayed();
    console.log("Browser text \"Verify your account\" is: "+ makeSignVerufyUrl.browseTextisDisplayed());
    browser.pause(2000);
  });
});