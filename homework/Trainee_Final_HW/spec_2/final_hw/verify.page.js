class VerifyPage {

  get browseText() {
    return $('h2.f4');
  }

  browseTextisDisplayed() {
    return this.browseText.isDisplayed();
  }
}

module.exports = new VerifyPage();