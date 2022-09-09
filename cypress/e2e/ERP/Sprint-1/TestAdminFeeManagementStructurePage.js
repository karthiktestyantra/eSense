const loginPage = require('../../../support/pageObjects/ERP/LoginPage')
const adminDashboardPage = require('../../../support/pageObjects/ERP/AdminDashboardPage')
const feeManagementFeeStructurePage = require('../../../support/pageObjects/ERP/AdminFeeManagementFeeStructurePage')

describe("Verify Fee Management Fee Structure functionalities", function () {

  before(function () {
    cy.visit(Cypress.env("urlStagingERP"))
  })

  beforeEach(function () {
    cy.fixture("ERP/LoginCredentials").then(function (validLoginData) {
      loginPage.login(validLoginData.adminUsername, validLoginData.adminPassword)
    })
    cy.fixture("ERP/FeeManagement").as("feeManagement")
  })

  
  it("Validate User is able to land on on-boarding process by clicking Fees management module/EE-57/ERP_TC_001", { tags: '@smoke' }, function () {
    adminDashboardPage.getFeeManagementPage()
    feeManagementFeeStructurePage.verifyFeeManagementPage(this.feeManagement.feeStructurePageTitle)
  })

  it.skip("Validate set up new fee master option  available when there is no fee structure master created/EE-57/ERP_TC_002", { tags: '@smoke' }, function () {
    feeManagementFeeStructurePage.verifyFeeManagementPageSetUpFeeMasters(this.feeManagement.feeStructurePageTitleSetUpFeeMasters)
    feeManagementFeeStructurePage.verifySetUpFeeMastersIsDisplayed()
  })

  it("Validate navigation flow in the form of tabs available at the top to know the step by step process of fee management mini-onboarding/EE-57/ERP_TC_003", { tags: '@smoke' }, function () {
    feeManagementFeeStructurePage.verifyFeeManagementTabs(this.feeManagement.feeStructurePageFeeStructureTitle, this.feeManagement.feeStructurePagePenaltyMasterTitle, this.feeManagement.feeStructurePageDiscountMasterTitle, this.feeManagement.feeStructurePagePaymentGatewayTitle)
  })

  it("Validate action icon is showing for fee structure when user is on the fees structure tab/EE-57/ERP_TC_004", { tags: '@smoke' }, function () {
    feeManagementFeeStructurePage.verifyActionsTab()
  })

  it("Validate the user is able to see the option to setup new fee master or Add new as the user logs in and is in the fee management mini-onboarding process flow/EE-79/ERP_TC_010", { tags: '@smoke' }, function () {
    feeManagementFeeStructurePage.verifyAddNewFeeStructurePopUp(this.feeManagement.addNewBtnPageTitle1, this.feeManagement.addNewBtnPageTitle2)
  })
})