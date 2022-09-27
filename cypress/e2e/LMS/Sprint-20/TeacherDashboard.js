const teacherDashboardPage = require("../../../support/pageObjects/LMS-2/TeacherDashboardPage")

describe("Verify Teacher Calender functionalities", function () {

   before(function () {
      cy.visit(Cypress.env('urlBhsSchool'))
      cy.fixture("LMS/TeacherLoginCredentials").then(function (validAdminLoginData) {
         cy.TeacherPostSetupLogin(validAdminLoginData.user5, validAdminLoginData.password)
      })
   })

   beforeEach(function () {
      cy.fixture("LMS/TeacherDashboardCredentials").as("teacherDashboardCredentials")
   })

   it('/EL-5053/ES5053-01 To validate user is able mark the attendance manually for the student', function () {
      teacherDashboardPage.getMarkClassAttendenceBtn().click()
      cy.wait(3000)
      teacherDashboardPage.getMarkAttendanceBtn().eq(0).click()
      teacherDashboardPage.getMarkAsAbsentRadioBtn().eq(1).click()
      teacherDashboardPage.getMarkattendeceSubmitBtn().should('be.enabled')

   })

   it('/EL-5053/ES5053-02 To validate user is able to mark the attendance either by uploading CSV.', function () {
      teacherDashboardPage.getMarkattendeceUploadCsvBtn().click()
      teacherDashboardPage.getAttachsamplefile().attachFile('LMS/Grade 1 - A Attendance_26 Sept.xlsx')
      teacherDashboardPage.getBulkuploadImportBtn().should('be.enabled')
      teacherDashboardPage.getMarkattendeceUploadCsvPopupCloseBtn().click()
      cy.go('back')


   })

   it('/EL-5053/ES5053-03 To validate student list of particular class is dispalyed for the user.', function () {
      teacherDashboardPage.getMyclassLnk().click({ force: true })
      cy.get('div.classCount').eq(0).then((students) => {

         var studentCount = students.text()
         var jo = studentCount.split(' ')
         var ji = jo[0]
         cy.wrap(ji).as('studentCount')
      })

      cy.get('@studentCount').then((studentCount) => {
         teacherDashboardPage.getSideMenuTeacherDashboardImg().click()
         teacherDashboardPage.getMarkClassAttendenceBtn().click()
         cy.wait(3000)
         teacherDashboardPage.getMarkAttendanceBtn().eq(0).click()
         teacherDashboardPage.getMarkattendeceStudentList().should('have.length', studentCount)

      })


   })
   it('/EL-5053/ES5053-04 To validate user is able to mark and unmark the student by clicking on radio buttons available in present or abscent cloumn in the student list.', function () {
      teacherDashboardPage.getMarkAsAbsentRadioBtn().eq(0).click()
      teacherDashboardPage.getMarkpresentRadioBtn().eq(0).click()
   })

   it('/EL-5053/ES5053-05 To validate by default all the students attendance is marked as present.', function () {
      cy.verifyAttributeValue(teacherDashboardPage.getMarkpresentRadioBtn().eq(0), 'class', 'ui-checked')
   })

   it('/EL-5053/ES5053-06 To validate user is able to mark only present or abscent radio buttons for the student', function () {
      cy.verifyAttributeValue(teacherDashboardPage.getMarkpresentRadioBtn().eq(0), 'class', 'ui-checked')
      cy.verifyAttributeValue(teacherDashboardPage.getMarkAsAbsentRadioBtn().eq(0), 'class', 'PrivateSwitchBase-root css-1a5icme')
   })

   it('/EL-5053/ES5053-07 To validate "submit" and "cancel" options is available once manual details are completed.', function () {
      teacherDashboardPage.getMarkattendeceSubmitBtn().should('be.enabled')
      teacherDashboardPage.getMarkattendeceCancelBtn().should('be.enabled')
   })

   it('/EL-5053/ES5053-08 To validate pop-up screen is displayed after user is clicking on "submit" button.', function () {
      teacherDashboardPage.getMarkattendeceSubmitBtn().click()
      teacherDashboardPage.getMarkattendeceSubmitPopupMesg().should('have.text', 'Submit Attendance Record!')

   })

   it('/EL-5053/ES5053-09 To validate that pop-up screen is displayed with following details such as Total student count,present count,abscent count ', function () {
      teacherDashboardPage.getMarkattendeceSubmitPopupStudentCountDetails().should('be.visible')
   })

   it('/EL-5053/ES5053-09 To validate that pop-up screen is displayed with following details such as Total student count,present count,abscent count ', function () {
      teacherDashboardPage.getMarkattendeceSubmitPopupSubmitBtn().should('be.enabled')
      teacherDashboardPage.getMarkattendeceSubmitPopupCancelBtn().should('be.visible')
   })


   it('/EL-5053/ES5053-13 To validate user is redirected to "Mark attendance "list screen after clicking on "cancel button". ', function () {
      teacherDashboardPage.getMarkattendeceSubmitPopupCancelBtn().click()
      teacherDashboardPage.getMarkattendecePageTitle().should('contain.text', 'Students in this class')

   })

   it('/EL-5053/ES5053-14 To validate user is redirected to previous screen after clicking on"Go back button". ', function () {
      teacherDashboardPage.getMarkattendeceGoBackBtn().click()
   })

   it('/EL-5053/ES5053-14 To To validate that user is able to view attendance list by clicking on "Mark Class attendence". ', function () {

   })
})