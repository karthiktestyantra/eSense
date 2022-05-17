class AdminGradePage {

    getAddNewSectionPopupTitle(){
        return cy.get('.title');
    }

    getGradeFiveAddBtn() {
        return cy.get('.sectionAddBtn').eq(4);
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
    
  }
  export default AdminGradePage;