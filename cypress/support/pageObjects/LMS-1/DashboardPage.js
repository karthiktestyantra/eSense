class DashboardPage {

  getDashboard() {
    return cy.contains('Dashboard')
  }

  getMyClasses() {
    return cy.contains('My Classes')
  }

  getMyCalendar() {
    return cy.contains('My Calendar')
  }

  getReports() {
    return cy.contains('Reports')
  }

  getCurriculum() {
    return cy.contains('Curriculum')
  }

  getContentLibrary() {
    return cy.get(':nth-child(4) > a > .side-nav-dashboard > .side-nav-icon > img')
  }

  getMyProfile() {
    return cy.contains('My Profile');
  }

  getLogout() {
    return cy.contains('Logout');
  }
}
module.exports = new DashboardPage()