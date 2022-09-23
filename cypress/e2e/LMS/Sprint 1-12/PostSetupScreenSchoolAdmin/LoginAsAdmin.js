const indexPage = require('../../../../support/pageObjects/LMS-1/IndexPage')
const loginPageAdmin = require('../../../../support/pageObjects/LMS-1/LoginPageAdmin')
const adminBasicInfoPage = require('../../../../support/pageObjects/LMS-1/AdminBasicInfoPage')

describe("Verify Login Page Functionalities", function () {

  beforeEach(function () {
    cy.visit(Cypress.env('urlQAPreSetup'))
    indexPage.getAdmin().click();
    cy.fixture("LMS/invalidAdminLoginCredentials").as("invalidAdminLoginData")
    cy.fixture("LMS/validAdminLoginCredentials").as("validAdminLoginData")
  })

  //admin login 
  it("Verify that the Admin login page should be by clicking Admin login in Index Page", function () {
    loginPageAdmin.getLoginTitle().should("have.text", "Hello Admin");
    cy.title().should("contain", "Top School");
  })

  it("Verify that the fields available in login page are enabled", function () {
    loginPageAdmin.getUserName().should("be.enabled");
    loginPageAdmin.getPassword().should("be.enabled");
    loginPageAdmin.getForgotPassword().should("be.visible");
    loginPageAdmin.getLogin().should("be.enabled");
    loginPageAdmin.getLoginWithPhoneNumber().should("be.enabled");
  });

  it("Verify that the error message Uh oh! Invalid username or password should be displayed for invalid login credentials", function () {
    this.invalidAdminLoginData.invalidAdminLogin.forEach(function (loginData) {
      loginPageAdmin.getUserName().type(loginData.username);
      loginPageAdmin.getPassword().type(loginData.password);
      loginPageAdmin.getLogin().click();
      loginPageAdmin.getLoginErrorMessage().should(
        "have.text",
        "Uh oh! Invalid username or password"
      );
      cy.reload();
    });
  });

  it("Login with Username empty", function () {
    cy.title().should("contain", "Top School");
    loginPageAdmin.getPassword().type(this.validAdminLoginData.password);
    loginPageAdmin.getLogin().click();
    loginPageAdmin.getLoginErrorMessage().should("have.text", "Enter username to log in");
  });

  it("Login with Password empty", function () {
    cy.title().should("contain", "Top School");
    loginPageAdmin.getUserName().type(this.validAdminLoginData.username);
    loginPageAdmin.getLogin().click();
    loginPageAdmin.getLoginErrorMessage().should("have.text", "Enter password to log in");
  });

  it("Verify that the registered user should be able to successfully login by entering valid credentials and clicking on the Login button", function () {
    loginPageAdmin.getLoginTitle().should("have.text", "Hello Admin");
    cy.title().should("contain", "Top School");
    cy.login(this.validAdminLoginData.username, this.validAdminLoginData.password);
    adminBasicInfoPage.getLoginSuccessfulMessage().should('have.text', 'Logged in successfully');
  });

});
