class AdminHomePage {

    getAdminGradeLnk() {
        return cy.get('.step-container div').eq(2);
    }

    getAdminAccountLnk() {
        return cy.get('.step-container div').eq(4);
    }

    getContinueBtn() {
        return cy.get('button[type="button"]').contains("Continue");
    }

    getReportLnk() {
        return cy.get('div.menu-txt').contains("Reports")
    }

    getUsersLnk(){
        return cy.get('div.menu-txt').contains("Users")
    }
    getGradeWiseAttendanceTab(){
        return cy.get('div[role="tablist"] button').contains("Grade-Wise Attendance")
    }
    getGradeDrpDwnInGradeWiseAttendance(){
        return cy.get('div.gradeWiseWidgetFilterSect div div div[role="button"]').eq(0)
    }
    getSectionDrpDwnInGradeWiseAttendance(){
        return cy.get('div.gradeWiseWidgetFilterSect div div div[role="button"]').eq(1)
    }
    getSectionDrpDwnLstInGradeWiseAttendance(){
        return cy.get('div ul li.MuiMenuItem-gutters')
    }

    //Business Logic
    clickOnReportLnk() {
        cy.forceClick(this.getReportLnk())
    }

}
module.exports = new AdminHomePage() 