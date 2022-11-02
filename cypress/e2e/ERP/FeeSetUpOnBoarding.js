const loginPage = require('../../support/pageObjects/ERP/LoginPage')
const adminDashboardPage = require('../../support/pageObjects/ERP/AdminDashboardPage')
const feeSetUpOnBoardingPage = require('../../support/pageObjects/ERP/FeeSetUpOnBoardingPage')
const dayjs = require('dayjs')

describe("Verify Fee SetUp OnBoarding functionalities", function () {

    before(function () {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit(Cypress.env("urlPreSetupERP"))
        cy.fixture("ERP/LoginCredentials").then(function (loginCredentials) {
            loginPage.login(loginCredentials.adminUsernamePreSetUp, loginCredentials.adminPassword)
        })
    })

    beforeEach(function () {
        cy.fixture("ERP/FeeSetUpOnBoarding").as("feeSetUpOnBoarding")
    })

    it("FMS_TC_001 - Validate user can create fee structure by clicking on save button", function () {
        adminDashboardPage.navigateToFeeSetUpPage()  
        feeSetUpOnBoardingPage.verifyFeeManagementPage(this.feeSetUpOnBoarding.feeStructurePageTitleSetUpFeeMasters)
        feeSetUpOnBoardingPage.clickOnSetUpFeeMastersOrAddNewButton()
        feeSetUpOnBoardingPage.verifyAddNewFeeStructureDetailsPage()
        feeSetUpOnBoardingPage.enterAllFeeStructureDetails(this.feeSetUpOnBoarding.feeStructureName, this.feeSetUpOnBoarding.feeStructureDescription, dayjs().format('D'), dayjs().format('D'))
        cy.wait(1500)
        feeSetUpOnBoardingPage.getAddFeeStructureFeeTypeTabs().should('be.visible').should('have.length', 4)
        feeSetUpOnBoardingPage.getMandatoryFeeBtn().last().click()
        feeSetUpOnBoardingPage.getFeeAmountTextField().each(($el, index) => {
            cy.wrap($el).clear().type((index + 1) * 1000)
        })
        cy.forceClick(feeSetUpOnBoardingPage.getContinueButton())
        cy.wait(1500)
        feeSetUpOnBoardingPage.getAddCustomButton().click()
        feeSetUpOnBoardingPage.getFeeInstallmentsCheckboxes().each(($el) => {
            cy.wrap($el).click()
        })
        feeSetUpOnBoardingPage.getFeeInstallmentNameTextfield().type('Special Fee')
        feeSetUpOnBoardingPage.getFeeInstallmentsSetAsDefaultBtn().first().click()
        feeSetUpOnBoardingPage.getFeeInstallmentsDropdowns().each(($el) => {
            cy.wrap($el).click()
            cy.focused().click()
            cy.wait(1000)
        })
        feeSetUpOnBoardingPage.getFeeInstallmentsCalenderIcons().each(($el, index) => {
            if (index < 7) {
                cy.wrap($el).scrollIntoView().click()
                cy.wait(1500)
                feeSetUpOnBoardingPage.getFeeInstallmentsCalenderYearIcon().scrollIntoView().click()
                cy.contains('2023').click({ force: true })
                cy.wait(1000)
                feeSetUpOnBoardingPage.getEndDateLeftArrowIcon().click()
                cy.wait(1000)
                feeSetUpOnBoardingPage.getEndDate(index + 3).click()
            }
        })
        feeSetUpOnBoardingPage.getFeeInstallmentsCalenderIcons().last().then(($el) => {
            cy.wrap($el).click()
            cy.wait(1500)
            feeSetUpOnBoardingPage.getFeeStructureScrollBar().scrollTo('top')
            cy.wait(1000)
            cy.focused().click({ force: true })
        })
    })
})

