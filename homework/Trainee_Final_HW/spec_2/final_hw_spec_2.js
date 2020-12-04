const mailPassGen = require('../final_hw/mail.pass_gen.js');
const fillField2 = require('../final_hw/fillFields.page2.js');
const makeScrollSignVerufyUrl = require('../final_hw/makeScrollSignVerufyUrl.page2.js');



describe.only('https://github.com/ page fake registration second form', () => {
  it.only('Load GitHub page', () => {
    browser.setWindowSize(1440, 900);//прищлось добавить разрешение окна изза верстки сайта многие элементы пропадают при меншем разрешении.
    browser.url('https://github.com/');
    browser.pause(1000);
  });
  //делаем прокрутку к обьекту 
  it.only('should move to element', () => {
    makeScrollSignVerufyUrl.pageScroll();
    browser.pause(1000);
  });

  it.only('generate username and feel the field', () => {
    var userName = mailPassGen.makePassword(6);
    console.log("Generate username :" + userName);
    fillField2.setUserName(userName);
    browser.pause(1000);
  });

  it.only('generate email and feel the field', () => {
    var emailName = mailPassGen.getEmail();
    console.log("Generate email :" + emailName);
    fillField2.setEmail(emailName);
    browser.pause(1000);
  });

  it.only('generate password and feel the field', () => {
    var passwordlName = mailPassGen.makePassword(9);
    console.log("Generate password :" + passwordlName);
    fillField2.setPass(passwordlName);
    browser.pause(2000);
  });

  it.only('click to Submit button', () => {
    makeScrollSignVerufyUrl.clickSignButton();
    browser.pause(2000);
  });

  it.only('chek url to the page join', () => {
    console.log("Browser url contains word \"join\" is: "+ makeScrollSignVerufyUrl.browserURLisTrue('join'));
  });

  it.only('chek text verify account', () => {
    console.log("Browser text \"Verify your account\" is: "+ makeScrollSignVerufyUrl.browseTextisDisplayed());
    browser.pause(2000);
  });
});