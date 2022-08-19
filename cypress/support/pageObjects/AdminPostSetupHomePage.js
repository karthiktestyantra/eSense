class AdminPostSetupHomePage{
    getSchoolLnk(){
        return cy.get('.side-nav-dashboard .menu-txt').contains("School")
    }
    getGradesAndDeptSectionBtn(){
        return cy.get('div div p:visible').contains("Grades & Stream")
    }
    getGradesAndDeptSectionBtn2(){
        return cy.get('.MuiButtonBase-root:visible').contains("Grades and subject")
    }
    getCurriculumBuilderSectionLnk(){
        return cy.get('div div p:visible').contains("Curriculum")
    }
    getAdminAccountsSectionLnk(){
        return cy.get('div div p:visible').contains("Admin Accounts")
    }
    getReportsSectionLnk(){
        return cy.get('.side-nav-dashboard .menu-txt').contains("Reports")
    }

}
export default AdminPostSetupHomePage;