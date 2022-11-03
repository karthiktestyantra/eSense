const loginPage = require('../../support/pageObjects/ERP/LoginPage')
const adminDashboardPage = require('../../support/pageObjects/ERP/AdminDashboardPage')
const feeSetUpOnBoardingPage = require('../../support/pageObjects/ERP/FeeSetUpOnBoardingPage')
const discountMasterOnBoardingPage = require('../../support/pageObjects/ERP/DiscountMasterOnBoardingPage')
const dayjs = require('dayjs')

describe("Verify Fee SetUp OnBoarding functionalities", function () {

  beforeEach(function () {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit(Cypress.env("urlPostSetupERP"))
    cy.fixture("ERP/LoginCredentials").then(function (loginCredentials) {
      loginPage.login(loginCredentials.adminUsernamePostSetUp, loginCredentials.adminPassword)
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
    discountMasterOnBoardingPage.createAndVerifyDisountMasterFunctionalities()
    cy.wait(1000)
    discountMasterOnBoardingPage.verifyCreatedDiscountNameInDiscountMasterPage()
  })

  it("TC_003 - Validate user is able to create a discount master", function () {
    adminDashboardPage.navigateToFeeSetUpPage()
    cy.wait(1000)
    feeSetUpOnBoardingPage.clickOnFeeStructureContinueBtn()
    cy.wait(1000)
    feeSetUpOnBoardingPage.clickOnFeeStructureContinueBtn()
    cy.wait(1000)
    discountMasterOnBoardingPage.createAndVerifyDisountMasterFunctionalitiesWithSaveAndAdd()
  })
})