class AdminDepartmentsPage {
    
    getStepBContent(){
        return cy.get(":nth-child(1) > .v-stepper > .circle");
    }

    getWholeDeptPage(){
        return cy.get('.bi-form-divide-cls');
    }

    getDepartmentsTitle(){
        return cy.get('.text-capitalize');
    }

    getDepartmentHeader(){
        return cy.get('table>thead>tr>th:nth-child(1)');
    }

    getForGradesHeader(){
        return cy.get('table>thead>tr>th:nth-child(2)');
    }

    getMandatorySubjectsHeader(){
        return cy.get('table>thead>tr>th:nth-child(3)');
    }

    getDepartmentEditIcon(){
        return cy.get('.departmentEditIcon').eq(0);
    }

    getDepartmentDeleteIcon(id){
        return cy.get('td .departmentDeleteIcon').eq(id);
    }

    getDeptDeleteIcon(){
        return cy.get('td .departmentDeleteIcon').eq(0);
    }

    getAddDepartmentOption(){
        return cy.get('.MuiTypography-root > .MuiButton-root');
    }

    getAddDepartmentTitle(){
        return cy.get('.MuiDialogTitle-root');
    }

    getEditDepartmentTitle(){
        return cy.get('.editDepartTitle');
    }

    getDepartmentName(){
        return cy.get('.MuiOutlinedInput-root>.MuiOutlinedInput-input').eq(0);
    }

    getForGrades(){
        return cy.get('#checkboxes');
    }

    getMandatorySubjects(){
        return cy.get('.MuiOutlinedInput-root>.MuiOutlinedInput-input').eq(2);
    }

    getMandatorySubjectsOption(){
        return cy.get('#checkboxes-tags-demo-listbox')
    }

    getAddButton(){
        return cy.get('.deptSavebtn');
    }

    getCancelButton(){
        return cy.get('.deptCancelbtn');
    }

    getCloseIcon(){
        return cy.get('.closeModal');
    }

    getDepartmentRows(){
        return cy.get('tbody tr');
    }

    getDepartmentNames(index){
        return cy.get('tbody tr td:nth-child(1)').eq(index);
    }

    getForGradesOption4(){
        return cy.get('#checkboxes-listbox')
    }

    getDeletePopupDeleteButton(){
        return cy.get('.deptDeletebtn');
    }

    getDeletePopupCancelButton(){
        return cy.get('.deptCancelDisabledbtn');
    }

    getDeleteDepartmentPopup(){
        return cy.get('.font-cls');
    }

    getContinueButton(){
        return cy.get('.continue-btn');
    }

}

module.exports= new AdminDepartmentsPage()