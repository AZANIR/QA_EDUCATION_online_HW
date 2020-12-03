class UsernameField {

  get searchInput() {
    return $('#username');
  }

  setUsername (value) {
    this.searchInput.addValue(value);
  }
}

module.exports = new UsernameField();