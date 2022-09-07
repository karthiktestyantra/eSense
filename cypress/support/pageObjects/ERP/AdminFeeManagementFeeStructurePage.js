class AdminFeeManagementFeeStructurePage {

    getFeeStructureAddNewBtn() {
        return cy.get('button.MuiButtonBase-root').contains("Add New")
    }

    getFeesStructureAddNewPage() {
        return cy.get('#customized-dialog-title div')
    }

    getFeeStructureTitle() {
        return cy.xpath('//p[.=" Fees Structure "]')
    }

    getFeeStructureTitleSetUpFeeMasters() {
        return cy.xpath('//p[.="FEE Structure"]')
    }

    getFeeStructureTabsTitle() {
        return cy.get('div[class="css-l36q8z"]')
    }

    getActionsTab() {
        return cy.xpath('//th[text()="ACTIONS"]')
    }

    getActionsEditIcon() {
        return cy.get('[class="editIcon"]')
    }

    getActionsCopyIcon() {
        return cy.get('[class="copyIcon"]')
    }

    getActionsDeleteIcon() {
        return cy.get('[class="deleteIcon"]')
    }

    getFeeStructureNameFldInDetailPage() {
        return cy.get('input[name="feeStructureName"]')
    }

    getFeeStructureTextAreaFldInDetailPage() {
        return cy.get('div textarea[name="feeStructureDescription"]')
    }

    getSetUpFeeMastersButton() {
        return cy.xpath('//button[.="Setup Fee Masters"]')
    }

    getFeeStructureDescriptionTxtAreaFldInDetailPage() {
        return cy.get('div textarea[name="feeStructureDescription"]')
    }

    getFeeStructureStartDateFldInDetailPage() {
        return cy.get('div input[placeholder="mm/dd/yyyy"]').eq(0)
    }

    getFeeStructureEndDateFldInDetailPage() {
        return cy.get('div input[placeholder="mm/dd/yyyy"]').eq(1)
    }

    getFeeStructureNewStudentCheckBxInDetailPage() {
        return cy.get('.CustomCheckBoxcontainer').eq(0)
    }

    getFeeStructureNewStudentCheckBxInDetailPage() {
        return cy.get('.CustomCheckBoxcontainer').eq(0)
    }

    getFeeStructureExistingStudentCheckBxInDetailPage() {
        return cy.get('.CustomCheckBoxcontainer').eq(1)
    }

    getFeeStructureSelectGradeDrpDwnInDetailPage() {
        return cy.get('#demo-multiple-checkbox')
    }

    getFeeStructureContinueBtnInDetailPage() {
        return cy.get('button[data-testid="continueBtn"]')
    }

    getFeeStructureCancelBtnInDetailPage() {
        return cy.get('button[data-testid="cancelBtn"]')
    }

    verifyFeeManagementTabs(feeStructurePageFeeStructureTitle, feeStructurePagePenaltyMasterTitle, feeStructurePageDiscountMasterTitle, feeStructurePagePaymentGatewayTitle) {
        cy.verifyTextEquals(this.getFeeStructureTabsTitle().eq(0), feeStructurePageFeeStructureTitle)
        cy.verifyTextEquals(this.getFeeStructureTabsTitle().eq(1), feeStructurePagePenaltyMasterTitle)
        cy.verifyTextEquals(this.getFeeStructureTabsTitle().eq(2), feeStructurePageDiscountMasterTitle)
        cy.verifyTextEquals(this.getFeeStructureTabsTitle().eq(3), feeStructurePagePaymentGatewayTitle)
    }

    verifySetUpFeeMastersIsDisplayed() {
        cy.isVisible(this.getSetUpFeeMastersButton())
        cy.isEnabled(this.getSetUpFeeMastersButton())
    }

    verifyFeeManagementPage(feeStructurePageTitle) {
        cy.verifyTextEquals(this.getFeeStructureTitle(), feeStructurePageTitle)
    }

    verifyFeeManagementPageSetUpFeeMasters(feeStructurePageTitleSetUpFeeMasters) {
        cy.verifyTextEquals(this.getFeeStructureTitleSetUpFeeMasters(), feeStructurePageTitleSetUpFeeMasters)
    }

    verifyAddNewFeeStructurePopUp(addNewBtnPageTitle1, addNewBtnPageTitle2) {
        this.getFeeStructureAddNewBtn().click()
        cy.verifyTextContains(this.getFeesStructureAddNewPage(), addNewBtnPageTitle1)
        cy.verifyTextContains(this.getFeesStructureAddNewPage(), addNewBtnPageTitle2)
    }

    verifyActionsTab() {
        cy.isVisible(this.getActionsTab())
        cy.isVisible(this.getActionsCopyIcon())
        cy.isVisible(this.getActionsDeleteIcon())
        cy.isVisible(this.getActionsEditIcon())
    }

    verifyAddNewFeeStructureDetailsPage() {
        cy.isVisible(this.getFeeStructureNameFldInDetailPage())
        cy.isVisible(this.getFeeStructureDescriptionTxtAreaFldInDetailPage())
        cy.isVisible(this.getFeeStructureStartDateFldInDetailPage())
        cy.isVisible(this.getFeeStructureEndDateFldInDetailPage())
        cy.isVisible(this.getFeeStructureNewStudentCheckBxInDetailPage())
        cy.isVisible(this.getFeeStructureExistingStudentCheckBxInDetailPage())
        cy.isVisible(this.getFeeStructureSelectGradeDrpDwnInDetailPage())
        cy.isVisible(this.getFeeStructureContinueBtnInDetailPage())
        cy.isVisible(this.getFeeStructureCancelBtnInDetailPage())
    }

}
module.exports = new AdminFeeManagementFeeStructurePage()