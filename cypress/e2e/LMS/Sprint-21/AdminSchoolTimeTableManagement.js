const adminDashboardPage = require('../../../support/pageObjects/LMS-2/AdminDashboardPage')
const quickLinksPage = require('../../../support/pageObjects/LMS-2/QuickLinksPage')
const adminSchoolTimeTableManagementPage = require('../../../support/pageObjects/LMS-2/AdminSchoolTimeTableManagementPage')

describe("Verify Admin school Timetable Management functionalities - Sprint 21(EL-6536)", function () {

    before(function () {
        cy.visit(Cypress.env('urlQAPreSetup'))
        cy.fixture('LMS/AdminLoginCredentials').then(function (validAdminLoginData) {
            cy.AdminPostSetup(validAdminLoginData.fNew, validAdminLoginData.password)
        })
    })

    it('EL-6536/ES6536_1 Validate “Go Back” button is available in TimeTable Management', function () {
        cy.forceClick(adminDashboardPage.getSchoolBtn())
        quickLinksPage.getTimeTableManagementBtn().click()
        adminSchoolTimeTableManagementPage.getGoBackButtonTimeTableManagement().click()
    })

    it('EL-6536/ES6536_2 Validate when the user is redirected to the Quick Link screen.', function () {
        cy.isVisible(quickLinksPage.getQuickLinksTitle())
    })

})