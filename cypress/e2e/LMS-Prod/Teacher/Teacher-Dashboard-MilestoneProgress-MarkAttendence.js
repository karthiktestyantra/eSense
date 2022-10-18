const teacherDashboardPage = require("../../../support/pageObjects/LMS-2/TeacherDashboardPage")

describe("Verify Esense Teacher Dashboard functionalities - Sprint 14(EL-4019,EL-4020,EL-3962)", function () {
    
    before(function () {
    cy.visit(Cypress.env('urlProd'))
    cy.fixture("LMS/TeacherLoginCredentials").then(function (validAdminLoginData) {
        cy.TeacherPostSetupLogin(validAdminLoginData.teacher1, validAdminLoginData.password)
    })
})


    beforeEach(function () {
        cy.fixture("LMS/TeacherDashboardCredentials").as("teacherDashboard")
    })

    it("To verify that Attendance Pending Card is provided in the Dashboard/EL-4019/ES4019_01", function () {
        teacherDashboardPage.getAttendencePendingTxt().should('be.visible')
    })

    it("To verify the on Attendance PendingCard is displayed with Class-Subject Name and Date/EL-4019/ES4019_02", function () {
        teacherDashboardPage.getAttendencePendingTxt().should('be.visible')
        teacherDashboardPage.getAttendenceCardSubjectName().should('be.visible')
        teacherDashboardPage.getAttendenceCardSubjectDate().should('be.visible')
    })

    it("To verify that Mark Attendence buttton is provided in Attendance Pending Card/EL-4019/ES4019_03", function () {
        teacherDashboardPage.getAttendenceCardMarkAttendanceBtn().should('be.visible')
    })

    it("To verify that Close buttton is provided in Attendance Pending Card/EL-4019/ES4019_04", function () {
        teacherDashboardPage.getAttendenceCardCloseIcon().eq(0).scrollIntoView().should('not.be.disabled')
    })

    it("To verify the when Teacher click on Close button the Attendance Pending Card is removed from the Pending Actions tray/EL-4019/ES4019_05", function () {
        teacherDashboardPage.getAttendenceCardSubjectName().each(($e1, index, $list) => {
            const subtext = $e1.text()
            if (subtext.includes(this.teacherDashboard.pendingactionsub)) {
                teacherDashboardPage.getAttendenceCardCloseIcon().eq(index).should('be.visible')
                return false
            }
        })
    

    })

    it("To verify that when Teacher click on Mark Attendence button it's navigating to “Mark Attendance” page/EL-4019/ES4019_06", function () {
        teacherDashboardPage.getAttendenceCardMarkAttendanceBtn().eq(0).click()
        teacherDashboardPage.getMarkAttendencePageHeader().should('contain.text', this.teacherDashboard.markattendencepageheadertxtProd)
        //teacherDashboardPage.getMarkAttendencePopupCanceBtn().click()

    })



    it("To verify the teacher is able to Mark the Attendence by clicking Submit button/EL-4019/ES4019_07", function () {
        teacherDashboardPage.getMarkAttendencePageSubmitBtn().click()
        teacherDashboardPage.getMarkAttendencePopupSubmitBtn().should('be.visible')
        cy.get('.mainRcdAction > .MuiButton-outlined').click()
        teacherDashboardPage.getMarkAttendencePopupCanceBtn().click()
        

    })

   
    //MileStone

    it("To verify that Milestone Progress Graph Card is provided in the Dashboard/EL-3962/ES3962_01", function () {
        teacherDashboardPage.getMalestoneProgressTitleHeader().should('be.visible')

    })

    it("To verify that Subject Dropdown is provided in Milestone Progress Graph Card Card/EL-3962/ES3962_02", function () {
        teacherDashboardPage.getMilestoneDropdown().should('be.visible')

    })

    it("To verify that teacher is able to select the subject from Subject Dropdown that teacher teach/EL-3962/ES3962_03", function () {
        teacherDashboardPage.getMilestoneDropdown().scrollIntoView().click()
        teacherDashboardPage.getMilestoneDropdownValues().contains(this.teacherDashboard.milestonedropdownvalueProd).click()

    })

    it("To verify that Teacher is able view bar graph for all the subjects that teacher teach/EL-3962/ES3962_04", function () {
        teacherDashboardPage.getMilestoneGraphBar().should('be.visible')

    })
})