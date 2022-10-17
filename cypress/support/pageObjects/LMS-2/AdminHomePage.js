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
    getDashboardLnk(){
        return cy.get('div.menu-txt').contains("Dashboard")
    }
    getGradeWiseAttendanceTab(){
        return cy.get('div[role="tablist"] button').contains("Grade-Wise Attendance")
    }
    getStudentRegistrationTab(){
        return cy.get('div[role="tablist"] button').contains("Student Registrations")
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
    getBarGraphInGradewiseSection(){
        return cy.get('span[style="height: 50%; opacity: 0.5;"]')
    }
    getGradeDrpDwnLstInGradeWiseSection(){
        return cy.get('div.MuiPaper-elevation8 ul li')
    }
    //Student Reg
    getDrpdwnInStudentRegistrationTab(){
        return cy.get('div.MuiInputBase-root div.MuiSelect-select').eq(0)
    }
    getDrpDwnLstInStudentRegistrationTab(){
        return cy.get('div ul li.MuiMenuItem-gutters')
    }
    getCountLstInStudentRegistrationTab(){
        return cy.get('g.recharts-layer text[orientation="left"]')
    }
    getDotInGraphInStudentRegistrationTab(){
        return cy.get('div.recharts-tooltip-wrapper')
    }


    //Business Logic
    clickOnReportLnk() {
        cy.forceClick(this.getReportLnk())
    }

}
module.exports = new AdminHomePage() 