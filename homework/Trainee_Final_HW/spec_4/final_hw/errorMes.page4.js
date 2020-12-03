class ErrorMesage {
  get searchErrorMesage(){
    return $('//div[contains(@class,"flash-error")]');
  }

  getErrMes () {
    return this.searchErrorMesage.getText();
  }
}
module.exports = new ErrorMesage();