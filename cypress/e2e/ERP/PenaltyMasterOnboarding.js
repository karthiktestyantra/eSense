const loginPage = require('../../support/pageObjects/ERP/LoginPage')
const adminDashboardPage = require('../../support/pageObjects/ERP/AdminDashboardPage')
const penaltyMasterOnBoardingPage = require('../../support/pageObjects/ERP/PenaltyMasterOnBoardingPage')
const dayjs = require('dayjs')
describe("Verify Penalty Master functionalities", function () {

    before(function () {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit(Cypress.env("urlPreSetupERP"))
        cy.fixture("ERP/LoginCredentials").then(function (loginCredentials) {
          loginPage.login(loginCredentials.adminUsernamePreSetUp, loginCredentials.adminPassword)
        })
        cy.saveLocalStorage();
      })
    
      beforeEach(function () {
        cy.restoreLocalStorage();
        cy.fixture("ERP/PenaltyMasterCredentials").as("PenaltyMaster")
      })

      it("ERP_TC_001 - Validate user is able to navigate from Fee structure master to Penalty master tab.", function () {
        adminDashboardPage.navigateToFeeSetUpPage()
        penaltyMasterOnBoardingPage.getPresetupPenaltyMasterContinueBtn().click()
        penaltyMasterOnBoardingPage.getPresetupPenaltyMasterSetupPenaltyMastersBtn().should('be.visible')
        cy.wait(1000)
        penaltyMasterOnBoardingPage.getPenaltyMasterTitleTxt().should('have.text','PENALTY MASTER')
     

      })

      it.skip("ERP_TC_002 - Validate user is navigate from Fee structure master to Penalty master module tab.", function () {
        // penaltyMasterOnBoardingPage.getPresetupPenaltyMasterContinueBtn().click()
      // cy.get('.MuiTabs-flexContainer > :nth-child(2)').click()
      
        cy.wait(3000)
       // penaltyMasterOnBoardingPage.getPenaltyMasterAddBtn().should('be.visible')

      })

       it("ERP_TC_003 - Validate user is create the penalty by using the 'Setup Penalty Masters' button", function () {
        penaltyMasterOnBoardingPage.getPresetupPenaltyMasterSetupPenaltyMastersBtn().click()
        penaltyMasterOnBoardingPage.getPenaltyNameTextField().type(this.PenaltyMaster.penaltyName)
        penaltyMasterOnBoardingPage.getPenaltyTypeDropdown().click()
        penaltyMasterOnBoardingPage.getPenaltyTypeDropdownValue().contains(this.PenaltyMaster.PenaltyTypeValue).click()
        penaltyMasterOnBoardingPage.getPenaltySelectGradeTypeDropdown().click()
        penaltyMasterOnBoardingPage.getPenaltySelectAllGradeDropdownValues().each(($e1,index,$list)=>{
         cy.wrap($e1).uncheck()
         cy.wrap($e1).check()
        })
        cy.clickOnBody()
        // penaltyMasterOnBoardingPage.getPenaltySelectStreamDropdown().click()
        // penaltyMasterOnBoardingPage.getPenaltySelectStreamDropdownValues().each(($e1,index,$list)=>{
        //  cy.wrap($e1).uncheck()
        //  cy.wrap($e1).check()
        // })
        cy.clickOnBody()
        penaltyMasterOnBoardingPage.getPenaltyAmountFlatAmt().click()
        penaltyMasterOnBoardingPage.getPenaltyAmountTxtField().type(this.PenaltyMaster.PenaltyAmountValue)
        penaltyMasterOnBoardingPage.getpenaltyUnpaidLink().click()
        penaltyMasterOnBoardingPage.getpenaltyUnpaidAmtTextField().type(this.PenaltyMaster.unpaidAmt)
        penaltyMasterOnBoardingPage.getpenaltyChargePer().type(this.PenaltyMaster.chargePerDay) 
        penaltyMasterOnBoardingPage.getpenaltyDurationDropdown().click()
        penaltyMasterOnBoardingPage.getpenaltyDurationDropdownValue().contains(this.PenaltyMaster.durationValue).click()
        penaltyMasterOnBoardingPage.getpenaltyMasterSaveBtn().click()
        cy.on('window:alert',(t)=>{
          //assertions
          expect(t).to.contains('New Penalty Created');
        })
        cy.reload()
        cy.wait(2000)
        penaltyMasterOnBoardingPage.getPresetupPenaltyMaster().click()
       })

      it("ERP_TC_004 - Validate user is navigate from Fee structure master to Penalty master module tab.", function () {
       // penaltyMasterOnBoardingPage.createAndVerifyPenaltyMasterFunctionalities(this.PenaltyMaster.PenaltyTypeValue, this.PenaltyMaster.penaltyName,this.PenaltyMaster.PenaltyAmountValue,this.PenaltyMaster.unpaidAmt,this.PenaltyMaster.chargePerDay,this.PenaltyMaster.durationValue) 
        penaltyMasterOnBoardingPage.getPenaltyMasterAddBtn().click()
        penaltyMasterOnBoardingPage.getPenaltyNameTextField().type(this.PenaltyMaster.penaltyName2)
        penaltyMasterOnBoardingPage.getPenaltyTypeDropdown().click()
        penaltyMasterOnBoardingPage.getPenaltyTypeDropdownValue().contains(this.PenaltyMaster.PenaltyTypeValue2).click()
        penaltyMasterOnBoardingPage.getPenaltySelectGradeTypeDropdown().click()
        penaltyMasterOnBoardingPage.getPenaltySelectAllGradeDropdownValues().each(($e1,index,$list)=>{
         cy.wrap($e1).uncheck()
         cy.wrap($e1).check()
        })
        cy.clickOnBody()
        // penaltyMasterOnBoardingPage.getPenaltySelectStreamDropdown().click()
        // penaltyMasterOnBoardingPage.getPenaltySelectStreamDropdownValues().each(($e1,index,$list)=>{
        //  cy.wrap($e1).uncheck()
        //  cy.wrap($e1).check()
        // })
        cy.clickOnBody()
        penaltyMasterOnBoardingPage.getPenaltyAmountFlatAmt().click()
        penaltyMasterOnBoardingPage.getPenaltyAmountTxtField().type(this.PenaltyMaster.PenaltyAmountValue2)
        penaltyMasterOnBoardingPage.getpenaltyUnpaidLink().click()
        penaltyMasterOnBoardingPage.getpenaltyUnpaidAmtTextField().type(this.PenaltyMaster.unpaidAmt2)
        penaltyMasterOnBoardingPage.getpenaltyChargePer().type(this.PenaltyMaster.chargePerDay2) 
        penaltyMasterOnBoardingPage.getpenaltyDurationDropdown().click()
        penaltyMasterOnBoardingPage.getpenaltyDurationDropdownValue().contains(this.PenaltyMaster.durationValue2).click()
        penaltyMasterOnBoardingPage.getpenaltyMasterSaveBtn().click()
        cy.on('window:alert',(t)=>{
          //assertions
          expect(t).to.contains('New Penalty Created');
        })
        cy.reload()
        cy.wait(2000)
        penaltyMasterOnBoardingPage.getPresetupPenaltyMaster().click()

      })

      it("ERP_TC_005 - Validate a new penalty master form appears as the user clicks on 'Save&add new' button", function () {
        penaltyMasterOnBoardingPage.getPenaltyMasterAddBtn().click()
        penaltyMasterOnBoardingPage.getPenaltyNameTextField().type(this.PenaltyMaster.penaltyName)
        cy.wait(1000)
        penaltyMasterOnBoardingPage.getPenaltyNameTextField().invoke('val').then((penaltyname)=>{
        var penaltynametxt = penaltyname 
        cy.log(penaltynametxt)
        penaltyMasterOnBoardingPage.getPenaltyTypeDropdown().click()
        penaltyMasterOnBoardingPage.getPenaltyTypeDropdownValue().contains(this.PenaltyMaster.PenaltyTypeValue).click()
        penaltyMasterOnBoardingPage.getPenaltySelectGradeTypeDropdown().click()
        penaltyMasterOnBoardingPage.getPenaltySelectAllGradeDropdownValues().each(($e1,index,$list)=>{
         cy.wrap($e1).uncheck()
         cy.wrap($e1).check()
        })
        cy.clickOnBody()
        // penaltyMasterOnBoardingPage.getPenaltySelectStreamDropdown().click()
        // penaltyMasterOnBoardingPage.getPenaltySelectStreamDropdownValues().each(($e1,index,$list)=>{
        //  cy.wrap($e1).uncheck()
        //  cy.wrap($e1).check()
        // })
        cy.clickOnBody()
        penaltyMasterOnBoardingPage.getPenaltyAmountFlatAmt().click()
        penaltyMasterOnBoardingPage.getPenaltyAmountTxtField().type(this.PenaltyMaster.PenaltyAmountValue)
        penaltyMasterOnBoardingPage.getpenaltyUnpaidLink().click()
        penaltyMasterOnBoardingPage.getpenaltyUnpaidAmtTextField().type(this.PenaltyMaster.unpaidAmt)
        penaltyMasterOnBoardingPage.getpenaltyChargePer().type(this.PenaltyMaster.chargePerDay) 
        penaltyMasterOnBoardingPage.getpenaltyDurationDropdown().click()
        penaltyMasterOnBoardingPage.getpenaltyDurationDropdownValue().contains(this.PenaltyMaster.durationValue).click()
        penaltyMasterOnBoardingPage.getpenaltyMasterSaveAndAddNewBtn().click()
        cy.wait(1000)
        penaltyMasterOnBoardingPage.getpenaltyMasterSaveAndAddNewBtn().click()
        penaltyMasterOnBoardingPage.getpenaltyMasterMandatoryFieldErrorMsg().should('be.visible')
        cy.get('.buttonGrid > [type="button"]').click()
        penaltyMasterOnBoardingPage.getpenaltyMasterListOfCreatedPenaltyName().eq(1).then((CreatedPenaltyNmae)=>{
          var penaltyName = CreatedPenaltyNmae.text()
          expect(this.PenaltyMaster.penaltyName).to.be.equal(penaltynametxt)

        })
        })

      })
     

    })