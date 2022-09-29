const adminDashboardPendingActionsPage = require("../../../support/pageObjects/LMS-2/AdminDashboardPendingActionsPage")
const dayjs = require('dayjs')

describe("Verify Admin Dashboard Pending Actions functionalities - Sprint 21(EL-5047)", function () {

    before(function () {
        cy.visit(Cypress.env('urlQAPreSetup'))
        cy.fixture('LMS/AdminLoginCredentials').then(function (validAdminLoginData) {
            cy.AdminPostSetup(validAdminLoginData.fNew, validAdminLoginData.password)
        })
    })

    beforeEach(function () {
        cy.fixture("LMS/AdminDashboardCredentials").as("dashboard")
    })

    it("EL-5047/ES5047-02 Validate user is able to view the  periodic feedback card below pending Action section.", function () {
        cy.isVisible(adminDashboardPendingActionsPage.getPeriodicFeedbackCardInPendingActions())
        cy.isVisible(adminDashboardPendingActionsPage.getPeriodicFeedbackCard())
    })

    it("EL-5047/ES5047-03 Validate the following details are displayed in the periodic feedback, title of the card, icon, subtitle , day and date , X-button.", function () {
        cy.forceClick(adminDashboardPendingActionsPage.getGoToFeedbackFormButton())
        cy.isVisible(adminDashboardPendingActionsPage.getPeriodicFeedbackTitle())
       // var day1 = (dayjs().format('d'))
        cy.log(dayjs().weekday(5))
        //cy.log(dayjs().weekday(day1))
        cy.log(dayjs().format("d DD MMM " + "'" + "YY"))

    })

})