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

  get searchInputUsernameServer() {
    return $('#contact_request_name');
  }
  setUserNameServer (value) {
    this.searchInputUsernameServer.addValue(value);
  }
  
  get searchInputRequestName() {
    return $('#contact_request_organization_name');
  }
  setRequestName(value) {
    this.searchInputRequestName.addValue(value);
  }

  get searchInputRequestEmail() {
    return $('#contact_request_email');
  }
  setRequestEmail (value) {
    this.searchInputRequestEmail.addValue(value);
  }

  get textAreaQList() {
    return $('#questions-list');
  }
  setTextAreaQList(value) {
    this.textAreaQList.addValue(value);
  }

}

module.exports = new FillFields();