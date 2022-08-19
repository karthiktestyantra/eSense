class AdminGradebookPageNew {
    getSiCreateTemplateBtn(){
        return cy.get('a.templateButton')
    }
    getSiGradeDrpDwnInCreateTemplate(){
        return cy.get('div.MuiSelect-select').eq(0)
    }
    getSiSectionDrpDwnInCreateTemplate(){
        return cy.get('div.MuiSelect-select').eq(1)
    }
    getSiNoTermsDrpDwnInCreateTemplate(){
        return cy.get('div.MuiSelect-select').eq(2)
    }
    getSiDrpDwnLstInCreateTemplate(){
        return cy.get('ul li.MuiListItem-button')
    }
    getSiStudentGradebookLnk(){
        return cy.get('div.popper-sub-student div.classTitle').contains("Student Gradebook");
    }
    getSiScholosticActivitiesTxt(){
        return cy.get('p.CreateNewTemplate_crtNewTempScholTitle__2E12Z').eq(0)
    }
    getSiAddTestTypeInCreateTemplate(){
        return cy.get('button.MuiButton-SizeMedium').contains("+ Add Test Type")
    }
    getSiAddTestTermDrpDwn(){
        return cy.get('#mui-component-select-testType')
    }
    getSiTestTypeDrpDwnInCreateTemplate(){
        return cy.get('.MuiInputBase-root #demo-simple-select-helper').eq(2)
    }
    getSiMaxMarksDrpDwnInCreateTemplate(){
        return cy.get('.MuiInputBase-root #demo-simple-select-helper').eq(3)
    }
    getSiAddActivityInCreateTemplate(){
        return cy.get('button.MuiButton-SizeMedium').contains("+ Add Activity")
    }
    getSiAddSubjectInCreateTemplate(){
        return cy.get('button.MuiButton-SizeMedium').contains(" + Add Subject ")
    }
    getSiAddTheoryInCreateTemplate(){
        return cy.get('button.MuiButton-SizeMedium').contains("+ Add Theory and Practical")
    }
    getSiTestTypeDrpDwnInAddTheoryCreateTemplate(){
        return cy.get('.MuiInputBase-root #demo-simple-select-helper').eq(4)
    }
    getSiTheoryFldInAddTheoryCreateTemplate(){
        return cy.get('input[name="theoryMarks"]')
    }
    getSiPracticalInAddTheoryCreateTemplate(){
        return cy.get('input[name="practicalMarks"]')
    }
    getSiErrorMsgInCreateTemplate(){
        return cy.get('div.CreateNewTemplate_error_cls__vA6Ph')
    }
    getSiActivityFldInCreateTemplate(){
        return cy.get('input[name="activity"]')
    }
    getSiSaveAsDraftBtnInCreateTemplate(){
        return cy.get('button.CreateNewTemplate_templateButton__2dBPW').contains("Save As Draft")
    }
    getSiSaveAndPreviewBtnInCreateTemplate(){
        return cy.get('button.CreateNewTemplate_templateButton__2dBPW').contains("Save And Preview")
    }
    getSiDltBtnLstInTemplatePage(){
        return cy.get('img[src="/static/media/trashFill.0e6cc947.svg"]')
    }
    getSiEditBtnLstInTemplatePage(){
        return cy.get('img[aria-label="Edit"]')
    }
    getSiTemplateTitle(){
        return cy.get('p.CreateNewTemplate_classDashboardTitle__33WyN')
    }
    getSiCancelBtnInCreateTemplate(){
        return cy.get('button.CreateNewTemplate_cancelButton__3BtyO')
    }
    getSiPreviewCancelBtn(){
        return cy.get('.StudentGradeBook_stdGrdPrevActionCanBtn__3DAlD')
    }
    getSiStatusLstInTemplatePage(){
        return cy.get('tbody tr td button.MuiButton-textSizeMedium')
    }
    getSiTemplateTabInTemplate(){
        return cy.get('button[role="tab"]').contains("Template")
    }
    getSiGradeLstInTemplatePage(){
        return cy.get('p.name')
    }
    getSiDltCloseBtn(){
        return cy.get('div.closebutton-div img')
    }
    getSiDltBtnInPopup(){
        return cy.get('div.delete-button')
    }
    getSiCancelBtnInPopup(){
        return cy.get('div.cancel-button')
    }
    getSiTemplateTabInTemplate(){
        return cy.get('button[role="tab"]').contains("GradeBook")
    }
    getSiGradeDrpDwnInGradebook(){
        return cy.get('#demo-simple-select').contains("Grade")
    }
    getSiSectionDrpDwnInGradebook(){
        return cy.get('#demo-simple-select').contains("Section")
    }
    getSiDrpDwnLstInGradebook(){
        return cy.get('div ul li.MuiMenuItem-gutters')
    }
    getSiViewArrowIcnLstInGradebook(){
        return cy.get('svg[data-testid="ArrowForwardIosIcon"]')
    }
    getSiFirstNameLstInGradebook(){
        return cy.get('tbody tr td.MuiTableCell-alignCenter:nth-child(4)')
    }
    getSiTitleInGradeBookPage(){
        return cy.get('div.StudentGradeBook_stdGrdBkTitCntr__1k1Kv h1')
    }
    getSiEditBtnInViewPageInGradebook(){
        return cy.get('button.StudentGradeBook_stdGrdActionGoBkSavEdt__2Geb6')
    }
    getSiRemarksfldInViewPageInGradebook(){
        return cy.get('#outlined-multiline-static')
    }
    getSiSubDetailsInViewPageInGradebook(){
        return cy.get('tbody tr td.schlTbleRptCell2')
    }
    getSiScholosticsMarksfldLst(){
        return cy.get('div.schTableInputFoc')
    }
    getSiSubDrpDwnInAddSub(){
        return cy.get('#mui-component-select-subject')
    }
    getSiActivitiesTermTxtBx(){
        return cy.get('div.coScholTableIntData')
    }
    getSiCoScholosticGradeTxtBx(){
        return cy.get('td.coSChWidCell').eq(3)
    }
    getSiPeriodicTestTerm1(){
        return cy.get('table tr td p').eq(0)
    }
    getSiPeriodicTestTerm2(){
        return cy.get('table tr td p').eq(3)
    }
    getSiShowGradingSystemBtnInEditGradebookPage(){
        return cy.get('button.MuiButtonBase-root').contains(" Grading System")
    }
    getSiSaveBtnInEditGradebookPage(){
        return cy.get('button.MuiButtonBase-root').contains("Save")
    }
    getSiTotalGradeLst(){
        return cy.get(':nth-child(4) > :nth-child(1) > :nth-child(1) > :nth-child(2) > table > tr > td')
    }
    getSiRemarksTxtareaFld(){
        return cy.get('div textarea#outlined-multiline-static')
    }
    getSiTotalPercntTxtInViewPage(){
        return cy.get('div.StudentGradeBook_stdGrdBkCrdStatSectInfoCnt__1IGxO').eq(0)
    }
    getSiTotalGradeTxtInViewPage(){
        return cy.get('div.StudentGradeBook_stdGrdBkCrdStatSectInfoCnt__1IGxO').eq(1)
    }
    getSiTotalAttendanceTxtInViewPage(){
        return cy.get('div.StudentGradeBook_stdGrdBkCrdStatSectInfoCnt__1IGxO').eq(2)
    }
    getSiResultInViewPage(){
        return cy.get('div.StudentGradeBook_stdGrdBkCrdStatSectInfoCnt__1IGxO').eq(3)
    }
    getSiStudentGradebookPageTitle(){
        return cy.get('p.GradeBook_classDashboardTitle__HNF4O')
    }
    getSiCancelBtnInViewPage(){
        return cy.get('button.StudentGradeBook_stdGrdActionCanBtn__2wuUA')
    }
    getSiScholasticActivInShowGradebkPage(){
        return cy.get('th.schSCtTh:visible')
    }
    getSiCoScholosticActivInShowGradeBkPage(){
        return cy.get('div.CoScholasticTable_coSchTblSectHeadTit__2_1xW h1')
    }
    getSiPreviewAndPrintBtn(){
        return cy.get('button.StudentGradeBook_stdGrdBkTitCntSectBtn__1tKqF')
    }
    getSiTopSchlRadioBtnInCreateTemplatePage(){
        return cy.get('input[type="radio"]').eq(1)
    }
    getSiEditBtnInCreateTemplatePageInTopschool(){
        return cy.get('button.CreateNewTemplate_templateButton__2dBPW')
    }
    getSiCreateNwCreateTemplatePageInTopSchl(){
        return cy.get('button.CreateNewTemplate_createNewButton__28cfS')
    }
}
export default AdminGradebookPageNew;