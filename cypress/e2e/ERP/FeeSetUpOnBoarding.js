const loginPage = require('../../../support/pageObjects/ERP/LoginPage')
const adminDashboardPage = require('../../../support/pageObjects/ERP/AdminDashboardPage')
const feeSetUpOnBoardingPage = require('../../../support/pageObjects/ERP/FeeSetUpOnBoardingPage')
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

  it("EE-57/ERP_TC_001 - Validate User is able to land on on-boarding process by clicking Fees management module", { tags: '@smoke' }, function () {
    adminDashboardPage.navigateToFeeSetUpPage()
    feeManagementFeeStructurePage.verifyFeeManagementPage(this.feeManagement.feeStructurePageTitleSetUpFeeMasters)
  })

})