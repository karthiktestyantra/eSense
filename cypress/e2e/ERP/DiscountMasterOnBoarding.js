const loginPage = require('../../support/pageObjects/ERP/LoginPage')
const adminDashboardPage = require('../../support/pageObjects/ERP/AdminDashboardPage')
const feeSetUpOnBoardingPage = require('../../support/pageObjects/ERP/FeeSetUpOnBoardingPage')
const penaltyMasterOnBoardingPage = require('../../support/pageObjects/ERP/PenaltyMasterOnBoardingPage')
const dayjs = require('dayjs')

describe("Verify Fee SetUp OnBoarding functionalities", function () {

  beforeEach(function () {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit(Cypress.env("urlPreSetupERP"))
    cy.fixture("ERP/LoginCredentials").then(function (loginCredentials) {
      loginPage.login(loginCredentials.adminUsernamePreSetUp, loginCredentials.adminPassword)
    })
    cy.fixture("ERP/FeeSetUpOnBoarding").as("feeSetUpOnBoarding")
  })

  it("TC_002 - Validate user is able to create a discount master", function () {
    adminDashboardPage.navigateToFeeSetUpPage()
    cy.wait(1000)
    feeSetUpOnBoardingPage.clickOnFeeStructureContinueBtn()
    cy.wait(1000)
    feeSetUpOnBoardingPage.clickOnFeeStructureContinueBtn()
    cy.wait(1000)
    penaltyMasterOnBoardingPage.createAndVerifyDisountMasterFunctionalities()
    cy.wait(1000)
    penaltyMasterOnBoardingPage.verifyCreatedDiscountNameInDiscountMasterPage()
  })

  it("TC_003 - Validate user is able to create a discount master", function () {
    adminDashboardPage.navigateToFeeSetUpPage()
    cy.wait(1000)
    feeSetUpOnBoardingPage.clickOnFeeStructureContinueBtn()
    cy.wait(1000)
    feeSetUpOnBoardingPage.clickOnFeeStructureContinueBtn()
    cy.wait(1000)
    penaltyMasterOnBoardingPage.createAndVerifyDisountMasterFunctionalitiesWithSaveAndAdd()
  })
})