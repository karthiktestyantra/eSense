class TeacherProfileAccountInformationPage{

    getAccountAndSupportTitle(){
        return cy.xpath('//p[.=" Account & Support"]')
    }

    getBasicAndAcademicDetailsTab(){
        return cy.get('[class*="ensese-student-tab"] button')
    }

    getTextFieldsBasicAndAcademicDetails(){
        return cy.get('[type="text"]')
    }
    
}
module.exports = new TeacherProfileAccountInformationPage() 