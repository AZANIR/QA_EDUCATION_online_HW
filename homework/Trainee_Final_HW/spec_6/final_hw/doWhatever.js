class DoWhatever {
  get selectorElemnt() {
    return $('//summary[contains(@class,"HeaderMenu") and contains(text(),"Pricing")]');
  }
  elementHover() {
    this.selectorElemnt.moveTo();
  }
  get selectClickElement() {
    return $('header a[href="/pricing"]');
  }
  menuElementClick() {
    this.selectClickElement.click();
  }

  get buttonJoinFree(){
    return $('ul~div a[href*="card-free"]');
  }
  buttonClic(){
    this.buttonJoinFree.click();
  }


}

module.exports = new DoWhatever();