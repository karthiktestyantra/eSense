const teacherDashboardPage = require("../../../support/pageObjects/LMS-2/TeacherDashboardPage")
const teacherGradeBookPage = require("../../../support/pageObjects/LMS-2/TeacherGradeBookPage")

describe("Verify Admin Student GradeBook functionalities", function () {

    before(function () {
        cy.visit(Cypress.env('urlBhsSchool'))
        cy.fixture("LMS/TeacherLoginCredentials").then(function (validAdminLoginData) {
            cy.TeacherPostSetupLogin(validAdminLoginData.user5, validAdminLoginData.password)
        })
    })

    beforeEach(function () {
        cy.viewport(1920, 1080)
        cy.fixture("LMS/TeacherDashboardCredentials").as("teacherDashboardCredentials")
    })

    it('EL-6975/ES6975-01 Validate School admin/teacher is able to view the student total attendance in gradebook', function () {
        teacherDashboardPage.getSideMenuReportsImg().click()
        teacherDashboardPage.getSideMenuStudentGradebookLink().click()
        cy.isVisible(teacherGradeBookPage.getStudentGradeBookTitle())
    })

  

})