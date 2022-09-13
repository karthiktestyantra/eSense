import AdminPostSetupHomePage from "../../../support/pageObjects/LMS-2/AdminPostSetupHomePage";
import AdminGradebookPageNew from "../../../support/pageObjects/LMS-2/AdminGradebookPageNew";

const home = new AdminPostSetupHomePage();
const gradebook = new AdminGradebookPageNew();

describe("Verify Admin Account Page functionalities", function () {
  before(function () {
    cy.visit(Cypress.env("urlMain"))
    cy.fixture("LMS/AdminLoginCredentials").then(function (validAdminLoginData) {
      cy.AdminPostSetup(validAdminLoginData.newUsername, validAdminLoginData.password)
    })
  })
  beforeEach(function () {
    cy.fixture("LMS/AdminReports").then(function (report) {
      this.report = report;
    })
  })

  //pre-condition
  it("Validate user is able to create Gradebook by clicking TopSchool option in the “Create Template” screen/EL-5358/ES5358_01", function () {
    home.getReportsSectionLnk().click({ force: true })
    gradebook.getSiStudentGradebookLnk().click()
    gradebook.getSiCreateTemplateBtn().click()
    gradebook.getSiGradeDrpDwnInCreateTemplate().click()
    gradebook.getSiDrpDwnLstInCreateTemplate().contains(this.report.Grade).click()
    gradebook.getSiSectionDrpDwnInCreateTemplate().click()
    gradebook.getSiDrpDwnLstInCreateTemplate().contains(this.report.Section).click()
    gradebook.getSiNoTermsDrpDwnInCreateTemplate().click({ force: true })
    gradebook.getSiDrpDwnLstInCreateTemplate().contains(this.report.Terms).click()
    gradebook.getSiAddTestTypeInCreateTemplate().click({ force: true })
    cy.wait(1000)
    gradebook.getSiAddTestTermDrpDwn().click({ force: true })
    gradebook.getSiDrpDwnLstInCreateTemplate().contains(this.report.Terms).click({ force: true })
    gradebook.getSiTestTypeDrpDwnInCreateTemplate().click({ force: true })
    gradebook.getSiDrpDwnLstInCreateTemplate().contains(this.report.TestType).click({ force: true })
    gradebook.getSiMaxMarksDrpDwnInCreateTemplate().click({ force: true })
    gradebook.getSiDrpDwnLstInCreateTemplate().contains(this.report.MaxMarks).click({ force: true })
    gradebook.getSiAddSubjectInCreateTemplate().click({ force: true })
    gradebook.getSiSubDrpDwnInAddSub().click({ force: true })
    gradebook.getSiDrpDwnLstInGradebook().contains(this.report.Subject).click({ force: true })
    gradebook.getSiAddTheoryInCreateTemplate().click({ force: true })
    gradebook.getSiTestTypeDrpDwnInAddTheoryCreateTemplate().click({ force: true })
    gradebook.getSiDrpDwnLstInCreateTemplate().contains(this.report.TestType).click({ force: true })
    gradebook.getSiTheoryFldInAddTheoryCreateTemplate().type(this.report.TheoryMark, { force: true })
    gradebook.getSiErrorMsgInCreateTemplate().should('be.visible')
    gradebook.getSiPracticalInAddTheoryCreateTemplate().type(this.report.PracticalMark, { force: true })
    gradebook.getSiErrorMsgInCreateTemplate().should('not.be.visible')
    cy.scrollTo('bottom')
    gradebook.getSiAddActivityInCreateTemplate().click({ force: true })
    gradebook.getSiActivityFldInCreateTemplate().type(this.report.Activity, { force: true })
    gradebook.getSiSaveAndPreviewBtnInCreateTemplate().should('be.enabled')
  })

  it("Validate user selects “TopSchool” radio button the preloaded template for the selected grade will be listed/EL-5358/ES5358_02", function () {
    cy.go('back')
    cy.wait(1000)
    gradebook.getSiCreateTemplateBtn().click()
    gradebook.getSiTopSchlRadioBtnInCreateTemplatePage().click({ force: true })
    gradebook.getSiGradeDrpDwnInCreateTemplate().click()
    gradebook.getSiDrpDwnLstInCreateTemplate().contains(this.report.Grade).click()
    gradebook.getSiActivityFldInCreateTemplate().should('have.length', 2)
  })

  it("Validate whether in the preview gradebook template, the following option is available for the user -Edit and create new/EL-5358/ES5358_05", function () {
    gradebook.getSiEditBtnInCreateTemplatePageInTopschool().should('be.enabled').and('be.visible')
    gradebook.getSiCreateNwCreateTemplatePageInTopSchl().should('be.enabled').and('be.visible')
  })

  it("Validate user click on “Edit” button, navigate to preview the gradebook template/EL-5358/ES5358_04", function () {
    gradebook.getSiEditBtnInCreateTemplatePageInTopschool().click()
    cy.contains("Edit Gradebook undefined").should('be.visible')
  })
})