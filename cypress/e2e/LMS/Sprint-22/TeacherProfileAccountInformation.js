const teacherDashboardPage = require("../../../support/pageObjects/LMS-2/TeacherDashboardPage")
const teacherProfileAccountInformationPage = require("../../../support/pageObjects/LMS-2/TeacherProfileAccountInformationPage")

describe("Verify Teacher Profile Account Information Functionalities - Sprint 22(EL-6285)", function () {

    before(function () {
        cy.visit(Cypress.env("urlQAPreSetup"))
        cy.fixture("LMS/TeacherLoginCredentials").then(function (validLoginData) {
            cy.TeacherPostSetupLogin(validLoginData.user1, validLoginData.password)
        })
    })

    beforeEach(function () {
        cy.fixture("LMS/TeacherProfileAccountInformation").as("teacherProfileAccountInformation")
    })

    it("EL-6285/ES6285-01 Validate user is able  to view account information by clicking on Account Information option avialable in profile menu", function () {
        cy.forceClick(teacherDashboardPage.getMyProfileLink())
        cy.wait(1000)
        cy.isVisible(teacherDashboardPage.getMyProfileAccountInformationLink())
    })

    it("EL-6285/ES6285-02 Validate user is redirected to Account and Support screen if user clicks on Account information tab", function () {
        cy.forceClick(teacherDashboardPage.getMyProfileAccountInformationLink())
        cy.wait(2000)
        cy.isVisible(teacherProfileAccountInformationPage.getAccountAndSupportTitle())
    })

    it("EL-6285/ES6285-03 Validate the following details are displayed in Account and Support screen such as Basic details and Academic details.", function () {
        cy.isVisible(teacherProfileAccountInformationPage.getBasicAndAcademicDetailsTab())
    })

    it("EL-6285/ES6285-04 Validate user is able to toggle between tabs  two tabs and able to view the information", function () {
        teacherProfileAccountInformationPage.getBasicAndAcademicDetailsTab().eq(1).click()
        cy.isVisible(teacherProfileAccountInformationPage.getTextFieldsBasicAndAcademicDetails())
        teacherProfileAccountInformationPage.getBasicAndAcademicDetailsTab().eq(0).click()
        cy.isVisible(teacherProfileAccountInformationPage.getTextFieldsBasicAndAcademicDetails())
    })

    it("EL-6285/ES6285-05 Validate the following details are displayed in Basic details such as personal details,Emergency contact,Employee details,Address details.", function () {
        cy.verifyAttributeValue(teacherProfileAccountInformationPage.getTextFieldsBasicAndAcademicDetails().eq(0), 'value', this.teacherProfileAccountInformation.fullName)
        cy.verifyAttributeValue(teacherProfileAccountInformationPage.getTextFieldsBasicAndAcademicDetails().eq(1), 'value', this.teacherProfileAccountInformation.emailAddress)
        cy.verifyAttributeValue(teacherProfileAccountInformationPage.getTextFieldsBasicAndAcademicDetails().eq(2), 'value', this.teacherProfileAccountInformation.dob)
        cy.verifyAttributeValue(teacherProfileAccountInformationPage.getTextFieldsBasicAndAcademicDetails().eq(3), 'value', this.teacherProfileAccountInformation.gender)
        cy.verifyAttributeValue(teacherProfileAccountInformationPage.getTextFieldsBasicAndAcademicDetails().eq(4), 'value', this.teacherProfileAccountInformation.contactNumber)
        cy.verifyAttributeValue(teacherProfileAccountInformationPage.getTextFieldsBasicAndAcademicDetails().eq(5), 'value', this.teacherProfileAccountInformation.bloodGroup)
        cy.verifyAttributeValue(teacherProfileAccountInformationPage.getTextFieldsBasicAndAcademicDetails().eq(6), 'value', this.teacherProfileAccountInformation.employeeID)
        cy.verifyAttributeValue(teacherProfileAccountInformationPage.getTextFieldsBasicAndAcademicDetails().eq(7), 'value', this.teacherProfileAccountInformation.designation)
        cy.verifyAttributeValue(teacherProfileAccountInformationPage.getTextFieldsBasicAndAcademicDetails().eq(8), 'value', this.teacherProfileAccountInformation.addressLine1)
        cy.verifyAttributeValue(teacherProfileAccountInformationPage.getTextFieldsBasicAndAcademicDetails().eq(9), 'value', this.teacherProfileAccountInformation.addressLine2)
        cy.verifyAttributeValue(teacherProfileAccountInformationPage.getTextFieldsBasicAndAcademicDetails().eq(10), 'value', this.teacherProfileAccountInformation.pinCode)
        cy.verifyAttributeValue(teacherProfileAccountInformationPage.getTextFieldsBasicAndAcademicDetails().eq(11), 'value', this.teacherProfileAccountInformation.state)
        cy.verifyAttributeValue(teacherProfileAccountInformationPage.getTextFieldsBasicAndAcademicDetails().eq(12), 'value', this.teacherProfileAccountInformation.city)
    })

})