class AdminGradeBookPage {

    getStudentGradebookLnk() {
        return cy.get('div.popper-sub-student div.classTitle').contains("Student Gradebook");
    }
    getStudentGradebookTab() {
        return cy.get('#simple-tab-1')
    }
    getCreateTemplateBtn() {
        return cy.get('span.buttonArea a').contains("Create Template")
    }
    getStudentGradeBooktitle() {
        return cy.get('p.GradeBook_classDashboardTitle__HNF4O')
    }
    getNewTemplateTitleTxt() {
        return cy.get('p.CreateNewTemplate_classDashboardTitle__33WyN')
    }
    getMySchoolRadioBtn() {
        return cy.get('input[type="radio"]').eq(0)
    }
    getTopSchoolRadioBtn() {
        return cy.get('input[type="radio"]').eq(1)
    }
    getGradeDrpDwn() {
        return cy.get('div.MuiInputBase-root div').eq(0)
    }
    getGradeLst() {
        return cy.get('div ul li.MuiListItem-gutters')
    }
    getSectionDrpDwn() {
        return cy.get('div.MuiInputBase-root div').eq(1)
    }
    getSectionsLst() {
        return cy.get('div ul li.MuiListItem-gutters:visible')
    }
    getNoOfTermsDrpDwn() {
        return cy.get('div.MuiInputBase-root div').eq(2)
    }
    getAddTestBtn() {
        return cy.get('button[data-testid="add-test"]')
    }
    getAlertMsgTxt() {
        return cy.get('div.MuiAlert-message')
    }
    getDltTestBtnLst() {
        return cy.get('button[aria-label="Delete Test"]')
    }
    getAddTestTermDrpDwn() {
        return cy.get('#mui-component-select-testType')
    }
    getAddTestTermDrpDwnLstTxt() {
        return cy.get('span.MuiTypography-displayBlock')
    }
    getAddTestTstTypeDrpdwn() {
        return cy.get('div.MuiInputBase-formControl #demo-simple-select-helper').eq(2)
    }
    getMaxMarksDrpDwn() {
        return cy.get('div.MuiInputBase-formControl #demo-simple-select-helper').eq(3)
    }
    getMaxMarksDrpDwnbtn() {
        return cy.get('#menu-maxMarks > .MuiPaper-root')
    }
    getAddSubBtn() {
        return cy.get('[data-testid="add-subject"]')
    }
    getCodeTxtLst() {
        return cy.get('div.CreateNewTemplate_font_cls__1GV1K')
    }
    getSubTxtLst() {
        return cy.get('.CreateNewTemplate_crtNewTempAddThyContr__1H9Jb > .MuiFormControl-root')
    }
    getAddTheoryBtnLst() {
        return cy.get('button.GradeBook_addSubject__3ViKl')
    }
    getAddTestTypeDrpDwnInAddTheory() {
        return cy.get('.CreateNewTemplate_crtNewTempCodeSubInner__1YOJm > .adminTempContSelctFild > .MuiInputBase-root > #demo-simple-select-helper')
    }
    getAddTheoryAddTermDrpDwnLst() {
        return cy.get('.MuiList-root > .MuiButtonBase-root')
    }
    getAddTheoryTheoryFld() {
        return cy.get('input[name="theoryMarks"]')
    }
    getAddTheoryPracticalFld() {
        return cy.get('input[name="practicalMarks"]')
    }
    getErrorMsgTxt() {
        return cy.get('.CreateNewTemplate_error_cls__vA6Ph')
    }
    getAddTheoryDltBtnLst() {
        return cy.get('.CreateNewTemplate_crtNewTempCodeSubInner__1YOJm > .MuiButton-root > img')
    }
    getAddActivityBtn() {
        return cy.get('button[data-testid="add-activity"]')
    }
    getActivityDrpDwn() {
        return cy.get('input[name="activity"]')
    }
    getDltActivityBtnLst() {
        return cy.get('button[aria-label="Delete Activity"]')
    }
    getPracticalFld() {
        return cy.get('.CreateNewTemplate_crtNewTempCodeSubInner__1YOJm > :nth-child(3) > .MuiInputBase-root > .MuiInputBase-input')
    }
    getSaveAndPreviewBtn() {
        return cy.get('button.CreateNewTemplate_templateButton__2dBPW').contains("Save And Preview")
    }
    getCancelBtn() {
        return cy.get('button.StudentGradeBook_stdGrdPrevActionCanBtn__3DAlD').contains("Cancel")
    }
    getGradesLstInTemplate() {
        return cy.get('p.name')
    }
    getViewIconsLst() {
        return cy.get('button.MuiIconButton-root')
    }
    getEditBtnInViewPage() {
        return cy.get('.CreateNewTemplate_templateButton__2dBPW')
    }
    getCreateNwBtnInViewPage() {
        return cy.get('a.CreateNewTemplate_createNewButton__28cfS')
    }
    getGoBackBtn() {
        return cy.get('span').contains("Go Back")
    }
    getAddSubdrpDwnInAddSub() {
        return cy.get('#mui-component-select-subject')
    }
    getStudentGradeBookTitle() {
        return cy.get('p[class*=classDashboardTitle]')
    }
    getDltBtnLstForTemplatePage() {
        return cy.get('div.action-btn-container img[aria-label="Delete"]')
    }
    getDeleteConfirmationBtnInTemplate() {
        return cy.get('div[class="delete-button"]')
    }
    getShowingDropdownsForInStudentGradebook() {
        return cy.get('[class*="gradeBookSelectField"] div')
    }
    getShowingDropdownListForInStudentGradebook() {
        return cy.get('[role="listbox"] li')
    }
    getTotalScoreDownArrowIconStudentGradebook() {
        return cy.xpath('//span[text()="TOTAL SCORE"]/*[@data-testid="ArrowDropDownIcon"]')
    }
    getFullNameListStudentGradebook() {
        return cy.xpath('//tbody//td[3]')
    }
    getStudentSearchBoxStudentGradebook() {
        return cy.get('[type="text"]')
    }
    getTotalScoreListStudentGradebook() {
        return cy.xpath('//tbody//td[5]//span')
    }
    getTotalScoreStudentGradebookDynamic(name) {
        return cy.xpath("//td[text()=\""+name+"\"]/ancestor::tr//td[5]//span")
    }
    getForwardIconForDetailsStudentGradebookDynamic(name) {
        return cy.xpath("//td[text()=\""+name+"\"]/ancestor::tr//*[@data-testid='ArrowForwardIosIcon']")
    }
    getForwardIconForDetailsStudentGradebook() {
        return cy.get('[data-testid="ArrowForwardIosIcon"]')
    }
    getTotalPercentageGradebookPage() {
        return cy.xpath('(//div[contains(@class,"StudentGradeBook_stdGrdBkCrdStatSectInfoCnt")]/h1)[1]')
    }
    getGoBackButtonGradebookPage() {
        return cy.get('[class*="MuiButtonBase-root StudentGradeBook_stdGrdActionGoBkBtn"]')
    }
    getMarksObtainedTabGradebookPage() {
        return cy.xpath('//td[@style][3]//td')
    }
}


module.exports = new AdminGradeBookPage() 
