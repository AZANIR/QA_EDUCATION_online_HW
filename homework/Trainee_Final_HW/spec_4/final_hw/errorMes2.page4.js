class ErrorMesage2 {
  get searchErrorMesage(){
    return $('.mt-0');
  }

  getErrMes () {
    return this.searchErrorMesage.getText();
  }
}
module.exports = new ErrorMesage2();