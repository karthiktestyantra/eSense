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
    getClassesCheckbox(){
        return cy.get('[name="Classes"]')
    }

    getForwordWeekButton(){
        return cy.get('[class="mbsc-calendar-button cal-header-next mbsc-reset mbsc-font mbsc-button mbsc-windows mbsc-ltr mbsc-button-flat mbsc-icon-button"]')
    }

    getGreade3A(){
        return cy.xpath('//strong[text()="Grade 3"]')
    }

    getStartSessionButton(){
        return cy.get('div .viewLiveFields').contains('Start Session')
    }

}
export default TeacherCalenderPage;