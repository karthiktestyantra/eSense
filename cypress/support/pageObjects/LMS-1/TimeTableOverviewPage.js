class TimeTableOverviewPage {

  getTimetableTitle(){
    return cy.get('.overview_title').eq(2)
  }

  getDay(day){
    let days = day/6;
    return cy.get('.mbsc-schedule-header-dayname').eq(days);
  }
  getGradeSectionSubject(gradeNumber) {
    return cy.get(".md-custom-event-title").eq(gradeNumber);
  }

  getTime(timeData) {
    return cy.get(".md-custom-event-time").eq(timeData);
  }

  getFooterContent() {
    return cy.get(".footer_title");
  }

  getRequest() {
    return cy.contains('Request change');
  }

  getContinue() {
    return cy.contains('Continue');
  }

  getStepContent() {
    return cy.get(".footer_subtitle");
  }

  getDashboardTitle(){
    return cy.get('.Dashboard_tchDshTitle__3rghy')
  }
}

module.exports = new TimeTableOverviewPage()
