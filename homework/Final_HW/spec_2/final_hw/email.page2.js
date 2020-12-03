class EmailField {

  get searchInput() {
    return $('[id="user[email]-footer"]');
  }

  setEmail (value) {
    this.searchInput.addValue(value);
  }
}

module.exports = new EmailField();