class SignPage {

  get apiButton() {
    return $('//form/button');
  }

  clickSignButton() {
    this.apiButton.click();
  }
}

module.exports = new SignPage();