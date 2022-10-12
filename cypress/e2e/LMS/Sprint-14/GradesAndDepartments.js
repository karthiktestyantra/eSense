const adminGradePage = require("../../../support/pageObjects/LMS-2/AdminGradePage")
const adminPostSetupHomePage = require("../../../support/pageObjects/LMS-2/AdminPostSetupHomePage")

describe("Verify Grades and department page functionalities - Sprint 14(EL-3988)", function () {

  before(function () {
    cy.visit(Cypress.env("urlQAPreSetup"))
    cy.fixture("LMS/AdminLoginCredentials").then(function (validAdminLoginData) {
      cy.AdminPostSetup(validAdminLoginData.fNew, validAdminLoginData.password)
    })
  })

  beforeEach(function () {
    cy.fixture("LMS/sprint14CurriculumBuilder").as("curriculumBuilder")
  })

  it("Validate admin Click on “Grades and subject ” Tab, Will show all list of Grades along with its section/EL-3988/ES3988_02", function () {
    adminPostSetupHomePage.getSchoolLnk().click({ force: true })
    adminPostSetupHomePage.getGradesAndDeptSectionBtn().click()
    adminPostSetupHomePage.getGradesAndDeptSectionBtn2().click()
    adminGradePage.getGradeLst().should('be.visible')
  })

  it("Validate admin click on Quick link, “Grade and Departments” page with Academic Setup Grades and Department page in an editable mode with pagination/EL-3988/ES3988_01", function () {
    adminGradePage.getGradeLst().each(($e1, index, $list) => {
      const actualText = $e1.text()
      if (actualText.includes("Grade 3")) {
        cy.wrap($e1).click({ force: true })
        adminGradePage.getEditableGradeLst().should('be.enabled')
      }
    })
  })

  it("Validate admin click on particular Section '+' button, Add new section/Edit  Pop-up screen will be displayed/EL-3988/ES3988_03", function () {
    adminPostSetupHomePage.getGradesAndDeptSectionBtn2().click()
    adminGradePage.getGradeLst().each(($e2, index, $list) => {
      const actualText = $e2.text()
      if (actualText.includes("Grade 8")) {
        adminGradePage.getSectionAddBtn().eq(index).click({ force: true })
      }
    })
    adminGradePage.getAddNewSectionPopupTitle().should('contain', this.curriculumBuilder.AddSectionTitle)
  })

  it("Validate admin click on the “Class Details” Quick link will navigate to Overview “Class Dashboard” as per new UI Screen/EL-3988/ES3988_04", function () {
    adminGradePage.getAddSectionCloseBtn().click()
    adminGradePage.getSectionsLst().eq(0).click()
    adminGradePage.getClassDetailBtnInAddSectionPopup().click()
    adminGradePage.getClassDetailsTitle().contains(this.curriculumBuilder.ClassDetailTitle)
  })
})