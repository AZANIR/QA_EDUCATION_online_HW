class ContributePage {

  get contributeButton() {
    return $('.onPageNav a[href="#contribute"]');
  }

  clickContrButton() {
    this.contributeButton.click();
  }
}

module.exports = new ContributePage();