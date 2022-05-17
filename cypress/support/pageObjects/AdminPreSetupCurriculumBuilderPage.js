class AdminPreSetupCurriculumBuilderPage {

    getTitle() {
        return cy.get('div.header-font-cls');
    }

    getGradeLst() {
        return cy.get('tbody.MuiTableBody-root tr th strong');
    }

    getAddCurriculumBtn() {
        return cy.get('td button');
    }

    getStartWithChapterBtn() {
        return cy.get('button[type="button"]').contains("Start With Chapter");
    }

    getTotalSessionsTxtFld() {
        return cy.get('input[placeholder="Enter total sessions"]');
    }

    getAddNewChapterCloseIcon() {
        return cy.get('div.curAddChptModl svg.close-icon_create_curriculum');
    }

    getStartWithThemeBtn() {
        return cy.get('button[type="button"]').contains("Start With Theme / Unit");
    }

    getAlert () {
        return cy.get('span[role="alert"]')
    }

    getChapterNumTxtFld() {
        return cy.get('div.MuiOutlinedInput-root input[placeholder="Enter Chapter Number"]')
    }

    getChapterName() {
        return cy.get('div.MuiOutlinedInput-root input[placeholder="Enter Chapter Name"]')
    }

    getChapterDescription() {
        return cy.get('div.MuiOutlinedInput-root textarea[placeholder="Enter Chapter Description"]')
    }

    getContinueBtn() {
        return cy.get('.create_curriculum-btn_container > .MuiButton-contained')
    }

    getReminderPopup() {
        return cy.get('.reminder_text-danger')
    }

    getSuccessfulPopup() {
        return cy.get('.MuiSnackbar-root > .MuiPaper-root')
    }

    
  }
  export default AdminPreSetupCurriculumBuilderPage;