class Sprint10Regression {

  getTodaysDateInDashboardInTeacher() {
    return cy.get(".Dashboard_tchDshInfoText__z6xIB > div > .MuiTypography-h6");
  }

  getSchoolLogoTeacher() {
    return cy.get(".Dashboard_tchDshInfoCnt__-T7v5 > img");
  }

  getWelcomeMessageTeacher() {
    return cy.get(".MuiTypography-h2");
  }

  getCalendarLink() {
    return cy.get(".Dashboard_tchDshInfoText__z6xIB > .MuiButton-root");
  }

  getNoOfAssessments() {
    return cy.get(".Dashboard_tchDshTimelineCnt___6-lV .cmgSoonOverLay").eq(0);
  }

  getNoOfStudents() {
    return cy.get(".Dashboard_tchDshTimelineCnt___6-lV .cmgSoonOverLay").eq(1);
  }

  getPendingActionsClass() {
    return cy.get(".Dashboard_tchDshPendActScoll__Pu1wU .cmgSoonOverLaySect").eq(0);
  }

  getPendingActionsAttendance() {
    return cy.get(".Dashboard_tchDshPendActScoll__Pu1wU .cmgSoonOverLaySect").eq(1);
  }

  getPendingActionsHomework() {
    return cy.get(".Dashboard_tchDshPendActScoll__Pu1wU .cmgSoonOverLaySect").eq(2);
  }

  getClassMarkCompleteButton() {
    return cy.get(".Dashboard_tchDshPendActBtn__3PCld").eq(0);
  }

  getClassMarkAttendanceButton() {
    return cy.get(".Dashboard_tchDshPendActBtn__3PCld").eq(1);
  }

  getClassAssignHomeworkButton() {
    return cy.get(".Dashboard_tchDshPendActBtn__3PCld").eq(2);
  }

  getClassPerformanceChart() {
    return cy.get(".Dashboard_tchDshPendActFlexSect__E8rdD .flex-fill .cmgSoonOverLay").eq(0);
  }

  getMilestoneProgressChart() {
    return cy.get(".Dashboard_tchDshPendActFlexSect__E8rdD .flex-fill .cmgSoonOverLay").eq(1);
  }

  getStudentCountPendingSubmission(){
    return cy.get('.MuiGrid-root h5');
  }

  getPendingTab(){
    return cy.contains('Pending');
  }

  getHomeworkCard(){
    return cy.get('.mb-0');
  }

  getPendingTabProfilePicture(){
    return cy.get('td .MuiBox-root img');
  }

  getPendingTabStudentName(){
    return cy.get('.student-fullname');
  }

  getPendingTabPendingStatus(){
    return cy.get('p.adminssionNumber');
  }

  getPendingTabNotifyIcon(){
    return cy.get('button[title="Notify Student"]');
  }

  getFileSharedTab(){
    return cy.contains('Files Shared');
  }

  getFileSharedTabViewIcon(){
    return cy.get('span.MuiButton-startIcon').eq(1);
  }

  getEditHomeWorkIcon(){
    return cy.get('button.MuiButton-root').contains('Edit');
  }

  getEditHomeWorkKababMenu(){
    return cy.get('svg[data-testid="MoreVertIcon"]');
  }

  getAttachFileOption(){
    return cy.get('.attache_file');
  }

  getAddResourcesUploadTab(){
    return cy.contains('Upload');
  }

  getAddResourcesCloseIcon(){
    return cy.get('.close-icon_upload-resource');
  }

  getEditHomeworkUpdateButton(){
    return cy.get('.MuiButton-contained');
  }

  getEditHomeworkCard(){
    return cy.get('div.group-title-icon ');
  }

  getEditHomeworkDeleteIcon(){
    return cy.get('.deleteIcon').eq(0);
  }

  getEditHomeworkPopupCloseIcon(){
    return cy.get('.close-icon_notes');
  }

  getFileSharedDeleteIcon(){
<<<<<<< HEAD:cypress/support/pageObjects2/Sprint10Regression.js
    return cy.get('[data-testid="DeleteIcon"] > path').eq(0);
=======
    return cy.get('[data-testid="DeleteIcon"] path').eq(0);
>>>>>>> 41c326dc69c590af026b3a135082e220706451e8:cypress/support/pageObjects/LMS-1/Sprint10Regression.js
  }

  getResourceRemovedMessage(){
    return cy.get('.MuiAlert-message');
  }

  getHomeWorkCardDeleteIcon(){
    return cy.get('img[src="/static/media/deletefilled.523783ca.svg"]');
  }

  getDeleteHomeWorkButton(){
    return cy.get('.dlt_prime')
  }

  getHomeworkDeletedMessage(){
    return cy.get('.MuiAlert-message');
  }

  getCreateNewHomeworkButton(){
    return cy.get('.btn-add-group');
  }

  getCreateNewHomeworkPopupTitle(){
    return cy.get('.add_homework_class-tittle')
  }

  getClassAddHomeworkPopupTitleDetails(){
    return cy.get('.schAdminInputCtr');
  }

  getClassAddHomeworkPopupDescription(){
    return cy.get('.schAdminInputCtrTextarea');
  }

  getClassAddHomeworkPopupDueDate(){
    return cy.get('input[placeholder="dd/mm/yyyy"]');
  }

  getClassAddHomeworkPopupDueTime(){
    return cy.get('input[placeholder="h:mm (a|p)m"]');
  }

  getClassAddHomeworkPopupApproxTime(){
    return cy.get('.addHmeSltInp');
  }

  getManageStudentsOption(){
    return cy.get('.manage_student');
  }

  getAddStudentsSelectAllLink(){
    return cy.get('.select-wrapper p');
  }

  getAddStudentsConfirmButton(){
    return cy.get('.modalSaveBtn');
  }

  getAddStudentsCancelButton(){
    return cy.get('.modalCancelBtn');
  }

  getAddStudentsCloseIcon(){
    return cy.get('.close-icon_notes:visible');
  }

  getAddHomeworkPopupAttachFilesOption(){
    return cy.get('.attache_file');
  }

  getAddHomeworkPopupAddResourcesPopupTitle(){
    return cy.get('.select-content-tittle');
  }

  getAddResourcesTopSchoolLibTab(){
    return cy.get('.select-content-tabs button#simple-tab-0');
  }

  getAddResourcesPersonalLibTab(){
    return cy.get('.select-content-tabs button#simple-tab-1');
  }

  getAddResourcesUploadTab(){
    return cy.get('.select-content-tabs button#simple-tab-2');
  }

  getAddResourcesTopSchoolLibCard(){
    return cy.get('.content-card').eq(0);
  }

  getAddResourcesPersonalLibCard(){
    return cy.get('.content-card').eq(0);
  }

  getAddResourcesPopupAddResourcesbtn(){
    return cy.get('.sectionSaveBtn');
  }

  getAddResourcesPopupCancelbtn(){
    return cy.get('.sectionCancelBtn');
  }

  getAddHomeworkSaveButton(){
    return cy.get('.MuiButton-contained');
  }

  getAddHomeworkCancelButton(){
    return cy.get('.homeworkCancelBtn');
  }

  getHomeworkTitleUnderHomeworkTab(id){
    return cy.get('h6.mb-0').eq(id);
  }

  getHomeworkEditIconUnderHomeworkTab(index){
    return cy.get('svg[data-testid="EditIcon"]').eq(index);
  }

  getHomeworkDeleteIconUnderHomeworkTab(index){
    return cy.get('svg[data-testid="DeleteIcon"]').eq(index);
  }

  getHomeworkDelPopDeleteButton(){
    return cy.get('.MuiButton-contained');
  }

  getDeletedHomeworkMessagePopup(){
    return cy.get('.MuiAlert-message');
  }

  getEditHomeworkPopupCloseIcon(){
    return cy.get('.close-icon_notes:visible');
  }

  getAdminDashboardTitle(){
    return cy.get('.Dashboard_tchDshTitle__3qlHU');
  }

  getAdminDashboardGoToMySchoolLink(){
    return cy.get('.Dashboard_tchDshBtn__1MPHM');
  }

  getTodaysDateInDashboardInAdmin() {
    return cy.get(".Dashboard_tchDshInfoText__1qXCc > div > .MuiTypography-h6");
  }

  getSchoolLogoAdmin() {
    return cy.get(".Dashboard_tchDshInfoCnt__3BnWv > img");
  }

  getWelcomeMessageAdmin() {
    return cy.get(".MuiTypography-h2");
  }

  getAdminDashboardTotalClasses(){
    return cy.get('.Dashboard_tchDshTimelineCnt__2thMj h4').eq(0);
  }

  getAdminDashboardTotalTeachers(){
    return cy.get('.Dashboard_tchDshTimelineCnt__2thMj').eq(1);
  }

  getAdminDashboardTotalStudents(){
    return cy.get('.Dashboard_tchDshTimelineCnt__2thMj').eq(2);
  }

  getAdminDashboardTotalAdmins(){
    return cy.get('.Dashboard_tchDshTimelineCnt__2thMj').eq(3);
  }

  getAdminDashboardContentPerformanceTab(){
    return cy.get('.MuiTab-root:nth-child(2)');
  }

  getAdminDashboardContentPerformanceSection(){
    return cy.get('.cmgSoonOverLaySect .cmgSoonOverLay').eq(0);
  }


}

export default Sprint10Regression;
