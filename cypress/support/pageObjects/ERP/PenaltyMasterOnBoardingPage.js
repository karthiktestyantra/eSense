class PenaltytMasterOnBoardingPage {

    getPresetupPenaltyMasterContinueBtn() {
        return cy.get('button.continue-btn').contains("Continue")
    }

    getPenaltyMasterTitleTxt() {
        return cy.get('p.title')
    }

    getPenaltyMasterAddBtn() {
        return cy.get('button.MuiButtonBase-root').contains('Add New')
    }

    getPenaltyNameTextField() {
        return cy.get('input[name="penaltyName"]')
    }

    getPenaltyTypeDropdown() {
        return cy.get('div.MuiSelect-select').eq(0)
    }

    getPenaltyTypeDropdownValue() {
        return cy.get('span.MuiListItemText-primary')
    }
    
    getPenaltySelectGradeTypeDropdown() {
        return cy.get('div.MuiSelect-select').eq(1)
    }
      
    getPenaltySelectAllGradeDropdownValues() {
        return cy.get('span.MuiCheckbox-root input')
    }

    getPenaltySelectStreamDropdown() {
        return cy.get('div.MuiSelect-select').eq(2)
    }
     
    getPenaltySelectStreamDropdownValues() {
        return cy.get('span.MuiCheckbox-root input')
    }

    getPenaltyAmountFlatAmt() {
        return cy.get('input[name="penaltyAmountType"]').eq(0)
    }

    getPenaltyAmountTxtField() {
        return cy.get('div.MuiTextField-root').eq(2)
    }

    getpenaltyUnpaidLink() {
        return cy.get('div[data-testid="penaltyUnpaid"]')
    }
    
    getpenaltyUnpaidAmtTextField() {
        return cy.get('input[name="unpaidAmount"]')
    }

    getpenaltyUnpaidAmtTextField() {
        return cy.get('input[name="unpaidAmount"]')
    }
    
    getpenaltyChargePer() {
        return cy.get('input[name="duration"]')
    }

    getpenaltyDurationDropdown() {
        return cy.get('div[aria-labelledby="demo-multiple-checkbox-label demo-multiple-checkbox"]').eq(3)
    }

    getpenaltyDurationDropdownValue() {
        return cy.get('ul.MuiMenu-list li')
    }
    
    getpenaltyMasterSaveBtn() {
        return cy.get('button.MuiButtonBase-root').contains('Save')
    }

    // //Bussiness Logic
    // createAndVerifyPenaltyMasterFunctionalities(PenaltyTypeValue, penaltyName,PenaltyAmountValue,unpaidAmt,chargePerDay,durationValue) {
    //     cy.wait(1000)
    //     this.getPenaltyMasterAddBtn().click()
    //     this.getPenaltyNameTextField().type(penaltyName)
    //     this.getPenaltyTypeDropdown().click()
    //     this.getPenaltyTypeDropdownValue().contains(PenaltyTypeValue).click()
    //     this.getPenaltySelectGradeTypeDropdown().click()
    //     this.getPenaltySelectAllGradeDropdownValues().each(($e1,index,$list)=>{
    //      cy.wrap($e1).uncheck()
    //      cy.wrap($e1).check()
    //     })
    //     cy.clickOnBody()
    //     this.getPenaltySelectStreamDropdown().click()
    //     this.getPenaltySelectStreamDropdownValues().each(($e1,index,$list)=>{
    //      cy.wrap($e1).uncheck()
    //      cy.wrap($e1).check()
    //     })
    //     cy.clickOnBody()
    //     this.getPenaltyAmountFlatAmt().click()
    //     this.getPenaltyAmountTxtField().type(PenaltyAmountValue)
    //     this.getpenaltyUnpaidLink().click()
    //     this.getpenaltyUnpaidAmtTextField().type(unpaidAmt)
    //     this.getpenaltyChargePer().type(chargePerDay) 
    //     this.getpenaltyDurationDropdown().click()
    //     this.getpenaltyDurationDropdownValue().contains(durationValue).click()
    //     this.getpenaltyMasterSaveBtn().click()
    //     cy.on('window:alert',(t)=>{
    //       //assertions
    //       expect(t).to.contains('New Penalty Created');
    //    })

   // }




}
module.exports = new PenaltytMasterOnBoardingPage()