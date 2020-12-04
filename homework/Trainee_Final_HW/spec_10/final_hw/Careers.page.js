class Careers {
  get selectorIntoViewCareers() {
    return $('footer a[href="/about/careers"]');
  }
  scrollIntoViewCareers() {
    this.selectorIntoViewCareers.scrollIntoView();
  }
  clickIntoViewCareers() {
    this.selectorIntoViewCareers.click();
  }

  get selectOpenPosition() {
    return $('a[href="#positions"]');
  }
  clickOpenPosition() {
    this.selectOpenPosition.click();
  }
  //h3[class*="py-4"]
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

module.exports = new Careers();