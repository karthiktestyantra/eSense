
const loginPage = require('../../../../support/pageObjects/LMS-1/LoginPage')
const indexPage = require('../../../../support/pageObjects/LMS-1/IndexPage')
const walkthroughPage =require('../../../../support/pageObjects/LMS-1/WalkthroughPage')
const classOverviewPage =require('../../../../support/pageObjects/LMS-1/ClassOverviewPage')
const curriculumOverviewPage =require('../../../../support/pageObjects/LMS-1/CurriculumOverviewPage')
const timeTableOverviewPage =require('../../../../support/pageObjects/LMS-1/TimeTableOverviewPage')
const  myCalendarPage =require('../../../../support/pageObjects/LMS-1/MyCalendarPage')
const  lessonPlanPage =require('../../../../support/pageObjects/LMS-1/LessonPlanPage')

describe("Verify Lesson Plan Functionalities", function () {
  before(function () {
    cy.fixture("LMS/TeacherLoginCredentials").then(function (validLoginData) {
      this.validLoginData = validLoginData;
      cy.visit(Cypress.env("urlMain"));
      indexPage.getTeacher().click();
      cy.reload();
      cy.login(this.validLoginData.user2, this.validLoginData.password);
       timeTableOverviewPage
        .getDashboardTitle()
        .should("have.text", "Your Dashboard");
    });
  });

  beforeEach(function () {
    cy.fixture("LMS/calendarClasses").then(function (classesData) {
      this.classesData = classesData;
    });
    cy.fixture("LMS/addLessonPlan").as("lessonPlanData")
  });

  it("Verify that the Teacher should be able to navigate to Dashboard > My Calendar screen", function () {
    myCalendarPage.getMyCalendar().click({ force: true });
    cy.wait(2000);
  });

  it("Verify that the Teacher chosen Class pop up screen should be displayed by clicking the classes in the calendar", function () {
    cy.get('.cal-header-next > .mbsc-button-icon').click();
    cy.wait(2000);
    myCalendarPage.getSampleClass().contains(this.classesData.class).click();
    myCalendarPage.getClassPopupTitle().should("have.text", this.classesData.classTitle);

  });

  it("Verify that the Add Lesson Plan button should be present in the class pop up screen", function () {
    lessonPlanPage.getAddLessonPlan().should('be.visible');
  });

  it("Verify that the 'Create New' option should be displayed by clicking Add Lesson Plan button", function () {
    lessonPlanPage.getAddLessonPlan().click({ force: true });
    lessonPlanPage.getCreateNewOption().should('be.visible');
  });

  it("Verify that the Create Lesson Plan page should have 'Basic Details' tab and 'Resources' tab", function () {
    lessonPlanPage.getCreateNewOption().click();
    lessonPlanPage.getCreateLessonPlanTitle().should('have.text', 'Create Lesson Plan');
    lessonPlanPage.getBasicDetailsTabTitle().should('be.visible');
    lessonPlanPage.getResourcesTabTitle().should('be.visible');
  });

  it("Verify that the Basic Details tab should have Mandatory fields", function () {
    lessonPlanPage.getBasicDetailsGradeField().should('be.visible');
    lessonPlanPage.getBasicDetailsSectionField().should('be.visible');
    lessonPlanPage.getBasicDetailsSubjectField().should('be.visible');
    lessonPlanPage.getBasicDetailsThemeorUnitField().should('be.visible');
    lessonPlanPage.getBasicDetailsChapterField().should('be.visible');
    lessonPlanPage.getBasicDetailsTopicField().should('be.visible');
    lessonPlanPage.getBasicDetailsLearningObjectiveField().should('be.visible');
    lessonPlanPage.getBasicDetailsStrategiesUsedField().should('be.visible');
    lessonPlanPage.getBasicDetailsRemarksField().scrollIntoView().should('be.visible');
    lessonPlanPage.getBasicDetailsSaveButton().scrollIntoView().should('be.visible');
    lessonPlanPage.getBasicDetailsCancelButton().scrollIntoView().should('be.visible');
    lessonPlanPage.getBasicDetailsGoBackButton().scrollIntoView().should('be.visible');
    lessonPlanPage.getBasicDetailsUploadCSVButton().scrollIntoView().should('be.visible');
  });

  it("Verify that the Theme/ Unit drop down field should display the values by clicking drop down buttons", function () {
    lessonPlanPage.getBasicDetailsThemeorUnitField().click();
    lessonPlanPage.getBasicDetailsThemeorUnitDropdownValues().should('be.visible').click();
  });


  it("Verify that the Chapter drop down field should display the values by clicking drop down button", function () {
    lessonPlanPage.getBasicDetailsChapterField().click();
    lessonPlanPage.getBasicDetailsChapterDropdownValues().should('be.visible');
    lessonPlanPage.getBasicDetailsChapterDropdownValues().click();
  });

  it("Verify that the Topic drop down field should display the values by clicking drop down button", function () {
    lessonPlanPage.getBasicDetailsTopicField().click();
    lessonPlanPage.getBasicDetailsChapterDropdownValues().should('be.visible');
    lessonPlanPage.getBasicDetailsChapterDropdownValues().click();
    lessonPlanPage.getBasicDetailsTopicField().click({ force: true });
  });

  it("Verify that the all the entered details should be saved by clicking Save button", function () {
    lessonPlanPage.getBasicDetailsLearningObjectiveField().eq(7).type(this.lessonPlanData.learningObjectiveField, { force: true });
    lessonPlanPage.getBasicDetailsRemarksField().type(this.lessonPlanData.remarksField, { force: true });
    lessonPlanPage.getBasicDetailsSaveButton().scrollIntoView().click({ force: true });
    lessonPlanPage.getLessonPlanCreatedMessage().should('have.text', 'Lesson Plan Created!');
  });

  it("Verify that the the teacher is able to add Theme", function () {
    lessonPlanPage.getCloseIcon().click({ multiple: true });
    cy.wait(2000);
    myCalendarPage.getSampleClass().contains(this.classesData.class1).click();
    lessonPlanPage.getAddLessonPlan().click({ force: true });
    lessonPlanPage.getCreateNewOption().click();
    lessonPlanPage.getCreateLessonPlanTitle().should('have.text', 'Create Lesson Plan');
    lessonPlanPage.getBasicDetailsThemeorUnitField().click();
    lessonPlanPage.getBasicDetailsThemeDropdownValues().click();
    lessonPlanPage.getBasicDetailsChapterField().click();
    lessonPlanPage.getBasicDetailsChapterDropdown().click();
    lessonPlanPage.getBasicDetailsTopicField().click();
    lessonPlanPage.getBasicDetailsTopicDropdown().click();
    lessonPlanPage.getBasicDetailsLearningObjectiveField().eq(7).type(this.lessonPlanData.learningObjectiveField, { force: true });
    lessonPlanPage.getBasicDetailsRemarksField().type(this.lessonPlanData.remarksField, { force: true });
    lessonPlanPage.getBasicDetailsSaveButton().click({ force: true });
    lessonPlanPage.getLessonPlanCreatedMessage().should('have.text', 'Lesson Plan Created!');
  });

  it("Verify that the all the entered/provided details should be cleared/not saved and navigated back to previous page by clicking Cancel button", function () {
    lessonPlanPage.getAddLessonPlan().click();
    lessonPlanPage.getCreateNewOption().click();
    lessonPlanPage.getBasicDetailsThemeorUnitField().click();
    lessonPlanPage.getBasicDetailsThemeorUnitDropdownValues().should('be.visible').click();
    lessonPlanPage.getBasicDetailsChapterField().click();
    lessonPlanPage.getBasicDetailsChapterDropdownValues().click();
    lessonPlanPage.getBasicDetailsTopicField().click();
    lessonPlanPage.getBasicDetailsTopicDropdownValues().click();
    lessonPlanPage.getBasicDetailsLearningObjectiveField().eq(7).type(this.lessonPlanData.learningObjectiveField, { force: true });
    lessonPlanPage.getBasicDetailsCancelButton().click({ force: true });
  });

  it("Verify that the 'Select From Library' option should be displayed by clicking Add Lesson Plan button", function () {
    lessonPlanPage.getAddLessonPlan().click();
    lessonPlanPage.getSelectFromLibrary().should('be.visible');
  });

  it("Verify that the 'Select Lesson Plan' page should be displayed by clicking Select From Library", function () {
    lessonPlanPage.getSelectFromLibrary().click();
    lessonPlanPage.getSelectLessonPlanTitle().should('have.text', 'Select Lesson Plan');
  });

  it("Verify that the Select Lesson Plan page should have 'TopSchool Library' tab and 'Personal Library tab' ", function () {
    lessonPlanPage.getTopSchoolLibraryTabTitle().should('be.visible');
    lessonPlanPage.getPersonalLibraryTabTitle().should('be.visible');
  });


  it("Verify that click on 'Cancel' button, the page should be navigated to Class pop up screen in Calendar", function () {
    lessonPlanPage.getBasicDetailsCancelButton().click();
    cy.wait(2000);
  });

  it("Verify that the Resources tab should have 'Upload Resource' from computer and 'Add Resource from content Library' options", function () {
    lessonPlanPage.getAddLessonPlan().click();
    lessonPlanPage.getCreateNewOption().click();
    lessonPlanPage.getResourcesTabTitle().click();
    lessonPlanPage.getResourcesTabUploadResource().should('be.visible');
    lessonPlanPage.getResourcesTabAddResourceFromContentLib().should('be.visible');
  });

  it("Verify that the 'Upload Resources' pop up should be opened by clicking Upload Resource from computer option", function () {
    lessonPlanPage.getResourcesTabUploadResource().click();
    lessonPlanPage.getUploadResourcesPopupTitle().should('be.visible');
  });

  it("Verify that the 'Upload Resources' pop up should have three tabs 'Upload', 'Google Drive' and  'Dropbox'", function () {
    lessonPlanPage.getUploadTab().should('be.visible');
    lessonPlanPage.getGoogleDriveTab().should('be.visible');
    lessonPlanPage.getDropBoxTab().should('be.visible');
  });

  it("Verify that the 'Upload' tab should be opened by default and should show Drag & Drop or select option and URL field with Upload button", function () {
    lessonPlanPage.getDragAndDropOption().should('be.visible');
    lessonPlanPage.getUploadURLButton().should('be.visible');
  });

  it("Verify that the Teacher should be able enter or paste the URL, external resource video or any other resource online link", function () {
    lessonPlanPage.getURLbox().type('www.youtube.com');
    lessonPlanPage.getUploadURLButton().click();
  })

  it("Verify that the Upload Resource pop up should be closed by clicking close icon", function () {
    lessonPlanPage.getUploadResourcesPopupCloseIcon().click();
    lessonPlanPage.getCreateLessonPlanTitle().should('have.text', 'Create Lesson Plan');
  });

  it("Verify that the Teacher should be able to choose to make it private or shared resource with the available toggle button", function () {
    lessonPlanPage.getResourcesToggleButton().should('contain', 'Private');
    lessonPlanPage.getResourcesToggleButton().click();
    lessonPlanPage.getResourcesToggleButton().should('contain', 'Shared');
  });

  it("Verify that the Teacher should be able to delete the added resources from the lesson plan with a delete confirmation message and notification by clicking delete icon", function () {
    lessonPlanPage.getResourcesDeleteIcon().click();
  });

  it("Verify that by clicking Save button should save the changes or new additions to the lesson plan and should be navigated to previous page", function () {
    lessonPlanPage.getResourcesTabUploadResource().click();
    lessonPlanPage.getURLbox().type(this.lessonPlanData.getURLbox);
    lessonPlanPage.getUploadURLButton().click();
    lessonPlanPage.getUploadResourcesPopupCloseIcon().click();
    lessonPlanPage.getBasicDetailsSaveButton().click();
  });

  it("Verify that by clicking Cancel button should clear the changes made to the lesson plan and should be navigated to previous page", function () {
    lessonPlanPage.getBasicDetailsCancelButton({ force: true }).click();
    myCalendarPage.getClassPopupTitle().should("have.text", this.classesData.classTitle);
  });

  it("Verify that the 'Add Resources' pop up should be opened by clicking Add Resource from content library option", function () {
    lessonPlanPage.getAddLessonPlan().click();
    lessonPlanPage.getCreateNewOption().click();
    lessonPlanPage.getResourcesTabTitle().click();
    lessonPlanPage.getResourcesTabAddResourceFromContentLib().click();
    lessonPlanPage.getAddResourcesPopupTitle().should('have.text', 'Add Resources');
  });

  it("Verify that the Teacher should be able to choose the resource by clicking on resource thumbnails", function () {
    lessonPlanPage.getAddResourceThumbnail().scrollIntoView().click();
  });

  it("Verify that Once resources chosen, Teacher should be notified with number of resources chosen on the bottom of screen", function () {
    lessonPlanPage.getResourcesSelectedCount().should('have.text', '1 Resources Selected');
  });

  it("Verify that the Teacher should proceed to attach those resources to the lesson plan by clicking on 'Add Resources' button", function () {
    lessonPlanPage.getAddResourcesButton().click();
    lessonPlanPage.getAddedResources().should('be.visible');
    lessonPlanPage.getBasicDetailsCancelButton().click();
  });

  it("Verify that by clicking on 'Cancel' button should clear the selection and return to previous page", function () {
    lessonPlanPage.getAddLessonPlan().click();
    lessonPlanPage.getCreateNewOption().click();
    lessonPlanPage.getResourcesTabTitle().click();
    lessonPlanPage.getResourcesTabAddResourceFromContentLib().click();
    lessonPlanPage.getAddResourceThumbnail().click();
    lessonPlanPage.getBasicDetailsCancelButton().last().click();
  });

  it("Verify that the Teacher should be able to view the Added Lesson Plan from My Calendar (Class) entry pop up", function () {
    lessonPlanPage.getBasicDetailsGoBackButton().click();
    lessonPlanPage.getAddedViewLessonPlan().scrollIntoView().should('contain', 'View Lesson Plan').should('be.visible');
  });

  it("Verify that click on 'Go back' link, the page should be navigated to previous page", function () {
    lessonPlanPage.getAddLessonPlan().click();
    lessonPlanPage.getCreateNewOption().click();
    lessonPlanPage.getCreateLessonPlanTitle().should('have.text', 'Create Lesson Plan');
    lessonPlanPage.getBasicDetailsGoBackButton().click();
    myCalendarPage.getClassPopupTitle().should("have.text", this.classesData.classTitle);
  });

});