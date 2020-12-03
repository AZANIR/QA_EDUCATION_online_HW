class ForgotPassPage {

  get forgotPassLink() {
    return $('.label-link');
  }

  clickLink() {
    this.forgotPassLink.click();
  }
}

module.exports = new ForgotPassPage();