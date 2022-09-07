class DashboardPage {

  getDashboard(){
    return cy.contains('Dashboard')
  }

  getMyClasses(){
    return cy.contains('My Classes')
  }

  getMyCalendar(){
    return cy.contains('My Calendar')
  }

  getReports(){
    return cy.contains('Reports')
  }

  getCurriculum(){
    return cy.contains('Curriculum')
  }

  getContentLibrary(){
    return cy.get('.side-nav-icon').eq(3)
  }

  getMyProfile() {
    return cy.contains('My Profile');
  }

  getLogout() {
    return cy.contains('Logout');
  }
}
export default DashboardPage