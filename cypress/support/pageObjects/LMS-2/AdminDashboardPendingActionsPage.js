class AdminDashboardPendingActionsPage {

  getPeriodicFeedbackCardInPendingActions() {
    return cy.xpath('//p[.="Pending Actions"]/../..//p[.="PERIODIC FEEDBACK"]')
  }

  getPeriodicFeedbackCard() {
    return cy.get('[class*="PendActItem"] p')
  }

  getGoToFeedbackFormButton() {
    return cy.xpath('//button[.="Go to FEEDBACK FORM"]')
  }

  getPeriodicFeedbackTitle() {
    return cy.xpath('//div[.="Periodic Feedback"]')
  }

}
module.exports = new AdminDashboardPendingActionsPage()