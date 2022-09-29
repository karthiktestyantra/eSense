class AdminUsersStudentPage {

    getStudentsTab() {
        return cy.get('#simple-tab-1');
    }

    getAddStudentsIcon() {
        return cy.get('[aria-label="Add student(s)"]');
    }

    getAddStudentTitle() {
        return cy.contains('Add Student');
    }

    getProfilePictureAttachfile() {
        return cy.get('input[type="file"]')
    }

    getProfilePictureNameAddStudent() {
        return cy.get('div[class*="AcademicDetails_icon"] img')
    }

    getFullNameTextFieldAddStudent() {
        return cy.get('#fullName')
    }

    getStudentContactNumberTextFieldAddStudent() {
        return cy.get('[name="contactNumber"]')
    }

    getPinCodeTextFieldAddStudent() {
        return cy.get('[name="pinCode"]')
    }

    getAddStudentSaveButton() {
        return cy.get('button[class*="AcademicDetails_saveChangesBtn"]')
    }

    getSuccessMsgAddStudent() {
        return cy.get('.MuiAlert-message')
    }

    getDeleteStudentIcon() {
        return cy.get('[aria-label="Delete Student"] img')
    }

    getDeleteAccountStudent() {
        return cy.get('.MuiTypography-h6').eq(1)
    }

    getDeleteAccountStudentConfirmation() {
        return cy.get('.MuiButtonBase-root.delete')
    }

    getStudentsNameListDynamic(fullName) {
        return cy.get('div[class*="UserDashBoard_studentMeta"] p').contains(fullName)
    }

    getStudentsNameList() {
        return cy.xpath('//div[@class="UserDashBoard_studentMeta__12OmY"]/p[1]')
    }

    getDOBIconAddStudent() {
        return cy.get('[data-testid="CalendarIcon"]')
    }

    getDOBYearDownArrowAddStudent() {
        return cy.get('[class*="MuiCalendarPicker"] [data-testid="ArrowDropDownIcon"]')
    }

    getDOBYearAddStudent(Year) {
        return cy.get('[type="button"][class*="PrivatePickersYear-yearButton"]').contains(Year)
    }

    getDOBCurrentDateAddStudent() {
        return cy.get('[type="button"][class*="MuiPickersDay-root Mui-selected"]')
    }

    getGuardianContactNumberTextFieldAddStudent() {
        return cy.get('[class="MuiGrid-root MuiGrid-container css-zlmj8"] [id="Contact Number*"]')
    }

    getAddressLineOneTextFieldAddStudent() {
        return cy.get('[name="addressLineOne"]')
    }

    getAcademicYearDropdownAddStudent() {
        return cy.get('.d-flex > .schAdminInputCtrSelect > .MuiOutlinedInput-root > #demo-simple-select')
    }

    getAdmissionYearDropdownAddStudent() {
        return cy.get('[data-testid="CalendarIcon"]')
    }

    getAdmissionNumberTextFieldAddStudent() {
        return cy.get('#AdmissionNo')
    }

    getGradeDropdownAddStudent() {
        return cy.get('.css-10bl4s4 > .MuiGrid-container > :nth-child(2) > .MuiFormControl-root > .MuiOutlinedInput-root > #demo-simple-select')
    }

    getSectionDropdownAddStudent() {
        return cy.get(':nth-child(3) > .MuiFormControl-root > .MuiOutlinedInput-root > #demo-simple-select')
    }

    getAdmissionYearTextFieldAddStudent() {
        return cy.get('[type="tel"]')
    }

    getGuardianNameTextFieldAddStudent() {
        return cy.get('[id="Guardian Name*"]')
    }

    getStudentEmailTextFieldAddStudent() {
        return cy.get('[name="email"]')
    }

    getGenderDropdownAddStudent() {
        return cy.get('div[aria-haspopup="listbox"]').eq(1)
    }

    getBloodGroupDropdownAddStudent() {
        return cy.get('div[aria-haspopup="listbox"]').eq(2)
    }

    getSelectRelationDropdownAddStudent() {
        return cy.get('div[aria-haspopup="listbox"]').eq(3)
    }

    getDropdownListAddStudent(value) {
        return cy.get('[role="listbox"] li').contains(value)
    }

    getRollNoAddStudent() {
        return cy.get('#RollNo')
    }


}
module.exports = new AdminUsersStudentPage() 