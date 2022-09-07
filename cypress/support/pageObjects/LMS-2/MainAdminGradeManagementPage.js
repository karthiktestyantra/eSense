class MainAdminGradeManagementPage{

    getPageTitle(){
       return cy.get('h1.my-1').contains("Grade")
    }
    getAddNewBtn(){
        return cy.get('div.gap-5 a').contains("Add New")
    }
    getActionsLst(){
        return cy.get('.MuiIconButton-label svg path:visible')
    }
    getGradeLst(){
        return cy.get('div.ms-5 a.fw-bolder:visible')
    }
    getEditBtn(){
        return cy.get('div.menu-item span.menu-link').contains("Edit")
    }
    getIsEditableBtn(){
        return cy.get('input[name=isEditable]')
    }
    getEditGradeSubmitBtn(){
        return cy.get('button[type=submit] span').contains("Submit")
    }
    getEditGradePopUpSubmit(){
        return cy.get('.footer .btn')
    }
    getEditableLst(){
        return cy.get('[style="display: flex; justify-content: center;"] .badge')
    }
}
export default MainAdminGradeManagementPage;