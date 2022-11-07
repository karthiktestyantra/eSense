const loginPage = require('../../support/pageObjects/ERP/LoginPage')
const adminDashboardPage = require('../../support/pageObjects/ERP/AdminDashboardPage')
const feeSetUpOnBoardingPage = require('../../support/pageObjects/ERP/FeeSetUpOnBoardingPage')
const feeManagementFeeCollectionPage = require('../../support/pageObjects/ERP/FeeManagementFeeCollectionPage')
const dayjs = require('dayjs')
describe("Verify Fee Collection functionalities", function () {

    before(function () {
        cy.clearCookies();
        cy.clearLocalStorage();
      })
    
      beforeEach(function () {
        cy.viewport(1920, 1080)
        cy.visit(Cypress.env("urlPostSetupERP"))
        cy.fixture("ERP/LoginCredentials").then(function (loginCredentials) {
          loginPage.login(loginCredentials.adminUsernamePostSetUp, loginCredentials.adminPassword)
        })
        cy.saveLocalStorage();
        cy.fixture("ERP/FeeCollection").as("feeCollection")
      })
      
      it("TC_002 - To Validate user is able to cancel the collect fee", function () {
        adminDashboardPage.getSideMenuFeeManagementIcon().click({force:true})
        cy.wait(1000)
        adminDashboardPage.getFeeCollectionLink().click()
        cy.wait(4000)
        feeManagementFeeCollectionPage.getStudentSearchBtn().type(this.feeCollection.studenttxt)
        cy.wait(3000)
        feeManagementFeeCollectionPage.getListOfStudentName().each(($e1,index,$list)=>{
            var studentNameTxt = $e1.text().trim()
            if(studentNameTxt===(this.feeCollection.studenttxt)){
            cy.uncaughtException()
            feeManagementFeeCollectionPage.getListOfStudentCollectFeeBtn().eq(index).click()

            }

        })
        feeManagementFeeCollectionPage.getFeeCollectionCancelBtn().should('be.visible')
        
      })

      it('TC_001 - Validate user is able to collect fee',function () {
        adminDashboardPage.getSideMenuFeeManagementIcon().click({force:true})
        cy.wait(1000)
        adminDashboardPage.getFeeCollectionLink().click()
        cy.wait(4000)
        feeManagementFeeCollectionPage.getStudentSearchBtn().type(this.feeCollection.studenttxt)
        cy.wait(2000)
        feeManagementFeeCollectionPage.getListOfStudentName().each(($e1,index,$list)=>{
          var studentNameTxt = $e1.text().trim()
          if(studentNameTxt===(this.feeCollection.studenttxt)){
            cy.wait(1000)
          feeManagementFeeCollectionPage.getListOfStudentCollectFeeBtn().eq(index).click()

          }
      })
      cy.wait(2000)
      feeManagementFeeCollectionPage.getPaymentModeDropdown().click()
      feeManagementFeeCollectionPage.getPaymentModeDropdownList().contains(this.feeCollection.paymentmode).click()
      feeManagementFeeCollectionPage.getFeeAmtTxtField().type(this.feeCollection.FeeAmtValue)
      feeManagementFeeCollectionPage.getFeeTransactionIdTxtField().type(this.feeCollection.TransactionID)
      feeManagementFeeCollectionPage.getFeeAttachFile().attachFile('ERP/sample.pdf');
      feeManagementFeeCollectionPage.getFeeRemarksTextArea().type(this.feeCollection.Remarks)
      cy.uncaughtException()
      feeManagementFeeCollectionPage.getFeeCollectionApplyBtn().click({force:true})
      })


      it('TC_003 To validate user is able to collect fee with cheque',function () {
        adminDashboardPage.getSideMenuFeeManagementIcon().click({force:true})
        cy.wait(1000)
        adminDashboardPage.getFeeCollectionLink().click()
        cy.wait(4000)
        feeManagementFeeCollectionPage.getStudentSearchBtn().type(this.feeCollection.studenttxt)
        cy.wait(2000)
        feeManagementFeeCollectionPage.getListOfStudentName().each(($e1,index,$list)=>{
          var studentNameTxt = $e1.text().trim()
          if(studentNameTxt===(this.feeCollection.studenttxt)){
            cy.wait(1000)
          feeManagementFeeCollectionPage.getListOfStudentCollectFeeBtn().eq(index).click()

          }
      })
      cy.wait(2000)
      feeManagementFeeCollectionPage.getPaymentModeDropdown().click()
      cy.contains(this.feeCollection.paymentChequeMode).click()
      feeManagementFeeCollectionPage.getFeeCollectionAmountTxt().type(this.feeCollection.FeeAmtValue)
      feeManagementFeeCollectionPage.getFeeCollectionBankNameTxt().click()
      cy.contains(this.feeCollection.BankName).click()
      feeManagementFeeCollectionPage.getFeeCollectionChaqueNumberTxt().type(this.feeCollection.TransactionID)
      feeManagementFeeCollectionPage.getFeeCollectionChaqueStatusTxt().click({force:true})
      cy.contains(this.feeCollection.Cheque).click()
      cy.uncaughtException()
      feeManagementFeeCollectionPage.getFeeCollectionApplyBtn().click({force:true})
      })

      it('TC_004 To validate user is able to collect fee with demand draft',function () {
        adminDashboardPage.getSideMenuFeeManagementIcon().click({force:true})
        cy.wait(1000)
        adminDashboardPage.getFeeCollectionLink().click()
        cy.wait(4000)
        feeManagementFeeCollectionPage.getStudentSearchBtn().type(this.feeCollection.studenttxt)
        cy.wait(2000)
        feeManagementFeeCollectionPage.getListOfStudentName().each(($e1,index,$list)=>{
          var studentNameTxt = $e1.text().trim()
          if(studentNameTxt===(this.feeCollection.studenttxt)){
            cy.wait(1000)
          feeManagementFeeCollectionPage.getListOfStudentCollectFeeBtn().eq(index).click()
          }
      })
      cy.wait(2000)
      feeManagementFeeCollectionPage.getPaymentModeDropdown().click()
      cy.contains(this.feeCollection.paymentDemandDraftMode).click()
      feeManagementFeeCollectionPage.getFeeCollectionAmountTxt().type(this.feeCollection.FeeAmtValue)
      feeManagementFeeCollectionPage.getFeeCollectionBankNameTxt().click()
      cy.contains(this.feeCollection.BankName).click()
      feeManagementFeeCollectionPage.getFeeCollectionChaqueNumberTxt().type(this.feeCollection.TransactionID)
      cy.uncaughtException()
      feeManagementFeeCollectionPage.getFeeCollectionApplyBtn().click({force:true})
      })

      it('TC_005  To validate user is able to collect fee with others',function () {
        adminDashboardPage.getSideMenuFeeManagementIcon().click({force:true})
        cy.wait(1000)
        adminDashboardPage.getFeeCollectionLink().click()
        cy.wait(4000)
        feeManagementFeeCollectionPage.getStudentSearchBtn().type(this.feeCollection.studenttxt)
        cy.wait(2000)
        feeManagementFeeCollectionPage.getListOfStudentName().each(($e1,index,$list)=>{
          var studentNameTxt = $e1.text().trim()
          if(studentNameTxt===(this.feeCollection.studenttxt)){
            cy.wait(1000)
          feeManagementFeeCollectionPage.getListOfStudentCollectFeeBtn().eq(index).click()
          }
      })
      cy.wait(2000)
      feeManagementFeeCollectionPage.getPaymentModeDropdown().click()
      cy.contains(this.feeCollection.paymentOtherMode).click()
      feeManagementFeeCollectionPage.getFeeCollectionAmountTxt().type(this.feeCollection.FeeAmtValue)
      feeManagementFeeCollectionPage.getFeeCollectionNameTxt().type(this.feeCollection.Name)
      feeManagementFeeCollectionPage.getFeeCollectionTransactionIDTxt().type(this.feeCollection.TransactionID)
      feeManagementFeeCollectionPage.getFeeCollectionRemarksTxt().type(this.feeCollection.Remarks)
      feeManagementFeeCollectionPage.getFeeAttachFile().attachFile('ERP/sample.pdf');
      cy.uncaughtException()
      feeManagementFeeCollectionPage.getFeeCollectionApplyBtn().click({force:true})
      })
})  

