const adminAccountsPage = require("../../../support/pageObjects/LMS-2/AdminAccountsPage")
const adminPostSetupHomePage = require("../../../support/pageObjects/LMS-2/AdminPostSetupHomePage")

describe("Verify Admin Account Page functionalities", function () {

  before(function () {
    cy.visit(Cypress.env("urlQAPreSetup"))
    cy.viewport(1920, 1080)
    cy.fixture("LMS/AdminLoginCredentials").then(function (validAdminLoginData) {
      cy.AdminPostSetup(validAdminLoginData.fNew, validAdminLoginData.password)
    })
  })

  beforeEach(function () {
    cy.fixture("LMS/mainAdminMasterManagementCredentials").as("masterManagementCredentials")
  })

  it("Validate  school admin is able to create “Role” and provide “Approval” privilege for “Curriculum” domain/EL-4094/ES4094_01", function () {
    adminPostSetupHomePage.getSchoolLnk().click({ force: true })
    adminPostSetupHomePage.getAdminAccountsSectionLnk().click()
    adminAccountsPage.getAddNewBtn().click()
    adminAccountsPage.getEnterDesignationName().type("Super-Admin")
    adminAccountsPage.getCheckBoxLst().check({ force: true })
    adminAccountsPage.getAddRoleBtn().click()
  })

  it("Validate school admin is able to provide “Approval” privilege to School Sub admin user, will get access to Edit, Approve or Reject a curriculum from the curriculum section/EL-4094/ES4094_02", function () {
    cy.wait(2000)
    adminAccountsPage.getRoleLst().each(($e1, index, $list) => {
      const actualText = $e1.text()
      if (actualText.includes("Super-Admin")) {
        adminAccountsPage.getEditRoleBtnLst().eq(index).click({ force: true })
      }
    })
    cy.wait(1000)
    adminAccountsPage.getCurriculumPrevilegeEditCheckBx().should('be.visible')
  })

  it("Validate school admin is able mouse hover on roles Privilege will show view, edit, approval icons/EL-4094/ES4094_03", function () {
    adminAccountsPage.getCloseEditRoleBtn().click()
    adminAccountsPage.getRoleLst().each(($e1, index, $list) => {
      const actualText = $e1.text()
      if (actualText.includes("Super-Admin")) {
        adminAccountsPage.getPrevilegesLst().eq(index).trigger('mouseover')
      }
    })
    adminAccountsPage.getPrevilegesBoardLst().should('be.visible').should('have.length', 18)
  })

  //Post-Condition
  it("Delete the created role", function () {
    adminAccountsPage.getRoleLst().each(($e1, index, $list) => {
      const actualText = $e1.text()
      if (actualText.includes("Super-Admin")) {
        adminAccountsPage.getDeleteRoleLst().eq(index).click()
      }
    })
    cy.contains("Do you want to delete this Role?").should('be.visible')
    adminAccountsPage.getDeleteConfirmBtn().click()
    cy.contains("Admin Role Super-Admin has been deleted.").should('be.visible')
  })

})