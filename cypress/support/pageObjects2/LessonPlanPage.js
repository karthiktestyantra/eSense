class LessonPlanPage {

    getAddLessonPlan(){
       return cy.get('button.view_lesson_btn');
    }

    getCloseIcon(){
        return cy.get('[data-testid=CloseIcon]');
    }

    getCreateNewOption(){
        return cy.get('div.MuiBox-root.css-ffqm7q');
    }

    getSelectFromLibrary(){
        return cy.get('.MuiBox-root.css-1b0mc8n');
    }

    getCreateLessonPlanTitle(){
        return cy.get('.add_lesson_plan-tittle')
    }

    getSelectLessonPlanTitle(){
        return cy.get('.select_library-tittle');
    }

    getBasicDetailsTabTitle(){
        return cy.get('#simple-tab-0');
    }

    getResourcesTabTitle(){
        return cy.get('#simple-tab-1');
    }

    getBasicDetailsGradeField(){
        return cy.get('#grade');
    }

    getBasicDetailsSectionField(){
        return cy.get('#section');
    }

    getBasicDetailsSubjectField(){
        return cy.get('#subject');
    }

    getBasicDetailsThemeorUnitField(){
        return cy.get('#theme');
    }

    getBasicDetailsThemeDropdownValues(){
        return cy.get('ul li.css-1km1ehz')
    }

    getBasicDetailsChapterField(){
        return cy.get('#chapter');
    }

    getBasicDetailsChapterDropdown(){
        return cy.get('ul li.css-1km1ehz')
    }

    getBasicDetailsTopicField(){
        return cy.get('#mui-component-select-topic');
    }

    getBasicDetailsTopicDropdown(){
        return cy.get('ul li.css-1km1ehz')
    }

    getBasicDetailsLearningObjectiveField(){
        return cy.get('div.MuiInputBase-formControl input#mui-5');
    }

    getBasicDetailsStrategiesUsedField(){
        return cy.contains('Strategies');
    }

    getBasicDetailsRemarksField(){
        return cy.get('div.MuiOutlinedInput-root input#mui-3');
    }

    getBasicDetailsSaveButton(){
        return cy.get('button.sectionSaveBtn');
    }

    getBasicDetailsCancelButton(){
        return cy.get('button.sectionCancelBtn');
    }

    getBasicDetailsGoBackButton(){
        return cy.get('span.mt-0.float-left');
    }

    getBasicDetailsUploadCSVButton(){
        return cy.get('button.uploadCSV');
    }
    
    getBasicDetailsThemeorUnitDropdownValues(){
        return cy.get('ul>li.MuiMenuItem-root');
    }

    getBasicDetailsChapterDropdownValues(){
        return cy.get('ul>li.MuiMenuItem-root.css-1km1ehz');
    }

    getBasicDetailsTopicDropdownValues(){
        return cy.get('ul>li.MuiMenuItem-root.css-1km1ehz');
    }

    getLessonPlanCreatedMessage(){
        return cy.get('.MuiAlert-message.css-1w0ym84');
    }

    getResourcesTabUploadResource(){
        return cy.get('.upload-card-container').eq(0);
    }

    getUploadResourcesPopupTitle(){
        return cy.get('h3.select-content-tittle');
    }

    getAddResourcesPopupTitle(){
        return cy.get('h3.select-content-tittle');
    }
    
    getResourcesTabAddResourceFromContentLib(){
        return cy.get('.upload-card-container').eq(1);
    }

    getTopSchoolLibraryTabTitle(){
        return cy.get('button#simple-tab-0');
    }

    getPersonalLibraryTabTitle(){
        return cy.get('button#simple-tab-1');
    }

    getLessonPlanContentCards(){
        return cy.get('.MuiGrid-root>.content-card>.MuiCardContent-root').eq(0);
    }

    getLessonPlanContentChecked(){
        return cy.get('button svg[data-testid="CheckCircleIcon"]');
    }

    getUploadTab(){
        return cy.get('.css-1q2h7u5:visible').eq(0);
    }

    getGoogleDriveTab(){
        return cy.get('.css-1q2h7u5:visible').eq(1);
    }

    getDropBoxTab(){
        return cy.get('.css-1q2h7u5:visible').eq(2);
    }

    getURLbox(){
        return cy.get('#input-with-icon-textfield');
    }

    getDragAndDropOption(){
        return cy.get('p.drop-sub');
    }

    getUploadURLButton(){
        return cy.get('.uploadUrlBtn');
    }

    getUploadResourcesPopupCloseIcon(){
        return cy.get('.close-icon_upload-resource');
    }

    getResourcesToggleButton(){
        return cy.get('.accesSwitch');
    }

    getResourcesDeleteIcon(){
        return cy.get('.deleteIcon:visible');
    }

    getAddResourcesSearchContent(){
        return cy.get('input[placeholder="Search Content..."]');
    }

    getAddResourcesSearchIcon(){
        return cy.get('svg[data-testid="SearchIcon"]');
    }

    getAddResourceThumbnail(){
        return cy.get('.content-card>.MuiCardContent-root.css-1qw96cp').eq(0);
    }

    getResourcesThumbnailSelected(){
        return cy.get('.selected-icon');
    }

    getResourcesSelectedCount(){
        return cy.get('.select-content-footer>div>div>p.css-9l3uo3');
    }

    getAddResourcesButton(){
        return cy.get('.sectionSaveBtn:visible');
    }

    getAddedResources(){
        return cy.get('.filename');
    }

    getAddedViewLessonPlan(){
        return cy.get('ul>li.lessonPlan-item:nth-of-type(1)')
    }
}

export default LessonPlanPage