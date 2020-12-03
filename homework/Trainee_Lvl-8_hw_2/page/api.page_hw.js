class ApiPage {

  get apiButton() {
    return $('.slidingNav [href="/docs/api.html"]');
  }

  clickApiButton() {
    this.apiButton.click();
  }
}

module.exports = new ApiPage();