/// <reference types="Cypress"/>

import TeacherHomePage from "../../../support/pageObjects/TeacherHomePage";

const home = new TeacherHomePage();

describe("Verify Sprint-14 functionalities", function () {
  before(function () {
    cy.visit(Cypress.env("urlStagingPostSetup"))
    cy.fixture("TeacherLoginCredentials").then(function (validAdminLoginData) {
    cy.TeacherPostSetupLogin(validAdminLoginData.username,validAdminLoginData.password)
    })
  })
  beforeEach(function (){
    cy.fixture("sprint14Teacher").then(function(teacher){
      this.teacher = teacher;
    })
  })

  it("To verify that total number of assesments scheduled in that month are provided in Dashboard assessment card/EL-3969/ES3969_01",function(){
    home.getAssessmentTxt().should('be.visible')
    home.getAssessmentCount().should('be.visible')
  })

  it("TO verify that total number of exams scheduled in that month are provided in Dashboard assessment card/EL-3969/ES3969_02",function(){
    
  })
  })