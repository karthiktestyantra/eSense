const adminDashboardPendingActionsPage = require("../../../support/pageObjects/LMS-2/AdminDashboardPendingActionsPage")
var weekday = require('weekday')
const dayjs = require('dayjs')

describe("Verify Admin Dashboard Pending Actions functionalities - Sprint 21(EL-5047)", function () {

    before(function () {
        cy.visit(Cypress.env('urlQAPreSetup'))
        cy.fixture('LMS/AdminLoginCredentials').then(function (validAdminLoginData) {
            cy.AdminPostSetup(validAdminLoginData.fNew, validAdminLoginData.password)
        })
    })

    beforeEach(function () {
        cy.fixture("LMS/AdminDashboardCredentials").as("adminDashboardCredentials")
    })

    it("EL-5047/ES5047-02 Validate user is able to view the  periodic feedback card below pending Action section.", function () {
        cy.isVisible(adminDashboardPendingActionsPage.getPeriodicFeedbackCardInPendingActions())
        cy.isVisible(adminDashboardPendingActionsPage.getPeriodicFeedbackCard())
        cy.isVisible(adminDashboardPendingActionsPage.getPeriodicFeedbackCardCloseIcon())
        cy.isVisible(adminDashboardPendingActionsPage.getFillWeeklyFeedbackFormText())
        cy.isVisible(adminDashboardPendingActionsPage.getGoToFeedbackFormButton())
        adminDashboardPendingActionsPage.getDateOnPeriodicFeedbackCard().invoke('text')
            .should('contain', weekday().substring(0, 3) + "," + dayjs().format(" DD MMM " + "‘" + "YY"))
    })

    it("EL-5047/ES5047-03,ES5047-04 Validate the User is able to view the following details on clicking Go to feedback form and three feedback questions are displayed also able to  view the questions and perform the following ", function () {
        cy.forceClick(adminDashboardPendingActionsPage.getGoToFeedbackFormButton())
        cy.wait(1000)
        cy.isVisible(adminDashboardPendingActionsPage.getPeriodicFeedbackTitle())
        adminDashboardPendingActionsPage.getDateOnPeriodicFeedbackPopUp().invoke('text')
            .should('contain', weekday().substring(0, 3) + "," + dayjs().format(" DD MMM " + "‘" + "YY" + " • "))
        cy.isVisible(adminDashboardPendingActionsPage.getEmojisPeriodicFeedbackPopUp())
        adminDashboardPendingActionsPage.getNoOfQuestionsPeriodicFeedbackPopUp()
            .should('have.length', 2).invoke('text').should('contain', 12)
        adminDashboardPendingActionsPage.verifyEmojisPeriodicFeedbackPopUp(this.adminDashboardCredentials.emojiText)
        adminDashboardPendingActionsPage.verifyFeedbackDefaultAnswerPeriodicFeedbackPopUp()
        adminDashboardPendingActionsPage.getAddOtherPointsTextFieldPeriodicFeedbackPopUp().type(this.adminDashboardCredentials.addOtherPoints)
    })

    it("EL-5047/ES5047-05 Validate user is able to click on Continue question to go from one question to another.", function () {
        cy.isVisible(adminDashboardPendingActionsPage.getContinueButtonPeriodicFeedbackPopUp())
        adminDashboardPendingActionsPage.getContinueButtonPeriodicFeedbackPopUp().click()
        adminDashboardPendingActionsPage.getNoOfQuestionsPeriodicFeedbackPopUp()
            .should('have.length', 2).invoke('text').should('contain', 23)
        adminDashboardPendingActionsPage.verifyEmojisPeriodicFeedbackPopUp(this.adminDashboardCredentials.emojiText)
        adminDashboardPendingActionsPage.verifyFeedbackDefaultAnswerPeriodicFeedbackPopUp()
        adminDashboardPendingActionsPage.getContinueButtonPeriodicFeedbackPopUp().click()
    })

    it("EL-5047/ES5047-08 Validate submit button is avialable for the user in the last question screen.", function () {
        cy.isVisible(adminDashboardPendingActionsPage.getSubmitButtonPeriodicFeedbackPopUp())
        adminDashboardPendingActionsPage.getAddOtherPointsTextFieldPeriodicFeedbackPopUp().type(this.adminDashboardCredentials.addOtherPoints)
    })

    it("EL-5047/ES5047-06,ES5047-07 Validate user is redirected to previous screen after user clicks on Go back button and X button", function () {
        cy.isVisible(adminDashboardPendingActionsPage.getGoBackButtonPeriodicFeedbackPopUp())
        adminDashboardPendingActionsPage.getGoBackButtonPeriodicFeedbackPopUp().click()
        adminDashboardPendingActionsPage.getPeriodicFeedbackPopUpCloseIcon().scrollIntoView()
        cy.isVisible(adminDashboardPendingActionsPage.getPeriodicFeedbackPopUpCloseIcon())
        cy.isVisible(adminDashboardPendingActionsPage.getPeriodicFeedbackCard())
    })

})