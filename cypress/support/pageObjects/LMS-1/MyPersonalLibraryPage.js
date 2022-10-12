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
        return cy.xpath('//strong[.="I Look in the Mirror"]/ancestor::div[@class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-3 css-1ha4th6"]//button[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium bookmark-icon css-v36qta"]')
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

  }
  
  module.exports=new  MyPersonalLibraryPage();
  