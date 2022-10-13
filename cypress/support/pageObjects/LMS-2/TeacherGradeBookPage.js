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

    getProfilePic() {
        return cy.get('[class="student-group-display-icon-get-icon-band"]').eq(0)
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

    getNoGroupsFoundMsg() {
        return cy.get('.mt-4')
    }

    getDeleteGroupIcon() {
        return cy.get('[class="ml-2 mr-2"]')
    }

    getGroupStudentsTab() {
        return cy.get('[id="simple-tab-0"] div')
    }

    getResourcesTab() {
        return cy.xpath('//button[.="Resources"]').eq(0)
    }

    getRollNoColumnStudentGroup() {
        return cy.get('[data-field="rollNo"]')
    }

    getCheckBoxStudentGroup() {
        return cy.get('[type="checkbox"]')
    }

    getDoneBtnStudentGroup() {
        return cy.xpath('//button[text()="Done"]')
    }

    getSearchStudentsTextFieldStudentGroup() {
        return cy.get('#students-search-in-table')
    }

    getRemoveButtonStudentGroup() {
        return cy.xpath('//button[.="Remove"]')
    }

    getAddNewStudentBtnStudentGroup() {
        return cy.xpath('//div[@role="grid"]/..//*[@data-testid="AddIcon"]')
    }

    getAddResourceBtn() {
        return cy.get('[for="collection-file"] p')
    }

    getEditGroupIcon() {
        return cy.get('[class="mr-2"]')
    }

    getProfilePicStudentGroup() {
        return cy.get('[class="group-title-icon pb-1"] img')
    }

    getNoOfStudentGroup() {
        return cy.get('[class="students-group-wrapper"] span')
    }

    getCreatedOnStudentGroup() {
        return cy.get('[class="group-title-icon pb-1"] small')
    }

    getAddStudentPlusIcon() {
        return cy.xpath('//button[text()="Add"]')
    }

    getStudentNameWhileCreatingGroup() {
        return cy.xpath('//div[contains(@class,"MuiCard-root card p-4 ")]//div[@data-field="fullName" and @role="cell"]')
    }

    getStudentNameAfterRemovingStudent() {
        return cy.xpath('//div[@class="MuiCardContent-root css-1qw96cp"]//div[.="Remove"]/..//div[@data-field="fullName" and @role="cell"]')
    }

    getRemoveStudentWhileCreatingGroup() {
        return cy.xpath('//div[@class="MuiCardContent-root css-1qw96cp"]//div[.="Remove"]')
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