class DoWhatever {
  get selectorSearchForm() {
    return $('input.input-sm');
  }
  elemenSetValue(value) {
    this.selectorSearchForm.setValue(value);
  }

  get selectClickElement() {
    return $('//a[@class="filter-item" and contains(@href,"TypeScript")]');
  }
  menuElementClick() {
    this.selectClickElement.click();
  }

  get firstRepo(){
    return $('ul.repo-list a');
  }
  clickFirstRepo(){
    this.firstRepo.click();
  }

  //check page url
  browserURLisTrue(value) {
    return browser.getUrl().includes(value);
  }


}

module.exports = new DoWhatever();