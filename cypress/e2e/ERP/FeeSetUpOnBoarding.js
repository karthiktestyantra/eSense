const loginPage = require('../../support/pageObjects/ERP/LoginPage')
const adminDashboardPage = require('../../support/pageObjects/ERP/AdminDashboardPage')
const feeSetUpOnBoardingPage = require('../../support/pageObjects/ERP/FeeSetUpOnBoardingPage')
const dayjs = require('dayjs')

describe("Verify Fee SetUp OnBoarding functionalities", function () {

    before(function () {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit(Cypress.env("urlPreSetupERP"))
        cy.fixture("ERP/LoginCredentials").then(function (loginCredentials) {
            loginPage.login(loginCredentials.adminUsernamePreSetUp, loginCredentials.adminPassword)
        })
    })

    after(function () {
        cy.clearCookies()
        cy.clearLocalStorage()
    })

    beforeEach(function () {
        cy.fixture("ERP/FeeSetUpOnBoarding").as("feeSetUpOnBoarding")
    })

    it("FMS_TC_001 - Validate user can create fee structure by clicking on save button", function () {
        cy.wait(3000)
        adminDashboardPage.navigateToFeeSetUpPage()
        feeSetUpOnBoardingPage.verifyFeeManagementPage(this.feeSetUpOnBoarding.feeStructurePageTitleSetUpFeeMasters)
        feeSetUpOnBoardingPage.clickOnSetUpFeeMastersOrAddNewButton()
        feeSetUpOnBoardingPage.verifyAddNewFeeStructureDetailsPage()
        feeSetUpOnBoardingPage.enterAllFeeStructureDetails(this.feeSetUpOnBoarding.feeStructureName, this.feeSetUpOnBoarding.feeStructureDescription, dayjs().format('D'), dayjs().format('D'))
        feeSetUpOnBoardingPage.verifyFeeStructureFeeTypePage()
        feeSetUpOnBoardingPage.verifyFeeStructureFeeInstallmentsPage()
        feeSetUpOnBoardingPage.verifySaveButtonFeeStructure(this.feeSetUpOnBoarding.feeStructureName)
        feeSetUpOnBoardingPage.verifyDeleteButtonFeeStructure(this.feeSetUpOnBoarding.feeStructureName)
    })
})

