const sprint11Pages = require("../../../../support/pageObjects/LMS-1/sprint11Pages")

describe("Verify School Teacher Basic Info Functionalities", function () {
  
  before(function () {
    cy.visit(Cypress.env("urlMain"));
    cy.wait(3000)
    sprint11Pages.getTeacher().eq(1).click();
    cy.fixture("LMS/TeacherLoginCredentials").then(function (validTeacherLoginData) {
      this.validTeacherLoginData = validTeacherLoginData;
    });
  });

  beforeEach(function () {
    cy.fixture("LMS/addHomework").as("validhomeworkdata)")
  })

  it("Verify that teacher able to login with valid credentials", function () {
    sprint11Pages.getUserName().clear().type(this.validTeacherLoginData.user2);
    sprint11Pages.getPassword().clear().type(this.validTeacherLoginData.password);
    sprint11Pages.getLogin().click();
    sprint11Pages.getdashboarddetailstext().should("be.visible");
  });

  it("To verify that when user clicks on Time Table button time table page should be displayed", function () {
    sprint11Pages.getcalendarbutton().should("be.visible").click();
    cy.wait(1000);
    sprint11Pages.getnextweekbutton().should("be.visible").click();
    cy.wait(1000);
    sp11
      .getclassincalendar()
      .contains(this.validhomeworkdata.subject)
      .should("be.visible")
      .click();
    // cy.wait(1000);
    sprint11Pages.getstartsessionbutton().click({ force: true });
    cy.wait(1000);
    sprint11Pages.gettimetablebutton().should("be.visible").click();
    sprint11Pages.gettimetablevaue().contains("Timetable 2021 - 2022");
  });

  it("To verify that when user clicks on MileStones button, MileStones page should be displayed.", function () {
    sprint11Pages.getmilestonebutton().should("be.visible").click();
    cy.wait(1000);
    sp11
      .getmilestonevalue()
      .should("be.visible")
      .contains("Milestone completed");
  });

  it("To verify that when user clicks on Content Library button, Content Library page should be displayed.", function () {
    sprint11Pages.getlibrarybutton().should("be.visible").click();
    cy.wait(1000);
    sp11
      .getlibraryvalue()
      .should("be.visible")
      .contains("Browse our content library");
  });

  it("To verify that when user clicks on White Board button, White Board tool should be displayed.", function () {
    sprint11Pages.getwhiteboardbutton().should("be.visible").click();
    cy.wait(1000);
    sp11
      .getwhiteboardvalue()
      .should("be.visible")
      .contains("Switch to Dark Theme");
  });

  it("To verify that drawing tools are provided in White Board tool", function () {
    sprint11Pages.getwhiteboardsquare().should("be.visible");
    sprint11Pages.getwhiteboardiamond().should("be.visible");
    sprint11Pages.getwhiteboardround().should("be.visible");
  });

  it("To verify that the work load toggle will be disabled defaultly or not", function () {
    sprint11Pages.getcalendarbutton().should("be.visible").click();
    cy.wait(1000);
    sprint11Pages.gettogglebutton().should("exist").should("not.be.selected");
  });

  it("To verify that the work load toggle able to select or not", function () {
    sprint11Pages.gettogglebutton().check().should("be.checked");
  });
});
