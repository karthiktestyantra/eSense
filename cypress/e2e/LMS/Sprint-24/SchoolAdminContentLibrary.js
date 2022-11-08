const adminDashboardPage = require("../../../support/pageObjects/LMS-2/AdminDashboardPage")
const adminContentLibraryPage = require("../../../support/pageObjects/LMS-2/AdminContentLibraryPage")

describe("Verify School Admin ContantLibrary functionalities - Sprint 24(EL-7153)", function () {

    before(function () {
        cy.visit(Cypress.env('urlMain'))
        cy.fixture('LMS/AdminLoginCredentials').then(function (validAdminLoginData) {
            cy.AdminPostSetup(validAdminLoginData.newUsername, validAdminLoginData.password)
        })
    })
    beforeEach(function () {
        cy.viewport(1920, 1080)
    })

    it('ES7153_1  Validate user is able to view Share option for every content inside TopSchool Library/ Personal Library .',function () {
        adminDashboardPage.getSideMenuContentLibraryImg().click()
        
    })
})