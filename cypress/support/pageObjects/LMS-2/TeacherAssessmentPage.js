class TeacherAssessmentPage {
   getMyClassSubName() {
      return cy.get('div.card_roman_txt').contains('Grade 3 A')
   }
   getAssessmentTab() {
      return cy.get('button.MuiButtonBase-root').contains('Assessments')
   }
   getCreateNewHomeworkBtn() {
      return cy.get('button.prime_btn')
   }
   getCreateHomeWorkPopupScreen() {
      return cy.get('.add_homework_class-content')
   }
   getCreateHomeworkTitleInPopup() {
      return cy.get('h1.add_homework_class-tittle')
   }
   getHomeworkTitleTxtFldInPopup() {
      return cy.get('.schAdminInputCtr')
   }
   getDescriptionTxtFldInPopup() {
      return cy.get('textarea.MuiInputBase-input:visible')
   }
   getDueDateInPopup() {
      return cy.get('input[placeholder="dd/mm/yyyy"]')
   }
   getTodaysDateInDatePicker() {
      return cy.get('button.MuiPickersDay-today')
   }
   getTimePickerInPopup() {
      return cy.get('input[placeholder="h:mm (a|p)m"]')
   }
   getPMTimeInTimePicker() {
      return cy.get('button span.MuiTypography-caption:visible').contains("PM")
   }
   get11PMTimePicker() {
      return cy.get('div[role="listbox"] span[aria-label="11 hours"]:visible')
   }
   get45MinsTimePicker() {
      return cy.get('div[role="listbox"] span[aria-label="45 minutes"]:visible')
   }
   getApproxTimeRequiredDrpDwnInPopup() {
      return cy.get('div.addHmeSltInp')
   }
   getApproxTimeDrpDwnLstInPopup() {
      return cy.get('div ul li.MuiMenuItem-gutters')
   }
   getSubmitBtnInCreateHomeworkPopup() {
      return cy.get('button[type="submit"]')
   }
   getHomeworkCreatedSuccessPopup() {
      return cy.contains("Homework Created!")
   }
   getHomeworkUpdatedSuccessPopup(){
      return cy.contains('Homework Updated!')
   }
   getHomeWorkLstInAssessmentPage() {
      return cy.get('h6.mb-0')
   }
   getDeleteHomeWorkBtnLstInAssessmentPage() {
      return cy.xpath("//div[contains(@class,'justify-content-end')]//div[2]/img")
   }
   getEditHomeWorkBtnLstInAssessmentPage() {
      return cy.xpath("//div[contains(@class,'justify-content-end')]//div[1]/img")
   }
   getDeleteReminderPopup() {
      return cy.get('p.delete_reminder-title').contains("Do you want to delete this homework?")
   }
   getDeleteBtnForHomeWorkInDeletePopup() {
      return cy.get('button[data-testid="delete"]')
   }
   getHomeWorkDeletedSuccessPopup() {
      return cy.contains('Homework deleted!')
   }
   getClassAddHomeworkPopupDueDate() {
      return cy.get('input[placeholder="dd/mm/yyyy"]');
   }
   getDayWithMargin() {
      return cy.get(".MuiPickersDay-dayWithMargin:visible")
   }
   getTitleInEditHomeworkPage(){
      return cy.get('div.view_homework_headings p')
   }
   getEditBtnInHomeworkPopup(){
      return cy.get('button.edit_btn')
   }
   getActionBtnLstForHomeworkInAssessmentPage(){
      return cy.get('button svg[data-testid="MoreVertIcon"]')
   }
   getActionsLstInActionbtn(){
      return cy.get("div.MuiPaper-elevation8 button[type='button']:visible")
   }
   getSubmissionBtnInHomeworkPage(){
      return cy.get('div[role="tablist"] button').contains("Submissions")
   }

}
module.exports = new TeacherAssessmentPage() 