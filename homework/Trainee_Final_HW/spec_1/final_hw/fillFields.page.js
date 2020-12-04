class FillFields {

  get searchInputEmail() {
    return $('[name="user[email]"]');
  }

  setEmail (value) {
    this.searchInputEmail.addValue(value);
  }

  get searchInputPassword() {
    return $('[name="user[password]"]');
  }

  setPass (value) {
    this.searchInputPassword.addValue(value);
  }

  get searchInputUsername() {
    return $('[name="user[login]"]');
  }

  setUserName (value) {
    this.searchInputUsername.addValue(value);
  }
}

module.exports = new FillFields();