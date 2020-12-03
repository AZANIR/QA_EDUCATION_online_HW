class UserNameField {

  get searchInput() {
    return $('[name="user[login]"]');
  }

  setUserName (value) {
    this.searchInput.addValue(value);
  }
}

module.exports = new UserNameField();