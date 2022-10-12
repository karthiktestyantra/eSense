const teacherDashboardPage = require("../../support/pageObjects/LMS-2/TeacherDashboardPage")

describe("Verify Admin Student GradeBook functionalities - Sprint 20(EL-6975)", function () {

    before(function () {
        cy.visit(Cypress.env('urlProd'))
        cy.fixture("LMS/TeacherLoginCredentials").then(function (teacherLoginCredentials) {
            cy.TeacherPostSetupLogin(teacherLoginCredentials.teacher1, teacherLoginCredentials.password)
        })
    })

    beforeEach(function () {
        cy.viewport(1920, 1080)
        cy.fixture("LMS/TeacherDashboardCredentials").as("teacherDashboardCredentials")
    })

    it('EL-6975/ES6975-02,ES6975-03 Validate system is displaying attendance dynamically in the gradebook irrespective of gradebook updates', function () {


    })

})