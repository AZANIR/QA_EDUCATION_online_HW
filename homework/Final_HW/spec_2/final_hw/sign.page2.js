class SignPage {

  get apiButton() {
    return $('//form/div/div/button');
  }

  clickSignButton() {
    this.apiButton.click();
  }
}

module.exports = new SignPage();