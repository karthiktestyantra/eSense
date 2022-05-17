/// <reference types="Cypress"/>

import AdminGradePage from "../../../support/pageObjects/AdminGradePage";
import AdminHomePage from "../../../support/pageObjects/AdminHomePage";
import AdminPreSetupCurriculumBuilderPage from "../../../support/pageObjects/AdminPreSetupCurriculumBuilderPage";

const home = new AdminHomePage();
const grade = new AdminGradePage();
const curriculumBuilder = new AdminPreSetupCurriculumBuilderPage();


describe("Verify Admin Main Login Page functionalities", function () {
  before(function () {
    cy.visit(Cypress.env("QAPreSetupUrl"))
    cy.fixture("AdminLoginCredentials").then(function (validAdminLoginData) {
    cy.AdminLogin(validAdminLoginData.username,validAdminLoginData.password)
    })
  })
  beforeEach(function (){
    cy.fixture("sprint14CurriculumBuilder").then(function(curriculumBuilder){
      this.curriculumBuilder = curriculumBuilder;
    })
  })

//Script for pre-setup condtions
  it("Script for to create 'A'section in grade V",function () {
    home.getAdminGradeLnk().click()
    grade.getGradeFiveAddBtn().click()
    grade.getAddNewSectionPopupTitle().should('contain',this.curriculumBuilder.AddSectionTitle)
    grade.getSectionNameTxtFld().click().type(this.curriculumBuilder.Section)
    grade.getOptionalSubDrpDwn().click()
    grade.getOptionalSubLstBx().contains(this.curriculumBuilder.SubjectName).click()
    grade.getAddSectionBtn().click({force:true})
    grade.getCreateSectionSuccessPopup().should('have.text',this.curriculumBuilder.GradeCreatedPopup)
  })

//Sprint 14
it("Validate school admin is able to add “Total number of session” field is available for both Theme and Chapter workflows under “Duration” section/EL-4067/ES4067_02",function () {
    home.getAdminAccountLnk().click()
    home.getContinueBtn().click()
    curriculumBuilder.getTitle().should('have.text',this.curriculumBuilder.Title)
    curriculumBuilder.getGradeLst().each(($e1,index,$list) =>{
      const text = $e1.text()
      if(text.includes(this.curriculumBuilder.Grade)){
        cy.get('td button').eq(index).click({force:true})
      }
    })
      curriculumBuilder.getStartWithChapterBtn().click()
      curriculumBuilder.getTotalSessionsTxtFld().should('be.visible')
      curriculumBuilder.getAddNewChapterCloseIcon().click()
      curriculumBuilder.getStartWithThemeBtn().click()
      curriculumBuilder.getTotalSessionsTxtFld().should('be.visible')
      curriculumBuilder.getAddNewChapterCloseIcon().click()
})


  it("Validate school admin is able to add “Total number of sessions” required for the teacher to complete the theme or chapter/EL-4067/ES4067_01",function () {
      curriculumBuilder.getStartWithChapterBtn().click()
      curriculumBuilder.getTotalSessionsTxtFld().clear().type(this.curriculumBuilder.ValidTotalSessionsNum)
  })

  it("Validate school admin is able to enter only Numeric two digits/EL-4067/ES4067_03",function () {
    curriculumBuilder.getTotalSessionsTxtFld().clear().type(this.curriculumBuilder.InvalidTotalSessionsNum)
    curriculumBuilder.getAlert().should('have.text',this.curriculumBuilder.AlertForTotalSessionField)

  })

  it("Validate school admin is able to Add  chapter without selecting Total  session/ periods /EL-4067/ES4067_05",function () {
    curriculumBuilder.getChapterNumTxtFld().type(this.curriculumBuilder.ChapterNum)
    curriculumBuilder.getChapterName().type(this.curriculumBuilder.ChapterName)
    curriculumBuilder.getChapterDescription().type(this.curriculumBuilder.ChapterDescription)
    curriculumBuilder.getTotalSessionsTxtFld().clear()
    curriculumBuilder.getContinueBtn().click()
    curriculumBuilder.getReminderPopup().should('have.text',this.curriculumBuilder.Alert)
})

it("Validate school admin is able to Enter total number of session/ periods required to complete the theme or chapter (mandatory field)/EL-4067/ES4067_04",function () {
  curriculumBuilder.getTotalSessionsTxtFld().type(this.curriculumBuilder.ValidTotalSessionsNum)
  curriculumBuilder.getContinueBtn().click()
  curriculumBuilder.getSuccessfulPopup().should('have.text',this.curriculumBuilder.SuccessPopup)
})


//Post - Condition

})