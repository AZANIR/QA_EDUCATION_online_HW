const startFreeTrial = require('../final_hw/StartFreeTrial.page.js');
const fillFields = require('../final_hw/fillFields.page9.js');
const mailPassGen = require('../final_hw/mail.pass_gen.js');

describe.only('Fill cloud and Server pages ', () => {
  it.only('Load GitHub page', () => {
    browser.setWindowSize(1440, 900);//прищлось добавить разрешение окна изза 
    browser.url('https://github.com/');
    browser.pause(2000);
    });

  it.only('Start free trial button', () => {
    startFreeTrial.clickStartTrial();
    browser.pause(1000);
  });

  it.only('Click Entrprise cloud', () => {
    startFreeTrial.menuElementClickCloud();
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

  it.only('Bak to previos page', () => {
    browser.back();
    browser.pause(1000);
  });

  it.only('Click Entrprise server', () => {
    startFreeTrial.menuElementClickServer();
    browser.pause(1000);
  });

  it.only('generate username and fill the field', () => {
    var UserNameServer = mailPassGen.makePassword(6);
    console.log("Generate username :" + UserNameServer);
    fillFields.setUserNameServer(UserNameServer);
    browser.pause(1000);
  });

  it.only('generate CompanyName and fill the field', () => {
    var CompanyName = mailPassGen.makePassword(9);
    console.log("Generate password :" + CompanyName);
    fillFields.setRequestName(CompanyName);
    browser.pause(1000);
  });

  it.only('generate email and fill the field', () => {
    var emailRequestName = mailPassGen.getEmail();
    console.log("Generate email :" + emailRequestName);
    fillFields.setRequestEmail(emailRequestName);
    browser.pause(1000);
  });

  it.only('Click radio button Not sure yet', () => {
    startFreeTrial.clickRadioButton();
    browser.pause(1000);
  });

  it.only('Click radio button Yes', () => {
    startFreeTrial.clickRadioButtonYes();
    browser.pause(1000);
  });

  it.only('Put some text in Area text field', () => {
    fillFields.setTextAreaQList("Lorem Ipsum is simply dummy text of the printing and typesetting industry");
    browser.pause(1000);
  });
  
  it.only('Click radio button Yes', () => {
    startFreeTrial.clickAgreedTerms();
    browser.pause(2000);
  });

});