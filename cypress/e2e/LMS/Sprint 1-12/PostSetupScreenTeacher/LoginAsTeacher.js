import LoginPage from "../../../../support/pageObjects/LMS-1/LoginPage";
import WalkthroughPage from "../../../../support/pageObjects/LMS-1/WalkthroughPage";
import IndexPage from "../../../../support/pageObjects/LMS-1/IndexPage";
import ClassOverviewPage from "../../../../support/pageObjects/LMS-1/ClassOverviewPage";
import CurriculumOverviewPage from "../../../../support/pageObjects/LMS-1/CurriculumOverviewPage";
import TimeTableOverviewPage from "../../../../support/pageObjects/LMS-1/TimeTableOverviewPage";
import DashboardPage from "../../../../support/pageObjects/LMS-1/DashboardPage";

const lp = require('../../../../support/pageObjects/LMS-1/LoginPage')
const wp = require('../../../../support/pageObjects/LMS-1/WalkthroughPage')
const ip = new IndexPage();
const cop = new ClassOverviewPage();
const cup = new CurriculumOverviewPage();
const ttop = new TimeTableOverviewPage();
const dbp = new DashboardPage();

describe("Verify Login Page Functionalities", function () {

  beforeEach(function () {
    cy.exec('npm cache clear --force');
    cy.visit(Cypress.env("urlMain"));
    ip.getTeacher().click();
    cy.fixture("LMS/invalidLoginCredentials").then(function (invalidLoginData) {
      this.invalidLoginData = invalidLoginData;
      cy.fixture("LMS/TeacherLoginCredentials").then(function (validLoginData) {
        this.validLoginData = validLoginData;
      });
    });
  });

  it("Verify the fields available in login page are enabled", function () {
    cy.reload();
    lp.getUserName().should("be.enabled");
    lp.getPassword().should("be.enabled");
    lp.getForgotPassword().should("be.visible");
    lp.getLogin().should("be.enabled");
    lp.getLoginWithPhoneNumber().should("be.enabled");
  });

  it("Login with Invalid Credentials", function () {
    this.invalidLoginData.invalidLogin.forEach(function (loginData) {
      lp.getUserName().type(loginData.username);
      lp.getPassword().type(loginData.password);
      lp.getLogin().click();
      lp.getLoginErrorMessage().should(
        "have.text",
        "Uh oh! Invalid username or password"
      );
      cy.reload();
    });
  });

  it("Login with Valid Credentials", function () {
    cy.reload();
    lp.getLoginTitle().should("have.text", "Hello Teacher");
    cy.title().should("contain", "Top School");
    cy.login(this.validLoginData.user2, this.validLoginData.password);
    ttop
      .getDashboardTitle()
      .should("have.text", "Your Dashboard");
    dbp.getMyProfile().click({ force: true });
    dbp.getLogout().click();
  });

  it("Login with Username empty", function () {
    cy.title().should("contain", "Top School");
    lp.getPassword().type(this.validLoginData.password);
    lp.getLogin().click();
    lp.getLoginErrorMessage().should("have.text", "Enter username to log in");
  });

  it("Login with Password empty", function () {
    cy.title().should("contain", "Top School");
    lp.getUserName().type(this.validLoginData.user2);
    lp.getLogin().click();
    lp.getLoginErrorMessage().should("have.text", "Enter password to log in");
  });
});
