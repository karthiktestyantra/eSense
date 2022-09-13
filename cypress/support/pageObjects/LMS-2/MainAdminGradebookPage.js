class MainAdminGradebookPage{
   
    getSiGradeLstInTemplatePage(){
        return cy.get('p.name')
    }
    getSiGradeLstInTemplateOnePage(){
        return cy.get('p.name:visible')
    }
    getSiTopschlLogoLst(){
        return cy.get('img.MuiAvatar-img')
    }
    getSiEditedBySectLst(){
        return cy.get('tbody tr td p.MuiTypography-body1')
    }
    getSiPubDateBySectLst(){
        return cy.get('tbody tr td p.MuiTypography-body1').eq(2)
    }
    getSiStatusBtnLstInTemplatePage(){
        return cy.get('button.MuiButton-textSizeMedium')
    }
    getSiActionToggleLstCheckBx(){
        return cy.get('input[name="loading"]')
    }
    getSiActionEditLst(){
        return cy.get('div.action-btn-container img:nth-child(2)')
    }
    getSiActionDltLst(){
        return cy.get('div.action-btn-container img:nth-child(3)')
    }
    getSearchTemplateBtn(){
        return cy.get('input[placeholder="Search a template"]')
    }
    getSiGradeSortImg(){
        return cy.get('tr th:nth-child(2) img')
    }
    getSiLastEditedSortImg(){
        return cy.get('tr th:nth-child(4) img')
    }
    getSiGradeCheckBxLst(){
        return cy.get('span.MuiCheckbox-root input[type="checkbox"]')
    }
    getSiDwnloadAsPdfBtn(){
        return cy.get('button.printSubBtn').contains("Download as PDF")
    }
    getSiDwnDltBtn(){
        return cy.get('button.printSubBtn').contains("Delete")
    }
    getSiPreviewPageTitle(){
        return cy.get('div.stdGrdBkTitCntr h1')
    }
    getSiPublishBtnInPreviewPage(){
        return cy.get('button[type="button"]').contains("Publish")
    }
    getSiProfilePictureInPreviewPage(){
        return cy.get('div.stdGrdBkInfoSect img')
    }
    getSiWidgetsLstInPreviewPage(){
        return cy.get('div.stdGrdBkCrdStatSectInfo')
    }
    getSiScholosticActivTxt(){
        return cy.get('div.schTblSectHeadTit')
    }
    getSiCoScholosticActivTxt(){
        return cy.get('div h1').contains("Co-Scholastic Activities")
    }
    getSiBasiDetailsLst(){
        return cy.get('div.stdGrdBkInfoSect p')
    }
    getSiRemarksFld(){
        return cy.get('textarea.MuiInputBase-inputMultiline').contains("Add Remarks")
    }
    getSiReSignDownLst(){
        return cy.get('div.stdPrevReptSignSect div')
    }
    getSiShowGradeSystemBtn(){
        return cy.get('button.toggleGradeBtn')
    }
    getSiSaveAsDraftBtn(){
        return cy.get('button.stdGrdPrevActionGoBkSavEdt').contains("Save As Draft")
    }
    getSiSaveAsDraftInEditGradebook(){
        return cy.get('.CreateNewTemplate_crtNewTempActioBtnSect__2miJJ > :nth-child(1)')
    }
    getSiCancelBtn(){
        return cy.get('button.stdGrdPrevActionCanBtn').contains("Cancel")
    }
    getSiGradebookHomePageTitle(){
        return cy.get('h1.my-1')
    }
    getSiTheoryPracticalTxtInScholosticTable(){
        return cy.get('table tr td span')
    }
    getSiEditGradeTheoryAndPracticalDltBtnLst(){
        return cy.get('button[aria-label="Delete Subject"] img')
    }
    getSiEditGradeAddTestDltBtn(){
        return cy.get('button[aria-label="Delete Test"] img')
    }
    getSiEditGradeNoOfTermsDrpDwn(){
        return cy.get('div.MuiSelect-selectMenu').eq(1)
    }
    getSiSectionsLst(){
        return cy.get('div ul li.MuiListItem-gutters:visible')
    }
    getSiEditGradeAddTestTypeBtn(){
        return cy.get('button.MuiButton-Primary').eq(0)
    }
    getSiEditGradeAddTestTermLastDrpDwn(){
        return cy.get('div#mui-component-select-testType').last()
    }
    getSiEditGradeTestTypeDrpDwn(){
        return cy.get('div#demo-simple-select-helper').eq(4)
    }
    getSiMaxMarksDrpDwn(){
        return cy.get('div.MuiInputBase-formControl #demo-simple-select-helper').last()
    }
    getSiTermsTxtInScholosticActiv(){
        return cy.get('table thead tr th')
    }
    getSiGoBackBtn(){
        return cy.get('button.stdGrdPrevActionGoBkBtn')
    }
    getSiEditGradeAddSubAddTheoryAndPracticalBtn(){
        return cy.get('button.Gradebook_addSubject__3sXpw').contains("+ Add Theory and Practical")
    }
    getSavAsDraftBtn(){
        return cy.get('.CreateNewTemplate_crtNewTempActioBtnSect__2miJJ > :nth-child(1)')
    }
    getTestTypedrpDwn(){
        return cy.get('div#demo-simple-select-helper').last()
    }
    getTheoryMark(){
        return cy.get('input[name="theoryMarks"]')
    }
    getPracticalMark(){
        return cy.get('input[name="practicalMarks"]')
    }
    getSiEditGradeTestTypeDrpDwns(){
        return cy.get('div#demo-simple-select-helper').eq(5)
    }
    getSiEditGradeTestTypeDrpDwns2(){
        return cy.get('div#demo-simple-select-helper').eq(4)
    }
    getSiMaxMarksDrpDwn2(){
        return cy.get('div.MuiInputBase-formControl #demo-simple-select-helper')
    }
}
export default MainAdminGradebookPage;