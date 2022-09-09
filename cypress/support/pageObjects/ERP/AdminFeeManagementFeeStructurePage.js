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
        return cy.xpath('//p[.="Fee Structure"]')
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

    clickOnOutSide(){
        return cy.get('body').click(0,0)
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

    clickOnSetUpFeeMastersButton(){
        this.getSetUpFeeMastersButton().click()
        cy.wait(1000)
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
        this.clickOnOutSide()
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

}
module.exports = new AdminFeeManagementFeeStructurePage()