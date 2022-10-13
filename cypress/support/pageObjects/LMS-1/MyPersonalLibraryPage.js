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
        return cy.get('#mui-36')
    }
    getDeleteCollectionBtn(){
        return cy.get('span[class="right-cls-out delCollection"]')
    }
    getDeleteCollectionPopupBtn(){
        return cy.get('button.delete_reminder-btn').contains('Delete')
    }
  }
  
  module.exports=new  MyPersonalLibraryPage();
  