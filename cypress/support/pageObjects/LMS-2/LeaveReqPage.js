class LeaveReqPage {

    getTeacherMyCalenderImg() {
        return cy.get('div.side-nav-dashboard img[src="/static/media/myCalendar.aa68473e.svg"]')
    }

    getTeacherLeaveReqBtn() {
        return cy.get('button.myCalRqtLev')
    }

    getTeacherMyCalenderLeaveReqBtn() {
        return cy.get('button.myCalRqtLev ')
    }

    getTeacherLeaveReasonForLeave() {
        return cy.get('div.leaveRqtLeveType p')
    }

    
    getTeacherLeaveTypeForLeave() {
        return cy.get('div.leaveRqtLeveType p')
    }

    getTeacherStartDate() {
        return cy.get('div.schAdminInputCtrDate').eq(0)
    }

    getTeacherEndtDate() {
        return cy.get('div.schAdminInputCtrDate').eq(1)
    }

    
    getTeacherStartDateValue() {
        return cy.get('button.MuiPickersDay-dayWithMargin')
    }

    getAdminSupportTicket() {
        return cy.get('div.side-nav-icon img[src="/static/media/teacher-inquiry.8070efbd.svg"]')
    }

    getTeacherLeaveReq() {
        return cy.get('a.ClassDashboard_routeDesign__2n_Xy')
    }

    getTeacherLeaveReqDetails() {
        return cy.get('tbody.MuiTableBody-root tr.MuiTableRow-root ')
    }

    getTeacherLeaveRequestPgeDetails() {
        return cy.get('td.MuiTableCell-root')
    }

    getTeacherViewLeaveRequestStartDate() {
        return cy.get('.ViewLeaveRequest_viewLeaveReqBlkInfo__2rgjR > :nth-child(1) > h4')
    }

    getTeacherViewLeaveRequestEndDate() {
        return cy.get('.ViewLeaveRequest_viewLeaveReqBlkInfo__2rgjR > :nth-child(1) > h4')
    }
    
    getTeacherViewLeaveRequestTpePOfLeave() {
        return cy.get('.ViewLeaveRequest_viewLeaveReqBlkInfo__2rgjR > :nth-child(3) > h4')
    }

        
    getTeacherViewLeaveRequestTeacherName() {
        return cy.get('.ViewLeaveRequest_viewLeaveReqBlkInfo__2rgjR > :nth-child(3) > h4')
    }

    getTeacherLeaveApproveStatusBtn() {
        return cy.get('button.approve')
    }

    
    getTeacherLeaveViewLeaveType() {
        return cy.get('div.ViewLeaveRequest_viewLeaveReqBlkResLeav__rPy3J h4')
    }

    
    getTeacherLeaveViewPopupcloseBtn() {
        return cy.get('svg[data-testid="CloseIcon"]')
    }

    getTeacherLeaveRequestHeaderTxt() {
        return cy.get('div.ClassDashboard_classDashboardHeader__2On97 p')
    }

    
    getTeacherLeaveViewStatus() {
        return cy.get('svg.arrow')
    }

    getTeacherLeaveTyppe() {
        return cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(5)')
    }

    getTeacherLeaveApprovedStatus() {
        return cy.get('div.supportAndFeedTableStatus button')
    }

    getTeacherLeaveRejectedStatus() {
        return cy.get('div.supportAndFeedTableStatus button')
    }

    getTeacherSearchATicket() {
        return cy.get('input.MuiInputBase-inputTypeSearch')
    }

    getTeacherStatusFilter() {
        return cy.get('#demo-simple-select')
    }

    getTeacherStatusFilterDetails() {
        return cy.get('ul.MuiList-padding li')
    }

    getTeacherLeaveRejectStatusBtn() {
        return cy.get('button.reject')
    }

    getTeacherLeaveRejectReason() {
        return cy.get('textarea[data-testid="reson box"]')
    }

    getTeacherLeaveRejectpopupBtn() {
        return cy.get('div.rejForResBlkHead button.reject')
    }

    getTeacherSendReqBtn() {
        return cy.get('button.leaveRqtAction').contains('Send Request')
    }

    getAdminNotificationBtn() {
        return cy.get('div.side-nav-dashboard img[src="/static/media/bellNav.79ae92ed.svg"]')
    }

    getAdminNotificationRequestRaised() {
        return cy.get('p.notecarddes')
    }


}
module.exports = new LeaveReqPage() 