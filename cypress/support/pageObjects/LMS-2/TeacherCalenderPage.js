const teacherDashboardPage = require("../../../support/pageObjects/LMS-2/TeacherDashboardPage")

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

    getRequestLeaveButton() {
        return cy.get('button.myCalRqtLev')
    }

    getReasonForLeaveRadioButton() {
        return cy.get('[class*="mt-4 leaveRqtLeveType"] [type="radio"]')
    }

    getReasonForLeaveRadioButtonText() {
        return cy.get('[class*="mt-4 leaveRqtLeveType"] p')
    }

    getReasonForLeaveOthersTextField() {
        return cy.get('[class*="MuiInputBase-inputMultiline"][aria-invalid="false"]')
    }

    getLeaveTypeRadioButton() {
        return cy.get('[data-testid*="DayRadio"] input')
    }

    getWhichHalfDropdown() {
        return cy.get('#demo-simple-select')
    }

    getWhichHalfDropdownList() {
        return cy.get('[role="option"]')
    }

    getWhenAbsentDatePopUp() {
        return cy.get('input.MuiInputBase-inputAdornedEnd')
    }

    getLeaveSendRequestButton() {
        return cy.get('button.leaveRqtAction')
    }

    getCreateLiveClassTitle(){
        return cy.get('.class_title_popup')
    }

    //Buiness logic

    clickOnStartSessionBtn() {
        this.getStartSessionButton().click()
    }
    clickOnClassCheckbox() {
        this.getClassesCheckbox().uncheck({ force: true }).scrollIntoView()
        this.getClassesCheckbox().check({ force: true })
    }
    clickOnForwordBtn() {
        this.getForwordWeekButton().click({ force: true })
    }
    clickOnGrade() {
        cy.wait(4000)
        this.getGrade3A().eq(0).click({ force: true })
    }

    verifyRequestLeave(requestSentSuccessMsg) {
        teacherDashboardPage.clickOnMyCalenderLink()
        this.getRequestLeaveButton().click()
        cy.isVisible(cy.get('body').contains('Request Absence'))
        let leave = [];
        this.getReasonForLeaveRadioButton().then(($el) => {
            const uuid = () => Cypress._.random(1, $el.length)
            const index = uuid()
            cy.wrap($el).eq(index - 1).click()
            this.getReasonForLeaveRadioButtonText().eq(index - 1).then(($el) => {
                var text = $el.text()
                leave.push(text)
            })
            cy.wait(1000)
            if (index == 5) {
                this.getReasonForLeaveOthersTextField().type('Festival')
            }
        })
        this.getLeaveTypeRadioButton().then(($el) => {
            const uuid = () => Cypress._.random(1, $el.length)
            const index = uuid()
            cy.wrap($el).eq(index - 1).click()
            cy.wait(1000)
            if (index == 1) {
                this.getWhichHalfDropdown().click()
                this.getWhichHalfDropdownList().then(($el) => {
                    const uuid = () => Cypress._.random(1, $el.length)
                    const index = uuid()
                    cy.wrap($el).eq(index - 1).click()
                })
                this.getWhenAbsentDatePopUp().click()
                cy.focused().click()
            } else if (index == 2) {
                this.getWhenAbsentDatePopUp().eq(0).click()
                cy.focused().click()
                cy.wait(1000)
                this.getWhenAbsentDatePopUp().eq(1).click()
                cy.focused().click()
            }
        })
        this.getLeaveSendRequestButton().click()
        cy.wait(1000)
        cy.isVisible(cy.get('body').contains(requestSentSuccessMsg))
        return leave;
    }
}
module.exports = new TeacherCalenderPage() 