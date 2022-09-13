import AdminAccountsPage from "../../../support/pageObjects/LMS-2/AdminAccountsPage";
import AdminPostSetupHomePage from "../../../support/pageObjects/LMS-2/AdminPostSetupHomePage";

const home = new AdminPostSetupHomePage();
const account = new AdminAccountsPage();

describe("Verify Admin Account Page functionalities", function () {

  before(function () {
    cy.visit(Cypress.env("urlQAPreSetup"))
    cy.fixture("LMS/AdminLoginCredentials").then(function (validAdminLoginData) {
      cy.AdminPostSetup(validAdminLoginData.fNew, validAdminLoginData.password)
    })
  })

  beforeEach(function () {
    cy.viewport(1920, 1080)
    cy.fixture("LMS/mainAdminMasterManagementCredentials").then(function (masterManagementCredentials) {
      this.masterManagementCredentials = masterManagementCredentials;
    })
  })

  it("Validate  school admin is able to create “Role” and provide “Approval” privilege for “Curriculum” domain/EL-4094/ES4094_01", function () {
    home.getSchoolLnk().click({ force: true })
    home.getAdminAccountsSectionLnk().click()
    account.getAddNewBtn().click()
    account.getEnterDesignationName().type("Super-Admin")
    account.getCheckBoxLst().check({ force: true })
    account.getAddRoleBtn().click()
  })
  it("Validate school admin is able to provide “Approval” privilege to School Sub admin user, will get access to Edit, Approve or Reject a curriculum from the curriculum section/EL-4094/ES4094_02", function () {
    cy.wait(2000)
    account.getRoleLst().each(($e1, index, $list) => {
      const actualText = $e1.text()
      if (actualText.includes("Super-Admin")) {
        account.getEditRoleBtnLst().eq(index).click({ force: true })
      }
    })
    cy.wait(1000)
    account.getCurriculumPrevilegeEditCheckBx().should('be.visible')
  })
  it("Validate school admin is able mouse hover on roles Privilege will show view, edit, approval icons/EL-4094/ES4094_03", function () {
    account.getCloseEditRoleBtn().click()
    account.getRoleLst().each(($e1, index, $list) => {
      const actualText = $e1.text()
      if (actualText.includes("Super-Admin")) {
        account.getPrevilegesLst().eq(index).trigger('mouseover')
      }
    })
    account.getPrevilegesBoardLst().should('be.visible').should('have.length', 13)
  })
})