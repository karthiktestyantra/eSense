class MainAdminAddELAPage {

    getMenuCoursesBtn() {
        return cy.get('div#kt_aside_menu_wrapper a span.menu-title').contains('Courses')
    }

    getCoursesKebabMenu() {
        return cy.get('span.MuiIconButton-label svg')
    }

    getCoursesKebabMenuChapterListBtn() {
        return cy.get('div.MuiModal-root span').contains('Chapter List')
    }

    getChaterListKebabMenu() {
        return cy.get('span.MuiIconButton-label svg')
    }

    getCoursesKebabMenuAddELABtn() {
        return cy.get('div.MuiModal-root span').contains('Add ELA')
    }

    getSearchCourseNameTxtField() {
        return cy.get('input[placeholder="Search Course Name"]')
    }

    getSearchListOfCourseName() {
        return cy.get('a[data-kt-ecommerce-product-filter="product_name"]')
    }

    getUploadQuestionsBtn() {
        return cy.get('button.btn').contains('Upload Questions')
    }

    getUploadFileBtn() {
        return cy.get('input#file-input')
    }

    getImportQuestionBtn() {
        return cy.get('.UploadModal_bulkImport__1mkUM')
    }

    getTopicNameDropdown() {
        return cy.get('select[name="topic"]')
    }

    getTypeTxtField() {
        return cy.get('div.addElaField input[name="type"]')
    }

    getConductedForTxtField() {
        return cy.get('div.addElaField input[name="conductFor"]')
    }

    getLearningOutcomeTxtField() {
        return cy.get('input[name="learningOutcome"]')
    }

    getObjectiveTxtField() {
        return cy.get('input[name="objective"]')
    }

    getParameterTxtField() {
        return cy.get('input[name="parameter"]')
    }

    getDomainDropdown() {
        return cy.get('select[name="domain"]')
    }

    getMainSkillDropdown() {
        return cy.get('select[name="mainSkill"]')
    }

    getSubSkillTxtField() {
        return cy.get('input[name="subSkill"]')
    }

    getDomainExcellentTxtField() {
        return cy.get('input[name="domainExcellent"]')
    }

    getDomainGoodTxtField() {
        return cy.get('input[name="domainGood"]')
    }

    getDomainSatisTxtField() {
        return cy.get('input[name="domainSatis"]')
    }

    getDomainBetterTxtField() {
        return cy.get('input[name="domainBetter"]')
    }

    getCompetencyDropdown() {
        return cy.get('select[name="competency"]')
    }

    getSubCompetencyTxtField() {
        return cy.get('input[name="subCompetency"]')
    }

    getcompetencyExcellentTxtField() {
        return cy.get('input[name="competencyExcellent"]')
    }

    getcompetencyGoodTxtField() {
        return cy.get('input[name="competencyGood"]')
    }

    getCompetencySatisTxtField() {
        return cy.get('input[name="competencySatis"]')
    }

    getcompetencyBetterTxtField() {
        return cy.get('input[name="competencyBetter"]')
    }

    getUploadRankingsBtn() {
        return cy.get('button.btn').contains('Upload Rankings')
    }

    getSelectFolderUploadRankings() {
        return cy.get('input#file-input')
    }

    getImportUploadRankingsBtn() {
        return cy.get('button.UploadModal_bulkImport__1mkUM ')
    }

    getSaveELABtn() {
        return cy.get('button.btn span').contains('Save ELA')
    }

    getELASuccessFullySavedMsg() {
        return cy.get('div.modal-content div.body')
    }

    getELADeleteBtn() {
        return cy.get('span.indicator-label').contains('Delete ELA')
    }

    getOkBtn() {
        return cy.get('.footer > .btn')
    }

    getDeletePopupOkBtn() {
        return cy.get('button.btn-elevate').contains('Delete')
    }

    getBackBtn() {
        return cy.get('.card-body > :nth-child(1) > :nth-child(1) > .btn')
    }

    getBackPopupBtn() {
        return cy.get('.modal-footer > .btn-primary')
    }

    getPopupOkBtn() {
        return cy.get('.modal-footer > .btn-primary')
    }

    getErrorMsgMoreThn50() {
        return cy.get('span[role="alert"]')
    }

    getOrganizationmanagementBtn() {
        return cy.get('div.menu-item span.menu-title').contains('Organization Management')
    }

    getListOfOrganizationmanagementNames() {
        return cy.get('a[data-kt-ecommerce-product-filter="product_name"]')
    }

    getListOfOrganizationmanagementKababMenu() {
        return cy.get(':nth-child(n) > .text-center > [href="#"] > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root')
    }

    getSchoolManagementBtn() {
        return cy.get(':nth-child(5) > .text-center > .menu > [style="text-align: justify;"] > .menu-link')
    }

    getSchoolManagementSubDomain() {
        return cy.get('td.text-align-left a')
    }

    getListOfSchoolmanagementKababMenu() {
        return cy.get('button.ctgBtnSect span svg')
    }

    getSyncNowBtn() {
        return cy.get(':nth-child(5) > .text-center > .menu > :nth-child(4) > .menu-link')
    }

    getAdminUserImg() {
        return cy.get('div.side-nav-lists ul li a[href="/admin/teacherStudent"]')
    }

    getAdminTeacherNames() {
        return cy.get(':nth-child(n) > :nth-child(2) > .MuiBox-root > .TeacherDashboard_studentMeta__3kQfU > :nth-child(1)')
    }

    getListOfTeacherEditBtn() {
        return cy.get('button[aria-label="Edit Teacher"]')
    }

    getSectionAndSubBtn() {
        return cy.get('button#scrollable-auto-tab-2')
    }

    getSectionName() {
        return cy.get('div.sectGrdClsName')
    }

    getSectionDropdown() {
        return cy.get('.section-row-ta-out > .right-cls > .MuiFormControl-root > .MuiOutlinedInput-root > #opt-subjects')
    }

    getSectionDropdownGradeName() {
        return cy.get('.MuiListItemText-root > .MuiTypography-root')
    }
    getSectionDropDwnNameLst() {
        return cy.get('div.MuiListItemText-root span')
    }
    getSectionDrpDwnCheckBxLst() {
        return cy.get('div ul[role="listbox"] li span.MuiCheckbox-root input')
    }

    getSectionDropdownGradeCheckBox() {
        return cy.get('input.PrivateSwitchBase-input')
    }


    getSaveChangesBtn() {
        return cy.get('div.section-submit-button-row button')
    }

    getMenuProfileImg() {
        return cy.get('div.profile-pic ')
    }

    getMenuProfileLogoutBtn() {
        return cy.get('div.classTitle').contains('Logout')
    }

    getTeacherMyclassGradeName() {
        return cy.get('div.card_roman_txt').contains('Grade 5 B')
    }

    getTeacherMyclassImg() {
        return cy.get('div.side-nav-dashboard img[src="/static/media/myClasses.e2b87f30.svg"]')
    }

    getTeacherMyclassGradeArrowBtn() {
        return cy.get('div.popover-arrow')
    }

    getTeacherAssessmentBtn() {
        return cy.get('button.MuiButtonBase-root').contains('Assessments')
    }

    getTeacherAsignmentBtn() {
        return cy.get('button[value="assignments"]')
    }

    getTeacherAddElaBtn() {
        return cy.get('button[data-testid="add-icon"]')
    }

    getElaCardNameBtn() {
        return cy.get('div.MuiGrid-root div.d-tree-head')
    }

    getTeacherElaCardNameTxt() {
        return cy.get('h4.cntLibCardTitle strong')
    }

    getTeacherMyProfileBtn() {
        return cy.get('div.menu-txt').contains('My Profile')
    }

    getEsenseAdminElaDeleteBtn() {
        return cy.get('span.indicator-label').contains('Delete ELA')
    }




}
module.exports = new MainAdminAddELAPage() 