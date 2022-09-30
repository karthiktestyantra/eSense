class AdminDashboardPendingActionsPage {

  getPeriodicFeedbackCardInPendingActions() {
    return cy.xpath('//p[.="Pending Actions"]/../..//p[.="PERIODIC FEEDBACK"]')
  }

  getPeriodicFeedbackCard() {
    return cy.get('[class*="PendActItem"] p')
  }

  getPeriodicFeedbackCardCloseIcon() {
    return cy.xpath('//p[.="PERIODIC FEEDBACK"]/..//*[@data-testid="close-icon"]')
  }

  getFillWeeklyFeedbackFormText() {
    return cy.xpath('//h6[.="Fill weekly Feedback form"]')
  }

  getPeriodicFeedbackPopUpCloseIcon() {
    return cy.get('[data-testid="pop-close-id"]')
  }

  getGoToFeedbackFormButton() {
    return cy.xpath('//button[.="Go to FEEDBACK FORM"]')
  }

  getPeriodicFeedbackTitle() {
    return cy.xpath('//div[.="Periodic Feedback"]')
  }

  getDateOnPeriodicFeedbackPopUp() {
    return cy.xpath('//div[.="Periodic Feedback"]/../div[@class="left-cont"]')
  }

  getNoOfQuestionsPeriodicFeedbackPopUp() {
    return cy.get('[class="circle"] span')
  }

  getEmojisPeriodicFeedbackPopUp() {
    return cy.xpath('//img[contains(@data-testid,"text")]')
  }

  getEmojisTextPeriodicFeedbackPopUp() {
    return cy.get('.smiley-text')
  }

  getFeedbackDefaultAnswerPeriodicFeedbackPopUp() {
    return cy.get('[data-testid="answer-click-id"] [class="feed-text-cls"]')
  }

  getAddOtherPointsTextFieldPeriodicFeedbackPopUp() {
    return cy.get('#rc_content')
  }

  getContinueButtonPeriodicFeedbackPopUp() {
    return cy.get('[data-testid="feed-test-id"]')
  }

  getSubmitButtonPeriodicFeedbackPopUp() {
    return cy.xpath('//span[.="Submit"]')
  }

  getGoBackButtonPeriodicFeedbackPopUp() {
    return cy.get('[class="font-cls"]')
  }

  getDateOnPeriodicFeedbackCard() {
    return cy.xpath('//h6[.="Fill weekly Feedback form"]/../p')
  }

  //Business Logic

  verifyFeedbackDefaultAnswerPeriodicFeedbackPopUp() {
    this.getFeedbackDefaultAnswerPeriodicFeedbackPopUp().then(($el) => {
      const uuid = () => Cypress._.random(1, $el.length)
      const index = uuid()
      cy.wrap($el).eq(index - 1).click()
      if (index == $el.length || index == $el.length - 1) {
        cy.wrap($el).eq(index - 2).click()
      } else {
        cy.wrap($el).eq(index + 1).click()
      }
    })
  }

  verifyEmojisPeriodicFeedbackPopUp(text) {
    this.getEmojisPeriodicFeedbackPopUp().then(($el) => {
      const uuid = () => Cypress._.random(1, $el.length)
      const index = uuid()
      cy.wrap($el).eq(index - 1).click()
      cy.wait(1000)
      this.getEmojisTextPeriodicFeedbackPopUp()
        .invoke('text').should('contain', text[index - 1])
    })
  }

}
module.exports = new AdminDashboardPendingActionsPage()