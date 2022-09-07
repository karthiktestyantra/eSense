import IndexPage from "../../../../support/pageObjects/LMS-1/IndexPage";
import LoginPage from "../../../../support/pageObjects/LMS-1/LoginPage";
import WalkthroughPage from "../../../../support/pageObjects/LMS-1/WalkthroughPage";
import ClassOverviewPage from "../../../../support/pageObjects/LMS-1/ClassOverviewPage";
import CurriculumOverviewPage from "../../../../support/pageObjects/LMS-1/CurriculumOverviewPage";
import TimeTableOverviewPage from "../../../../support/pageObjects/LMS-1/TimeTableOverviewPage";
import MyClassesPage from "../../../../support/pageObjects/LMS-1/MyClassesPage";
import Sprint12Regression from "../../../../support/pageObjects/LMS-1/Sprint12Regression";
import MyCalendarPage from "../../../../support/pageObjects/LMS-1/MyCalendarPage";

const ip = new IndexPage();
const lp = new LoginPage();
const wp = new WalkthroughPage();
const cop = new ClassOverviewPage();
const cup = new CurriculumOverviewPage();
const ttop = new TimeTableOverviewPage();
const mcp = new MyClassesPage();
const sr12 = new Sprint12Regression();
const cp = new MyCalendarPage();

describe("Verify Sprint 12 related functionalities", function () {
  before(function () {
    cy.visit(Cypress.env("urlMain"));
    ip.getTeacher().click();
    cy.reload();
    cy.fixture("LMS/TeacherLoginCredentials").then(function (validLoginData) {
      this.validLoginData = validLoginData;
      cy.login(this.validLoginData.user2, this.validLoginData.password);
    });
  });

  it("To verify that 'workload Indicator' toggle is provided in calendar page", function () {
    cp.getMyCalendar().click({ force: true });
    sr12.getCalendarWorkloadToggle().should("be.visible");
  });

  it("To verify that when 'workload Indicator' toggle is enabled, calendar should be indicating teacher workload details in the given colours based on workload", function () {
    sr12.getCalendarWorkloadToggle().click();
  });
});
