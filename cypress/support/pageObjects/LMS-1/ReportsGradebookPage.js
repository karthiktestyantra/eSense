class ReportsGradebookPage {

  getStudentGradebookOption(){
    return cy.get('div.content-popover-reports>div>div>div+div>div.classTitle').contains('Student Gradebook')
  }

  getStudentGradebookTitle(){
    return cy.get('.GradeBook_classDashboardTitle__nTzck');
  }

  getOneofTheClasses(){
    return cy.get('#simple-tab-2')
  }

  getCheckboxOfStudents(){
    return cy.xpath('//input[@type="checkbox"]').eq(1);
  }

  getUploadCSV(){
    return cy.contains('Upload CSV');
  }

  getSendaMail(){
    return cy.contains('Send a mail');
  }

  getCreateReminder(){
    return cy.contains('Create reminder');
  }

  getGenerateReport(){
    return cy.contains('Print Gradebook');
  }

  getArrowbuttonofStudent(){
    return cy.get('svg[data-testid="ArrowForwardIosIcon"]').eq(0);
  }

  getReportCardTitle(){
    return cy.get('p.reptClass');
  }

  getGradePopupCloseIcon(){
    return cy.get('.StudentGradeBook_stdGrdActionSect__BbsXI > .MuiButton-outlined')
  }

  getClassForStudentList(){
    return cy.get('#simple-tab-2')
  }

  getStudentsCountIntheClass(){
    //return cy.get('tbody>tr>td>span>input[type="checkbox"]');
    return cy.get("tbody").children("tr").children("td").children("span").children('input[type="checkbox"]')
    //return cy.get("tbody").get
  }
  
}
export default ReportsGradebookPage