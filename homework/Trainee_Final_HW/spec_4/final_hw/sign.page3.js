class SignPage {

  get apiButton() {
    return $('input[type="submit"]');
  }

  clickSignButton() {
    this.apiButton.click();
  }
}

module.exports = new SignPage();