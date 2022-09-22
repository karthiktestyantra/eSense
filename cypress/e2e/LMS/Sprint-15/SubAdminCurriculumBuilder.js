const adminPostSetupHomePage = require("../../../support/pageObjects/LMS-2/AdminPostSetupHomePage")
const adminPostSetupCurriculumBuilderPage = require("../../../support/pageObjects/LMS-2/AdminPostSetupCurriculumBuilderPage")

describe("Verify Sub Admin Curriculum Page functionalities", function () {

  before(function () {
    cy.clearLocalStorage()
    cy.clearCookies()
    cy.visit(Cypress.env("urlQAPreSetup"))
    cy.fixture("LMS/AdminLoginCredentials").then(function (validAdminLoginData) {
      cy.AdminPostSetup(validAdminLoginData.fNew, validAdminLoginData.password)
    })
  })

  this.beforeEach(function () {
    cy.fixture("LMS/sprint14CurriculumBuilder").as("curriculumBuilder")
  })

  it("To create Curriculum", function () {
    adminPostSetupHomePage.getSchoolLnk().click({ force: true })
    adminPostSetupHomePage.getCurriculumBuilderSectionLnk().click()
    adminPostSetupCurriculumBuilderPage.getTitle().should('have.text', this.adminPostSetupCurriculumBuilderPage.Title)
    adminPostSetupCurriculumBuilderPage.getGradeLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.adminPostSetupCurriculumBuilderPage.Grade)) {
        cy.get('td button').eq(index).click()
      }
    })
    adminPostSetupCurriculumBuilderPage.getSubLstUnderGrade().each(($e2, index, $list) => {
      const sub = $e2.text()
      if (sub.includes(this.adminPostSetupCurriculumBuilderPage.SubjectName)) {
        adminPostSetupCurriculumBuilderPage.getEditCurriculumBtnLst().eq(index).click()
        return false;
      }
    })
    adminPostSetupCurriculumBuilderPage.getStartWithChapterBtn().click()
    adminPostSetupCurriculumBuilderPage.getChapterNumTxtFld().type(this.adminPostSetupCurriculumBuilderPage.ChapterNum)
    adminPostSetupCurriculumBuilderPage.getChapterName().type(this.adminPostSetupCurriculumBuilderPage.ChapterName)
    adminPostSetupCurriculumBuilderPage.getChapterDescription().type(this.adminPostSetupCurriculumBuilderPage.ChapterDescription)
    adminPostSetupCurriculumBuilderPage.getTotalSessionsTxtFld().clear().type(this.adminPostSetupCurriculumBuilderPage.ValidTotalSessionsNum)
    adminPostSetupCurriculumBuilderPage.getContinueBtn().click()
    adminPostSetupCurriculumBuilderPage.getSuccessfulPopup().should('have.text', this.adminPostSetupCurriculumBuilderPage.SuccessPopup)
    adminPostSetupCurriculumBuilderPage.getMarkCurriculumCheckbox().click()
    adminPostSetupCurriculumBuilderPage.getSubmitForApprovalBtn().click()
    adminPostSetupCurriculumBuilderPage.getApprovalListName().contains(this.adminPostSetupCurriculumBuilderPage.SubAdminName).click()
    adminPostSetupCurriculumBuilderPage.getSubmitApprovalSubmitBtn().click()
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
    adminPostSetupHomePage.getSchoolLnk().click({ force: true })
    adminPostSetupHomePage.getCurriculumBuilderSectionLnk().click()
    adminPostSetupCurriculumBuilderPage.getTitle().should('have.text', this.adminPostSetupCurriculumBuilderPage.Title)
    adminPostSetupCurriculumBuilderPage.getGradeLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.adminPostSetupCurriculumBuilderPage.SubAdminGrade)) {
        adminPostSetupCurriculumBuilderPage.getSubAdminViewDtlsDrpDwnLst().eq(index).click()
        return false
      }
    })
    adminPostSetupCurriculumBuilderPage.getSubAdminViewDtlsSubjectLst().each(($e2, index, $list) => {
      const text = $e2.text()
      if (text.includes("Tamil")) {
        adminPostSetupCurriculumBuilderPage.getSubAdminViewDtlsViewIconLst().eq(index).click()
        return false;
      }
    })
    cy.wait(2000)
    adminPostSetupCurriculumBuilderPage.getSubAdminEditBtn().click()
    adminPostSetupCurriculumBuilderPage.getEditAndDeleteIconsLst().should('be.visible')
  })

  it("User is able to create the theme", function () {
    adminPostSetupCurriculumBuilderPage.getAddThemeBtn().click()
    adminPostSetupCurriculumBuilderPage.getChapterNumTxtFld().type(this.adminPostSetupCurriculumBuilderPage.ChapterNum)
    adminPostSetupCurriculumBuilderPage.getSubAdminChapterName().type(this.adminPostSetupCurriculumBuilderPage.ChapterName)
    adminPostSetupCurriculumBuilderPage.getChapterDescription().type(this.adminPostSetupCurriculumBuilderPage.ChapterDescription)
    adminPostSetupCurriculumBuilderPage.getTotalSessionsTxtFld().type(this.adminPostSetupCurriculumBuilderPage.ValidTotalSessionsNum)
    adminPostSetupCurriculumBuilderPage.getContinueBtn().click()
    cy.wait(2000)
  })

  it("To validate school sub-admin is able to delete the curriculum/EL-4870/ES4870_02", function () {
    adminPostSetupCurriculumBuilderPage.getChapterLst().each(($e1, index, $list) => {
      const txt = $e1.text()
      if (txt.includes(this.adminPostSetupCurriculumBuilderPage.ChapterName)) {
        adminPostSetupCurriculumBuilderPage.getChapterDltBtn().eq(index).click({ force: true })
      }
    })
    adminPostSetupCurriculumBuilderPage.getDeleteChapterBtn().click()
  })

  //post - Condition
  it("To delete the created theme", function () {
    cy.clearLocalStorage()
    cy.visit("https://liverpool.staging.topschool.co.in/")
    cy.fixture("LMS/AdminLoginCredentials").then(function (validAdminLoginData) {
      cy.AdminPostSetup(validAdminLoginData.fNew, validAdminLoginData.password)
    })
    adminPostSetupHomePage.getSchoolLnk().click({ force: true })
    adminPostSetupHomePage.getCurriculumBuilderSectionLnk().click()
    adminPostSetupCurriculumBuilderPage.getTitle().should('have.text', this.adminPostSetupCurriculumBuilderPage.Title)
    adminPostSetupCurriculumBuilderPage.getGradeLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.adminPostSetupCurriculumBuilderPage.Grade)) {
        cy.get('td button').eq(index).click()
      }
    })
    adminPostSetupCurriculumBuilderPage.getSubLstUnderGrade().each(($e2, index, $list) => {
      const sub = $e2.text()
      if (sub.includes(this.adminPostSetupCurriculumBuilderPage.SubjectName)) {
        adminPostSetupCurriculumBuilderPage.getEditCurriculumBtnLst().eq(index).click()
        return false;
      }
    })
    adminPostSetupCurriculumBuilderPage.getChapterLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.adminPostSetupCurriculumBuilderPage.ChapterName)) {
        adminPostSetupCurriculumBuilderPage.getChapterDltBtn().eq(index).click()
      }
    })
    cy.get('.MuiButton-contained').click()
  })
})