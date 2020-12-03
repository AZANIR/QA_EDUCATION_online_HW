class PasswordlField {

  get searchInput() {
    return $('[id="user[password]-footer"]');
  }

  setPass (value) {
    this.searchInput.addValue(value);
  }
}

module.exports = new PasswordlField();