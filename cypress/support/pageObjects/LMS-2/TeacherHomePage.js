class TeacherHomePage{

    getAssessmentTxt(){
        return cy.get('h4').eq(0);
    }
    getAssessmentCount(){
        return cy.get('h4 span').eq(0);
    }
  
}
module.exports = new TeacherHomePage() 