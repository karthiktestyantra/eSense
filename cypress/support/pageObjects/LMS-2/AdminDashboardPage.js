class AdminDashboardPage {

    getSideMenuAdminSchoolImg() {
        return cy.get('div.side-nav-icon img[src="/static/media/company.e1656b4d.svg"]')
    }

    getGradesAndDepartmentQuickLink() {
        return cy.get('div.StudentSchool_schQicLikSect__sL7xN p').contains('Grades & Stream')
    }

    getGradesAndSubjectBtn() {
        return cy.get('button#scrollable-auto-tab-1')
    }

    getEditableGradeBtn() {
        return cy.get('tbody.MuiTableBody-root td button.sectionsBtn').eq(0)
    }

    getEditableGradePopUpTxt() {
        return cy.get('div.add-section-form span')
    }

    getEditableGradeSection() {
        return cy.get('input.MuiOutlinedInput-input')
    }

    getEditableGradeOptionalSubDropdown() {
        return cy.get('div[data-testid="subjectSelect"]')
    }

    getEditableGradeOptionalSubCheckBox() {
        return cy.get('div.MuiPaper-root input.PrivateSwitchBase-input')
    }

    getEditableGradePopUpSaveBtn() {
        return cy.get('button.sectionSaveBtn')
    }

    getEditableGradePopUpSaveSuccessMeg() {
        return cy.get('div.MuiAlert-message')
    }

    getLisOfGrades() {
        return cy.get('div._1EEDX')
    }

    getLisOfSection() {
        return cy.get('tbody.MuiTableBody-root td button.sectionsBtn')
    }

    getAddNewGradeBtn() {
        return cy.get('button.sectionAddBtn').eq(0)
    }

    getAddNewGradePopupTxt() {
        return cy.get('div.pop-header')
    }

    getAddNewGradePopupCancelBtn() {
        return cy.get('button.sectionCancelBtn ')
    }

    getClassDetailsBtn() {
        return cy.get('span.class-label')
    }

    getClassDetailsBackBtn() {
        return cy.get('img[style="cursor: pointer;"]')
    }

    getClassDetailsDashboardClassName() {
        return cy.get('div.header-container-out div')
    }

    getClassDetailsClassTitle() {
        return cy.get('div.inner-header-container div.class-font')
    }

    getClassDetailsSubjectFilter() {
        return cy.get('div#demo-simple-select-0')
    }

    getClassDetailsCurrentDate() {
        return cy.get('div.ClassDashboard_classDashboardDate__1CYTt')
    }

    getClassDetailsStudentPresentCount() {
        return cy.get('div.ClassDashboard_addUserIcon__l2hkx p')
    }

    getClassDetailsSessionCompletedSec() {
        return cy.get('div.overViewCardItem p.cardTitle').contains('Sessions Completed')
    }

    getClassDetailsPendingTaskSec() {
        return cy.get('div.overViewCardItem p.cardTitle').contains('Pending Tasks')
    }

    getClassDetailsAverageAttendenceSec() {
        return cy.get('div.overViewCardItem p.cardTitle').contains('Average Attendance')
    }

    getClassDetailsMilestoneSection() {
        return cy.get('div.milestone-grid-container p')
    }

    getClassDetailsTopPerformerBtn() {
        return cy.get('button[value="top performers"]')
    }

    getClassDetailsNoNeedAttentionBtn() {
        return cy.get('button[value="needs attention"]')
    }

    getClassDetailsListOfTopPerformer() {
        return cy.get('tr.MuiTableRow-root')
    }

    getClassDetailsTopPerformerCommingSoonTag() {
        return cy.get('div.cmgSoonOverLaySect p')
    }
}
module.exports = new AdminDashboardPage() 