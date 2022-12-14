class LoginPage {

  getAdminBtn() {
    return cy.get('button[type="button"]')
  }

  getLoginSuccessMsg() {
    return cy.xpath('//div[text()="Logged in successfully"]', { timeout: 10_000 })
  }

  getTeacherBtn() {
    return cy.get('button[type="button"]').eq(1)
  }

  getTitle() {
    return cy.get('div a img');
  }

  getUserName() {
    return cy.get('input[name="userName"]')
  }

  getPassword() {
    return cy.get('input[name="password"]')
  }

  getLoginBtn() {
    return cy.get('button[type="submit"]').contains("Log In")
  }

  login(email, password) {
    if (password == 'Test@12345') {
      this.getAdminBtn().eq(0).click()
    } else {
      this.getAdminBtn().eq(1).click()
    }
    cy.isVisible(this.getTitle())
    this.getUserName().clear().type(email);
    this.getPassword().clear().type(password);
    cy.forceClick(this.getLoginBtn())
    cy.wait(1000)
    this.getLoginSuccessMsg().should('be.visible')
    cy.url().should('contain', 'dashboard');
  }

}
module.exports = new LoginPage()