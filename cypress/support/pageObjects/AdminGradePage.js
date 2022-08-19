class AdminGradePage {

    getAddNewSectionPopupTitle(){
        return cy.get('.title');
    }

    getGradeLst(){
        return cy.get('tbody tr.MuiTableRow-root  td.grade-name div')
    }

    getEditableGradeLst(){
        return cy.get('tbody tr.MuiTableRow-root  td.grade-name input')
    }

    getSectionsLst(){
        return cy.get('button.sectionsBtn')
    }

    getSectionAddBtn(){
        return cy.get('button.sectionAddBtn')
    }

    getSectionNameTxtFld() {
        return cy.get('div.MuiOutlinedInput-root input[type="text"]');
    }

    getOptionalSubDrpDwn() {
        return cy.get('div.MuiOutlinedInput-root #opt-subjects');
    }

    getOptionalSubLstBx() {
       return cy.get('div.MuiPaper-root ul li div.MuiListItemText-root span.MuiTypography-root');
    }

    getAddSectionBtn() {
        return cy.get('.sectionSaveBtn');
    }

    getCreateSectionSuccessPopup() {
        return cy.get('.MuiAlert-message');
    }

    getClassDetailBtnInAddSectionPopup(){
        return cy.get('button.class-details')
    }

    getClassDetailsTitle(){
        return cy.get('div.header-container-out div')
    }

    getAddSectionCloseBtn(){
        return cy.get('button.closeModal')
    }
    
  }
  export default AdminGradePage;