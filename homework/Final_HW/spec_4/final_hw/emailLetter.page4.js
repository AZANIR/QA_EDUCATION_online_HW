class EmailLetter {

  get searcLetter() {
    return $('//h4/span[contains(text(),"GitHub")]');
  }

  get searcLinkLetter() {
    return $('a[href*="password_reset/"]')
  }

  letterHeader() {
    return this.searcLetter.getText();
  }

  letterHeaderIsDysplaied() {
    return this.letterHeader().includes('GitHub');
  }

  clickLetterHeader() {
    this.searcLetter.click();
  }
  linkLetterText() {
    return this.searcLinkLetter.getAttribute('href');
  }

}

module.exports = new EmailLetter();