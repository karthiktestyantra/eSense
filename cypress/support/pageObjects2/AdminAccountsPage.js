class AdminAccountsPage {
    
    getStepEContent(){
        return cy.get('.circle span');
    }

    getRolesTabRolesColumn(){
        return cy.get('th.MuiTableCell-root').eq(0);
    }

    getRolesTabAdminColumn(){
        return cy.get('th.MuiTableCell-root').eq(1);
    }

    getRolesTabPrivilegesColumn(){
        return cy.get('th.MuiTableCell-root').eq(2);
    }

    getRolesTabActionsColumn(){
        return cy.get('th.MuiTableCell-root').eq(3);
    }

    getRoleAddNewButton(){
        return cy.get('button.adminRoles_addAdminBtn__2PCIE');
    }

    getDesignationName(){
        return cy.get('.schAdminInputCtr');
    }

    getActionsCheckbox(){
        return cy.get('.MuiCheckbox-root:visible');
    }

    getAddRoleButton(){
        return cy.get('button.RolesPopup_adduserRole__uByX-')
    }

    getNameandEmailColumn(){
        return cy.get('th.MuiTableCell-root').eq(0);
    }

    getRoleColumn(){
        return cy.get('th.MuiTableCell-root').eq(1);
    }

    getPrivilegesColumn(){
        return cy.get('th.MuiTableCell-root').eq(2);
    }

    getActionsColumnn(){
        return cy.get('th.MuiTableCell-root').eq(3);
    }

    getRowCounts(){
        return cy.get('.school-admin-roles');
    }

    getRoleColumnValues(){
        return cy.get('tr td:nth-child(2)');
    }

    getPrivilegesColumnValues(){
        return cy.get('tr td:nth-child(3)');
    }

    getSendPasswordResetIconList(){
        return '.adminSendBtn' ;
    }

    getEditIconList(){
        return ".adminEditBtn" ;
    }

    getDeleteIconList(){
        return ".departmentDeleteIcon" ;
    }

    getRolesTab(){
        return cy.get('button#scrollable-auto-tab-0');
    }

    getRoleRows(){
        return cy.get('tbody tr.MuiTableRow-root');
    }

    getRoleNames(index){
        return cy.get('td').eq(index)
    }

    getRoleDeleteIcon(id){
        return cy.get('.departmentDeleteIcon').eq(id);
    }

    getDeletePopupDeleteRoleButton(){
        return cy.get('.delete-button');
    }

    getDeletedRolePopup(){
        return cy.get('.deleted-admin-roles-container-out .font-cls')
    }

    getAdminsTab(){
        return cy.get('button#scrollable-auto-tab-1');
    }

    getAdminRows(){
        return cy.get('tbody > tr');
    }

    getAdminUsernames(index){
        return cy.get('.adminRoles_userName__20cUY').eq(index);
    }

    getAddNewButton(){
        return cy.get('[class*="adminRoles_addAdminBtn"]');
    }

    getAddNewRolePopupTitle(){
        return cy.get('h5[class*="RolesPopup"]');
    }

    getRoleDesignationName(){
        return cy.get('[name="userCustomRole"]');
    }

    getAddNewRolePopupCancelIcon(){
        return cy.get('[class*="RolesPopup_CanceluserRole"]');
    }

    getPrivilegesCheckBoxes(){
        return cy.get('input[checked]');
    }

    getAddNewRolePopupCloseIcon(){
        return cy.get('[alt="closebutton"]');
    }

    getEditRoleIcon(){
        return cy.get('.departmentEditIcon').eq(0);
    }

    getEditRolePopupTitle(){
        return cy.get('h5[class*="RolesPopup"]');
    }

    getEditRoleIconSaveChanges(){
        return cy.get('button[class*="RolesPopup_adduserRole"]');
    }

    getRoleDeleteIcon(){
        return cy.get('.departmentDeleteIcon');
    }

    getAddAdminPopupTitle(){
        return cy.get('.header-row .font-cls');
    }

    getAddAdminPopupFullName(){
        return cy.get('[name="fullName"]');
    }

    getAddAdminPopupEmailAddress(){
        return cy.get('[name="email"]');
    }

    getAddAdminPopupDOB(){
        return cy.get(':nth-child(4) > .MuiTextField-root > .MuiOutlinedInput-root');
    }

    getAddAdminPopupGender(){
        return cy.get('#mui-component-select-gender');
    }
   
    getGenderList()
    {
        return cy.get('li[tabindex]');
    }

    getAddAdminPopupContact(){
        return cy.get('[name="contact"]');
    }

    getAddAdminPopupEmpID(){
        return cy.get('[name="empid"]');
    }

    getAddAdminPopupSelectRole(){
        return cy.get('#coll_subject');
    }

    getSelectRoleList(){
        return cy.get('li.css-1km1ehz');
    }

    getAddAdminPopupAddressLine1(){
        return cy.get('[name="address_one"]');
    }

    getAddAdminPopupPincode(){
        return cy.get('[name="pincode"]');
    }

    getAddAdminPopupContinueButton(){
        return cy.get('.continue-btn-cls');
    }

    getAddAdminPopupCancelButton(){
        return cy.get('.cancel-btn-cls');
    }

    getAddAdminPopupCloseIcon(){
        return cy.get('.font-cls+img');
    }

    getEditAdminIcon(){
        return cy.get('.adminEditBtn').eq(0);
    }

    getEditAdminCloseIcon(){
        return cy.get('.header-row > img');
    }

    getEditAdminPopupTitle(){
        return cy.get('.header-row .font-cls');
    }

    getAdminDeleteIcon(id){
        return cy.get('.departmentDeleteIcon').eq(id);
    }

    getDeletePopupDeleteAdminButton(){
        return cy.get('.delete-button');
    }

    getDeletePopupCancelButton(){
        return cy.get('.cancel-button');
    }

    getDeletePopupCloseIcon(){
        return cy.get('div.closebutton-div img');
    }

    getDeletedAdminPopup(){
        return cy.get('.deleted-admin-roles-container-out .font-cls')
    }

    getSendPasswordResetIcon(){
        return cy.get('.adminSendBtn').eq(0);
    }

    getSendToUserOption(){
        return cy.get('.MuiBox-root.css-ffqm7q');
    }

    getEmailSentMessage(){
        return cy.get('.MuiAlert-message');
    }

    getContinueButton(){
        return cy.get('.continue-btn');
    }

}
export default AdminAccountsPage