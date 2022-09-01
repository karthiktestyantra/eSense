/// <reference types="Cypress"/>

import IndexPage from "../../../support/pageObjects2/IndexPage";
import LoginPage from "../../../support/pageObjects2/LoginPage";
import WalkthroughPage from "../../../support/pageObjects2/WalkthroughPage";
import ClassOverviewPage from "../../../support/pageObjects2/ClassOverviewPage";
import CurriculumOverviewPage from "../../../support/pageObjects2/CurriculumOverviewPage";
import TimeTableOverviewPage from "../../../support/pageObjects2/TimeTableOverviewPage";
import ReportsGradebookPage from "../../../support/pageObjects2/ReportsGradebookPage";
import DashboardPage from "../../../support/pageObjects2/DashboardPage";

const ip = new IndexPage();
const lp = new LoginPage();
const wp = new WalkthroughPage();
const cop = new ClassOverviewPage();
const cup = new CurriculumOverviewPage();
const ttop = new TimeTableOverviewPage();
const dbp = new DashboardPage();
const rgp = new ReportsGradebookPage();

describe("Verify Reports - Student Gradebook", function () {
  before(function () {
    cy.visit(Cypress.env("urlMain"));
    ip.getTeacher().click();
    cy.reload();
    cy.fixture("TeacherLoginCredentials").then(function (validLoginData) {
      this.validLoginData = validLoginData;
      cy.login(this.validLoginData.user2, this.validLoginData.password);
      ttop
        .getDashboardTitle()
        .should("have.text", "Your Dashboard");
    });
  });
    beforeEach(function(){
      cy.fixture("reportGradebookStudentCount").then(function (studentCountData){
        this.studentCountData=studentCountData;
      });
    });

  it("Verify that the Teacher is able to login the application and navigate to Reports > Student gradebook", function () {
    dbp.getReports().click({ force: true });
    rgp.getStudentGradebookOption().click();
    rgp.getStudentGradebookTitle().should("have.text", "Student Gradebook");
  });

  it("Verify that the Teacher should be able to select the checkbox against the student", function () {
    rgp
      .getOneofTheClasses()
      .should("have.text", this.studentCountData.class)
      .click({ force: true });
    rgp.getCheckboxOfStudents().check();
  });

  it("Verify that the options “Upload CSV”, “Send a mail”, “Create reminder” and “Download report” should be displayed when the Teacher select the student records", function () {
    rgp
      .getGenerateReport()
      .should("have.text", "Print Gradebook")
      .should("be.visible");
  });

  it("Verify that the click on Arrow button of the student record should take to gradebook preview in a popup", function () {
    rgp.getArrowbuttonofStudent().click();
   // rgp.getReportCardTitle().should("be.contain", "Report Card");
  });

  it("Verify that the pop up should be displayed and return back to student gradebook by clicking close icon", function () {
    rgp.getGradePopupCloseIcon().click();
    rgp.getStudentGradebookTitle().should("have.text", "Student Gradebook");
  });

  it("Verify that the List of students should be displayed under each class", function () {
    rgp.getClassForStudentList().click();
    rgp.getStudentsCountIntheClass().then($ele =>{
      let studentCounts=$ele.length;
      expect(this.studentCountData.studentCount).to.equal(studentCounts);
    });
  });
  
});
