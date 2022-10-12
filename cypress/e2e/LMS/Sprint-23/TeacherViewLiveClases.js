const teacherViewLiveClassesPage= require('../../../support/pageObjects/LMS-2/TeacherViewLiveClassesPage')
const teacherDashboardPage = require('../../../support/pageObjects/LMS-2/TeacherDashboardPage')
const teacherLiveClassPage = require('../../../support/pageObjects/LMS-2/TeacherLiveClassesPage')
var randomstring = require("randomstring")
const dayjs = require('dayjs')

describe("Verify Teacher LeaveRequest Functionality - Sprint 23(EL-6656,EL-6657)", function () {

    before(function () {
        cy.visit(Cypress.env("urlQAPreSetup"))
        cy.fixture("LMS/TeacherLoginCredentials").then(function (validLoginData) {
            cy.TeacherPostSetupLogin(validLoginData.user1, validLoginData.password)
        })
    })
    beforeEach(function () {
        cy.fixture("LMS/TeacherViewLiveClasses.json").as("viewLiveClasses")
        cy.viewport(1920, 1080)
    })

    it('/EL-6463/ES6463-01 To validate user is able to view the list of live classes by clicking on live classes tab in the "My classes "menu.', function () {
         teacherViewLiveClassesPage.getTeacherMyclassImg().click()
         teacherViewLiveClassesPage.getTeacherMyclassGrade().eq(0).contains(this.viewLiveClasses.GradeName).click()
         teacherViewLiveClassesPage.getTeacherLiveClassesTab().click()
         cy.wait(2000)
         teacherViewLiveClassesPage.getTeacherListOfLiveClasses().should('be.visible')
    })

    it('/EL-6463/ES6463-02 To validate list of live classes consist of upcoming classes(with count).', function () {
        teacherViewLiveClassesPage.getTeacherListOfUpcommingClasses().then((upcommingLength)=>{
            var upcommingLenCount = upcommingLength.length
            cy.log(upcommingLenCount)
            teacherViewLiveClassesPage.getTeacherListOfUpcommingClassesHeaderTxt().then((upcommingHeader)=>{
                var upcommingHeaderTxt = upcommingHeader.text().trim()
                var upcommingHeadTxt = upcommingHeaderTxt.substring(2,19)
                cy.log(upcommingHeadTxt)
                cy.wait(4000)
                teacherViewLiveClassesPage.getTeacherListOfUpcommingClassesHeaderTxt().should('have.text'," "+(String(upcommingLenCount))+" "+upcommingHeadTxt+" ")  

            })

        })
    })

    it('/EL-6463/ES6463-04 To validate the system display as " current" status when systems date is matching with current time.', function () {
        teacherLiveClassPage.getCreateNewLiveClassBtn().should('be.visible').click()
        teacherLiveClassPage.getCreateLiveClassTitleTxt().should('have.text', "Create Live Class")
        teacherLiveClassPage.getClassDrpDwn().should('have.text', "Grade 3 - A").and('be.visible').click()
        teacherLiveClassPage.getDrpdwnLst().should('be.visible')
        cy.clickOnBody()
        teacherLiveClassPage.getSubDrpDwn().should('have.text', "English I").click()
        teacherLiveClassPage.getDrpdwnLst().should('be.visible')
        cy.clickOnBody()
        teacherLiveClassPage.getClassTypeDrpDwn().click()
        teacherLiveClassPage.getDrpdwnLst().should('contain.text', "Online").and('contain.text', "Offline")
        teacherLiveClassPage.getDrpdwnLst().contains("Online").click()
        cy.clickOnBody()
        teacherLiveClassPage.getEnterClassTitleFld().type("PS 1")
        teacherLiveClassPage.getAttendeeDrpDwn().click()
        teacherLiveClassPage.getAttendeeLst().should('be.visible')
        teacherLiveClassPage.getAttendeeLstCheckBx().check({ multiple: true })
        teacherLiveClassPage.getAttendeeFldCloseBtn().click()
        teacherLiveClassPage.getDateFld().click()
        var sysDate = dayjs().format('D')
       teacherViewLiveClassesPage.getLastDateInCalendarPopup().contains(Number(sysDate)+1).click()
        teacherLiveClassPage.getStartTimePicker().click()
        teacherLiveClassPage.getAMStartTime().click()
        cy.clickOnBody()
        teacherLiveClassPage.getEndTimePicker().click()
        cy.wait(1000)
        teacherLiveClassPage.getPMStartTime().click()
        cy.clickOnBody()
        teacherLiveClassPage.getRemindDrpDwn().click()
        teacherLiveClassPage.getDrpdwnLst().should('contain.text', "Do Not Remind").and('contain.text', "15 minutes before the event").
            and('contain.text', "30 minutes before the event").and('contain.text', "1 hour before the event")
        teacherLiveClassPage.getDrpdwnLst().first().click()
        teacherLiveClassPage.getAddDescriptionTxtFld().click().type(randomstring.generate(51))
        teacherLiveClassPage.getDescriptionAlertMsg().should('have.text', "Description must not exceed 50 Characters").should('be.visible')
        teacherLiveClassPage.getAddDescriptionTxtFld().clear().type('Live Class')
        teacherLiveClassPage.getMeetingLnkFld().click().type("www.note.com")
        teacherLiveClassPage.getSaveLiveClassBtn().click()
        cy.contains("Live Class Created successfully").should('be.visible')
        cy.go('back')
        teacherViewLiveClassesPage.getTeacherLiveclassesDate().then((LiveClassdate)=>{
            var liveClassdate = LiveClassdate.text()
            var liveDate = liveClassdate.split(" ")
            var liveDateTxt = liveDate[0]
            expect(Number(sysDate)+1).to.equal(Number(liveDateTxt))


        })
        teacherViewLiveClassesPage.getTeacherListOfViewBtn().click()
        cy.wait(1000)
       teacherViewLiveClassesPage.getLiveClassDltBtn().click()
       teacherLiveClassPage.getLiveClassdltConfirmBtn().click()
        cy.wait(3000)
      

    })

    it('/EL-6463/ES6463-03 To validate the following details are displayed in the "Live classes card" such as:1.Date and time.2.Live Class Title.3.Profile Picture with a total student count of the class.4.Current / Upcoming/ Past', function () {
       cy.go('back')
        teacherViewLiveClassesPage.getTeacherLiveclassesTitle().then((Title)=>{
        var title = Title.text()
        teacherViewLiveClassesPage.getTeacherListOfViewBtn().click()
        cy.wait(1000)
        teacherViewLiveClassesPage.getTeacherLiveclassesPopupTitle().then((popupTxt)=>{
            var popupTx = popupTxt.text()
            expect(title).to.equal(popupTx)
        })

        }) 
    })

    it('/EL-6463/ES6463-08 To validate user is able to select date from calendar selection filter.', function () {
       cy.go('back')
       cy.wait(12000)
       // teacherViewLiveClassesPage.getFilterDateIcon().click()
       //cy.get('#outlined-basic').click({force:true})
       cy.get('.MuiBox-root > .MuiFormControl-root > .MuiOutlinedInput-root').click({force:true})
       cy.get('.css-17vdz66 > .MuiFormControl-root > .MuiOutlinedInput-root').click({force:true})
       var sysDate =  dayjs().format('D')
       var startDate =  1
       teacherViewLiveClassesPage.getCalenderStartDate(30).click()
       teacherViewLiveClassesPage.getCalenderEndDate(sysDate).click()
       teacherViewLiveClassesPage.getTeacherLiveclassesDate().then((LiveClassdate)=>{
        var liveClassdate = LiveClassdate.text()
        var liveDate = liveClassdate.split(" ")
        var liveDateTxt = liveDate[0]
        cy.log(liveDateTxt)
        teacherViewLiveClassesPage.getTeacherLiveclassesDate().should('contain.text',liveDateTxt)
       })
     
       
    })

    it('/EL-6463/ES6463-10 To validate "Six"records in the list screen is displayed .', function () {
        teacherViewLiveClassesPage.getTeacherListOfLiveClasses().should('have.length.lessThan',7)
    })

   
})