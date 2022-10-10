const teacherDashboardPage=require('../../../support/pageObjects/LMS-2/TeacherDashboardPage')
const teacherMyclassesOverviewPage=require('../../../support/pageObjects/LMS-2/TeacherMyclassesOverviewPage')


describe("Verify Teacher Student Profile  Functionalities - Sprint 22(EL-6540,ES-6674)", function () {

    before(function () {
        cy.visit(Cypress.env("urlQAPreSetup"))
        cy.fixture("LMS/TeacherLoginCredentials").then(function (validLoginData) {
            cy.TeacherPostSetupLogin(validLoginData.user1, validLoginData.password)
        })
    })

    beforeEach(function () {
        cy.viewport(1920, 1080)
    })
    it('EL-6540/ES6540-01 To validate user is able to view the Classes Completed, Pending Actions, and Average Attendance by clicking on "My classes".',function () {
        teacherDashboardPage.getMyclassLnk().click({ force: true })
        teacherDashboardPage.getSubLstTxtInMyClass().each(($e1, index, $list) => {
            const txt = $e1.text()
            if (txt === "EVS III") {
                teacherDashboardPage.getsubLstInMyClass().eq(index).click()
                return false;
            }
        })
        teacherMyclassesOverviewPage.getOverviewTab().click()
        cy.isVisible(teacherMyclassesOverviewPage.getOverviewAverageAttendanceTab())
        cy.isVisible(teacherMyclassesOverviewPage.getOverviewPendingActionsTab())
        cy.isVisible(teacherMyclassesOverviewPage.getOverviewSessionsCompletedTab())
    })
    it('EL-6540/ES6540-02 To validate system display total number of live classes taken by the user.',function () {
        teacherMyclassesOverviewPage.getOverviewSessionsCompletedCount().should('be.visible').click()
        cy.contains('Upcoming Classes').should('be.visible')
    })
    it('EL-6540/ES6540-03 To validate system is able to display total number of pendi.ng actions.',function () {
        teacherMyclassesOverviewPage.getOverviewTab().click()
        cy.isVisible(teacherMyclassesOverviewPage.getOverviewPendingActionsCount())
        cy.contains('Pending Actions').should('be.visible')
    })
    it('EL-6540/ES6540-04 To validate system is able to show calculated "Total "attendnace percentage of the class.',function () {
        cy.isVisible(teacherMyclassesOverviewPage.getOverviewAverageAttendanceCount())
    })
    it('EL-6674/ES6674-02 To validate User is able to view all the pending action cards assigned to the respective class.',function () {
        teacherDashboardPage.getMyclassLnk().click({ force: true })
        teacherDashboardPage.getSubLstTxtInMyClass().each(($e1, index, $list) => {
            const txt = $e1.text()
            if (txt === "Tamil") {
                teacherDashboardPage.getsubLstInMyClass().eq(index).click()
                return false;
            }
        })
        teacherMyclassesOverviewPage.getOverviewTab().click()
        teacherMyclassesOverviewPage.getOverviewPendingActionsTab().click()
        teacherMyclassesOverviewPage.getOverviewPendingActionsCard().should('be.visible')
    })
})

//Author - Manohara