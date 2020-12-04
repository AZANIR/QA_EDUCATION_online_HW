class OpenPositions {
  get parent() {
    return $('.pb-md-6');
  }
  get childElements() {
    return this.parent.$$('h3[class*="py-4"]');
  }
  get getTextForLi() {
    return this.childElements.filter(element => {
      console.log(element.getText());
    });
  }
}

module.exports = new OpenPositions();