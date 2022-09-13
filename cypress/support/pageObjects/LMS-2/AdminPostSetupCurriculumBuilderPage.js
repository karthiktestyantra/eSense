class AdminPostSetupCurriculumBuilderPage {

    getTitle() {
        return cy.get('div.header-font-cls');
    }

    getGradeLst() {
        return cy.get('tbody.MuiTableBody-root tr th strong');
    }

    getSubLstUnderGrade(){
        return cy.get('tbody tr th.logo-course')
    }

    getEditCurriculumBtnLst(){
        return cy.get('.editBtnBasicInfo:visible')
    }

    getAddChaptertitle(){
        return cy.get('h1.create_curriculum-title')
    }

    getAddCurriculumBtn() {
        return cy.get('td button');
    }

    getStartWithChapterBtn() {
        return cy.get('button[type="button"]').contains("Start With Chapter");
    }

    getTotalSessionsTxtFld() {
        return cy.get('input[placeholder="Enter total sessions"]');
    }
    getEsenseAdminTotalSessionsTxtFld(){
        return cy.get('input[placeholder="Total number of session"]')
    }

    getAddNewChapterCloseIcon() {
        return cy.get('div.curAddChptModl svg.close-icon_create_curriculum');
    }

    getStartWithThemeBtn() {
        return cy.get('button[type="button"]').contains("Start With Theme / Unit");
    }

    getAddThemeAddedBtn(){
        return cy.get('button.MuiButton-containedSizeMedium').contains("Add Theme")
    }

    getAlert () {
        return cy.get('span[role="alert"]')
    }

    getChapterNumTxtFld() {
        return cy.get('div.MuiOutlinedInput-root input[placeholder="Enter Chapter Number"]')
    }

    getChapterName() {
        return cy.get('div.MuiOutlinedInput-root input[placeholder="Enter Chapter Name"]')
    }
    getSubAdminChapterName(){
        return cy.get('div input[placeholder="Enter Chapter Name"]')
    }
    getEsenseAdminThemeNameFld(){
        return cy.get('input[placeholder="Type theme name"]')
    }

    getChapterDescription() {
        return cy.get('div.MuiOutlinedInput-root textarea[placeholder="Enter Chapter Description"]')
    }
    getSubAdminChapterDescription(){
        return cy.get('div.MuiOutlinedInput-root textarea[placeholder="Enter Description"]')
    }
    getAdminThemeDescription(){
        return cy.get('textarea[placeholder="Type theme description"]')
    }

    getContinueBtn() {
        return cy.get('.create_curriculum-btn_container > .MuiButton-contained')
    }

    getReminderPopup() {
        return cy.get('.reminder_text-danger')
    }

    getSuccessfulPopup() {
        return cy.get('.MuiSnackbar-root > .MuiPaper-root')
    }

    getSubAdminViewDtlsDrpDwnLst(){
        return cy.get('tbody tr td button.details-button')
    }

    getSubAdminViewDtlsSubjectLst(){
        return cy.get('tbody tr th.logo-course')
    }

    getSubAdminViewDtlsViewIconLst(){
        return cy.get('.courseList-actions > :nth-child(3) > span > img')
    }

    getSubAdminApproveBtn(){
        return cy.get('button[form="bi-submit"]').contains("Approve")
    }
    
    getSubAdminEditBtn(){
        return cy.get('button[form="bi-submit"]').contains("Edit")
    }

    getSubAdminRejectBtn(){
        return cy.get('button[form="bi-submit"]').contains("Reject")
    }

    getGoBackBtn(){
        return cy.get('div.crtCurrTryBckBtn')
    }

    getApprovalPendingLst(){
        return cy.get('tbody tr td div.ApprovalPending')
    }

    getCurriculumPageTitle(){
        return cy.get('h1').contains("Curriculum")
    }

    getApprovalCurriculumMsg(){
        return cy.get('.footereSecMsg span').contains("if you like to revert click on “ Undo” button")
    }

    getApprovalUndoBtn(){
        return cy.get('button[form="bi-submit"]').contains("Undo")
    }

    getEditAndDeleteIconsLst(){
        return cy.get('span.right-cls-out')
    }

    getMarkCurriculumCheckbox(){
        return cy.get('span.MuiCheckbox-root')
    }

    getSubmitForApprovalBtn(){
        return cy.get('button').contains("submit for approval")
    }

    getApprovalListName(){
        return cy.get('div.approver-list-name')
    }

    getSubmitApprovalSubmitBtn(){
        return cy.get('button.sectionSaveBtn')
    }

    getChapterDltBtn(){
        return cy.get('.delBtnBasicInfo')
    }
    getEsenseAdminChapterLst(){
        return cy.get('h4.text-uppercase')
    }
    getDeleteThemeBtn(){
        return cy.get('button.delete_reminder-btn').contains("Delete")
    }

    getChapterLst(){
        return cy.get('.text-uppercase')
    }
    getSubAdminChapterLst(){
        return cy.get('h4.card_theme')
    }

    getSaveProgressBtn(){
        return cy.get('.continue-btn')
    }

    getDeleteChapterBtn(){
        return cy.get('.MuiButton-contained')
    }
    getSaveDraftBtn(){
        return cy.get('.MuiButton-contained').contains("Save Draft")
    }

    getAddThemeBtn(){
        return cy.get('.crtCurrBtnAct .MuiButton-root')
    }

  }
  export default AdminPostSetupCurriculumBuilderPage;