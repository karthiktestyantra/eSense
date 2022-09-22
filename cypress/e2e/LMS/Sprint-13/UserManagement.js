const mainAdminHomePage = require("../../../support/pageObjects/LMS-2/MainAdminHomePage")
const mainAdminUserManagementPage = require("../../../support/pageObjects/LMS-2/MainAdminUserManagementPage")

describe("Verify User Management Page functionalities", function () {
  before(function () {
    cy.viewport(1920, 1080)
    cy.visit(Cypress.env("url"))
    cy.fixture("LMS/mainAdminLoginCredentials").then(function (validAdminLoginData) {
      cy.Mainlogin(validAdminLoginData.username, validAdminLoginData.password)
    })
  })
  
  beforeEach(function () {
    cy.fixture("LMS/mainAdminUserManagementPageCredentials").as("userManageCredentials")
  })

  it("To validate esense admin is able to go to User management page/EL-4148/ES4148_01", function () {
    mainAdminHomePage.getSystemConfigDrpDwn().click()
    mainAdminHomePage.getRolesManagementLnk().click()
    mainAdminUserManagementPage.getTitle().should('have.text', this.userManageCredentials.Title)
    // })

    // it("To validate esense admin is able to click on “Add User” button and open profile builder popup/EL-4148/ES4148_02",function () {
    mainAdminUserManagementPage.getAddNewBtn().click()
    mainAdminUserManagementPage.getAddNewUserPopUpTitle().should('have.text', this.userManageCredentials.PopUpTitle)
    // })

    //  it("To validate esense admin is able to add new user./EL-4148/ES4148_10",function () {
    mainAdminUserManagementPage.getUserManagementFirstName().type(this.userManageCredentials.firstname)
    mainAdminUserManagementPage.getUserManagementLastName().type(this.userManageCredentials.lastname)
    mainAdminUserManagementPage.getUserManagementEmailId().type(this.userManageCredentials.emailid)
    mainAdminUserManagementPage.getUserManagementContactNum().type(this.userManageCredentials.contactnumber)
    mainAdminUserManagementPage.getUserManagementSelectRoleDrpDwn().select(this.userManageCredentials.DrpDwnValue1)
    mainAdminUserManagementPage.getUserManagementSubmitBtn().click()
    mainAdminUserManagementPage.getUserAddedPopup().should('have.text', this.userManageCredentials.UserAddedSuccessPopUp)
    mainAdminUserManagementPage.getUserAddedPopupBtn().click()
    // })

    //it("To validate esense admin is able to add new role/EL-4146/ES4146_07",function(){
    mainAdminUserManagementPage.getRolesTabLnk().click()
    mainAdminUserManagementPage.getAddRoleBtn().click()
    mainAdminUserManagementPage.getRoleNameFld().type(this.userManageCredentials.DuplicateRole)
    mainAdminUserManagementPage.getActionsAllowedCheckbxs().check()
    mainAdminUserManagementPage.getRoleSubmitBtn().click()
    mainAdminUserManagementPage.getUserAddedPopup().should('have.text', this.userManageCredentials.RoleAddedSuccessPopUp)
    mainAdminUserManagementPage.getUserAddedPopupBtn().click()
    mainAdminUserManagementPage.getRolesLst().each(($e1, index, $list) => {
      const actualText = $e1.text()
      if (actualText.includes(this.userManageCredentials.DuplicateRole)) {
        mainAdminUserManagementPage.getRolesLst().eq(index).should('have.text', this.userManageCredentials.DuplicateRole)
      }
    })
    // })

    // it("To validate esense admin is able to cancel the creation of an user/EL-4148/ES4148_11",function(){
    mainAdminUserManagementPage.getUsersTabLnk().click()
    mainAdminUserManagementPage.getAddNewBtn().click()
    mainAdminUserManagementPage.getUserManagementLastName().type(this.userManageCredentials.lastname)
    mainAdminUserManagementPage.getUserManagementEmailId().type(this.userManageCredentials.emailid)
    mainAdminUserManagementPage.getUserManagementContactNum().type(this.userManageCredentials.contactnumber)
    mainAdminUserManagementPage.getUserManagementSelectRoleDrpDwn().select(this.userManageCredentials.DrpDwnValue1)
    mainAdminUserManagementPage.geteditUserCancelBtn().click()
    mainAdminUserManagementPage.getAddNewUserPopUpTitle().should('have.text', this.userManageCredentials.PopUpTitle)
    // })

    //it("To validate esense admin is able to close the pop-up of an user/EL-4148/ES4148_12",function(){
    mainAdminUserManagementPage.getAddNewBtn().click()
    mainAdminUserManagementPage.getUserManagementLastName().type(this.userManageCredentials.lastname)
    mainAdminUserManagementPage.getUserManagementEmailId().type(this.userManageCredentials.emailid)
    mainAdminUserManagementPage.getUserManagementContactNum().type(this.userManageCredentials.contactnumber)
    mainAdminUserManagementPage.getUserManagementSelectRoleDrpDwn().select(this.userManageCredentials.DrpDwnValue1)
    mainAdminUserManagementPage.getAddUsercloseIcon().click()
    mainAdminUserManagementPage.getTitle().should('have.text', this.userManageCredentials.Title)
    // })

    // it("To validate esense admin is able to click on “Edit” button and view edit user popup for each user/EL-4149/ES4149_01",function(){
    cy.wait(1000)
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
    // })

    // it("To validate esense admin is able to enter only a valid and mandatory first name/EL-4148/ES4148_04",function(){
    mainAdminUserManagementPage.getEditUserFrstName().clear().type(this.userManageCredentials.EditedMaxfirstname)
    mainAdminUserManagementPage.getEditedEmailFld().click()
    mainAdminUserManagementPage.getAlertMsg().should('have.text', this.userManageCredentials.InvalidFirstNameAlert)
    //})

    // it("To validate esense admin is able to edit the first name/EL-4149/ES4149_03",function(){
    mainAdminUserManagementPage.getEditUserFrstName().clear().type(this.userManageCredentials.Editedfirstname)
    //})

    // it("To validate esense admin is able to enter only a valid and mandatory last name./EL-4148/ES4148_05",function(){
    mainAdminUserManagementPage.getEditUserLstName().clear().type(this.userManageCredentials.EditedMaxfirstname)
    mainAdminUserManagementPage.getEditedEmailFld().click()
    mainAdminUserManagementPage.getAlertMsg().should('have.text', this.userManageCredentials.InvalidLastNameAlert)
    //})

    //it("To validate esense admin is able to edit the last name/EL-4149/ES4149_04",function(){
    mainAdminUserManagementPage.getEditUserLstName().clear().type(this.userManageCredentials.Editedlastname)
    //})

    // it("To validate esense admin is able to enter only a valid and mandatory email address/EL-4148/ES4148_06",function(){
    mainAdminUserManagementPage.getEditedEmailFld().clear().type(this.userManageCredentials.EditedNum)
    mainAdminUserManagementPage.getEditUserLstName().click()
    mainAdminUserManagementPage.getAlertMsg().should('have.text', this.userManageCredentials.InvalidEmailAlert)
    // })

    //it("To validate esense admin is able to edit email address/EL-4149/ES4149_05",function(){
    mainAdminUserManagementPage.getEditedEmailFld().clear().type(this.userManageCredentials.EditedEmail)
    // })

    //it("To validate esense admin is able to enter only a valid and mandatory contact number/EL-4148/ES4148_08",function(){
    mainAdminUserManagementPage.getUserManagementContactNum().clear().type(this.userManageCredentials.Editedlastname)
    mainAdminUserManagementPage.getEditedEmailFld().click()
    mainAdminUserManagementPage.getAlertMsg().should('have.text', this.userManageCredentials.InvalidContactNumAlert)
    // })

    //it("To validate esense admin is able to edit contact number/EL-4149/ES4149_07",function(){
    mainAdminUserManagementPage.getUserManagementContactNum().clear().type(this.userManageCredentials.EditedNum)
    // })

    //it("To validate esense admin is able to change role for an user/EL-4149/ES4149_08",function(){
    mainAdminUserManagementPage.getUserManagementSelectRoleDrpDwn().select(this.userManageCredentials.DuplicateRole)
    //})

    // it("To validate esense admin is able to edit and save the changes of an user/EL-4149/ES4149_09",function(){
    mainAdminUserManagementPage.getUserManagementSubmitBtn().click({ force: true })
    mainAdminUserManagementPage.getUserAddedPopup().should('have.text', this.userManageCredentials.UserUpdatedSuccessPopUp)
    mainAdminUserManagementPage.getUserAddedPopupBtn().click()
    mainAdminUserManagementPage.getUsersLst().contains(this.userManageCredentials.Editedfirstname)
    // })

    // it("To validate esense admin is able to view the 'Name and User ID', 'Role assigned' and 'no of Privilege' granted to the User/EL-4145/ES4145_06",function(){
    mainAdminUserManagementPage.getUsersLst().contains(this.userManageCredentials.Editedfirstname)
    mainAdminUserManagementPage.getUserIdLst().contains(this.userManageCredentials.firstname)
    mainAdminUserManagementPage.getRolesLst().should('be.visible')
    mainAdminUserManagementPage.getPrivilegesLst().should('be.visible')
    // })

    // it("To validate esense admin is able to edit and cancel the changes of an user/EL-4149/ES4149_10",function(){
    mainAdminUserManagementPage.getUsersLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.userManageCredentials.Editedfirstname)) {
        mainAdminUserManagementPage.getActionsLst().eq(index).scrollIntoView().click({ force: true })
      }
    })
    mainAdminUserManagementPage.getEditBtn().click()
    mainAdminUserManagementPage.getUserManagementSelectRoleDrpDwn().select(this.userManageCredentials.DrpDwnValue1)
    mainAdminUserManagementPage.geteditUserCancelBtn().click()
    mainAdminUserManagementPage.getTitle().should('have.text', this.userManageCredentials.Title)
    // })

    // it("To validate esense admin is able to edit and close the pop-up of an user/EL-4149/ES4149_11",function(){
    mainAdminUserManagementPage.getUsersLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.userManageCredentials.Editedfirstname)) {
        mainAdminUserManagementPage.getActionsLst().eq(index).scrollIntoView().click({ force: true })
      }
    })
    mainAdminUserManagementPage.getEditBtn().click()
    mainAdminUserManagementPage.getUserManagementContactNum().clear().type(this.userManageCredentials.contactnumber)
    mainAdminUserManagementPage.getAddUsercloseIcon().click()
    mainAdminUserManagementPage.getTitle().should('have.text', this.userManageCredentials.Title)
    //  })
    /*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/

    // it("To validate esense admin is able to view the list of Users and Roles under user management section/EL-4145/ES4145_01",function(){
    mainAdminUserManagementPage.getUsersLst().should('be.visible')
    mainAdminUserManagementPage.getRolesTabLnk().click()
    mainAdminUserManagementPage.getRolesLstInRoleTab().should('be.visible')
    // })

    //it("To validate esense admin is able to goto and view the create role pop-up/EL-4145/ES4145_05",function(){
    mainAdminUserManagementPage.getActionsLstInRole().eq(1).scrollIntoView().click({ force: true })
    mainAdminUserManagementPage.getEditBtnInRole().click()
    mainAdminUserManagementPage.getAddNewRolePopUpTitle().should('be.visible')
    mainAdminUserManagementPage.getRoleCancelBtn().click()
    //})

    // it("To validate esense admin is able to view the 'no. of Admins' and 'no of Privilege' granted to the role/EL-4145/ES4145_02",function(){
    var privilegee = "none";
    mainAdminUserManagementPage.getRolesLstInRoleTab().each(($e1, index, $list) => {
      const admin = $e1.text()
      if (admin.includes(this.userManageCredentials.DrpDwnValue1)) {
        mainAdminUserManagementPage.getPrivilegesLst().eq(index).then(function (privilege) {
          privilegee = privilege.text()
        })
      }
    })
    mainAdminUserManagementPage.getUsersTabLnk().click()
    var adminTxt = 0;
    mainAdminUserManagementPage.getRoleLstInUsers().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.userManageCredentials.DrpDwnValue1)) {
        adminTxt++;
        mainAdminUserManagementPage.getPrivilegesLst().eq(index).should('have.text', privilegee)
      }
    })
    mainAdminUserManagementPage.getRolesTabLnk().click()
    var adminCount = 0;
    mainAdminUserManagementPage.getRolesLstInRoleTab().each(($e1, index, $list) => {
      const role = $e1.text()
      if (role.includes(this.userManageCredentials.DrpDwnValue1)) {
        adminCount = mainAdminUserManagementPage.getAdminCountInRole().eq(index).should('have.text', adminTxt)
      }
    })
    // })

    // it("To validate esense admin is able to edit the role/EL-4145/ES4145_03",function(){
    cy.wait(1000)
    cy.go('back')
    cy.go('forward')
    cy.wait(1000)
    mainAdminUserManagementPage.getRolesLstInRoleTab().each(($e1, index, $list) => {
      const role = $e1.text()
      if (role.includes(this.userManageCredentials.DuplicateRole)) {
        mainAdminUserManagementPage.getActionsLstInRole().eq(index).scrollIntoView().click({ force: true })
      }
    })
    mainAdminUserManagementPage.getEditBtnInRole().click()
    mainAdminUserManagementPage.getRoleNameFld().clear().type(this.userManageCredentials.DuplicateRole2)
    mainAdminUserManagementPage.getRoleSubmitBtn().click()
    mainAdminUserManagementPage.getUserAddedPopup().should('have.text', this.userManageCredentials.RoleEditedSuccessPopUp)
    mainAdminUserManagementPage.getUserAddedPopupBtn().click()
    // })

    //it("To validate esense admin is able to cancel the creation of a role/EL-4146/ES4146_08",function(){
    cy.wait(1000)
    cy.go('back')
    cy.go('forward')
    cy.wait(2000)
    mainAdminUserManagementPage.getRolesLstInRoleTab().each(($e1, index, $list) => {
      const actualText = $e1.text()
      if (actualText.includes(this.userManageCredentials.DuplicateRole2)) {
        mainAdminUserManagementPage.getActionsLstInRole().eq(index).scrollIntoView().click({ force: true })
      }
    })
    mainAdminUserManagementPage.getEditBtnInRole().click({ force: true })
    mainAdminUserManagementPage.getRoleCancelBtn().click()
    mainAdminUserManagementPage.getTitle().should('have.text', this.userManageCredentials.Title)
    // })

    // it("To validate esense admin is able to delete the user permanently/EL-4145/ES4145_09",function(){
    mainAdminUserManagementPage.getUsersTabLnk().click()
    mainAdminUserManagementPage.getUsersLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.userManageCredentials.Editedfirstname)) {
        mainAdminUserManagementPage.getActionsLst().eq(index).scrollIntoView().click({ force: true })
      }
    })
    mainAdminUserManagementPage.getDeleteBtn().click()
    mainAdminUserManagementPage.getUserDeleteBtn().click()
    mainAdminUserManagementPage.getUserAddedPopup().should('have.text', 'User is successfully Deleted')
    mainAdminUserManagementPage.getUserAddedPopupBtn().click()
    // })

    //it("To validate esense admin is able to delete the role permanently/EL-4145/ES4145_04",function(){
    mainAdminUserManagementPage.getRolesTabLnk().click()
    mainAdminUserManagementPage.getRolesLstInRoleTab().each(($e1, index, $list) => {
      const actualText = $e1.text()
      if (actualText.includes(this.userManageCredentials.DuplicateRole2)) {
        mainAdminUserManagementPage.getActionsLstInRole().eq(index).scrollIntoView().click({ force: true })
      }
    })
    mainAdminUserManagementPage.getDeleteBtnInRole().click({ force: true })
    mainAdminUserManagementPage.getUserDeleteBtn().click()
    mainAdminUserManagementPage.getUserAddedPopup().should('have.text', this.userManageCredentials.DeletedRolePopup)
    mainAdminUserManagementPage.getUserAddedPopupBtn().click()
  })
})





