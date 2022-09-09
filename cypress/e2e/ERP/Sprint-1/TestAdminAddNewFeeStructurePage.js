const loginPage = require('../../../support/pageObjects/ERP/LoginPage')
const adminDashboardPage = require('../../../support/pageObjects/ERP/AdminDashboardPage')
const feeManagementFeeStructurePage = require('../../../support/pageObjects/ERP/AdminFeeManagementFeeStructurePage')
const AddNewFeeStructurePage = require('../../../support/pageObjects/ERP/AdminAddNewFeeStructurePage')

describe("Verify add new Fee Management Fee Structure functionalities", function () {

  before(function () {
    cy.visit(Cypress.env("urlStagingERP"))
  })

  beforeEach(function () {
    cy.fixture("ERP/LoginCredentials").then(function (validLoginData) {
      loginPage.login(validLoginData.adminUsername, validLoginData.adminPassword)
    })
    cy.fixture("ERP/FeeManagement").as("feeManagement")
  })

  it.only("Validate the user is displayed with Details tab/modal as they click on setup new fee master button/EE-79/ERP_TC_011", function () {
    adminDashboardPage.getFeeManagementPage()
    feeManagementFeeStructurePage.clickOnSetUpFeeMastersButton()
    feeManagementFeeStructurePage.verifyAddNewFeeStructurePopUp(this.feeManagement.addNewBtnPageTitle1, this.feeManagement.addNewBtnPageTitle2)
    feeManagementFeeStructurePage.verifyAddNewFeeStructureDetailsPage()
  })

  it("Validate user can navigate to different tabs showing lock icon only by clicking continue button./EE-57/ERP_TC_007", { tags: '@smoke' }, function () {
    AddNewFeeStructurePage.enterAllDetails("school","description")
  })
})