class ClassOverviewPage{
    
    getTeacherPortalTitle(){
        return cy.get('li.overview-card>p.MuiTypography-root:nth-of-type(1)').eq(0)
    }
    getClasses(){
        return cy.get('.icon_num').eq(0)
    }

    getSubjects(){
        return cy.get('.icon_num').eq(1)
    }

    getStudents(){
        return cy.get('.icon_num').eq(2)
    }

    getGradeWithSection(gradeWithSection){
        return cy.get('.card_roman_txt').eq(gradeWithSection)
    }

    getSubject(subjectCount){
        subjectCount = subjectCount*2;
        return cy.get('.card_inner_text').eq(subjectCount)
    }

    getStudentCount(studentCount){
        studentCount = studentCount*2+1 ;
        return cy.get('.card_inner_text').eq(studentCount)
    }

    getRequest() {
        return cy.contains('Request change');
      }
    
      getContinue() {
        return cy.contains('Continue');
      }

    getStepContent(){
        return cy.get('.footer_subtitle')
    }
    
}

module.exports = new ClassOverviewPage()