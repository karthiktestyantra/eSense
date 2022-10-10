const adminDashboardPage = require('../../../support/pageObjects/LMS-2/AdminDashboardPage')
const adminCalenderHomePage = require('../../../support/pageObjects/LMS-2/AdminCalenderHomePage')
const dayjs = require('dayjs')
var randomstring = require("randomstring");

describe("Verify admin calender Appointment functionalities - Sprint 22(EL-375,EL-6267,EL-6268)", function () {

    before(function () {
        cy.visit(Cypress.env('urlMain'))
        cy.fixture('LMS/AdminLoginCredentials').then(function (validAdminLoginData) {
            cy.AdminPostSetup(validAdminLoginData.newUsername, validAdminLoginData.password)
        })
    })
    beforeEach(function () {
        cy.viewport(1920, 1080)
        cy.fixture("LMS/adminCalenderAppointment.json").as("appointmentdata")
    })
    it('EL-375/ES375-01 "To validate school admin/teacher is able to create ""Appointments"" by clicking on ""Appointments""option present in the calendar."',function () {
        adminDashboardPage.getCalenderBtn().click({ force: true })
        adminCalenderHomePage.getCreateNewBtn().click()
        adminCalenderHomePage.getAppointmentBtn().click()
        adminCalenderHomePage.getEnterAppointmentTitlefield().should('be.visible').and('be.enabled')
    })
    it('EL-375/ES375-02 To validate the following details are displayed for the create appointment such as Appointment Title,Add Attendees,Date,Start Time,End Time,Remind,Description,Appointment Type,Meeting Link,Location.',function () {
        cy.isVisible(adminCalenderHomePage.getEnterAppointmentTitlefield().scrollIntoView())
        cy.isVisible(adminCalenderHomePage.getCreateApointmentAddPeopleLink().scrollIntoView())
        cy.isVisible(adminCalenderHomePage.getCreateApointmentDate().scrollIntoView())
        cy.isVisible(adminCalenderHomePage.getCreateAppointmentStartTime().scrollIntoView())
        cy.isVisible(adminCalenderHomePage.getCreateAppointmentEndTime().scrollIntoView())
        cy.isVisible(adminCalenderHomePage.getCreateAppointmentRemindDropdown().scrollIntoView())
        cy.isVisible(adminCalenderHomePage.getCreateAppointmentAddDescription().scrollIntoView())
        cy.isVisible(adminCalenderHomePage.getCreateAppointmentAppointmentType().scrollIntoView())
        cy.isVisible(adminCalenderHomePage.getCreateAppointmentMeetingLink().scrollIntoView())
    })
    it('EL-375/ES375-03 To validate  user is able to enter only 50 max characters and alphanumeric ,Free text  in Appointment title" field.',function () {
        adminCalenderHomePage.getEnterAppointmentTitlefield().clear().type(randomstring.generate('50'))
    })
    it('EL-375/ES375-04 To validate user is able to select student from associated grade and section ,By default "None " is displayed  .',function () {
        adminCalenderHomePage.getCreateApointmentAddPeopleLink().click()
        adminCalenderHomePage.getCreateAppointmentStudentTab().click()
        cy.isVisible(adminCalenderHomePage.getCreateAppointmentGreadsDropDown())
        cy.isVisible(adminCalenderHomePage.getCreateAppointmentSectionsDropDown())
        adminCalenderHomePage.getCreateAppointmentCloseLink().click()
    })
    it('EL-375/ES375-08 To validate "Admins  List" of school is displayed after   user clicks on Admin tab.',function () {
        adminCalenderHomePage.getCreateApointmentAddPeopleLink().click()
        adminCalenderHomePage.getCreateAppointmentAdminBtn().click()
        cy.isVisible(adminCalenderHomePage.getCreateAppoinmentAdminList())
        adminCalenderHomePage.getCreateAppointmentCloseLink().click()
    })
    it('EL-375/ES375-05 To validate "Teachers list" of the school is displayed after user clicks on"Teachers" tab.',function () {
        adminCalenderHomePage.getEnterAppointmentTitlefield().clear().type(this.appointmentdata.AppointmentTitle)
        adminCalenderHomePage.getCreateApointmentAddPeopleLink().click()
        adminCalenderHomePage.getCreateApointmentTeacherTab().click()
        adminCalenderHomePage.getCreateAppointmentTeacherSearchField().type(this.appointmentdata.teacher+'{enter}')
        cy.wait(1000)
        adminCalenderHomePage.getCreateAppointmentTeacherCheckbox().should('be.enabled')
    })
    it('EL-375/ES375-09 "To validate user is able to view the total count of attendees added with four profile picture."',function () {
        adminCalenderHomePage.getCreateAppointmentTeacherCheckbox().check()
        adminCalenderHomePage.getCreateAppointmentCloseLink().click()
        cy.isVisible(adminCalenderHomePage.getCreateAppointmentAttendeesCount())
    })
    it('EL-375/ES375-10 To validate user can add more people by  clicking on +Add people .',function () {
        cy.isVisible(adminCalenderHomePage.getCreateApointmentAddPeopleLink())
    })
    it('EL-375/ES375-11 "To validate user is able to select date from calendar and its mandatory."',function () {
        adminCalenderHomePage.getCreateApointmentDate().click()
        var num= dayjs().add(1,'day').format('DD')
        cy.log(num)
        adminCalenderHomePage.getCreateApointmentDateselect(num).click()
        cy.isVisible(adminCalenderHomePage.getCreateAppointmentDateTextfield())
    })
    it('EL-375/ES375-12 To validate user is able to select Start time and End time from clock .',function () {
        adminCalenderHomePage.getCreateAppointmentStartTime().click()
        adminCalenderHomePage.getCreateAppointmentStartTimeing().click({ force: true })
        adminCalenderHomePage.getCreateAppointmentStartTimeingAM().click({ force: true })
        adminCalenderHomePage.getCreateAppointmentStartTime().click()
        cy.isVisible(adminCalenderHomePage.getCreateAppointmentStartTimeTextfield())
        cy.wait(1000)
        adminCalenderHomePage.getCreateAppointmentEndTime().click()
        adminCalenderHomePage.getCreateAppointmentEndTimeing().click({ force: true })
        adminCalenderHomePage.getCreateAppointmentEndTimeingPM().click({ force: true })
        adminCalenderHomePage.getCreateAppointmentEndTime().click()
        cy.isVisible(adminCalenderHomePage.getCreateAppointmentEndTimeTextfield())
    })
    it('EL-375/ES375-13 "To validate user is able to enter Reminder in the Remind field drop down."',function () {
        adminCalenderHomePage.getCreateAppointmentRemindDropdown().click({ force: true })
        adminCalenderHomePage.getCreateAppointmentRemindDropdownDonotremindOpt().click({ force: true })
        cy.wait(1000)
        cy.isVisible(adminCalenderHomePage.getCreateAppointmentRemindDropdown())
    })
    it('EL-375/ES375-16 To validate user is able to view "Location"in the dropdown on selecting offline in appointement type. ',function () {
        adminCalenderHomePage.getCreateAppointmentAddDescription().click({force:true})
        adminCalenderHomePage.getCreateAppointmentAppointmentType().click({force:true})
        adminCalenderHomePage.getCreateAppointmentAppointmentTypeOfflineOpt().click({force:true})
        cy.wait(4000)
        cy.isVisible(adminCalenderHomePage.getCreateAppointmentLocationDropdown())
    })
    it('EL-375/ES375-14 "To validate user is able to enter alphanumeric and maximum 500 charecters in the ""Description""field."',function () {
        adminCalenderHomePage.getCreateAppointmentAddDescription().clear().type(randomstring.generate('550'))
    })
    it('EL-375/ES375-15 "To validate user is able to view ""Meeting link"" on selecting "online" on appointment type dropdown."',function () {
        adminCalenderHomePage.getCreateAppointmentAppointmentType().click()
        adminCalenderHomePage.getCreateAppointmentAppointmentTypeOnlineOpt().click()
        cy.wait(4000)
        cy.isVisible(adminCalenderHomePage.getCreateAppointmentMeetingLink())
    })
    
    it('EL-375/ES375-17 "To validate meeting link is pasted with 150 characters."',function () {
        adminCalenderHomePage.getCreateAppointmentAddDescription().click()
        adminCalenderHomePage.getCreateAppointmentAppointmentType().click()
        adminCalenderHomePage.getCreateAppointmentAppointmentTypeOnlineOpt().click()
        cy.wait(4000)
        adminCalenderHomePage.getCreateAppointmentMeetingLink().click().clear().type(randomstring.generate('150'))
    })
    it('EL-375/ES375-18 To validate user is able to select  list of room available in  the school infrastructure for offline Appointment type.',function () {
        adminCalenderHomePage.getCreateAppointmentAppointmentType().click()
        adminCalenderHomePage.getCreateAppointmentAppointmentTypeOfflineOpt().click()
        adminCalenderHomePage.getCreateAppointmentLocationDropdown().click()
        cy.wait(4000)
        cy.isVisible(adminCalenderHomePage.getCreateAppointmentLocationRoomList())
        adminCalenderHomePage.getCreateAppointmentLocationOfficeOpt().click()
    })
    it('EL-375/ES375-19 "To validate scheduled appointment is notified to attendees through mail after user clicks on ""Save Appointment"',function () {
        adminCalenderHomePage.getCreateAppointmentAddDescription().clear().type(this.appointmentdata.AppointmentDescription)
        adminCalenderHomePage.getCreateAppointmentAppointmentTypeDropdown().click({ force: true })
        cy.wait(1000)
        adminCalenderHomePage.getCreateAppointmentAppointmentType().click()
        adminCalenderHomePage.getCreateAppointmentAppointmentTypeOnlineOpt().click()
        adminCalenderHomePage.getCreateAppointmentMeetingLink().click().clear().type(this.appointmentdata.AppointmentMeetingLink)
        adminCalenderHomePage.getCreateAppointmentSaveAppointmentBtn().click()
    })
    it('EL-375/ES375-20 "To validate ""Successful""pop-up is displayed stating that ""Appointment created""and all “count of” attendees have been notified”."',function () {
        cy.isVisible(cy.contains(this.appointmentdata.AppointmentCreateConfermationMassage))
    })
    it('EL-375/ES375-21 "To validate ""X"" cross button  is aviable in the successful pop-up."',function () {
        cy.isVisible(adminCalenderHomePage.getCreateAppointmentXBtn())
    })
    it('EL-6267/ES6267-01 To validate school admin/teacher is able to edit  appointment so that he can mak any changes in the created  appointment .', function () {
        adminCalenderHomePage.getCreateAppointmentXBtn().click()
        adminCalenderHomePage.getAppointmentCheckbox().check()
        adminCalenderHomePage.getAppointmentAutomation().click()
        cy.isVisible(adminCalenderHomePage.getAppointmentEditAppointmentBtn())
    })
    it('EL-6267/ES6267-02 "To validate ""Edit"" option is avialable for the teacher ."', function () {
        adminCalenderHomePage.getAppointmentEditAppointmentBtn().click()
        adminCalenderHomePage.getEnterAppointmentTitlefield().should('be.enabled')
    })
    it('EL-6267/ES6267-03 "The following details are displayed by clicking on""Edit Appointment"" such as ""Save Appointment ""and cancel button."', function () {
        cy.isVisible(adminCalenderHomePage.getAppointmentSaveAppointmentBtn())
        cy.isVisible(adminCalenderHomePage.getAppointmentCancelAppointmentBtn())
    })
    it('EL-6267/ES6267-04 "To validate respective attendees of the appointment  is notified through mail and updated  in the calendar"', function () {
        adminCalenderHomePage.getAppointmentSaveAppointmentBtn().click()
        adminCalenderHomePage.getCreateAppointmentXBtn().click()
        cy.isVisible(adminCalenderHomePage.getAppointmentAutomation())
    })
    it('EL-6267/ES6267-05 To validate "successful "pop-up is displayed stating  that "Appointment saved" and user is redirected  your calendar screen if user clicks on save appointment.', function () {
        adminCalenderHomePage.getAppointmentCheckbox().check()
        adminCalenderHomePage.getAppointmentAutomation().click()
        adminCalenderHomePage.getAppointmentEditAppointmentBtn().click()
        adminCalenderHomePage.getAppointmentSaveAppointmentBtn().click()
        cy.isVisible(cy.contains(this.appointmentdata.appointmentSaveConfermationMessage))
        adminCalenderHomePage.getCreateAppointmentXBtn().click()
    })
    it('EL-6267/ES6267-06  "To validate no changes are saved and user is redirected your calendar screen if user clicks on""Cancel ""button."', function () {
        adminCalenderHomePage.getAppointmentCheckbox().check()
        adminCalenderHomePage.getAppointmentAutomation().click()
        adminCalenderHomePage.getAppointmentEditAppointmentBtn().click()
        adminCalenderHomePage.getAppointmentCancelAppointmentBtn().click()
    })
    it('EL-6268/ES6268-01 "To validate user is able to delete appointment  by clicking on ""Delete ""option present in the created appointement from  the calendar."', function () {
        adminCalenderHomePage.getAppointmentCheckbox().check()
        adminCalenderHomePage.getAppointmentAutomation().click()
        cy.isVisible(adminCalenderHomePage.getAppointmentDeleteAppointmentBtn())
    })
    it('EL-6268/ES6268-02 "To validate ""confirmation ""pop-up is populated stating that ""Are you sure you want to delete the appointment?""  by clicking  on ""Delete ""option."', function () {
        adminCalenderHomePage.getAppointmentDeleteAppointmentBtn().click()
        cy.isVisible(cy.contains(this.appointmentdata.appiontmentDeleteConfermation))
    })
    it('EL-6268/ES6268-03 "To validate the following details are displayed in the pop-up  if user clicks on""Delete""option such as ""Delete Appointment"" and ""Cancel ""  button ."', function () {
        cy.isVisible(adminCalenderHomePage.getDeletePopupDeleteAppointmentBtn())
        cy.isVisible(adminCalenderHomePage.getDeletePopupCancelAppointmentBtn())
    })
    it('EL-6268/ES6268-06 "To validate ""X"" cross button  is aviable in the pop-up screen ."',function () {
        cy.isVisible(adminCalenderHomePage.getDeletePopupXBtn())
    })
    it('EL-6268/ES6268-05 To validate "successful "pop-up is displayed stating  that "The Appointment has been deleted " and user is redirected  your calendar screen.', function () {
        adminCalenderHomePage.getDeletePopupDeleteAppointmentBtn().click()
        cy.isVisible(cy.contains(this.appointmentdata.appointmentDeletedConfermationMessage))
    })
    it('EL-6268/ES6268-04 "To validate respective attendees of the appointement is notified through mail about the removal of the appointment."',function () {
        adminCalenderHomePage.getAppointmentAutomation().should('not.exist')
    })
   
})



//Author - Manohara 