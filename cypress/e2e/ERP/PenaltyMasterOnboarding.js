const loginPage = require('../../support/pageObjects/ERP/LoginPage')
const adminDashboardPage = require('../../support/pageObjects/ERP/AdminDashboardPage')
const penaltyMasterOnBoardingPage = require('../../support/pageObjects/ERP/PenaltyMasterOnBoardingPage')
const dayjs = require('dayjs')
describe("Verify Penalty Master functionalities", function () {

    before(function () {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.clearLocalStorageSnapshot();
        cy.visit(Cypress.env("urlPreSetupERP"))
        cy.fixture("ERP/LoginCredentials").then(function (loginCredentials) {
          loginPage.login(loginCredentials.adminUsernamePreSetUp, loginCredentials.adminPassword)
        })
        cy.saveLocalStorage();
      })
    
      beforeEach(function () {
        cy.restoreLocalStorage();
        cy.fixture("ERP/PenaltyMasterOnboarding").as("penaltyMasterOnboarding")
      })

      it("ERP_TC_001 - Validate user is able to navigate from Fee structure master to Penalty master tab.", function () {
        adminDashboardPage.navigateToFeeSetUpPage()
        penaltyMasterOnBoardingPage.getPresetupPenaltyMaster().click()
        //penaltyMasterOnBoardingPage.getPresetupPenaltyMasterContinueBtn().click()
        penaltyMasterOnBoardingPage.getPresetupPenaltyMasterSetupPenaltyMastersBtn().should('be.visible')
        cy.wait(1000)
        penaltyMasterOnBoardingPage.getPenaltyMasterTitleTxt().should('have.text','PENALTY MASTER')
     

      })

     

       it("ERP_TC_003 - Validate user is create the penalty by using the 'Setup Penalty Masters' button", function () {
        penaltyMasterOnBoardingPage.getPresetupPenaltyMasterSetupPenaltyMastersBtn().click()
        penaltyMasterOnBoardingPage.getPenaltyNameTextField().type(this.penaltyMasterOnboarding.penaltyName)
        penaltyMasterOnBoardingPage.getPenaltyTypeDropdown().click()
        penaltyMasterOnBoardingPage.getPenaltyTypeDropdownValue().contains(this.penaltyMasterOnboarding.PenaltyTypeValue).click()
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
        penaltyMasterOnBoardingPage.getPenaltyAmountTxtField().type(this.penaltyMasterOnboarding.PenaltyAmountValue)
        penaltyMasterOnBoardingPage.getpenaltyUnpaidLink().click()
        penaltyMasterOnBoardingPage.getpenaltyUnpaidAmtTextField().type(this.penaltyMasterOnboarding.unpaidAmt)
        penaltyMasterOnBoardingPage.getpenaltyChargePer().type(this.penaltyMasterOnboarding.chargePerDay) 
        penaltyMasterOnBoardingPage.getpenaltyDurationDropdown().click()
        penaltyMasterOnBoardingPage.getpenaltyDurationDropdownValue().contains(this.penaltyMasterOnboarding.durationValue).click()
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
       // penaltyMasterOnBoardingPage.createAndVerifyPenaltyMasterFunctionalities(this.penaltyMasterOnboarding.PenaltyTypeValue, this.penaltyMasterOnboarding.penaltyName,this.penaltyMasterOnboarding.PenaltyAmountValue,this.penaltyMasterOnboarding.unpaidAmt,this.penaltyMasterOnboarding.chargePerDay,this.penaltyMasterOnboarding.durationValue) 
        penaltyMasterOnBoardingPage.getPenaltyMasterAddBtn().click()
        penaltyMasterOnBoardingPage.getPenaltyNameTextField().type(this.penaltyMasterOnboarding.penaltyName2)
        penaltyMasterOnBoardingPage.getPenaltyTypeDropdown().click()
        penaltyMasterOnBoardingPage.getPenaltyTypeDropdownValue().contains(this.penaltyMasterOnboarding.PenaltyTypeValue2).click()
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
        penaltyMasterOnBoardingPage.getPenaltyAmountTxtField().type(this.penaltyMasterOnboarding.PenaltyAmountValue2)
        penaltyMasterOnBoardingPage.getpenaltyUnpaidLink().click()
        penaltyMasterOnBoardingPage.getpenaltyUnpaidAmtTextField().type(this.penaltyMasterOnboarding.unpaidAmt2)
        penaltyMasterOnBoardingPage.getpenaltyChargePer().type(this.penaltyMasterOnboarding.chargePerDay2) 
        penaltyMasterOnBoardingPage.getpenaltyDurationDropdown().click()
        penaltyMasterOnBoardingPage.getpenaltyDurationDropdownValue().contains(this.penaltyMasterOnboarding.durationValue2).click()
        penaltyMasterOnBoardingPage.getpenaltyMasterSaveBtn().click()
        cy.on('window:alert',(t)=>{
          //assertions
          expect(t).to.contains('New Penalty Created');
        })
        cy.reload()
        cy.wait(2000)
        penaltyMasterOnBoardingPage.getPresetupPenaltyMaster().click()

      })

      it("ERP_TC_002 - Validate user is navigate from Fee structure master to Penalty master module tab.", function () {
        penaltyMasterOnBoardingPage.getPenaltyMasterAddBtn().should('be.visible')

      })

      it("ERP_TC_005 - Validate a new penalty master form appears as the user clicks on 'Save&add new' button", function () {
        penaltyMasterOnBoardingPage.getPenaltyMasterAddBtn().click()
        penaltyMasterOnBoardingPage.getPenaltyNameTextField().type(this.penaltyMasterOnboarding.penaltyName2)
        cy.wait(1000)
        penaltyMasterOnBoardingPage.getPenaltyNameTextField().invoke('val').then((penaltyname)=>{
        var penaltynametxt = penaltyname 
        cy.log(penaltynametxt)
        penaltyMasterOnBoardingPage.getPenaltyTypeDropdown().click()
        penaltyMasterOnBoardingPage.getPenaltyTypeDropdownValue().contains(this.penaltyMasterOnboarding.PenaltyTypeValue).click()
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
        penaltyMasterOnBoardingPage.getPenaltyAmountTxtField().type(this.penaltyMasterOnboarding.PenaltyAmountValue)
        penaltyMasterOnBoardingPage.getpenaltyUnpaidLink().click()
        penaltyMasterOnBoardingPage.getpenaltyUnpaidAmtTextField().type(this.penaltyMasterOnboarding.unpaidAmt)
        penaltyMasterOnBoardingPage.getpenaltyChargePer().type(this.penaltyMasterOnboarding.chargePerDay) 
        penaltyMasterOnBoardingPage.getpenaltyDurationDropdown().click()
        penaltyMasterOnBoardingPage.getpenaltyDurationDropdownValue().contains(this.penaltyMasterOnboarding.durationValue).click()
        penaltyMasterOnBoardingPage.getpenaltyMasterSaveAndAddNewBtn().click()
        cy.wait(1000)
        penaltyMasterOnBoardingPage.getpenaltyMasterSaveAndAddNewBtn().click()
        penaltyMasterOnBoardingPage.getpenaltyMasterMandatoryFieldErrorMsg().should('be.visible')
        cy.get('.buttonGrid > [type="button"]').click()
        penaltyMasterOnBoardingPage.getpenaltyMasterListOfCreatedPenaltyName().eq(0).then((CreatedPenaltyNmae)=>{
          var penaltyName = CreatedPenaltyNmae.text()
          expect(this.penaltyMasterOnboarding.penaltyName2).to.be.equal(penaltynametxt)

        })
        })

      })
      it("ERP_TC_008 - Validate User is able to see the penalty names in ascending and decending order by using the sorting keys.", function () {
        var optionsArray = []
        penaltyMasterOnBoardingPage.getpenaltyMasterListOfCreatedPenaltyName().each(($el, index) => {
          optionsArray[index] = $el.text()
        })
        .then(() => {
          expect(optionsArray).to.deep.equal(optionsArray.sort())  // note deep for arrays
        })

      })

      it.skip("ERP_TC_009 - Validate user is able to see the Grades in the penalty list view page.", function () {
       

      })

      it("ERP_TC_010 - Validate user should see the Amount.", function () {
        penaltyMasterOnBoardingPage.getpenaltyMasterListViewAmountColumn().should('be.visible')
        penaltyMasterOnBoardingPage.getPenaltyMasterListViewAmountTxt().should('contain.text','₹')

      })

      it("ERP_TC_011 - Validate user is able to edit the created penalty.", function () {
        penaltyMasterOnBoardingPage.getpenaltyMasterListOfCreatedPenaltyName().each(($e1, index,$list) => {
         var penaltyName = $e1.text()
         if(penaltyName===(this.penaltyMasterOnboarding.penaltyName2)){
          penaltyMasterOnBoardingPage.getpenaltyMasterListOfCreatedPenaltyEditBtn().eq(index).click()
          penaltyMasterOnBoardingPage.getPenaltyNameTextField().clear().type(this.penaltyMasterOnboarding.EditPenaltyName)
          penaltyMasterOnBoardingPage.getEditedPenaltySaveBtn().click()
          cy.wait(3000)
          penaltyMasterOnBoardingPage.getpenaltyMasterListOfCreatedPenaltyName().should('contain.text',this.penaltyMasterOnboarding.EditPenaltyName)
          
         }
        })

     })

      it("ERP_TC_014 - Validate user can skip the penalty master tab.", function () {
        cy.wait(1000)
         cy.uncaughtException()
        penaltyMasterOnBoardingPage.getPresetupPenaltyMasterContinueBtn().click({force:true})
        cy.wait(1000)
        penaltyMasterOnBoardingPage.getPresetupDiscountMasterText().should('be.visible') 
      })

        it("ERP_TC_012 - Validate user is able to delete penalty.", function () {
          penaltyMasterOnBoardingPage.getPresetupPenaltyMaster().click()
          penaltyMasterOnBoardingPage.getpenaltyMasterListOfCreatedPenaltyName().each(($e1,index,$list)=>{
              penaltyMasterOnBoardingPage.getpenaltyMasterListOfCreatedPenaltyDeleteBtn().eq(0).click()
              cy.wait(1000)
              penaltyMasterOnBoardingPage.getPenaltyMasterDeletePopupBtn().click() 
              cy.wait(1000)
              cy.on('window:alert',(penaltyDeleted)=>{
                //assertions
                expect(penaltyDeleted).to.contains('has been deleted from penalty master');
              })
            
          })
        
      })


      })
     

  