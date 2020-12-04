class DoWhatever {
  get selectorStartTrial() {
    return $('//a[contains(text(),"Start a free trial")]');
  }
  clickStartTrial() {
    this.selectorStartTrial.click();
  }

  get selectClickElementCloud() {
    return $('//div[@class="h1 " and contains(text(),"Enterprise Cloud")]');
  }
  menuElementClickCloud() {
    this.selectClickElementCloud.click();
  }

  get selectClickElementServer() {
    return $('//div[@class="h1 " and contains(text(),"Enterprise Server")]');
  }
  menuElementClickServer() {
    this.selectClickElementServer.click();
  }

  get firstRepo(){
    return $('ul.repo-list a');
  }
  clickFirstRepo(){
    this.firstRepo.click();
  }

  //check page url
  browserURLisTrue(value) {
    return browser.getUrl().includes(value);
  }

  get radioButton(){
    return $('#contact_request_instance_type_not_sure');
  }
  clickRadioButton(){
    this.radioButton.click();
  }

  get radioButtonYes(){
    return $('#questions_yes');
  }
  clickRadioButtonYes(){
    this.radioButtonYes.click();
  }

  get chekAgreedTerms(){
    return $('#contact_request_agreed_to_terms');
  }
  clickAgreedTerms(){
    this.chekAgreedTerms.click();
  }
  

}

module.exports = new DoWhatever();