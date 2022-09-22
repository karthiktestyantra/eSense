const mainAdminHomePage = require("../../../support/pageObjects/LMS-2/MainAdminHomePage")
const mainAdminUserManagementPage = require("../../../support/pageObjects/LMS-2/MainAdminUserManagementPage")
const mainAdminMasterManagementPage = require("../../../support/pageObjects/LMS-2/mainAdminMasterManagementPage")

describe("Verify User Management Page functionalities/Sprint-15", function () {

  before(function () {
    cy.visit(Cypress.env("url"))
    cy.viewport(1920, 1080)
    cy.fixture("LMS/mainAdminLoginCredentials").then(function (validAdminLoginData) {
      cy.Mainlogin(validAdminLoginData.username, validAdminLoginData.password)
    })
  })

  beforeEach(function () {
    cy.fixture("LMS/mainAdminUserManagementPageCredentials").as("userManageCredentials")
    cy.fixture("LMS/mainAdminMasterManagementCredentials").as("masterManagementCredentials")
  })

  it("To validate esense admin is able to go to User management page/EL-4148/ES4148_01", function () {
    mainAdminHomePage.getSystemConfigDrpDwn().click()
    mainAdminHomePage.getRolesManagementLnk().click()
    mainAdminUserManagementPage.getTitle().should('have.text', this.userManageCredentials.Title)
    // it("To validate esense admin is able to click on “Add User” button and open profile builder popup/EL-4148/ES4148_02",function () {
    mainAdminUserManagementPage.getAddNewBtn().click()
    mainAdminUserManagementPage.getAddNewUserPopUpTitle().should('have.text', this.userManageCredentials.PopUpTitle)
    // it("To validate esense admin is able to add new user./EL-4148/ES4148_10",function () {
    mainAdminUserManagementPage.getUserManagementFirstName().type(this.userManageCredentials.firstname)
    mainAdminUserManagementPage.getUserManagementLastName().type(this.userManageCredentials.lastname)
    mainAdminUserManagementPage.getUserManagementEmailId().type(this.userManageCredentials.emailid)
    mainAdminUserManagementPage.getUserManagementContactNum().type(this.userManageCredentials.contactnumber)
    mainAdminUserManagementPage.getUserManagementSelectRoleDrpDwn().select(this.userManageCredentials.DrpDwnValue1)
    mainAdminUserManagementPage.getUserManagementSubmitBtn().click()
    mainAdminUserManagementPage.getUserAddedPopup().should('have.text', this.userManageCredentials.UserAddedSuccessPopUp)
    mainAdminUserManagementPage.getUserAddedPopupBtn().click()
    //it("To validate esense admin is able to add new role/EL-4146/ES4146_07",function(){
    mainAdminUserManagementPage.getRolesTabLnk().click()
    mainAdminUserManagementPage.getAddRoleBtn().click()
    mainAdminUserManagementPage.getRoleNameFld().type(this.userManageCredentials.DuplicateRole)
    mainAdminUserManagementPage.getELADomainMappingCreateCheckBx().check()
    mainAdminUserManagementPage.getELADomainMappingReadCheckBx().check()
    mainAdminUserManagementPage.getELADomainMappingUpdateCheckBx().check()
    mainAdminUserManagementPage.getELADomainMappingDeleteCheckBx().check()
    mainAdminUserManagementPage.getELACompetencyCreateCheckBx().check()
    mainAdminUserManagementPage.getELACompetencyReadCheckBx().check()
    mainAdminUserManagementPage.getContentTypeCreateCheckBx().check()
    mainAdminUserManagementPage.getContentTypeReadCheckBx().check()
    mainAdminUserManagementPage.getContentTypeUpdateCheckBx().check()
    mainAdminUserManagementPage.getUsersAndRolesCreateCheckBx().check()
    mainAdminUserManagementPage.getUsersAndRolesReadCheckBx().check()
    mainAdminUserManagementPage.getUsersAndRolesUpdateCheckBx().check()
    mainAdminUserManagementPage.getRoleSubmitBtn().click({ force: true })
    mainAdminUserManagementPage.getUserAddedPopup().should('have.text', this.userManageCredentials.RoleAddedSuccessPopUp)
    mainAdminUserManagementPage.getUserAddedPopupBtn().click()
    //it("To validate esense admin is able to change role for an user/EL-4149/ES4149_08",function(){
    mainAdminUserManagementPage.getUsersTabLnk().click()
    cy.go('back')
    cy.wait(1000)
    cy.go('forward')
    cy.wait(1000)
    mainAdminUserManagementPage.getUsersLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.userManageCredentials.firstname)) {
        mainAdminUserManagementPage.getActionsLst().eq(index).scrollIntoView().click({ force: true })
      }
    })
    cy.wait(1000)
    mainAdminUserManagementPage.getEditBtn().click()
    mainAdminUserManagementPage.getEditPopupTitle().should('have.text', this.userManageCredentials.EditUserPopupTitle)
    mainAdminUserManagementPage.getUserManagementSelectRoleDrpDwn().select(this.userManageCredentials.DuplicateRole)
    // it("To validate esense admin is able to edit and save the changes of an user/EL-4149/ES4149_09",function(){
    mainAdminUserManagementPage.getUserManagementSubmitBtn().click({ force: true })
    mainAdminUserManagementPage.getUserAddedPopup().should('have.text', this.userManageCredentials.UserUpdatedSuccessPopUp)
    mainAdminUserManagementPage.getUserAddedPopupBtn().click()
    mainAdminUserManagementPage.getUserIdLst().each(($e2, index, $list) => {
      const Ids = $e2.text()
      if (Ids.includes(this.userManageCredentials.firstname)) {
        const ids = $e2.text().toString();
        //it("To validate esense sub-admin is able to access and view-only the allowed modules/EL-4864/ES4864_02",function(){
        mainAdminUserManagementPage.getProfileImg().click()
        mainAdminUserManagementPage.getSignOutBtn().click()
        cy.Mainlogin(ids, "Test@12345")
      }
    })
    mainAdminHomePage.getSystemConfigDrpDwn().click()
    cy.wait(1000)
    mainAdminHomePage.getMasterManagementLnk().click({ force: true })
    mainAdminMasterManagementPage.getTitle().should('have.text', this.masterManagementCredentials.Title)
    mainAdminMasterManagementPage.getDomainMappingTabLnk().click()
    cy.wait(1000)
    mainAdminMasterManagementPage.getActionsLst().should('be.visible')
    mainAdminMasterManagementPage.getCompetencyTabLnk().click()
    cy.wait(1000)
    mainAdminMasterManagementPage.getActionsLst().should('not.exist')
    //it("To validate esense sub-admin is able to access and create the content in allowed modules/EL-4864/ES4864_04",function(){
    mainAdminMasterManagementPage.getDomainMappingTabLnk().click()
    cy.wait(1000)
    mainAdminMasterManagementPage.getAddNewBtn().click()
    mainAdminMasterManagementPage.getDomainMappingMainSkillTxtBx().type("Knowledge")
    mainAdminMasterManagementPage.getDomainMappingMainSkillDisplayName().type("knowledgeSkill")
    mainAdminMasterManagementPage.getStatusBar().click()
    mainAdminMasterManagementPage.getDomainMappingSubmitBtn().click({ force: true })
    cy.contains("Domain Skill is successfully Added !").should('be.visible')
    mainAdminUserManagementPage.getUserAddedPopupBtn().click()
    //it("To validate esense sub-admin is able to access and edit the content in allowed modules/EL-4864/ES4864_03",function(){
    cy.go('back')
    cy.wait(2000)
    cy.go('forward')
    cy.wait(2000)
    mainAdminMasterManagementPage.getDomainMappingTabLnk().click()
    cy.wait(3000)
    mainAdminMasterManagementPage.getDomainMappingMainSkillLst().each(($e2, index, $list) => {
      const edit = $e2.text()
      if (edit.includes("Knowledge")) {
        mainAdminMasterManagementPage.getDomainMappingActionsLst().eq(index).trigger('click')
      }
    })
    cy.wait(1000)
    mainAdminMasterManagementPage.getEditBtn().click()
    mainAdminMasterManagementPage.getDomainMappingMainSkillTxtBx().clear().type("knowledgable")
    mainAdminMasterManagementPage.getDomainMappingMainSkillDisplayName().clear().type("knowledgableSkill")
    mainAdminMasterManagementPage.getDomainMappingSubmitBtn().click()
    cy.contains("Domain Skill is successfully Updated !").should('be.visible')
    mainAdminUserManagementPage.getUserAddedPopupBtn().click()
    //it("To validate esense sub-admin is able to access and delete the content in allowed modules/EL-4864/ES4864_05",function(){
    cy.wait(2000)
    mainAdminMasterManagementPage.getDomainMappingMainSkillLst().each(($e3, index, $list) => {
      const edit = $e3.text()
      if (edit.includes("knowledgable")) {
        mainAdminMasterManagementPage.getDomainMappingActionsLst().eq(index).click({ force: true })
      }
    })
    cy.wait(1000)
    mainAdminMasterManagementPage.getDeleteBtn().click()
    mainAdminMasterManagementPage.getDeleteInsideBtn().click()
    cy.contains("Domain Skill is successfully Deleted !").should('be.visible')
    mainAdminUserManagementPage.getUserAddedPopupBtn().click()
    mainAdminUserManagementPage.getProfileImg().click()
    mainAdminUserManagementPage.getSignOutBtn().click()
  })
  it("To validate esense admin is able to delete the user permanently/EL-4145/ES4145_09", function () {
    cy.Mainlogin("admin", "Test@123")
    cy.wait(1000)
    mainAdminHomePage.getSystemConfigDrpDwn().click()
    mainAdminHomePage.getRolesManagementLnk().click()
    cy.go('back')
    cy.go('forward')
    cy.wait(1000)
    mainAdminUserManagementPage.getUsersTabLnk().click()
    mainAdminUserManagementPage.getUsersLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.userManageCredentials.firstname)) {
        mainAdminUserManagementPage.getActionsLst().eq(index).scrollIntoView().click({ force: true })
      }
    })
    mainAdminUserManagementPage.getDeleteBtn().click()
    mainAdminUserManagementPage.getUserDeleteBtn().click()
    mainAdminUserManagementPage.getUserAddedPopup().should('have.text', 'User is successfully Deleted')
    mainAdminUserManagementPage.getUserAddedPopupBtn().click()
    //it("To validate esense admin is able to delete the role permanently/EL-4145/ES4145_04",function(){
    cy.go('back')
    cy.go('forward')
    cy.wait(1000)
    mainAdminUserManagementPage.getRolesTabLnk().click()
    mainAdminUserManagementPage.getRolesLstInRoleTab().each(($e1, index, $list) => {
      const actualText = $e1.text()
      if (actualText.includes(this.userManageCredentials.DuplicateRole)) {
        mainAdminUserManagementPage.getActionsLstInRole().eq(index).scrollIntoView().click({ force: true })
      }
    })
    mainAdminUserManagementPage.getDeleteBtnInRole().click({ force: true })
    mainAdminUserManagementPage.getUserDeleteBtn().click()
    mainAdminUserManagementPage.getUserAddedPopup().should('have.text', this.userManageCredentials.DeletedRolePopup)
    mainAdminUserManagementPage.getUserAddedPopupBtn().click()
  })
})