/* global expect, browser, require, module */

var AubayPage = require('../page-objects/aubay-page')

var OpportunitySteps = function () {
  'use strict'

  let aubayPage = new AubayPage()

  this.setDefaultTimeout(3 * 10000)

  this.Given(/^I am on the aubay web page$/, async function () {
    await browser.driver.manage().deleteAllCookies()
    await browser.refresh()
    return aubayPage.get()
  })

  this.When(/^I click on the spontaneous candidate button$/, function () {
    return aubayPage.clickSpontaneousCandidateBtn()
  })

  this.When(/^I scroll to opportunities view$/, function () {
    return aubayPage.scrollToOpportunities()
  })

  this.Then(/^The opportunity form screen is displayed$/, function () {
    return aubayPage.opportunityModalIsDisplayed()
  })

  this.When(/^I input the name "([^"]*)"$/, function (name) {
    return aubayPage.inputName(name)
  })

  this.When(/^I select the mobile country$/, function () {
    return aubayPage.selectTelemovelCountry()
  })

  this.When(/^I input the mobile number "([^"]*)"$/, function (number) {
    return aubayPage.inputMobile(number)
  })

  this.When(/^I input the email address "([^"]*)"$/, function (email) {
    return aubayPage.inputEmail(email)
  })

  this.When(/^I set "([^"]*)" tecnology$/, function (tecnology) {
    return aubayPage.setTecnology(tecnology)
  })

  this.When(/^I select "([^"]*)" as professional level/, function (level) {
    return aubayPage.setLevel(level)
  })

  this.When(/^I click on the Submit button$/, function () {
    return aubayPage.clickSubmitButton()
  })

  this.Then(/^The candidature is sent with success$/, function () {
    return expect(aubayPage.submitButtonIsDisabled()).to.eventually.equal('true')
  })

  this.Then(/^The error toast message is displayed$/, function () {
    return expect(aubayPage.errorToastDisplayed()).to.eventually.equal(true)
  })

  this.Then(/^I close the opportunity modal$/, async function () {
    return aubayPage.clickCloseOppotunityModal()
  })
}

module.exports = OpportunitySteps
