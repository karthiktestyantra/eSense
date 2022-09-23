const loginWithPhoneNumberPage = require('../../../../support/pageObjects/LMS-1/LoginWithPhoneNumberPage')
const indexPage = require('../../../../support/pageObjects/LMS-1/IndexPage')
const loginPage = require('../../../../support/pageObjects/LMS-1/LoginPage')

describe("Verify Login With Mobile number Functionalities", function () {

  beforeEach(function () {
    cy.fixture("LMS/loginWithMobileNumber").as("mobileData)")
    cy.fixture("LMS/mobileNumber").as("mobileNumberData")
  });

  it("Verify that Log In With Phone number button is present and enabled in the Login screen", function () {
    cy.visit(Cypress.env("urlMain"));
    cy.exec("npm cache clear --force");
    indexPage.getTeacher().click();
    cy.reload();
    loginPage.getLoginWithPhoneNumber().should('have.text', 'Log In with Phone number').should('be.visible');
  })

  it("Verify whether when we click the Log In With Phone number link it is directing to respective ", function () {
    loginPage.getLoginWithPhoneNumber().click();
    loginWithPhoneNumberPage.getMobileNumberPageText().should("have.text", "Welcome to TopSchool");
  });

  it("Leave empty the Mobile Number field and click login button, then verify the “This field is required” error message", function () {
    loginWithPhoneNumberPage.getLogin().click();
    loginWithPhoneNumberPage.getErrorMessage().should("have.text", "This field is required");
    cy.wait(2000);
  });

  it("Login with different Mobile number format", function () {
    loginWithPhoneNumberPage.getMobileNumber().type(this.mobileNumberData.mobileData.mNumber);
    loginWithPhoneNumberPage.getLogin().click();
    loginWithPhoneNumberPage.getMobileNumberPageText().should('have.text', 'Enter OTP');
  });

});
