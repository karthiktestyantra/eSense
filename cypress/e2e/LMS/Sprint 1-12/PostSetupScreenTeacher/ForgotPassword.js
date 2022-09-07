import LoginPage from "../../../../support/pageObjects/LMS-1/LoginPage";
import ForgotPasswordPage from "../../../../support/pageObjects/LMS-1/ForgotPasswordPage";
import IndexPage from "../../../../support/pageObjects/LMS-1/IndexPage";

const ip = new IndexPage();
const lp = new LoginPage();
const fpp = new ForgotPasswordPage();

describe("Verify Forgot Password Functionaities", function () {

  beforeEach(function () {

    cy.fixture("LMS/forgotPassword").then(function (emailData) {
      this.emailData = emailData;
    });
  });

  it("Forgot Password page validation", function () {
    cy.visit(Cypress.env("urlMain"));
    ip.getTeacher().click();
    cy.reload();
    lp.getForgotPassword().click();
    fpp.getForgotPasswordText().should("have.text", "Forgot Password");

  });

  it("Forgot Password field empty validation", function () {
    fpp.getSendResetInstructionsButton().click();
    fpp.getErrorMessage().should("have.text", "This field is required");

  });

  it("Forgot Password field validation", function () {
    fpp.getEmail().type(this.emailData.forgotPasswordDetails.email);
    fpp.getSendResetInstructionsButton().click();
  });
});
