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
        feeSetUpOnBoardingPage.enterAllFeeStructureDetails(this.feeSetUpOnBoarding.feeStructureName1, this.feeSetUpOnBoarding.feeStructureDescription, dayjs().format('D'), dayjs().format('D'))
        feeSetUpOnBoardingPage.verifyFeeStructureFeeTypePage()
        feeSetUpOnBoardingPage.verifyFeeStructureFeeInstallmentsPage()
        // feeSetUpOnBoardingPage.verifyCancelButtonFeeStructure(this.feeSetUpOnBoarding.feeStructureName1)
        // feeSetUpOnBoardingPage.clickOnSetUpFeeMastersOrAddNewButton()
        // feeSetUpOnBoardingPage.verifyAddNewFeeStructureDetailsPage()
        // feeSetUpOnBoardingPage.enterAllFeeStructureDetails(this.feeSetUpOnBoarding.feeStructureName1, this.feeSetUpOnBoarding.feeStructureDescription, dayjs().format('D'), dayjs().format('D'))
        // feeSetUpOnBoardingPage.verifyFeeStructureFeeTypePage()
        // feeSetUpOnBoardingPage.verifyFeeStructureFeeInstallmentsPage()
        feeSetUpOnBoardingPage.verifySaveButtonFeeStructure(this.feeSetUpOnBoarding.feeStructureName1)
        feeSetUpOnBoardingPage.verifyEditButtonFeeStructure(this.feeSetUpOnBoarding.feeStructureName1)
        feeSetUpOnBoardingPage.verifyDeleteButtonFeeStructure(this.feeSetUpOnBoarding.feeStructureName1)
        cy.wait(2000)
        feeSetUpOnBoardingPage.clickOnSetUpFeeMastersOrAddNewButton()
        feeSetUpOnBoardingPage.verifyAddNewFeeStructureDetailsPage()
        feeSetUpOnBoardingPage.enterAllFeeStructureDetails(this.feeSetUpOnBoarding.feeStructureName2, this.feeSetUpOnBoarding.feeStructureDescription, dayjs().format('D'), dayjs().format('D'))
        feeSetUpOnBoardingPage.verifyFeeStructureFeeTypePage()
        feeSetUpOnBoardingPage.verifyFeeStructureFeeInstallmentsPage()
        feeSetUpOnBoardingPage.getSaveAddNewButtonFeeStructure(this.feeSetUpOnBoarding.feeStructureName2).click()
    })

    it("FMS_TC_002 - Validate user can create fee structure by clicking on save and add new button", function () {
        feeSetUpOnBoardingPage.verifyAddNewFeeStructureDetailsPage()
        //feeSetUpOnBoardingPage.verifyDeleteButtonFeeStructure(this.feeSetUpOnBoarding.feeStructureName2)
    })
})

//Author - Karthik

