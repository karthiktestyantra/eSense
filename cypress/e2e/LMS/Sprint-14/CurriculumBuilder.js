const adminPostSetupHomePage = require("../../../support/pageObjects/LMS-2/AdminPostSetupHomePage")
const adminPostSetupCurriculumBuilderPage = require("../../../support/pageObjects/LMS-2/AdminPostSetupCurriculumBuilderPage")

describe("Verify Curriculum Builder pagefunctionalities", function () {
  before(function () {
    cy.visit(Cypress.env("urlQAPreSetup"))
    cy.fixture("LMS/AdminLoginCredentials").then(function (validAdminLoginData) {
      cy.AdminPostSetup(validAdminLoginData.fNew, validAdminLoginData.password)
    })
  })
  beforeEach(function () {
    cy.fixture("LMS/sprint14CurriculumBuilder").as("curriculumBuilder")
  })

  it("Validate school admin is able to add “Total number of session” field is available for both Theme and Chapter workflows under “Duration” section/EL-4067/ES4067_02", function () {
    //Curriculum Builder -Create
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

  //post - Condition
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

  //Script for pre-setup condtions
  // it.skip("Script for to create 'A'section in grade VIII",function () {
  //   cy.wait(2000)
  //   adminPostSetupHomePage.getSchoolLnk().click({force:true})
  //   adminPostSetupHomePage.getGradesAndDeptSectionBtn().click()
  //   adminPostSetupHomePage.getGradesAndDeptSectionBtn2().click()
  //   grade.getGradeLst().each(($e1,index,$list) =>{
  //     const actualText = $e1.text()
  //     if(actualText.includes("VIII")){
  //       grade.getSectionAddBtn().eq(index).click()
  //     }
  //   })
  //   grade.getAddNewSectionPopupTitle().should('contain',this.adminPostSetupCurriculumBuilderPage.AddSectionTitle)
  //   grade.getSectionNameTxtFld().click().type(this.adminPostSetupCurriculumBuilderPage.Section)
  //   grade.getOptionalSubDrpDwn().click()
  //   grade.getOptionalSubLstBx().contains(this.adminPostSetupCurriculumBuilderPage.SubjectName).click()
  //   grade.getAddSectionBtn().click({force:true})
  //   grade.getCreateSectionSuccessPopup().should('have.text',this.adminPostSetupCurriculumBuilderPage.GradeCreatedPopup)
  // })

})