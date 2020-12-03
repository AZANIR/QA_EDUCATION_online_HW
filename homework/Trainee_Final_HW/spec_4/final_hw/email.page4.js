class EmailField {

  get searchInput() {
    return $('#email_field');
  }

  setEmail (value) {
    this.searchInput.addValue(value);
  }
}

module.exports = new EmailField();