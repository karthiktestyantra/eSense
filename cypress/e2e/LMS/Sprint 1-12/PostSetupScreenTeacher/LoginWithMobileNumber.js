import LoginPage from "../../../../support/pageObjects/LMS-1/LoginPage";
import LoginWithPhoneNumberPage from "../../../../support/pageObjects/LMS-1/LoginWithPhoneNumberPage";
import EnterOTPPage from "../../../../support/pageObjects/LMS-1/EnterOTPPage";
import IndexPage from "../../../../support/pageObjects/LMS-1/IndexPage";

const ip = new IndexPage();
const lp = require('../../../../support/pageObjects/LMS-1/LoginPage')
const lwmp = new LoginWithPhoneNumberPage();
const eop = new EnterOTPPage();

describe("Verify Login With Mobile number Functionalities", function () {
  beforeEach(function () {
    cy.fixture("LMS/loginWithMobileNumber").then(function (mobileData) {
      this.mobileData = mobileData;
    });

    cy.fixture("LMS/mobileNumber").then(function (mobileNumberData) {
      this.mobileNumberData = mobileNumberData;
    });
  });

  it("Verify that Log In With Phone number button is present and enabled in the Login screen", function () {
    cy.visit(Cypress.env("urlMain"));
    cy.exec("npm cache clear --force");
    ip.getTeacher().click();
    cy.reload();
    lp.getLoginWithPhoneNumber().should('have.text', 'Log In with Phone number').should('be.visible');
  })

  it("Verify whether when we click the Log In With Phone number link it is directing to respective ", function () {
    lp.getLoginWithPhoneNumber().click();
    lwmp.getMobileNumberPageText().should("have.text", "Welcome to TopSchool");
  });

  it("Leave empty the Mobile Number field and click login button, then verify the “This field is required” error message", function () {
    lwmp.getLogin().click();
    lwmp.getErrorMessage().should("have.text", "This field is required");
    cy.wait(2000);
  });

  it("Login with different Mobile number format", function () {
    lwmp.getMobileNumber().type(this.mobileNumberData.mobileData.mNumber);
    lwmp.getLogin().click();
    lwmp.getMobileNumberPageText().should('have.text', 'Enter OTP');
  });

});
