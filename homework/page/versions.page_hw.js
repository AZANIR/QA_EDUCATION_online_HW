class VersionsPage {

  get versionsButton() {
    return $('.slidingNav a[href="/docs/versions.html"]');
  }

  clickVersionsButton() {
    this.versionsButton.click();
  }
}

module.exports = new VersionsPage();