// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
import 'cypress-file-upload';
import MainAdminIndexPage from "./pageObjects/MainAdminIndexPage";

const login = new MainAdminIndexPage();

 Cypress.Commands.add('Mainlogin', (email, password) => { 
  login.getTitle().should('be.visible')
  login.getUserName().type(email);
  login.getPassword().type(password);
  login.getContinueBtn().click({force:true});
  cy.url().should('contain','dashboard')
  cy.wait(1000);
})

//
//
// -- This is a child command --

import AdminIndexPage from "./pageObjects/AdminIndexPage";

const Adminlogin = new AdminIndexPage();

 Cypress.Commands.add('AdminPostSetup', (email, password) => { 
  Adminlogin.getAdminBtn().click()
  Adminlogin.getTitle().should('be.visible')
  Adminlogin.getUserName().clear().type(email);
  Adminlogin.getPassword().clear().type(password);
  Adminlogin.getLoginBtn().click({force:true});
  cy.url().should('contain','dashboard');
  cy.wait(1000);
})

 Cypress.Commands.add('TeacherPostSetupLogin', (email, password) => { 
  Adminlogin.getTeacherBtn().click()
  Adminlogin.getTitle().should('be.visible')
  Adminlogin.getUserName().clear().type(email);
  Adminlogin.getPassword().clear().type(password);
  Adminlogin.getLoginBtn().click({force:true});
  cy.url().should('contain','dashboard');
  cy.wait(1000);
})

Cypress.Commands.add("requestAPI", (url, body, aliasName, methodType) => {
  //cy.log(Cypress.env("apiURL")+url)
  cy.request({
    method: methodType,
    url: Cypress.env("apiURL")+url,
    body: body,
    failOnStatusCode: false
  }).as(aliasName)
  //.then((response) =>{cy.wrap(response).as(aliasName)})
})

//For Cypress drag and drop plugin
//require('@4tw/cypress-drag-drop')

//require('cypress-downloadfile/lib/downloadFileCommand')


// -- This is a parent command --
import LoginPage from "../support/pageObjects2/LoginPage";
import WalkthroughPage from "../support/pageObjects2/WalkthroughPage";
const lp = new LoginPage();
const wp = new WalkthroughPage();
 Cypress.Commands.add('login', (email, password) => { 
  lp.getUserName().type(email);
  lp.getPassword().type(password);
  lp.getLogin().click({force:true});
  wp.getLoginSuccessfulMsg().should("have.text", "Logged in successfully"); 
})

// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
