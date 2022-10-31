const loginPage = require('../../support/pageObjects/ERP/LoginPage')
const adminDashboardPage = require('../../support/pageObjects/ERP/AdminDashboardPage')
const feeSetUpOnBoardingPage = require('../../support/pageObjects/ERP/FeeSetUpOnBoardingPage')
const dayjs = require('dayjs')

describe("Verify Fee SetUp OnBoarding functionalities", function () {

  before(function () {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit(Cypress.env("urlTopSchoolERP"))
    cy.fixture("ERP/LoginCredentials").then(function (loginCredentials) {
      loginPage.login(loginCredentials.adminUsernameTopSchool, loginCredentials.adminPassword)
    })
  })

  beforeEach(function () {
    cy.fixture("ERP/FeeSetUpOnBoarding").as("feeSetUpOnBoarding")
  })

  it("FMS_TC_001 - Validate user can create fee structure by clicking on save button", function () {
    adminDashboardPage.navigateToFeeSetUpPage()
    feeSetUpOnBoardingPage.verifyFeeManagementPage(this.feeSetUpOnBoarding.feeStructurePageTitleSetUpFeeMasters)
  })

})