const teacherCalenderPage = require("../../../support/pageObjects/LMS-2/TeacherCalenderPage")
const teacherHomePage = require("../../../support/pageObjects/LMS-2/TeacherHomePage")

describe("Verify AssessmentCard functionalities", function () {
  before(function () {
    cy.visit(Cypress.env("urlQAPreSetup"))
    cy.fixture("LMS/TeacherLoginCredentials").then(function (validAdminLoginData) {
      cy.TeacherPostSetupLogin(validAdminLoginData.user1, validAdminLoginData.password)
    })
  })

  it("To verify that total number of assesments scheduled in that month are provided in Dashboard assessment card/EL-3969/ES3969_01", function () {
    cy.wait(3000)
    teacherHomePage.getAssessmentTxt().should('be.visible')
    teacherHomePage.getAssessmentCount().should('be.visible')
  })

  it("To verify that exam count is taken from the School Admin created exams for that cureent month/EL-3969/ES3969_03", function () {
    teacherHomePage.getAssessmentCount().should('not.contain.text', "0")
  })

  it("T0 verify that total number of exams scheduled in that month are provided in Dashboard assessment card/EL-3969/ES3969_02", function () {
    cy.wait(1000)
    teacherHomePage.getAssessmentTxt().click()
    teacherCalenderPage.getExamScheduledDay().should('be.visible')
  })

  it("To verify that when teacher click on 'Assessment' card it's navigating to 'Calendar' page/EL-3969/ES3969_06", function () {
    teacherCalenderPage.getCalendarTitle().should('be.visible')
  })

  it("To verify that teacher is able to view calendar monthly view by “Exams” selected in filter by default/EL-3969/ES3969_07", function () {
    teacherCalenderPage.getCalenderRange().its('length').should('be.gte', 27)
  })
})

//pre-condition
//1.Need to Create new exam manually with respective grade
//2.each and every month need to create event and exam manually