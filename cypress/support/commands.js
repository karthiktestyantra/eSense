import 'cypress-file-upload';
import MainAdminIndexPage from "./pageObjects/LMS-2/MainAdminIndexPage";
const login = new MainAdminIndexPage();

Cypress.Commands.add('Mainlogin', (email, password) => {
  login.getTitle().should('be.visible')
  login.getUserName().type(email);
  login.getPassword().type(password);
  login.getContinueBtn().click({ force: true });
  cy.url().should('contain', 'dashboard')
  cy.wait(1000);
})

import AdminIndexPage from "./pageObjects/LMS-2/AdminIndexPage";
const Adminlogin = new AdminIndexPage();

Cypress.Commands.add('AdminPostSetup', (email, password) => {
  Adminlogin.getAdminBtn().click()
  Adminlogin.getTitle().should('be.visible')
  Adminlogin.getUserName().clear().type(email);
  Adminlogin.getPassword().clear().type(password);
  Adminlogin.getLoginBtn().click({ force: true });
  cy.url().should('contain', 'dashboard');
  cy.wait(1000);
})

Cypress.Commands.add('TeacherPostSetupLogin', (email, password) => {
  Adminlogin.getTeacherBtn().click()
  Adminlogin.getTitle().should('be.visible')
  Adminlogin.getUserName().clear().type(email);
  Adminlogin.getPassword().clear().type(password);
  Adminlogin.getLoginBtn().click({ force: true });
  cy.url().should('contain', 'dashboard');
  cy.wait(1000);
})

Cypress.Commands.add("requestAPI", (url, body, aliasName, methodType) => {
  //cy.log(Cypress.env("apiURL")+url)
  cy.request({
    method: methodType,
    url: Cypress.env("apiURL") + url,
    body: body,
    failOnStatusCode: false
  }).as(aliasName)
  //.then((response) =>{cy.wrap(response).as(aliasName)})
})

import LoginPage from "../support/pageObjects/LMS-1/LoginPage";
import WalkthroughPage from "../support/pageObjects/LMS-1/WalkthroughPage";
const lp = new LoginPage();
const wp = new WalkthroughPage();
Cypress.Commands.add('login', (email, password) => {
  lp.getUserName().type(email);
  lp.getPassword().type(password);
  lp.getLogin().click({ force: true });
  wp.getLoginSuccessfulMsg().should("have.text", "Logged in successfully");
})

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
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

//This command is used to do Force click on a element
Cypress.Commands.add('forceClick', (element) => {
  element.click({ force: true })
})

//This command is used to check and verify the checkbox
Cypress.Commands.add('checkAndVerify', (element) => {
  element.check().should('be.checked')
})

//This command is used to uncheck and verify the checkbox
Cypress.Commands.add('unCheckAndVerify', (element) => {
  element.uncheck().should('not.be.checked')
})


