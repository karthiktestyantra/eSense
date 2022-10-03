class LeaveReqPage {

    getTeacherMyCalenderImg() {
        return cy.get('div.side-nav-dashboard img[src="/static/media/myCalendar.aa68473e.svg"]')
    }

    getTeacherLeaveReqBtn() {
        return cy.get('button.myCalRqtLev')
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