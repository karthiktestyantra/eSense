class TeacherGradeBookPage {

    getStudentGradeBookTitle() {
        return cy.get('p[class*=classDashboardTitle]')
    }
   
}
module.exports = new TeacherGradeBookPage() 