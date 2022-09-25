const adminDashboardPage = require("../../../support/pageObjects/LMS-2/AdminDashboardPage")
const adminGradeBookPage = require("../../../support/pageObjects/LMS-2/AdminGradeBookPage")

describe("Verify Admin Student GradeBook functionalities", function () {

    before(function () {
        cy.visit(Cypress.env('urlQAPreSetup'))
        cy.fixture("LMS/AdminLoginCredentials").then(function (adminLoginCredentials) {
            cy.AdminPostSetup(adminLoginCredentials.fNew, adminLoginCredentials.password)
        })
    })

    beforeEach(function () {
        cy.viewport(1920, 1080)
        cy.fixture("LMS/AdminGradeBook").as("adminGradeBook")
    })

    it('EL-6975/ES6975-01 To validate School admin/teacher is able to view the student total attendance in gradebook', function () {
        adminDashboardPage.getSideMenuReportsImg().click()
        adminDashboardPage.getSideMenuStudentGradebookLink().click()
        cy.isVisible(adminGradeBookPage.getStudentGradeBookTitle())
    })

  

})