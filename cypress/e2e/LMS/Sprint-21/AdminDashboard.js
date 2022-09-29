const adminHomePage = require("../../../support/pageObjects/LMS-2/AdminHomePage")
const teacherDashboardPage = require("../../../support/pageObjects/LMS-2/TeacherDashboardPage")
const dayjs = require('dayjs')

describe("Verify 360 Report functionalities - Sprint 21(EL-4791)", function () {

    before(function () {
        cy.visit(Cypress.env("urlMain"))
        cy.fixture("LMS/TeacherLoginCredentials").then(function (validLoginData) {
            cy.TeacherPostSetupLogin(validLoginData.user2, validLoginData.password)
        })
    })

    beforeEach(function () {
        cy.fixture("LMS/AdminDashboardCredentials").as("dashboard")
    })

    it.only("To mention created mark attendace in dashboard", function () {
        teacherDashboardPage.getMarkClassAttendenceBtn().click()
        cy.wait(4000)
        teacherDashboardPage.getDateInMarkClassAttendence().each(($el, index) => {
            var sysDate = dayjs().format('D MMM').toUpperCase()
            if ($el.text() === sysDate) {
                teacherDashboardPage.getDateIndexInMarkClassAttendence().eq(index).click()
                cy.wait(1500)
                teacherDashboardPage.getMarkattendeceEditBtn().then(($el) => {
                    if ($el.text() == 'Edit') {
                        teacherDashboardPage.getMarkattendeceEditBtn().click()
                    }
                })
                teacherDashboardPage.getMarkAsAbsentRadioBtn().eq(1).click()
                teacherDashboardPage.getMarkattendeceSubmitBtn().click()
                teacherDashboardPage.getMarkattendeceYesSubmitPopupBtn().click()
            }
        })
    })

    it("EL-4791/ES4791-07 To valiadte by default grade wise performance graph is displayed for the user", function () {
        adminHomePage.getGradeWiseAttendanceTab().should('be.enabled')
        cy.verifyAttributeValue(adminHomePage.getGradeWiseAttendanceTab(), "class", "Mui-selected")
    })

    it("EL-4791/ES4791-04 To validate Grade filter is displayed  and by default  all the grades are selecetd and displayed", function () {
        adminHomePage.getGradeDrpDwnInGradeWiseAttendance().should('be.visible')
    })

    it("EL-4791/ES4791-05 To valiadte user is able to select daily,weekly,monthly  by clicking on filters", function () {
        adminHomePage.getSectionDrpDwnInGradeWiseAttendance().should('be.visible')
        adminHomePage.getSectionDrpDwnInGradeWiseAttendance().click()
        adminHomePage.getSectionDrpDwnLstInGradeWiseAttendance().should('contain.text', "Daily").and('contain.text', "Weekly")
            .and('contain.text', "Monthly").should('be.visible')
    })
})