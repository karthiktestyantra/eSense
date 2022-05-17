class MainAdminUserManagementPage {

    getTitle(){
      return cy.get('div.page-title h1');
    }

    getAddNewBtn(){
        return cy.contains('Add User')
    }

    getAddNewUserPopUpTitle(){
        return cy.get('div.modal-title')
    }

    getAddNewRolePopUpTitle(){
        return cy.get('div.modal-title')
    }

    getUserManagementFirstName() {
        return cy.get('input[placeholder="Type first name"]');
    }

    getUserManagementLastName() {
        return cy.get('input[placeholder="Type last name"]');
    }

    getUserManagementEmailId() {
        return cy.get('input[placeholder="Type email"]');
    }

    getUserManagementContactNum() {
        return cy.get('input[placeholder="Type contact number"]');
    }

    getUserManagementSelectRoleDrpDwn() {
        return cy.get('select[name="role"]');
    }

    getUserManagementSubmitBtn() {
        return cy.get('button[type="submit"] span').contains('Submit');
    }

    getUserAddedPopup(){
        return cy.get('.body');
    }

    getUserAddedPopupBtn(){
        return cy.get('.footer .btn');
    }

    getActionsLst(){
        return cy.get('button.float-end span svg[focusable="false"] path');
    }

    getEditBtn(){
        return cy.get(':nth-child(5) div.menu-item a.menu-link:visible').contains("Edit");
    }

    getDeleteBtn(){
        return cy.get(':nth-child(5) div.menu-item a.menu-link:visible').contains("Delete");
    }

    getEditPopupTitle(){
        return cy.get('div.h4');
    }

    getEditUserFrstName(){
        return cy.get('input[name="firstName"]')
    }

    getEditUserLstName(){
        return cy.get('input[name="lastName"]')
    }

    getUsersLst(){
        return cy.get('div.table-name-email-column-cls-out span.fw-bolder')
    }

    getUserIdLst(){
        return cy.get('div.table-name-email-column-cls-out span.email-font-cls')
    }

    getEditedEmailFld(){
        return cy.get('input[name="email"]')
    }

    geteditUserCancelBtn(){
        return cy.get('#category_form .me-2 .btn')
    }

    getAddUsercloseIcon(){
        return cy.get('button.btn-close')
    }

    getUserDeleteBtn(){
        return cy.get('button.btn-primary').contains("Delete")
    }

    getRolesTabLnk(){
        return cy.get('div.card-header a').contains("Roles")
    }

    getRolesLst(){
        return cy.get('tbody tr td[data-order="46"] span.fw-bolder')
    }

    getRolesLstInRoleTab(){
        return cy.get('tbody tr td div a.fw-bolder')
    }

    getUsersTabLnk(){
        return cy.get('div.card-header a').contains("Users")
    }

    getRoleLstInUsers(){
        return cy.get('[data-order="46"]  .fw-bolder')
    }

    getPrivilegesLst(){
        return cy.get('div.badge-light-success')
    }

    getPrivilegesLstInRoles(){
        return cy.get('span.cursor-pointer')
    }

    getAdminCountInRole(){
        return cy.get('tbody tr td.min-w-300px span.badge-light-primary')
    }

    getActionsLstInRole(){
        return cy.get('.text-center .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path')
    }

    getEditBtnInRole(){
        return cy.get('div.MuiPaper-root .menu-item span.menu-link').contains("Edit")
    }

    getDeleteBtnInRole(){
        return cy.get('div.MuiPaper-root .menu-item span.menu-link').contains("Delete")
    }

    getRoleNameFld(){
        return cy.get('input[name="userCustomRole"]')
    }

    getRoleSubmitBtn(){
        return cy.get('button.btn-primary span').contains("Submit")
    }

    getRoleCancelBtn(){
        return cy.get('.me-2 .btn').contains("Cancel")
    }

    getAddRoleBtn(){
        return cy.get('div a.btn-primary').contains("Add Role")
    }

    getActionsAllowedCheckbxs(){
        return cy.get('div.form-check input[type="checkbox"]')
    }

    getAlertMsg(){
        return cy.get('span[role="alert"]')
    }


}
export default MainAdminUserManagementPage;