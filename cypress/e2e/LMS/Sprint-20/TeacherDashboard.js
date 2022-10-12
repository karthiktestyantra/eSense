const teacherDashboardPage = require("../../../support/pageObjects/LMS-2/TeacherDashboardPage")
const dayjs = require('dayjs')

describe("Verify Teacher Dashboard functionalities - Sprint 20(EL-5053,EL-4955)", function () {

   before(function () {
      cy.visit(Cypress.env('urlStaging'))
      cy.fixture("LMS/TeacherLoginCredentials").then(function (validAdminLoginData) {
         cy.TeacherPostSetupLogin(validAdminLoginData.user3, validAdminLoginData.password)
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

   it('/EL-4955/ES4955-02 To To validate that user is able to view attendance list by clicking on "Mark Class attendence". ', function () {
     // teacherDashboardPage.getMarkAttendanceBtn().eq(0).click()
      teacherDashboardPage.getMarkscard().should('be.visible')
   })

   it('/EL-4955/ES4955-03 To validate that Mark attandence page contains Date and day,Grade with section,profile picture with total student of the class.', function () {
      teacherDashboardPage.getMarkAttendenceDateAndTime().should('be.visible')
      teacherDashboardPage.getMarkAttendenceGradeAndSection().should('be.visible')
   })

   it('/EL-4955/ES4955-04 To Validate that system is displaying as "Today" when the current date is matching with the systems date', function () {
       teacherDashboardPage.getMarkAttendenceTodayDate().then((todayDate)=>{
         var todayDate = todayDate.text()
         var td = todayDate.split(' ')
         var todayDate = td[0]
         var sysDate = dayjs().format('D')
         expect(todayDate).equal(sysDate)   

       })
   })

   it('/EL-4955/ES4955-05 To validate that system is displaying as "Past Class " when the current date is not matching with the systems date', function () {
      teacherDashboardPage.getMarkAttendenceTodayDate().then((todayDate)=>{
         var todayDate = todayDate.text()
         var td = todayDate.split(' ')
         var todayDate = td[0]
         var sysDate = dayjs().format('D')
         if(sysDate !== (todayDate))  {
            teacherDashboardPage. getMarkAttendenceTodayDateText().should('be.visible')
         }else{
            teacherDashboardPage.getMarkAttendencePastDate().should('be.visible')
         }

       })
   })

   it('/EL-4955/ES4955-06 To validate that user is able to click on mark attendance button to marked the attendance for the day.', function () {
      teacherDashboardPage.getMarkAttendanceBtn().eq(0).should('be.visible').click()
      
   })

   it('/EL-4955/ES4955-09 To validate that system is displaying cards between the date range selected by the user.', function () {
    teacherDashboardPage.getMarkattendeceGoBackBtn().click()
    teacherDashboardPage.getMarkattendeceCalenderIcon().click()
    teacherDashboardPage.getMarkattendeceCalenderFromTxtField().click()
    var sysDate =  dayjs().format('D')
    var startDate =  1
    teacherDashboardPage.getMarkattendeceCalenderFromDateRange(1).click()
    teacherDashboardPage.getMarkattendeceCalenderToDateRange(sysDate).click()
    teacherDashboardPage.getMarkAttendenceListOfTodayDate().each(($e1,index,$list)=>{
      var todayDate = $e1.text()
      var td = todayDate.split(' ')
      var todayDate = td[0]
      startDate = 0 + startDate
      if(todayDate>=(startDate)){
         expect(true).to.be.true
      } else{
         expect(true).to.be.false
      }

    })
    
   })

   it('/EL-4955/ES4955-11 To validate that by default all the attendance data of the class is displayed based on the date selected .', function () {
      teacherDashboardPage.getMarkAttendenceListOfTodayDate().each(($e1,index,$list)=>{
         teacherDashboardPage.getMarkAttendenceListOfGrade().eq(index).should('have.text','Grade 1 - A')
   
        
      })


   })

   it('/EL-4955/ES4955-10 To validate that system is displaying data from newest to oldest date.', function () {
      var date =[]
      teacherDashboardPage.getMarkAttendenceListOfTodayDate().each(($e1,index,$list)=>{
         var todayDate = $e1.text()
         var td = todayDate.split(' ')
         var todayDate = td[0]
         date.push(todayDate)
      })
      expect(date).to.deep.equal(date.sort())
      
   })

   it('/EL-4955/ES4955-11 To validate that each page contains 6 records in the list screen.', function () {
      teacherDashboardPage.getMarkAttendenceListOfTodayDate().should('have.length.lessThan',7)

   })

   it('/EL-4955/ES4955-11 To validate that user is re-directed to previous screen by clicking on Go back button.', function () {
      cy.get('.back').click()
      cy.url().should('contain','dashboard')

   })

   it('/EL-5823/ES5823-02 To validate student list contains "Search field","Upload CSV" widgets.', function () {
      teacherDashboardPage.getMarkClassAttendenceBtn().click()
      teacherDashboardPage.getMarkAttendanceBtn().eq(0).click()
      teacherDashboardPage.getMarkAttendenceSearchField().should('be.enabled') 
      teacherDashboardPage.getMarkattendeceUploadCsvBtn().should('be.visible')
   })

   it('/EL-5823/ES5823-03 To validate student list contains "Search field","Upload CSV" widgets.', function () {
      teacherDashboardPage.getMarkAttendenceTableRowRollnoTxt().should('be.visible')
      teacherDashboardPage.getMarkAttendenceTableRowSudentnameTxt().should('be.visible')
      teacherDashboardPage.getMarkAttendenceTableRowPresentTxt().should('be.visible')
      teacherDashboardPage.getMarkAttendenceTableRowAbsentTxt().should('be.visible')
   })

   it('/EL-5823/ES5823-04 To validate "Submit/cancle"button is available in student list sceen.', function () {
      teacherDashboardPage.getMarkattendeceSubmitBtn().should('be.enabled')
      teacherDashboardPage.getMarkattendeceCancelBtn().should('be.enabled')
      teacherDashboardPage.getMarkattendeceCancelBtn().click()
   })
      it('/EL-5823/ES5823-05 To validate the "Downloaded file" name is in particular format .', function () {
        
         var sysDate = dayjs().format('DD MMMM YYYY')
     // cy.log(sysDate)
      teacherDashboardPage.getMarkAttendenceListOfGrade().eq(0).then((gradename)=>{
         var gradeName = gradename.text()
         cy.log(gradeName+" "+"Attendence_"+sysDate)
         teacherDashboardPage.getMarkAttendanceBtn().eq(0).click()
         teacherDashboardPage.getMarkattendeceUploadCsvBtn().click()
         teacherDashboardPage.getMarkattendeceDownloadSampleFileLink().click()
         cy.wait(4000)
       var verifyAttendanceNameFormat =  gradeName+" "+"Attendance_"+sysDate
       cy.readFile("cypress/downloads/"+verifyAttendanceNameFormat+".xlsx").should('exist')
      })
      
      

   })
   it('/EL-6956/ES6975-11 To validate user is able to delete uploaded file before importing it  by Clcking on the "Delete" option', function () {
   teacherDashboardPage.getAttachsamplefile().attachFile('LMS/Grade 1 - A Attendance_26 Sept.xlsx')
   teacherDashboardPage.getAttachsamplefileDeleteBtn().should('be.visible').click()

   })

//    it('/EL-6956/ES6975-11 ', function () {


})
