class SignPage {

  get apiButton() {
    return $('#login_btn');
  }

  clickSignButton() {
    this.apiButton.click();
  }
}

module.exports = new SignPage();