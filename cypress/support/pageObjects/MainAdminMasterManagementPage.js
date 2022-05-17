class mainAdminMasterManagementPage {

    getTitle() {
        return cy.get('div.page-title h1');
    }
    getPublicationTabLnk(){
        return cy.get('div.card-header ul li a').contains("Publication")
    }
    getPublicationNameLst(){
        return cy.get('tbody tr td div.d-flex a.text-gray-800:visible')
    }
    getBottomAddNewBtn(){
        return cy.get('.tab-pane.active .card-body > .table-responsive > .d-flex.flex-center > .btn > span.indicator-label').contains("Add New")
    }
    getAddPublicationTitleTxt(){
        return cy.get('div.h4')
    }
    getPublicationNameTxtFld(){
        return cy.get('input[name="publicationName"]')
    }
    getDisplayNameTxtFld(){
        return cy.get('input[name="publicationDisplayName"]')
    }
    getStatusToggleBtn(){
        return cy.get('.fv-row > .form-check > input')
    }
    getAddPublicationSubmitBtn(){
        return cy.get('div.pt-10  button[type="submit"]:visible')
    }
    getAddPublicationCancenBtn(){
        return cy.get('div.pt-10  button[type="button"]').contains("Cancel")
    }
    getPublicationAddedTxt(){
        return cy.get('.body')
    }
    getPublicationAddedbtn(){
        return cy.get('.footer > .btn')
    }
    getStatusLst(){
        return cy.get('.fw-bold .text-align-left.min-w-100px .badge:visible')
    }
    getActionsLst(){
        return cy.get('tbody tr td.text-center button.ctgBtnSect span svg[focusable="false"]:visible')
    }
    getEditBtn(){
        return cy.get('div span.menu-link:visible').contains("Edit")
    }
    getDeleteBtn(){
        return cy.get('div span.menu-link:visible').contains("Delete")
    }
    getPublicationPopupDltBtn(){
        return cy.get('button.btn-elevate').contains("Delete")
    }

  }
  export default mainAdminMasterManagementPage;