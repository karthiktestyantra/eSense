const teacherDashboardPage = require("../../support/pageObjects/LMS-2/TeacherDashboardPage")

describe("Verify Teacher My Classes - Student Groups functionalities", function () {

    before(function () {
        cy.visit(Cypress.env('urlProd'))
        cy.fixture("LMS/TeacherLoginCredentials").then(function (teacherLoginCredentials) {
            cy.TeacherPostSetupLogin(teacherLoginCredentials.teacher1, teacherLoginCredentials.password)
        })
    })

    beforeEach(function () {
        cy.viewport(1920, 1080)
        cy.fixture("LMS/TeacherMyClasses").as("teacherMyClasses")
    })

    it('Validate and verify teacher is able to create Student Groups', function () {
        


    })

})