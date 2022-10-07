const adminDashboardPage = require("../../../support/pageObjects/LMS-2/AdminDashboardPage")

describe("Verify Admin Dashboard Performance Insights Top Performers - Sprint 23(EL-5027)", function () {

    before(function () {
        cy.visit(Cypress.env('urlBhsSchool'))
        cy.fixture('LMS/AdminLoginCredentials').then(function (validAdminLoginData) {
            cy.AdminPostSetup(validAdminLoginData.bhsUser, validAdminLoginData.password)
        })
    })

    beforeEach(function () {
        cy.fixture("LMS/AdminDashboardCredentials").as("adminDashboardCredentials")
    })

    it("EL-5027/ES5027_1 Validate School Admin is able to view top performer user of Student by default.", function () {
   
   
    })

})