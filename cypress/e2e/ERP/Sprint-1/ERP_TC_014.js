const loginPage = require('../../../support/pageObjects/ERP/LoginPage')
const adminDashboardPage = require('../../../support/pageObjects/ERP/AdminDashboardPage')
const feeManagementFeeStructurePage = require('../../../support/pageObjects/ERP/AdminFeeManagementFeeStructurePage')

describe("Verify Fee Management Fee Structure functionalities", function () {

  before(function () {
    cy.visit(Cypress.env("urlStagingERP"))
    cy.fixture("ERP/LoginCredentials").then(function (validLoginData) {
      loginPage.login(validLoginData.adminUsername, validLoginData.adminPassword)
    })
  })

  beforeEach(function () {
    cy.fixture("ERP/FeeManagement").as("feeManagement")
  })

  it('Validate an error message appears if the user do not enter any data into "Fee structure name" text field ',{tags:'@somke'},function () {
    adminDashboardPage.navigateToFeeSetUpPage()
    feeManagementFeeStructurePage.clickOnSetUpFeeMastersButton()
    feeManagementFeeStructurePage.getContinueButton().click()
    cy.xpath('//p[text()="Fee Structure Name Required"]').should('have.text','Fee Structure Name Required')
    })
})