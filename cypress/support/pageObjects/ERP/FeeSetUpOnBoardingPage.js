class FeeSetUpOnBoardingPage {

    getFeeStructureAddNewBtn() {
        return cy.xpath('//button[text()="Add New"]')
    }

    getFeesStructureAddNewPage() {
        return cy.get('#customized-dialog-title div')
    }

    getFeeStructureTitle() {
        return cy.get('p.feetitle')
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

    getOnSetUpFeeMastersOrAddNewButton() {
        return cy.get('button[class*="MuiButton-size"]').eq(0)
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

    getFeeStructureContinueBtn() {
        return cy.get('button.continue-btn')
    }

    getFeeStructureCancelBtnInDetailPage() {
        return cy.get('button[data-testid="cancelBtn"]')
    }

    getFeeStructureNameTextfield() {
        return cy.get('#outlined-basic')
    }

    getDescriptionTextAreaField() {
        return cy.get('textarea[id="outlined-basic"]')
    }

    getStartDateIcon() {
        return cy.get('.MuiIconButton-edgeEnd').eq(0)
    }

    getEndDateIcon() {
        return cy.get('.MuiIconButton-edgeEnd').eq(1)
    }

    getStartDate(StartDate) {
        return cy.xpath('//button[text()="' + StartDate + '"]')
    }

    getEndDate(EndDate) {
        return cy.xpath('//button[text()="' + EndDate + '"]')
    }

    getEndDateRightArrowIcon() {
        return cy.get('[data-testid="ArrowRightIcon"]')
    }

    getNewStudentCheckBox() {
        return cy.get('[data-testid="newStudent"]')
    }

    getExisitingCheckBox() {
        return cy.xpath('//input[@data-testid="existingStudent"]')
    }

    getSelectGrade() {
        return cy.get('[id="demo-multiple-checkbox"]')
    }

    getGrade3() {
        return cy.get('[data-value="Grade 3"]')
    }

    getContinueButton() {
        return cy.xpath('//div[@class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0"]//button[@type="submit"]')
    }

    getCancelButton() {
        return cy.xpath('//button[text()="Cancel"]')
    }

    clickOnOutSide() {
        return cy.get('body').click(0, 0)
    }

    getStartDateErrorMessage() {
        return cy.xpath('//p[text()="Start Date required"]')
    }

    getEndDateErrorMessage() {
        return cy.xpath('//p[text()="End Date required"]')
    }

    getFeeStructureNameErrorMessage() {
        return cy.xpath('//p[text()="Fee Structure Name Required"]')
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
        cy.wait(1500)
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

    clickOnAddNewButton() {
        this.getFeeStructureAddNewBtn().click()
    }

    clickOnSetUpFeeMastersButton() {
        this.getSetUpFeeMastersButton().click()
    }

    clickOnSetUpFeeMastersOrAddNewButton() {
        this.getOnSetUpFeeMastersOrAddNewButton().click()
    }

    enterAllFeeStructureDetails(FeeStructureName, Description, StartDate, EndDate) {
        this.getFeeStructureNameTextfield().type(FeeStructureName)
        this.getDescriptionTextAreaField().type(Description)
        this.getStartDateIcon().click()
        cy.forceClick(this.getStartDate(StartDate))
        cy.wait(1000)
        cy.forceClick(this.getEndDateIcon())
        cy.forceClick(this.getEndDateRightArrowIcon())
        cy.wait(1000)
        this.getEndDate(EndDate).click({ waitForAnimations: false })
        this.verifyApplicableForStudentCheckbox()
        cy.unCheckAndVerify(this.getNewStudentCheckBox())
        this.getSelectGrade().click()
        this.getGrade3().click()
        this.clickOnOutSide()
        cy.forceClick(this.getContinueButton())
    }

    verifyElementsInAddNewFeeStructurePage() {
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
    validateAnErrorMessageStartDateErrorMessage(startDaterequired) {
        this.getStartDateErrorMessage().should('have.text', startDaterequired)
    }

    validateAnErrorMessageEndDateErrorMessage(endDaterequired) {
        this.getEndDateErrorMessage().should('have.text', endDaterequired)
    }

    verifyAddNewFeeStructureDescriptionTextareafield(feeStructureDescription) {
        this.getDescriptionTextAreaField().type(feeStructureDescription)
    }

    validateAddNewFeeStructureErrorMessageFeeStructureName(FeeStructureNameRequired) {
        this.getContinueButton().click()
        this.getFeeStructureNameErrorMessage().should('have.text', FeeStructureNameRequired)
    }

    validateAddNewFeeStructureNameTextField(feestuctureString, lengthnumber, feeStructureName) {
        this.getFeeStructureNameTextfield().type(feestuctureString).invoke('val').should('have.length', lengthnumber)
        this.getFeeStructureNameTextfield().clear().type(feeStructureName)
    }

    verifyApplicableForStudentCheckbox() {
        cy.checkAndVerify(this.getNewStudentCheckBox())
        cy.checkAndVerify(this.getExisitingCheckBox())
    }

    verifyFeesStructureContinueBtnEveryTab() {
        this.getFeeStructureTabsTitle().each(($e1, index, $list) => {
            cy.wrap($e1).click()
            cy.isDisabled(this.getFeeStructureContinueBtn())
        })
        this.getFeeStructureTabsTitle().eq(0).click()
    }

    clickOnFeeStructureContinueBtn(){
        this.getFeeStructureContinueBtn().click()
    }

}
module.exports = new FeeSetUpOnBoardingPage()