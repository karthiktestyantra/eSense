class TeacherProfileAccountInformationPage{

    getAccountAndSupportTitle(){
        return cy.xpath('//p[.=" Account & Support"]')
    }
    
  
}
module.exports = new TeacherProfileAccountInformationPage() 