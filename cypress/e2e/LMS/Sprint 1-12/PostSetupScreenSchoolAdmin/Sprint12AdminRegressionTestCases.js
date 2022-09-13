import IndexPage from "../../../../support/pageObjects/LMS-1/IndexPage";
import Sprint12Regression from "../../../../support/pageObjects/LMS-1/Sprint12Regression";
import CurriculumBuilderPage from "../../../../support/pageObjects/LMS-1/CurriculumBuilderPage";

const ip = new IndexPage();
const lp = require('../../../../support/pageObjects/LMS-1/LoginPage')
const srn = new Sprint12Regression();
const cbp = new CurriculumBuilderPage();

describe("Verify Sprint 12 related functionalities", function () {
  before(function () {
    cy.visit("https://liverpool.staging.topschool.co.in")
    ip.getAdmin().click();
    cy.reload();
    cy.fixture("LMS/validAdminLoginCredentials").then(function (
      validAdminLoginData
    ) {
      this.validAdminLoginData = validAdminLoginData;
      cy.login(
        this.validAdminLoginData.username,
        this.validAdminLoginData.password
      );
    });
  });

  it("To verify that 'Curriculum builder' quick link is provided in the 'School' page", function () {
    srn.getAdminSchoolMenu().trigger('mouseover').click();
    srn.getAdminCurriculumBuilderQuickLink().should('be.visible');
  });

  it("To verify that when user clicks on 'Curriculum builder' quick link, it's navigating to 'Curriculam' page", function () {
    srn.getAdminCurriculumBuilderQuickLink().click();
  });

  it("To verify that 'Grades', 'Edited By', 'Last Edited', 'Status' and 'Actions' displayed in Curriculam page", function () {
    cbp.getGradesColumnTitle().should("be.visible");
    cbp.getEditedByColumnTitle().should("be.visible");
    cbp.getLastEditedColumnTitle().should("be.visible");
    cbp.getStatusColumnTitle().should("be.visible");
    cbp.getActionsColumnTitle().should("be.visible");
  });

  it("To verify that subject should have only any of this two status 1. Done 2.Pending", function () {
    cbp.getStatusColumnValues().each(($ele, index, $list) => {
      let StatusList = $ele.text();
      cy.log(StatusList);
    });
  });

  it("To verify that when user clicks on 'View Details' on any of the record, it is displaying all the subjects in it", function () {
    srn.getStatusRows().then((ele) => {
      cy.log(ele.length);
      srn.getColumns().then((el) => {
        cy.log(el.length);
        for (let i = 1; i <= ele.length; i++) {
          for (let j = 2; j <= el.length; j++) {
            srn.getCell(i, j).then((elex) => {
              if ((elex.text()) == "Pending") {
                srn.getViewDetailsButton(i - 1).click({ force: true });
              }

            });
          }
        }
      });
    });
  });

  it("To verify that user should be able to perform edit action on subjects", function () {
    srn.getViewDetailsEditIcon().click({ force: true });
    srn.getCreateCurriclumGoBackButton().click();
    srn.getCurriclumGoBackButton().click();
  });
});
