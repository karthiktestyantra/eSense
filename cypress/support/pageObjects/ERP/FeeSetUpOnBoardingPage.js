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
        return cy.xpath('//*[.="Fee Structure" and contains(@class,"css")]')
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

    getAddNewFeeStructureTitle() {
        return cy.xpath('//div[contains(text(),"Fee Structure")]')
    }

    getFeeStructureTextAreaFldInDetailPage() {
        return cy.get('div textarea[name="feeStructureDescription"]')
    }

    getSetUpFeeMastersButton() {
        return cy.xpath('//button[.="Setup Fee Masters"]')
    }

    getOnSetUpFeeMastersOrAddNewButton() {
        return cy.xpath('//button[.="Setup Fee Masters" or  .="Add New"]')
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

    getEndDateLeftArrowIcon() {
        return cy.get('[data-testid="ArrowLeftIcon"]')
    }

    getDeleteConfirmButton() {
        return cy.xpath('//button[.="Delete"]')
    }

    getFeeStructureDeletedMsg() {
        return cy.xpath('//p[contains(text(),"fee structures have been deleted.")]')
    }

    getEditFeeStructureTitle() {
        return cy.xpath('//div[.="Edit Fee Structure"]')
    }

    getFeeStructureDeletedMsgCloseIcon() {
        return cy.get('[data-testid="CloseIcon"]')
    }

    getSaveButtonFeeStructure() {
        return cy.xpath('//button[.="Save"]')
    }

    getCancelButtonFeeStructure() {
        return cy.xpath('//button[.="Cancel"]')
    }

    getSaveAddNewButtonFeeStructure() {
        return cy.xpath('//button[.="Save & Add New"]')
    }

    getFeeStructureDeleteIconDynamic(FeeStructure) {
        return cy.xpath('//td[.="' + FeeStructure + '"]/ancestor::tr//img[@class="deleteIcon"]')
    }

    getFeeStructureDeleteIcon() {
        return cy.xpath('//img[@class="deleteIcon"]')
    }

    getFeeStructureCreatedMsg() {
        return cy.get('[class*="MuiAlert-message"]', { timeout: 10_000 })
    }

    getFeeStructureEditIconDynamic(FeeStructure) {
        return cy.xpath('//td[.="' + FeeStructure + '"]/ancestor::tr//img[@class="editIcon"]')
    }

    getFeeStructureNameInListDynamic(FeeStructure) {
        return cy.xpath('//td[.="' + FeeStructure + '"]')
    }

    getFeeStructureGradeInListDynamic(FeeStructure, Grade) {
        return cy.xpath('//td[.="' + FeeStructure + '"]/../td[.="' + Grade + ' "]')
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

    getGradeFeeStructure(Grade) {
        return cy.get('[data-value="' + Grade + '"]')
    }

    getContinueButton() {
        return cy.xpath('//div[@role="presentation"]//button[text()="Continue"]')
    }

    getCancelButton() {
        return cy.xpath('//button[text()="Cancel"]')
    }

    getAddCustomButton() {
        return cy.xpath('//*[normalize-space(text())="+ Add Custom"]')
    }

    getFeeInstallmentsCheckboxes() {
        return cy.xpath('//div[@role="dialog"]//input[@type="checkbox"]')
    }

    getFeeInstallmentsCheckboxCustonInstallment() {
        return cy.get('[name="customInstalment"]').eq(0)
    }

    getFeeInstallmentsCheckboxChecked() {
        return cy.get('[class*="Mui-checked"] [type="checkbox"]')
    }

    getFeeInstallmentsDropdowns() {
        return cy.get('[aria-haspopup="listbox"]')
    }

    getFeeInstallmentsCalenderYearIcon() {
        return cy.get('[class*="MuiPickersCalendarHeader-label css"]')//cy.get('[class*="MuiCalendarPicker-root"] [data-testid="ArrowDropDownIcon"]')
    }

    getFeeInstallmentsCalenderIcons() {
        return cy.get('[aria-label="Choose date"] svg')
    }

    getFeeStructureScrollBar() {
        return cy.get('[class="MuiDialogContent-root css-1ty026z"]')
    }

    getFeeInstallmentNameTextfield() {
        return cy.get('[data-testid="InstalmentNameId"]')
    }

    getCustomFeeInstallmentDeleteIcon() {
        return cy.get('[class="deleteBox"] img')
    }

    getFeeInstallmentsSetAsDefaultBtn() {
        return cy.get('[class*="PrivateSwitchBase-input MuiSwitch"]')
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

    getAddFeeStructureFeeTypeTabs() {
        return cy.xpath('//div[@id="simple-tabpanel-1"]//tr//th')
    }

    getMandatoryFeeBtn() {
        return cy.get('[class*="MuiSwitch-colorPrimary PrivateSwitchBase-root"] [data-testid="switchBtn"]')
    }

    getFeeAmountTextField() {
        return cy.get('[data-testid="feeTypeAmount"]')
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
        cy.wait(2000)
        cy.verifyTextContains(this.getFeeStructureTitleSetUpFeeMasters(), feeStructurePageTitle)
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

    verifyFeeStructureFeeTypePage() {
        this.getAddFeeStructureFeeTypeTabs().should('be.visible').should('have.length', 4)
        this.getMandatoryFeeBtn().last().click()
        this.getFeeAmountTextField().each(($el, index) => {
            cy.wrap($el).clear().type((index + 1) * 1000)
        })
        cy.forceClick(this.getContinueButton())
        cy.wait(1500)
    }

    verifyFeeInstallmentsCheckboxChecked() {
        this.getFeeInstallmentsCheckboxChecked().eq(0).click()
        cy.wait(1500)
    }

    verifySaveButtonFeeStructure(feeStructureName, grade) {
        this.getSaveButtonFeeStructure().click({ waitForAnimations: false })
        this.getFeeStructureCreatedMsg().should('be.visible')
        this.getFeeStructureCreatedMsg().invoke('text', ("Fee Structure " + feeStructureName + " Created."))
        cy.wait(4000)
        cy.isVisible(this.getFeeStructureNameInListDynamic(feeStructureName))
        cy.isVisible(this.getFeeStructureGradeInListDynamic(feeStructureName, grade))
    }

    verifySaveAddNewButtonFeeStructure(feeStructureName) {
        this.getSaveAddNewButtonFeeStructure().click({ waitForAnimations: false })
        this.getFeeStructureCreatedMsg().should('be.visible')
        cy.verifyTextEquals(this.getFeeStructureCreatedMsg(), ('Fee Structure ' + feeStructureName + ' Created.'))
    }

    verifyCancelButtonFeeStructure(feeStructureName) {
        this.getCancelButtonFeeStructure().click()
        cy.wait(2000)
        this.getFeeStructureNameInListDynamic(feeStructureName).should('not.exist')
    }

    verifyEditButtonSaveFeeStructure(feeStructureName) {
        this.getFeeStructureEditIconDynamic(feeStructureName).should('be.visible').click()
        cy.wait(1000)
        cy.isVisible(this.getEditFeeStructureTitle())
    }

    verifyDeleteButtonFeeStructure(feeStructureName) {
        this.getFeeStructureDeleteIconDynamic(feeStructureName).should('be.visible').click()
        cy.wait(1000)
        this.getDeleteConfirmButton().click()
        cy.isVisible(this.getFeeStructureDeletedMsg())
        this.getFeeStructureDeletedMsgCloseIcon().click()
        cy.wait(2000)
        this.getFeeStructureDeleteIconDynamic(feeStructureName).should('not.exist')
    }

    verifyDeleteButtonAllFeeStructure() {
        cy.get('body').then(($el) => {
            if ($el.find('[class="deleteIcon"]').length > 0) {
                this.getFeeStructureDeleteIcon().then((delLen) => {
                    for (let index = 0; index < delLen.length; index++) {
                        this.getFeeStructureDeleteIcon().eq(0).click()
                        cy.wait(1000)
                        this.getDeleteConfirmButton().click()
                        cy.isVisible(this.getFeeStructureDeletedMsg())
                        this.getFeeStructureDeletedMsgCloseIcon().click()
                        cy.wait(3000)
                    }
                })
            }
        })
    }

    verifyFeeStructureFeeInstallmentsPage() {
        this.getFeeInstallmentsCheckboxes().then(($el) => {
            const uuid = () => Cypress._.random(0, $el.length - 1)
            const index = uuid()
            cy.wrap($el).eq(index).click()
            this.getAddCustomButton().click()
            cy.wait(1000)
            this.getFeeInstallmentsCheckboxes().last().check()
            cy.wait(1000)
            this.getFeeInstallmentNameTextfield().type('SpecialFee')
            cy.wait(1000)
            this.getCustomFeeInstallmentDeleteIcon().click()
            cy.wait(1000)
            this.getFeeInstallmentsSetAsDefaultBtn().eq(0).click()
            this.getFeeInstallmentsDropdowns().each(($el) => {
                cy.wrap($el).click()
                cy.focused().click()
                cy.wait(1000)
            })
            if (index > 0) {
                this.getFeeInstallmentsCalenderIcons().each(($el, index) => {
                    cy.wrap($el).scrollIntoView().click()
                    cy.wait(1500)
                    this.getFeeInstallmentsCalenderYearIcon().scrollIntoView().click({ waitForAnimations: false })
                    cy.wait(1000)
                    cy.contains('2023').click({ waitForAnimations: false })
                    cy.wait(1000)
                    this.getEndDateLeftArrowIcon().click({ waitForAnimations: false })
                    cy.wait(1000)
                    this.getEndDate(index + 3).click({ waitForAnimations: false })
                })
            }
        })
        cy.wait(1500)
    }

    verifyAddNewFeeStructureDetailsPage() {
        cy.wait(2000)
        cy.isVisible(this.getAddNewFeeStructureTitle())
        cy.isVisible(this.getFeeStructureNameFldInDetailPage())
        cy.isVisible(this.getFeeStructureDescriptionTxtAreaFldInDetailPage())
        cy.isVisible(this.getFeeStructureStartDateFldInDetailPage())
        cy.isVisible(this.getFeeStructureEndDateFldInDetailPage())
        cy.isVisible(this.getFeeStructureNewStudentCheckBxInDetailPage())
        cy.isVisible(this.getFeeStructureExistingStudentCheckBxInDetailPage())
        cy.isVisible(this.getFeeStructureSelectGradeDrpDwnInDetailPage())
        this.getContinueButton().scrollIntoView()
        cy.isVisible(this.getContinueButton())
        cy.isVisible(this.getFeeStructureCancelBtnInDetailPage())
    }

    clickOnAddNewButton() {
        this.getFeeStructureAddNewBtn().click()
    }

    clickOnSetUpFeeMastersButton() {
        this.getSetUpFeeMastersButton().click()
    }

    clickOnSetUpFeeMastersOrAddNewButton() {
        cy.forceClick(this.getOnSetUpFeeMastersOrAddNewButton())
    }

    enterAllFeeStructureDetails(FeeStructureName, Description, StartDate, EndDate, Grade) {
        this.getFeeStructureNameTextfield().clear().type(FeeStructureName)
        this.getDescriptionTextAreaField().clear().type(Description)
        this.getStartDateIcon().click()
        cy.forceClick(this.getStartDate(StartDate))
        cy.wait(1000)
        cy.forceClick(this.getEndDateIcon())
        cy.forceClick(this.getFeeInstallmentsCalenderYearIcon())
        cy.contains('2023').click({ force: true })
        cy.wait(1000)
        this.getEndDate(EndDate).click({ waitForAnimations: false })
        this.verifyApplicableForStudentCheckbox()
        this.getSelectGrade().click({ waitForAnimations: false })
        this.getGradeFeeStructure(Grade).click()
        cy.wait(2000)
        cy.forceClick(this.getContinueButton())
        cy.get('body').then(($el) => {
            if ($el.find('[class*="css-1xfhtg"]').length > 0) {
                this.getSelectGrade().click()
                this.getGradeFeeStructure(Grade).click()
                cy.wait(2000)
                cy.forceClick(this.getContinueButton())
            }
        })
        cy.wait(1500)
    }

    enterAllEditFeeStructureDetails(FeeStructureName, Description, Grade) {
        this.getFeeStructureNameTextfield().clear().type(FeeStructureName)
        this.getDescriptionTextAreaField().clear().type(Description)
        this.getSelectGrade().click({ waitForAnimations: false })
        this.getGradeFeeStructure(Grade).click()
        cy.wait(2000)
        cy.forceClick(this.getContinueButton())
        cy.get('body').then(($el) => {
            if ($el.find('[class*="css-1xfhtg"]').length > 0) {
                this.getSelectGrade().click()
                this.getGradeFeeStructure(Grade).click()
                cy.wait(2000)
                cy.forceClick(this.getContinueButton())
            }
        })
        cy.wait(1500)
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

    clickOnFeeStructureContinueBtn() {
        this.getFeeStructureContinueBtn().click()
    }

}
module.exports = new FeeSetUpOnBoardingPage()