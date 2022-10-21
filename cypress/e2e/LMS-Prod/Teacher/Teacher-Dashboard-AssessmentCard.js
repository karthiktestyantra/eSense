const teacherCalenderPage = require("../../../support/pageObjects/LMS-2/TeacherCalenderPage")
const teacherHomePage = require("../../../support/pageObjects/LMS-2/TeacherHomePage")
const adminlogin = require('../../../support/pageObjects/LMS-2/AdminIndexPage')
const adminDashboardPage = require("../../../support/pageObjects/LMS-2/AdminDashboardPage")
const adminCalenderHomePage = require("../../../support/pageObjects/LMS-2/AdminCalenderHomePage")
const dayjs = require('dayjs')

describe("Verify AssessmentCard functionalities - Sprint 14(EL-3969)", function () {

  var title = []
    before(function () {
        cy.visit(Cypress.env('urlProd'))
        adminlogin.getAdminBtn().click()
        cy.fixture("LMS/validAdminLoginCredentials").then(function (validAdminLoginData) {
            this.validAdminLoginData = validAdminLoginData;
            cy.login(this.validAdminLoginData.prodUserName, this.validAdminLoginData.password)
        });
    });

    beforeEach(function () {
      cy.viewport(1920, 1080)
      cy.fixture("LMS/AdminCalenderExam").as("adminCalenderExam")
  })

it('EL-111/ES111-01 Validate user is able to create an exam in calendar', function () {
  cy.forceClick(adminDashboardPage.getCalenderBtn())
  adminCalenderHomePage.getCreateNewBtn().click()
  adminCalenderHomePage.getExamLink().click()
  adminCalenderHomePage.getCreateExamsDropdowns().eq(0).click()
  adminCalenderHomePage.getCreateExamsDropdownsList().contains(this.adminCalenderExam.examGrade).click()
  cy.wait(1000)
  adminCalenderHomePage.getCreateExamSubjectDropdown().click()
  adminCalenderHomePage.getCreateExamsDropdownsList().contains(this.adminCalenderExam.examSubject).click()
  adminCalenderHomePage.getEnterExamTitleTextFieldCreateExam().type(this.adminCalenderExam.examTitle)
  adminCalenderHomePage.getDateOfExamTextFieldCreateExam().click()
  adminCalenderHomePage.getDateCreateExam().contains(Number(dayjs().format('DD')) + 1).click()
  adminCalenderHomePage.getStartEndTimeCreateExam().eq(0).click()
  adminCalenderHomePage.getAmPmTimeCreateExam().eq(0).click()
  cy.clickOnBody()
  adminCalenderHomePage.getStartEndTimeCreateExam().eq(1).click()
  cy.wait(1000)
  adminCalenderHomePage.getAmPmTimeCreateExam().eq(1).click()
  cy.clickOnBody()
  adminCalenderHomePage.getExamTypeCreateExam().click()
  adminCalenderHomePage.getCreateExamsDropdownsList().eq(1).click()
  adminCalenderHomePage.getAttachFileCreateExam().attachFile('LMS/SampleDocs-sample-pdf-file.pdf')
  adminCalenderHomePage.getSaveExamBtn().click()
  cy.wait(4000)
  adminCalenderHomePage.getExamCheckbox().check()
  adminCalenderHomePage.getDateInYourCalender().contains(Number(dayjs().format('DD')) + 1).click()
  cy.verifyTextContains(adminCalenderHomePage.getExamTextYourCalender(), this.adminCalenderExam.examTitle)
})

  it("To verify that total number of assesments scheduled in that month are provided in Dashboard assessment card/EL-3969/ES3969_01", function () {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit(Cypress.env("urlProd"))
    cy.fixture("LMS/TeacherLoginCredentials").then(function (teacherLoginCredentials) {
        cy.TeacherPostSetupLogin(teacherLoginCredentials.teacher2, teacherLoginCredentials.password)
    })
    cy.wait(2000)
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

  it('EL-111/ES111-03 Validate user is able to delete the exam', function () {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit(Cypress.env("urlProd"))
    adminlogin.getAdminBtn().click()
    cy.fixture("LMS/validAdminLoginCredentials").then(function (validAdminLoginData) {
        this.validAdminLoginData = validAdminLoginData;
        cy.login(this.validAdminLoginData.prodUserName, this.validAdminLoginData.password)
    });
    
    cy.forceClick(adminDashboardPage.getCalenderBtn())
    adminCalenderHomePage.getExamCheckbox().check()
    adminCalenderHomePage.getExamTextYourCalender().then(($el) => {
        var len = $el.length
        for (let index = 0; index < len; index++) {
            cy.forceClick(adminCalenderHomePage.getExamTextYourCalender().eq(0))
            cy.wait(1000)
            adminCalenderHomePage.getDeleteExamBtn().click()
            cy.wait(1000)
            adminCalenderHomePage.getDeleteExamConfrmBtn().click()
            cy.wait(3000)
        }
    })
})

})

//pre-condition
//1.Need to Create new exam manually with respective grade
//2.each and every month need to create event and exam manually