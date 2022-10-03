class TeacherProfileAccountInformationPage{

    getAssessmentTxt(){
        return cy.get('h4').eq(0);
    }
    
  
}
module.exports = new TeacherProfileAccountInformationPage() 