const mailPassGen = require('../final_hw/mail.pass_gen.js');
const forgotPassPage = require('../final_hw/forgotPass.page.js');
const emailField4 = require('../final_hw/email.page4.js');
const signPage3 = require('../final_hw/sign.page3.js');
const errorMesage4 =  require('../final_hw/errorMes.page4.js');
const errorMesage42 =  require('../final_hw/errorMes2.page4.js');
const usernameField = require('../final_hw/username.page4.js');
const passwordField = require('../final_hw/password.page4.js');
const signPage4 = require('../final_hw/sign.page4.js');
const emailLetter =  require('../final_hw/emailLetter.page4.js');



describe.only('restore password https://github.com page with not credentials and credentials data', () => {
  it.only('Load GitHub login page', () => {
    browser.setWindowSize(1440, 900);//прищлось добавить разрешение окна изза 
    browser.url('https://github.com/login');
  });

  it.only('click to Forgot password link', () => {
    forgotPassPage.clickLink();
    browser.pause(2000);
  });

  it.only('generate email and feel the field', () => {
    var emailName = mailPassGen.getEmail();
    console.log("Generate email :" + emailName);
    emailField4.setEmail(emailName);
    browser.pause(1000);
  });

  it.only('click to Submit button', () => {
    signPage3.clickSignButton();
    browser.pause(2000);
  });

  it.only('chek error message', () => {
    console.log("Error message is displayed ?: "+ errorMesage4.getErrMes());
    console.log("Error message is: " + errorMesage4.getErrMes().includes("That address is not a verified"));
    console.log("Go to real email and chek");
  });
  //Part 2 chek with real email.
  it.only('set real email and feel the field', () => {
    var emailName = mailPassGen.getEmail();
    emailField4.setEmail('testuserwb@protonmail.com');
    browser.pause(1000);
  });

  it.only('click to Submit button2', () => {
    signPage3.clickSignButton();
    browser.pause(2000);
  });

  //.mt-0
  it.only('chek error message', () => {
    console.log("Error message is displayed ?: "+ errorMesage42.getErrMes());
    console.log("Error message is: " + errorMesage42.getErrMes().includes("Check your email for a link to reset"));
  });

  it.only('Load Protonmail login page', () => {
    browser.setWindowSize(1440, 900);//прищлось добавить разрешение окна изза 
    browser.newWindow('https://mail.protonmail.com/login');
    browser.pause(6000);
  });

  it.only('Feel the login field', () => {
    usernameField.setUsername('testuserwb');
    browser.pause(1000);
  });

  it.only('Feel the password field', () => {
    passwordField.setPassword('xWMnaha7e6MQXge');
    browser.pause(1000);
  });

  it.only('Click submit button', () => {
    signPage4.clickSignButton();
    browser.pause(7000);
  });

  it.only('Find email from GitHub in mail box', () => {
    console.log("We have email from GitHub: "+emailLetter.letterHeaderIsDysplaied());
    console.log("Header the letter: "+ console.log(emailLetter.letterHeader()));
  });

  it.only('Open emai from GitHub in mail box', () => {
    emailLetter.clickLetterHeader();
    browser.pause(1000);
  });

  it.only('Get link for change password', () => {
    console.log("Email restore password link: "+emailLetter.linkLetterText());
    browser.pause(1000);
  });

});