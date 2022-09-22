const indexPage = require('../../../../support/pageObjects/LMS-1/IndexPage')
const sprint12Regression = require('../../../../support/pageObjects/LMS-1/Sprint12Regression')
const curriculumBuilderPage = require('../../../../support/pageObjects/LMS-1/CurriculumBuilderPage')

describe("Verify Sprint 12 related functionalities", function () {
  before(function () {
    cy.visit(Cypress.env('urlQAPreSetup'))
    indexPage.getAdmin().click();
    cy.fixture("LMS/validAdminLoginCredentials").then(function (validAdminLoginData) {
      this.validAdminLoginData = validAdminLoginData;
      cy.login(
        this.validAdminLoginData.username, this.validAdminLoginData.password
      );
    });
  });

  it("To verify that 'Curriculum builder' quick link is provided in the 'School' page", function () {
    sprint12Regression.getAdminSchoolMenu().trigger('mouseover').click();
    sprint12Regression.getAdminCurriculumBuilderQuickLink().should('be.visible');
  });

  it("To verify that when user clicks on 'Curriculum builder' quick link, it's navigating to 'Curriculam' page", function () {
    sprint12Regression.getAdminCurriculumBuilderQuickLink().click();
  });

  it("To verify that 'Grades', 'Edited By', 'Last Edited', 'Status' and 'Actions' displayed in Curriculam page", function () {
    curriculumBuilderPage.getGradesColumnTitle().should("be.visible");
    curriculumBuilderPage.getEditedByColumnTitle().should("be.visible");
    curriculumBuilderPage.getLastEditedColumnTitle().should("be.visible");
    curriculumBuilderPage.getStatusColumnTitle().should("be.visible");
    curriculumBuilderPage.getActionsColumnTitle().should("be.visible");
  });

  it("To verify that subject should have only any of this two status 1. Done 2.Pending", function () {
    curriculumBuilderPage.getStatusColumnValues().each(($ele, index, $list) => {
      let StatusList = $ele.text();
      cy.log(StatusList);
    });
  });

  it("To verify that when user clicks on 'View Details' on any of the record, it is displaying all the subjects in it", function () {
    sprint12Regression.getStatusRows().then((ele) => {
      cy.log(ele.length);
      sprint12Regression.getColumns().then((el) => {
        cy.log(el.length);
        for (let i = 1; i <= ele.length; i++) {
          for (let j = 2; j <= el.length; j++) {
            sprint12Regression.getCell(i, j).then((elex) => {
              if ((elex.text()) == "Pending") {
                sprint12Regression.getViewDetailsButton(i - 1).click({ force: true });
              }
            });
          }
        }
      });
    });
  });

  it("To verify that user should be able to perform edit action on subjects", function () {
    sprint12Regression.getViewDetailsEditIcon().click({ force: true });
    sprint12Regression.getCreateCurriclumGoBackButton().click();
    sprint12Regression.getCurriclumGoBackButton().click();
  });
});
