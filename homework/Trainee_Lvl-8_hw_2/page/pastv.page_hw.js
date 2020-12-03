class PastvPage {

  get pastvButton() {
    return $('.onPageNav a[href="#past-versions"]');
  }

  clickPastvButton() {
    this.pastvButton.click();
  }
}

module.exports = new PastvPage();