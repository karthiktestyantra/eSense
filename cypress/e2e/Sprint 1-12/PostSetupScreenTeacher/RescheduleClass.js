/// <reference types="Cypress"/>

import IndexPage from "../../../support/pageObjects2/IndexPage";
import LoginPage from "../../../support/pageObjects2/LoginPage";
import WalkthroughPage from "../../../support/pageObjects2/WalkthroughPage";
import ClassOverviewPage from "../../../support/pageObjects2/ClassOverviewPage";
import CurriculumOverviewPage from "../../../support/pageObjects2/CurriculumOverviewPage";
import TimeTableOverviewPage from "../../../support/pageObjects2/TimeTableOverviewPage";
import MyCalendarPage from "../../../support/pageObjects2/MyCalendarPage";
import RescheduleClassPage from "../../../support/pageObjects2/RescheduleClassPage";

const ip = new IndexPage();
const lp = new LoginPage();
const wp = new WalkthroughPage();
const cop = new ClassOverviewPage();
const cup = new CurriculumOverviewPage();
const ttop = new TimeTableOverviewPage();
const cp = new MyCalendarPage();
const rc = new RescheduleClassPage();

describe("Verify Reschedule class Functionalities", function () {
    before(function () {
      cy.fixture("validLoginCredentials").then(function (validLoginData) {
        this.validLoginData = validLoginData;
        cy.visit(Cypress.env("url"));
        ip.getTeacher().click();
        cy.reload();
        cy.login(this.validLoginData.username, this.validLoginData.password);
        ttop
        .getDashboardTitle()
        .should("have.text", "Your Dashboard");
      });
    });

    beforeEach(function (){
      cy.fixture("rescheduleClassDetails").then(function (classDetails){
        this.classDetails = classDetails;
      });
    });
  
    it("Navigate to My Calendar page", function () {
      cp.getMyCalendar().click({ force: true });
      cy.wait(2000);
    });

    it("Verify that the Class pop up should be displayed by clicking on the classes in the calendar", function(){
      cy.get('.cal-header-next > .mbsc-button-icon').click();
        cy.wait(2000);
        cp.getSampleClass().contains(this.classDetails.class).click();
        cp.getClassPopupTitle().should("have.contain",this.classDetails.class);
    });

    it("Verify that the should be displayed and enabled", function () {
        cp.getRescheduleClass().should('be.visible').should('be.enabled');
      });

    it("Verify that the Reschedule class button should have Reason with options, Select date, start time, end time, send request button, and close icon", function () {
        cp.getRescheduleClass().click();
        rc.getRescheduleClassPopupTitle().should('have.text','Reschedule Class');
        rc.getRescheduleReason().should('be.visible');
        rc.getSelectDate().should('be.visible');
        rc.getStartTime().should('be.visible');
        rc.getEndTime().should('be.visible');
        rc.getSendRequest().should('be.visible');
        rc.getCloseIcon().should('be.visible');
    });
});
  