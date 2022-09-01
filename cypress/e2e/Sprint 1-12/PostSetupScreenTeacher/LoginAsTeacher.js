/// <reference types="Cypress"/>

import LoginPage from "../../../support/pageObjects2/LoginPage";
import WalkthroughPage from "../../../support/pageObjects2/WalkthroughPage";
import IndexPage from "../../../support/pageObjects2/IndexPage";
import ClassOverviewPage from "../../../support/pageObjects2/ClassOverviewPage";
import CurriculumOverviewPage from "../../../support/pageObjects2/CurriculumOverviewPage";
import TimeTableOverviewPage from "../../../support/pageObjects2/TimeTableOverviewPage";
import DashboardPage from "../../../support/pageObjects2/DashboardPage";

const lp = new LoginPage();
const wp = new WalkthroughPage();
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
    cy.fixture("invalidLoginCredentials").then(function (invalidLoginData) {
      this.invalidLoginData = invalidLoginData;
      cy.fixture("TeacherLoginCredentials").then(function (validLoginData) {
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
    dbp.getMyProfile().click({force: true});
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
