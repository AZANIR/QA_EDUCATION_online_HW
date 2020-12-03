class PasswordlField {

  get searchInput() {
    return $('[name="user[password]"]');
  }

  setPass (value) {
    this.searchInput.addValue(value);
  }
}

module.exports = new PasswordlField();