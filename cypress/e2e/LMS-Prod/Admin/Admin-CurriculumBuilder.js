const adminPostSetupHomePage = require("../../../support/pageObjects/LMS-2/AdminPostSetupHomePage")
const adminPostSetupCurriculumBuilderPage = require("../../../support/pageObjects/LMS-2/AdminPostSetupCurriculumBuilderPage")
const indexPage = require('../../../support/pageObjects/LMS-1/IndexPage')
const sprint12Regression = require('../../../support/pageObjects/LMS-1/Sprint12Regression')
const curriculumBuilderPage = require('../../../support/pageObjects/LMS-1/CurriculumBuilderPage')
const adminAccountsPage = require("../../../support/pageObjects/LMS-2/AdminAccountsPage")

describe("Verify Curriculum Builder pagefunctionalities - Sprint 14(EL-4067,EL-4070)", function () {
  before(function () {
    cy.visit(Cypress.env('urlProd'))
    indexPage.getAdmin().click();
    cy.fixture("LMS/validAdminLoginCredentials").then(function (validAdminLoginData) {
      this.validAdminLoginData = validAdminLoginData;
      cy.login(this.validAdminLoginData.prodUserName, this.validAdminLoginData.password)
    });
  });
  beforeEach(function () {
    cy.fixture("LMS/sprint14CurriculumBuilder").as("curriculumBuilder")
    
  })

  it("Validate school admin is able to add “Total number of session” field is available for both Theme and Chapter workflows under “Duration” section/EL-4067/ES4067_02", function () {
    //Curriculum Builder -Create
    cy.wait(1000)
    cy.get('.step-container > :nth-child(3)').click()
    cy.wait(1000)
    cy.get('a.continue-btn').contains("Continue").click()
    cy.wait(1000)
    cy.get('button.continue-btn').contains("Continue").click()
    cy.wait(1000)
    adminPostSetupHomePage.getSchoolLnk().click({ force: true })
    adminPostSetupHomePage.getCurriculumBuilderSectionLnk().click()
    adminPostSetupCurriculumBuilderPage.getTitle().should('have.text', this.curriculumBuilder.Title)
    adminPostSetupCurriculumBuilderPage.getGradeLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.curriculumBuilder.Grade)) {
        cy.get('td button').eq(index).click()
      }
    })
    adminPostSetupCurriculumBuilderPage.getSubLstUnderGrade().each(($e2, index, $list) => {
      const sub = $e2.text()
      if (sub.includes(this.curriculumBuilder.SubjectName)) {
        adminPostSetupCurriculumBuilderPage.getEditCurriculumBtnLst().eq(index).click()
        return false;
      }
    })
    cy.wait(2000)
    adminPostSetupCurriculumBuilderPage.getStartWithChapterBtn().click({ force: true })
    adminPostSetupCurriculumBuilderPage.getTotalSessionsTxtFld().should('be.visible')
    adminPostSetupCurriculumBuilderPage.getAddNewChapterCloseIcon().click()
    adminPostSetupCurriculumBuilderPage.getStartWithThemeBtn().click()
    adminPostSetupCurriculumBuilderPage.getTotalSessionsTxtFld().should('be.visible')
    adminPostSetupCurriculumBuilderPage.getAddNewChapterCloseIcon().click()
  })

  it("Validate school admin is able to add “Total number of sessions” required for the teacher to complete the theme or chapter/EL-4067/ES4067_01", function () {
    //Curriculum Builder -Create
    adminPostSetupCurriculumBuilderPage.getStartWithChapterBtn().click()
    adminPostSetupCurriculumBuilderPage.getTotalSessionsTxtFld().clear().type(this.curriculumBuilder.ValidTotalSessionsNum)
  })

  it("Validate school admin is able to enter only Numeric two digits/EL-4067/ES4067_03", function () {
    //Curriculum Builder -Create
    adminPostSetupCurriculumBuilderPage.getTotalSessionsTxtFld().clear().type(this.curriculumBuilder.InvalidTotalSessionsNum)
    adminPostSetupCurriculumBuilderPage.getAlert().should('have.text', this.curriculumBuilder.AlertForTotalSessionField)
  })

  it("Validate school admin is able to Add  chapter without selecting Total  session/ periods /EL-4067/ES4067_05", function () {
    //Curriculum Builder -Create
    adminPostSetupCurriculumBuilderPage.getChapterNumTxtFld().type(this.curriculumBuilder.ChapterNum)
    adminPostSetupCurriculumBuilderPage.getChapterName().type(this.curriculumBuilder.ChapterName)
    adminPostSetupCurriculumBuilderPage.getChapterDescription().type(this.curriculumBuilder.ChapterDescription)
    adminPostSetupCurriculumBuilderPage.getTotalSessionsTxtFld().clear()
    //adminPostSetupCurriculumBuilderPage.getContinueBtn().click()
    // adminPostSetupCurriculumBuilderPage.getReminderPopup().should('have.text',this.adminPostSetupCurriculumBuilderPage.Alert)
  })

  it("Validate school admin is able to Enter total number of session/ periods required to complete the theme or chapter (mandatory field)/EL-4067/ES4067_04", function () {
    //Curriculum Builder -Create
    adminPostSetupCurriculumBuilderPage.getTotalSessionsTxtFld().type(this.curriculumBuilder.ValidTotalSessionsNum)
    adminPostSetupCurriculumBuilderPage.getContinueBtn().click()
    adminPostSetupCurriculumBuilderPage.getSuccessfulPopup().should('have.text', this.curriculumBuilder.SuccessPopup)
  })

  it("Validate school admin is able to save the changes made using “Save Progress” button under curriculum builder at least one theme or chapter flow to be added/EL-4070/ES4070_01", function () {
    //Curriculum Builder - Edit
    cy.wait(2000)
    adminPostSetupCurriculumBuilderPage.getSaveProgressBtn().click()
  })

  it("Validate school admin is Waiting for Approval - the Subjects which are sent for HOD user approval will have “ waiting for Approval” Status/EL-4070/ES4070_03", function () {
    //Curriculum Builder - approve
    adminPostSetupCurriculumBuilderPage.getGradeLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.curriculumBuilder.Grade)) {
        cy.get('td button').eq(index).click()
      }
    })
    adminPostSetupCurriculumBuilderPage.getSubLstUnderGrade().each(($e2, index, $list) => {
      const sub = $e2.text()
      if (sub.includes(this.curriculumBuilder.SubjectName)) {
        adminPostSetupCurriculumBuilderPage.getApprovalPendingLst().eq(index).should('be.visible')
      }
      return false;
    })
  })

  it("To delete the created theme", function () {
    adminPostSetupCurriculumBuilderPage.getSubLstUnderGrade().each(($e2, index, $list) => {
      const sub = $e2.text()
      if (sub === (this.curriculumBuilder.SubjectName)) {
        adminPostSetupCurriculumBuilderPage.getEditCurriculumBtnLst().eq(index).click()
      }
    })
    adminPostSetupCurriculumBuilderPage.getChapterLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.curriculumBuilder.ChapterName)) {
        adminPostSetupCurriculumBuilderPage.getChapterDltBtn().eq(index).click()
      }
    })
    cy.get('.MuiButton-contained').click()
  })


 
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
  cy.get('img[src="/static/media/barChart.5474dbcd.svg"]').scrollIntoView().click()
});





})