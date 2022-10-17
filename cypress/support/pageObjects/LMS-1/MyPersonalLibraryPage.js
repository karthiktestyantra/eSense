class MyPersonalLibraryPage {
    
    getMyPersonalLibraryTab(){
      return cy.get('button[value="personal"]');
    }

    getBookmarkedQuickLink(){
        return cy.get('div.MuiCardContent-root>p:nth-of-type(2)').contains('Bookmarked')
    }

    getVideoQuickLink(){
        return cy.get('div.MuiCardContent-root>p:nth-of-type(2)').contains('Video')
    }

    getLessonPlansQuickLink(){
        return cy.get('div.MuiCardContent-root>p:nth-of-type(2)').contains('Lesson Plan')
    }

    getAssessmentQuickLink(){
        return cy.get('div.MuiCardContent-root>p:nth-of-type(2)').contains('Assessments')
    }

    getTimelinesQuickLink(){
        return cy.get('div.MuiCardContent-root>p:nth-of-type(2)').contains('Timelines')
    }

    getFlashcardsQuickLink(){
        return cy.get('div.MuiCardContent-root>p:nth-of-type(2)').contains('Flashcards')
    }

    getInteractiveVideoQuickLink(){
        return cy.get('div.MuiCardContent-root>p:nth-of-type(2)').contains('Interactive Video')
    }

    getTextBookQuickLink(){
        return cy.get('div.MuiCardContent-root>p:nth-of-type(2)').contains('Textbooks')
    }

    getInteractiveVideoTitleOnTop(){
        return cy.get('.MuiBreadcrumbs-li>.MuiTypography-root')
    }

    getCreateNew(){
        return cy.get('div.my-collection-add')
    }

    getCreateNewCollectionPopupTitle(){
        return cy.get('h1.collection_title_popup')
    }

    getNameOfTheCollectionField(){
        return cy.get('input[id="collection_name"]')
    }

    getGradeDropdownBox(){
        return cy.get('#coll_grade')
    }

    getSubjectDropdownBox(){
        return cy.get('#coll_subject')
    }

    getDescriptionBox(){
        return cy.get('.creatNewColDescSect > .MuiFormControl-root > .MuiOutlinedInput-root')
    }

    getCreateCollectionButton(){
        return cy.get('button[type="submit"]')
    }

    getCloseIconInCreateNewCollectionPopup(){
        return cy.get('svg[data-testid="CloseIcon"]')
    }

    getBookmarkedPageTitle(){
        return cy.get('li.MuiBreadcrumbs-li>p')
    }

    getBookmarkedIcon(){
        return cy.get('button.bookmark-icon')
    }
    getLookintheMirrorBookMarkIcon(){
        return cy.xpath('//div[@id="simple-tabpanel-1"]//h4[.="I Look in the Mirror"]/ancestor::div[@class="MuiCardContent-root css-1qw96cp"]//button')
    }
    getMyPorsonalLibraryLookintheMirrorBookMarkIcon(){
        return cy.xpath('//h4[.="I Look in the Mirror"]/ancestor::div[@class="MuiCardContent-root css-1qw96cp"]//button')
    }

    getBacktoMyPersonalLibrary(){
        return cy.get('li.MuiBreadcrumbs-li>a').eq(1)
    }

    getBrowseFiles(){
        return cy.get('input[type="file"]')
    }

    getUploadedFileNameVerify(){
        //return cy.get('div.file-upload-meta>div:first-of-type')
        return cy.get('div.MuiGrid-root>div>h3')
    }

    getLessonPlanCreateNewButton(){
        return cy.get('.css-5zrdtn')
    }

    getBookMarkedButton(){
        return cy.get('svg[class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-8cqusc"]')
    }

    getLookInToMirrorThreeDots(){
        return cy.xpath('//button[@id="card-dropdown-1-0"]')
    }
    getAddToCollectionBtn(){
        return cy.xpath('//li[@value="add-collection"]')
    }
    getAutomationCollectionsButton(){
        return cy.get('li.MuiMenuItem-gutters').contains('test automation')
    }

    getMyCollectionCreateNewBtn(){
        return cy.get('div[class="add-inner text-center"]')
    }

    getCreateNewNameOfCollection(){
        return cy.get('input[id="collection_name"]')
    }
    getCreateNewGread(){
        return cy.get('div[id="coll_grade"]')
    }

    getCreateNewGread3Opt(){
        return cy.get('li.MuiButtonBase-root ').contains('Grade 3')
    }
    getCreateNewSubject(){
        return cy.get('div[id="coll_subject"]')
    }
    getCreateNewSubjectEnglishOpt(){
        return cy.get('li.MuiButtonBase-root').contains('English')
    }
    getCreateNewCreateCollection(){
        return cy.get('button[type="submit"]')
    }

    getCollectionslist(){
        return cy.get('h3[class="my-collections-label"]')
    }

    getCollectionsEditBtn(){
        return cy.get('span[class="right-cls-out editCollection"]')
    }

    getEditCollectionCloseIcon(){
        return cy.get('svg.close-icon_popup')
    }

    getEditCollectionDescriptionTextArea(){
        return cy.get('textarea.MuiInputBase-inputMultiline').eq(0)
    }
    getDeleteCollectionBtn(){
        return cy.get('span[class="right-cls-out delCollection"]')
    }
    getDeleteCollectionPopupBtn(){
        return cy.get('button.delete_reminder-btn').contains('Delete')
    }

    getTimeLineBtn(){
        return cy.get('[class="MuiCardContent-root css-1qw96cp"]').contains('Timelines')
    }

    getTimeLineCreateNewBtn(){
        return cy.get('button.MuiButton-containedSuccess')
    }
    getCreateTimeLineGreadDropDown(){
        return cy.get('.MuiInputBase-formControl').eq(1)
    }
    getCreateTimeLineGreadDropDownGread3Opt(){
        return cy.get('.MuiMenuItem-gutters').contains('Grade 3')
    }
    getCreateTimeLineSubjectDropDown(){
        return cy.get('.MuiInputBase-formControl').eq(2)
    }
    getCreateTimeLineSubjectDropDownEnglishOpt(){
        return cy.get('.MuiMenuItem-gutters').contains('English')
    }
    getCreateTimeLineDescriptionTextAera(){
        return cy.get('.MuiInputBase-formControl').eq(5)
    }
    getCreateTimeLineCreateNewBtn(){
        return cy.get('button[type="button"]')
    }
    getCreateTimeLineDetailsBtn(){
        return cy.xpath('//div[.="Timeline"]/ancestor::li[@id="h5p-timeline"]//button[@type="button"]')
    }
    getCreateTimeLineUseBtn(){
        return cy.get('button[type="button"]').contains('Use')
    }
    getCreateNewTimeLineTitleTextfield(){
        return cy.xpath('//input[@id="field-extratitle--1"]')
    }
    getCreateNewTimeLineHeadLineTextfield(){
        return cy.get('input[id="field-headline-14"]')
    }
    getCreateNewTimeLineStartTimeTextfield(){
        return cy.get('input[id="field-startdate-30"]')
    }
    getCreateNewTimeLineDateHeadLineTextfield(){
        return cy.get('input[id="field-headline-32"]')
    }
    getCreateNewTimeLineSaveBtn(){
        return cy.get('[class="btn btn-primary btn-block"]')
    }
    getTimeLinesList(){
        return cy.get('h4.cntLibCardTitle strong')
    }
    getTimeLineThreeDotIcon(){
        return cy.get('[id="card-dropdown-0-0"] svg')
    }
    getTimeLineDeleteBtn(){
        return cy.get('li[value="Delete"]')
    }
    getTimeLineEditBtn(){
        return cy.get('li[value="Edit"]')
    }
    getCreateNewTimelineCard(){
        return cy.get('div[class="conten_list_container list-group-item"]')
    }
    getVideoBtn(){
        return cy.get('[class="MuiCardContent-root css-1qw96cp"]').contains('Video')
    }
    getViewVideoBtn(){
        return cy.get('button.cntLibCardBtn')
    }
    getVideoFrame(){
        return cy.get('[class="vjs-error-display vjs-modal-dialog"]')
    }
    getVideoBackBtn(){
        return cy.get('button.bookmark-icon')
    }
    getUploadResource(){
        return cy.get('input[type="file"]')
    }

    getUploadResoureceGradeDropdown(){
        return cy.get('div.content-for-wrapper div[id="demo-simple-select-1"]')
    }

    getUploadResoureceSubjectDropdown(){
        return cy.get('div.content-for-wrapper div[id="demo-simple-select-2"]')
    }
    getUploadResoureceChapterDropdown(){
        return cy.get('div.content-for-wrapper div[id="demo-simple-select-3"]')
    }
    getUploadResoureceTopicsDropdown(){
        return cy.get('div.content-for-wrapper div[id="demo-simple-select-4"]')
    }
  }
  
  module.exports=new  MyPersonalLibraryPage();
  