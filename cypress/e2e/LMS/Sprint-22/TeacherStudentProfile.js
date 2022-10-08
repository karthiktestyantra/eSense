const teacherDashboardPage=require('../../../support/pageObjects/LMS-2/TeacherDashboardPage')
const teacherMyclassesStudentPage=require('../../../support/pageObjects/LMS-2/TeacherMyclassesStudentPage')
const teacherGradeBookPage= require('../../../support/pageObjects/LMS-2/TeacherGradeBookPage')
const teacher360ReportPage= require('../../../support/pageObjects/LMS-2/Teacher360ReportPage')
const teacherCalenderPage= require('../../../support/pageObjects/LMS-2/TeacherCalenderPage')

describe("Verify Teacher Student Profile  Functionalities - Sprint 22(EL-6131)", function () {

    before(function () {
        cy.visit(Cypress.env("urlQAPreSetup"))
        cy.fixture("LMS/TeacherLoginCredentials").then(function (validLoginData) {
            cy.TeacherPostSetupLogin(validLoginData.user1, validLoginData.password)
        })
    })

    beforeEach(function () {
        cy.viewport(1920, 1080)
        // cy.fixture("").as("")
    })

    it('EL-6131/ES6131_1 "Validate Mentioned content are removed  -View Student Gradebook"',function () {
        teacherDashboardPage.getMyclassLnk().click({ force: true })
        teacherDashboardPage.getSubLstTxtInMyClass().each(($e1, index, $list) => {
            const txt = $e1.text()
            if (txt === "EVS III") {
                teacherDashboardPage.getsubLstInMyClass().eq(index).click()
                return false;
            }
        })
        teacherMyclassesStudentPage.getStudentTab().click()
        teacherMyclassesStudentPage.getStudentRightArrowBtn().click()
        cy.contains('View Student Gradebook').should('not.exist')
    })
    it('EL-6131/ES6131_2 "Validate Recent Workload section is displaying in Students profile along with next 7 days workload with the percentage of workload. - View All option is displayed. -Student Details (tab) -Send Message to Student (tab) -Send Message to Parent/Guardian (tab) -Students Report (tab) -Schedule a Live Class with Student (tab) -Teacher Remarks (tab)"',function () {
        teacherMyclassesStudentPage.getStudentRecentWorkLoad().scrollIntoView().should('be.visible')
        teacherMyclassesStudentPage.getStudentViewAllLink().scrollIntoView().should('be.visible')
        teacherMyclassesStudentPage.getStudentDetails().scrollIntoView().should('be.visible')
        teacherMyclassesStudentPage.getStudentSendMessageToStudent().scrollIntoView().should('be.visible')
        teacherMyclassesStudentPage.getStudentSendMessageToParentGuardian().scrollIntoView().should('be.visible')
        teacherMyclassesStudentPage.getStudentStudentsReports().scrollIntoView().should('be.visible')
        teacherMyclassesStudentPage.getStudentScheduleaLiveClassWithStudent().scrollIntoView().should('be.visible')
        teacherMyclassesStudentPage.getStudentTeachersRemark().scrollIntoView().should('be.visible')
    })
    it('EL-6131/ES6131_3 "Validate user on clicking the "Student Details" tab the below mentioned details are displayed -Birthday -Guardian Name -Guardian Contact -Blood Group" ',function () {
        teacherMyclassesStudentPage.getStudentDetails().click()
        teacherMyclassesStudentPage.getStudentDetailBrithDay().scrollIntoView().should('be.visible')
        teacherMyclassesStudentPage.getStudentDetailMotherName().scrollIntoView().should('be.visible')
        teacherMyclassesStudentPage.getStudentDetailMotherContact().scrollIntoView().should('be.visible')
        teacherMyclassesStudentPage.getStudentDetailBloodGroup().scrollIntoView().should('be.visible')
        teacherMyclassesStudentPage.getStudentDetailFatherName().scrollIntoView().should('be.visible')
        teacherMyclassesStudentPage.getStudentDetailFatherContact().scrollIntoView().should('be.visible')
        teacherMyclassesStudentPage.getStudentDetails().click()
    })
    it('EL-6131/ES6131_5 "Validate user on clicking the "Send Message to Student" tab a "Message to Guardian" pop up is displayed with the below mentioned contents',function () {
        teacherMyclassesStudentPage.getStudentSendMessagetoGardianArrowBtn().click()
        cy.wait(1000)
        teacherMyclassesStudentPage.getStudentSendMessagetoGardianName().should('be.visible')
        teacherMyclassesStudentPage.getStudentSendMessagetoGardianSubjectTextfield().should('be.visible')
        teacherMyclassesStudentPage.getStudentSendMessagetoGardianWriteYourMessageTextfield().should('be.visible')
        teacherMyclassesStudentPage.getStudentSendMessagetoGardianAddAttachement().should('be.visible')
        teacherMyclassesStudentPage.getStudentSendMessagetoGardianSendMessageBtn().should('be.visible')
        teacherMyclassesStudentPage.getStudentSendMessagetoGardianCloseBtn().should('be.visible')
    })
    it('EL-6131/ES6131_6 Validate "Send Message" button is enabled only after filling the mandatory details.',function () {
        teacherMyclassesStudentPage.getStudentSendMessagetoGardianSubjectTextfield().type('test automation')
        teacherMyclassesStudentPage.getStudentSendMessagetoGardianWriteYourMessageTextfield().type('test automation')
        teacherMyclassesStudentPage.getStudentSendMessagetoGardianSendMessageBtn().should('be.enabled')
    })
    it('EL-6131/ES6131_7 Validate user on clicking the "Send Message" button message is sent to the selected student on their registered mobile number.',function () {
        teacherMyclassesStudentPage.getStudentSendMessagetoGardianSendMessageBtn().click({force:true})
        cy.contains("PARENT doesn't have valid email").should('be.visible')
    })
    it('EL-6131/ES6131_8 Validate user on clicking the "X" button user is able to close the pop-up without sending the message and is redirected to the Student Profile screen.',function () {
        teacherMyclassesStudentPage.getStudentSendMessagetoGardianArrowBtn().click()
        cy.wait(1000)
        teacherMyclassesStudentPage.getStudentSendMessagetoGardianCloseBtn().click()
        cy.wait(1000)
        teacherMyclassesStudentPage.getStudentRecentWorkLoad().scrollIntoView().should('be.visible')
    })
    it('EL-6131/ES6131_9 "Validate user on clicking "Students Report" the below mentioned are displayed -Gradebook -360 Degree report"',function () {
        teacherMyclassesStudentPage.getStudentsReportArrowBtn().click()
        teacherMyclassesStudentPage.getStudentsReportGreadBook().scrollIntoView().should('be.visible')
        teacherMyclassesStudentPage.getStudentsReport360Report().scrollIntoView().should('be.visible')
    })
    it('EL-6131/ES6131_10 "Validate user on clicking "Gradebook", the user is redirected to the respective student Gradebook."',function () {
        teacherMyclassesStudentPage.getStudentsReportGreadBook().scrollIntoView().click()
        teacherGradeBookPage.getGreadBookTitle().should('be.visible')
        cy.go('back')
    })
    it('EL-6131/ES6131_11  Validate user on clicking "360 Degree Report", the user is redirected to the respective student 360 Degree report.',function () {
        teacherMyclassesStudentPage.getStudentRightArrowBtn().click()
        teacherMyclassesStudentPage.getStudentsReportArrowBtn().click()
        teacherMyclassesStudentPage.getStudentsReport360Report().scrollIntoView().click()
        teacher360ReportPage.getStudsent360ReportTitle().should('be.visible')
        cy.go('back')
    })
    it('EL-6131/ES6131_12 Validate user on clicking "Schedule a Live Class with Student", the user is redirected to the calendar → Live Class pop-up with auto-populated information.',function () {
        teacherMyclassesStudentPage.getStudentRightArrowBtn().click()
        teacherMyclassesStudentPage.getStudentScheduleaLiveClassWithStudent().click()
        teacherCalenderPage.getCreateLiveClassTitle().should('be.visible')
    })
    it('EL-6131/ES6131_13 Validate user on clicking "Teacher Remarks" user is able to view the remarks added in the student grade book.',function () {
        teacherDashboardPage.getMyclassLnk().click({ force: true })
        teacherDashboardPage.getSubLstTxtInMyClass().each(($e1, index, $list) => {
            const txt = $e1.text()
            if (txt === "EVS III") {
                teacherDashboardPage.getsubLstInMyClass().eq(index).click()
                return false;
            }
        })
        teacherMyclassesStudentPage.getStudentTab().click()
        teacherMyclassesStudentPage.getStudentRightArrowBtn().click()
        teacherMyclassesStudentPage.getStudentsReportArrowBtn().click()
        teacherMyclassesStudentPage.getStudentsReportGreadBook().click()
        teacherGradeBookPage.getGreadBookEditBtn().click()
        teacherGradeBookPage.getGreadBookRemarksTextfield().clear().type('very good automation')
        teacherGradeBookPage.getGreadBookSaveBtn().click()
        teacherMyclassesStudentPage.getStudentRightArrowBtn().click()
        teacherMyclassesStudentPage.getStudentTeachersRemark().click()
        teacherMyclassesStudentPage.getStudentTeacherRemarks().scrollIntoView().should('be.visible')
    })
})


//Author - Manohara