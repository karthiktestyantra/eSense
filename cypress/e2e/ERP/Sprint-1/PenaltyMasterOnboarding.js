const loginPage = require('../../../support/pageObjects/ERP/LoginPage')
const adminDashboardPage = require('../../../support/pageObjects/ERP/AdminDashboardPage')
const penaltyMasterOnBoardingPage = require('../../../support/pageObjects/ERP/PenaltyMasterOnBoardingPage')
const dayjs = require('dayjs')
describe("Verify Penalty Master functionalities", function () {

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

      it.skip("ERP_TC_001 - Validate user is able to navigate from Fee structure master to Penalty master tab.", function () {
        adminDashboardPage.navigateToFeeSetUpPage()
        penaltyMasterOnBoardingPage.getPresetupPenaltyMasterContinueBtn().click()

      })

      it("ERP_TC_002 - Validate user is navigate from Fee structure master to Penalty master module tab.", function () {
        adminDashboardPage.navigateToFeeSetUpPage()
        penaltyMasterOnBoardingPage.getPresetupPenaltyMasterContinueBtn().click()
        penaltyMasterOnBoardingPage.getPenaltyMasterTitleTxt().should('have.text',' Penalty Master ')
        penaltyMasterOnBoardingPage.getPenaltyMasterAddBtn().should('be.visible')

      })

      it.skip("ERP_TC_003 - Validate user is create the penalty by using the 'Setup Penalty Masters' button", function () {

      })

      it("ERP_TC_004 - Validate user is navigate from Fee structure master to Penalty master module tab.", function () {
        penaltyMasterOnBoardingPage.getPenaltyMasterAddBtn().click()
        penaltyMasterOnBoardingPage.getPenaltyNameTextField().type(this.PenaltyMaster.penaltyName)
        penaltyMasterOnBoardingPage.getPenaltyTypeDropdown().click()
        penaltyMasterOnBoardingPage.getPenaltyTypeDropdownValue().contains(this.PenaltyMaster.PenaltyTypeValue).click()


      })
     

    })