import 'cypress-file-upload';

afterEach(function () {
  cy.window().then(win => win.sessionStorage.clear());
  cy.clearCookies();
  cy.clearLocalStorage();
})

const login = require('./pageObjects/LMS-2/MainAdminIndexPage')
Cypress.Commands.add('Mainlogin', (email, password) => {
  login.getTitle().should('be.visible')
  login.getUserName().type(email);
  login.getPassword().type(password);
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
  cy.url().should('contain', 'dashboard');
  cy.wait(1000);
})

const loginPage = require('./pageObjects/LMS-1/LoginPage')
const walkthroughPage = require('./pageObjects/LMS-1/WalkthroughPage')
Cypress.Commands.add('login', (email, password) => {
  loginPage.getUserName().type(email);
  loginPage.getPassword().type(password);
  loginPage.getLogin().click({ force: true });
  walkthroughPage.getLoginSuccessfulMsg().should("have.text", "Logged in successfully");
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

<<<<<<< HEAD
//For Cypress drag and drop plugin
//require('@4tw/cypress-drag-drop')

//require('cypress-downloadfile/lib/downloadFileCommand')


// -- This is a parent command --
import LoginPage from "../support/pageObjects2/LoginPage";
import WalkthroughPage from "../support/pageObjects2/WalkthroughPage";
const lp = new LoginPage();
const wp = new WalkthroughPage();
 Cypress.Commands.add('login', (email, password) => { 
  lp.getUserName().clear().type(email);
  lp.getPassword().clear().type(password);
  lp.getLogin().click({force:true});
  wp.getLoginSuccessfulMsg().should("have.text", "Logged in successfully"); 
=======
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
>>>>>>> 41c326dc69c590af026b3a135082e220706451e8
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
  element.check({force:true}).should('be.checked')
})

//This command is used to uncheck and verify the checkbox
Cypress.Commands.add('unCheckAndVerify', (element) => {
  element.uncheck().should('not.be.checked')
})

