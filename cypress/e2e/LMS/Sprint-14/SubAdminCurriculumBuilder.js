const adminAccountsPage = require("../../../support/pageObjects/LMS-2/AdminAccountsPage")
const adminPostSetupCurriculumBuilderPage = require("../../../support/pageObjects/LMS-2/AdminPostSetupCurriculumBuilderPage")
const adminPostSetupHomePage = require("../../../support/pageObjects/LMS-2/AdminPostSetupHomePage")

describe("Verify Sub Admin Curriculum Page functionalities", function () {

  before(function () {
    cy.clearLocalStorage()
    cy.clearCookies()
    cy.visit(Cypress.env("urlQAPreSetup"))
    cy.fixture("LMS/AdminLoginCredentials").then(function (validAdminLoginData) {
      cy.AdminPostSetup(validAdminLoginData.fNew, validAdminLoginData.password)
    })
  })

  beforeEach(function () {
    cy.fixture("LMS/sprint14CurriculumBuilder").as("curriculumBuilder")
  })

  //Sprint 14
  it("To create Curriculum", function () {
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
  
  it("Validate any School Sub Admin [HOD] who has “Approval” privilege for “Curriculum” module will get access to view and approve Curriculum builder/EL-4108/ES4108_01", function () {
    cy.clearLocalStorage()
    cy.visit(Cypress.env("urlQAPreSetup"))
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
    adminPostSetupCurriculumBuilderPage.getSubAdminApproveBtn().should('be.enabled')
  })

  it("Validate whether Curriculum which requires this User “Approval” will show status as “Approval pending” as status under each subject/EL-4108/ES4108_02", function () {
    adminPostSetupCurriculumBuilderPage.getGoBackBtn().click()
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
        adminPostSetupCurriculumBuilderPage.getApprovalPendingLst().eq(index).should('have.text', "Approval Pending")
        return false;
      }
    })
  })

  it("Validate school sub admin click on “View” on list will take to Curriculum detailed view/EL-4108/ES4108_03", function () {
    adminPostSetupCurriculumBuilderPage.getSubAdminViewDtlsSubjectLst().each(($e2, index, $list) => {
      const text = $e2.text()
      if (text.includes("Tamil")) {
        adminPostSetupCurriculumBuilderPage.getSubAdminViewDtlsViewIconLst().eq(index).click()
        return false;
      }
    })
    adminPostSetupCurriculumBuilderPage.getCurriculumPageTitle().should('be.visible')
  })

  it("Validate Curriculum that are waiting for approval will have action bar below the screen showing “Approve” and “Reject” button/EL-4108/ES4108_04", function () {
    cy.wait(2000)
    adminPostSetupCurriculumBuilderPage.getSubAdminEditBtn().should('be.visible').should('be.enabled')
    adminPostSetupCurriculumBuilderPage.getSubAdminRejectBtn().should('be.visible').should('be.enabled')
  })

  it("Validate school sub admin is able to click on Approve button/EL-4108/ES4108_05", function () {
    adminPostSetupCurriculumBuilderPage.getSubAdminApproveBtn().click()
    cy.contains("Approved Successfully").should('be.visible')
  })

  it("Validate whether after notification popup is populated will auto close and return to page showing approved status curriculum view page/EL-4108/ES4108_07", function () {
    cy.wait(3000)
    adminPostSetupCurriculumBuilderPage.getApprovalCurriculumMsg().should('be.visible')
  })

  it("Validate whether approved curriculum will have “Undo” to revert the action made previous on the curriculum record/EL-4108/ES4108_08", function () {
    adminPostSetupCurriculumBuilderPage.getApprovalUndoBtn().should('be.enabled').click()
  })

  it("Validate School sub admin click on “undo” will take Subject to previous status “Awaiting approval” take to list page/EL-4108/ES4108_10", function () {
    adminPostSetupCurriculumBuilderPage.getGradeLst().should('be.visible')
  })

  it("Validtate User again can view Subjects list, click on “View” icon to view detailed view of curriculum to take necessary actions/EL-4108/ES4108_11", function () {
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
    adminPostSetupCurriculumBuilderPage.getCurriculumPageTitle().should('be.visible')
    cy.wait(2000)
    adminPostSetupCurriculumBuilderPage.getSubAdminApproveBtn().should('be.visible').should('be.enabled')
    adminPostSetupCurriculumBuilderPage.getSubAdminEditBtn().should('be.visible').should('be.enabled')
    adminPostSetupCurriculumBuilderPage.getSubAdminRejectBtn().should('be.visible').should('be.enabled')
  })

  it("To validate school sub-admin with edit access is able to edit the approval/EL-4110/ES4110_09", function () {
    adminPostSetupCurriculumBuilderPage.getSubAdminEditBtn().click()
    adminPostSetupCurriculumBuilderPage.getEditAndDeleteIconsLst().should('be.visible')
  })

  it("To validate school sub-admin is able to mark complete and send self approval request/EL-4110/ES4110_10", function () {
    adminPostSetupCurriculumBuilderPage.getMarkCurriculumCheckbox().click()
    adminPostSetupCurriculumBuilderPage.getSubmitForApprovalBtn().click()
    adminPostSetupCurriculumBuilderPage.getApprovalListName().contains(this.adminPostSetupCurriculumBuilderPage.SubAdminName).click()
    adminPostSetupCurriculumBuilderPage.getSubmitApprovalSubmitBtn().click()
    cy.contains("Succesfully submitted for approval!").should('be.visible')
    cy.wait(2000)
  })

  it("To validate school sub-admin with no edit and approval access is unable to view the action icons/EL-4110/ES4110_04", function () {
    cy.clearLocalStorage()
    cy.visit(Cypress.env("urlQAPreSetup"))
    cy.fixture("LMS/AdminLoginCredentials").then(function (validAdminLoginData) {
      cy.AdminPostSetup(validAdminLoginData.fNew, validAdminLoginData.password)
    })
    adminPostSetupHomePage.getSchoolLnk().click({ force: true })
    adminPostSetupHomePage.getAdminAccountsSectionLnk().click()
    adminAccountsPage.getRoleLst().each(($e1, index, $list) => {
      const actualText = $e1.text()
      if (actualText == "HOD") {
        adminAccountsPage.getEditRoleBtnLst().eq(index).trigger('click')
      }
    })
    adminAccountsPage.getCurriculumEditCheckbox().uncheck()
    adminAccountsPage.getAddRoleBtn().click()
    cy.contains("Role details updated successfully!").should('be.visible')
    cy.wait(2000)
    cy.clearLocalStorage()
    cy.clearCookies()
    cy.visit("https://liverpool.staging.topschool.co.in/")
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
    cy.wait(1000)
    adminPostSetupCurriculumBuilderPage.getSubAdminEditBtn().should('not.exist')
  })
  //Post-Condition
  it("click on all checkbox for back to default", function () {
    cy.clearLocalStorage()
    cy.visit("https://liverpool.staging.topschool.co.in/")
    cy.fixture("LMS/AdminLoginCredentials").then(function (validAdminLoginData) {
      cy.AdminPostSetup(validAdminLoginData.fNew, validAdminLoginData.password)
    })
    adminPostSetupHomePage.getSchoolLnk().click({ force: true })
    adminPostSetupHomePage.getAdminAccountsSectionLnk().click()
    adminAccountsPage.getRoleLst().each(($e1, index, $list) => {
      const actualText = $e1.text()
      if (actualText == "HOD") {
        adminAccountsPage.getEditRoleBtnLst().eq(index).trigger('click')
      }
    })
    adminAccountsPage.getCheckBoxLst().check({ force: true })
    adminAccountsPage.getAddRoleBtn().click()
    cy.contains("Role details updated successfully!").should('be.visible')
  })

  //post - Condition
  it("To delete the created theme", function () {
    cy.go('back')
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
