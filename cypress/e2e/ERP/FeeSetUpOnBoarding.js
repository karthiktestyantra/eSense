const loginPage = require('../../support/pageObjects/ERP/LoginPage')
const adminDashboardPage = require('../../support/pageObjects/ERP/AdminDashboardPage')
const feeSetUpOnBoardingPage = require('../../support/pageObjects/ERP/FeeSetUpOnBoardingPage')
const dayjs = require('dayjs')

describe("Verify Fee SetUp OnBoarding functionalities", function () {

    before(function () {
        cy.clearCookies()
        cy.clearLocalStorage()
    })

    beforeEach(function () {
        cy.visit(Cypress.env("urlPreSetupERP"))
        cy.fixture("ERP/LoginCredentials").then(function (loginCredentials) {
            loginPage.login(loginCredentials.adminUsernamePreSetUp, loginCredentials.adminPassword)
        })
        cy.fixture("ERP/FeeSetUpOnBoarding").as("feeSetUpOnBoarding")
        adminDashboardPage.navigateToPreSetUpPage()
    })

    after(function () {

    })

    afterEach(function () {
        cy.clearCookies()
        cy.clearLocalStorage()
    })


    it("FMS_TC_001 - Validate user can create fee structure by clicking on save button", function () {
        cy.wait(3000)
        feeSetUpOnBoardingPage.verifyFeeManagementPage(this.feeSetUpOnBoarding.feeStructurePageTitleSetUpFeeMasters)
        feeSetUpOnBoardingPage.clickOnSetUpFeeMastersButton()
        feeSetUpOnBoardingPage.verifyAddNewFeeStructureDetailsPage()
        feeSetUpOnBoardingPage.enterAllFeeStructureDetails(this.feeSetUpOnBoarding.feeStructureName1, this.feeSetUpOnBoarding.feeStructureDescription, dayjs().format('D'), dayjs().format('D'))
        feeSetUpOnBoardingPage.verifyFeeStructureFeeTypePage()
        feeSetUpOnBoardingPage.verifyFeeStructureFeeInstallmentsPage()
        feeSetUpOnBoardingPage.verifySaveButtonFeeStructure(this.feeSetUpOnBoarding.feeStructureName1)
    })

    it("FMS_TC_002 - Validate user can create fee structure by clicking on save and add new button", function () {
        cy.wait(2000)
        feeSetUpOnBoardingPage.clickOnAddNewButton()
        feeSetUpOnBoardingPage.verifyAddNewFeeStructureDetailsPage()
        feeSetUpOnBoardingPage.enterAllFeeStructureDetails(this.feeSetUpOnBoarding.feeStructureName2, this.feeSetUpOnBoarding.feeStructureDescription, dayjs().format('D'), dayjs().format('D'))
        feeSetUpOnBoardingPage.verifyFeeStructureFeeTypePage()
        feeSetUpOnBoardingPage.verifyFeeStructureFeeInstallmentsPage()
        //cy.uncaughtException()
        feeSetUpOnBoardingPage.getSaveAddNewButtonFeeStructure().click()
        cy.wait(4000)
        feeSetUpOnBoardingPage.verifyAddNewFeeStructureDetailsPage()


        // feeSetUpOnBoardingPage.verifyEditButtonFeeStructure(this.feeSetUpOnBoarding.feeStructureName1)
        // feeSetUpOnBoardingPage.verifyDeleteButtonFeeStructure(this.feeSetUpOnBoarding.feeStructureName1)
        //feeSetUpOnBoardingPage.verifyDeleteButtonFeeStructure(this.feeSetUpOnBoarding.feeStructureName2)

        // feeSetUpOnBoardingPage.verifyCancelButtonFeeStructure(this.feeSetUpOnBoarding.feeStructureName1)
        // feeSetUpOnBoardingPage.clickOnSetUpFeeMastersOrAddNewButton()
        // feeSetUpOnBoardingPage.verifyAddNewFeeStructureDetailsPage()
        // feeSetUpOnBoardingPage.enterAllFeeStructureDetails(this.feeSetUpOnBoarding.feeStructureName1, this.feeSetUpOnBoarding.feeStructureDescription, dayjs().format('D'), dayjs().format('D'))
        // feeSetUpOnBoardingPage.verifyFeeStructureFeeTypePage()
        // feeSetUpOnBoardingPage.verifyFeeStructureFeeInstallmentsPage()
    })
})

//Author - Karthik

