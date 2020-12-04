class MenuElements {

  get selectorElemnt1() {
    return $('//summary[contains(@class,"HeaderMenu") and contains(text(),"GitHub")]');
  }
  get selectorElemnt2() {
    return $('//summary[contains(@class,"HeaderMenu") and contains(text(),"Explore")]');
  }
  get selectorElemnt3() {
    return $('//summary[contains(@class,"HeaderMenu") and contains(text(),"Pricing")]');
  }

  elementHover1() {
    this.selectorElemnt1.moveTo();
  }
  elementHover2() {
    this.selectorElemnt2.moveTo();
  }
  elementHover3() {
    this.selectorElemnt3.moveTo();
  }

  get hoverElement1() {
    return $('header a[href="/features"]');
  }

  get hoverElement2() {
    return $('header a[href="/explore"]');
  }

  get hoverElement3() {
    return $('header a[href="/pricing"]');
  }

  elementHoverDysplaied1() {
    return this.hoverElement1.isDisplayed();
  }

  elementHoverDysplaied2() {
    return this.hoverElement2.isDisplayed();
  }

  elementHoverDysplaied3() {
    return this.hoverElement3.isDisplayed();
  }

}

module.exports = new MenuElements();