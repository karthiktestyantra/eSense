const leaveReqPage = require("../../../support/pageObjects/LMS-2/LeaveReqPage")
const dayjs = require('dayjs')

describe("Verify Teacher Profile Account Information Functionalities - Sprint 22(EL-6285)", function () {

    before(function () {
        cy.visit(Cypress.env("urlQAPreSetup"))
        cy.fixture("LMS/TeacherLoginCredentials").then(function (validLoginData) {
            cy.TeacherPostSetupLogin(validLoginData.user1, validLoginData.password)
        })
    })

    beforeEach(function () {
        cy.fixture("LMS/leaveReqCredentials").as("leaveReqCredentials")
    })

    it('/EL-6656/ES6656_1 Validate user on clicking “Support Tickets & Leave Request.” user is redirected to new page with two tabs -Support Tickets -Leave Requests', function () {
        leaveReqPage.getTeacherMyCalenderImg().click()
        leaveReqPage.getTeacherLeaveReqBtn().click()
        cy.wait(3000)
        leaveReqPage.getTeacherLeaveReasonForLeave().contains(this.leaveReqCredentials.sickleave).click()
        leaveReqPage.getTeacherLeaveTypeForLeave().contains(this.leaveReqCredentials.Fullday).click()
        leaveReqPage.getTeacherStartDate().click()
        var sysDate = dayjs().format('D')
        var leaveDate = 1
        leaveReqPage.getTeacherStartDateValue().contains(sysDate).click()
        cy.wait(2000)
        cy.get('input.MuiInputBase-inputAdornedEnd').eq(0).invoke('attr', 'value').then(($el) => {
            var startDateValue = $el
            cy.log(startDateValue)
        })
   
        leaveReqPage.getTeacherEndtDate().click()
        leaveReqPage.getTeacherStartDateValue().contains((Number(sysDate) + leaveDate)).click({ force: true })
        cy.get('input.MuiInputBase-inputAdornedEnd').eq(1).invoke('attr','value').then(($e2)=>{
            var endDateVlaue = $e2
            cy.log(endDateVlaue)
        })
        leaveReqPage.getTeacherSendReqBtn().click()
        cy.on('window:alert', (t) => {
            //assertions
            expect(t).to.contains('Request Sent Successfully');
        })
        cy.clearLocalStorage()
        cy.visit('https://liverpool.staging.topschool.co.in/')
        cy.fixture("LMS/AdminLoginCredentials").then(function (adminLoginCredentials) {
            cy.AdminPostSetup(adminLoginCredentials.fNew, adminLoginCredentials.password)
            leaveReqPage.getAdminNotificationBtn().click()
            var systemDate = dayjs().format('DD')
            leaveReqPage.getAdminNotificationRequestRaised().contains(systemDate).click()
        })

    })



})