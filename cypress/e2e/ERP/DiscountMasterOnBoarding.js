const loginPage = require('../../support/pageObjects/ERP/LoginPage')
const adminDashboardPage = require('../../support/pageObjects/ERP/AdminDashboardPage')
const feeSetUpOnBoardingPage = require('../../support/pageObjects/ERP/FeeSetUpOnBoardingPage')
const discountMasterOnBoardingPage = require('../../support/pageObjects/ERP/DiscountMasterOnBoardingPage')
const dayjs = require('dayjs')

describe("Verify Fee SetUp OnBoarding functionalities", function () {

  before(function () {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit(Cypress.env("urlPostSetupERP"))
    cy.fixture("ERP/LoginCredentials").then(function (loginCredentials) {
      loginPage.login(loginCredentials.adminUsernamePostSetUp, loginCredentials.adminPassword)
    })
    cy.saveLocalStorage();
  })

  beforeEach(function () {
    cy.restoreLocalStorage();
    cy.fixture("ERP/PenaltyMasterCredentials").as("PenaltyMaster")
  })


  it("TC_002 - Validate user is able to create a discount master", function () {
    adminDashboardPage.navigateToFeeSetUpPage()
    cy.wait(1000)
    feeSetUpOnBoardingPage.clickOnFeeStructureContinueBtn()
    cy.wait(1000)
    feeSetUpOnBoardingPage.clickOnFeeStructureContinueBtn()
    cy.wait(1000)
    discountMasterOnBoardingPage.clickOnAddNewBtn()
    discountMasterOnBoardingPage.fillingTheDetailsInDiscountMasterPopUp()
    discountMasterOnBoardingPage.verifyDisountMasterFunctionalities()
    cy.wait(1000)
    discountMasterOnBoardingPage.verifyCreatedDiscountNameInDiscountMasterPage()
  })

  it("TC_003 - Validate user is able to create a discount master after click on Save and Add Button", function () {
    cy.wait(3000)
    discountMasterOnBoardingPage.clickOnAddNewBtn()
    cy.wait(1000)
    discountMasterOnBoardingPage.fillingTheDetailsInDiscountMasterPopUp()
    discountMasterOnBoardingPage.verifyDisountMasterFunctionalitiesWithSaveAndAdd()
  })

  it("TC_004 - Validate user is able to cancel a new  discount master", function () {
    cy.wait(1000)
    discountMasterOnBoardingPage.clickOnAddNewBtn()
    discountMasterOnBoardingPage.fillingTheDetailsInDiscountMasterPopUp()
    discountMasterOnBoardingPage.verifyDisountMasterFunctionalitiesWithCancel()
  })

  it("TC_005 Validate user is able to create a Quota discount with custom quota", function () {
    cy.wait(1000)
    discountMasterOnBoardingPage.clickOnAddNewBtn()
    discountMasterOnBoardingPage.fillingTheDetailsInDiscountMasterPopUp()
    discountMasterOnBoardingPage.verifyQuotaDiscountFunctionalities()
  })

})