/// <reference types="Cypress"/>

import AdminPostSetupHomePage from "../../support/pageObjects/AdminPostSetupHomePage";
import AdminGradesAndStreamPage from "../../support/pageObjects/AdminGradesAndStreamPage";

const home = new AdminPostSetupHomePage();
const grade = new AdminGradesAndStreamPage();

describe("Verify Admin Account Page functionalities", function () {
  before(function () {
    cy.visit(Cypress.env("urlMain"))
    cy.fixture("AdminLoginCredentials").then(function (validAdminLoginData) {
    cy.AdminPostSetup(validAdminLoginData.newUsername,validAdminLoginData.password)
    })
  })
  beforeEach(function (){
    cy.fixture("AdminQuickLink").then(function(report){
      this.grade = grade;
    })
  })

 //pre-condition

 it("Validate that when user clicks on 'Grades and department' academic  setup page is dispalyed/EL-5967/ES5967_01",function(){
  home.getSchoolLnk().click({force:true})
  home.getGradesAndDeptSectionBtn().click()
  grade.getGradePageTitle().should('have.text',"Academic Setup")
 })

 it("Validate that user able to edit the all the departments present in the 'departments' minor tab/EL-5967/ES5967_02",function(){
    grade.getEditIcnsLst().each(($e1,index,$list)=>{
        cy.wrap($e1).click()
        grade.getStreamNameTxtFld().should('be.visible').and('be.enabled')
        grade.getDeptcancelBtn().click()
        cy.wait(1000)
    })
 })

 it("Validate that user able to add the department by clicking on Add department and entering all the mandatory fields/EL-5967/ES5967_03",function(){
    grade.getAddStreamBtn().click()
    grade.getStreamNameTxtFld().type("Bio")
    grade.getStreamGradeDrpDwn().click()
    grade.getGradesLstInGradeDrpDwn().last().click()
    grade.getStreamGradeDrpDwn().click()
    grade.getmandatorySubdrpdwn().click()
    grade.getMandatorySubLst().first().click()
    grade.getmandatorySubdrpdwn().click()
    grade.getSubmitBtnInAddStream().click()
 })

 it("Validate that user able to delete the all the departments by clicking delete icon under 'departments' minor tab/EL-5967/ES5967_04",function(){
  cy.wait(2000)
  grade.getStreamLst().each(($e1,index,$list)=>{
    const txt = $e1.text()
    if(txt === "Bio"){
      grade.getDltBtnLst().eq(index).click()
    }
  })
  grade.getDltBtnInDltSect().click()
 })

 it("Validate that user is  able to select and unselectthe grade checkbox/EL-5967/ES5967_05",function(){
  grade.getGradesAndSubTab().click()
  cy.wait(2000)
  grade.getGradescheckBxInGradesAndSub().uncheck()
  cy.wait(1000)
  grade.getGradescheckBxInGradesAndSub().should('not.be.checked')
  grade.getGradescheckBxInGradesAndSub().check()
  grade.getGradescheckBxInGradesAndSub().should('be.checked')
 })

})