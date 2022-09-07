class Admin360ReportPage{

    get360ReportLnk(){
        return cy.get('div.popper-sub-student div').contains("Student 360 Report")
     }
     get360ReportContents(){
        return cy.get('table[aria-labelledby="tableTitle"] thead tr th')
     }
     getGradeDrpDwn(){
      return cy.get('div div#demo-simple-select-1')
     }
     getGradeDrpDwnLst(){
      return cy.get('div.MuiPopover-paper ul li[role="option"]')
     }
     getSectionDrpDwnLst(){
      return cy.get('div.MuiPopover-paper ul li[role="option"]')
     }
     getSectionDrpDwn(){
      return cy.get('div div#demo-simple-select-2')
     }
     getFrstNameLst(){
      return cy.get('td p.MuiTypography-body1')
     }
     getSearchStudentSearchBar(){
      return cy.get('input.MuiInputBase-inputAdornedStart')
     }
     getCheckbxLst(){
      return cy.get('input[type="checkbox"]')
     }
     getUploadCSVBtn(){
      return cy.get('button[type="button"]').contains("Upload CSV")
     }
     getGenerateReportBtn(){
      return cy.get('button[type="button"]').contains("Generate report")
     }
     getDwnldReportBtn(){
      return cy.get('button[type="button"]').contains("Download report")
     }
}
export default Admin360ReportPage