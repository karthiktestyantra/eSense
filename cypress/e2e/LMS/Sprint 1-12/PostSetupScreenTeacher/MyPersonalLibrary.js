import LoginPage from "../../../../support/pageObjects/LMS-1/LoginPage";
import WalkthroughPage from "../../../../support/pageObjects/LMS-1/WalkthroughPage";
import IndexPage from "../../../../support/pageObjects/LMS-1/IndexPage";
import ClassOverviewPage from "../../../../support/pageObjects/LMS-1/ClassOverviewPage";
import CurriculumOverviewPage from "../../../../support/pageObjects/LMS-1/CurriculumOverviewPage";
import TimeTableOverviewPage from "../../../../support/pageObjects/LMS-1/TimeTableOverviewPage";
import DashboardPage from "../../../../support/pageObjects/LMS-1/DashboardPage";
import MyPersonalLibraryPage from "../../../../support/pageObjects/LMS-1/MyPersonalLibraryPage";

const lp = new LoginPage();
const wp = new WalkthroughPage();
const ip = new IndexPage();
const cop = new ClassOverviewPage();
const cup = new CurriculumOverviewPage();
const ttop = new TimeTableOverviewPage();
const dbp = new DashboardPage();
const mpl = new MyPersonalLibraryPage();

describe("Verify My Personal Library Page Validation", function () {
  before(function () {
    cy.visit(Cypress.env("urlMain"));
    ip.getTeacher().click();
    cy.fixture("LMS/TeacherLoginCredentials").then(function (validLoginData) {
      this.validLoginData = validLoginData;
      cy.login(this.validLoginData.user2, this.validLoginData.password);
    });
  });

  it("Verify the Teacher is able to navigate content library", function () {
    ttop
      .getDashboardTitle()
      .should("have.text", "Your Dashboard");
    dbp.getContentLibrary().click();
  });

  it("Verify that the Teacher is able to view and click My Personal Library tab", function () {
    mpl.getMyPersonalLibraryTab().should("be.visible").click();
  });

  it("Verify that the Quick Links are displayed under search section of My Personal Library", function () {
    mpl
      .getBookmarkedQuickLink()
      .should("have.text", "Bookmarked")
      .should("be.visible");
    mpl.getVideoQuickLink().should("have.text", "Video").should("be.visible");
    mpl
      .getLessonPlansQuickLink()
      .should("have.text", "Lesson Plan")
      .should("be.visible");
    mpl
      .getAssessmentQuickLink()
      .should("have.text", "Assessments")
      .should("be.visible");
    mpl
      .getTimelinesQuickLink()
      .should("have.text", "Timelines")
      .should("be.visible");
    mpl
      .getFlashcardsQuickLink()
      .should("have.text", "Flashcards")
      .should("be.visible");
    mpl
      .getInteractiveVideoQuickLink()
      .should("have.text", "Interactive Video")
      .should("be.visible");
    mpl
      .getTextBookQuickLink()
      .should("have.text", "Textbooks")
      .should("be.visible");
  });

  it("Verify that the Create New Collection pop up is displayed by clicking Create New Collection option", function () {
    mpl.getCreateNew().click();
    mpl
      .getCreateNewCollectionPopupTitle()
      .should("have.text", "Create New Collection");
    mpl
      .getNameOfTheCollectionField()
      .should("be.visible");
    mpl.getGradeDropdownBox().should("be.visible");
    mpl.getSubjectDropdownBox().should("be.visible");
    mpl.getDescriptionBox().should("be.visible");
    mpl.getCreateCollectionButton().should("be.visible");
    mpl
      .getCloseIconInCreateNewCollectionPopup()
      .should("be.visible");
  });

  it("Verify that the Teacher is able to view Bookmarked contents by clicking the Bookmarked icon under personal library", function () {
    mpl.getBookmarkedQuickLink().click({ force: true });
    mpl.getBookmarkedPageTitle().should('have.text', ' Bookmarked ');
    mpl.getBookmarkedIcon().should('be.visible');
    mpl.getBacktoMyPersonalLibrary().click();
  });


  it('Verify that the page should be navigated to Interactive video page by choosing Interactive video from the Quick links', () => {
    mpl.getInteractiveVideoQuickLink().click();
    cy.scrollTo('top');
    mpl.getInteractiveVideoTitleOnTop().should('have.text', ' Interactive Video ');
    mpl.getBacktoMyPersonalLibrary().click();
  });

  it("Validate that teacher is able to Create New Lesson plan by Clicking on 'Create New >' Button", function () {
    mpl.getLessonPlansQuickLink().click({ force: true });
    cy.wait(1000);
    mpl.getLessonPlanCreateNewButton().click();
  });

});
