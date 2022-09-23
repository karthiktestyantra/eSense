class Teacher360ReportPage {
   get360ReportLnk() {
      return cy.get('div.popper-sub-student div').contains("Student 360 Report")
   }
   getGradeDrpDwnInReport() {
      return cy.get('div.MuiSelect-select').eq(0)
   }
   getGradeDrpDwnLstInReport() {
      return cy.get('div.MuiPaper-elevation8 ul li')
   }
   getAddReportCloseIcn() {
      return cy.get('svg[data-testid="CloseIcon"]')
   }
   getSectionDrpDwnInReport() {
      return cy.get('div.MuiSelect-select').eq(1)
   }
   getNameLstIn360report() {
      return cy.get('div.MuiBox-root p')
   }
   get360ReportTitleTxt() {
      return cy.get('div.StudentReport_classDashboardHeader__1fGSe p')
   }
   get360ReportContents() {
      return cy.get('table[aria-labelledby="tableTitle"] thead tr th')
   }
   getPendingFlagLst() {
      return cy.get('img.alertImgcls')
   }
   getViewReportLst() {
      return cy.get('button.viewBtn')
   }
   getNameInReport() {
      return cy.get('div.StudentDetails_stdDetailPrCnt__wb5zL h3')
   }
   getClassSectInReport() {
      return cy.get('div.StudentDetails_stdDetailPrCnt__wb5zL p')
   }
   getDetailsInReport() {
      return cy.get('h4.MuiTypography-root')
   }
   getSubContentsLstInReport() {
      return cy.get('button.MuiTab-textColorPrimary')
   }
   getPreviewAndPrintBtnInReport() {
      return cy.get('button.StudentDetails_stdPrvPrntBtn__1MZL7')
   }
   getMyEarlyPerformanceTitle() {
      return cy.get('table.StudentDetails_prevStdMyCompTable__obwv2 th').eq(0)
   }
   getMyCompetencyModules() {
      return cy.get('div.StudentDetails_prevStdColrExplLeft__3rpn8 ul li')
   }
   getHealthAddReportsBtn() {
      return cy.get('button.MuiButtonBase-root').contains("Add Reports")
   }
   getHealthAddReportBtn() {
      return cy.get('button.MuiButtonBase-root').contains("Add New").eq(0)
   }
   getAddReportSchlType() {
      return cy.get('div[role="button"]').eq(1)
   }
   getAddReportGrade() {
      return cy.get('div[role="button"]').eq(2)
   }
   getAddReportGradeDrpDwnLst() {
      return cy.get('div ul[role="listbox"] li')
   }
   getAddReportWeightTxt() {
      return cy.get('input[type="number"]').eq(0)
   }
   getAddReportHeightTxt() {
      return cy.get('input[type="number"]').eq(1)
   }
   getAddReportAddBtn() {
      return cy.get('button.deptSavebtn')
   }
   getAddedHealthReportLst() {
      return cy.get('h1.StudentDetails_h1title__yfa51')
   }
   getHealthReportAddedCloseIcn() {
      return cy.get('[data-testid="CloseIcon"]')
   }
   getErrorMsgInAddHealthReport() {
      return cy.get('span.text-danger')
   }
   getMyCompetencyRHSDrpDwn() {
      return cy.get('div.stdDetSelectFld div div[role="button"]').eq(1)
   }
   getMyCompetencyRHSDrpDwnLst() {
      return cy.get('div ul li.MuiMenuItem-gutters')
   }
   getSubPerformanceContentLst() {
      return cy.get('table tr th')
   }
   getMyCompetencyTabLnk() {
      return cy.get('button.MuiTab-root').contains("My Competency")
   }
   getMyCompetencyRankTxt() {
      return cy.get('div.StudentDetails_prevStdMyCompTableCompt__3HYpf p')
   }
   getMyCompetencySubDrpDwn() {
      return cy.get('#demo-simple-select').eq(1)
   }
   getSubPerformanceRanktxt() {
      return cy.get('div.StudentDetails_prevStdMyCompTableCompt__3HYpf p')
   }
}
module.exports = new Teacher360ReportPage() 