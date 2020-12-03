class IsDisplayedPage {

  get repButtonAtr() {
    return $('#dashboard-repos-container a');
  }

  buttonDisplayed() {
    return this.repButtonAtr.isDisplayed();
  }
}

module.exports = new IsDisplayedPage();