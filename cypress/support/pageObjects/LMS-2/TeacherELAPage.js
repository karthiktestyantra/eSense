class TeacherELAPage{

    getMyClassImg(){
        return   cy.get('div.side-nav-icon img[src="/static/media/myClasses.e2b87f30.svg"]')
     }

     getMyClassSubName(){
        return   cy.get('div.card_roman_txt')
     }

     getAssessmentTab(){
        return   cy.get('button.MuiButtonBase-root').contains('Assessments')
     }

     getAssignmentBtn(){
        return   cy.get('[value="assignments"]')
     }

     getPrintELAPageBtn(){
      return   cy.get('div.print-ela-group-btn-container button').contains('Print')
     }

     getCancelELAPageBtn(){
      return   cy.get('div.print-ela-group-btn-container button').contains('Cancel')
     }

     getAddELABtn(){
        return   cy.get('button.btn-add-group').contains('Add ELA')
     }
     
     getElaPopupCancelBtn(){
      return   cy.get('div.elaModelContentActionBtn button').contains('Cancel')
   }

   getAssignmentPagrGradeName(){
      return   cy.get('p.ClassDashboard_classDashboardTitle__DGee9')
   }

   getElaDeleteIcon(){
      return   cy.get('button.MuiButton-root img[src="/static/media/trash.f810db46.svg"]')
   }

   getPrintAssignmentTable(){
      return   cy.get('div.print-ela-group-table-scroll tbody')
   }

   getELAEvalutionSheetDropdown(){
      return   cy.get('div#demo-simple-select')
   }

   getPrintELAEvalutionSheetBtn(){
      return   cy.get('button.printEval-txt-btn ').contains('Print Evaluation Sheet')
   }

   getELAEvalutionSheetPrintBtn(){
      return   cy.get('button.preview-eval_btn').contains('Print')
   }

   getRankSudentTitleHeader(){
      return   cy.get('span.preview-eval-subhead').eq(0)
   }

   getELAEvalutionSheetCancelBtn(){
      return   cy.get('button.preview-eval_btn').contains('Cancel')
   }

   getDeleteELAConfirmationPopupBtn(){
      return   cy.get('.MuiButton-contained')
   }

   getELAGroupRadioBtn(){
      return   cy.get('input[value="ELAGroups"]')
   }
   
   getELAGroupCreateNewBtn(){
      return   cy.get('button.MuiButton-root').contains('Create New Group')
   }
  
   getELAGroupCreateDeleteConfirmBtn(){
      return   cy.get('button.MuiButton-root').contains('Confirm')
   }

   getELAGroupCreateDeletedSuccessMeg(){
      return   cy.get('.curriculumMsgPopoverSect')
   }

   getELAGroupAddStudentBtn(){
      return   cy.get('button.MuiButton-root').contains('Add')
   }

   getELAGroupCreateGroupBtn(){
      return   cy.get('button.MuiButton-root').contains('Create Group')
   }

   getELAGroupQuestionsCheckBoxBtn(){
      return   cy.get('button.MuiButton-root')
   }

   getELAGroupUpdateGroupBtn(){
      return   cy.get('button.MuiButton-root').contains('Update Group')
   }

   getELACreateesGroupSuccessPopup(){
      return   cy.get('.curriculumMsgPopoverSect')
   }

   getELACreateesGroupEditIcon(){
      return   cy.get('img[data-testid="edit"]')
   }

   getELACreateesGroupDeleteIcon(){
      return   cy.get('img[data-testid="deletegroup"]')
   }

   getELAGroupCreatedStudentDetails(){
      return   cy.get('div.MuiDataGrid-virtualScrollerRenderZone')
   }

   getELAGroupCreateDescriptionTxtBox(){
      return   cy.get('textarea[name="groupDescription"]')
   }

   getELAGroupCreateAddStudentIcon(){
      return   cy.get('button[data-testid="add-button"]')
   }
     
     
   getELAGroupNameTxtBox(){
      return   cy.get('input[name="groupName"]')
   }

     getELASubSearchTxtField(){
        return   cy.get('input[placeholder="Search Content..."]')
     }

     getELASubSearchIcon(){
        return   cy.get('svg[data-testid="SearchIcon"]')
     }

     getViewELABtn(){
        return   cy.get('button.cntLibCardBtn').eq(3)
     }

     getGoBackBtn(){
      return   cy.get('[data-testid="goback"] > p')
   }
     
     getViewELAQuestionCheckBx(){
        return   cy.get('input[aria-label="Checkbox demo"]').eq(0)
     }

     getELAQuestionCheckBx(){
      return   cy.get('input[aria-label="Checkbox demo"]')
   }

     getELAAssignBtn(){
        return   cy.get('button.elaAllStdSectActionBtnAssign')
     }

     getELAAssignedSuccessPopupMsg(){
        return   cy.get('div.elaModelContent h2')
     }
     
     getELACreatedStudentRemoveBtn(){
      return   cy.get('svg.MuiChip-deleteIcon')
   }
     getELAAssignedPrintBtn(){
        return   cy.get('button.elaModelContentActionBtnAsign')
     }
     
     getELAAssignedPrintPageTxt(){
        return   cy.get('div.print-ela-group-sub span')
   }
//*********************************************************************/
getELACardLst(){
   return cy.get('h6.mb-0')
}
getAssignmentExpandCard(){
   return cy.get('p.assRankTitle')
}
getAddedDateLstInELACard(){
   return cy.get('small[style="color: rgb(158, 158, 158);"]')
}
getStudentsLstInELACard(){
   return cy.get('span[style="color: rgb(158, 158, 158);"]')
}
getDltBtnLstInELACard(){
   return cy.get('button.MuiButton-textSizeMedium img')
}
getViewIcnsLstInELACard(){
   return cy.get('svg.pointer path')
}
getELACardExpandedTitle(){
   return cy.get('div.preview-ela-group-content div.print-ela-group-sub span')
}
getELAQuestionsSidePanelCloseIcn(){
   return cy.get('[data-testid="CloseIcon"]')
}
getELAPopupCancelBtn(){
   return cy.get('button.dlt_outline')
}
getDltELACardPopup(){
   return cy.get('div.delete_reminder-content')
}
getELACardFilterDrpDwn(){
   return cy.get('div.MuiInputBase-formControl div[role="button"]').eq(0)
}
getELACardFilterDrpDwnLst(){
   return cy.get('div.MuiPaper-elevation8 ul li')
}
getELACardTableData(){
   return cy.get('table.MuiTable-root thead tr th div')
}
getELACardTableDataLst(){
   return cy.get('table.MuiTable-root thead tr th div.MuiBox-root')
}
getELACardLearningOutcomeIcn(){
   return cy.get('table.MuiTable-root thead tr th div').eq(4)
}
getELACardCompetencyIcn(){
   return cy.get('table.MuiTable-root thead tr th div').eq(6)
}
getELACardQuestnNumbersLst(){
   return cy.get('.MuiTableBody-root > .MuiTableCell-root')
}
getRankingCheckBxLst(){
   return cy.get('div.assRankCntrListItem')
}
getELACardDltConfrmBtn(){
   return cy.get('button.delete_reminder-btn').contains("Confirm")
}
getELATitleLstInAddELASect(){
   return cy.get('h4.cntLibCardTitle strong')
}
getViewELABtnInELAAddSect(){
   return cy.get('button.cntLibCardBtn')
}
getELAQuestionsCheckBx(){
   return cy.get('input[type=checkbox]')
}
getAssignELACloseIcn(){
   return cy.get('svg.close-icon_popup')
}
getExcellentRankChckBxLst(){
   return cy.get('input[value="1"]')
}
getELACardSubmitBtn(){
   return cy.get('button.printSubBtn').contains("Submit")
}
getELAGropsRadioBtn(){
   return cy.get('input[value="ELAGroups"]')
}
getCreateNwGrpBtn(){
   return cy.get('div.elaGroupTabNoDataSect')
}
getELACardCreateGroupAssignBtn(){
   return   cy.get('button.elaGrpsActionBtnAssign ')
}
getELACreateGrpLnkInRHS(){
   return cy.get('button.elaGroupTabSectCreNewGrp')
}
getGroupCheckbxlst(){
   return cy.get('input[type="checkbox"]')
}
getGroupAddedELAAssignBtn(){
   return cy.get('button.elaGrpsActionBtnAssign')
}
getGropsLStInELACard(){
   return cy.get('button.MuiTab-fullWidth')
}
getMarkAbsentTxt(){
   return cy.get('p.MuiTypography-body2').contains("Mark Absent")
}
getAssignELATitle(){
   return cy.get('div.elaCtnLibPopoverToggSect p')
}
getAssignELACancelBtn(){
   return cy.get('button.elaAllStdSectActionBtnCancel')
}
getDltCnfrmBtnInELA(){
   return cy.get('button.dlt_prime_modal')
}
getAddedHealthReportLst(){
   return cy.get('h1.StudentDetails_h1title__yfa51')
}
}

export default TeacherELAPage