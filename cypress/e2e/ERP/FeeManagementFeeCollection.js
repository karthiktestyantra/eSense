const loginPage = require('../../support/pageObjects/ERP/LoginPage')
const adminDashboardPage = require('../../support/pageObjects/ERP/AdminDashboardPage')
const feeSetUpOnBoardingPage = require('../../support/pageObjects/ERP/FeeSetUpOnBoardingPage')
const dayjs = require('dayjs')
describe("Verify Fee Collection functionalities", function () {

    before(function () {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit(Cypress.env("urlPostSetupERP"))
        cy.fixture("ERP/LoginCredentials").then(function (loginCredentials) {
          loginPage.login(loginCredentials.adminUsernamePostSetUp, loginCredentials.adminPassword)
        })
      })
    
      beforeEach(function () {
        cy.fixture("ERP/FeeSetUpOnBoarding").as("feeSetUpOnBoarding")
      })

      it("TC_001 - Validate user is able to collect fee", function () {
        
      })
})  

