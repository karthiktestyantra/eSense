const teacherDashboardPage = require("../../../support/pageObjects/LMS-2/TeacherDashboardPage")
const teacherProfileAccountInformationPage = require("../../../support/pageObjects/LMS-2/TeacherProfileAccountInformationPage")
var randomstring = require("randomstring")

describe("Verify Teacher Profile Account Information Functionalities - Sprint 22(EL-6285)", function () {

    let ticketDetails
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

    it("EL-6285/ES6285-05,ES6285-08,ES6285-09 Validate the following details are displayed in Basic details such as personal details,Emergency contact,Employee details,Address details.", function () {
        cy.verifyAttributeValue(teacherProfileAccountInformationPage.getTextFieldsBasicAndAcademicDetails().eq(0), 'value', this.teacherProfileAccountInformation.fullName)
        cy.verifyAttributeValue(teacherProfileAccountInformationPage.getTextFieldsBasicAndAcademicDetails().eq(1), 'value', this.teacherProfileAccountInformation.emailAddress)
        cy.verifyAttributeValue(teacherProfileAccountInformationPage.getTextFieldsBasicAndAcademicDetails().eq(2), 'value', this.teacherProfileAccountInformation.dob)
        cy.verifyAttributeValue(teacherProfileAccountInformationPage.getTextFieldsBasicAndAcademicDetails().eq(3), 'value', this.teacherProfileAccountInformation.gender)
        cy.verifyAttributeValue(teacherProfileAccountInformationPage.getTextFieldsBasicAndAcademicDetails().eq(4), 'value', this.teacherProfileAccountInformation.contactNumber)
        cy.verifyAttributeValue(teacherProfileAccountInformationPage.getTextFieldsBasicAndAcademicDetails().eq(5), 'value', this.teacherProfileAccountInformation.bloodGroup)
        cy.verifyAttributeValue(teacherProfileAccountInformationPage.getTextFieldsBasicAndAcademicDetails().eq(6), 'value', this.teacherProfileAccountInformation.contact1Name)
        cy.verifyAttributeValue(teacherProfileAccountInformationPage.getTextFieldsBasicAndAcademicDetails().eq(7), 'value', this.teacherProfileAccountInformation.contact1Number)
        cy.verifyAttributeValue(teacherProfileAccountInformationPage.getTextFieldsBasicAndAcademicDetails().eq(8), 'value', this.teacherProfileAccountInformation.contact2Name)
        cy.verifyAttributeValue(teacherProfileAccountInformationPage.getTextFieldsBasicAndAcademicDetails().eq(9), 'value', this.teacherProfileAccountInformation.contact2Number)
        cy.verifyAttributeValue(teacherProfileAccountInformationPage.getTextFieldsBasicAndAcademicDetails().eq(10), 'value', this.teacherProfileAccountInformation.employeeID)
        cy.verifyAttributeValue(teacherProfileAccountInformationPage.getTextFieldsBasicAndAcademicDetails().eq(11), 'value', this.teacherProfileAccountInformation.designation)
        cy.verifyAttributeValue(teacherProfileAccountInformationPage.getTextFieldsBasicAndAcademicDetails().eq(12), 'value', this.teacherProfileAccountInformation.addressLine1)
        cy.verifyAttributeValue(teacherProfileAccountInformationPage.getTextFieldsBasicAndAcademicDetails().eq(13), 'value', this.teacherProfileAccountInformation.addressLine2)
        cy.verifyAttributeValue(teacherProfileAccountInformationPage.getTextFieldsBasicAndAcademicDetails().eq(14), 'value', this.teacherProfileAccountInformation.pinCode)
        cy.verifyAttributeValue(teacherProfileAccountInformationPage.getTextFieldsBasicAndAcademicDetails().eq(15), 'value', this.teacherProfileAccountInformation.state)
        cy.verifyAttributeValue(teacherProfileAccountInformationPage.getTextFieldsBasicAndAcademicDetails().eq(16), 'value', this.teacherProfileAccountInformation.city)
    })

    it("EL-6285/ES6285-06 Validate the personal details contains mentioned attributes -Profile Picture -Full Name -Email Address -Date of Birth -Gender -Contact Number", function () {
        teacherProfileAccountInformationPage.verifyPersonalDetailsFieldsArePresent()
    })

    it("EL-6285/ES6285-07 Validate Emergency Contact contains mentioned attribute such as -Contact 1 -Full Name -Phone Number -Contact 2 (if applicable)", function () {
        teacherProfileAccountInformationPage.verifyEmergencyContactDetailsFieldsArePresent()
    })

    it("EL-6285/ES6285-10 Validate the following details are displayed  in Academic Details such as  Qualifications, Grade Selection, Sections, Subjects", function () {
        teacherProfileAccountInformationPage.getBasicAndAcademicDetailsTab().eq(1).click()
        teacherProfileAccountInformationPage.verifyAcademicDetailsFieldsArePresent()
    })

    it("EL-6285/ES6285-11 Validate Academic details contains department and branch", function () {
        cy.verifyAttributeValue(teacherProfileAccountInformationPage.getTextFieldsBasicAndAcademicDetails().eq(0), 'value', this.teacherProfileAccountInformation.department)
        cy.verifyAttributeValue(teacherProfileAccountInformationPage.getTextFieldsBasicAndAcademicDetails().eq(1), 'value', this.teacherProfileAccountInformation.branch)
    })

    it("EL-6285/ES6285-12 Validate Qualification contains File Name,View File - On clicking  this user is able to view the file.", function () {
        cy.isVisible(teacherProfileAccountInformationPage.getQualificationNameDetails().contains(this.teacherProfileAccountInformation.qualification))
        cy.isVisible(teacherProfileAccountInformationPage.getQualificationDetailsViewFileBtn())
        teacherProfileAccountInformationPage.getQualificationDetailsViewFileBtn().click()
        cy.wait(7000)
        cy.isVisible(teacherProfileAccountInformationPage.getQualificationDetailsPdfFile())
        teacherProfileAccountInformationPage.getQualificationDetailsPdfFileCloseIcon().click()
    })

    it("EL-6285/ES6285-13 Validate user is not able to enter the Grade in the Grade Selection.", function () {
        cy.isVisible(teacherProfileAccountInformationPage.getTextFieldsBasicAndAcademicDetails().eq(2))
        cy.verifyAttributeValue(teacherProfileAccountInformationPage.getTextFieldsBasicAndAcademicDetails().eq(2), 'value', this.teacherProfileAccountInformation.grade)
        cy.verifyAttributeValue(teacherProfileAccountInformationPage.getGradeTextFieldAcademicDetails(), 'data-shrink', 'true')
    })

    it("EL-6285/ES6285-14 Validate Section field contains Grade with section and subject", function () {
        cy.isVisible(teacherProfileAccountInformationPage.getTextFieldsBasicAndAcademicDetails().eq(2))
        cy.verifyAttributeValue(teacherProfileAccountInformationPage.getTextFieldsBasicAndAcademicDetails().eq(3), 'value', this.teacherProfileAccountInformation.section1Subjects)
        cy.verifyAttributeValue(teacherProfileAccountInformationPage.getTextFieldsBasicAndAcademicDetails().eq(4), 'value', this.teacherProfileAccountInformation.section2Subjects)
    })

    it("EL-6285/ES6285-15 Validate if teacher is a class teacher for that section  then  radio button is highlighted", function () {
        cy.isVisible(teacherProfileAccountInformationPage.getClassTeacherForGrade(this.teacherProfileAccountInformation.section1))
        cy.verifyAttributeValue(teacherProfileAccountInformationPage.getClassTeacherForGrade(this.teacherProfileAccountInformation.section1), 'class', 'ml-2font-weight-bold')
    })

    it("EL-6285/ES6285-16 Validate Request change button is present for both Academic details and Basic details.", function () {
        cy.isVisible(teacherProfileAccountInformationPage.getRequestChangeBtnInBasicAndAcademicDetails())
        cy.isEnabled(teacherProfileAccountInformationPage.getRequestChangeBtnInBasicAndAcademicDetails())
        teacherProfileAccountInformationPage.getBasicAndAcademicDetailsTab().eq(0).click()
        cy.isVisible(teacherProfileAccountInformationPage.getRequestChangeBtnInBasicAndAcademicDetails())
        cy.isEnabled(teacherProfileAccountInformationPage.getRequestChangeBtnInBasicAndAcademicDetails())
    })

    /*-------------------------------------------------------------------------------------------------------------*/

    it("EL-6286/ES6268-02 Validate Request change pop-up screen is populated, user on clicking Request change button", function () {
        teacherProfileAccountInformationPage.getRequestChangeBtnInBasicAndAcademicDetails().click()
        cy.wait(1000)
        cy.isVisible(teacherProfileAccountInformationPage.getRequestChangePopUpTitle())
    })

    it("EL-6286/ES6268-03 Validate the following details are present in pop-up sceen such as What would you like to change?(Drop down field) What do you want to change(Text Box)", function () {
        teacherProfileAccountInformationPage.getRequestChangePopUpBody().children()
            .should('contain', 'Raise a change request to the school administration')
            .and('contain', 'What would you like to change?')
            .and('contain', 'Tell us a bit more about the issue')
    })

    it("EL-6286/ES6268-04 Validate the values are auto populated if user click on the dropdwon present in the What would you like to change field.", function () {
        teacherProfileAccountInformationPage.getRequestChangePopUpBody().children()
            .should('contain', 'Basic Details')
        teacherProfileAccountInformationPage.getRequestChangePopUpCloseIcon().click()
        teacherProfileAccountInformationPage.getBasicAndAcademicDetailsTab().eq(1).click()
        teacherProfileAccountInformationPage.getRequestChangeBtnInBasicAndAcademicDetails().click()
        teacherProfileAccountInformationPage.getRequestChangePopUpBody().children()
            .should('contain', 'Academic Details')
    })

    it("EL-6286/ES6268-05 Validate Text box accepts only 500 Alphanumeric characters", function () {
        teacherProfileAccountInformationPage.getTellUsBitMoreTextFieldRequestChangePopUp().type(randomstring.generate(520))
        cy.verifyTextEquals(teacherProfileAccountInformationPage.getWordsCountTextRequestChangePopUp(), this.teacherProfileAccountInformation.wordsCount)
        ticketDetails = 'Automation Testing ' + '[' + randomstring.generate({
            length: 15,
            charset: 'numeric'
        }) + ']'
        teacherProfileAccountInformationPage.getTellUsBitMoreTextFieldRequestChangePopUp().clear().type(ticketDetails)
    })

    it("EL-6286/ES6268-06 Validate Send request option is enabled after user fills all the details", function () {
        cy.isVisible(teacherProfileAccountInformationPage.getSubmitBtnRequestChangePopUp())
        cy.isEnabled(teacherProfileAccountInformationPage.getSubmitBtnRequestChangePopUp())
        teacherProfileAccountInformationPage.getSubmitBtnRequestChangePopUp().click()
    })

    it("EL-6286/ES6268-07,ES6268-10,ES6268-11 Validate successful pop-up message is displayed as “Request Sent Successfully” followed by “Your change request for the ‘Basic/Academic details’ has been sent to the School Admin”.", function () {
        cy.isVisible(teacherProfileAccountInformationPage.getRequestSentSuccessMsg().contains(this.teacherProfileAccountInformation.requestSentSuccessMsg1))
        cy.isVisible(teacherProfileAccountInformationPage.getRequestSentSuccessMsg().contains(this.teacherProfileAccountInformation.requestSentSuccessMsg2))
        teacherProfileAccountInformationPage.getRequestChangePopUpCloseIcon().click()
        cy.isVisible(teacherProfileAccountInformationPage.getRequestChangeBtnInBasicAndAcademicDetails())
        teacherProfileAccountInformationPage.getRequestChangePopUpBody().should('not.exist')
    })

    it("EL-6286/ES6268-09 Validate the raised requests is displayed in the support ticket list with the ticket number generated.", function () {
        teacherProfileAccountInformationPage.getSupportAndFeedbackTab().click()
        cy.verifyTextEquals(teacherProfileAccountInformationPage.getTicketDescriptionText().eq(0), ticketDetails)
    })

})