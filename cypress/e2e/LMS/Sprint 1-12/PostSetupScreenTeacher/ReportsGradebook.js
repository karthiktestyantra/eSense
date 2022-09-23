const indexPage = require('../../../../support/pageObjects/LMS-1/IndexPage')
const timeTableOverviewPage = require('../../../../support/pageObjects/LMS-1/TimeTableOverviewPage')
const dashboardPage = require('../../../../support/pageObjects/LMS-1/DashboardPage')
const reportsGradebookPage = require('../../../../support/pageObjects/LMS-1/ReportsGradebookPage')

describe("Verify Reports - Student Gradebook", function () {

  before(function () {
    cy.visit(Cypress.env("urlMain"));
    indexPage.getTeacher().click();
    cy.fixture("LMS/TeacherLoginCredentials").then(function (validLoginData) {
      this.validLoginData = validLoginData;
      cy.login(this.validLoginData.user2, this.validLoginData.password);
      timeTableOverviewPage
        .getDashboardTitle()
        .should("have.text", "Your Dashboard");
    });
  });

  beforeEach(function () {
    cy.fixture("LMS/reportGradebookStudentCount").as("studentCountData)")
  });

  it("Verify that the Teacher is able to login the application and navigate to Reports > Student gradebook", function () {
    dashboardPage.getReports().click({ force: true });
    reportsGradebookPage.getStudentGradebookOption().click({ force: true });
    reportsGradebookPage.getStudentGradebookTitle().should("have.text", "Student Gradebook");
  });

  it("Verify that the Teacher should be able to select the checkbox against the student", function () {
    cy.wait(1000)
    reportsGradebookPage
      .getOneofTheClasses()
      .should("have.text", this.studentCountData.class)
      .click({ force: true });
    cy.wait(2000)
    reportsGradebookPage.getCheckboxOfStudents().check();
  });

  it("Verify that the options “Upload CSV”, “Send a mail”, “Create reminder” and “Download report” should be displayed when the Teacher select the student records", function () {
    reportsGradebookPage
      .getGenerateReport()
      .should("have.text", "Print Gradebook")
      .should("be.visible");
  });

  it("Verify that the click on Arrow button of the student record should take to gradebook preview in a popup", function () {
    reportsGradebookPage.getArrowbuttonofStudent().click();
    // reportsGradebookPage.getReportCardTitle().should("be.contain", "Report Card");
  });

  it("Verify that the pop up should be displayed and return back to student gradebook by clicking close icon", function () {
    reportsGradebookPage.getGradePopupCloseIcon().scrollIntoView().click();
    reportsGradebookPage.getStudentGradebookTitle().should("have.text", "Student Gradebook");
  });

  it("Verify that the List of students should be displayed under each class", function () {
    reportsGradebookPage.getClassForStudentList().click();
    reportsGradebookPage.getStudentsCountIntheClass().then($ele => {
      let studentCounts = $ele.length;
      expect(this.studentCountData.studentCount).to.equal(studentCounts);
    });
  });

});
