const adminDashboardPage = require('../../../support/pageObjects/LMS-2/AdminDashboardPage')
const quickLinksPage = require('../../../support/pageObjects/LMS-2/QuickLinksPage')

describe("Verify admin school functionalities - Sprint 21(EL-6151,EL-6152,EL-6044)", function () {

    before(function () {
        cy.visit(Cypress.env('urlMain'))
        cy.fixture('LMS/AdminLoginCredentials').then(function (validAdminLoginData) {
            cy.AdminPostSetup(validAdminLoginData.newUsername, validAdminLoginData.password)
        })
    })
    beforeEach(function () {
        cy.viewport(1920, 1080)
        cy.fixture("LMS/AdminNotice.json").as("Notice")
    })

    it('EL-8406/ES8406-01 To validate user is able to create notice for publish now.',function () {
        adminDashboardPage.getDashboardImg().click()
        adminDashboardPage.getGoToMySchoolButton().click()
    })
})