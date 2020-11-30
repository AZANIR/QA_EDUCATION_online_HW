class DocumentationPage {

  get documentationButton() {
    return $('[href="https://v5.webdriver.io/"]');
  }

  clickDocumentationButton() {
    this.documentationButton.click();
  }
}

module.exports = new DocumentationPage();