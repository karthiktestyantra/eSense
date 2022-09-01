/// <reference types="Cypress"/>

import MainAdminHomePage from "../../support/pageObjects/MainAdminHomePage";
import mainAdminMasterManagementPage from "../../support/pageObjects/MainAdminMasterManagementPage";
import MainAdminUserManagementPage from "../../support/pageObjects/MainAdminUserManagementPage";

const home = new MainAdminHomePage();
const userManage = new MainAdminUserManagementPage();
const masterManage = new mainAdminMasterManagementPage();

describe("Verify User Management Page functionalities/Sprint-15", function () {
  before(function () {
    cy.visit(Cypress.env("url"))
    cy.fixture("mainAdminLoginCredentials").then(function (validAdminLoginData) {
    cy.Mainlogin(validAdminLoginData.username,validAdminLoginData.password)
    })
  })
  beforeEach(function (){
    cy.viewport(1920,1080)
    cy.fixture("mainAdminUserManagementPageCredentials").then(function(userManageCredentials){
      this.userManageCredentials = userManageCredentials;
      cy.fixture("mainAdminMasterManagementCredentials").then(function(masterManagementCredentials){
        this.masterManagementCredentials = masterManagementCredentials;
      })
    })
  })
  it("To validate esense admin is able to go to User management page/EL-4148/ES4148_01",function () {
    home.getSystemConfigDrpDwn().click()
    home.getRolesManagementLnk().click()
    userManage.getTitle().should('have.text',this.userManageCredentials.Title)
 // it("To validate esense admin is able to click on “Add User” button and open profile builder popup/EL-4148/ES4148_02",function () {
    userManage.getAddNewBtn().click()
    userManage.getAddNewUserPopUpTitle().should('have.text',this.userManageCredentials.PopUpTitle)
  // it("To validate esense admin is able to add new user./EL-4148/ES4148_10",function () {
    userManage.getUserManagementFirstName().type(this.userManageCredentials.firstname)
    userManage.getUserManagementLastName().type(this.userManageCredentials.lastname)
    userManage.getUserManagementEmailId().type(this.userManageCredentials.emailid)
    userManage.getUserManagementContactNum().type(this.userManageCredentials.contactnumber)
    userManage.getUserManagementSelectRoleDrpDwn().select(this.userManageCredentials.DrpDwnValue1)
    userManage.getUserManagementSubmitBtn().click()
    userManage.getUserAddedPopup().should('have.text',this.userManageCredentials.UserAddedSuccessPopUp)
    userManage.getUserAddedPopupBtn().click()
  //it("To validate esense admin is able to add new role/EL-4146/ES4146_07",function(){
    userManage.getRolesTabLnk().click()
    userManage.getAddRoleBtn().click()
    userManage.getRoleNameFld().type(this.userManageCredentials.DuplicateRole)
    userManage.getELADomainMappingCreateCheckBx().check()
    userManage.getELADomainMappingReadCheckBx().check()
    userManage.getELADomainMappingUpdateCheckBx().check()
    userManage.getELADomainMappingDeleteCheckBx().check()
    userManage.getELACompetencyCreateCheckBx().check()
    userManage.getELACompetencyReadCheckBx().check()
    userManage.getContentTypeCreateCheckBx().check()
    userManage.getContentTypeReadCheckBx().check()
    userManage.getContentTypeUpdateCheckBx().check()
    userManage.getUsersAndRolesCreateCheckBx().check()
    userManage.getUsersAndRolesReadCheckBx().check()
    userManage.getUsersAndRolesUpdateCheckBx().check()
    userManage.getRoleSubmitBtn().click()
    userManage.getUserAddedPopup().should('have.text',this.userManageCredentials.RoleAddedSuccessPopUp)
    userManage.getUserAddedPopupBtn().click()
     //it("To validate esense admin is able to change role for an user/EL-4149/ES4149_08",function(){
      userManage.getUsersTabLnk().click()
      cy.go('back')
      cy.wait(1000)
      cy.go('forward')
      cy.wait(1000)
      userManage.getUsersLst().each(($e1,index,$list) =>{
        const text = $e1.text()
        if(text.includes(this.userManageCredentials.firstname)){
          userManage.getActionsLst().eq(index).scrollIntoView().click({force:true})
        }
      })
      cy.wait(1000)
      userManage.getEditBtn().click()
      userManage.getEditPopupTitle().should('have.text',this.userManageCredentials.EditUserPopupTitle)
      userManage.getUserManagementSelectRoleDrpDwn().select(this.userManageCredentials.DuplicateRole)
// it("To validate esense admin is able to edit and save the changes of an user/EL-4149/ES4149_09",function(){
        userManage.getUserManagementSubmitBtn().click({force:true})
        userManage.getUserAddedPopup().should('have.text',this.userManageCredentials.UserUpdatedSuccessPopUp)
        userManage.getUserAddedPopupBtn().click()
        userManage.getUserIdLst().each(($e2,index,$list)=>{
          const Ids = $e2.text()
          if(Ids.includes(this.userManageCredentials.firstname)){
            const ids =$e2.text().toString();
//it("To validate esense sub-admin is able to access and view-only the allowed modules/EL-4864/ES4864_02",function(){
    userManage.getProfileImg().click()
    userManage.getSignOutBtn().click()
    cy.Mainlogin(ids,"Test@12345")
          }
        })
        home.getSystemConfigDrpDwn().click()
        cy.wait(1000)
        home.getMasterManagementLnk().click({force:true})
        masterManage.getTitle().should('have.text',this.masterManagementCredentials.Title)
        masterManage.getDomainMappingTabLnk().click()
        cy.wait(1000)
        masterManage.getActionsLst().should('be.visible')
        masterManage.getCompetencyTabLnk().click()
        cy.wait(1000)
        masterManage.getActionsLst().should('not.exist')
 //it("To validate esense sub-admin is able to access and create the content in allowed modules/EL-4864/ES4864_04",function(){
      masterManage.getDomainMappingTabLnk().click()
      cy.wait(1000)
      masterManage.getAddNewBtn().click()
      masterManage.getDomainMappingMainSkillTxtBx().type("Knowledge")
      masterManage.getDomainMappingMainSkillDisplayName().type("knowledgeSkill")
      masterManage.getStatusBar().click()
      masterManage.getDomainMappingSubmitBtn().click()
      cy.contains("Domain Skill is successfully Added !").should('be.visible')
      userManage.getUserAddedPopupBtn().click()
//it("To validate esense sub-admin is able to access and edit the content in allowed modules/EL-4864/ES4864_03",function(){
    cy.go('back')
    cy.wait(2000)
    cy.go('forward')
    cy.wait(2000)
    masterManage.getDomainMappingTabLnk().click()
    cy.wait(3000)
       masterManage.getDomainMappingMainSkillLst().each(($e2,index,$list) =>{
        const edit = $e2.text()
        if(edit.includes("Knowledge")) {
        masterManage.getDomainMappingActionsLst().eq(index).trigger('click')
      }
    })
    cy.wait(1000)
    masterManage.getEditBtn().click()
    masterManage.getDomainMappingMainSkillTxtBx().clear().type("knowledgable")  
    masterManage.getDomainMappingMainSkillDisplayName().clear().type("knowledgableSkill")
    masterManage.getDomainMappingSubmitBtn().click()
    cy.contains("Domain Skill is successfully Updated !").should('be.visible')
    userManage.getUserAddedPopupBtn().click()
//it("To validate esense sub-admin is able to access and delete the content in allowed modules/EL-4864/ES4864_05",function(){
  cy.wait(2000)
  masterManage.getDomainMappingMainSkillLst().each(($e3,index,$list) =>{
    const edit = $e3.text()
    if(edit.includes("knowledgable")) {
    masterManage.getDomainMappingActionsLst().eq(index).click({force:true})
  }
})
    cy.wait(1000)
    masterManage.getDeleteBtn().click()
    masterManage.getDeleteInsideBtn().click()
    cy.contains("Domain Skill is successfully Deleted !").should('be.visible')
    userManage.getUserAddedPopupBtn().click()
    userManage.getProfileImg().click()
    userManage.getSignOutBtn().click()
})
    it("To validate esense admin is able to delete the user permanently/EL-4145/ES4145_09",function(){
    cy.Mainlogin("admin","Test@123")
    cy.wait(1000)
    home.getSystemConfigDrpDwn().click()
    home.getRolesManagementLnk().click()
    cy.go('back')
    cy.go('forward')
    cy.wait(1000)
        userManage.getUsersTabLnk().click()
        userManage.getUsersLst().each(($e1,index,$list) =>{
          const text = $e1.text()
          if(text.includes(this.userManageCredentials.firstname)){
            userManage.getActionsLst().eq(index).scrollIntoView().click({force:true})
          }
        })
          userManage.getDeleteBtn().click()
          userManage.getUserDeleteBtn().click()
          userManage.getUserAddedPopup().should('have.text','User is successfully Deleted')
          userManage.getUserAddedPopupBtn().click()
 //it("To validate esense admin is able to delete the role permanently/EL-4145/ES4145_04",function(){
    cy.go('back')
    cy.go('forward')
    cy.wait(1000)
        userManage.getRolesTabLnk().click()
        userManage. getRolesLstInRoleTab().each(($e1,index,$list) =>{
          const actualText = $e1.text()
          if(actualText.includes(this.userManageCredentials.DuplicateRole)){
            userManage.getActionsLstInRole().eq(index).scrollIntoView().click({force:true})
          }
        })
        userManage.getDeleteBtnInRole().click({force:true})
        userManage.getUserDeleteBtn().click()
        userManage.getUserAddedPopup().should('have.text',this.userManageCredentials.DeletedRolePopup)
        userManage.getUserAddedPopupBtn().click()
  })
})