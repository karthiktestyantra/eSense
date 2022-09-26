const adminPostSetupHomePage = require("../../../support/pageObjects/LMS-2/AdminPostSetupHomePage")
const adminGradebookPageNew = require("../../../support/pageObjects/LMS-2/AdminGradebookPageNew")

describe("Verify Admin student grade book functionalities", function () {

  before(function () {
    cy.visit(Cypress.env("urlMain"))
    cy.fixture("LMS/AdminLoginCredentials").then(function (validAdminLoginData) {
      cy.AdminPostSetup(validAdminLoginData.newUsername, validAdminLoginData.password)
    })
  })

  beforeEach(function () {
    cy.fixture("LMS/AdminReports").as("report")
  })

  //pre-condition
  it("Validate user is able to create Gradebook by clicking TopSchool option in the “Create Template” screen/EL-5358/ES5358_01", function () {
    adminPostSetupHomePage.getReportsSectionLnk().click({ force: true })
    adminGradebookPageNew.getSiStudentGradebookLnk().click({force:true})
    adminGradebookPageNew.getSiCreateTemplateBtn().click()
    adminGradebookPageNew.getSiGradeDrpDwnInCreateTemplate().click()
    adminGradebookPageNew.getSiDrpDwnLstInCreateTemplate().contains(this.report.Grade).click()
    adminGradebookPageNew.getSiSectionDrpDwnInCreateTemplate().click()
    adminGradebookPageNew.getSiDrpDwnLstInCreateTemplate().contains(this.report.Section).click()
    adminGradebookPageNew.getSiNoTermsDrpDwnInCreateTemplate().click({ force: true })
    adminGradebookPageNew.getSiDrpDwnLstInCreateTemplate().contains(this.report.Terms).click()
    adminGradebookPageNew.getSiAddTestTypeInCreateTemplate().click({ force: true })
    cy.wait(1000)
    adminGradebookPageNew.getSiAddTestTermDrpDwn().click({ force: true })
    adminGradebookPageNew.getSiDrpDwnLstInCreateTemplate().contains(this.report.Terms).click({ force: true })
    adminGradebookPageNew.getSiTestTypeDrpDwnInCreateTemplate().click({ force: true })
    adminGradebookPageNew.getSiDrpDwnLstInCreateTemplate().contains(this.report.TestType).click({ force: true })
    adminGradebookPageNew.getSiMaxMarksDrpDwnInCreateTemplate().click({ force: true })
    adminGradebookPageNew.getSiDrpDwnLstInCreateTemplate().contains(this.report.MaxMarks).click({ force: true })
    adminGradebookPageNew.getSiAddSubjectInCreateTemplate().click({ force: true })
    adminGradebookPageNew.getSiSubDrpDwnInAddSub().click({ force: true })
    adminGradebookPageNew.getSiDrpDwnLstInGradebook().contains(this.report.Subject).click({ force: true })
    adminGradebookPageNew.getSiAddTheoryInCreateTemplate().click({ force: true })
    adminGradebookPageNew.getSiTestTypeDrpDwnInAddTheoryCreateTemplate().click({ force: true })
    adminGradebookPageNew.getSiDrpDwnLstInCreateTemplate().contains(this.report.TestType).click({ force: true })
    adminGradebookPageNew.getSiTheoryFldInAddTheoryCreateTemplate().type(this.report.TheoryMark, { force: true })
    adminGradebookPageNew.getSiErrorMsgInCreateTemplate().should('be.visible')
    adminGradebookPageNew.getSiPracticalInAddTheoryCreateTemplate().type(this.report.PracticalMark, { force: true })
    adminGradebookPageNew.getSiErrorMsgInCreateTemplate().should('not.be.visible')
    cy.scrollTo('bottom')
    adminGradebookPageNew.getSiAddActivityInCreateTemplate().click({ force: true })
    adminGradebookPageNew.getSiActivityFldInCreateTemplate().type(this.report.Activity, { force: true })
    adminGradebookPageNew.getSiSaveAndPreviewBtnInCreateTemplate().should('be.enabled')
  })

  it("Validate user selects “TopSchool” radio button the preloaded template for the selected grade will be listed/EL-5358/ES5358_02", function () {
    cy.go('back')
    cy.wait(1000)
    adminGradebookPageNew.getSiCreateTemplateBtn().click()
    adminGradebookPageNew.getSiTopSchlRadioBtnInCreateTemplatePage().click({ force: true })
    adminGradebookPageNew.getSiGradeDrpDwnInCreateTemplate().click()
    adminGradebookPageNew.getSiDrpDwnLstInCreateTemplate().contains(this.report.Grade).click()
    adminGradebookPageNew.getSiActivityFldInCreateTemplate().should('have.length', 2)
  })

  it("Validate whether in the preview gradebook template, the following option is available for the user -Edit and create new/EL-5358/ES5358_05", function () {
    adminGradebookPageNew.getSiEditBtnInCreateTemplatePageInTopschool().should('be.enabled').and('be.visible')
    adminGradebookPageNew.getSiCreateNwCreateTemplatePageInTopSchl().should('be.enabled').and('be.visible')
  })

  it("Validate user click on “Edit” button, navigate to preview the gradebook template/EL-5358/ES5358_04", function () {
    adminGradebookPageNew.getSiEditBtnInCreateTemplatePageInTopschool().click()
    cy.contains("Edit Gradebook undefined").should('be.visible')
  })
})