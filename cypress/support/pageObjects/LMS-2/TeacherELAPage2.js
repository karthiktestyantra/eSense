class TeacherELAPage2 {

   getMyClassImg() {
      return cy.get('div.side-nav-icon img[src="/static/media/myClasses.e2b87f30.svg"]')
   }

   getMyClassSubName() {
      return cy.get('div.card_roman_txt').contains('Grade 5 B')
   }

   getMyClassRiseSubName() {
      return cy.get('div.classTitle').contains('Science VI (RISE)')
   }

   getAssessmentTab() {
      return cy.get('button.MuiButtonBase-root').contains('Assessments')
   }

   getAssignmentBtn() {
      return cy.get('[value="assignments"]')
   }

   getPrintELAPageBtn() {
      return cy.get('div.print-ela-group-btn-container button').contains('Print')
   }

   getCancelELAPageBtn() {
      return cy.get('div.print-ela-group-btn-container button').contains('Cancel')
   }

   getAddELABtn() {
      return cy.get('button.btn-add-group').contains('Add ELA')
   }

   getElaPopupCancelBtn() {
      return cy.get('div.elaModelContentActionBtn button').contains('Cancel')
   }

   getAssignmentPagrGradeName() {
      return cy.get('p.ClassDashboard_classDashboardTitle__DGee9')
   }

   getELACardCreatedViewIcon() {
      return cy.get('svg[data-testid="VisibilityIcon"]').eq(0)
   }

   getELACardCreatedViewTableDetails() {
      return cy.get('div.print-ela-group-table-scroll table tbody').eq(0)
   }

   getELACardCreatedViewPopupCloseIcon() {
      return cy.get('svg[data-testid="CloseIcon"]')
   }

   getELACardCreatedDisabledRankQuestions() {
      return cy.get('div[aria-labelledby="demo-row-radio-buttons-group-label"] label')
   }

   getELACardCreatedAllDropdown() {
      return cy.get('li[data-value="All"]')
   }

   getMilestoneShowTopicBtn() {
      return cy.get('div.topics_btn p')
   }

   
   getProdMilestoneShowTopicBtn() {
      return cy.get('button.show_topics')
   }

   getELAMilestoneTab() {
      return cy.get('button.MuiButtonBase-root').contains('Milestones')
   }

   getELAOverviewTab() {
      return cy.get('button.MuiButtonBase-root').contains('Overview')
   }

   getELAOverviewCheckBx() {
      return cy.get('input.PrivateSwitchBase-input')
   }

   getELAMilestoneCreatedAssignBtn() {
      return cy.get('button.MuiButton-root').contains('Assign Now')
   }

   getELAChapterDropdown() {
      return cy.get('div#demo-simple-select-3')
   }

   getELAChapterDropdownValue() {
      return cy.get('ul[aria-labelledby="demo-simple-select-label-3"] li')
   }

   getFilteredELAName() {
      return cy.get('h4.cntLibCardTitle strong')
   }

   getELAContentType() {
      return cy.get('div.MuiFormControl-root label')
   }

   getGradeContentType() {
      return cy.get('div#demo-simple-select-1')
   }

   getSubContentType() {
      return cy.get('div#demo-simple-select-2')
   }


   getELAMilestoneCreatedCancelBtn() {
      return cy.get('button.MuiButton-root').contains('Cancel')
   }

   getELAPageHeader() {
      return cy.get('.elalistheader')
   }


   getELAMilestoneChechBx() {
      return cy.get('input.PrivateSwitchBase-input')
   }

   getELAMilesstoneELAPopup() {
      return cy.get('.elaModelContent')
   }

   getELACardCreatedEvaluatedDropdown() {
      return cy.get('li[data-value="Evaluated"]')
   }

   getELACardCreatedPendingDropdown() {
      return cy.get('li[data-value="Pending"]')
   }

   getELACardCreatedFinalSubmitBtn() {
      return cy.get('button[data-testid="submit-icon"]')
   }

   getELACardEvaluatedDropdown() {
      return cy.get('div[aria-labelledby="demo-simple-select-label demo-simple-select"]')
   }

   getELACardEvaluatedDropdownValue() {
      return cy.get('ul[aria-labelledby="demo-simple-select-label"] li')
   }

   getELAEvaluatedCard() {
      return cy.get('div.group-title-icon')
   }


   getELAEvaluatedCardMarkAbsentiesICon() {
      return cy.get('div.assRankCheckBox ')
   }

   getELAEvaluatedCardMarkAbsentiesCheckBox() {
      return cy.get('input[aria-label="Checkbox demo"]')
   }


   getELACardEvaluatedAbsenteseTable() {
      return cy.get('tr.MuiTableRow-root ')
   }

   getListELACardCreatedSubName() {
      return cy.get('div.card-subject')
   }

   getELACardRecentlyCreatedTxt() {
      return cy.get('div.card-subject h6')
   }

   getELACardCreatedAddedDate() {
      return cy.get('div.group-card small')
   }

   getELACardCreatedAddedStudent() {
      return cy.get('div.student-profile span')
   }

   getELACardCreateGroupAssignBtn() {
      return cy.get('button.elaGrpsActionBtnAssign ')
   }

   getELACardCreateGroupCancelBtn() {
      return cy.get('button.elaGrpsActionBtnCancel ')
   }

   getAddedDateLstInELACard() {
      return cy.get('small[style="color: rgb(158, 158, 158);"]')
   }
   getStudentsLstInELACard() {
      return cy.get('span[style="color: rgb(158, 158, 158);"]')
   }
   getDltBtnLstInELACard() {
      return cy.get('button.MuiButton-textSizeMedium img')
   }
   getViewIcnsLstInELACard() {
      return cy.get('svg.pointer path')
   }
   getELACardExpandedTitle() {
      return cy.get('div.preview-ela-group-content div.print-ela-group-sub span')
   }
   getELAQuestionsSidePanelCloseIcn() {
      return cy.get('[data-testid="CloseIcon"]')
   }
   getELAPopupCancelBtn() {
      return cy.get('button.dlt_outline')
   }
   getDltELACardPopup() {
      return cy.get('div.delete_reminder-content')
   }
   getELACardFilterDrpDwn() {
      return cy.get('div.MuiInputBase-formControl div[role="button"]').eq(0)
   }
   getELACardFilterDrpDwnLst() {
      return cy.get('div.MuiPaper-elevation8 ul li')
   }
   getELACardTableData() {
      return cy.get('table.MuiTable-root thead tr th div')
   }
   getELACardTableDataLst() {
      return cy.get('table.MuiTable-root thead tr th div.MuiBox-root')
   }
   getELACardLearningOutcomeIcn() {
      return cy.get('table.MuiTable-root thead tr th div').eq(4)
   }
   getELACardCompetencyIcn() {
      return cy.get('table.MuiTable-root thead tr th div').eq(6)
   }
   getELACardQuestnNumbersLst() {
      return cy.get('.MuiTableBody-root > .MuiTableCell-root')
   }
   getRankingCheckBxLst() {
      return cy.get('div.assRankCntrListItem')
   }
   getELACardDltConfrmBtn() {
      return cy.get('button.delete_reminder-btn').contains("Confirm")
   }
   getELATitleLstInAddELASect() {
      return cy.get('h4.cntLibCardTitle strong')
   }
   getViewELABtnInELAAddSect() {
      return cy.get('button.cntLibCardBtn')
   }
   getELAQuestionsCheckBx() {
      return cy.get('input[type=checkbox]')
   }
   getAssignELACloseIcn() {
      return cy.get('svg.close-icon_popup')
   }
   getExcellentRankChckBxLst() {
      return cy.get('input[value="1"]')
   }
   getELACardSubmitBtn() {
      return cy.get('button.printSubBtn').contains("Submit")
   }
   getDltBtnLstInELACard() {
      return cy.get('button.MuiButton-textSizeMedium img')
   }
   getELAGropsRadioBtn() {
      return cy.get('input[value="ELAGroups"]')
   }
   getCreateNwGrpBtn() {
      return cy.get('div.elaGroupTabNoDataSect')
   }
   getELACardCreateGroupAssignBtn() {
      return cy.get('button.elaGrpsActionBtnAssign ')
   }
   getELACreateGrpLnkInRHS() {
      return cy.get('button.elaGroupTabSectCreNewGrp')
   }
   getGroupCheckbxlst() {
      return cy.get('input[type="checkbox"]')
   }
   getELACardLst() {
      return cy.get('h6.mb-0')
   }

   getAddedDateLstInELACard() {
      return cy.get('small[style="color: rgb(158, 158, 158);"]')
   }
   getGroupAddedELAAssignBtn() {
      return cy.get('button.elaGrpsActionBtnAssign')
   }
   getGropsLStInELACard() {
      return cy.get('button.MuiTab-fullWidth')
   }
   getMarkAbsentTxt() {
      return cy.get('p.MuiTypography-body2').contains("Mark Absent")
   }

   getElaDeleteIcon() {
      return cy.get('button.MuiButton-root img[src="/static/media/trash.f810db46.svg"]')
   }

   getElaEvalutedDeleteIcon() {
      return cy.get('div.align-items-center img')
   }

   getElaEvalutedViewIcon() {
      return cy.get('svg[data-testid="VisibilityIcon"]')
   }

   getPrintAssignmentTable() {
      return cy.get('div.print-ela-group-table-scroll tbody')
   }

   getELAEvalutionSheetDropdown() {
      return cy.get('div#demo-simple-select')
   }

   getPrintELAEvalutionSheetBtn() {
      return cy.get('button.printEval-txt-btn ').contains('Print Evaluation Sheet')
   }

   getELAEvalutionSheetPrintBtn() {
      return cy.get('button.preview-eval_btn').contains('Print')
   }

   getRankSudentTitleHeader() {
      return cy.get('span.preview-eval-subhead').eq(0)
   }

   getELAEvalutionSheetCancelBtn() {
      return cy.get('button.preview-eval_btn').contains('Cancel')
   }

   getDeleteELAConfirmationPopupBtn() {
      return cy.get('.MuiButton-contained')
   }

   getELAGroupRadioBtn() {
      return cy.get('input[value="ELAGroups"]')
   }

   getELAGroupCreateNewBtn() {
      return cy.get('button.MuiButton-root').contains('Create New Group')
   }

   getELAGroupCreateDeleteConfirmBtn() {
      return cy.get('button.MuiButton-root').contains('Confirm')
   }

   getELAGroupCreateDeletedSuccessMeg() {
      return cy.get('.curriculumMsgPopoverSect')
   }

   getGoBackBtn() {
      return cy.get('[data-testid="goback"] > p')
   }

   getELAGroupAddStudentBtn() {
      return cy.get('button.MuiButton-root').contains('Add')
   }

   getELAGroupCreateGroupBtn() {
      return cy.get('button.MuiButton-root').contains('Create Group')
   }

   getELAGroupQuestionsCheckBoxBtn() {
      return cy.get('button.MuiButton-root')
   }

   getELAGroupUpdateGroupBtn() {
      return cy.get('button.MuiButton-root').contains('Update Group')
   }

   getELACreateesGroupSuccessPopup() {
      return cy.get('.curriculumMsgPopoverSect')
   }

   getELACreateesGroupEditIcon() {
      return cy.get('img[data-testid="edit"]')
   }

   getELACreateesGroupDeleteIcon() {
      return cy.get('img[data-testid="deletegroup"]')
   }

   getELAGroupCreatedStudentDetails() {
      return cy.get('div.MuiDataGrid-virtualScrollerRenderZone')
   }

   getELAGroupCreateDescriptionTxtBox() {
      return cy.get('textarea[name="groupDescription"]')
   }

   getELAGroupCreateAddStudentIcon() {
      return cy.get('button[data-testid="add-button"]')
   }


   getELAGroupNameTxtBox() {
      return cy.get('input[name="groupName"]')
   }

   getELASubSearchTxtField() {
      return cy.get('input[placeholder="Search Content..."]')
   }

   getELASubSearchIcon() {
      return cy.get('svg[data-testid="SearchIcon"]')
   }

   getViewELABtn() {
      return cy.get('button.cntLibCardBtn').eq(3)
   }

   getOverviewViewELABtn() {
      return cy.get('button.cntLibCardBtn')
   }

   getViewELAQuestionCheckBx() {
      return cy.get('input[aria-label="Checkbox demo"]')
   }

   getELAQuestionCheckBx() {
      return cy.get('input[aria-label="Checkbox demo"]')
   }

   getELAAssignBtn() {
      return cy.get('button.elaAllStdSectActionBtnAssign')
   }

   getELAAssignedSuccessPopupMsg() {
      return cy.get('div.elaModelContent h2')
   }

   getELACreatedStudentRemoveBtn() {
      return cy.get('svg.MuiChip-deleteIcon')
   }
   getELAAssignedPrintBtn() {
      return cy.get('button.elaModelContentActionBtnAsign')
   }

   getELAAssignedPrintPageTxt() {
      return cy.get('div.print-ela-group-sub span')
   }

}

module.exports = new TeacherELAPage2() 