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

    afterEach(function () {
        cy.clearCookies()
        cy.clearLocalStorage()
    })

    it("FMS_TC_001 - Validate user can create fee structure by clicking on save button", function () {
        cy.wait(3000)
        feeSetUpOnBoardingPage.verifyFeeManagementPage(this.feeSetUpOnBoarding.feeStructurePageTitleSetUpFeeMasters)
        feeSetUpOnBoardingPage.verifyDeleteButtonAllFeeStructure()
        cy.wait(2000)
        feeSetUpOnBoardingPage.clickOnSetUpFeeMastersButton()
        feeSetUpOnBoardingPage.verifyAddNewFeeStructureDetailsPage()
        feeSetUpOnBoardingPage.enterAllFeeStructureDetails(this.feeSetUpOnBoarding.feeStructureName1, this.feeSetUpOnBoarding.feeStructureDescription, dayjs().format('D'), dayjs().format('D'), this.feeSetUpOnBoarding.feeStructureGrade1)
        feeSetUpOnBoardingPage.verifyFeeStructureFeeTypePage()
        feeSetUpOnBoardingPage.verifyFeeStructureFeeInstallmentsPage()
        feeSetUpOnBoardingPage.verifySaveButtonFeeStructure(this.feeSetUpOnBoarding.feeStructureName1, this.feeSetUpOnBoarding.feeStructureGrade1)
    })

    it("FMS_TC_002 - Validate user can create fee structure by clicking on save and add new button", function () {
        cy.wait(2000)
        feeSetUpOnBoardingPage.clickOnAddNewButton()
        feeSetUpOnBoardingPage.verifyAddNewFeeStructureDetailsPage()
        feeSetUpOnBoardingPage.enterAllFeeStructureDetails(this.feeSetUpOnBoarding.feeStructureName2, this.feeSetUpOnBoarding.feeStructureDescription, dayjs().format('D'), dayjs().format('D'), this.feeSetUpOnBoarding.feeStructureGrade2)
        feeSetUpOnBoardingPage.verifyFeeStructureFeeTypePage()
        feeSetUpOnBoardingPage.verifyFeeStructureFeeInstallmentsPage()
        feeSetUpOnBoardingPage.verifySaveAddNewButtonFeeStructure(this.feeSetUpOnBoarding.feeStructureName2)
        cy.wait(4000)
        feeSetUpOnBoardingPage.verifyAddNewFeeStructureDetailsPage()
        feeSetUpOnBoardingPage.getFeeStructureDeletedMsgCloseIcon().click()
        cy.isVisible(feeSetUpOnBoardingPage.getFeeStructureNameInListDynamic(this.feeSetUpOnBoarding.feeStructureName2, this.feeSetUpOnBoarding.feeStructureGrade2))
    })

    it("FMS_TC_003 - Validate user can edit the fee structure and save", function () {
        cy.wait(2000)
        feeSetUpOnBoardingPage.verifyEditButtonSaveFeeStructure(this.feeSetUpOnBoarding.feeStructureName1)
        feeSetUpOnBoardingPage.enterAllEditFeeStructureDetails(this.feeSetUpOnBoarding.feeStructureName3, this.feeSetUpOnBoarding.feeStructureDescription, this.feeSetUpOnBoarding.feeStructureGrade3)
        feeSetUpOnBoardingPage.verifyFeeStructureFeeTypePage()
        feeSetUpOnBoardingPage.verifyFeeInstallmentsCheckboxChecked()
        feeSetUpOnBoardingPage.verifyFeeStructureFeeInstallmentsPage()
        feeSetUpOnBoardingPage.verifySaveButtonFeeStructure(this.feeSetUpOnBoarding.feeStructureName3, this.feeSetUpOnBoarding.feeStructureGrade3)
    })

    it("FMS_TC_004 - Validate user can edit the fee structure and Save&AddNew", function () {
        cy.wait(2000)
        feeSetUpOnBoardingPage.verifyEditButtonSaveFeeStructure(this.feeSetUpOnBoarding.feeStructureName2)
        feeSetUpOnBoardingPage.enterAllEditFeeStructureDetails(this.feeSetUpOnBoarding.feeStructureName4, this.feeSetUpOnBoarding.feeStructureDescription, this.feeSetUpOnBoarding.feeStructureGrade4)
        feeSetUpOnBoardingPage.verifyFeeStructureFeeTypePage()
        feeSetUpOnBoardingPage.verifyFeeInstallmentsCheckboxChecked()
        feeSetUpOnBoardingPage.verifyFeeStructureFeeInstallmentsPage()
        feeSetUpOnBoardingPage.verifySaveAddNewButtonFeeStructure(this.feeSetUpOnBoarding.feeStructureName4)
        cy.wait(4000)
        feeSetUpOnBoardingPage.verifyAddNewFeeStructureDetailsPage()
        feeSetUpOnBoardingPage.getFeeStructureDeletedMsgCloseIcon().click()
        cy.isVisible(feeSetUpOnBoardingPage.getFeeStructureNameInListDynamic(this.feeSetUpOnBoarding.feeStructureName4, this.feeSetUpOnBoarding.feeStructureGrade4))
    })

    it("FMS_TC_005 - Validate user can be able to delete the fee structures", function () {
        cy.wait(2000)
        feeSetUpOnBoardingPage.verifyDeleteButtonFeeStructure(this.feeSetUpOnBoarding.feeStructureName3)
        feeSetUpOnBoardingPage.verifyDeleteButtonFeeStructure(this.feeSetUpOnBoarding.feeStructureName4)
    })

    it("FMS_TC_006 - Validate user can't able to save the fee structure", function () {
        cy.wait(2000)
        feeSetUpOnBoardingPage.clickOnSetUpFeeMastersButton()
        feeSetUpOnBoardingPage.verifyAddNewFeeStructureDetailsPage()
        feeSetUpOnBoardingPage.enterAllFeeStructureDetails(this.feeSetUpOnBoarding.feeStructureName1, this.feeSetUpOnBoarding.feeStructureDescription, dayjs().format('D'), dayjs().format('D'), this.feeSetUpOnBoarding.feeStructureGrade1)
        feeSetUpOnBoardingPage.verifyFeeStructureFeeTypePage()
        feeSetUpOnBoardingPage.verifyFeeStructureFeeInstallmentsPage()
        feeSetUpOnBoardingPage.verifyCancelButtonFeeStructure(this.feeSetUpOnBoarding.feeStructureName1)
    })
})

//Author - Karthik

