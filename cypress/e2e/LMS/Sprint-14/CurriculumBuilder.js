import AdminGradePage from "../../../support/pageObjects/LMS-2/AdminGradePage";
import AdminPostSetupHomePage from "../../../support/pageObjects/LMS-2/AdminPostSetupHomePage";
import AdminPostSetupCurriculumBuilderPage from "../../../support/pageObjects/LMS-2/AdminPostSetupCurriculumBuilderPage";

const home = new AdminPostSetupHomePage();
const grade = new AdminGradePage();
const curriculumBuilder = new AdminPostSetupCurriculumBuilderPage();


describe("Verify Curriculum Builder pagefunctionalities", function () {
  before(function () {
    cy.visit(Cypress.env("urlQAPreSetup"))
    cy.fixture("LMS/AdminLoginCredentials").then(function (validAdminLoginData) {
      cy.AdminPostSetup(validAdminLoginData.fNew, validAdminLoginData.password)
    })
  })
  beforeEach(function () {
    cy.fixture("LMS/sprint14CurriculumBuilder").then(function (curriculumBuilder) {
      this.curriculumBuilder = curriculumBuilder;
    })
  })

  //Script for pre-setup condtions
  // it.skip("Script for to create 'A'section in grade VIII",function () {
  //   cy.wait(2000)
  //   home.getSchoolLnk().click({force:true})
  //   home.getGradesAndDeptSectionBtn().click()
  //   home.getGradesAndDeptSectionBtn2().click()
  //   grade.getGradeLst().each(($e1,index,$list) =>{
  //     const actualText = $e1.text()
  //     if(actualText.includes("VIII")){
  //       grade.getSectionAddBtn().eq(index).click()
  //     }
  //   })
  //   grade.getAddNewSectionPopupTitle().should('contain',this.curriculumBuilder.AddSectionTitle)
  //   grade.getSectionNameTxtFld().click().type(this.curriculumBuilder.Section)
  //   grade.getOptionalSubDrpDwn().click()
  //   grade.getOptionalSubLstBx().contains(this.curriculumBuilder.SubjectName).click()
  //   grade.getAddSectionBtn().click({force:true})
  //   grade.getCreateSectionSuccessPopup().should('have.text',this.curriculumBuilder.GradeCreatedPopup)
  // })

  //Sprint 14
  it("Validate school admin is able to add “Total number of session” field is available for both Theme and Chapter workflows under “Duration” section/EL-4067/ES4067_02", function () {
    home.getSchoolLnk().click({ force: true })
    home.getCurriculumBuilderSectionLnk().click()
    curriculumBuilder.getTitle().should('have.text', this.curriculumBuilder.Title)
    curriculumBuilder.getGradeLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.curriculumBuilder.Grade)) {
        cy.get('td button').eq(index).click()
      }
    })
    curriculumBuilder.getSubLstUnderGrade().each(($e2, index, $list) => {
      const sub = $e2.text()
      if (sub.includes(this.curriculumBuilder.SubjectName)) {
        curriculumBuilder.getEditCurriculumBtnLst().eq(index).click()
        return false;
      }
    })
    curriculumBuilder.getStartWithChapterBtn().click()
    curriculumBuilder.getTotalSessionsTxtFld().should('be.visible')
    curriculumBuilder.getAddNewChapterCloseIcon().click()
    curriculumBuilder.getStartWithThemeBtn().click()
    curriculumBuilder.getTotalSessionsTxtFld().should('be.visible')
    curriculumBuilder.getAddNewChapterCloseIcon().click()
  })

  it("Validate school admin is able to add “Total number of sessions” required for the teacher to complete the theme or chapter/EL-4067/ES4067_01", function () {
    curriculumBuilder.getStartWithChapterBtn().click()
    curriculumBuilder.getTotalSessionsTxtFld().clear().type(this.curriculumBuilder.ValidTotalSessionsNum)
  })

  it("Validate school admin is able to enter only Numeric two digits/EL-4067/ES4067_03", function () {
    curriculumBuilder.getTotalSessionsTxtFld().clear().type(this.curriculumBuilder.InvalidTotalSessionsNum)
    curriculumBuilder.getAlert().should('have.text', this.curriculumBuilder.AlertForTotalSessionField)
  })

  it("Validate school admin is able to Add  chapter without selecting Total  session/ periods /EL-4067/ES4067_05", function () {
    curriculumBuilder.getChapterNumTxtFld().type(this.curriculumBuilder.ChapterNum)
    curriculumBuilder.getChapterName().type(this.curriculumBuilder.ChapterName)
    curriculumBuilder.getChapterDescription().type(this.curriculumBuilder.ChapterDescription)
    curriculumBuilder.getTotalSessionsTxtFld().clear()
    //curriculumBuilder.getContinueBtn().click()
    // curriculumBuilder.getReminderPopup().should('have.text',this.curriculumBuilder.Alert)
  })

  it("Validate school admin is able to Enter total number of session/ periods required to complete the theme or chapter (mandatory field)/EL-4067/ES4067_04", function () {
    curriculumBuilder.getTotalSessionsTxtFld().type(this.curriculumBuilder.ValidTotalSessionsNum)
    curriculumBuilder.getContinueBtn().click()
    curriculumBuilder.getSuccessfulPopup().should('have.text', this.curriculumBuilder.SuccessPopup)
  })

  it("Validate school admin is able to save the changes made using “Save Progress” button under curriculum builder at least one theme or chapter flow to be added/EL-4070/ES4070_01", function () {
    cy.wait(2000)
    curriculumBuilder.getSaveProgressBtn().click()
  })

  it("Validate school admin is Waiting for Approval - the Subjects which are sent for HOD user approval will have “ waiting for Approval” Status/EL-4070/ES4070_03", function () {
    curriculumBuilder.getGradeLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.curriculumBuilder.Grade)) {
        cy.get('td button').eq(index).click()
      }
    })
    curriculumBuilder.getSubLstUnderGrade().each(($e2, index, $list) => {
      const sub = $e2.text()
      if (sub.includes(this.curriculumBuilder.SubjectName)) {
        curriculumBuilder.getApprovalPendingLst().eq(index).should('be.visible')
      }
      return false;
    })
  })

  //post - Condition
  it("To delete the created theme", function () {
    curriculumBuilder.getSubLstUnderGrade().each(($e2, index, $list) => {
      const sub = $e2.text()
      if (sub.includes(this.curriculumBuilder.SubjectName)) {
        curriculumBuilder.getEditCurriculumBtnLst().eq(index).click()
      }
      return false;
    })
    curriculumBuilder.getChapterLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.curriculumBuilder.ChapterName)) {
        curriculumBuilder.getChapterDltBtn().eq(index).click()
      }
    })
    cy.get('.MuiButton-contained').click()
  })

})