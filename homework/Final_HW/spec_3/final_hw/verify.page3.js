class VerifyPage {

  get browseText() {
    return $('summary img[class*="avatar-user"]');
  }

  nicnameText() {
    return this.browseText.getAttribute('alt');
  }
}

module.exports = new VerifyPage();