class AdminStudentGradebookPage{

    getSiStudentGradebookLnk(){
        return cy.get('div.popper-sub-student div.classTitle').contains("Student Gradebook");
    }
    getSi360reportLnk(){
        return cy.get('div.popper-sub-student div.classTitle').contains("Student 360 Report");
    }
    getSiGradebookTabLnk(){
        return cy.get('button[role="tab"]').contains("GradeBook")
    }
    getSiStudentsLstInGradebookPage(){
        return cy.get('tbody td.MuiTableCell-body:nth-child(4)')
    }
    getSiViewIconsLstInGradebookPage(){
        return cy.get('svg.allstudents-arrow-icon')
    }
    getSiEditBtnInViewGradebookpage(){
        return cy.get('button[type="button"]').contains("Edit")
    }
    getSiScoresTxtBxLst(){
        return cy.get('input[type="number"]')
    }
    getSiGobackBtn(){
        return cy.get('button.StudentGradeBook_stdGrdActionGoBkBtn__Yna9J')
    }
    getSiGradeDrpdwnInGradebookPage(){
        return cy.get('div.MuiSelect-select').eq(0)
    }
    getSiSectionDrpdwnInGradebookPage(){
        return cy.get('div.MuiSelect-select').eq(1)
    }
    getSiAllTermsDrpdwnInGradebookPage(){
        return cy.get('div.MuiSelect-select').eq(2)
    }
    getSiGradesLstInGradeDrpDwnPage(){
        return cy.get('li.MuiMenuItem-gutters')
    }
    getSiFirstNameLstInGradebookPage(){
        return cy.get('tbody td.MuiTableCell-alignCenter:nth-child(4)')
    }
    getSiRollNoCheckBx(){
        return cy.get('input[type="checkbox"]').eq(0)
    }
    getSiStudentsCheckBxslst(){
        return cy.get('input[type="checkbox"]')
    }
    getBulkUploadScoreBtnInGradebookPage(){
        return cy.get('button[type="button"]').contains("Bulk Upload Score")
    }
    getSiViewArrowIcnLstInGradebook(){
        return cy.get('svg[data-testid="ArrowForwardIosIcon"]')
    }
    getSiPrintAndPreviewBtn(){
        return cy.get('button.StudentGradeBook_stdGrdBkTitCntSectBtn__1tKqF')
    }
    getSiButtonLstInViewGradebookPage(){
        return cy.get('button[type="button"]')
    }
    getSiGradebookPageTitle(){
        return cy.get('p.GradeBook_classDashboardTitle__HNF4O')
    }
    getSiAttachsamplefile(){
        return  cy.get('input#file-input')
    }
    getSisamplefileImportBtn(){
        return  cy.get('button.BulkUpload_bulkImport__spFpc')
    }
    getSelectFileFrmComputerBtn(){
        return cy.get('label[for="file-input"]').contains("Select File from Computer")
    }

    //****************************************************************************

        getHarSideMenuAdminReportImg(){
            return  cy.get('div.side-nav-icon img[src="/static/media/report.d1121fb6.svg"]')
        }
    
        getHarStudentGradeBookBtn(){
            return  cy.get('[href="/admin/reports/gradebook"] > .content-popover-reports > .content-report-sect > .popover-student > .popper-sub-student > .classTitle')
        }
    
        getHarStudentGradeBookHeaderTitle(){
            return  cy.get('p.GradeBook_classDashboardTitle__HNF4O')
        }
    
        getHarStudentGradeName(){
            return  cy.get('p.name ')
        }
    
        getHarStudentReportDate(){
            return  cy.get('div.stdPrevReptSignSect').contains('Date')
        }
    
        getHarStudentReportClassTeacherSignature(){
            return  cy.get('div.stdPrevReptSignSect').contains('Class Teacher Signature')
        }
    
        getHarStudentReportPrincipalSignature(){
            return  cy.get('div.stdPrevReptSignSect').contains('Principal Signature')
        }
    
        getHarStudentReportParentsSignature(){
            return  cy.get('div.stdPrevReptSignSect').contains("Parent's Signature")
        }
    
        getHarStudentReportShowGradingSystemDropdown(){
            return  cy.get('button.MuiButton-root').contains("Show Grading System")
        }
    
        getHartShowGradingSystemScholasticGradeTable(){
            return  cy.get('th.w-50').contains("Scholastic Grade")
        }
    
        getHartShowGradingSystemMarksRangeTable(){
            return  cy.get('th.w-50').contains("Marks Range")
        }
    
        getHarStudentGradeSortBtn(){
            return  cy.get('.MuiTableRow-root > :nth-child(2) > div')
        }
     
        getHarAllStudentCheckBx(){
            return  cy.get('input[aria-label="select all students"]')
        }
    
        getHarDownloadPdfBtn(){
            return  cy.get('button.printSubBtn').contains('Download as PDF')
        }
    
        getHarBulkDeleteBtn(){
            return  cy.get('button.printSubBtn').contains('Delete')
        }
    
        getHarStudentLastEditedSortBtn(){
            return  cy.get(':nth-child(5) > div')
        }
    
        getHarTemplateSearchTxtField(){
            return  cy.get('input[placeholder="Search a template"]')
        }
    
        getHarTemplateFilterDropdown(){
            return  cy.get('div[aria-haspopup="listbox"]')
        }
    
        getHarListOfTemplateTopschoolLogo(){
            return  cy.get('img.MuiAvatar-img ')
        }
    
        getHarListOfTemplateDraftBtn(){
            return  cy.get('button.MuiButton-root').contains('Draft')
        }
    
        getHarListOfTemplateDraftDeleteBtn(){
            return  cy.get('img[aria-label="Delete"]')
        }
    
        getHarListOfTemplatePublishedBtn(){
            return  cy.get('button.MuiButton-root').contains('Published')
        }
    
        
        getHarListOfTemplateEnableAndDisabledBtn(){
            return  cy.get('span.MuiSwitch-root')
        }
    
        getHarListOfTemplateUnpublishedBtn(){
            return  cy.get('div.unpublish-button')
        }
    
        getHarGradeBookTab(){
            return  cy.get('button.MuiButtonBase-root').contains('GradeBook')
        }
    
        getHarPreviewPrint(){
            return  cy.get('button.MuiButtonBase-root').contains('Preview & Print')
        }
    
        getHarBulkUploadScore(){
            return  cy.get('button.MuiButtonBase-root').contains('Bulk Upload Score')
        }
    
        getHarDownloadsamplefile(){
            return  cy.get('button.MuiButtonBase-root').contains('Download sample file')
        }
    
        getHarAttachsamplefile(){
            return  cy.get('input#file-input')
        }
    
        getHarAttachsamplefileDeleteBtn(){
            return  cy.get('img[alt="delete"]')
        }
    
        getHarsamplefileSuccessMes(){
            return  cy.get('.deleteMsgPopoverSect > .MuiTypography-root')
        }
    
        getHarsamplefileImportBtn(){
            return  cy.get('button.BulkUpload_bulkImport__spFpc')
        }
    
        getErrorImportPopup(){
            return  cy.get('div.sub-header-row-out')
        }
    
        getErrorImportPopupReuploadBtn(){
            return  cy.get('div[data-testid="reupload"]')
        }
    
        getHarBulkUploadPopupTitle(){
            return  cy.get('h2.MuiDialogTitle-root')
        }
    
        getHarGradeFilterDropdown(){
            return  cy.get('#demo-simple-select')
        }
    
        getHarSectionFilterDropdown(){
            return  cy.get('.css-tkugvl > .MuiOutlinedInput-root > #demo-simple-select')
        }
    
        getHarGradeFilterDropdownValues(){
            return  cy.get('ul.MuiList-padding li')
        }
    
        getHarSectionFilterDropdownValues(){
            return  cy.get('ul.MuiList-padding li')
        }
    
        getHarGradeBookStudentName(){
            return  cy.get('.MuiTableBody-root > :nth-child(n) > :nth-child(4)')
        }
    
        getHarGradeBookStudentNameCheckBx(){
            return  cy.get('tr[role="checkbox"] td span.MuiCheckbox-colorSuccess')
        }
    
        getHarGradeBookStudentView(){
            return  cy.get('svg.allstudents-arrow-icon')
        }
    
        getHarGradeBookStudentTableSub(){
            return  cy.get('div.stdGrdSchTableSect  td.schlTbleRptCell2')
        }
    
        getHarGradeBookStudentTableTheoryMark(){
            return   cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > :nth-child(2) > table > tr > :nth-child(1) > .schTableInputFoc > input:visible')
        }
    
        getHarGradeBookStudentRemarksTxtarea(){
            return  cy.get('#outlined-multiline-static')
        }
    
        getHarGradeBookStudentSave(){
            return  cy.get('button.MuiButton-root').contains('Save')
        }
    
        getHarGradeBookTemplateView(){
            return  cy.get(':nth-child(n) > :nth-child(7) > .action-btn-container > .MuiIconButton-root > img')
        }
    
        
        getHarGradeBookTemplateViewEditBtn(){
            return  cy.get('button.MuiButtonBase-root').contains('Edit')
        }
    
        getHarDelTheoryAndPracBtn(){
            return  cy.get('button[aria-label="Delete Theory and Practical"]')
        }
    
        getHartemplatepreviewTerm1(){
            return  cy.get('tr th').contains('Term 1')
        }
    
        getHartemplatepreviewTerm2(){
            return  cy.get('tr th').contains('Term 2')
        }
    
        getHarGradeBookStudentNameTxt(){
            return  cy.get('div.StudentGradeBook_stdGrdBkInfoSectCrd__1fXhW h1')
        }
    
        getHarGoBackBtn(){
            return  cy.get('button').contains('Go back')
        }
    
        getHarStudentsTab(){
            return  cy.get('#simple-tab-1')
        }
    
        getHarTemplateTab(){
            return  cy.get('button.MuiButtonBase-root').contains('Template')
        }
    
        getHarSaveAndPreviewBtn(){
            return  cy.get('button.MuiButtonBase-root').contains('Save And Preview')
        }
    
        getHarSaveAsDraftBtn(){
            return  cy.get('button.MuiButtonBase-root').contains('Save As Draft')
        }
    
        getHarTandP(){
            return  cy.get('td[style="width: calc(33.3333%);"] input')
        }
    
        getHarTotalPercentageWidget(){
            return  cy.get('div.StudentGradeBook_stdGrdBkCrdStatSectInfoCnt__1IGxO p').contains('Total Percentage')
        }
    
        getHarTotalGradeWidget(){
            return  cy.get('div.StudentGradeBook_stdGrdBkCrdStatSectInfoCnt__1IGxO p').contains('Total Grade')
        }
    
        getHarTotalAttendenceWidget(){
            return  cy.get('div.StudentGradeBook_stdGrdBkCrdStatSectInfoCnt__1IGxO p').contains('Total Attendance')
        }
    
        getHarResultWidget(){
            return  cy.get('div.StudentGradeBook_stdGrdBkCrdStatSectInfoCnt__1IGxO p').contains('Result')
        }
    
        getHarListOfTemplatepublishedBtn(){
            return  cy.get('.StudentGradeBook_stdGrdActionCnt__3ZA5N > :nth-child(2)')
        }
    
        getHarListOfTemplatePopuppublishedBtn(){
            return  cy.get('.pub_temp-btn_container > .MuiButton-contained')
        }
    
        getHarListOfTemplateEditBtn(){
            return  cy.get('img[aria-label="Edit"]')
        }
    
        getHarNoOfTermsDropdown(){
            return  cy.get('div[aria-labelledby="demo-simple-select-helper"]')
        }
        
        getHarNoOfTermsDropdownValue(){
            return  cy.get('ul.MuiList-root li')
        }
        
        getHarListOfTemplateDefaultSecValue(){
            return  cy.get(':nth-child(n) > :nth-child(3) > .MuiTypography-root')
        }
    
        getHarListOfTemplateLastEdited(){
            return  cy.get(':nth-child(n) > :nth-child(5) > .MuiTypography-root')
        }
    
        
    
    
    }
        export default AdminStudentGradebookPage;