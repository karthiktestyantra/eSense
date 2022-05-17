/// <reference types="Cypress"/>

import MainAdminHomePage from "../../support/pageObjects/MainAdminHomePage";
import MainAdminUserManagementPage from "../../support/pageObjects/MainAdminUserManagementPage";

const home = new MainAdminHomePage();
const userManage = new MainAdminUserManagementPage();

describe("Verify User Management Page functionalities", function () {
  before(function () {
    cy.visit(Cypress.env("url"))
    cy.fixture("mainAdminLoginCredentials").then(function (validAdminLoginData) {
    cy.login(validAdminLoginData.username,validAdminLoginData.password)
    })
  })
  beforeEach(function (){
    cy.fixture("mainAdminUserManagementPageCredentials").then(function(userManageCredentials){
      this.userManageCredentials = userManageCredentials;
    })
  })

  it("To validate esense admin is able to go to User management page/EL-4148/ES4148_01",function () {
    home.getSystemConfigDrpDwn().click()
    home.getRolesManagementLnk().click()
    userManage.getTitle().should('have.text',this.userManageCredentials.Title)
  })

  it("To validate esense admin is able to click on “Add User” button and open profile builder popup/EL-4148/ES4148_02",function () {
    userManage.getAddNewBtn().click()
    userManage.getAddNewUserPopUpTitle().should('have.text',this.userManageCredentials.PopUpTitle)
  })

  it("To validate esense admin is able to add new user./EL-4148/ES4148_10",function () {
    userManage.getUserManagementFirstName().type(this.userManageCredentials.firstname)
    userManage.getUserManagementLastName().type(this.userManageCredentials.lastname)
    userManage.getUserManagementEmailId().type(this.userManageCredentials.emailid)
    userManage.getUserManagementContactNum().type(this.userManageCredentials.contactnumber)
    userManage.getUserManagementSelectRoleDrpDwn().select(this.userManageCredentials.DrpDwnValue1)
    userManage.getUserManagementSubmitBtn().click()
    userManage.getUserAddedPopup().should('have.text',this.userManageCredentials.UserAddedSuccessPopUp)
    userManage.getUserAddedPopupBtn().click()
  })

  it("To validate esense admin is able to add new role/EL-4146/ES4146_07",function(){
    userManage.getRolesTabLnk().click()
    userManage.getAddRoleBtn().click()
    userManage.getRoleNameFld().type(this.userManageCredentials.DuplicateRole)
    userManage.getActionsAllowedCheckbxs().check()
    userManage.getRoleSubmitBtn().click()
    userManage.getUserAddedPopup().should('have.text',this.userManageCredentials.RoleAddedSuccessPopUp)
    userManage.getUserAddedPopupBtn().click()
    userManage.getRolesLst().each(($e1,index,$list) =>{
      const actualText = $e1.text()
      if(actualText.includes(this.userManageCredentials.DuplicateRole)){
        userManage.getRolesLst().eq(index).should('have.text',this.userManageCredentials.DuplicateRole)
      }
    })
  })

  it("To validate esense admin is able to cancel the creation of an user/EL-4148/ES4148_11",function(){
    userManage.getUsersTabLnk().click()
    userManage.getAddNewBtn().click()
    userManage.getUserManagementLastName().type(this.userManageCredentials.lastname)
    userManage.getUserManagementEmailId().type(this.userManageCredentials.emailid)
    userManage.getUserManagementContactNum().type(this.userManageCredentials.contactnumber)
    userManage.getUserManagementSelectRoleDrpDwn().select(this.userManageCredentials.DrpDwnValue1)
    userManage.geteditUserCancelBtn().click()
    userManage.getAddNewUserPopUpTitle().should('have.text',this.userManageCredentials.PopUpTitle)
  })

  it("To validate esense admin is able to close the pop-up of an user/EL-4148/ES4148_12",function(){
    userManage.getAddNewBtn().click()   
    userManage.getUserManagementLastName().type(this.userManageCredentials.lastname)
    userManage.getUserManagementEmailId().type(this.userManageCredentials.emailid)
    userManage.getUserManagementContactNum().type(this.userManageCredentials.contactnumber)
    userManage.getUserManagementSelectRoleDrpDwn().select(this.userManageCredentials.DrpDwnValue1)
    userManage.getAddUsercloseIcon().click()
    userManage.getTitle().should('have.text',this.userManageCredentials.Title)
  })

  it("To validate esense admin is able to click on “Edit” button and view edit user popup for each user/EL-4149/ES4149_01",function(){
    cy.wait(1000)
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
  })

  it("To validate esense admin is able to enter only a valid and mandatory first name/EL-4148/ES4148_04",function(){
    userManage.getEditUserFrstName().clear().type(this.userManageCredentials.EditedMaxfirstname)
    userManage.getEditedEmailFld().click()
    userManage.getAlertMsg().should('have.text',this.userManageCredentials.InvalidFirstNameAlert)
  })

  it("To validate esense admin is able to edit the first name/EL-4149/ES4149_03",function(){
    userManage.getEditUserFrstName().clear().type(this.userManageCredentials.Editedfirstname)
  })

  it("To validate esense admin is able to enter only a valid and mandatory last name./EL-4148/ES4148_05",function(){
    userManage.getEditUserLstName().clear().type(this.userManageCredentials.EditedMaxfirstname)
    userManage.getEditedEmailFld().click()
    userManage.getAlertMsg().should('have.text',this.userManageCredentials.InvalidLastNameAlert)
  })

  it("To validate esense admin is able to edit the last name/EL-4149/ES4149_04",function(){
    userManage.getEditUserLstName().clear().type(this.userManageCredentials.Editedlastname)
  })

  it("To validate esense admin is able to enter only a valid and mandatory email address/EL-4148/ES4148_06",function(){
    userManage.getEditedEmailFld().clear().type(this.userManageCredentials.EditedNum)
    userManage.getEditUserLstName().click()
    userManage.getAlertMsg().should('have.text',this.userManageCredentials.InvalidEmailAlert)
  })

  it("To validate esense admin is able to edit email address/EL-4149/ES4149_05",function(){
    userManage.getEditedEmailFld().clear().type(this.userManageCredentials.EditedEmail)
  })

  it("To validate esense admin is able to enter only a valid and mandatory contact number/EL-4148/ES4148_08",function(){
    userManage.getUserManagementContactNum().clear().type(this.userManageCredentials.Editedlastname)
    userManage.getEditedEmailFld().click()
    userManage.getAlertMsg().should('have.text',this.userManageCredentials.InvalidContactNumAlert)
  })

  it("To validate esense admin is able to edit contact number/EL-4149/ES4149_07",function(){
    userManage.getUserManagementContactNum().clear().type(this.userManageCredentials.EditedNum)
  })

  it("To validate esense admin is able to change role for an user/EL-4149/ES4149_08",function(){
    userManage.getUserManagementSelectRoleDrpDwn().select(this.userManageCredentials.DuplicateRole)
  })

  it("To validate esense admin is able to edit and save the changes of an user/EL-4149/ES4149_09",function(){
    userManage.getUserManagementSubmitBtn().click({force:true})
    userManage.getUserAddedPopup().should('have.text',this.userManageCredentials.UserUpdatedSuccessPopUp)
    userManage.getUserAddedPopupBtn().click()
    userManage.getUsersLst().contains(this.userManageCredentials.Editedfirstname)
  })

  it("To validate esense admin is able to view the 'Name and User ID', 'Role assigned' and 'no of Privilege' granted to the User/EL-4145/ES4145_06",function(){
    userManage.getUsersLst().contains(this.userManageCredentials.Editedfirstname)
    userManage.getUserIdLst().contains(this.userManageCredentials.firstname)
    userManage.getRolesLst().should('be.visible')
    userManage.getPrivilegesLst().should('be.visible')
  })

  it("To validate esense admin is able to edit and cancel the changes of an user/EL-4149/ES4149_10",function(){
    userManage.getUsersLst().each(($e1,index,$list) =>{
      const text = $e1.text()
      if(text.includes(this.userManageCredentials.Editedfirstname)){
        userManage.getActionsLst().eq(index).scrollIntoView().click({force:true})
      }
    })
    userManage.getEditBtn().click()
    userManage.getUserManagementSelectRoleDrpDwn().select(this.userManageCredentials.DrpDwnValue1)
    userManage.geteditUserCancelBtn().click()
    userManage.getTitle().should('have.text',this.userManageCredentials.Title)
  })

  it("To validate esense admin is able to edit and close the pop-up of an user/EL-4149/ES4149_11",function(){
    userManage.getUsersLst().each(($e1,index,$list) =>{
      const text = $e1.text()
      if(text.includes(this.userManageCredentials.Editedfirstname)){
        userManage.getActionsLst().eq(index).scrollIntoView().click({force:true})
      }
    })
    userManage.getEditBtn().click()
    userManage.getUserManagementContactNum().clear().type(this.userManageCredentials.contactnumber)
    userManage.getAddUsercloseIcon().click()
    userManage.getTitle().should('have.text',this.userManageCredentials.Title)
  })
  /*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/

  it("To validate esense admin is able to view the list of Users and Roles under user management section/EL-4145/ES4145_01",function(){
    userManage.getUsersLst().should('be.visible')
    userManage.getRolesTabLnk().click()
    userManage.getRolesLstInRoleTab().should('be.visible')
  })

  it("To validate esense admin is able to goto and view the create role pop-up/EL-4145/ES4145_05",function(){
    userManage.getActionsLstInRole().eq(1).scrollIntoView().click({force:true})
    userManage.getEditBtnInRole().click()
    userManage.getAddNewRolePopUpTitle().should('be.visible')
    userManage.getRoleCancelBtn().click()
  })

  it("To validate esense admin is able to view the 'no. of Admins' and 'no of Privilege' granted to the role/EL-4145/ES4145_02",function(){
    var privilegee = "none";
    userManage. getRolesLstInRoleTab().each(($e1,index,$list) =>{
      const admin = $e1.text()
      if(admin.includes(this.userManageCredentials.DrpDwnValue1)){
        userManage.getPrivilegesLst().eq(index).then(function(privilege){
          privilegee=privilege.text()
        })
      }
    })
    userManage.getUsersTabLnk().click()
    var adminTxt=0;
    userManage.getRoleLstInUsers().each(($e1,index,$list) =>{
      const text = $e1.text()
      if(text.includes(this.userManageCredentials.DrpDwnValue1)){
        adminTxt ++;
        userManage.getPrivilegesLst().eq(index).should('have.text',privilegee)
      }
    })
      userManage.getRolesTabLnk().click()
      var adminCount=0;
      userManage. getRolesLstInRoleTab().each(($e1,index,$list) =>{
        const role = $e1.text()
        if(role.includes(this.userManageCredentials.DrpDwnValue1)){
           adminCount=userManage.getAdminCountInRole().eq(index).should('have.text',adminTxt)
        }
      })
  })

  it("To validate esense admin is able to edit the role/EL-4145/ES4145_03",function(){
    cy.wait(1000)
    cy.go('back')
    cy.go('forward')
    cy.wait(1000)
    userManage. getRolesLstInRoleTab().each(($e1,index,$list) =>{
      const role = $e1.text()
      if(role.includes(this.userManageCredentials.DuplicateRole)){
        userManage.getActionsLstInRole().eq(index).scrollIntoView().click({force:true})
      }
    })
    userManage.getEditBtnInRole().click()
    userManage.getRoleNameFld().clear().type(this.userManageCredentials.DuplicateRole2)
    userManage.getRoleSubmitBtn().click()
    userManage.getUserAddedPopup().should('have.text',this.userManageCredentials.RoleEditedSuccessPopUp)
    userManage.getUserAddedPopupBtn().click()
  })

  it("To validate esense admin is able to cancel the creation of a role/EL-4146/ES4146_08",function(){
    cy.wait(1000)
    cy.go('back')
    cy.go('forward')
    cy.wait(2000)
    userManage. getRolesLstInRoleTab().each(($e1,index,$list) =>{
      const actualText = $e1.text()
      if(actualText.includes(this.userManageCredentials.DuplicateRole2)){
        userManage.getActionsLstInRole().eq(index).scrollIntoView().click({force:true})
      }
    })
    userManage.getEditBtnInRole().click({force:true})
    userManage.getRoleCancelBtn().click()
    userManage.getTitle().should('have.text',this.userManageCredentials.Title)
  })

  it("To validate esense admin is able to delete the user permanently/EL-4145/ES4145_09",function(){
    userManage.getUsersTabLnk().click()
    userManage.getUsersLst().each(($e1,index,$list) =>{
      const text = $e1.text()
      if(text.includes(this.userManageCredentials.Editedfirstname)){
        userManage.getActionsLst().eq(index).scrollIntoView().click({force:true})
      }
    })
      userManage.getDeleteBtn().click()
      userManage.getUserDeleteBtn().click()
      userManage.getUserAddedPopup().should('have.text','User is successfully Deleted')
      userManage.getUserAddedPopupBtn().click()
  })

  it("To validate esense admin is able to delete the role permanently/EL-4145/ES4145_04",function(){
    userManage.getRolesTabLnk().click()
    userManage. getRolesLstInRoleTab().each(($e1,index,$list) =>{
      const actualText = $e1.text()
      if(actualText.includes(this.userManageCredentials.DuplicateRole2)){
        userManage.getActionsLstInRole().eq(index).scrollIntoView().click({force:true})
      }
    })
    userManage.getDeleteBtnInRole().click({force:true})
    userManage.getUserDeleteBtn().click()
    userManage.getUserAddedPopup().should('have.text',this.userManageCredentials.DeletedRolePopup)
    userManage.getUserAddedPopupBtn().click()
  })
})

  

  

