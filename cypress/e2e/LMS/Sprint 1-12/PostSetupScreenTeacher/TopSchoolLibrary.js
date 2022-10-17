const indexPage = require('../../../../support/pageObjects/LMS-1/IndexPage')
const timeTableOverviewPage = require("../../../../support/pageObjects/LMS-1/TimeTableOverviewPage")
const dashboardPage = require("../../../../support/pageObjects/LMS-1/DashboardPage")
const topSchoolLibraryPage = require('../../../../support/pageObjects/LMS-1/TopSchoolLibraryPage')

describe("Verify TopSchool Library Functionalities", function () {

  before(function () {
    cy.visit(Cypress.env("urlMain"));
    indexPage.getTeacher().click();
    cy.fixture("LMS/TeacherLoginCredentials").then(function (validLoginData) {
      this.validLoginData = validLoginData;
      cy.login(this.validLoginData.user2, this.validLoginData.password);
      timeTableOverviewPage.getDashboardTitle().should("have.text", "Your Dashboard");
    });
  });

  it("Verify the Teacher is able to navigate content library", function () {
    dashboardPage.getContentLibrary().click();
  });

  it("Verify that the TopSchool Library tab is displayed by default", function () {
    topSchoolLibraryPage
      .getTopSchoolLibraryPageConfirmTitle()
      .should("have.text", "Browse our content library");
  });

  it("Verify that the Teacher is able to click View Lesson Plan link", function () {
    cy.wait(2000)
    cy.contains('Newly Added').click({ force: true });
    topSchoolLibraryPage.getViewLessonPlan().scrollIntoView().click();
    topSchoolLibraryPage
      .getLessonPlanPageConfirmTitle()
      .should("have.text", " Lesson Plans  ");
  });

  it("Verify that by clicking back button will return to the previous page i.e. TopSchool library page", function () {
    topSchoolLibraryPage.getBackArrowIcon().click();
    topSchoolLibraryPage.getTopSchoolLibraryTab().click({ force: true });
    topSchoolLibraryPage
      .getTopSchoolLibraryPageConfirmTitle()
      .should("have.text", "Browse our content library");
  });

  it("Verify that the TopSchool Library page should be navigated to “Related videos” page by clicking “View Video” option in that video content", function () {
    topSchoolLibraryPage.getVideoTab().click();
    topSchoolLibraryPage.getViewVideo().click();
    //topSchoolLibraryPage.getRelatedVideoPageTitle().should("have.text", "Related Video");
    topSchoolLibraryPage.getBackArrowIcon().click();
  });

  it("Verify that the Teacher should be able to click the action icon on any content in the TopSchool Library", function () {
    topSchoolLibraryPage.getActionIcon().click();
  });

  it("Verify that the action icon should list “Add to my personal collection” and “Download to view offline” options", function () {
    topSchoolLibraryPage
      .getAddToMyPersonalCollection()
      .should("have.text", " Add to my personal collection")
      .should("be.visible");
  });
});
