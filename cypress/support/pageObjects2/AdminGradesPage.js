class AdminGradesPage {
    
    getStepCContent(){
        return cy.get('.circle span').eq(0);
    }

    getGradesList(){
        return cy.get('tbody>tr>td + td>div');
    }

    getGradeListOne(){
        return cy.get('td.grade-name div').eq(0);
    }

    getGradeListofItem(){
        return cy.get('td.grade-name').eq(0);
    }

    getSections(){
        return cy.get('.sectionsBtn').eq(0);
    }

    getAddNewSectionIcon(){
        return cy.get('.sectionAddBtn').eq(0);
    }

    getAddNewSecIcon(){
        return cy.get('.sectionAddBtn').eq(2);
    }

    getAddNewSectionPopupTitle(){
        return cy.get('.MuiGrid-root .title');
    }

    getEditSectionPopupTitle(){
        return cy.get('.MuiGrid-root .title');
    }

    getAddNewSectionPopupSectionName(){
        return cy.get('input[id^="mui-"]');
    }

    getAddNewSectionPopupDepartment(){
        return cy.get('#deparment');
    }

    getDepartmentDropdownOptions(){
        return cy.get('ul.MuiList-root li');
    }

    getAddNewSectionPopupMandatorySubjects(){
        return cy.get('p.mandatoryLabel');
    }

    getAddNewSectionPopupOptionalSubjects(){
        return cy.get('#opt-subjects');
    }

    getAddNewSectionPopupOptionalSubjectsOptions(){
        return cy.get('ul.MuiList-root li');
    }

    getAddNewSectionPopupAddSectionButton(){
        return cy.get('.sectionSaveBtn');
    }

    getAddNewSectionPopupCancelButton(){
        return cy.get('.sectionCancelBtn');
    }

    getAddNewSectionPopupCloseicon(){
        return cy.get('.closeModal:visible');
    }

    getEditSectionSaveChanges(){
        return cy.get('.sectionSaveBtn');
    }

    getEditSectionCancelButton(){
        return cy.get('.sectionCancelBtn');
    }

    getDeleteSectionIcon(){
        return cy.get('.delete-section');
    }

    getDeleteSectionButtonInPopup(){
        return cy.get('.deptDeletebtn');
    }

    getCancelButtonInPopup(){
        return cy.get('.deptCancelDisabledbtn');
    }

    getDeletedSectionMessage(){
        return cy.get('.MuiAlert-message');
    }

    getGradeRows(){
        return cy.get('tbody tr');
    }

    getSecName(){
        return cy.get('.sectionsBtn');
    }

    getDeleteSecIcon(){
        return cy.get('.delete-section');
    }

    getContinueButton(){
        return cy.get('.continue-btn')
    }

}
export default AdminGradesPage