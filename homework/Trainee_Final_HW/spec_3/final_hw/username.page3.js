class UserNameField {

  get searchInput() {
    return $('#login_field');
  }

  setUserName (value) {
    this.searchInput.addValue(value);
  }
}

module.exports = new UserNameField();