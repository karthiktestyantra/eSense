class TimetableBuilderPage {

  getDaysWeek() {
    return cy.get(".MuiOutlinedInput-root > #demo-simple-select").eq(0);
  }

  getPeriodsDay() {
    return cy.get(".MuiOutlinedInput-root > #demo-simple-select").eq(1);
  }

  getSchoolStartTime() {
    return cy.get('[placeholder="h:mm (a|p)m"]').eq(0);
  }

  getWholeClock(){
    return cy.get('div[role="listbox"]');
  }

  getClock(time){
    return cy.get('.css-h7tmkn').eq(time);
  }

  getOutsideTimetable(){
    return cy.get('#timetable-submit');
  }

  getSchoolEndTime() {
    return cy.get('[placeholder="h:mm (a|p)m"]').eq(1);
  }

  getPeriodTime() {
    return cy.get(".MuiOutlinedInput-root > #demo-simple-select").eq(2);
  }

  getZeroPeriodLength() {
    return cy.get(":nth-child(4) > .form-row-out > :nth-child(1) > .MuiOutlinedInput-root > #demo-simple-select");
  }

  getZeroPeriodOccurrence() {
    return cy.get(":nth-child(4) > .form-row-out > :nth-child(2) > .MuiOutlinedInput-root > #demo-simple-select");
  }

  getBreakName() {
    return cy.get('input[type="text"]:nth-last-child(2)');
  }

  getBreakLength() {
    return cy.get(".MuiOutlinedInput-root > #demo-simple-select").eq(6);
  }

  getBreakOccurrence() {
    return cy.get(".MuiOutlinedInput-root > #demo-simple-select").eq(7);
  }

  getDaysWeekDropdownValues() {
    return cy.get("ul li");
  }

  getPeriodsDayDropdownValues() {
    return cy.get("ul li");
  }

  getClock(){
    return cy.get('.css-1umqo6f');
  }

  getAM(){
    return cy.get('.MuiTypography-root').contains("AM");
  }

  getPM(){
    return cy.get('.MuiTypography-root').contains('PM');
  }

  getArrowRightIcon(){
    return cy.get('[data-testid="ArrowRightIcon"]')
  }

  getPeriodTimeDropdownValues() {
    return cy.get("ul li");
  }

  getZeroPeriodDropdownValues() {
    return cy.get('ul li.MuiMenuItem-root');
  }

  getZeroPeriodOccurrenceDropdownValues() {
    return cy.get("ul li");
  }

  getBreakLengthDropdownValues() {
    return cy.get("ul li");
  }

  getgetBreakOccurrenceDropdownValues() {
    return cy.get(".MuiMenuItem-root");
  }

  getGenerateTimeSlots(){
    return cy.get('.continue-btn');
  }

  getGeneratedSlotsMessage() {
    return cy.get(".MuiAlert-message");
  }

  getAddTeacherandRooms(){
    return cy.get('.MuiButton-contained');
  }

  getTeachersTab(){
    return cy.get('#simple-tab-1');
  }

  getRoomsTab(){
    return cy.get('#simple-tab-1');
  }

  getAddTeacherAccountsButton(){
    return cy.get('.add-teachers-btn');
  }

  getAddTeachersButton(){
    return cy.get('.edit-btn');
  }

  getAddRoomsButton(){
    return cy.get('.add-teachers-btn');
  }

  getAddRoomsButtonToAdd(){
    return cy.get('.edit-btn');
  }

  getGenerateTimetablesButton(){
    return cy.get('.continue-btn');
  }

  getFinishButton(){
    return cy.get('.continue-btn');
  }

  getSkipLink(){
    return cy.get('.setup-skip');
  }

  getMyProfile(){
    return cy.contains('My Profile');
  }

  getLogout(){
    return cy.contains('Logout');
  }

}

export default TimetableBuilderPage;
