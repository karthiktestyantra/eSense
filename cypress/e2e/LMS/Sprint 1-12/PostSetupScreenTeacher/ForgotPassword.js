const forgotPasswordPage = require('../../../../support/pageObjects/LMS-1/ForgotPasswordPage')
const indexPage = require('../../../../support/pageObjects/LMS-1/IndexPage')
const loginPage = require('../../../../support/pageObjects/LMS-1/LoginPage')

describe("Verify Forgot Password Functionaities", function () {

  beforeEach(function () {
    cy.fixture("LMS/forgotPassword").as("emailData")
  })

  it("Forgot Password page validation", function () {
    cy.visit(Cypress.env("urlMain"));
    indexPage.getTeacher().click();
    loginPage.getForgotPassword().click();
    forgotPasswordPage.getForgotPasswordText().should("have.text", "Forgot Password");
  });

  it("Forgot Password field empty validation", function () {
    forgotPasswordPage.getSendResetInstructionsButton().click();
    forgotPasswordPage.getErrorMessage().should("have.text", "This field is required");
  });

  it("Forgot Password field validation", function () {
    forgotPasswordPage.getEmail().type(this.emailData.forgotPasswordDetails.email);
    forgotPasswordPage.getSendResetInstructionsButton().click();
  });
});
