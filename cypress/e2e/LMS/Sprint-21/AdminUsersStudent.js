const adminDashboardPage = require("../../../support/pageObjects/LMS-2/AdminDashboardPage")
const adminUsersStudentPage = require("../../../support/pageObjects/LMS-2/AdminUsersStudentPage")

describe("Verify Admin Users Student functionalities - Sprint 21(EL-6562)", function () {

    before(function () {
        cy.visit(Cypress.env('urlQAPreSetup'))
        cy.fixture("LMS/AdminLoginCredentials").then(function (adminLoginCredentials) {
            cy.AdminPostSetup(adminLoginCredentials.fNew, adminLoginCredentials.password)
        })
    })

    beforeEach(function () {
        cy.viewport(1920, 1080)
        cy.fixture("LMS/AdminUsersStudent").as("adminUsersStudent")
    })

    it('EL-6562/ES6562_1,ES6562_2,ES6562_3,ES6562_4,ES6562_5 Validate user is able to add student / Validate textfields are not present / Validate mandatory, Non mandatory fields are present/visible', function () {
        adminDashboardPage.getSideMenuAdminUserImg().click()
        adminUsersStudentPage.getStudentsTab().click()
        adminUsersStudentPage.getAddStudentsIcon().click()
        cy.wait(1000)
        cy.isVisible(adminUsersStudentPage.getAddStudentTitle())
        adminUsersStudentPage.verifyTextFieldsAreNotPresent()
        adminUsersStudentPage.verifyBasicDetailsMandatoryFieldsArePresent()
        adminUsersStudentPage.verifyBasicDetailsNonMandatoryFieldsArePresent()
        adminUsersStudentPage.verifyBasicDetailsFieldsAreVisible()
        adminUsersStudentPage.getProfilePictureAttachfile().attachFile('LMS/Tester.png')
        cy.wait(1000)
        cy.verifyAttributeValue(adminUsersStudentPage.getProfilePictureNameAddStudent(), 'src', 'png')
        adminUsersStudentPage.getFullNameTextFieldAddStudent().type(this.adminUsersStudent.fullName)
        adminUsersStudentPage.getStudentContactNumberTextFieldAddStudent().type(this.adminUsersStudent.studentContactNumber)
        adminUsersStudentPage.getStudentEmailTextFieldAddStudent().type(this.adminUsersStudent.studentEmail)
        adminUsersStudentPage.getGenderDropdownAddStudent().click()
        adminUsersStudentPage.getDropdownListAddStudent(this.adminUsersStudent.gender).click()
        adminUsersStudentPage.getBloodGroupDropdownAddStudent().click()
        adminUsersStudentPage.getDropdownListAddStudent(this.adminUsersStudent.bloodGroup).click()
        adminUsersStudentPage.getSelectRelationDropdownAddStudent().click()
        adminUsersStudentPage.getDropdownListAddStudent(this.adminUsersStudent.relation).click()
        adminUsersStudentPage.getDOBIconAddStudent().click()
        adminUsersStudentPage.getDOBYearDownArrowAddStudent().click()
        adminUsersStudentPage.getDOBYearAddStudent(this.adminUsersStudent.dobYear).click()
        adminUsersStudentPage.getDOBCurrentDateAddStudent().click()
        cy.clickOnBody()
        adminUsersStudentPage.getGuardianNameTextFieldAddStudent().type(this.adminUsersStudent.guardianName)
        adminUsersStudentPage.getGuardianContactNumberTextFieldAddStudent().type(this.adminUsersStudent.guardianContactNumber)
        adminUsersStudentPage.getAddressLineOneTextFieldAddStudent().type(this.adminUsersStudent.addressLine)
        adminUsersStudentPage.getPinCodeTextFieldAddStudent().type(this.adminUsersStudent.pinCode)
        cy.wait(2000)
        adminUsersStudentPage.getAddStudentSaveButton().click()
        cy.wait(3500)
        adminUsersStudentPage.verifyAcademicDetailsMandatoryFieldsArePresent()
        cy.forceClick(adminUsersStudentPage.getAcademicYearDropdownAddStudent())
        adminUsersStudentPage.getDropdownListAddStudent(this.adminUsersStudent.academicYear).click()
        adminUsersStudentPage.getAdmissionYearDropdownAddStudent().click()
        cy.focused().click()
        adminUsersStudentPage.getAdmissionNumberTextFieldAddStudent().type(this.adminUsersStudent.admissionNumber)
        adminUsersStudentPage.getGradeDropdownAddStudent().click()
        adminUsersStudentPage.getDropdownListAddStudent(this.adminUsersStudent.grade).click()
        adminUsersStudentPage.getSectionDropdownAddStudent().click()
        adminUsersStudentPage.getDropdownListAddStudent(this.adminUsersStudent.section).click()
        adminUsersStudentPage.getRollNoAddStudent().type(this.adminUsersStudent.rollNumber)
        adminUsersStudentPage.getAddStudentSaveButton().click()
        cy.wait(3500)
        cy.isVisible(adminUsersStudentPage.getStudentsNameListDynamic(this.adminUsersStudent.fullName))
        cy.verifyTextEquals(adminUsersStudentPage.getStudentsNameListDynamic(this.adminUsersStudent.fullName), this.adminUsersStudent.fullName)
    })

    after(function () {
        cy.wait(1000)
        cy.forceClick(adminDashboardPage.getSideMenuAdminDashboardImg())
        cy.forceClick(adminDashboardPage.getSideMenuAdminUserImg())
        cy.forceClick(adminUsersStudentPage.getStudentsTab())
        cy.wait(1000)
        adminUsersStudentPage.getStudentsNameList().each(($el, index) => {
            if ($el.text().trim() == this.adminUsersStudent.fullName) {
                adminUsersStudentPage.getDeleteStudentIcon().eq(index).click()
                adminUsersStudentPage.getDeleteAccountStudent().click()
                cy.forceClick(adminUsersStudentPage.getDeleteAccountStudentConfirmation())
            }
        })
    })

})