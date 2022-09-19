class LoginPage {

  getAdminBtn() {
    return cy.get('button[type="button"]')
  }

  getLoginSuccessMsg() {
    return cy.xpath('//div[text()="Logged in successfully"]')
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
    cy.url().should('contain', 'dashboard');
    cy.isVisible(this.getLoginSuccessMsg())
  }

}
module.exports = new LoginPage()