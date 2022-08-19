class TeacherCalenderPage{
    getExamScheduledDay(){
        return cy.get('.mbsc-calendar-labels .mbsc-calendar-text:visible')
    }
    getCalendarTitle(){
        return cy.get('div.calendarTopSect').contains("Calendar")
    }
    getMonthTitleTxt(){
        return cy.get('div.md-custom-header-nav')
    }
    getCalenderRange(){
        return cy.get('div.mbsc-range-day:visible')
    }


}
export default TeacherCalenderPage;