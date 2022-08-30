/// <reference types="Cypress"/>

import IndexPage from "../../../support/pageObjects2/IndexPage";
import LoginPage from "../../../support/pageObjects2/LoginPage";
import Sprint10Regression from "../../../support/pageObjects2/Sprint10Regression";

const ip = new IndexPage();
const lp = new LoginPage();
const sr = new Sprint10Regression();

describe("Verify Sprint 10 related functionalities", function () {
  before(function () {
    cy.visit("https://liverpool.staging.topschool.co.in")
    ip.getAdmin().click();
    cy.reload();
    cy.fixture("validAdminLoginCredentials").then(function (validAdminLoginData) {
      this.validAdminLoginData = validAdminLoginData;
      cy.login(this.validAdminLoginData.username, this.validAdminLoginData.password);
    });
  });

  it("Validate Admin is able log in and navigate to dashboard", function () {
    sr.getAdminDashboardTitle().should("have.text", "Your Dashboard");
  });

  it("Validate Admin can view School logo, Current date, welcome message with School admin name, and 'Go to My School' link", function () {
    const dayjs = require("dayjs");
    const todaysDate = dayjs().format("DD MMM YYYY");
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let now = new Date();
    let day = days[now.getDay()];
    sr.getTodaysDateInDashboardInAdmin().should("contain", day);
    cy.log(todaysDate);
    sr.getTodaysDateInDashboardInAdmin().should("contain", todaysDate);
    sr.getSchoolLogoAdmin().should("be.visible");
    sr.getWelcomeMessageAdmin().then(($el) => {
      let name = $el.text();
      expect(name).to.contain("messi");
    });
    sr.getAdminDashboardGoToMySchoolLink().should("be.visible");
  });

  it("Validate Admin is able to view the No. of Total Classes, Total teachers, Total no of students, and total admins in the school, shown on this section", function(){
    sr.getAdminDashboardTotalClasses().should('be.visible');
    sr.getAdminDashboardTotalTeachers().should('be.visible');
    sr.getAdminDashboardTotalStudents().should('be.visible');
    sr.getAdminDashboardTotalAdmins().should('be.visible');
  });

  it("Validate Admin able to view the Content Performance", function(){
    sr.getAdminDashboardContentPerformanceTab().click();
    sr.getAdminDashboardContentPerformanceSection().should('be.visible');
  });
});