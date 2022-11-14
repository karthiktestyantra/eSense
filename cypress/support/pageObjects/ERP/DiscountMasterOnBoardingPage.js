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
    getDiscountTypeLstInDiscountTypeDrpDwn() {
        return cy.get('div.MuiPaper-elevation ul li div span')
    }
    getGeneralCheckBxLst() {
        return cy.get('div[role="radiogroup"] span.MuiRadio-root')
    }
    getDiscountAmountTxtFld() {
        return cy.get('input[name="quota.0.discountAmount"]')
    }
    getDiscountAmountTxtFldFrCustom() {
        return cy.get('input[name="quota.1.discountAmount"]')
    }
    getScholarshipAmountTxtFld1(){
        return cy.get('input[name="newScholarship.0.discountAmount"]')
    }
    getScholarshipAmountTxtFld2(){
        return cy.get('input[name="newScholarship.1.discountAmount"]')
    }
    getCheckBxNameLst() {
        return cy.get('span.MuiFormControlLabel-label')
    }
    getSaveBtn() {
        return cy.get('button[type="button"]').contains("Save")
    }
    getSaveAndAddNewBtn() {
        return cy.get('button[type="button"]').contains("Save & Add New")
    }
    getCancelBtn() {
        return cy.get('button[type="button"]').contains("Cancel")
    }
    getDiscountNameLst() {
        return cy.get('table tbody tr td:nth-child(1)')
    }
    getDiscountTypeLst() {
        return cy.get('table tbody tr td:nth-child(2)')
    }
    getSubTypeLst() {
        return cy.get('table tbody tr td:nth-child(3)')
    }
    getEditIconsLst() {
        return cy.get('div img[class="editIcon"]')
    }
    getDeleteIconsLst() {
        return cy.get('div img[class="deleteIcon"]')
    }
    getAddDiscountPopup() {
        return cy.get('div[role="dialog"]')
    }
    getCloseBtnFrAddDiscountPopup() {
        return cy.get('#customized-dialog-title > .MuiButtonBase-root > [data-testid="CloseIcon"]')
    }
    getAddQuotaBtn() {
        return cy.get('button[data-testid="addQuotaText"]')
    }
    getQuotaNameFld() {
        return cy.get('input[name="quota.1.customQuotaName"]')
    }
    getDefaultTxtInDiscountMaster() {
        return cy.get('div.innerBox p')
    }
    getSetupDiscountMasters() {
        return cy.get('button.customBtn').contains("Setup Discount Masters")
    }
    getDiscountNameLst() {
        return cy.get('table tbody tr td.tableFirstCell')
    }
    getDicountNameDeleteIconLst() {
        return cy.get('div.deleteBox img[class="deleteIcon"]')
    }
    getDicountNameEditIconLst() {
        return cy.get('div.deleteBox img[class="editIcon"]')
    }
    getDiscountNameDltCnfirmBtn() {
        return cy.get('button[type="submit"]:visible').contains("Delete")
    }
    getCloseDiscountDeletedPopup() {
        return cy.get('button svg[data-testid="CloseIcon"]:visible')
    }
    getCustomQuotaNotifyIconLst() {
        return cy.get('table tbody tr td.tableSecondCell div')
    }
    getNewStudentTabInScholarship() {
        return cy.get('button[role="tab"]').contains("New Student")
    }
    getExistingStudentTabInScholarship() {
        return cy.get('button[role="tab"]').contains("Existing Student")
    }
    getDuplicateFrmExistingStudentsCheckBx() {
        return cy.get('input[name="isDupliacteFromExisting"]')
    }
    getDuplicateFrmNewStudentsCheckBx() {
        return cy.get('input[name="isDuplicateFromNew"]')
    }
    getAddMarksRange() {
        return cy.get('button[data-testid="addMarksRangeText"]')
    }
    getMarksRangeMinSlider() {
        return cy.get('span.MuiSlider-thumb input[aria-label="Minimum price"]')
    }
    getDeleteMarksRangeDeleteBtnLst() {
        return cy.get('div.deleteBox:visible')
    }
    getDiscountNameSortIcn(){
        return cy.get('div.arrowAlignment img[data-testid="descOrder"]').eq(0)
    }
    getDiscountTypeSortIcn(){
        return cy.get('div.arrowAlignment img[data-testid="descOrder"]').eq(1)
    }

    //Business Logic
    verifyAndClickOnSetupDiscountMasters() {
        this.getDefaultTxtInDiscountMaster().should('have.text', " No Discount Master Found ")
        this.getSetupDiscountMasters().should('be.visible')
        this.getSetupDiscountMasters().click()
    }

    clickOnAddNewBtn() {
        this.getDiscountMasterAddNewBtn().click()
    }

    verifyDisountMasterFunctionalities() {
        this.getSaveBtn().click()
        cy.contains("New Discount Created").should('be.visible')
        cy.wait(3000)
    }

    verifyDisountMasterFunctionalitiesWithSaveAndAdd() {
        this.getSaveAndAddNewBtn().click()
        cy.contains("New Discount Created").should('be.visible')
        cy.wait(3000)
        this.getAddDiscountPopup().should('be.visible')
        cy.wait(1000)
        this.getCloseBtnFrAddDiscountPopup().click()
    }

    verifyCreatedDiscountNameInDiscountMasterPage() {
        this.getDiscountNameLst().each(($e1, index, $list) => {
            const text = $e1.text()
            if (text.includes("Basic")) {
                this.getDiscountTypeLst().eq(index).should('have.text', "Quota")
                this.getSubTypeLst().eq(index).should('have.text', "General")
                this.getEditIconsLst().eq(index).should('be.visible')
                this.getDeleteIconsLst().eq(index).should('be.visible')
            }
        })
    }

    fillingTheDetailsInDiscountMasterPopUp() {
        cy.wait(1000)
        this.getDiscountNameBtn().click().type("Basic")
        this.getDiscountTypeDrpDwn().trigger('mouseover').click({ force: true })
        this.getDiscountTypeLstInDiscountTypeDrpDwn().should('contain.text', "Quota").and('contain.text', "Sibling").
            and('contain.text', "Scholarship").and('contain.text', "Employees Child Discount").and('contain.text', "Children with special needs").
            and('contain.text', "Economically weaker section").and('contain.text', "Upfront Payment").and('contain.text', "Other")
        this.getDiscountTypeLstInDiscountTypeDrpDwn().contains("Quota").click()
        this.getGeneralCheckBxLst().should('have.length', 2)
        this.getDiscountAmountTxtFld().click().type(1000)
        this.getCheckBxNameLst().should('contain.text', "General").and('contain.text', "Flat Amount").and('contain.text', "Percentage").
            and('contain.text', "SC").and('contain.text', "ST").and('contain.text', "OBC")
        this.getSaveBtn().should('be.visible')
        this.getSaveAndAddNewBtn().should('be.visible')
        this.getCancelBtn().should('be.visible')
    }

    verifyDisountMasterFunctionalitiesWithCancel() {
        this.getCancelBtn().click()
        this.getAddDiscountPopup().should('not.exist')
    }

    verifyQuotaDiscountFunctionalities() {
        this.getAddQuotaBtn().click()
        this.getQuotaNameFld().type("Sports")
        this.getDiscountAmountTxtFldFrCustom().type("3000")
        this.getSaveBtn().click()
        cy.contains("New Discount Created").should('be.visible')
        this.getDiscountNameLst().each(($e1, index, $list) => {
            const txt = $e1.text()
            if (txt === "Basic") {
                this.getCustomQuotaNotifyIconLst().eq(0).find('span').should('have.text', "+1")
            }
        })
    }

    verifyAndDeleteTheCreatedDiscountList() {
        this.getDiscountNameLst().each(($e1, index, $list) => {
            const txt = $e1.text()
            if (txt === "Basic" && index < $list.length) {
                this.getDicountNameDeleteIconLst().eq(0).click()
                cy.contains("Delete Basic ?").should('be.visible')
                this.getDiscountNameDltCnfirmBtn().click()
                cy.contains("Basic has been deleted from discount master.").should('be.visible')
                this.getCloseDiscountDeletedPopup().click()
                cy.wait(1000)
            }
        })
    }


}
module.exports = new DiscountMasterOnBoardingPage()