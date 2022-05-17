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

import MainAdminIndexPage from "./pageObjects/MainAdminIndexPage";

const login = new MainAdminIndexPage();

 Cypress.Commands.add('login', (email, password) => { 
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

 Cypress.Commands.add('AdminPreSetup', (email, password) => { 
  Adminlogin.getAdminBtn().click()
  Adminlogin.getTitle().should('be.visible')
  Adminlogin.getUserName().type(email);
  Adminlogin.getPassword().type(password);
  Adminlogin.getLoginBtn().click({force:true});
  cy.url().should('contain','basic-information');
  cy.wait(1000);
})

 Cypress.Commands.add('TeacherPostSetupLogin', (email, password) => { 
  Adminlogin.getTeacherBtn().click()
  Adminlogin.getTitle().should('be.visible')
  Adminlogin.getUserName().type(email);
  Adminlogin.getPassword().type(password);
  Adminlogin.getLoginBtn().click({force:true});
  cy.url().should('contain','dashboard');
  cy.wait(1000);
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
