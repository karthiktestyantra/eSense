class TeacherMyclassesStudentPage {
    getStudentTab() {
        return cy.get('button.MuiTab-textColorPrimary').contains('Students')
    }

    getStudentRightArrowBtn() {
        return cy.get('[data-testid="ArrowForwardIosIcon"]').eq(0)
    }
    getStudentDetails() {
        return cy.get('[class="tchPrfWrkListDetails padx30"]').contains('Student Details')
    }
    getStudentSendMessageToStudent() {
        return cy.get('[class="tchPrfWrkListDetails padx30"]').contains('Send Message to Student')
    }
    getStudentSendMessageToParentGuardian() {
        return cy.get('[class="tchPrfWrkListDetails padx30"]').contains('Send Message to Parent/Guardian')
    }
    getStudentStudentsReports() {
        return cy.get('[class="tchPrfWrkListDetails padx30"]').contains("Student's Reports")
    }
    getStudentScheduleaLiveClassWithStudent() {
        return cy.get('[class="tchPrfWrkListDetails padx30"]').contains('Schedule a Live Class with Student')
    }
    getStudentTeachersRemark() {
        return cy.get('[class="tchPrfWrkListDetails padx30"]').contains("Teacher's Remark")
    }
    getStudentRecentWorkLoad() {
        return cy.get('.TeacherProfile_tchPrfRcnWkLodTitle__3dm1M')
    }
    getStudentViewAllLink() {
        return cy.contains('VIEW ALL')
    }
    getStudentDetailBrithDay() {
        return cy.get('.StudentOtherDetails_StudentOtherDetails__2Rhya ').eq(0)
    }
    getStudentDetailMotherName() {
        return cy.get('.StudentOtherDetails_StudentOtherDetails__2Rhya ').eq(1)
    }
    getStudentDetailMotherContact() {
        return cy.get('.StudentOtherDetails_StudentOtherDetails__2Rhya ').eq(2)
    }
    getStudentDetailBloodGroup() {
        return cy.get('.StudentOtherDetails_StudentOtherDetails__2Rhya ').eq(3)
    }
    getStudentDetailFatherName() {
        return cy.get('.StudentOtherDetails_StudentOtherDetails__2Rhya ').eq(4)
    }
    getStudentDetailFatherContact() {
        return cy.get('.StudentOtherDetails_StudentOtherDetails__2Rhya ').eq(5)
    }
    getStudentSendMessagetoGardianArrowBtn() {
        return cy.get('[data-testid="KeyboardArrowRightIcon"]').eq(2)
    }
    getStudentsReportArrowBtn() {
        return cy.get('[data-testid="KeyboardArrowRightIcon"]').eq(3)
    }
    getStudentSendMessagetoGardianName() {
        return cy.get('.student-meta p')
    }
    getStudentSendMessagetoGardianSubjectTextfield() {
        return cy.get('input.MuiInputBase-input').eq(1)
    }
    getStudentSendMessagetoGardianWriteYourMessageTextfield() {
        return cy.get('textarea[id="rc_content"]')
    }
    getStudentSendMessagetoGardianAddAttachement() {
        return cy.get('[class="attachment-label w-100"]')
    }
    getStudentSendMessagetoGardianSendMessageBtn() {
        return cy.get('button.message_btn')
    }
    getStudentSendMessagetoGardianCloseBtn() {
        return cy.get('svg.close-icon_popup')
    }
    getStudentsReportGreadBook() {
        return cy.get('.reportMeta p').eq(0)
    }
    getStudentsReport360Report() {
        return cy.get('.reportMeta p').eq(1)
    }
    getStudentTeacherRemarks() {
        return cy.get('div.studentRemarksSect')
    }
}
module.exports = new TeacherMyclassesStudentPage;