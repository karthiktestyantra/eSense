const home = new MainAdminHomePage();
const OrgManage = new MainAdminOrganisationManagementPage();

describe("Verify Organisation Page functionalities", function () {
  before(function () {
    cy.viewport(1920, 1080)
    cy.visit(Cypress.env("url"))
    cy.fixture("LMS/mainAdminLoginCredentials").then(function (validAdminLoginData) {
      cy.Mainlogin(validAdminLoginData.username, validAdminLoginData.password)
    })
  })
  beforeEach(function () {
    cy.fixture("LMS/mainAdminOrganisationManagementCredentials").then(function (OrgCredentials) {
      this.OrgCredentials = OrgCredentials;
    })
  })

  it("To validate esense admin is able to go to Organisation Management page", function () {
    home.getOrganisationManagementLnk().click()
    OrgManage.getTitle().should('have.text', this.OrgCredentials.PageTitle)
    // })

    //it("To validate esense admin is able to view the replaced 'Registered Date' text/EL-4139/ES4139_01",function () {
    OrgManage.getRegDateTitle().should('have.text', this.OrgCredentials.SubTitleDate)
    //})

    //it("To validate esense admin is able to view the renamed 'Sub Domain' column name instead of 'Code'/EL-4140/ES4140_01",function (){
    cy.wait(1000)
    OrgManage.getActionsBtn().click({ force: true })
    OrgManage.getSchoolManagementLnk().click({ force: true })
    OrgManage.getSubDomainTitle().should('have.text', this.OrgCredentials.SubTitleDomain)
    // })
  })

})