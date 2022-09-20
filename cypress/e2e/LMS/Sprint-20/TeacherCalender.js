import TeacherDashboardPage from "../../../support/pageObjects/LMS-2/TeacherDashboardPage";
const TeacherDashboard = new TeacherDashboardPage(); 

describe("Verify Admin student grade book functionalities", function () {
    this.beforeEach(function () {
       cy.visit(Cypress.env('urlQAPreSetup'))
       cy.fixture("LMS/TeacherLoginCredentials.json").then(function (validAdminLoginData) {
          cy.TeacherPostSetupLogin(validAdminLoginData.user1, validAdminLoginData.password)
       })
    })
    it('To validate teacher is able to view the class details of all the clases/EL-6982/ES6982-01',function () {
        cy.contains('My Calendar').click({force:true})
        cy.get('[name="Classes"]').check({force:true})
        cy.get('[class="mbsc-calendar-button cal-header-next mbsc-reset mbsc-font mbsc-button mbsc-windows mbsc-ltr mbsc-button-flat mbsc-icon-button"]').click()
        cy.contains('Grade 3').click()
        cy.contains('Start Session').click()
        cy.contains('Class Details').should('have.text','Class Details')
        cy.contains('Timetable').should('have.text','Timetable')
    })
})