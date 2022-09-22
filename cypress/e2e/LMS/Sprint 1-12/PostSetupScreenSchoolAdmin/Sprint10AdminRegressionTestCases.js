const indexPage = require('../../../../support/pageObjects/LMS-1/IndexPage')
const sprint10Regression = require('../../../../support/pageObjects/LMS-1/Sprint10Regression')

describe("Verify Sprint 10 related functionalities", function () {
  before(function () {
    cy.visit(Cypress.env('urlQAPreSetup'))
    indexPage.getAdmin().click();
    cy.reload();
    cy.fixture("LMS/validAdminLoginCredentials").then(function (validAdminLoginData) {
      this.validAdminLoginData = validAdminLoginData;
      cy.login(this.validAdminLoginData.username, this.validAdminLoginData.password);
    });
  });

  it("Validate Admin is able log in and navigate to dashboard", function () {
    sprint10Regression.getAdminDashboardTitle().should("have.text", "Your Dashboard");
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
    sprint10Regression.getTodaysDateInDashboardInAdmin().should("contain", day);
    cy.log(todaysDate);
    sprint10Regression.getTodaysDateInDashboardInAdmin().should("contain", todaysDate);
    sprint10Regression.getSchoolLogoAdmin().should("be.visible");
    sprint10Regression.getWelcomeMessageAdmin().then(($el) => {
      let name = $el.text();
      expect(name).to.contain("messi");
    });
    sprint10Regression.getAdminDashboardGoToMySchoolLink().should("be.visible");
  });

  it("Validate Admin is able to view the No. of Total Classes, Total teachers, Total no of students, and total admins in the school, shown on this section", function () {
    sprint10Regression.getAdminDashboardTotalClasses().should('be.visible');
    sprint10Regression.getAdminDashboardTotalTeachers().should('be.visible');
    sprint10Regression.getAdminDashboardTotalStudents().should('be.visible');
    sprint10Regression.getAdminDashboardTotalAdmins().should('be.visible');
  });

  it("Validate Admin able to view the Content Performance", function () {
    sprint10Regression.getAdminDashboardContentPerformanceTab().click();
    sprint10Regression.getAdminDashboardContentPerformanceSection().should('be.visible');
  });

});