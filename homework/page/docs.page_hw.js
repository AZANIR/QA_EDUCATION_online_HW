//Page Object - задание 2
class DocsPageHW {

  get searchDocsBtn() {
    return $('//a[contains(text(),"Docs")]');
  }

  submit() {
    this.searchDocsBtn.click();
  }
}

module.exports = new DocsPageHW();