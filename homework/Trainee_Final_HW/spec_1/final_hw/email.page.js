class EmailField {

  get searchInput() {
    return $('[name="user[email]"]');
  }

  setEmail (value) {
    this.searchInput.addValue(value);
  }
}

module.exports = new EmailField();