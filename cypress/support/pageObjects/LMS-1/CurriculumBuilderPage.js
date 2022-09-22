class CurriculumBuilderPage{

    getCBScreenTitle(){
        return cy.get('.header-font-cls')
    }

    getStep2Content(){
        return cy.get('.heading-font-cls')
    }

    getGradesColumnTitle(){
        return cy.get('.MuiTableCell-head:nth-child(1)')
    }

    getEditedByColumnTitle(){
        return cy.get('.MuiTableCell-head:nth-child(2)')
    }

    getLastEditedColumnTitle(){
        return cy.get('.MuiTableCell-head:nth-child(3)')
    }

    getStatusColumnTitle(){
        return cy.get('.MuiTableCell-head:nth-child(4)')
    }

    getActionsColumnTitle(){
        return cy.get('.MuiTableCell-head:nth-child(5)')
    }

    getGradesColumnValues(){
        return cy.get('th.MuiTableCell-body')
    }

    getEditedbyColumnValues(){
        return cy.get('td.MuiTableCell-body:nth-of-type(1)')
    }

    getLastEditedColumnValues(){
        return cy.get('td.MuiTableCell-body:nth-of-type(2)')
    }

    getStatusColumnValues(){
        return cy.get('td.MuiTableCell-body:nth-of-type(3)')
    }

    getActionsColumnValues(){
        return cy.get('td.MuiTableCell-body:nth-of-type(4)')
    }

    getAddCurriculumButton(){
        return cy.contains('Add curriculum')
    }

    getCreateCurriculumScreenTitle(){
        return cy.get('.create_curriculum-tray-title')
    }

    getDepartmentDropdown(){
        return cy.get('#department-select')
    }

    getDepartmentDropdownValues(){
        return cy.get('.MuiList-root')
    }

    getSubjectDropdown(){
        return cy.get('#subject-select')
    }

    getSubjectDropdownValues(){
        return cy.get('.MuiList-root')
    }

    getStartWithThemeUnit(){
        return cy.get('.crtCurrBtnAct .MuiButton-root').eq(0)
    }

    getStartWithChapter(){
        return cy.get('.crtCurrBtnAct .MuiButton-root').eq(1)
    }

    getAddNewThemeUnitTitle(){
        return cy.get('h1.create_curriculum-title')
    }

    getAddNewChapterTitle(){
        return cy.get('h1.create_curriculum-title')
    }

    getAddNewThemeUnitOrChapterCloseIcon(){
        return cy.get('.close-icon_create_curriculum')
    }

    getChapterName(){
        return cy.get('input[placeholder="Enter Chapter Name"]')
    }

    getChapterNum(){
        return cy.get('input[placeholder="Enter Chapter Number"]')
    }

    getChapterDescription(){
        return cy.get('[placeholder="Enter Chapter Description"]')
    }

    getTotalSessionsPeriod(){
        return cy.get('input[placeholder="Enter total sessions"]')
    }

    getChapterContinueButton(){
        return cy.get('[form="create_curriculumForm"]')
    }

    getChapterList(){
        return cy.get('.curriculum_view .timeline-item')
    }

    getChapterDeleteIcon(){
        return cy.get('.delBtnBasicInfo')
    }

    getDeleteChapterButton(){
        return cy.get('.dlt_prime-delete')
    }

    getThemeName(){
        return cy.get('input[placeholder="Enter Theme Name"]')
    }

    getThemeDescription(){
        return cy.get('[placeholder="Enter Description"]')
    }

    getThemeContinueButton(){
        return cy.get('[form="create_theme_curriculumForm"]')
    }

    getThemeList(){
        return cy.get('.curriculum_view .timeline-item')
    }

    getThemeDeleteIcon(){
        return cy.get('.delBtnBasicInfo')
    }

    getDeleteThemeButton(){
        return cy.get('.dlt_prime-delete')
    }

    getGobackbutton(){
        return cy.get('.heading-font-cls')
    }

    getAddThemeUnitAndChapterSection(){
        return cy.get('h2.create_curriculum-sub-title')
    }

    getAllColumnValues(){
        return cy.get('.MuiTableRow-root.css-16nxph9')
    }

    getContinueButton(){
        return cy.get('.continue-btn')
    }
}

module.exports = new CurriculumBuilderPage() 