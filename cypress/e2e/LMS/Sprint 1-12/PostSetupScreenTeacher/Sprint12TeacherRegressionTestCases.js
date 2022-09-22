const indexPage = require('../../../../support/pageObjects/LMS-1/IndexPage')
const sprint12Regression = require("../../../../support/pageObjects/LMS-1/Sprint12Regression")
const myCalendarPage = require("../../../../support/pageObjects/LMS-1/MyCalendarPage")

describe("Verify Sprint 12 related functionalities", function () {

  before(function () {
    cy.visit(Cypress.env("urlMain"));
    indexPage.getTeacher().click();
    cy.reload();
    cy.fixture("LMS/TeacherLoginCredentials").then(function (validLoginData) {
      this.validLoginData = validLoginData;
      cy.login(this.validLoginData.user2, this.validLoginData.password);
    });
  });

  it("To verify that 'workload Indicator' toggle is provided in calendar page", function () {
    myCalendarPage.getMyCalendar().click({ force: true });
    sprint12Regression.getCalendarWorkloadToggle().should("be.visible");
  });

  it("To verify that when 'workload Indicator' toggle is enabled, calendar should be indicating teacher workload details in the given colours based on workload", function () {
    sprint12Regression.getCalendarWorkloadToggle().click();
  })

})
