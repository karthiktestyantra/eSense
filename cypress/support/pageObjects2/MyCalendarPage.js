class MyCalendarPage {
  getMyCalendar() {
    return cy.contains("My Calendar");
  }

  getYourCalendar() {
    return cy.get(".MuiTypography-h4");
  }

  getCurrentMonth() {
    return cy.get(".mbsc-calendar-month");
  }

  getCurrentYear() {
    return cy.get(".mbsc-calendar-year");
  }

  getMonthWithYear() {
    return cy.get(".mbsc-calendar-button").eq(0);
  }

  getMonthlyViewCalendar() {
    return cy.get(".mbsc-calendar-table").eq(1);
  }

  getCalendarView() {
    return cy.get("div.cal-header-picker select");
  }

  getMonthlyCalendarPreviousIcon() {
    return cy.get(".mbsc-button-icon").eq(0);
  }

  getMonthlyCalendarForwardIcon() {
    return cy.get(".mbsc-button-icon").eq(1);
  }

  getCalendarRightSideForwardIcon() {
    return cy.get(".cal-header-next");
  }

  getCreateNew() {
    return cy.get(".MuiButton-root").eq(1);
  }

  getCreateNewPopupTitle() {
    return cy.get(
      "div.calendar-popover-txt-cont>p.MuiTypography-root:nth-of-type(1)"
    );
  }

  getCreateNewReminderCloseIcon(){
    return cy.get('svg.close-icon_reminder')
  }

  getHeaderFromToDate() {
    return cy.get(".md-custom-header-nav");
  }

  getFilterSearch() {
    return cy.get(".MuiOutlinedInput-input");
  }

  getSelectAll() {
    return cy.get(".MuiTypography-root").eq(1);
  }

  getEvent() {
    return cy.get(".MuiTypography-root").eq(2);
  }

  getExam() {
    return cy.get(".MuiTypography-root").eq(3);
  }

  getReminders() {
    return cy.get(".MuiTypography-root").eq(6);
  }

  getAppointments() {
    return cy.get(".MuiTypography-root").eq(7);
  }

  getHolidays() {
    return cy.get(".MuiTypography-root").eq(4);
  }

  getClasses() {
    return cy.get(".MuiTypography-root").eq(5);
  }

  getReminderCheckbox() {
    return cy.get('input[name="Reminders"]');
  }

  getReminderUnderCreateNewButton() {
    return cy.get("div.MuiPaper-root>div>a>div.calendar-content-popover").eq(0);
  }
  getAppointmentsUnderCreateNewButton() {
    return cy.get("div.MuiPaper-root>div>a>div.calendar-content-popover").eq(1);
  }

  getLiveClassesUnderCreateNewButton() {
    return cy.get("div.MuiPaper-root>div>a>div.calendar-content-popover").eq(2);
  }

  getReminderPopupTitle() {
    return cy.get("h1.reminder_title_popup");
  }

  getAttachAFile() {
    return cy.get("#new-front-file+.w-100 p");
  }

  getSampleClass(){
    return cy.get('.md-custom-event-details')
  }

  getClassPopupTitle(){
    return cy.get('.view_live_class-tittle')
  }

  getClassPopupCloseIcon(){
    return cy.get('[data-testid="CloseIcon"]:visible')
  }

  getNotesAttached(){
    return cy.get('div.notes_border div div p')
  }

  getRescheduleClass(){
    return cy.get('.view_live_class-content>div.view_live_class-btn_container>.MuiButton-root').eq(0);
  }

  getNotesAttached(){
    return cy.get('div.notes_border div div p').eq(0);
  }

  getNotesAttachedViewButton(){
    return cy.get('.noteAttViewBtn').eq(0);
  }

  getNotesAttachedPopupTitle(){
    return cy.get('.view_notes-tittle')
  }

  getNotesAttachedSearchBar(){
    return cy.get('input[placeholder="Search"]:visible');
  }

  getNotesAttachedPopupCloseIcon(){
    return cy.get('.close-icon_notes')
  }

  getNotesAttachedAddNote(){
    return cy.get('.view_notes-btn_container');
  }

  getNotesAttachedLinkedToThis(){
    return cy.contains('Linked to this');
  }

  getNotesAttachedAllNotes(){
    return cy.contains('All Notes');
  }

  getAddNoteAddTitle(){
    return cy.get('.new_note-title');
  }

  getAddNoteAddDescription(){
    return cy.get('.ql-editor');
  }

  getAddNoteBackToNoteList(){
    return cy.get('.new_note-content>button:nth-child(1)');
  }

  getAddedNoteTitleVerify(){
    return cy.get('.view_note-title');
  }

  getAddedNoteEdit(){
    return cy.get('div.note').eq(0);
  }

  getAddNoteActionIcon(){
    return cy.get('.new_note-content>button.css-1ujsas3>svg:nth-child(1)');
  }

  getAddedNoteDeleteNoteButton(){
    return cy.get('li>button').eq(1);
  }

  getDeletePopupMessage(){
    return cy.get('.new_note-delete-modal>p');
  }

  getAddedNoteDelete(){
    return cy.contains('Delete');
  }

  getAddedNoteCancel(){
    return cy.get('.new_note-delete-confirm>button:nth-child(2)>span');
  }

  getSelectDateUnderRescheduledClass(){
    return cy.get('input[placeholder="dd mmm yyyy"]');
  }

  getMonthlyCalendarDisplayedInSelectDate(){
    return cy.get('.MuiCalendarPicker-root');
  }

  getRequestLeave(){
    return cy.get('.myCalRqtLev');
  }

  getRequestLeavePopupTitle(){
    return cy.get('.leaveRqtTit');
  }

  getRequestLeaveType(){
    return cy.get('.leaveRqtLeveTypeOpt p:visible');
  }

  getRequestLeaveSpecifyReasonTextBox(){
    return cy.get('.request_input_txtarea');
  }

  getRequestLeaveStartDate(){
    return cy.get('.schAdminInputCtrDate').eq(0);
  }

  getStartDateTodaysDate(){
    return cy.get('button.MuiPickersDay-today');
  }

  getRequestLeaveEndDate(){
    return cy.get('.schAdminInputCtrDate').eq(1);
  }

  getEndDateTodaysDate(){
    return cy.get('button.MuiPickersDay-today');
  }

  getSendRequestButton(){
    return cy.get('.leaveRqtAction');
  }

  getRequestSentMessage(){
    return cy.get('h4.MuiTypography-h4');
  }

  getClassAddHomeworkOption(){
    return cy.get('.noteAttViewBtn').eq(1);
  }

  getClassAddHomeworkPopupTitle(){
    return cy.get('.add_homework-tittle');
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
    return cy.get('#demo-simple-select');
  }

  getClassAddHomeworkPopupManageStudents(){
    return cy.get('.manage_student');
  }

  getClassAddHomeworkPopupSelectAllStudents(){
    return cy.get('.select-wrapper > p');
  }

  getClassAddHomeworkStudentPopupConfirmButton(){
    return cy.get('.modalSaveBtn');
  }

  getClassAddHomeworkStudentPopupCancelButton(){
    return cy.get('.modalCancelBtn:visible');
  }

  getClassAddHomeworkPopupCloseIcon(){
    return cy.get('.close-icon_notes:visible');
  }

  getClassAddHomeworkPopupAddStudentCloseIcon(){
    return cy.get('.close-icon_notes:visible');
  }

  getClassAddHomeworkPopupAttachFiles(){
    return cy.get('.attache_file');
  }

  getClassAddHomeworkPopupAddResourcesPopupTitle(){
    return cy.get('.select-content-tittle');
  }

  getAddResourcesTopSchoolLibTab(){
    return cy.get('#simple-tab-0');
  }

  getAddResourcesPersonalLibTab(){
    return cy.get('#simple-tab-1');
  }

  getAddResourcesUploadTab(){
    return cy.get('#simple-tab-2');
  }

  getAddResourcesPersonalLibCard(){
    return cy.get('.MuiCardContent-root:visible').eq(0);
  }

  getAddResourcesTabAddResourcesbtn(){
    return cy.get('.sectionSaveBtn');
  }

  getAddResourcesTabCancelbtn(){
    return cy.get('.sectionCancelBtn');
  }

  getClassAddHomeworkPopupSaveButton(){
    return cy.get('.homeworkSaveBtn span');
  }

  getClassAddHomeworkPopupCancelButton(){
    return cy.get('.homeworkCancelBtn span');
  }

   getUploadTabUploadedFile(){
    return cy.get('.uploadedItem');
  }

  getAddResourcesPopupCloseIcon(){
    return cy.get('.close-icon_upload-resource')
  }

  getAddHomeworkSaveButton(){
    return cy.get('.homeworkSaveBtn')
  }

  getHomeworkViewButton(){
    return cy.get('.noteAttViewBtn:visible').eq(1);
  }

  getHomeworkTitle(id){
    return cy.get('.title').eq(id);
  }

  getHomeworkDeleteIcon(index){
    return cy.get('.deleteIcon:visible').eq(index);
  }

  getHomeworkDelPopDeleteButton(){
    return cy.get('.dlt_prime');
  }

  getDeletedHomeworkMessagePopup(){
    return cy.get('.MuiAlert-message');
  }

  getHomeworkEditIcon(index){
    return cy.get('.editIcon').eq(index);
  }

  getClassEditHomeworkPopupCloseIcon(){
    return cy.get('.close-icon_notes:visible');
  }
}
export default MyCalendarPage;
