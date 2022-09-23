const indexPage = require('../../../../support/pageObjects/LMS-1/IndexPage')
const timeTableOverviewPage = require('../../../../support/pageObjects/LMS-1/TimeTableOverviewPage')
const myCalendarPage = require('../../../../support/pageObjects/LMS-1/MyCalendarPage')
const rescheduleClassPage = require('../../../../support/pageObjects/LMS-1/RescheduleClassPage')

describe("Verify Reschedule class Functionalities", function () {
  
  before(function () {
    cy.fixture("LMS/TeacherLoginCredentials").then(function (validLoginData) {
      this.validLoginData = validLoginData;
      cy.visit(Cypress.env("urlMain"));
      indexPage.getTeacher().click();
      cy.login(this.validLoginData.user2, this.validLoginData.password);
      timeTableOverviewPage.getDashboardTitle().should("have.text", "Your Dashboard");
    });
  });

  beforeEach(function () {
    cy.fixture("LMS/rescheduleClassDetails").as("classDetails)")
  });

  it("Navigate to My Calendar page", function () {
    myCalendarPage.getMyCalendar().click({ force: true });
    cy.wait(2000);
  });

  it("Verify that the Class pop up should be displayed by clicking on the classes in the calendar", function () {
    cy.get('.cal-header-next > .mbsc-button-icon').click();
    cy.wait(2000);
    myCalendarPage.getSampleClass().contains(this.classDetails.class).click();
    myCalendarPage.getClassPopupTitle().should("have.contain", this.classDetails.class);
  });

  it("Verify that the should be displayed and enabled", function () {
    myCalendarPage.getRescheduleClass().should('be.visible').should('be.enabled');
  });

  it("Verify that the Reschedule class button should have Reason with options, Select date, start time, end time, send request button, and close icon", function () {
    myCalendarPage.getRescheduleClass().click();
    rescheduleClassPage.getRescheduleClassPopupTitle().should('have.text', 'Reschedule Class');
    rescheduleClassPage.getRescheduleReason().should('be.visible');
    rescheduleClassPage.getSelectDate().should('be.visible');
    rescheduleClassPage.getStartTime().should('be.visible');
    rescheduleClassPage.getEndTime().should('be.visible');
    rescheduleClassPage.getSendRequest().should('be.visible');
    rescheduleClassPage.getCloseIcon().should('be.visible');
  });
});
