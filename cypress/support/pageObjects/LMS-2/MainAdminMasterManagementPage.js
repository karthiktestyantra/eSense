
class mainAdminMasterManagementPage {

    getTitle() {
        return cy.get('div.page-title h1');
    }
    getPublicationTabLnk() {
        return cy.get('div.card-header ul li a').contains("Publication");
    }
    getTestTypeLnk() {
        return cy.get('div.card-header ul li a').contains("Test Type");
    }
    getDomainMappingTabLnk() {
        return cy.get('div.card-header ul li a').contains("Domain Mapping");
    }
    getDomainRankingTabLnk() {
        return cy.get('div.card-header ul li a').contains("Domain Ranking");
    }
    getCompetencyTabLnk() {
        return cy.get('div.card-header ul li a').contains("Competencies");
    }
    getPublicationNameLst() {
        return cy.get('tbody tr td div.d-flex a.text-gray-800:visible');
    }
    getBottomAddNewBtn() {
        return cy.get('button.flex-center');
    }
    getAddPublicationTitleTxt() {
        return cy.get('div.h4');
    }
    getPublicationNameTxtFld() {
        return cy.get('input[name="publicationName"]');
    }
    getDisplayNameTxtFld() {
        return cy.get('input[name="publicationDisplayName"]');
    }
    getStatusToggleBtn() {
        return cy.get('.fv-row > .form-check > input');
    }
    getAddPublicationSubmitBtn() {
        return cy.get('div.pt-10  button[type="submit"]:visible');
    }
    getAddPublicationCancenBtn() {
        return cy.get('div.pt-10  button[type="button"]').contains("Cancel");
    }
    getPublicationAddedTxt() {
        return cy.get('.body');
    }
    getPublicationAddedbtn() {
        return cy.get('.footer > .btn');
    }
    getStatusLst() {
        return cy.get('.fw-bold .text-align-left.min-w-100px .badge:visible');
    }
    getActionsLst() {
        return cy.get('tbody tr td.text-center button.ctgBtnSect span svg[focusable="false"]:visible');
    }
    getEditBtn() {
        return cy.get('div span.menu-link:visible').contains("Edit");
    }
    getDeleteBtn() {
        return cy.get('div span.menu-link:visible').contains("Delete");
    }
    getDeleteInsideBtn() {
        return cy.get('.modal-footer button').contains("Delete")
    }
    getPublicationPopupDltBtn() {
        return cy.get('button.btn-elevate').contains("Delete");
    }
    getAddNewBtn() {
        return cy.get('div a.btn-primary').contains("Add New");
    }
    getAddDomainBtn() {
        return cy.get('div.stepper-label button')
    }
    getDomainMappingAddTxtFld() {
        return cy.get('input[name="masterName"]')
    }
    getDomainMappingMainSkillTxtBx() {
        return cy.get('input[type="mainSkill"]');
    }
    getDomainMappingMainSkillDisplayName() {
        return cy.get('input[name="mainSkillDisplayName"]')
    }
    getStatusBar() {
        return cy.get('input[name="statusId"]')
    }
    getDomainMappingSubmitBtn() {
        return cy.get('button[type="submit"]').eq(2)
    }
    getDomainMappingMainSkillLst() {
        return cy.get('div a[data-kt-ecommerce-product-filter="product_name"]:visible')
    }
    getDomainMappingActionsLst() {
        return cy.get('.MuiIconButton-label > .MuiSvgIcon-root')
    }
    getCompetencyTxtFld() {
        return cy.get('input[placeholder="Type Competency Name"]')
    }
    getCompetencyDisplayNameTxtFld() {
        return cy.get('input[placeholder="Type Display Name"]')
    }
    getCompetencyTagName() {
        return cy.get('input[placeholder="Type Tag Name"]')
    }
    getCompetencyNameLst() {
        return cy.get('tbody tr td div.d-flex a')
    }
    getCoursesTabActionsLnk() {
        return cy.get('tbody tr td.text-end button.ctgBtnSect span svg[focusable="false"]:visible')
    }
    getChapterLstBtn() {
        return cy.get('div.menu-item span.px-3').contains("Chapter List")
    }
    getAddElaBtn() {
        return cy.get('div.menu-item span.px-3').contains("Add ELA")
    }
    getChapterLstActionsLst() {
        return cy.get('.MuiButtonBase-root .MuiIconButton-label .MuiSvgIcon-root')
    }
    getCompetencyTxtDrpDwnInEla() {
        return cy.get('div.fv-row label span.required').contains("Competency")
    }
    getCompetencyDrpDown() {
        return cy.get('div.addElaField select[name="competency"]')
    }
    getDomainDrpDwnInEla() {
        return cy.get('select[name="domain"]')
    }
    getMainSkillDrpDwnInEla() {
        return cy.get('select[name="mainSkill"]')
    }
    getMainSkillDrpDwnValuesInEla() {
        return cy.get('select[name="mainSkill"] option')
    }
    getGradeLstInDomainRanking() {
        return cy.get('div a h3')
    }
    getDomainDrpDwnInDomainRanking() {
        return cy.get('select[name="domain"]')
    }
    getMainSkillDrpDwnInDomainRanking() {
        return cy.get('select[name="mainSkill"]')
    }
    getMainSkillDrpDwnInDomainRankingLst() {
        return cy.get('select[name="mainSkill"] option')
    }
    getExcellentTxtFldInDomainRanking() {
        return cy.get('input[name="excellent"]')
    }
    getGoodTxtFldInDomainRanking() {
        return cy.get('input[name="Good"]')
    }
    getSatisfactoryTxtFldInDomainRanking() {
        return cy.get('input[name="Satisfactory"]')
    }
    getBetterTxtFldInDomainRanking() {
        return cy.get('input[name="Better"]')
    }
    getActionsLstDltBtn() {
        return cy.get('div.menu-item span.menu-link').contains("Delete")
    }
    getActionsLstEditBtn() {
        return cy.get('div.menu-item span.menu-link').contains("Edit")
    }
    getPopupAccptBtn() {
        return cy.get('div.modal-footer button.btn-primary')
    }
    getInvalidPopUpTxt() {
        return cy.get('div.text-danger span')
    }
    getStatusTxtInDomainRanking() {
        return cy.get('tbody tr td div.badge')
    }
    getDomainRankingCancelBtn() {
        return cy.get('button.btn-lg').contains("Cancel")
    }
    getDomainLst() {
        return cy.get('h3.stepper-title')
    }
    getStatusLstInDomainMappingLst() {
        return cy.get('tbody tr td div.badge')
    }
    getPaginationLst() {
        return cy.get('button.MuiPaginationItem-page')
    }
    getTestTypeLst() {
        return cy.get('tbody tr td div.align-items-center a')
    }
    getTestTypeContents() {
        return cy.get('table tr th')
    }
    getTestTypeSearchFld() {
        return cy.get('input[placeholder="Search test type"]')
    }
    getCompetencySearchyBtn() {
        return cy.get('.align-items-center > .form-control')
    }
    getTesttypeFilterDrpDwn() {
        return cy.get('button.btn-light').contains("Filter")
    }
    getTestTypeFilterDrpDwnStatusTxt() {
        return cy.get('div.py-5 div.mb-10 label.form-label')
    }
    getTestTypeFilterStatusDrpDwn() {
        return cy.get('select[name="status"]')
    }
    getTestTypeFilterResetBtn() {
        return cy.get('button[type="reset"]').contains("Reset")
    }
    getTestTypeTxtFld() {
        return cy.get('input[name="TestType"]')
    }
    getTestTypeCancelBtn() {
        return cy.get('div.me-2 button.btn-lg').contains('Cancel')
    }
    getTestTypeSubmitBtn() {
        return cy.get('button[type="submit"]').contains('Submit')
    }
}
module.exports = new mainAdminMasterManagementPage() 