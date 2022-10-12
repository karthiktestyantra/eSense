class TeacherGradeBookPage {

    getStudentGradeBookTitle() {
        return cy.get('p[class*=classDashboardTitle]')
    }

    getGradeTabStudentGradeBook() {
        return cy.get('#simple-tab-1')
    }

    getStudentGroupsTab() {
        return cy.get('[value="studentgroup"]')
    }

    getCreateNewGroup() {
        return cy.xpath('//button[text()="Create New Group"]')
    }

    getUploadFile() {
        return cy.get('[type="file"]')
    }

    getGroupNameTextfield() {
        return cy.get('[name="groupName"]')
    }

    getGroupDescriptionTextfield() {
        return cy.get('[name="groupDescription"]')
    }

    getAddStudentIcon() {
        return cy.get('[class="student-add-icon"] path')
    }

    getCreateGroupSaveButton() {
        return cy.get('[type="submit"]')
    }

    getAddedGroupTitleText() {
        return cy.get('[class="group-title-icon pb-1"] h6')
    }

    getDeleteYesRemoveButton() {
        return cy.get('.remove-student')
    }

    getDeleteGroupIcon() {
        return cy.get('[class="ml-2 mr-2"]')
    }

    getAddStudentPlusIcon() {
        return cy.xpath('//button[text()="Add"]')
    }

    getStudentNameWhileCreatingGroup() {
        return cy.xpath('//div[contains(@class,"MuiCard-root card p-4 ")]//div[@data-field="fullName" and @role="cell"]')
    }

    getStudentNameAfterCreatingGroup() {
        return cy.get('[class="MuiDataGrid-row"] div[data-field="fullName"]')
    }

    getStudentForwardArrow() {
        return cy.get('[data-testid="ArrowForwardIosIcon"]')
    }

    getAttendancePercentageStudentGradeBook() {
        return cy.xpath('//p[text()="Total Attendance"]/../h1[contains(text(),"%")]')
    }

    getGreadBookTitle(){
        return cy.get('.StudentGradeBook_stdGrdBkTitCntr__1k1Kv h1')
    }

    getGreadBookRemarksTextfield(){
        return cy.get('textarea.MuiInputBase-inputMultiline').eq(0)
    }
    getGreadBookEditBtn(){
        return cy.get('.StudentGradeBook_stdGrdActionGoBkSavEdt__2Geb6')
    }
    getGreadBookSaveBtn(){
        return cy.get('.StudentGradeBook_stdGrdActionGoBkSavEdt__2Geb6')
    }
}
module.exports = new TeacherGradeBookPage() 