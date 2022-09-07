class EsenseAdminCurriculamPlanPage{

    getCurriculamPlanBtn(){
        return cy.get('div.menu-item a span.menu-title').contains('Curriculum Plan')
       }

    getCurriculumListOfCourseCard(){
     return cy.get(':nth-child(2) > .d-flex > .text-gray-800:visible')
    }
    
    getCurriculumSearchTxtField(){
     return cy.get('input[placeholder="Search Course Name"]')
    }

    getAddCurriculamPlanBtn(){
        return cy.get('tr td button')
    }

    getAddCurriculamTitle(){
        return cy.get('div#kt_toolbar_container h1')
    }

    getListOfAddThemesOrUnitandChaptersBtn(){
        return cy.get('button.MuiButton-root')
    }

    getCloseIcon(){
        return cy.get('div svg[data-testid="CloseIcon"]')
    }

    getAddNewThemeOrUnitPopupTitle(){
        return cy.get('div.create_curriculum-content h1')
    }

    getAddNewChapterPopupTitle(){
        return cy.get('div.create_curriculum-content h1')
    }

    getChapterNumberTxtField(){
        return cy.get('div input[placeholder="Enter chapter number"]')
    }
     
    getChapterNameDropdown(){
        return cy.get('div select[name="chapterId"]')
    }

    getChapterDiscription(){
        return cy.get('textarea[name="chapterDescription"]')
    }

    getChapterTotalSession(){
        return cy.get('[name="totalSession"]')
    }
    
    getAddTopicBtn(){
        return cy.get('div button[aria-label="Add Topic"]')
    }
    getAddTopicInPopUpBtn(){
        return cy.get('button.create_curriculum-btn').contains("Add Topic")
    }

    getTopicNameDropDown(){
        return cy.get('div select[name="topicId"]')
    }

    getTopicDescription(){
        return cy.get('div textarea[placeholder="Type topic description"]')
    }

    getSaveTopicbtn(){
        return cy.get('#create_curriculum-topic-Form > .create_curriculum-btn_container > .MuiButton-contained')
    }


    getAddObjectiveBtn(){
        return cy.get('div button[aria-label="Add Objective"]')
    }

    getObjectiveDiscription(){
        return cy.get('div textarea[placeholder="Type objective description"]')
    }

    getSaveObjectiveBtn(){
        return cy.get('#create_curriculum-objective-Form > .create_curriculum-btn_container > .MuiButton-contained')
    }

    getSaveOutcomeBtn(){
        return cy.get('#create_curriculum-outcome-Form > .create_curriculum-btn_container > .MuiButton-contained')
    }

    getAddOutComeBtn(){
        return cy.get('div button[aria-label="Add Outcome"]')
    }

    getOutComeDiscription(){
        return cy.get('div textarea[placeholder="Type outcome description"]')
    }

    getLearningOutComeTitleTxt(){
        return cy.get(':nth-child(4) > .MuiPaper-root > :nth-child(1) > .MuiCardHeader-content > .MuiTypography-root > div')
    }

    getOutComeCancelBtn(){
        return cy.get('button.MuiButton-root').contains('Cancel')   
    }

    getOutComeCreatedTitleHeader(){
        return cy.get(':nth-child(4) > .MuiPaper-root > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiCardContent-root > .MuiCardHeader-root > .MuiCardHeader-content > .MuiTypography-root')
    }

    getChapterEndDate(){
        return cy.get('button.MuiPickersDay-dayWithMargin span')
    }

    getSaveDraftbtn(){
        return cy.get('button[form="create_curriculumForm"]')
    }

    getSaveDraftOnlyThemeBtn(){
        return cy.get('.MuiButton-contained')
    }

    getChapterEndNextArrowBtn(){
        return cy.get('div button[aria-label="Next month"]')
    }

    getOnlyThemeAddedWithoutChapterTxt(){
        return cy.get('div.adminThmeAddeTxt')
    }

    getCalenderIcon(){
        return cy.get('button.MuiIconButton-edgeEnd')
    }

    getThemeAddChapterBtn(){
        return cy.get(':nth-child(3) > :nth-child(2) > .create_curriculum-content > .create_curriculum-btn_container > .MuiButton-contained')
    }

    getAddThemePopupCloseBtn(){
        return cy.get('[data-testid="CloseIcon"]')
    }

    getReattemptAddChapterBtn(){
        return cy.get('div button.MuiButton-containedPrimary').contains('Chapter')
    }

    getReattemptAddThemeBtn(){
        return cy.get('div.MuiContainer-maxWidthLg button').contains('Theme')
    }

    getChapterDeleteBtn(){
        return cy.get('span.delBtnBasicInfo')
    }

    getThemeDeleteBtn(){
        return cy.get('span.delBtnBasicInfo')
    }

    getDeleteChapterPopupBtn(){
        return cy.get('.delete_reminder-btn_container > .MuiButton-contained')
    }

    getDeleteThemerPopupBtn(){
        return cy.get('.delete_reminder-btn_container > .MuiButton-contained')
    }

    getChapterDescriptionName(){
        return  cy.get('div.container-fluid strong')
    }

    getThemeEndDescription(){
        return cy.get('div.panel-heading div.card_material')
    }

    getThemeName(){
        return cy.get('div input[name="themeName"]')
    }

    getThemeDiscription(){
        return cy.get('div textarea[name="themeDescription"]')
    }

    getAddNewChapterBtn(){
        return cy.get('section button[aria-label="Add New Chapter"]')
    }

    getEndAddChapterBtn(){
        return cy.get('button[form="create_curriculumForm"]')
    }

    getThemeSaveDraft(){
        return cy.get('.MuiButton-contained')
    }

    getAddChapterDraftSuccessMsg(){
        return cy.get('div.MuiAlert-message')
    }

    getAddChapterDraftedHeader(){
        return cy.get('.panel-heading h6')
    }

    getAddChapterNameDropdownText(){
        return cy.get('select[name="chapterId"] option:nth-child(2)')
    }

    getAddTopicCancelBtn(){
        return cy.get('button.MuiButton-root').contains('Cancel')
    }

    getAddObjectiveCancelBtn(){
        return cy.get('button.MuiButton-root').contains('Cancel')
    }

    getAddThemePopupHeaderTitle(){
        return cy.get('div.create_curriculum-content h1')
    }

    getLearningObjectiveTitleheader(){
        return cy.get(':nth-child(3) > .MuiPaper-root > .MuiCardHeader-root > .MuiCardHeader-content > .MuiCardHeader-title')
    }

    getCreatedChapterHeaderTitle(){
        return  cy.get('div.flex-grow-1 h6')
    }

    getCurriculumPlanHeaderTxt(){
       return cy.get('.fw-bold > :nth-child(n) > :nth-child(1) > .d-flex > .text-gray-800')
    }

    getTopicTitleHeader(){
        return cy.get('span.MuiCardHeader-title').contains('Topics')
    }

    getMax50CharexeedMsg(){
        return cy.get('div.text-danger span')
    }

    getObjectiveCreated(){
        return cy.get('.MuiCardContent-root .MuiCardHeader-root .MuiCardHeader-content .MuiTypography-root')
    }

    getThisFieldReqMes(){
        return cy.get('div.text-danger span')
    }

    getMax100CharexeedMsg(){
        return cy.get('div.text-danger span')
    }

    getDisabledDatePickerBtn(){
        return cy.get('button.Mui-disabled:visible').eq(1)
    }
    getGradeLst(){
        return cy.get('tbody tr td:nth-child(1) div.d-flex a.fw-bolder')
    }
    getChapterCloseIcon(){
        return cy.get('div.create_curriculum-wrapper svg.close-icon_create_curriculum')
    }
    getChapterEditBtn(){
        return cy.get('div.themeAction span.editBtnBasicInfo')
    }
    getPublishBtn(){
        return cy.get('.save-draft-container > .MuiButton-contained')
    }
    getAddChapterInPopup(){
        return cy.get('button[aria-label="Add New Chapter"]')
    }
    getAddTopicBtnInPopup(){
        return cy.get('#create_curriculum-topic-Form > .create_curriculum-btn_container > .MuiButton-contained')
    }
    getHourTopicDurationFld(){
        return cy.get('div input[name="topicHour"]')
    }
    getMinutesTopicDurationFld(){
        return cy.get('div input[name="topicMinute"]')
    }
    getTopicDurationTitle(){
        return cy.get('.font-cls-topic-duration')
    }
    getHourTopicDurationTxt(){
        return cy.get('fieldset legend span').contains("Hour")
    }
    getMinuteTopicDurationTxt(){
        return cy.get('fieldset legend span').contains("Minutes")
    }
    getTopicDropdown(){
        return cy.get('select[name="topicId"]')
    }
    getTopicDescriptiontextarea(){
        return cy.get('textarea[name="topicDescription"]')
    }

    getThumbnailViewTable(){
        return cy.get('table#kt_ecommerce_products_table')
    }

 getCurriculamRecordList(){
        return cy.get('tbody.fw-bold tr')
    }

getCurriculamNextPagePagination(){
        return cy.get('button[aria-label="Go to next page"]')
    }

  getCurriculamPreviousPagePagination(){
        return cy.get('svg[data-testid="NavigateBeforeIcon"]')
    }

 getCurriculamViewDetailsStatus(){
        return cy.get('div.milestoneAccordStatus span')
    }

    getCurriculamEditStatus(){
        return cy.get('span.editBtnBasicInfo')
    }
    
    getCurriculamDeleteStatus(){
        return cy.get('span.delBtnBasicInfo')
    }

 getCurriculamNextPagePagination(){
        return cy.get('button[aria-label="Go to next page"]')
    }

}
    export default EsenseAdminCurriculamPlanPage;
