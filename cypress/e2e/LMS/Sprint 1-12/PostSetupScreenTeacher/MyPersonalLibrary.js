const indexPage = require('../../../../support/pageObjects/LMS-1/IndexPage')
const timeTableOverviewPage = require('../../../../support/pageObjects/LMS-1/TimeTableOverviewPage')
const dashboardPage = require('../../../../support/pageObjects/LMS-1/DashboardPage')
const myPersonalLibraryPage = require('../../../../support/pageObjects/LMS-1/MyPersonalLibraryPage')

describe("Verify My Personal Library Page Validation", function () {

  before(function () {
    cy.visit(Cypress.env("urlMain"));
    indexPage.getTeacher().click();
    cy.fixture("LMS/TeacherLoginCredentials").then(function (validLoginData) {
      this.validLoginData = validLoginData;
      cy.login(this.validLoginData.user2, this.validLoginData.password);
    });
  });

  it("Verify the Teacher is able to navigate content library", function () {
    timeTableOverviewPage
      .getDashboardTitle()
      .should("have.text", "Your Dashboard");
    dashboardPage.getContentLibrary().click();
  });

  it("Verify that the Teacher is able to view and click My Personal Library tab", function () {
    myPersonalLibraryPage.getMyPersonalLibraryTab().should("be.visible").click();
  });

  it("Verify that the Quick Links are displayed under search section of My Personal Library", function () {
    myPersonalLibraryPage
      .getBookmarkedQuickLink()
      .should("have.text", "Bookmarked")
      .should("be.visible");
    myPersonalLibraryPage.getVideoQuickLink().should("have.text", "Video").should("be.visible");
    myPersonalLibraryPage
      .getLessonPlansQuickLink()
      .should("have.text", "Lesson Plan")
      .should("be.visible");
    myPersonalLibraryPage
      .getAssessmentQuickLink()
      .should("have.text", "Assessments")
      .should("be.visible");
    myPersonalLibraryPage
      .getTimelinesQuickLink()
      .should("have.text", "Timelines")
      .should("be.visible");
    myPersonalLibraryPage
      .getFlashcardsQuickLink()
      .should("have.text", "Flashcards")
      .should("be.visible");
    myPersonalLibraryPage
      .getInteractiveVideoQuickLink()
      .should("have.text", "Interactive Video")
      .should("be.visible");
    myPersonalLibraryPage
      .getTextBookQuickLink()
      .should("have.text", "Textbooks")
      .should("be.visible");
  });

  it("Verify that the Create New Collection pop up is displayed by clicking Create New Collection option", function () {
    myPersonalLibraryPage.getCreateNew().click();
    myPersonalLibraryPage
      .getCreateNewCollectionPopupTitle()
      .should("have.text", "Create New Collection");
    myPersonalLibraryPage
      .getNameOfTheCollectionField()
      .should("be.visible");
    myPersonalLibraryPage.getGradeDropdownBox().should("be.visible");
    myPersonalLibraryPage.getSubjectDropdownBox().should("be.visible");
    myPersonalLibraryPage.getDescriptionBox().should("be.visible");
    myPersonalLibraryPage.getCreateCollectionButton().should("be.visible");
    myPersonalLibraryPage
      .getCloseIconInCreateNewCollectionPopup()
      .should("be.visible");
  });

  it("Verify that the Teacher is able to view Bookmarked contents by clicking the Bookmarked icon under personal library", function () {
    myPersonalLibraryPage.getBookmarkedQuickLink().click({ force: true });
    myPersonalLibraryPage.getBookmarkedPageTitle().should('have.text', ' Bookmarked ');
    myPersonalLibraryPage.getBookmarkedIcon().should('be.visible');
    myPersonalLibraryPage.getBacktoMyPersonalLibrary().click();
  });


  it('Verify that the page should be navigated to Interactive video page by choosing Interactive video from the Quick links', () => {
    myPersonalLibraryPage.getInteractiveVideoQuickLink().click();
    cy.scrollTo('top');
    myPersonalLibraryPage.getInteractiveVideoTitleOnTop().should('have.text', ' Interactive Video ');
    myPersonalLibraryPage.getBacktoMyPersonalLibrary().click();
  });

  it("Validate that teacher is able to Create New Lesson plan by Clicking on 'Create New >' Button", function () {
    myPersonalLibraryPage.getLessonPlansQuickLink().click({ force: true });
    cy.wait(1000);
    myPersonalLibraryPage.getLessonPlanCreateNewButton().click();
  });

});
