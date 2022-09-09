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

  
  it("Validate User is able to land on on-boarding process by clicking Fees management module/EE-57/ERP_TC_001", { tags: '@smoke' }, function () {
    adminDashboardPage.navigateToFeeSetUpPage()
    feeManagementFeeStructurePage.verifyFeeManagementPage(this.feeManagement.feeStructurePageTitle)
  })

  it.skip("Validate set up new fee master option  available when there is no fee structure master created/EE-57/ERP_TC_002", { tags: '@smoke' }, function () {
    feeManagementFeeStructurePage.verifyFeeManagementPageSetUpFeeMasters(this.feeManagement.feeStructurePageTitleSetUpFeeMasters)
    feeManagementFeeStructurePage.verifySetUpFeeMastersIsDisplayed()
  })

  it("Validate action icon is showing for fee structure when user is on the fees structure tab/EE-57/ERP_TC_004", { tags: '@smoke' }, function () {
    feeManagementFeeStructurePage.verifyFeeManagementTabs(this.feeManagement.feeStructurePageFeeStructureTitle, this.feeManagement.feeStructurePagePenaltyMasterTitle, this.feeManagement.feeStructurePageDiscountMasterTitle, this.feeManagement.feeStructurePagePaymentGatewayTitle)
    feeManagementFeeStructurePage.verifyActionsTab()
  })

  it("Validate the user is able to see the option to setup new fee master or Add new as the user logs in and is in the fee management mini-onboarding process flow/EE-79/ERP_TC_010", { tags: '@smoke' }, function () {
    feeManagementFeeStructurePage.verifyAddNewFeeStructurePopUp(this.feeManagement.addNewBtnPageTitle1, this.feeManagement.addNewBtnPageTitle2)
  })

  it("Validate the user is displayed with Details tab/modal as they click on setup new fee master button/EE-79/ERP_TC_011", function () {
    feeManagementFeeStructurePage.clickOnSetUpFeeMastersButton()
    feeManagementFeeStructurePage.verifyAddNewFeeStructurePopUp(this.feeManagement.addNewBtnPageTitle1, this.feeManagement.addNewBtnPageTitle2)
    feeManagementFeeStructurePage.verifyAddNewFeeStructureDetailsPage()
  // })

  // it("Validate user can navigate to different tabs showing lock icon only by clicking continue button./EE-57/ERP_TC_007", { tags: '@smoke' }, function () {
    feeManagementFeeStructurePage.enterAllDetails("school","description")
  })
})