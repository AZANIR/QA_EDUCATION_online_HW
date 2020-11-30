class HelpPage {

  get helpButton() {
    return $('.slidingNav a[href="/help.html"]');
  }

  clickHelpButton() {
    this.helpButton.click();
  }
}

module.exports = new HelpPage();