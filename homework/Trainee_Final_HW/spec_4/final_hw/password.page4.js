class PasswordField {

  get searchInput() {
    return $('#password');
  }

  setPassword (value) {
    this.searchInput.addValue(value);
  }
}

module.exports = new PasswordField();