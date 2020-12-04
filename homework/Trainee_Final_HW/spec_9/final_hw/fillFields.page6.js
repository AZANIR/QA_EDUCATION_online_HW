class FillFields {

  get searchInputEmail() {
    return $('#user_email');
  }

  setEmail (value) {
    this.searchInputEmail.addValue(value);
  }

  get searchInputPassword() {
    return $('#user_password');
  }

  setPass (value) {
    this.searchInputPassword.addValue(value);
  }

  get searchInputUsername() {
    return $('#user_login');
  }

  setUserName (value) {
    this.searchInputUsername.addValue(value);
  }
}

module.exports = new FillFields();