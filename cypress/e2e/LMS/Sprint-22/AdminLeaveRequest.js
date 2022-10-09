const leaveReqPage = require("../../../support/pageObjects/LMS-2/LeaveReqPage")
const dayjs = require('dayjs')

describe("Verify Teacher LeaveRequest Functionality - Sprint 22(EL-6656,EL-6657)", function () {

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
        cy.wait(12000)
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
        cy.visit(Cypress.env("urlQAPreSetup"))
        cy.fixture("LMS/AdminLoginCredentials").then(function (adminLoginCredentials) {
            cy.AdminPostSetup(adminLoginCredentials.fNew, adminLoginCredentials.password)
            leaveReqPage.getAdminSupportTicket().click()
            leaveReqPage.getTeacherLeaveReq().should('be.visible')

            // leaveReqPage.getAdminNotificationBtn().click()
            // var systemDate = dayjs().format('DD')
            // leaveReqPage.getAdminNotificationRequestRaised().contains(systemDate).click()
        })

    })

    it('/EL-6656/ES6656_2 Validate user on clicking the Leave Requests tab user is able to view the list of the leave request raised by the teacher.', function () {
         leaveReqPage.getTeacherLeaveReqDetails().should('be.visible')
    })

    it('/EL-6656/ES6656_3 Validate the following details are displayed for the user in the grid-Teacher Name-Start Date (dd/mm/yy)-End Date (dd/mm/yy)-Type of Leave (Full Day/Half Day)-Reason for the Leave (Upto 150char should be displayed)-Status is shown as Approve and Reject ("When the leave request is raised by teachers is in “Pending”)', function () {
        cy.get('th.MuiTableCell-head').eq(0).should('have.text','TEACHER NAME')
        cy.get('th.MuiTableCell-head').eq(1).should('have.text','START DATE')
        cy.get('th.MuiTableCell-head').eq(2).should('have.text','END DATE')
        cy.get('th.MuiTableCell-head').eq(3).should('have.text','TYPE OF LEAVE')
        cy.get('th.MuiTableCell-head').eq(4).should('have.text','REASON FOR THE LEAVE')
        cy.get('th.MuiTableCell-head').eq(5).should('have.text','STATUS')

    })

    it('/EL-6656/ES6656_4 Validate Admin on approving the leave requested by teacher the status is changed to Approved', function () {
        leaveReqPage.getTeacherLeaveApproveStatusBtn().eq(0).click()
        cy.on('window:alert', (t) => {
            //assertions
            expect(t).to.contains('Leave Request Approved');
        })
        cy.wait(5000)
        leaveReqPage.getTeacherLeaveApprovedStatus().eq(0).should('have.text','Approved')
    })

    it('/EL-6656/ES6656_5 Validate Admin on rejecting the leave requested by teacher the status is changed to Rejected', function () {
        cy.visit(Cypress.env("urlQAPreSetup"))
        cy.fixture("LMS/TeacherLoginCredentials").then(function (validLoginData) {
            cy.TeacherPostSetupLogin(validLoginData.user1, validLoginData.password)
        })
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
        cy.visit(Cypress.env("urlQAPreSetup"))
        cy.fixture("LMS/AdminLoginCredentials").then(function (adminLoginCredentials) {
            cy.AdminPostSetup(adminLoginCredentials.fNew, adminLoginCredentials.password)
            leaveReqPage.getAdminSupportTicket().click()

        leaveReqPage.getTeacherLeaveRejectStatusBtn().eq(0).click()
       leaveReqPage.getTeacherLeaveRejectReason().type('eye injury')
       leaveReqPage.getTeacherLeaveRejectpopupBtn().click()
       cy.on('window:alert', (rejesctMesg) => {
        //assertions
        expect(rejesctMesg).to.contains('Leave Request Rejected');
    })

    })

    cy.wait(5000)
        leaveReqPage.getTeacherLeaveRejectedStatus().eq(0).should('have.text','Rejected')

    })

    it('/EL-6656/ES6656_6 Validate Search Option is available with Keyword Search.', function () {
        leaveReqPage.getTeacherSearchATicket().should('be.visible')


    })

    it('/EL-6656/ES6656_7 Validate a Filter option should be there with drop down option as All /Pending/Approved/Rejected.', function () {
       leaveReqPage.getTeacherStatusFilter().scrollIntoView().click({force:true})
       leaveReqPage.getTeacherStatusFilterDetails().eq(0).should('have.text','All')
       leaveReqPage.getTeacherStatusFilterDetails().eq(1).should('have.text','Pending')
       leaveReqPage.getTeacherStatusFilterDetails().eq(2).should('have.text','Approved')
       leaveReqPage.getTeacherStatusFilterDetails().eq(3).should('have.text','Rejected')
    })

    it('/EL-6656/ES6656_9 Validate the list of Approved Leave Request is displayed as per the filter selected.', function () {
        leaveReqPage.getTeacherStatusFilterDetails().contains('Approved').click()
        leaveReqPage.getTeacherLeaveApprovedStatus().contains('Approved').should('be.visible')
    })

    it('/EL-6656/ES6656_10 Validate the list of Leave Request Rejected is displayed as per the filter selected.', function () {
        leaveReqPage.getTeacherStatusFilter().scrollIntoView().click({force:true})
        leaveReqPage.getTeacherStatusFilterDetails().contains('Rejected').click()
        leaveReqPage.getTeacherLeaveRejectedStatus().contains('Rejected').should('be.visible')
        

    })

    it('/EL-6656/ES6656_8 Validate the list of Leave Request is displayed as per the filter selected.', function () {
        leaveReqPage.getTeacherStatusFilter().scrollIntoView().click({force:true})
        leaveReqPage.getTeacherStatusFilterDetails().contains('Pending').click()
        leaveReqPage.getTeacherLeaveApproveStatusBtn().should('be.visible')
        //leaveReqPage.getTeacherLeaveRejectStatusBtn().should('be.visible')
    })

    it('/EL-6656/ES6656_12 Validate Pagination is handled (10 records are displayed per page)', function () {
        leaveReqPage.getTeacherLeaveReqDetails().should('have.length.lessThan',11)
    })

    it('/EL-6657/ES6657_11 Validate user is able to view the details of the leave request by clicking the >(View) icon in the leave requests list. ', function () {
        leaveReqPage.getTeacherLeaveTyppe().then((leaveType)=>{
            var leavetype = leaveType.text()
            cy.get('span.font-weight-bold').eq(0).then((teacherName)=>{
                var teachername = teacherName.text()
             leaveReqPage.getTeacherLeaveRequestPgeDetails().eq(1).then((StartDate)=>{
                var startDate = StartDate.text()
             leaveReqPage.getTeacherLeaveRequestPgeDetails().eq(2).then((EndDate)=>{
                    var endDate = EndDate.text()
                   leaveReqPage.getTeacherLeaveRequestPgeDetails().eq(3).then((TypeOfLeave)=>{
                        var typeOfLeave= TypeOfLeave.text()
                    leaveReqPage.getTeacherLeaveRequestPgeDetails().eq(4).then((ReasonForLeave)=>{
                            var reasonForLeave= ReasonForLeave.text()
            leaveReqPage.getTeacherLeaveViewStatus().eq(0).should('be.visible').click()
            cy.wait(2000)
            leaveReqPage.getTeacherLeaveViewLeaveType().then((viewLeaveType)=>{
                var viewLeavetype = viewLeaveType.text()

             leaveReqPage.getTeacherViewLeaveRequestStartDate().then((viewStartDate)=>{
                    var viewstartDate = viewStartDate.text()

                leaveReqPage.getTeacherViewLeaveRequestEndDate().then((viewEndDate)=>{
                        var viewendDate = viewEndDate.text()

                     leaveReqPage.getTeacherViewLeaveRequestTpePOfLeave().then((viewTypeOfLeave)=>{
                            var viewtypeOfLeave = viewTypeOfLeave.text()

                         leaveReqPage.getTeacherViewLeaveRequestTeacherName() .then((viewTeacherName)=>{
                                var viewteacherName = viewTeacherName.text()
                expect(leavetype).to.equal(viewLeavetype)
                expect(teachername).to.equal(viewteacherName)
                expect(startDate).to.equal(viewstartDate)
                expect(endDate ).to.equal(viewendDate )
                expect(typeOfLeave).to.equal(viewtypeOfLeave)


                            })
                        })

                    })

                })

            })
            })
            
            })

            })
            })
            })

        })
       

    })

    it('/EL-6657/ES6657_12 Validate when user clicks on X button available on the leave request details screen, the user is redirected to the Leave Requests listing screen.', function () {
      leaveReqPage.getTeacherLeaveViewPopupcloseBtn().should('be.visible').click()
      leaveReqPage.getTeacherLeaveRequestHeaderTxt().should('be.visible')
    })

 
})