class DiscountMasterOnBoardingPage {

    getDiscountMasterAddNewBtn() {
        return cy.get('button[type="button"]').contains("Add New")
    }
    getDiscountNameBtn() {
        return cy.get('input[name="discountName"]')
    }
    getDiscountTypeDrpDwn() {
        return cy.get('#demo-multiple-discount')
    }
    getDiscountTypeLstInDiscountTypeDrpDwn(){
        return cy.get('div.MuiPaper-elevation ul li div span')
    }
    getGeneralCheckBxLst(){
        return cy.get('div[role="radiogroup"] span.MuiRadio-root')
    }
    getDiscountAmountTxtFld(){
        return cy.get('input[name="quota.0.discountAmount"]')
    }
    getCheckBxNameLst(){
        return cy.get('span.MuiFormControlLabel-label')
    }
    getSaveBtn(){
        return cy.get('button[type="button"]').contains("Save")
    }
    getSaveAndAddNewBtn(){
        return cy.get('button[type="button"]').contains("Save & Add New")
    }
    getCancelBtn(){
        return cy.get('button[type="button"]').contains("Cancel")
    }
    getDiscountNameLst(){
        return cy.get('table tbody tr td:nth-child(1)')
    }
    getDiscountTypeLst(){
        return cy.get('table tbody tr td:nth-child(2)')
    }
    getSubTypeLst(){
        return cy.get('table tbody tr td:nth-child(3)')
    }
    getEditIconsLst(){
        return cy.get('div img[class="editIcon"]')
    }
    getDeleteIconsLst(){
        return cy.get('div img[class="deleteIcon"]')
    }
    getAddDiscountPopup(){
        return cy.get('div[role="dialog"]')
    }

    //Business Logic
    createAndVerifyDisountMasterFunctionalities() {
        this.getDiscountMasterAddNewBtn().click()
        this.getDiscountNameBtn().click().type("Basic")
        this.getDiscountTypeDrpDwn().click({force:true})
        this.getDiscountTypeLstInDiscountTypeDrpDwn().should('contain.text',"Quota").and('contain.text',"Sibling").
        and('contain.text',"Scholarship").and('contain.text',"Employees Child Discount").and('contain.text',"Children with special needs").
        and('contain.text',"Economically weaker section").and('contain.text',"Upfront Payment").and('contain.text',"Other")
        this.getDiscountTypeLstInDiscountTypeDrpDwn().contains("Quota").click()
        this.getGeneralCheckBxLst().should('have.length',2)
        this.getDiscountAmountTxtFld().click().type(1000)
        this.getCheckBxNameLst().should('contain.text',"General").and('contain.text',"Flat Amount").and('contain.text',"Percentage").
        and('contain.text',"SC").and('contain.text',"ST").and('contain.text',"OBC")
        this.getSaveBtn().should('be.visible')
        this.getSaveAndAddNewBtn().should('be.visible')
        this.getCancelBtn().should('be.visible')
        this.getSaveBtn().click()
        cy.contains("New Discount Created").should('be.visible')
        cy.wait(3000)
    }

    createAndVerifyDisountMasterFunctionalitiesWithSaveAndAdd() {
        this.getDiscountMasterAddNewBtn().click()
        this.getDiscountNameBtn().click().type("Basic")
        this.getDiscountTypeDrpDwn().click({force:true})
        this.getDiscountTypeLstInDiscountTypeDrpDwn().should('contain.text',"Quota").and('contain.text',"Sibling").
        and('contain.text',"Scholarship").and('contain.text',"Employees Child Discount").and('contain.text',"Children with special needs").
        and('contain.text',"Economically weaker section").and('contain.text',"Upfront Payment").and('contain.text',"Other")
        this.getDiscountTypeLstInDiscountTypeDrpDwn().contains("Quota").click()
        this.getGeneralCheckBxLst().should('have.length',2)
        this.getDiscountAmountTxtFld().click().type(1000)
        this.getCheckBxNameLst().should('contain.text',"General").and('contain.text',"Flat Amount").and('contain.text',"Percentage").
        and('contain.text',"SC").and('contain.text',"ST").and('contain.text',"OBC")
        this.getSaveBtn().should('be.visible')
        this.getSaveAndAddNewBtn().should('be.visible')
        this.getCancelBtn().should('be.visible')
        this.getSaveAndAddNewBtn().click()
        cy.contains("New Discount Created").should('be.visible')
        cy.wait(3000)
        this.getAddDiscountPopup().should('be.visible')
    }

    verifyCreatedDiscountNameInDiscountMasterPage(){
        this.getDiscountNameLst().each(($e1,index,$list)=>{
            const text = $e1.text()
            if(text.includes("Basic")){
                this.getDiscountTypeLst().eq(index).should('have.text',"Quota")
                this.getSubTypeLst().eq(index).should('have.text',"General")
                this.getEditIconsLst().eq(index).should('be.visible')
                this.getDeleteIconsLst().eq(index).should('be.visible')
            }
        })
    }


}
module.exports = new DiscountMasterOnBoardingPage()