const doWhatever = require('../final_hw/doWhatever.js');
const fillFields = require('../final_hw/fillFields.page.js');
const mailPassGen = require('../final_hw/mail.pass_gen.js');


describe.only('Join for free and fill fields ', () => {
  it.only('Load GitHub page', () => {
    browser.setWindowSize(1440, 900);//прищлось добавить разрешение окна изза 
    browser.url('https://github.com/');
    browser.pause(2000);
    });

  it.only('Hover to menu adn click menu', () => {
    doWhatever.elementHover();
    browser.pause(1000);
    doWhatever.menuElementClick();
    browser.pause(1000);
  });

  it.only('Click Join fee button', () => {
    doWhatever.buttonClic();
    browser.pause(1000);
  });

  it.only('generate username and fill the field', () => {
    var userName = mailPassGen.makePassword(6);
    console.log("Generate username :" + userName);
    fillFields.setUserName(userName);
    browser.pause(1000);
  });

  it.only('generate email and fill the field', () => {
    var emailName = mailPassGen.getEmail();
    console.log("Generate email :" + emailName);
    fillFields.setEmail(emailName);
    browser.pause(1000);
  });

  it.only('generate password and fill the field', () => {
    var passwordlName = mailPassGen.makePassword(9);
    console.log("Generate password :" + passwordlName);
    fillFields.setPass(passwordlName);
    browser.pause(1000);
  });

});