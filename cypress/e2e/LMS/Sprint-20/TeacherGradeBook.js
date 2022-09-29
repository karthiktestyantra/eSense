const teacherDashboardPage = require("../../../support/pageObjects/LMS-2/TeacherDashboardPage")
const teacherGradeBookPage = require("../../../support/pageObjects/LMS-2/TeacherGradeBookPage")

describe("Verify Admin Student GradeBook functionalities", function () {

    before(function () {
        cy.visit(Cypress.env('urlStaging'))
        cy.fixture("LMS/TeacherLoginCredentials").then(function (validAdminLoginData) {
            cy.TeacherPostSetupLogin(validAdminLoginData.user3, validAdminLoginData.password)
        })
    })

    beforeEach(function () {
        cy.viewport(1920, 1080)
        cy.fixture("LMS/TeacherDashboardCredentials").as("teacherDashboardCredentials")
    })

    it('EL-6975/ES6975-02,ES6975-03 Validate system is displaying attendance dynamically in the gradebook irrespective of gradebook updates', function () {
        teacherDashboardPage.getMarkClassAttendenceBtn().click()
        cy.wait(4000)
        teacherDashboardPage.getMarkAttendanceBtn().eq(0).click()
        teacherDashboardPage.getMarkAsAbsentRadioBtn().eq(0).click()
        teacherDashboardPage.getMarkpresentRadioBtn().eq(0).click()
        cy.verifyAttributeValue(teacherDashboardPage.getMarkpresentRadioBtn().eq(0), 'class', 'ui-checked')
        cy.verifyAttributeValue(teacherDashboardPage.getMarkpresentRadioBtn().eq(0), 'class', 'ui-checked')
        cy.verifyAttributeValue(teacherDashboardPage.getMarkAsAbsentRadioBtn().eq(0), 'class', 'PrivateSwitchBase-root css-1a5icme')
        teacherDashboardPage.getMarkattendeceSubmitBtn().should('be.enabled')
        teacherDashboardPage.getMarkattendeceCancelBtn().should('be.enabled')
        teacherDashboardPage.getMarkattendeceSubmitBtn().click()
        teacherDashboardPage.getMarkattendeceSubmitPopupMesg().should('have.text', 'Submit Attendance Record!')
        teacherDashboardPage.getMarkattendeceSubmitPopupStudentCountDetails().should('be.visible')
        teacherDashboardPage.getMarkattendeceSubmitPopupSubmitBtn().should('be.enabled')
        teacherDashboardPage.getMarkattendeceSubmitPopupCancelBtn().should('be.visible')
        teacherDashboardPage.getMarkattendeceSubmitPopupCancelBtn().click()
        teacherDashboardPage.getMarkattendecePageTitle().should('contain.text', 'Students in this class')
        cy.go('back')
    })

    it('EL-6975/ES6975-01 Validate School admin/teacher is able to view the student total attendance in gradebook', function () {
        teacherDashboardPage.getSideMenuReportsImg().click()
        cy.forceClick(teacherDashboardPage.getSideMenuStudentGradebookLink())
        cy.isVisible(teacherGradeBookPage.getStudentGradeBookTitle())
        //teacherGradeBookPage.getGradeTabStudentGradeBook().click()
        teacherGradeBookPage.getStudentForwardArrow().eq(0).click()
        cy.isVisible(teacherGradeBookPage.getAttendancePercentageStudentGradeBook())
    })

})