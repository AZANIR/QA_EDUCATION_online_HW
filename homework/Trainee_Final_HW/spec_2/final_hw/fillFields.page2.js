class FillFields {

  get searchInputEmail() {
    return $('[id="user[email]-footer"]');
  }

  setEmail (value) {
    this.searchInputEmail.addValue(value);
  }

  get searchInputPassword() {
    return $('[id="user[password]-footer"]');
  }

  setPass (value) {
    this.searchInputPassword.addValue(value);
  }

  get searchInputUsername() {
    return $('[id="user[login]-footer"]');
  }

  setUserName (value) {
    this.searchInputUsername.addValue(value);
  }
}

module.exports = new FillFields();