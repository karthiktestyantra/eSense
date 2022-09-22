const timeTableOverviewPage = require('../../../../support/pageObjects/LMS-1/TimeTableOverviewPage')
const indexPage = require('../../../../support/pageObjects/LMS-1/IndexPage')
const loginPage = require('../../../../support/pageObjects/LMS-1/LoginPage')
const dashboardPage = require('../../../../support/pageObjects/LMS-1/DashboardPage')


describe("Verify Login Page Functionalities", function () {

  beforeEach(function () {
    cy.exec('npm cache clear --force');
    cy.visit(Cypress.env("urlMain"));
    indexPage.getTeacher().click();
    cy.fixture("LMS/invalidLoginCredentials").then(function (invalidLoginData) {
      this.invalidLoginData = invalidLoginData;
      cy.fixture("LMS/TeacherLoginCredentials").then(function (validLoginData) {
        this.validLoginData = validLoginData;
        cy.fixture("LMS/invalidLoginCredentials").as("invalidLoginData")
        cy.fixture("LMS/TeacherLoginCredentials").as("validLoginData")
      });
    });
  });

  it("Verify the fields available in login page are enabled", function () {
    cy.reload();
    loginPage.getUserName().should("be.enabled");
    loginPage.getPassword().should("be.enabled");
    loginPage.getForgotPassword().should("be.visible");
    loginPage.getLogin().should("be.enabled");
    loginPage.getLoginWithPhoneNumber().should("be.enabled");
  });

  it("Login with Invalid Credentials", function () {
    this.invalidLoginData.invalidLogin.forEach(function (loginData) {
      loginPage.getUserName().type(loginData.username);
      loginPage.getPassword().type(loginData.password);
      loginPage.getLogin().click();
      loginPage.getLoginErrorMessage().should(
        "have.text",
        "Uh oh! Invalid username or password"
      );
      cy.reload();
    });
  });

  it("Login with Valid Credentials", function () {
    cy.reload();
    loginPage.getLoginTitle().should("have.text", "Hello Teacher");
    cy.title().should("contain", "Top School");
    cy.login(this.validLoginData.user2, this.validLoginData.password);
    timeTableOverviewPage
      .getDashboardTitle()
      .should("have.text", "Your Dashboard");
    dashboardPage.getMyProfile().click({ force: true });
    dashboardPage.getLogout().click();
  });

  it("Login with Username empty", function () {
    cy.title().should("contain", "Top School");
    loginPage.getUserName().clear()
    loginPage.getPassword().type(this.validLoginData.password);
    loginPage.getLogin().click();
    loginPage.getLoginErrorMessage().should("have.text", "Enter username to log in");
  });

  it("Login with Password empty", function () {
    cy.title().should("contain", "Top School");
    loginPage.getUserName().type(this.validLoginData.user2);
    loginPage.getLogin().click();
    loginPage.getLoginErrorMessage().should("have.text", "Enter password to log in");
  });
});
