const teacherDashboardPage = require("../../../support/pageObjects/LMS-2/TeacherDashboardPage")
const teacherCalenderPage = require("../../../support/pageObjects/LMS-2/TeacherCalenderPage")
const teacherProfileAccountInformationAndSupportPage = require("../../../support/pageObjects/LMS-2/TeacherProfileAccountInformationAndSupportPage")
var randomstring = require("randomstring")
const dayjs = require('dayjs')

describe("Verify Teacher Profile Account Information and Support&Feedback Functionalities - Sprint 22(EL-6285,EL-6286,EL-6331)", function () { 

    let accountDetails
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
        cy.isVisible(teacherProfileAccountInformationAndSupportPage.getAccountAndSupportTitle())
    })

    it("EL-6285/ES6285-03 Validate the following details are displayed in Account and Support screen such as Basic details and Academic details.", function () {
        cy.isVisible(teacherProfileAccountInformationAndSupportPage.getBasicAndAcademicDetailsTab())
    })

    it("EL-6285/ES6285-04 Validate user is able to toggle between tabs  two tabs and able to view the information", function () {
        teacherProfileAccountInformationAndSupportPage.getBasicAndAcademicDetailsTab().eq(1).click()
        cy.isVisible(teacherProfileAccountInformationAndSupportPage.getTextFieldsBasicAndAcademicDetails())
        teacherProfileAccountInformationAndSupportPage.getBasicAndAcademicDetailsTab().eq(0).click()
        cy.isVisible(teacherProfileAccountInformationAndSupportPage.getTextFieldsBasicAndAcademicDetails())
    })

    it("EL-6285/ES6285-05,ES6285-08,ES6285-09 Validate the following details are displayed in Basic details such as personal details,Emergency contact,Employee details,Address details.", function () {
        cy.verifyAttributeValue(teacherProfileAccountInformationAndSupportPage.getTextFieldsBasicAndAcademicDetails().eq(0), 'value', this.teacherProfileAccountInformation.fullName)
        cy.verifyAttributeValue(teacherProfileAccountInformationAndSupportPage.getTextFieldsBasicAndAcademicDetails().eq(1), 'value', this.teacherProfileAccountInformation.emailAddress)
        cy.verifyAttributeValue(teacherProfileAccountInformationAndSupportPage.getTextFieldsBasicAndAcademicDetails().eq(2), 'value', this.teacherProfileAccountInformation.dob)
        cy.verifyAttributeValue(teacherProfileAccountInformationAndSupportPage.getTextFieldsBasicAndAcademicDetails().eq(3), 'value', this.teacherProfileAccountInformation.gender)
        cy.verifyAttributeValue(teacherProfileAccountInformationAndSupportPage.getTextFieldsBasicAndAcademicDetails().eq(4), 'value', this.teacherProfileAccountInformation.contactNumber)
        cy.verifyAttributeValue(teacherProfileAccountInformationAndSupportPage.getTextFieldsBasicAndAcademicDetails().eq(5), 'value', this.teacherProfileAccountInformation.bloodGroup)
        cy.verifyAttributeValue(teacherProfileAccountInformationAndSupportPage.getTextFieldsBasicAndAcademicDetails().eq(6), 'value', this.teacherProfileAccountInformation.contact1Name)
        cy.verifyAttributeValue(teacherProfileAccountInformationAndSupportPage.getTextFieldsBasicAndAcademicDetails().eq(7), 'value', this.teacherProfileAccountInformation.contact1Number)
        cy.verifyAttributeValue(teacherProfileAccountInformationAndSupportPage.getTextFieldsBasicAndAcademicDetails().eq(8), 'value', this.teacherProfileAccountInformation.contact2Name)
        cy.verifyAttributeValue(teacherProfileAccountInformationAndSupportPage.getTextFieldsBasicAndAcademicDetails().eq(9), 'value', this.teacherProfileAccountInformation.contact2Number)
        cy.verifyAttributeValue(teacherProfileAccountInformationAndSupportPage.getTextFieldsBasicAndAcademicDetails().eq(10), 'value', this.teacherProfileAccountInformation.employeeID)
        cy.verifyAttributeValue(teacherProfileAccountInformationAndSupportPage.getTextFieldsBasicAndAcademicDetails().eq(11), 'value', this.teacherProfileAccountInformation.designation)
        cy.verifyAttributeValue(teacherProfileAccountInformationAndSupportPage.getTextFieldsBasicAndAcademicDetails().eq(12), 'value', this.teacherProfileAccountInformation.addressLine1)
        cy.verifyAttributeValue(teacherProfileAccountInformationAndSupportPage.getTextFieldsBasicAndAcademicDetails().eq(13), 'value', this.teacherProfileAccountInformation.addressLine2)
        cy.verifyAttributeValue(teacherProfileAccountInformationAndSupportPage.getTextFieldsBasicAndAcademicDetails().eq(14), 'value', this.teacherProfileAccountInformation.pinCode)
        cy.verifyAttributeValue(teacherProfileAccountInformationAndSupportPage.getTextFieldsBasicAndAcademicDetails().eq(15), 'value', this.teacherProfileAccountInformation.state)
        cy.verifyAttributeValue(teacherProfileAccountInformationAndSupportPage.getTextFieldsBasicAndAcademicDetails().eq(16), 'value', this.teacherProfileAccountInformation.city)
    })

    it("EL-6285/ES6285-06 Validate the personal details contains mentioned attributes -Profile Picture -Full Name -Email Address -Date of Birth -Gender -Contact Number", function () {
        teacherProfileAccountInformationAndSupportPage.verifyPersonalDetailsFieldsArePresent()
    })

    it("EL-6285/ES6285-07 Validate Emergency Contact contains mentioned attribute such as -Contact 1 -Full Name -Phone Number -Contact 2 (if applicable)", function () {
        teacherProfileAccountInformationAndSupportPage.verifyEmergencyContactDetailsFieldsArePresent()
    })

    it("EL-6285/ES6285-10 Validate the following details are displayed  in Academic Details such as  Qualifications, Grade Selection, Sections, Subjects", function () {
        teacherProfileAccountInformationAndSupportPage.getBasicAndAcademicDetailsTab().eq(1).click()
        teacherProfileAccountInformationAndSupportPage.verifyAcademicDetailsFieldsArePresent()
    })

    it("EL-6285/ES6285-11 Validate Academic details contains department and branch", function () {
        cy.verifyAttributeValue(teacherProfileAccountInformationAndSupportPage.getTextFieldsBasicAndAcademicDetails().eq(0), 'value', this.teacherProfileAccountInformation.department)
        cy.verifyAttributeValue(teacherProfileAccountInformationAndSupportPage.getTextFieldsBasicAndAcademicDetails().eq(1), 'value', this.teacherProfileAccountInformation.branch)
    })

    it("EL-6285/ES6285-12 Validate Qualification contains File Name,View File - On clicking  this user is able to view the file.", function () {
        cy.isVisible(teacherProfileAccountInformationAndSupportPage.getQualificationNameDetails().contains(this.teacherProfileAccountInformation.qualification))
        cy.isVisible(teacherProfileAccountInformationAndSupportPage.getQualificationDetailsViewFileBtn())
        teacherProfileAccountInformationAndSupportPage.getQualificationDetailsViewFileBtn().click()
        cy.wait(7000)
        cy.isVisible(teacherProfileAccountInformationAndSupportPage.getQualificationDetailsPdfFile())
        teacherProfileAccountInformationAndSupportPage.getQualificationDetailsPdfFileCloseIcon().click()
    })

    it("EL-6285/ES6285-13 Validate user is not able to enter the Grade in the Grade Selection.", function () {
        cy.isVisible(teacherProfileAccountInformationAndSupportPage.getTextFieldsBasicAndAcademicDetails().eq(2))
        cy.verifyAttributeValue(teacherProfileAccountInformationAndSupportPage.getTextFieldsBasicAndAcademicDetails().eq(2), 'value', this.teacherProfileAccountInformation.grade)
        cy.verifyAttributeValue(teacherProfileAccountInformationAndSupportPage.getGradeTextFieldAcademicDetails(), 'data-shrink', 'true')
    })

    it("EL-6285/ES6285-14 Validate Section field contains Grade with section and subject", function () {
        cy.isVisible(teacherProfileAccountInformationAndSupportPage.getTextFieldsBasicAndAcademicDetails().eq(2))
        cy.verifyAttributeValue(teacherProfileAccountInformationAndSupportPage.getTextFieldsBasicAndAcademicDetails().eq(3), 'value', this.teacherProfileAccountInformation.section1Subjects)
        cy.verifyAttributeValue(teacherProfileAccountInformationAndSupportPage.getTextFieldsBasicAndAcademicDetails().eq(4), 'value', this.teacherProfileAccountInformation.section2Subjects)
    })

    it("EL-6285/ES6285-15 Validate if teacher is a class teacher for that section  then  radio button is highlighted", function () {
        cy.isVisible(teacherProfileAccountInformationAndSupportPage.getClassTeacherForGrade(this.teacherProfileAccountInformation.section1))
        cy.verifyAttributeValue(teacherProfileAccountInformationAndSupportPage.getClassTeacherForGrade(this.teacherProfileAccountInformation.section1), 'class', 'ml-2font-weight-bold')
    })

    it("EL-6285/ES6285-16 Validate Request change button is present for both Academic details and Basic details.", function () {
        cy.isVisible(teacherProfileAccountInformationAndSupportPage.getRequestChangeBtnInBasicAndAcademicDetails())
        cy.isEnabled(teacherProfileAccountInformationAndSupportPage.getRequestChangeBtnInBasicAndAcademicDetails())
        teacherProfileAccountInformationAndSupportPage.getBasicAndAcademicDetailsTab().eq(0).click()
        cy.isVisible(teacherProfileAccountInformationAndSupportPage.getRequestChangeBtnInBasicAndAcademicDetails())
        cy.isEnabled(teacherProfileAccountInformationAndSupportPage.getRequestChangeBtnInBasicAndAcademicDetails())
    })

    /*-------------------------------------------------------------------------------------------------------------*/

    it("EL-6286/ES6268-02 Validate Request change pop-up screen is populated, user on clicking Request change button", function () {
        teacherProfileAccountInformationAndSupportPage.getRequestChangeBtnInBasicAndAcademicDetails().click()
        cy.wait(1000)
        cy.isVisible(teacherProfileAccountInformationAndSupportPage.getRequestChangePopUpTitle())
    })

    it("EL-6286/ES6268-03 Validate the following details are present in pop-up sceen such as What would you like to change?(Drop down field) What do you want to change(Text Box)", function () {
        teacherProfileAccountInformationAndSupportPage.getRequestChangePopUpBody().children()
            .should('contain', 'Raise a change request to the school administration')
            .and('contain', 'What would you like to change?')
            .and('contain', 'Tell us a bit more about the issue')
    })

    it("EL-6286/ES6268-04 Validate the values are auto populated if user click on the dropdwon present in the What would you like to change field.", function () {
        teacherProfileAccountInformationAndSupportPage.getRequestChangePopUpBody().children()
            .should('contain', 'Basic Details')
        teacherProfileAccountInformationAndSupportPage.getRequestChangePopUpCloseIcon().click()
        teacherProfileAccountInformationAndSupportPage.getBasicAndAcademicDetailsTab().eq(1).click()
        teacherProfileAccountInformationAndSupportPage.getRequestChangeBtnInBasicAndAcademicDetails().click()
        teacherProfileAccountInformationAndSupportPage.getRequestChangePopUpBody().children()
            .should('contain', 'Academic Details')
        teacherProfileAccountInformationAndSupportPage.getRequestChangePopUpCloseIcon().click()
    })

    it("EL-6286/ES6268-05 Validate Text box accepts only 500 Alphanumeric characters", function () {
        teacherProfileAccountInformationAndSupportPage.getBasicAndAcademicDetailsTab().then(($el) => {
            const uuid = () => Cypress._.random(1, $el.length)
            const index = uuid()
            cy.wrap($el).eq(index - 1).click()
            cy.wait(1000)
            if (index == 1) {
                accountDetails = 'Basic Details'
                teacherProfileAccountInformationAndSupportPage.getRequestChangeBtnInBasicAndAcademicDetails().click()
                teacherProfileAccountInformationAndSupportPage.getRequestChangePopUpBody().children()
                    .should('contain', accountDetails)
                cy.wrap(accountDetails).as('accountDetails')
            } else if (index == 2) {
                accountDetails = 'Academic Details'
                teacherProfileAccountInformationAndSupportPage.getRequestChangeBtnInBasicAndAcademicDetails().click()
                teacherProfileAccountInformationAndSupportPage.getRequestChangePopUpBody().children()
                    .should('contain', accountDetails)
                cy.wrap(accountDetails).as('accountDetails')
            }
        })
        cy.get('@accountDetails').then((accDetails) => {
            accountDetails = accDetails
        })
        teacherProfileAccountInformationAndSupportPage.getTellUsBitMoreTextFieldRequestChangePopUp().type(randomstring.generate(520))
        cy.verifyTextEquals(teacherProfileAccountInformationAndSupportPage.getWordsCountTextRequestChangePopUp(), this.teacherProfileAccountInformation.wordsCount)
        ticketDetails = 'Automation Testing ' + '[' + randomstring.generate({
            length: 10,
            charset: 'numeric'
        }) + ']'
        teacherProfileAccountInformationAndSupportPage.getTellUsBitMoreTextFieldRequestChangePopUp().clear().type(ticketDetails)
    })

    it("EL-6286/ES6268-06 Validate Send request option is enabled after user fills all the details", function () {
        cy.isVisible(teacherProfileAccountInformationAndSupportPage.getSubmitBtnRequestChangePopUp())
        cy.isEnabled(teacherProfileAccountInformationAndSupportPage.getSubmitBtnRequestChangePopUp())
        teacherProfileAccountInformationAndSupportPage.getSubmitBtnRequestChangePopUp().click()
    })

    it("EL-6286/ES6268-07,ES6268-10,ES6268-11 Validate successful pop-up message is displayed as “Request Sent Successfully” followed by “Your change request for the ‘Basic/Academic details’ has been sent to the School Admin”.", function () {
        cy.isVisible(teacherProfileAccountInformationAndSupportPage.getRequestSentSuccessMsg().contains(this.teacherProfileAccountInformation.requestSentSuccessMsg))
        if (accountDetails.includes('Basic')) {
            cy.isVisible(teacherProfileAccountInformationAndSupportPage.getRequestSentSuccessMsg().contains(this.teacherProfileAccountInformation.requestSentSuccessMsgBasic))
        } else {
            cy.isVisible(teacherProfileAccountInformationAndSupportPage.getRequestSentSuccessMsg().contains(this.teacherProfileAccountInformation.requestSentSuccessMsgAcademic))
        }
        teacherProfileAccountInformationAndSupportPage.getRequestChangePopUpCloseIcon().click()
        cy.isVisible(teacherProfileAccountInformationAndSupportPage.getRequestChangeBtnInBasicAndAcademicDetails())
        teacherProfileAccountInformationAndSupportPage.getRequestChangePopUpBody().should('not.exist')
    })

    it("EL-6286/ES6268-09 Validate the raised requests is displayed in the support ticket list with the ticket number generated.", function () {
        teacherProfileAccountInformationAndSupportPage.getSupportAndFeedbackTab().click()
        cy.verifyTextEquals(teacherProfileAccountInformationAndSupportPage.getTicketDescriptionText().eq(0), ticketDetails)
    })

    /*-------------------------------------------------------------------------------------------------------------*/

    it("EL-6331/ES6331_2 Validate is able to view the following details in the support list screen in the grid -Ticket No -Created on (Date(dd/mm/yy)) -Domain -Description - Upto 150char should be displayed -Status (Pending/Resolved/Rejected/Send to TopSchool/Resolved by TopSchool) -Action (View >)", function () {
        teacherProfileAccountInformationAndSupportPage.getRightArrowIconSupportAndFeedback().eq(0).click()
        cy.wait(2000)
        cy.isVisible(teacherProfileAccountInformationAndSupportPage.getTicketPopUpContents())
        cy.haveLength(teacherProfileAccountInformationAndSupportPage.getTicketPopUpContents(), 4)
        cy.verifyTextContains(teacherProfileAccountInformationAndSupportPage.getDateOnTicketPopUp(), dayjs().format("DD" + "/" + "MM" + "/" + "YYYY"))
        cy.verifyTextContains(teacherProfileAccountInformationAndSupportPage.getTicketPopUpContents(), ticketDetails)
        accountDetails = accountDetails.split(' ')
        cy.verifyTextContains(teacherProfileAccountInformationAndSupportPage.getTicketPopUpContents(), accountDetails[0])
        cy.verifyTextContains(teacherProfileAccountInformationAndSupportPage.getTicketPopUpContents(), 'Pending')
    })

    it("EL-6331/ES6331_3 Validate the status of Ticket is in Pending, When a leave request is pending for approval by School Admin", function () {
        let leave = teacherCalenderPage.verifyRequestLeave(this.teacherProfileAccountInformation.requestSentSuccessMsg)
        cy.forceClick(teacherDashboardPage.getMyProfileLink())
        cy.wait(1000)
        cy.forceClick(teacherDashboardPage.getMyProfileAccountInformationLink())
        cy.wait(1000)
        teacherProfileAccountInformationAndSupportPage.getLeaveRequestTab().click()
        cy.verifyTextEquals(teacherProfileAccountInformationAndSupportPage.getStartDateForLeaveInTab().eq(0), dayjs().format("DD" + "/" + "MM" + "/" + "YYYY"))
        cy.verifyTextContains(teacherProfileAccountInformationAndSupportPage.getReasonForLeaveTextInTab().eq(0), leave)
        cy.verifyTextEquals(teacherProfileAccountInformationAndSupportPage.getLeaveRequestStatusTab().eq(0), 'Pending')
    })

    it("EL-6331/ES6331_3 Validate the status of Ticket is in Pending, When a leave request is pending for approval by School Admin", function () {
        let leave = teacherCalenderPage.verifyRequestLeave(this.teacherProfileAccountInformation.requestSentSuccessMsg)
        cy.forceClick(teacherDashboardPage.getMyProfileLink())
        cy.wait(1000)
        cy.forceClick(teacherDashboardPage.getMyProfileAccountInformationLink())
        cy.wait(1000)
        teacherProfileAccountInformationAndSupportPage.getLeaveRequestTab().click()
        cy.verifyTextEquals(teacherProfileAccountInformationAndSupportPage.getStartDateForLeaveInTab().eq(0), dayjs().format("DD" + "/" + "MM" + "/" + "YYYY"))
        cy.verifyTextContains(teacherProfileAccountInformationAndSupportPage.getReasonForLeaveTextInTab().eq(0), leave)
        cy.verifyTextEquals(teacherProfileAccountInformationAndSupportPage.getLeaveRequestStatusTab().eq(0), 'Pending')
    })

})

//Author-Karthik