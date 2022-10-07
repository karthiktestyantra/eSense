class TeacherGradeBookPage {

    getStudentGradeBookTitle() {
        return cy.get('p[class*=classDashboardTitle]')
    }

    getGradeTabStudentGradeBook() {
        return cy.get('#simple-tab-1')
    }

    getStudentForwardArrow() {
        return cy.get('[data-testid="ArrowForwardIosIcon"]')
    }

    getAttendancePercentageStudentGradeBook() {
        return cy.xpath('//p[text()="Total Attendance"]/../h1[contains(text(),"%")]')
    }

    getGreadBookTitle(){
        return cy.get('.StudentGradeBook_stdGrdBkTitCntr__1k1Kv h1')
    }

    getGreadBookRemarksTextfield(){
        return cy.get('textarea.MuiInputBase-inputMultiline').eq(0)
    }
    getGreadBookEditBtn(){
        return cy.get('.StudentGradeBook_stdGrdActionGoBkSavEdt__2Geb6')
    }
    getGreadBookSaveBtn(){
        return cy.get('.StudentGradeBook_stdGrdActionGoBkSavEdt__2Geb6')
    }
}
module.exports = new TeacherGradeBookPage() 