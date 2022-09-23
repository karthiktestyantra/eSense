class EsenseAdminGradePage {

   getHarMenuGradebookTemplateBtn() {
      return cy.get('span.menu-title').contains('Gradebook Template')
   }

   getHarCreateTemplateBtn() {
      return cy.get('a.MuiButton-root').contains('Create Template')
   }

   getHarPublishBtn() {
      return cy.get('.stdGrdActionCnt > :nth-child(2)')
   }

   getHarPublishPopupYesBtn() {
      return cy.get('.pub_temp-btn_container > .MuiButton-contained')
   }

   getHaUnPublishPopupYesBtn() {
      return cy.get('.unpublish-button > span')
   }

   getHarCreateNewTemplateBtn() {
      return cy.get('a[href="/template/create-template"]')
   }

   getHarListOfEditBtn() {
      return cy.get('img[aria-label="Edit"]')
   }

   getHarListOfGradeName() {
      return cy.get('p.name')
   }

   getHarListOfDraft() {
      return cy.get('button.MuiButton-root')
   }

   getHarDeletePopupTxt() {
      return cy.get('div.delete-poc-confirmation-font-cls')
   }

   getHarPopupDeleteCancelBtn() {
      return cy.get('div.cancel-button')
   }

   getHarPopupDeleteBtn() {
      return cy.get('div.delete-button')
   }

   getHarPopupDeleteSuccessMesg() {
      return cy.get('.font-cls')
   }

   getHarListOfPublished() {
      return cy.get('button.MuiButton-root').contains('Published')
   }

   getHarAddTestTypeLink() {
      return cy.get('button.MuiButton-root').contains('+ Add Test Type')
   }

   getHarAddActivityLink() {
      return cy.get('button.MuiButton-root').contains('+ Add Activity')
   }

   getHarAddActivityDeleteBtn() {
      return cy.get('[aria-label="Delete Activity"]')
   }

   getHarListOfTemplateEnableAndDisabledBtn() {
      return cy.get('span.MuiSwitch-root')
   }

   getHarAddSubjectLink() {
      return cy.get('button.MuiButton-root').contains('+ Add Subject ')
   }

   getHarAddTheoryandPracticalLink() {
      return cy.get('button.MuiButton-root').contains('+ Add Theory and Practical')
   }

   getHarEditBtn() {
      return cy.get('button.MuiButton-root').contains('Edit')
   }

   getHarCreateNewBtn() {
      return cy.get('.CreateNewTemplate_createNewButton__2pDmp')
   }

   getHarGradeDropdown() {
      return cy.get('div.MuiSelect-root')
   }

   getHarNumOfThemeDropdown() {
      return cy.get('div.MuiSelect-root')
   }

   getHarTermDropdown() {
      return cy.get('div.MuiSelect-root')
   }

   getHarTermDropdownValue() {
      return cy.get('ul.MuiList-root li')
   }

   getHarAddTestTypeDeleteBtn() {
      return cy.get('button[aria-label="Delete Test"]')
   }

   getHarNumOfThemeDropdownValue() {
      return cy.get('ul.MuiList-root li')
   }

   getHarMandatoryGradeTxt() {
      return cy.get('#demo-simple-select-helper')
   }

   getHarMaxMarksDrpDwn() {
      return cy.get('div.MuiInputBase-formControl #demo-simple-select-helper').eq(3)
   }

   getHarSectionsLst() {
      return cy.get('div ul li.MuiListItem-gutters:visible')
   }

   getHarGradeValue() {
      return cy.get('ul.MuiList-root li')
   }

   getHarNumOfTesttypeDropdown() {
      return cy.get('div.MuiSelect-root')
   }

   getHarNumOfMaxMarksDropdown() {
      return cy.get('div.MuiSelect-root')
   }

   getHarSubjectDropdown() {
      return cy.get('div.MuiSelect-root')
   }

   getHarPracTestTypeDropdown() {
      return cy.get('div.MuiSelect-root')
   }

   getHarPrcTestTypeDropdownValue() {
      return cy.get('ul.MuiList-root li')
   }

   getHarPracTheoryTxtField() {
      return cy.get('.CreateNewTemplate_theo_prac_out_cls__1ViAo > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
   }

   getHarPracPracticalTxtField() {
      return cy.get('.CreateNewTemplate_crtNewTempCodeSubInner__Kq2t3 > :nth-child(3) > .MuiInputBase-root > .MuiInputBase-input')
   }


   getHarMaxMarksDropdownValue() {
      return cy.get('ul.MuiList-root li')
   }

   getHarSubjectDropdownValue() {
      return cy.get('ul.MuiList-root li')
   }


   getHarNumOfTesttypeDropdownValue() {
      return cy.get('ul.MuiList-root li')
   }

   getHarActivity1() {
      return cy.get('input[name="activity"]')
   }

   getHarSaveDraftBtn() {
      return cy.get('button.MuiButton-root').contains('Save As Draft')
   }

   getHarCancelBtn() {
      return cy.get('button.MuiButton-root').contains('Cancel')
   }

   getHarCreateTemplatePgeHeader() {
      return cy.get('div#kt_page_title')
   }

   getHarDeleteBtn() {
      return cy.get(':nth-child(n) > :nth-child(6) > .action-btn-container > [src="/static/media/trashFill.0e6cc947.svg"]')
   }


   getHarListOfGradebookColumnHeadername() {
      return cy.get('th.MuiTableCell-root')
   }

   getHarListOfGradebookTableCheckBx() {
      return cy.get('div.logoDisplay span.MuiCheckbox-root')
   }

   getHarListOfGradebookTableViewBtn() {
      return cy.get('button img[src="/static/media/rightViewImg.a97b7807.svg"]')
   }

   getHarGoBackBtn() {
      return cy.get('.viewTempGoBackBtn')
   }

}
module.exports = new EsenseAdminGradePage() 