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
   
}
module.exports = new TeacherGradeBookPage() 