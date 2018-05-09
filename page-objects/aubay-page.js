/* global element, browser, by, helper, protractor */

class AubayPage {
  constructor () {
    this.spontaneousCandidateBtn = element(by.css('a.btn:nth-child(4)'))
    this.opportunitiesView = element(by.id('services'))
    this.nameInput = element(by.id('Name'))
    this.telemovelList = element(by.css('#TelemovelList > option:nth-child(31)'))
    this.mobile = element(by.id('Mobile'))
    this.email = element(by.id('Email'))
    this.opportunityModal = element(by.id('myModal'))
    this.tecnology = element(by.css('.select2-search__field'))
    this.submitButton = element(by.id('Save'))
    this.errorToastMessage = element(by.id('toast-container')).element(by.css('div.toast-message'))
    this.closeOpportunityModal = element(by.css('#myModal > div > div > div.modal-header > div:nth-child(1) > div.col-md-2.col-sm-2.col-xs-3 > i'))
    this.level = function (level) {
      return element(by.id('NivelProfissionalId')).element(by.cssContainingText('option', level))
    }
  }

  get () {
    return browser.get('/#')
  }

  scrollToOpportunities () {
    return browser.executeScript('arguments[0].scrollIntoView()', this.opportunitiesView)
  }

  clickSpontaneousCandidateBtn () {
    return helper.click(this.spontaneousCandidateBtn)
  }

  inputName (stringText) {
    return helper.sendKeys(this.nameInput, stringText)
  }

  inputMobile (stringText) {
    return helper.sendKeys(this.mobile, stringText)
  }

  inputEmail (stringText) {
    return helper.sendKeys(this.email, stringText)
  }

  selectTelemovelCountry () {
    return helper.click(this.telemovelList)
  }

  opportunityModalIsDisplayed () {
    return helper.isDisplayed(this.opportunityModal)
  }

  setTecnology (stringText) {
    helper.sendKeys(this.tecnology, stringText)
    return browser.actions().sendKeys(protractor.Key.ENTER).perform()
  }

  setLevel (level) {
    helper.click(this.level(level))
    browser.sleep(1000)
  }

  clickSubmitButton () {
    return helper.click(this.submitButton)
  }

  submitButtonIsDisabled () {
    return this.submitButton.getAttribute('disabled')
  }

  errorToastDisplayed () {
    return helper.isDisplayed(this.errorToastMessage)
  }

  clickCloseOppotunityModal () {
    return helper.click(this.closeOpportunityModal)
  }
}

module.exports = AubayPage
