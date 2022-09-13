/// <reference types="Cypress"/>

import sprint11Pages from "../../../support/pageObjects2/sprint11Pages";

const sp11 = new sprint11Pages();

describe("Verify School Teacher Basic Info Functionalities", function () {
  before(function () {
    cy.visit(Cypress.env("urlMain"));
    cy.wait(3000)
    sp11.getTeacher().eq(1).click();
    cy.fixture("TeacherLoginCredentials").then(function (validTeacherLoginData) {
      this.validTeacherLoginData = validTeacherLoginData;
      
    });
  });

  beforeEach(function () {
    cy.fixture("Addhomework").then(function (validhomeworkdata) {
      this.validhomeworkdata = validhomeworkdata;
    });
  });

  it("Verify that teacher able to login with valid credentials", function () {
    sp11.getUserName().clear().type(this.validTeacherLoginData.user2);
    sp11.getPassword().clear().type(this.validTeacherLoginData.password);
    sp11.getLogin().click();
    sp11.getdashboarddetailstext().should("be.visible");
  });

  it("To verify that when user clicks on Time Table button time table page should be displayed", function () {
    sp11.getcalendarbutton().should("be.visible").click();
    cy.wait(1000);
    sp11.getnextweekbutton().should("be.visible").click();
    cy.wait(1000);
    sp11
      .getclassincalendar()
      .contains(this.validhomeworkdata.subject)
      .should("be.visible")
      .click();
   // cy.wait(1000);
    sp11.getstartsessionbutton().click({force:true});
    cy.wait(1000);
    sp11.gettimetablebutton().should("be.visible").click();
    sp11.gettimetablevaue().contains("Timetable 2021 - 2022");
  });

  it("To verify that when user clicks on MileStones button, MileStones page should be displayed.", function () {
    sp11.getmilestonebutton().should("be.visible").click();
    cy.wait(1000);
    sp11
      .getmilestonevalue()
      .should("be.visible")
      .contains("Milestone completed");
  });

  it("To verify that when user clicks on Content Library button, Content Library page should be displayed.", function () {
    sp11.getlibrarybutton().should("be.visible").click();
    cy.wait(1000);
    sp11
      .getlibraryvalue()
      .should("be.visible")
      .contains("Browse our content library");
  });

  it("To verify that when user clicks on White Board button, White Board tool should be displayed.", function () {
    sp11.getwhiteboardbutton().should("be.visible").click();
    cy.wait(1000);
    sp11
      .getwhiteboardvalue()
      .should("be.visible")
      .contains("Switch to Dark Theme");
  });

  it("To verify that drawing tools are provided in White Board tool", function () {
    sp11.getwhiteboardsquare().should("be.visible");
    sp11.getwhiteboardiamond().should("be.visible");
    sp11.getwhiteboardround().should("be.visible");
  });

  it("To verify that the work load toggle will be disabled defaultly or not", function () {
    sp11.getcalendarbutton().should("be.visible").click();
    cy.wait(1000);
    sp11.gettogglebutton().should("exist").should("not.be.selected");
  });

  it("To verify that the work load toggle able to select or not", function () {
    sp11.gettogglebutton().check().should("be.checked");
  });
});
