class UserNameField {

  get searchInput() {
    return $('[id="user[login]-footer"]');
  }

  setUserName (value) {
    this.searchInput.addValue(value);
  }
}

module.exports = new UserNameField();