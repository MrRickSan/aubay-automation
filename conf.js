var Helper = require('./support/helper')
var chai = require('chai')
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)

exports.config = {
  directConnect: true,

  baseUrl: 'http://www.aubay.pt',

  // The details of execution platform
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [ 'lang=en-us', 'disable-infobars' ],
      prefs: {
        'profile.managed_default_content_settings.notifications': 1,
        'credentials_enable_service': false,
        'profile': {'password_manager_enabled': false}
      }
    }
  },

  resultJsonOutputFile: './reports/json/cucumber_report.json',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // cucumber command line options
  cucumberOpts: {
    strict: true,
    require: ['./step-definitions/*.js', './support/*.js'],
    format: 'pretty',
    tags: ['@opportunity'] // Tags are used for identify the test scenario or feature to be executed
  },

  specs: ['./features/*.feature'],

  onPrepare: () => {
    browser.driver.manage().deleteAllCookies() // eslint-disable-line
    browser.manage().window().maximize() // eslint-disable-line
    browser.ignoreSynchronization = true // eslint-disable-line
    global.expect = chai.expect // Chai is a assertion library used on steps
    global.helper = new Helper()
  }

}
