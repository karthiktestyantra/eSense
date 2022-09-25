class TeacherCalenderPage {

    getExamScheduledDay() {
        return cy.get('.mbsc-calendar-labels .mbsc-calendar-text:visible')
    }
    getCalendarTitle() {
        return cy.get('div.calendarTopSect').contains("Calendar")
    }
    getMonthTitleTxt() {
        return cy.get('div.md-custom-header-nav')
    }
    getCalenderRange() {
        return cy.get('div.mbsc-range-day:visible')
    }
    getClassesCheckbox() {
        return cy.get('[name="Classes"]')
    }
    getForwordWeekButton() {
        return cy.get('button.cal-header-next')
    }
    getGreade3A() {
        return cy.get('.md-custom-event-title')
    }
    getStartSessionButton() {
        return cy.get('div .viewLiveFields').contains('Start Session')
    }
    getClassResourcesButton() {
        return cy.contains('Class Resources')
    }
    

    //Buiness logic

    clickOnStartSessionBtn() {
        this.getStartSessionButton().click()
    }
    clickOnClassCheckbox() {
        this.getClassesCheckbox().check({ force: true })
    }
    clickOnForwordBtn() {
        this.getForwordWeekButton().click()
    }
    clickOnGrade() {
        cy.wait(4000)
        this.getGreade3A().click({ force: true })
    }

}
module.exports = new TeacherCalenderPage() 