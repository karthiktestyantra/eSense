class MainAdminHomePage {

  getHomePageTitle() {
    return cy.get('div.page-title h1').eq(0);
  }

  getSystemConfigDrpDwn() {
    return cy.get('div span.menu-title').contains("System Configuration");
  }

  getRolesManagementLnk() {
    return cy.get('div span.menu-title').contains("Users/Roles Management");
  }

  getOrganisationManagementLnk() {
    return cy.get('div span.menu-title').contains("Organization Management");
  }

  getMasterManagementLnk() {
    return cy.get('div span.menu-title').contains("Masters Management");
  }

  getCurriculumPlanLnk() {
    return cy.get('div span.menu-title').contains("Curriculum Plan");
  }

  getGradeManagementLnk() {
    return cy.get('div span.menu-title').contains("Grades");
  }

  getCourseLnk() {
    return cy.get('div span.menu-title').contains('Courses')
  }

  getGradebookTemplateLnk() {
    return cy.get('div span.menu-title').contains("Gradebook Template")
  }

}
module.exports = new MainAdminHomePage() 