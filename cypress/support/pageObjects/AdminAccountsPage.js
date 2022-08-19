class AdminAccountsPage{

    getAddNewBtn(){
        return cy.get('button.adminRoles_addAdminBtn__2PCIE')
    }
    getEnterDesignationName(){
        return cy.get('input[name="userCustomRole"]')
    }
    getCheckBoxLst(){
        return cy.get('input.PrivateSwitchBase-input')
    }
    getAddRoleBtn(){
        return cy.get('button.RolesPopup_adduserRole__uByX-')
    }
    getEditRoleBtnLst(){
        return cy.get('button.departmentEditIcon')
    } 
    getRoleLst(){
        return cy.get('tbody tr td span.adminRoles_userName__20cUY')
    }
    getCurriculumPrevilegeEditCheckBx(){
        return cy.get(':nth-child(4) > :nth-child(2) > .css-ckyhk3 > :nth-child(3)')
    }
    getCloseEditRoleBtn(){
        return cy.get('div img[alt="closebutton"]')
    }
    getPrevilegesLst(){
        return cy.get('tbody tr td:nth-child(3) .adminRoles_grantedOutline__2zEXb')
    }
    getPrevilegesBoardLst(){
        return cy.get('div.privilege-row-content-cls-out img')
    }
    getAddPrevilegesContentLst(){
        return cy.get(':nth-child(5) tbody tr td:nth-child(1)')
    }
    getCurriculumEditCheckbox(){
        return cy.get('input[name="4.IsEditable"]')
    }
    

}
export default AdminAccountsPage;