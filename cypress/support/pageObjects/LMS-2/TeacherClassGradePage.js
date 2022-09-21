class TeacherClassGradePage{
    getClassDetailsButton(){
        return cy.contains('Class Details')
    }
    getTimetableButton(){
        return cy.contains('Timetable')
    }
    getViewLessonPlaneButton(){
        return  cy.get('[class="sessionLessPlanText"]')
    }
}
export default TeacherClassGradePage;