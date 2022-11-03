const loginPage = require('../../support/pageObjects/ERP/LoginPage')
const adminDashboardPage = require('../../support/pageObjects/ERP/AdminDashboardPage')
const feeSetUpOnBoardingPage = require('../../support/pageObjects/ERP/FeeSetUpOnBoardingPage')
const feeManagementFeeCollectionPage = require('../../support/pageObjects/ERP/FeeManagementFeeCollectionPage')
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
        cy.viewport(1920, 1080)
        cy.fixture("ERP/FeeCollection").as("feeCollection")
      })

      it("TC_001 - Validate user is able to collect fee", function () {
        adminDashboardPage.getSideMenuFeeManagementIcon().click({force:true})
        cy.wait(1000)
        adminDashboardPage.getFeeCollectionLink().click()
        cy.wait(4000)
        feeManagementFeeCollectionPage.getStudentSearchBtn().type(this.feeCollection.StudentSearchTxt)
        cy.wait(3000)
        feeManagementFeeCollectionPage.getListOfStudentName().each(($e1,index,$list)=>{
            var studentNameTxt = $e1.text().trim()
            if(studentNameTxt===(this.feeCollection.StudentSearchTxt)){
            feeManagementFeeCollectionPage.getListOfStudentCollectFeeBtn().eq(index).click()

            }

        })
        feeManagementFeeCollectionPage.getPaymentModeDropdown().click()
        feeManagementFeeCollectionPage.getPaymentModeDropdownList().contains(this.feeCollection.paymentmode).click()
        feeManagementFeeCollectionPage.getFeeAmtTxtField().type(this.feeCollection.FeeAmtValue)
        feeManagementFeeCollectionPage.getFeeTransactionIdTxtField().type(this.feeCollection.TransactionID)
        feeManagementFeeCollectionPage.getFeeAttachFile().attachFile('ERP/sample.pdf');
        feeManagementFeeCollectionPage.getFeeRemarksTextArea().type(this.feeCollection.Remarks)
        feeManagementFeeCollectionPage.getFeeCollectionApplyBtn().click()
        
      })
})  

