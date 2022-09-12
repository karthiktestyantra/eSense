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

  it('Validate the user is allowed to add 45 characters in "Fee structure name" text field',{tags:'@somke'},function () {
    adminDashboardPage.navigateToFeeSetUpPage()
    feeManagementFeeStructurePage.clickOnSetUpFeeMastersButton()
    feeManagementFeeStructurePage.getFeeStructureNameTextfield().type('1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHI').invoke('val').should('have.length',45)
    })
})