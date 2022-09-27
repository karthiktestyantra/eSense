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

    //Business Logic
    clickOnReportLnk() {
        cy.forceClick(this.getReportLnk())
    }

}
module.exports = new AdminHomePage() 