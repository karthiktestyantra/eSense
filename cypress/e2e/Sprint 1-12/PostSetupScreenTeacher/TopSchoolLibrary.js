/// <reference types="Cypress"/>

import LoginPage from "../../../support/pageObjects2/LoginPage";
import WalkthroughPage from "../../../support/pageObjects2/WalkthroughPage";
import IndexPage from "../../../support/pageObjects2/IndexPage";
import ClassOverviewPage from "../../../support/pageObjects2/ClassOverviewPage";
import CurriculumOverviewPage from "../../../support/pageObjects2/CurriculumOverviewPage";
import TimeTableOverviewPage from "../../../support/pageObjects2/TimeTableOverviewPage";
import DashboardPage from "../../../support/pageObjects2/DashboardPage";
import TopSchoolLibraryPage from "../../../support/pageObjects2/TopSchoolLibraryPage";

const lp = new LoginPage();
const wp = new WalkthroughPage();
const ip = new IndexPage();
const cop = new ClassOverviewPage();
const cup = new CurriculumOverviewPage();
const ttop = new TimeTableOverviewPage();
const dbp = new DashboardPage();
const tslp = new TopSchoolLibraryPage();

describe("Verify TopSchool Library Functionalities", function () {
  before(function () {
    cy.visit('https://gv.topschool.co.in/');
    ip.getTeacher().click();
    cy.reload();
    cy.fixture("validLoginCredentials").then(function (validLoginData) {
      this.validLoginData = validLoginData;
      cy.login(this.validLoginData.username, this.validLoginData.password);
      ttop
        .getDashboardTitle()
        .should("have.text", "Your Dashboard");
    });
  });

  it("Verify the Teacher is able to navigate content library", function () {
    dbp.getContentLibrary().click();
  });

  it("Verify that the TopSchool Library tab is displayed by default", function () {
    tslp
      .getTopSchoolLibraryPageConfirmTitle()
      .should("have.text", "Browse our content library");
  });

  it("Verify that the Teacher is able to click View Lesson Plan link", function () {
    cy.contains('Newly Added').click({force:true});
    tslp.getViewLessonPlan().click();
    tslp
      .getLessonPlanPageConfirmTitle()
      .should("have.text", " Lesson Plan  ");
  });

  it("Verify that by clicking back button will return to the previous page i.e. TopSchool library page", function () {
    tslp.getBackArrowIcon().click();
    tslp.getTopSchoolLibraryTab().click({force:true});
    tslp
      .getTopSchoolLibraryPageConfirmTitle()
      .should("have.text", "Browse our content library");
  });

  it("Verify that the TopSchool Library page should be navigated to “Related videos” page by clicking “View Video” option in that video content", function () {
    tslp.getVideoTab().click();
    tslp.getViewVideo().click();
    tslp.getRelatedVideoPageTitle().should("have.text", "Related Video");
    tslp.getBackArrowIcon().click();
  });

  it("Verify that the Teacher should be able to click the action icon on any content in the TopSchool Library", function () {
    tslp.getActionIcon().click();
  });

  it("Verify that the action icon should list “Add to my personal collection” and “Download to view offline” options", function () {
    tslp
      .getAddToMyPersonalCollection()
      .should("have.text", "Add to my personal collection")
      .should("be.visible");
  });
});
