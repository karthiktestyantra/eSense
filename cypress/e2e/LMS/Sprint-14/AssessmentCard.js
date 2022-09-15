import TeacherCalenderPage from "../../../support/pageObjects/LMS-2/TeacherCalenderPage";
import TeacherHomePage from "../../../support/pageObjects/LMS-2/TeacherHomePage";

const home = new TeacherHomePage();
const calender = new TeacherCalenderPage;

describe("Verify AssessmentCard functionalities", function () {
  before(function () {
    cy.visit(Cypress.env("urlQAPreSetup"))
    cy.fixture("LMS/TeacherLoginCredentials").then(function (validAdminLoginData) {
      cy.TeacherPostSetupLogin(validAdminLoginData.user1, validAdminLoginData.password)
    })
  })

  it("To verify that total number of assesments scheduled in that month are provided in Dashboard assessment card/EL-3969/ES3969_01", function () {
    cy.wait(3000)
    home.getAssessmentTxt().should('be.visible')
    home.getAssessmentCount().should('be.visible')
  })

  it("To verify that exam count is taken from the School Admin created exams for that cureent month/EL-3969/ES3969_03", function () {
    home.getAssessmentCount().should('not.contain.text', "0")
  })

  it("TO verify that total number of exams scheduled in that month are provided in Dashboard assessment card/EL-3969/ES3969_02", function () {
    cy.wait(1000)
    home.getAssessmentTxt().click()
    calender.getExamScheduledDay().should('be.visible')
  })

  it("To verify that when teacher click on 'Assessment' card it's navigating to 'Calendar' page/EL-3969/ES3969_06", function () {
    calender.getCalendarTitle().should('be.visible')
  })

  it("To verify that teacher is able to view calendar monthly view by “Exams” selected in filter by default/EL-3969/ES3969_07", function () {
    calender.getCalenderRange().its('length').should('be.gte', 20)
  })
})

//Need to Create new exam manually with respective grade
//each and every month need to create event and exam manually