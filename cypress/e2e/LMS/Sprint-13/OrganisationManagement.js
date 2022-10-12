const mainAdminHomePage = require("../../../support/pageObjects/LMS-2/MainAdminHomePage")
const mainAdminOrganisationManagementPage = require("../../../support/pageObjects/LMS-2/MainAdminOrganisationManagementPage")

describe("Verify Organisation Page functionalities - Sprint 13(EL-4139)", function () {
  before(function () {
    cy.viewport(1920, 1080)
    cy.visit(Cypress.env("url"))
    cy.fixture("LMS/mainAdminLoginCredentials").then(function (validAdminLoginData) {
      cy.Mainlogin(validAdminLoginData.username, validAdminLoginData.password)
    })
  })

  beforeEach(function () {
    cy.fixture("LMS/mainAdminOrganisationManagementCredentials").as("OrgCredentials")
  })

  it("To validate esense admin is able to go to Organisation Management page", function () {
    mainAdminHomePage.getOrganisationManagementLnk().click()
    mainAdminOrganisationManagementPage.getTitle().should('have.text', this.OrgCredentials.PageTitle)
    // })

    //it("To validate esense admin is able to view the replaced 'Registered Date' text/EL-4139/ES4139_01",function () {
    mainAdminOrganisationManagementPage.getRegDateTitle().should('have.text', this.OrgCredentials.SubTitleDate)
    //})

    //it("To validate esense admin is able to view the renamed 'Sub Domain' column name instead of 'Code'/EL-4140/ES4140_01",function (){
    cy.wait(1000)
    mainAdminOrganisationManagementPage.getActionsBtn().click({ force: true })
    mainAdminOrganisationManagementPage.getSchoolManagementLnk().click({ force: true })
    mainAdminOrganisationManagementPage.getSubDomainTitle().should('have.text', this.OrgCredentials.SubTitleDomain)
    // })
  })

})