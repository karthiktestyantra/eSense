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

  it('Validate the user is able to add data into "Description" text field ',{tags:'@somke'},function () {
    adminDashboardPage.navigateToFeeSetUpPage()
    feeManagementFeeStructurePage.clickOnSetUpFeeMastersButton()
    feeManagementFeeStructurePage.getDescriptionTextAreaField().type('my data')
    cy.contains('my data')
    })
})