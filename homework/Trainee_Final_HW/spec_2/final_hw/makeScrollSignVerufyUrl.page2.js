class MakeScrollSignVerufyUrl {
  //submitt button
  get apiButton() {
    return $('//form/button');
  }

  clickSignButton() {
    this.apiButton.click();
  }
  //check page url
  browserURLisTrue(value) {
    return browser.getUrl().includes(value);
  }
  //verify text on page
  get browseText() {
    return $('h2.f4');
  }

  browseTextisDisplayed() {
    return this.browseText.isDisplayed();
  }

  get gitHubLink() {
    return $('[id="user\[login\]-footer"]');
  }
  pageScroll(){
    this.gitHubLink.scrollIntoView();
  }

}

module.exports = new MakeScrollSignVerufyUrl();