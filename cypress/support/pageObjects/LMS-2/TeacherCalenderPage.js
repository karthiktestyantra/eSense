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
    getGrade3A() {
        return cy.get('.md-custom-event-title')
    }
    getStartSessionButton() {
        return cy.get('div .viewLiveFields').contains('Start Session')
    }
    getClassResourcesButton() {
        return cy.contains('Class Resources')
    }

    getAddLessonPlanButton() {
        return cy.get('.view_lesson_btn.css-1ujsas3')
    }

    getCreateNewBtnAddLessonPlan() {
        return cy.get('.MuiTypography-h6').eq(0)
    }

    getThemeDropdownCreateLessonPlan() {
        return cy.get('#theme')
    }

    getChapterDropdownCreateLessonPlan() {
        return cy.get('#chapter')
    }

    getTopicDropdownCreateLessonPlan() {
        return cy.get('#mui-component-select-topic')
    }

    getDropdownListCreateLessonPlan() {
        return cy.get('.MuiButtonBase-root.css-1km1ehz').eq(0)
    }

    getLearnObjectiveTextfieldCreateLessonPlan() {
        return cy.get('.MuiInputBase-input.css-1x5jdmq').eq(1)
    }

    getSaveBtnCreateLessonPlan() {
        return cy.get('.sectionSaveBtn')
    }

    getDeleteButtonLessonPlan() {
        return cy.get('span[class="deleteIcon"]').eq(0)
    }

    getDeleteConfirmationButtonLessonPlan() {
        return cy.get('[data-testid="delete"]')
    }

    getViewLessonPlanInPopUp() {
        return cy.xpath('//li[@class="lessonPlan-item"]/p')
    }

    getEditLessonPlanTitle() {
        return cy.xpath('//h3')
    }

    getGoBackButton() {
        return cy.get('.mt-0')
    }

    //Buiness logic

    clickOnStartSessionBtn() {
        this.getStartSessionButton().click()
    }
    clickOnClassCheckbox() {
        this.getClassesCheckbox().check({ force: true })
    }
    clickOnForwordBtn() {
        this.getForwordWeekButton().click({ force: true })
    }
    clickOnGrade() {
        cy.wait(4000)
        this.getGrade3A().eq(0).click({ force: true })
    }

}
module.exports = new TeacherCalenderPage() 