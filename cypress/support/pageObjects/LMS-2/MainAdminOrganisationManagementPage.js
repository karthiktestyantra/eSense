class MainAdminOrganisationManagementPage {

    getTitle() {
        return cy.get('div.page-title h1');
    }

    getRegDateTitle() {
        return cy.get('thead tr th').eq(4);
    }

    getActionsBtn() {
        return cy.get(':nth-child(5) > .text-center > [href="#"] > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path');
    }

    getSchoolManagementLnk() {
        return cy.get(':nth-child(5) > .text-center > .menu > [style="text-align: justify;"] > .menu-link');
    }

    getSubDomainTitle() {
        return cy.get('thead tr th').eq(1);
    }

}
module.exports = new MainAdminOrganisationManagementPage() 