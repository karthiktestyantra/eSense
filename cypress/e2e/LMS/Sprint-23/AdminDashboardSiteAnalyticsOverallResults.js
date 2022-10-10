const adminDashboardPage = require("../../../support/pageObjects/LMS-2/AdminDashboardPage")
const adminContentLibraryPage = require("../../../support/pageObjects/LMS-2/AdminContentLibraryPage")

describe("Verify Admin Dashboard Site Analytics - Sprint 23(EL-4946)", function () {

    before(function () {
        cy.visit(Cypress.env('urlBhsSchool'))
        cy.fixture('LMS/AdminLoginCredentials').then(function (validAdminLoginData) {
            cy.AdminPostSetup(validAdminLoginData.bhsUser, validAdminLoginData.password)
        })
    })

    beforeEach(function () {
        cy.fixture("LMS/AdminDashboardCredentials").as("adminDashboardCredentials")
    })

    it("EL-4946/ES4946-01 Validate user is able to view Content performance option in the site analytics section of the dashboard.", function () {
       
    })



})

//Author - 