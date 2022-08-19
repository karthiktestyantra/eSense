/// <reference types="Cypress"/>

import MainAdminGradeManagementPage from "../../support/pageObjects/MainAdminGradeManagementPage";
import MainAdminHomePage from "../../support/pageObjects/MainAdminHomePage";

const home = new MainAdminHomePage();
const grade = new MainAdminGradeManagementPage();

describe("Verify Grade Management Page functionalities", function () {
  before(function () {
    cy.viewport(1920,1080)
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
  
  it("To Validate user is able to navigate to 'Grades' Module/EL-4471/ES4471_01",function(){
      home.getGradeManagementLnk().click()
      grade.getPageTitle().should('be.visible')
 // })
 //it("To Validate user is able to set flag as 'Display Name Editable' for each grade/EL-4471/ES4471_02",function(){
      grade.getGradeLst().each(($e1,index,$list) =>{
            const actualText = $e1.text()
            if(actualText.includes("Grade 8")){
            grade.getActionsLst().eq(index).trigger('click')
            }
          })
          grade.getEditBtn().click()
          grade.getIsEditableBtn().click()
          grade.getEditGradeSubmitBtn().click()
          grade.getEditGradePopUpSubmit().click()
          home.getGradeManagementLnk().click()
          grade.getGradeLst().each(($e1,index,$list) =>{
            const actualText = $e1.text()
            if(actualText.includes("Grade 8")){
            grade.getEditableLst().eq(index).should('have.text',"No")
            }
          })
 // })
  //it("To Validate user is not able to edit the grades on school admin login, if the flag has not  been set to 'iseditable' option/EL-4471/ES-4471_04",function(){
    grade.getGradeLst().each(($e1,index,$list) =>{
      const actualText = $e1.text()
      if(actualText.includes("Grade 8")){
      grade.getActionsLst().eq(index).trigger('click')
      }
    })
    grade.getEditBtn().click()
    grade.getIsEditableBtn().click()
    grade.getEditGradeSubmitBtn().click()
    grade.getEditGradePopUpSubmit().click()
    home.getGradeManagementLnk().click()
    grade.getGradeLst().each(($e1,index,$list) =>{
      const actualText = $e1.text()
      if(actualText.includes("Grade 8")){
      grade.getEditableLst().eq(index).should('have.text',"Yes")
      }
    })
  })
 })
