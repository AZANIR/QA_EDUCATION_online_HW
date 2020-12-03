class UrlPage {
  browserURLisTrue(value) {
    return browser.getUrl().includes(value);
  }
}

module.exports = new UrlPage();