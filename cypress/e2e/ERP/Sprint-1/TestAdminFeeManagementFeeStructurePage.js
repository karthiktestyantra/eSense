const loginPage = require('../../../support/pageObjects/ERP/LoginPage')
const adminDashboardPage = require('../../../support/pageObjects/ERP/AdminDashboardPage')
const feeManagementFeeStructurePage = require('../../../support/pageObjects/ERP/AdminFeeManagementFeeStructurePage')
const dayjs = require('dayjs')

describe("Verify Fee Management Fee Structure functionalities", function () {

  before(function () {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit(Cypress.env("urlStagingERP"))
    cy.fixture("ERP/LoginCredentials").then(function (validLoginData) {
      loginPage.login(validLoginData.adminUsername, validLoginData.adminPassword)
    })
  })

  beforeEach(function () {
    cy.fixture("ERP/FeeManagement").as("feeManagement")
  })

  it("EE-57/ERP_TC_001 - Validate User is able to land on on-boarding process by clicking Fees management module", { tags: '@smoke' }, function () {
    adminDashboardPage.navigateToFeeSetUpPage()
    feeManagementFeeStructurePage.verifyFeeManagementPage(this.feeManagement.feeStructurePageTitle)
  })

  // it("Validate set up new fee master option  available when there is no fee structure master created/EE-57/ERP_TC_002", { tags: '@smoke' }, function () {
  //   adminDashboardPage.navigateToFeeSetUpPage()
  //   feeManagementFeeStructurePage.verifyFeeManagementPageSetUpFeeMasters(this.feeManagement.feeStructurePageTitleSetUpFeeMasters)
  //   feeManagementFeeStructurePage.verifySetUpFeeMastersIsDisplayed()
  // })

  // it("Validate action icon is showing for fee structure when user is on the fees structure tab/EE-57/ERP_TC_004", { tags: '@smoke' }, function () {
  //   adminDashboardPage.navigateToFeeSetUpPage()
  //   feeManagementFeeStructurePage.verifyFeeManagementTabs(this.feeManagement.feeStructurePageFeeStructureTitle, this.feeManagement.feeStructurePagePenaltyMasterTitle, this.feeManagement.feeStructurePageDiscountMasterTitle, this.feeManagement.feeStructurePagePaymentGatewayTitle)
  //   feeManagementFeeStructurePage.verifyActionsTab()
  // })

  // it("Validate the user is able to see the option to setup new fee master or Add new as the user logs in and is in the fee management mini-onboarding process flow/EE-79/ERP_TC_010", { tags: '@smoke' }, function () {
  //   adminDashboardPage.navigateToFeeSetUpPage()
  //   feeManagementFeeStructurePage.verifyAddNewFeeStructurePopUp(this.feeManagement.addNewBtnPageTitle1, this.feeManagement.addNewBtnPageTitle2)
  // })

  // it("Validate the user is displayed with Details tab/modal as they click on setup new fee master button/EE-79/ERP_TC_011", function () {
  //   adminDashboardPage.navigateToFeeSetUpPage()
  //   feeManagementFeeStructurePage.clickOnSetUpFeeMastersOrAddNewButton()
  //   feeManagementFeeStructurePage.verifyAddNewFeeStructurePopUp(this.feeManagement.addNewBtnPageTitle1, this.feeManagement.addNewBtnPageTitle2)
  //   feeManagementFeeStructurePage.verifyAddNewFeeStructureDetailsPage()
  // })

  // it("Validate user can navigate to different tabs showing lock icon only by clicking continue button./EE-57/ERP_TC_007", { tags: '@smoke' }, function () {
  //   adminDashboardPage.navigateToFeeSetUpPage()
  //   feeManagementFeeStructurePage.clickOnSetUpFeeMastersOrAddNewButton()
  //   feeManagementFeeStructurePage.verifyAddNewFeeStructureDetailsPage()
  //   feeManagementFeeStructurePage.enterAllDetails(this.feeManagement.feeStructureName, this.feeManagement.feeStructureDescription, dayjs().format('D'), Number(dayjs().format('D')) + 5)
  // })

  // it('Validate the user is allowed to add 45 characters in "Fee structure name" text field/EE-79/ERP_TC_013', { tags: '@somke' }, function () {
  //   adminDashboardPage.navigateToFeeSetUpPage()
  //   feeManagementFeeStructurePage.clickOnSetUpFeeMastersButton()
  //   feeManagementFeeStructurePage.validateAddNewFeeStructureNameTextField(this.feeManagement.feeStructureString, this.feeManagement.feeStructureStringLength)
  // })

  // it('Validate an error message appears if the user do not enter any data into "Fee structure name" text field /EE-79/ERP_TC_014', { tags: '@somke' }, function () {
  //   adminDashboardPage.navigateToFeeSetUpPage()
  //   feeManagementFeeStructurePage.clickOnSetUpFeeMastersButton()
  //   feeManagementFeeStructurePage.validateAddNewFeeStructureErrorMessageFeeStructureName(this.feeManagement.feeStructureErrorMessage)
  // })

  // it('Validate the user is able to add data into "Description" text field /EE-79/ERP_TC_015', { tags: '@somke' }, function () {
  //   adminDashboardPage.navigateToFeeSetUpPage()
  //   feeManagementFeeStructurePage.clickOnSetUpFeeMastersOrAddNewButton()
  //   
  // })

  // it('Validate an error message stating error message “Start Date Required“ appears if the user do not select any valid start date EE-79/ERP_TC_017', { tags: '@somke' }, function () {
  //   adminDashboardPage.navigateToFeeSetUpPage()
  //   feeManagementFeeStructurePage.clickOnSetUpFeeMastersOrAddNewButton()
  //   feeManagementFeeStructurePage.validateAnErrorMessageStatingErrorMessage(this.feeManagement.feeStructureName, this.feeManagement.feeStructureDescription,Number(dayjs().format('D')) + 5,this.feeManagement.startDateErrorMessage)
  // })

  // it('Validate an error message stating error message “End Date Required“ appears if the user do not select any valid start date/EE-79/ERP_TC_019 ', { tags: '@somke' }, function () {
  //   adminDashboardPage.navigateToFeeSetUpPage()
  //   feeManagementFeeStructurePage.clickOnSetUpFeeMastersOrAddNewButton()
  //   feeManagementFeeStructurePage.validateAnErrorMessageEndDateErrorMessage(this.feeManagement.feeStructureName, this.feeManagement.feeStructureDescription,dayjs().format('D'),this.feeManagement.endDateErrorMessage)
  // })

  // it('Validate the user is able to select either or both the options New student Existing student in Applicable For section/EE-79/ERP_TC_020 ', { tags: '@somke' }, function () {
  //   adminDashboardPage.navigateToFeeSetUpPage()
  //   feeManagementFeeStructurePage.clickOnSetUpFeeMastersButton()
  //   feeManagementFeeStructurePage.verifyApplicableForStudentCheckbox()
  // })

  // it('Validate the user can select multiple grades and streams from the "Select Grade" and "Stream" drop down list /EE-79/ERP_TC_021', { tags: '@somke' }, function () {
  //   adminDashboardPage.navigateToFeeSetUpPage()
  //   feeManagementFeeStructurePage.clickOnSetUpFeeMastersButton()
  // })


  it.skip("EE-57/ERP_TC_004 - Validate action icon is showing for fee structure when user is on the fees structure tab", { tags: '@smoke' }, function () {
    feeManagementFeeStructurePage.verifyActionsTab()
  })

  it("EE-57/ERP_TC_002 - Validate set up new fee master option  available when there is no fee structure master created", { tags: '@smoke' }, function () {
    feeManagementFeeStructurePage.clickOnAddNewButton()
    feeManagementFeeStructurePage.verifyFeeManagementPageSetUpFeeMasters(this.feeManagement.feeStructurePageTitleSetUpFeeMasters)
    feeManagementFeeStructurePage.verifySetUpFeeMastersIsDisplayed()
  })

  it("EE-57/ERP_TC_003 - Validate navigation flow in the form of tabs available at the top to know the step by step process of fee management mini-onboarding", { tags: '@smoke' }, function () {
    feeManagementFeeStructurePage.verifyFeeManagementTabs(this.feeManagement.feeStructurePageFeeStructureTitle, this.feeManagement.feeStructurePagePenaltyMasterTitle, this.feeManagement.feeStructurePageDiscountMasterTitle, this.feeManagement.feeStructurePagePaymentGatewayTitle)
  })

  it.skip("EE-57/ERP_TC_008 - Validate the continue button is disabled for every tab unless atleast one fee structure master is created", { tags: '@smoke' }, function () {
    feeManagementFeeStructurePage.verifyFeesStructureContinueBtnEveryTab()
  })

  it("EE-79/ERP_TC_011 - Validate the user is displayed with Details tab/modal as they click on setup new fee master button", function () {
    feeManagementFeeStructurePage.clickOnSetUpFeeMastersButton()
    feeManagementFeeStructurePage.verifyAddNewFeeStructurePopUp(this.feeManagement.addNewBtnPageTitle1, this.feeManagement.addNewBtnPageTitle2)
    feeManagementFeeStructurePage.verifyAddNewFeeStructureDetailsPage()
  })

  it.skip("EE-79/ERP_TC_012 - Validate the user is displayed with Details tab/modal as they click on  Add new button", function () {
    feeManagementFeeStructurePage.clickOnAddNewButton()
    feeManagementFeeStructurePage.verifyAddNewFeeStructurePopUp(this.feeManagement.addNewBtnPageTitle1, this.feeManagement.addNewBtnPageTitle2)
    feeManagementFeeStructurePage.verifyAddNewFeeStructureDetailsPage()
  })

  it('EE-79/ERP_TC_014,017,019 - Validate an error message appears if the user do not enter any data into Fee structure name text field, start data and end date', { tags: '@somke' }, function () {
    feeManagementFeeStructurePage.validateAddNewFeeStructureErrorMessageFeeStructureName(this.feeManagement.feeStructureErrorMessage)
    feeManagementFeeStructurePage.validateAnErrorMessageStartDateErrorMessage(this.feeManagement.startDateErrorMessage)
    feeManagementFeeStructurePage.validateAnErrorMessageEndDateErrorMessage(this.feeManagement.endDateErrorMessage)
  })

  it('EE-79/ERP_TC_013,015 - Validate the user is able to enter deatils in the Add New Fee Structure details popup', { tags: '@somke' }, function () {
    feeManagementFeeStructurePage.enterAllFeeStructureDetails(this.feeManagement.feeStructureName, this.feeManagement.feeStructureDescription, Number(dayjs().format('D')), Number(dayjs().format('D')))
  })

})