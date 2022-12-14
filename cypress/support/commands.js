import 'cypress-file-upload';
import 'cypress-wait-until';

after(function () {
  cy.window().then(win => win.sessionStorage.clear());
  cy.clearCookies();
  cy.clearLocalStorage();
})

Cypress.Commands.add('uncaughtException', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })
})

const login = require('./pageObjects/LMS-2/MainAdminIndexPage')
Cypress.Commands.add('Mainlogin', (email, password) => {
  login.getTitle().should('be.visible')
  login.getUserName().clear().type(email);
  login.getPassword().clear().type(password);
  login.getContinueBtn().click({ force: true });
  cy.url().should('contain', 'dashboard')
  cy.wait(1000);
})

const Adminlogin = require('./pageObjects/LMS-2/AdminIndexPage')
Cypress.Commands.add('AdminPostSetup', (email, password) => {
  Adminlogin.getAdminBtn().click()
  Adminlogin.getTitle().should('be.visible')
  Adminlogin.getUserName().clear().type(email);
  Adminlogin.getPassword().clear().type(password);
  Adminlogin.getLoginBtn().click({ force: true });
  // cy.url().should('contain', 'dashboard');
  cy.wait(1000);
})

const loginPage = require('./pageObjects/LMS-1/LoginPage')
const walkthroughPage = require('./pageObjects/LMS-1/WalkthroughPage')
Cypress.Commands.add('login', (email, password) => {
  loginPage.getUserName().clear().type(email);
  loginPage.getPassword().clear().type(password);
  loginPage.getLogin().click({ force: true });
  walkthroughPage.getLoginSuccessfulMsg().should("have.text", "Logged in successfully");
})

Cypress.Commands.add('TeacherPostSetupLogin', (email, password) => {
  Adminlogin.getTeacherBtn().click()
  cy.wait(2000)
  Adminlogin.getTitle().should('be.visible')
  Adminlogin.getUserName().clear().type(email);
  Adminlogin.getPassword().clear().type(password);
  Adminlogin.getLoginBtn().click({ force: true });
  cy.url().should('contain', 'dashboard');
  cy.wait(1000);
})

Cypress.Commands.add("requestAPI", (url, body, aliasName, methodType) => {
  cy.request({
    method: methodType,
    url: Cypress.env("apiURL") + url,
    body: body,
    failOnStatusCode: false
  }).as(aliasName)
  //.then((response) =>{cy.wrap(response).as(aliasName)})
})

//This command is to verify the text using equals method
Cypress.Commands.add('verifyTextEquals', (element, text) => {
  element.should(($el) => {
    expect($el.text().trim()).to.equals(text)
  })
})

//This command is to verify the text using contains method
Cypress.Commands.add('verifyTextContains', (element, text) => {
  element.should(($el) => {
    expect($el.text().trim()).to.contains(text)
  })
})

//This command is to verify the element is visible
Cypress.Commands.add('isVisible', (element) => {
  element.should('be.visible')
})

//This command is to verify the element is enabled
Cypress.Commands.add('isEnabled', (element) => {
  element.should('be.enabled')
})

//This command is to verify the length of the element
Cypress.Commands.add('haveLength', (element, length) => {
  element.should('have.length', length)
})

//This command is to verify the element is Disabled
Cypress.Commands.add('isDisabled', (element) => {
  element.should('be.disabled')
})

//This command is to verify the attribute value
Cypress.Commands.add('verifyAttributeValue', (element, attr, text) => {
  element.invoke('attr', attr).should('contain', text)
})

//This command is to set and verify the attribute value
Cypress.Commands.add('setAndVerifyAttributeValue', (element, attr, newValue) => {
  element.invoke('attr', attr, newValue).should('have.attr', attr, newValue)
})

//This command is used to do Force click on a element
Cypress.Commands.add('forceClick', (element) => {
  element.click({ force: true })
})

//This command is used to check and verify the checkbox
Cypress.Commands.add('checkAndVerify', (element) => {
  element.check({ force: true }).should('be.checked')
})

//This command is used to uncheck and verify the checkbox
Cypress.Commands.add('unCheckAndVerify', (element) => {
  element.uncheck({ force: true }).should('not.be.checked')
})

//This command is used to click on the body
Cypress.Commands.add('clickOnBody', () => {
  cy.get('body').click(0, 0)
})











