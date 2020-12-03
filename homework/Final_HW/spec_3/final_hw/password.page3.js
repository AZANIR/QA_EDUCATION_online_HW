class PasswordlField {

  get searchInput() {
    return $('#password');
  }

  setPass (value) {
    this.searchInput.addValue(value);
  }
}

module.exports = new PasswordlField();