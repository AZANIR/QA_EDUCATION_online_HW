class DoWhatever {
  get selectorElemnt() {
    return $('//summary[contains(@class,"HeaderMenu") and contains(text(),"Explore")]');
  }
  elementHover() {
    this.selectorElemnt.moveTo();
  }
  get selectClickElement() {
    return $('header a[href="/explore"]');
  }
  menuElementClick() {
    this.selectClickElement.click();
  }

  get buttonTopics(){
    return $('main a[href="/topics"]');
  }
  buttonClick(){
    this.buttonTopics.click();
  }

  //verify text on page
  get browseText() {
    return $('main h1');
  }
  browseTextisDisplayed() {
    return this.browseText.isDisplayed();
  }  


}

module.exports = new DoWhatever();