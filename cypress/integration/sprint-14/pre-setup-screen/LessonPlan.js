/// <reference types="Cypress"/>

import MainAdminHomePage from "../../support/pageObjects/MainAdminHomePage";
import MainAdminMasterManagementPage from "../../support/pageObjects/MainAdminMasterManagementPage";

const home = new MainAdminHomePage();
const masterManage = new MainAdminMasterManagementPage();

describe("Verify Admin Main Login Page functionalities", function () {
  before(function () {
    cy.visit(Cypress.env("url"))
    cy.fixture("mainAdminLoginCredentials").then(function (validAdminLoginData) {
    cy.login(validAdminLoginData.username,validAdminLoginData.password)
    })
  })
  beforeEach(function (){
    cy.fixture("mainAdminMasterManagementCredentials").then(function(masterManagementCredentials){
      this.masterManagementCredentials = masterManagementCredentials;
    })
  })

  it("To validate that user should be able to add the lesson plan from Scratch/EL-4132/ES4132_01",function(){
      
  })
  })