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

  it('Validate an error message stating error message “End Date Required“ appears if the user do not select any valid start date ',{tags:'@somke'},function () {
    adminDashboardPage.navigateToFeeSetUpPage()
    feeManagementFeeStructurePage.clickOnSetUpFeeMastersButton()
    feeManagementFeeStructurePage.getNewStudentCheckBox().click()
    feeManagementFeeStructurePage.getExisitingCheckBox().click()
 })
})