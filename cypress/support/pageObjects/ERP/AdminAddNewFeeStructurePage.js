class AddNewFeeStructurePage{
    getFeeStructureNameTextfield(){
        return cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #outlined-basic')
    }
    
    getDescriptionTextAreaField(){
        return cy.get('textarea[id="outlined-basic"]')
    }

    getStartDateIcon(){
        return cy.get('[class="MuiButtonBase-root MuiIconButton-root MuiIconButton-edgeEnd MuiIconButton-sizeMedium css-slyssw"]').eq(0)
    }

    getEndDateIcon(){
        return cy.get('[style="text-align: right; padding-top: 0px;"] > .css-13sljp9 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root')
    }

    getStartDate(){
        return cy.xpath('//button[text()="1"]')
    }

    getEndDate(){
        return cy.xpath('//div[@class="css-mvmu1r"]//button[text()="20"]')
    }

    getNewStudentCheckBox(){
        return cy.get('[class="CustomCheckmark"]').eq(0)
    }

    getExisitingCheckBox(){
        return cy.get('[class="CustomCheckmark"]').eq(1)
    }

    getSelectGrade(){
        return cy.get('[id="demo-multiple-checkbox"]')
    }

    getGrade3(){
        return cy.get('[data-value="Grade 3"]')
    }

    getContinueButton(){
        return cy.xpath('//div[@class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0"]//button[@type="submit"]')
    }

    getCancelButton(){
        return cy.xpath('//button[text()="Cancel"]')
    }

    enterAllDetails(FeeStructureNameTextfield,description){
        this.getFeeStructureNameTextfield().type(FeeStructureNameTextfield)
        this.getDescriptionTextAreaField().type(description)
        this.getStartDateIcon().click()
        this.getStartDate().click()
        cy.wait(1000)
        this.getEndDateIcon().click()
        this.getEndDate().click()
        this.getExisitingCheckBox().click()
        this.getSelectGrade().click()
        this.getGrade3().click()
        this.getContinueButton().click({force:true})
    }

    verifyElementsInAddNewFeeStructurePage(){
        cy.wait(1000)
        cy.isVisible(this.getFeeStructureNameTextfield())
        cy.isVisible(this.getDescriptionTextAreaField())
        cy.isVisible(this.getStartDateIcon())
        cy.isVisible(this.getEndDateIcon())
        cy.isVisible(this.getExisitingCheckBox())
        cy.isVisible(this.getContinueButton())
        cy.isVisible(this.getSelectGrade())
        cy.isVisible(this.getNewStudentCheckBox())
        cy.isVisible(this.getCancelButton())
    }
}module.exports=new AddNewFeeStructurePage()