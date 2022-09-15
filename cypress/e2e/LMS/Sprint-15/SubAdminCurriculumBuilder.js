import AdminPostSetupHomePage from "../../../support/pageObjects/LMS-2/AdminPostSetupHomePage";
import AdminPostSetupCurriculumBuilderPage from "../../../support/pageObjects/LMS-2/AdminPostSetupCurriculumBuilderPage";
import AdminAccountsPage from "../../../support/pageObjects/LMS-2/AdminAccountsPage";


const home = new AdminPostSetupHomePage();
const curriculumBuilder = new AdminPostSetupCurriculumBuilderPage();
const account = new AdminAccountsPage();


describe("Verify Sub Admin Curriculum Page functionalities", function () {
  before(function () {
    cy.visit(Cypress.env("urlQAPreSetup"))
    cy.fixture("LMS/AdminLoginCredentials").then(function (validAdminLoginData) {
      cy.AdminPostSetup(validAdminLoginData.fNew, validAdminLoginData.password)
    })
  })
  this.beforeEach(function () {
    cy.fixture("LMS/sprint14CurriculumBuilder").then(function (curriculumBuilder) {
      this.curriculumBuilder = curriculumBuilder;
    })
  })

  it("To create Curriculum", function () {
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
    curriculumBuilder.getChapterNumTxtFld().type(this.curriculumBuilder.ChapterNum)
    curriculumBuilder.getChapterName().type(this.curriculumBuilder.ChapterName)
    curriculumBuilder.getChapterDescription().type(this.curriculumBuilder.ChapterDescription)
    curriculumBuilder.getTotalSessionsTxtFld().clear().type(this.curriculumBuilder.ValidTotalSessionsNum)
    curriculumBuilder.getContinueBtn().click()
    curriculumBuilder.getSuccessfulPopup().should('have.text', this.curriculumBuilder.SuccessPopup)
    curriculumBuilder.getMarkCurriculumCheckbox().click()
    curriculumBuilder.getSubmitForApprovalBtn().click()
    curriculumBuilder.getApprovalListName().contains(this.curriculumBuilder.SubAdminName).click()
    curriculumBuilder.getSubmitApprovalSubmitBtn().click()
    cy.contains("Succesfully submitted for approval!").should('be.visible')
    cy.wait(2000)
  })

  //Sprint 15
  it("To validate school sub-admin is able to view the edit and delete buttons for curriculum/EL-4870/ES4870_01", function () {
    cy.clearLocalStorage()
    cy.visit(Cypress.env('urlQAPreSetup'))
    cy.fixture("LMS/AdminLoginCredentials").then(function (validAdminLoginData) {
      cy.AdminPostSetup(validAdminLoginData.subAdminUsername, validAdminLoginData.subAdminPassword)
    })
    home.getSchoolLnk().click({ force: true })
    home.getCurriculumBuilderSectionLnk().click()
    curriculumBuilder.getTitle().should('have.text', this.curriculumBuilder.Title)
    curriculumBuilder.getGradeLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.curriculumBuilder.SubAdminGrade)) {
        curriculumBuilder.getSubAdminViewDtlsDrpDwnLst().eq(index).click()
        return false
      }
    })
    curriculumBuilder.getSubAdminViewDtlsSubjectLst().each(($e2, index, $list) => {
      const text = $e2.text()
      if (text.includes("Tamil")) {
        curriculumBuilder.getSubAdminViewDtlsViewIconLst().eq(index).click()
        return false;
      }
    })
    cy.wait(2000)
    curriculumBuilder.getSubAdminEditBtn().click()
    curriculumBuilder.getEditAndDeleteIconsLst().should('be.visible')
  })

  it("User is able to create the theme", function () {
    curriculumBuilder.getAddThemeBtn().click()
    curriculumBuilder.getChapterNumTxtFld().type(this.curriculumBuilder.ChapterNum)
    curriculumBuilder.getSubAdminChapterName().type(this.curriculumBuilder.ChapterName)
    curriculumBuilder.getChapterDescription().type(this.curriculumBuilder.ChapterDescription)
    curriculumBuilder.getTotalSessionsTxtFld().type(this.curriculumBuilder.ValidTotalSessionsNum)
    curriculumBuilder.getContinueBtn().click()
    cy.wait(2000)
  })

  it("To validate school sub-admin is able to delete the curriculum/EL-4870/ES4870_02", function () {
    curriculumBuilder.getChapterLst().each(($e1, index, $list) => {
      const txt = $e1.text()
      if (txt.includes(this.curriculumBuilder.ChapterName)) {
        curriculumBuilder.getChapterDltBtn().eq(index).click({ force: true })
      }
    })
    curriculumBuilder.getDeleteChapterBtn().click()
  })

  //post - Condition
  it("To delete the created theme", function () {
    cy.clearLocalStorage()
    cy.visit("https://liverpool.staging.topschool.co.in/")
    cy.fixture("LMS/AdminLoginCredentials").then(function (validAdminLoginData) {
      cy.AdminPostSetup(validAdminLoginData.fNew, validAdminLoginData.password)
    })
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
    curriculumBuilder.getChapterLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.curriculumBuilder.ChapterName)) {
        curriculumBuilder.getChapterDltBtn().eq(index).click()
      }
    })
    cy.get('.MuiButton-contained').click()
  })
})