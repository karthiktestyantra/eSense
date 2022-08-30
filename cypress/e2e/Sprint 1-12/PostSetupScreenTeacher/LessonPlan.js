/// <reference types="Cypress"/>

import IndexPage from "../../../support/pageObjects2/IndexPage";
import LoginPage from "../../../support/pageObjects2/LoginPage";
import WalkthroughPage from "../../../support/pageObjects2/WalkthroughPage";
import ClassOverviewPage from "../../../support/pageObjects2/ClassOverviewPage";
import CurriculumOverviewPage from "../../../support/pageObjects2/CurriculumOverviewPage";
import TimeTableOverviewPage from "../../../support/pageObjects2/TimeTableOverviewPage";
import MyCalendarPage from "../../../support/pageObjects2/MyCalendarPage";
import LessonPlanPage from "../../../support/pageObjects2/LessonPlanPage";

const ip = new IndexPage();
const lp = new LoginPage();
const wp = new WalkthroughPage();
const cop = new ClassOverviewPage();
const cup = new CurriculumOverviewPage();
const ttop = new TimeTableOverviewPage();
const cp = new MyCalendarPage();
const lpp = new LessonPlanPage();

describe("Verify Lesson Plan Functionalities", function () {
  before(function () {
    cy.fixture("TeacherLoginCredentials").then(function (validLoginData) {
      this.validLoginData = validLoginData;
      cy.visit(Cypress.env("urlMain"));
      ip.getTeacher().click();
      cy.reload();
      cy.login(this.validLoginData.user2, this.validLoginData.password);
      ttop
        .getDashboardTitle()
        .should("have.text", "Your Dashboard");
        
    });
  });

  beforeEach(function () {
    cy.fixture("calendarClasses").then(function (classesData) {
      this.classesData = classesData;
    });
    cy.fixture("addLessonPlan").then(function (lessonPlanData) {
      this.lessonPlanData = lessonPlanData;
    });
  });

  it("Verify that the Teacher should be able to navigate to Dashboard > My Calendar screen", function () {
    cp.getMyCalendar().click({ force: true });
    cy.wait(2000);
  });

  it("Verify that the Teacher chosen Class pop up screen should be displayed by clicking the classes in the calendar", function () {
    cy.get('.cal-header-next > .mbsc-button-icon').click();
        cy.wait(2000);
        cp.getSampleClass().contains(this.classesData.class).click();
        cp.getClassPopupTitle().should("have.text",this.classesData.classTitle);

  });

  it("Verify that the Add Lesson Plan button should be present in the class pop up screen", function () {
    lpp.getAddLessonPlan().should('be.visible');
  });

  it("Verify that the 'Create New' option should be displayed by clicking Add Lesson Plan button", function () {
    lpp.getAddLessonPlan().click({force:true});
    lpp.getCreateNewOption().should('be.visible');
  });

  it("Verify that the Create Lesson Plan page should have 'Basic Details' tab and 'Resources' tab", function () {
    lpp.getCreateNewOption().click();
    lpp.getCreateLessonPlanTitle().should('have.text', 'Create Lesson Plan');
    lpp.getBasicDetailsTabTitle().should('be.visible');
    lpp.getResourcesTabTitle().should('be.visible');
  });

  it("Verify that the Basic Details tab should have Mandatory fields", function () {
    lpp.getBasicDetailsGradeField().should('be.visible');
    lpp.getBasicDetailsSectionField().should('be.visible');
    lpp.getBasicDetailsSubjectField().should('be.visible');
    lpp.getBasicDetailsThemeorUnitField().should('be.visible');
    lpp.getBasicDetailsChapterField().should('be.visible');
    lpp.getBasicDetailsTopicField().should('be.visible');
    lpp.getBasicDetailsLearningObjectiveField().should('be.visible');
    lpp.getBasicDetailsStrategiesUsedField().should('be.visible');
    lpp.getBasicDetailsRemarksField().scrollIntoView().should('be.visible');
    lpp.getBasicDetailsSaveButton().scrollIntoView().should('be.visible');
    lpp.getBasicDetailsCancelButton().scrollIntoView().should('be.visible');
    lpp.getBasicDetailsGoBackButton().scrollIntoView().should('be.visible');
    lpp.getBasicDetailsUploadCSVButton().scrollIntoView().should('be.visible');
  });

  it("Verify that the Theme/ Unit drop down field should display the values by clicking drop down buttons", function () {
    lpp.getBasicDetailsThemeorUnitField().click();
    lpp.getBasicDetailsThemeorUnitDropdownValues().should('be.visible').click();
  });


  it("Verify that the Chapter drop down field should display the values by clicking drop down button", function () {
    lpp.getBasicDetailsChapterField().click();
    lpp.getBasicDetailsChapterDropdownValues().should('be.visible');
    lpp.getBasicDetailsChapterDropdownValues().click();
  });

  it("Verify that the Topic drop down field should display the values by clicking drop down button", function () {
    lpp.getBasicDetailsTopicField().click();
    lpp.getBasicDetailsChapterDropdownValues().should('be.visible');
    lpp.getBasicDetailsChapterDropdownValues().click();
    lpp.getBasicDetailsTopicField().click({force:true});
  });

  it("Verify that the all the entered details should be saved by clicking Save button", function () {
    lpp.getBasicDetailsLearningObjectiveField().type(this.lessonPlanData.learningObjectiveField,{force:true});
    lpp.getBasicDetailsRemarksField().type(this.lessonPlanData.remarksField,{force:true});
    lpp.getBasicDetailsSaveButton().scrollIntoView().click({force:true});
    lpp.getLessonPlanCreatedMessage().should('have.text', 'Lesson Plan Created!');
  });

  it("Verify that the the teacher is able to add Theme", function(){
    lpp.getCloseIcon().click({multiple:true});
    cy.wait(2000);
    cp.getSampleClass().contains(this.classesData.class1).click();
    lpp.getAddLessonPlan().click({force:true});
    lpp.getCreateNewOption().click();
    lpp.getCreateLessonPlanTitle().should('have.text', 'Create Lesson Plan');
    lpp.getBasicDetailsThemeorUnitField().click();
    lpp.getBasicDetailsThemeDropdownValues().click();
    lpp.getBasicDetailsChapterField().click();
    lpp.getBasicDetailsChapterDropdown().click();
    lpp.getBasicDetailsTopicField().click();
    lpp.getBasicDetailsTopicDropdown().click();
    lpp.getBasicDetailsLearningObjectiveField().type(this.lessonPlanData.learningObjectiveField,{force:true});
    lpp.getBasicDetailsRemarksField().type(this.lessonPlanData.remarksField,{force:true});
    lpp.getBasicDetailsSaveButton().click();
    lpp.getLessonPlanCreatedMessage().should('have.text', 'Lesson Plan Created!');
  });

  it("Verify that the all the entered/provided details should be cleared/not saved and navigated back to previous page by clicking Cancel button", function(){
    lpp.getAddLessonPlan().click();
    lpp.getCreateNewOption().click();
    lpp.getBasicDetailsChapterField().click();
    lpp.getBasicDetailsChapterDropdownValues().click();
    lpp.getBasicDetailsTopicField().click();
    lpp.getBasicDetailsTopicDropdownValues().click();
    lpp.getBasicDetailsLearningObjectiveField().type(this.lessonPlanData.learningObjectiveField);
    lpp.getBasicDetailsCancelButton().click();
  });

  it("Verify that the 'Select From Library' option should be displayed by clicking Add Lesson Plan button", function(){
    lpp.getAddLessonPlan().click();
    lpp.getSelectFromLibrary().should('be.visible');
  });

  it("Verify that the 'Select Lesson Plan' page should be displayed by clicking Select From Library", function(){
    lpp.getSelectFromLibrary().click();
    lpp.getSelectLessonPlanTitle().should('have.text', 'Select Lesson Plan');
  });

  it("Verify that the Select Lesson Plan page should have 'TopSchool Library' tab and 'Personal Library tab' ", function(){
    lpp.getTopSchoolLibraryTabTitle().should('be.visible');
    lpp.getPersonalLibraryTabTitle().should('be.visible');
  });

  
  it("Verify that click on 'Cancel' button, the page should be navigated to Class pop up screen in Calendar", function(){
    lpp.getBasicDetailsCancelButton().click();
    cy.wait(2000);
  });

  it("Verify that the Resources tab should have 'Upload Resource' from computer and 'Add Resource from content Library' options", function(){
    lpp.getAddLessonPlan().click();
    lpp.getCreateNewOption().click();
    lpp.getResourcesTabTitle().click();
    lpp.getResourcesTabUploadResource().should('be.visible');
    lpp.getResourcesTabAddResourceFromContentLib().should('be.visible');
  });

  it("Verify that the 'Upload Resources' pop up should be opened by clicking Upload Resource from computer option", function(){
    lpp.getResourcesTabUploadResource().click();
    lpp.getUploadResourcesPopupTitle().should('be.visible');
  });

  it("Verify that the 'Upload Resources' pop up should have three tabs 'Upload', 'Google Drive' and  'Dropbox'", function(){
    lpp.getUploadTab().should('be.visible');
    lpp.getGoogleDriveTab().should('be.visible');
    lpp.getDropBoxTab().should('be.visible');
  });

  it("Verify that the 'Upload' tab should be opened by default and should show Drag & Drop or select option and URL field with Upload button", function(){
    lpp.getDragAndDropOption().should('be.visible');
    lpp.getUploadURLButton().should('be.visible');
  });

  it("Verify that the Teacher should be able enter or paste the URL, external resource video or any other resource online link", function(){
    lpp.getURLbox().type('www.youtube.com');
    lpp.getUploadURLButton().click();
  })

  it("Verify that the Upload Resource pop up should be closed by clicking close icon", function(){
    lpp.getUploadResourcesPopupCloseIcon().click();
    lpp.getCreateLessonPlanTitle().should('have.text','Create Lesson Plan');
  });

  it("Verify that the Teacher should be able to choose to make it private or shared resource with the available toggle button", function(){
    lpp.getResourcesToggleButton().should('contain','Private');
    lpp.getResourcesToggleButton().click();
    lpp.getResourcesToggleButton().should('contain','Shared');
  });

  it("Verify that the Teacher should be able to delete the added resources from the lesson plan with a delete confirmation message and notification by clicking delete icon", function(){
    lpp.getResourcesDeleteIcon().click();
  });

  it("Verify that by clicking Save button should save the changes or new additions to the lesson plan and should be navigated to previous page", function(){
    lpp.getResourcesTabUploadResource().click();
    lpp.getURLbox().type(this.lessonPlanData.getURLbox);
    lpp.getUploadURLButton().click();
    lpp.getUploadResourcesPopupCloseIcon().click();
    lpp.getBasicDetailsSaveButton().click();
  });

  it("Verify that by clicking Cancel button should clear the changes made to the lesson plan and should be navigated to previous page", function(){
    lpp.getBasicDetailsCancelButton({force:true}).click();
    cp.getClassPopupTitle().should("have.text", this.classesData.classTitle);
  });

  it("Verify that the 'Add Resources' pop up should be opened by clicking Add Resource from content library option", function(){
    lpp.getAddLessonPlan().click();
    lpp.getCreateNewOption().click();
    lpp.getResourcesTabTitle().click();
    lpp.getResourcesTabAddResourceFromContentLib().click();
    lpp.getAddResourcesPopupTitle().should('have.text', 'Add Resources');
    });

  it("Verify that the Teacher should be able to choose the resource by clicking on resource thumbnails", function(){
    lpp.getAddResourceThumbnail().scrollIntoView().click();
  });
  
  it("Verify that Once resources chosen, Teacher should be notified with number of resources chosen on the bottom of screen", function(){
    lpp.getResourcesSelectedCount().should('have.text', '1 Resources Selected');
  });

  it("Verify that the Teacher should proceed to attach those resources to the lesson plan by clicking on 'Add Resources' button", function(){
    lpp.getAddResourcesButton().click();
    lpp.getAddedResources().should('be.visible');
    lpp.getBasicDetailsCancelButton().click();
  });

  it("Verify that by clicking on 'Cancel' button should clear the selection and return to previous page", function(){
    lpp.getAddLessonPlan().click();
    lpp.getCreateNewOption().click();
    lpp.getResourcesTabTitle().click();
    lpp.getResourcesTabAddResourceFromContentLib().click();
    lpp.getAddResourceThumbnail().click();
    lpp.getBasicDetailsCancelButton().last().click();
  });

  it("Verify that the Teacher should be able to view the Added Lesson Plan from My Calendar (Class) entry pop up", function(){
    lpp.getBasicDetailsGoBackButton().click();
    lpp.getAddedViewLessonPlan().scrollIntoView().should('contain', 'View Lesson Plan').should('be.visible');
  });

  it("Verify that click on 'Go back' link, the page should be navigated to previous page", function(){
    lpp.getAddLessonPlan().click();
    lpp.getCreateNewOption().click();
    lpp.getCreateLessonPlanTitle().should('have.text','Create Lesson Plan');
    lpp.getBasicDetailsGoBackButton().click();
    cp.getClassPopupTitle().should("have.text", this.classesData.classTitle);
  });

});