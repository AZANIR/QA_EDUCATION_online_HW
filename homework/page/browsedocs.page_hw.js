class BrowsedocsPage {

  get browsedocsText() {
    return $('div.blockElement:nth-child(1) h2:nth-child(1) p');
  }

  browsedocsTextisDisplayed() {
    return this.browsedocsText.isDisplayed();
  }
}

module.exports = new BrowsedocsPage();