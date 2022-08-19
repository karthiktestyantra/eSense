/// <reference types="Cypress"/>

import AdminPostSetupHomePage from "../../support/pageObjects/AdminPostSetupHomePage";
import AdminPostSetupCurriculumBuilderPage from "../../support/pageObjects/AdminPostSetupCurriculumBuilderPage";
import AdminAccountsPage from "../../support/pageObjects/AdminAccountsPage";

const home = new AdminPostSetupHomePage();
const curriculumBuilder = new AdminPostSetupCurriculumBuilderPage();
const account = new AdminAccountsPage();


describe("Verify Sub Admin Curriculum Page functionalities", function () {
  before(function () {
    cy.visit(Cypress.env("urlQAPreSetup"))
    cy.fixture("AdminLoginCredentials").then(function (validAdminLoginData) {
    cy.AdminPostSetup(validAdminLoginData.fNew,validAdminLoginData.password)
    })
  })
  this.beforeEach(function(){
    cy.fixture("sprint14CurriculumBuilder").then(function(curriculumBuilder){
      this.curriculumBuilder = curriculumBuilder;
    })
  })
  
//Sprint 14

it("To create Curriculum",function(){
  home.getSchoolLnk().click({force:true})
  home.getCurriculumBuilderSectionLnk().click()
  curriculumBuilder.getTitle().should('have.text',this.curriculumBuilder.Title)
  curriculumBuilder.getGradeLst().each(($e1,index,$list) =>{
    const text = $e1.text()
    if(text.includes(this.curriculumBuilder.Grade)){
      cy.get('td button').eq(index).click()
    }
  })
  curriculumBuilder.getSubLstUnderGrade().each(($e2,index,$list) =>{
    const sub = $e2.text()
    if(sub.includes(this.curriculumBuilder.SubjectName)){
      curriculumBuilder.getEditCurriculumBtnLst().eq(index).click()
      return false;
    }
  })
  curriculumBuilder.getStartWithChapterBtn().click()
  curriculumBuilder.getChapterNumTxtFld().type(this.curriculumBuilder.ChapterNum)
    curriculumBuilder.getChapterName().type(this.curriculumBuilder.ChapterName)
    curriculumBuilder.getChapterDescription().type(this.curriculumBuilder.ChapterDescription)
    curriculumBuilder.getTotalSessionsTxtFld().clear().type(this.curriculumBuilder.ValidTotalSessionsNum)
  curriculumBuilder.getContinueBtn().click()
  curriculumBuilder.getSuccessfulPopup().should('have.text',this.curriculumBuilder.SuccessPopup)
  curriculumBuilder.getMarkCurriculumCheckbox().click()
  curriculumBuilder.getSubmitForApprovalBtn().click()
  curriculumBuilder.getApprovalListName().contains(this.curriculumBuilder.SubAdminName).click()
  curriculumBuilder.getSubmitApprovalSubmitBtn().click()
  cy.contains("Succesfully submitted for approval!").should('be.visible')
  cy.wait(2000)
})
it("Validate any School Sub Admin [HOD] who has “Approval” privilege for “Curriculum” module will get access to view and approve Curriculum builder/EL-4108/ES4108_01",function () {    
  cy.clearLocalStorage()
  cy.visit(Cypress.env("urlQAPreSetup"))
    cy.fixture("AdminLoginCredentials").then(function (validAdminLoginData) {
    cy.AdminPostSetup(validAdminLoginData.subAdminUsername,validAdminLoginData.subAdminPassword)
    })
    home.getSchoolLnk().click({force:true})
    home.getCurriculumBuilderSectionLnk().click()
    curriculumBuilder.getTitle().should('have.text',this.curriculumBuilder.Title)
    curriculumBuilder.getGradeLst().each(($e1,index,$list) =>{
      const text = $e1.text()
      if(text.includes(this.curriculumBuilder.SubAdminGrade)){
        curriculumBuilder.getSubAdminViewDtlsDrpDwnLst().eq(index).click()
        return false
      }
    })
    curriculumBuilder.getSubAdminViewDtlsSubjectLst().each(($e2,index,$list) =>{
      const text = $e2.text()
      if(text.includes("Tamil")){
        curriculumBuilder.getSubAdminViewDtlsViewIconLst().eq(index).click()
        return false;
      }
    })
    cy.wait(2000)
    curriculumBuilder.getSubAdminApproveBtn().should('be.enabled')
})

it("Validate whether Curriculum which requires this User “Approval” will show status as “Approval pending” as status under each subject/EL-4108/ES4108_02",function(){
  curriculumBuilder.getGoBackBtn().click()
  curriculumBuilder.getGradeLst().each(($e1,index,$list) =>{
    const text = $e1.text()
    if(text.includes(this.curriculumBuilder.SubAdminGrade)){
      curriculumBuilder.getSubAdminViewDtlsDrpDwnLst().eq(index).click()
      return false
    }
  })
  curriculumBuilder.getSubAdminViewDtlsSubjectLst().each(($e2,index,$list) =>{
    const text = $e2.text()
    if(text.includes("Tamil")){
      curriculumBuilder.getApprovalPendingLst().eq(index).should('have.text',"Approval Pending")
      return false;
    }
  })
})

it("Validate school sub admin click on “View” on list will take to Curriculum detailed view/EL-4108/ES4108_03",function(){
  curriculumBuilder.getSubAdminViewDtlsSubjectLst().each(($e2,index,$list) =>{
    const text = $e2.text()
    if(text.includes("Tamil")){
      curriculumBuilder.getSubAdminViewDtlsViewIconLst().eq(index).click()
      return false;
    }
  })
  curriculumBuilder.getCurriculumPageTitle().should('be.visible')
})

it("Validate Curriculum that are waiting for approval will have action bar below the screen showing “Approve” and “Reject” button/EL-4108/ES4108_04",function(){
  cy.wait(2000)
  curriculumBuilder.getSubAdminEditBtn().should('be.visible').should('be.enabled')
  curriculumBuilder.getSubAdminRejectBtn().should('be.visible').should('be.enabled')
})

it("Validate school sub admin is able to click on Approve button/EL-4108/ES4108_05",function(){
  curriculumBuilder.getSubAdminApproveBtn().click()
  cy.contains("Approved Successfully").should('be.visible')
})

it("Validate whether after notification popup is populated will auto close and return to page showing approved status curriculum view page/EL-4108/ES4108_07",function(){
  cy.wait(3000)
  curriculumBuilder.getApprovalCurriculumMsg().should('be.visible')
})

it("Validate whether approved curriculum will have “Undo” to revert the action made previous on the curriculum record/EL-4108/ES4108_08",function(){
  curriculumBuilder.getApprovalUndoBtn().should('be.enabled').click()
})

it("Validate School sub admin click on “undo” will take Subject to previous status “Awaiting approval” take to list page/EL-4108/ES4108_10",function(){
  curriculumBuilder.getGradeLst().should('be.visible')
})

it("Validtate User again can view Subjects list, click on “View” icon to view detailed view of curriculum to take necessary actions/EL-4108/ES4108_11",function(){
  curriculumBuilder.getGradeLst().each(($e1,index,$list) =>{
    const text = $e1.text()
    if(text.includes(this.curriculumBuilder.SubAdminGrade)){
      curriculumBuilder.getSubAdminViewDtlsDrpDwnLst().eq(index).click()
      return false
    }
  })
  curriculumBuilder.getSubAdminViewDtlsSubjectLst().each(($e2,index,$list) =>{
    const text = $e2.text()
    if(text.includes("Tamil")){
      curriculumBuilder.getSubAdminViewDtlsViewIconLst().eq(index).click()
      return false;
    }
  })
  curriculumBuilder.getCurriculumPageTitle().should('be.visible')
  cy.wait(2000)
  curriculumBuilder.getSubAdminApproveBtn().should('be.visible').should('be.enabled')
  curriculumBuilder.getSubAdminEditBtn().should('be.visible').should('be.enabled')
  curriculumBuilder.getSubAdminRejectBtn().should('be.visible').should('be.enabled')
})

it("To validate school sub-admin with edit access is able to edit the approval/EL-4110/ES4110_09",function(){
  curriculumBuilder.getSubAdminEditBtn().click()
  curriculumBuilder.getEditAndDeleteIconsLst().should('be.visible')
})

it("To validate school sub-admin is able to mark complete and send self approval request/EL-4110/ES4110_10",function(){
  curriculumBuilder.getMarkCurriculumCheckbox().click()
  curriculumBuilder.getSubmitForApprovalBtn().click()
  curriculumBuilder.getApprovalListName().contains(this.curriculumBuilder.SubAdminName).click()
  curriculumBuilder.getSubmitApprovalSubmitBtn().click()
  cy.contains("Succesfully submitted for approval!").should('be.visible')
  cy.wait(2000)
})

it("To validate school sub-admin with no edit and approval access is unable to view the action icons/EL-4110/ES4110_04",function(){
  cy.clearLocalStorage()
  cy.visit(Cypress.env("urlQAPreSetup"))
    cy.fixture("AdminLoginCredentials").then(function (validAdminLoginData) {
    cy.AdminPostSetup(validAdminLoginData.fNew,validAdminLoginData.password)
    })
    home.getSchoolLnk().click({force:true})
    home.getAdminAccountsSectionLnk().click()
    account.getRoleLst().each(($e1,index,$list) =>{
      const actualText = $e1.text()
      if(actualText == "HOD"){
      account.getEditRoleBtnLst().eq(index).trigger('click')
      }
    })
    account.getCurriculumEditCheckbox().uncheck()
    account.getAddRoleBtn().click()
    cy.contains("Role details updated successfully!").should('be.visible')
    cy.wait(1000)
    cy.clearLocalStorage()
    cy.visit("https://liverpool.topschool.co.in/")
    cy.fixture("AdminLoginCredentials").then(function (validAdminLoginData) {
    cy.AdminPostSetup(validAdminLoginData.subAdminUsername,validAdminLoginData.subAdminPassword)
    })
    home.getSchoolLnk().click({force:true})
    home.getCurriculumBuilderSectionLnk().click()
    curriculumBuilder.getTitle().should('have.text',this.curriculumBuilder.Title)
    curriculumBuilder.getGradeLst().each(($e1,index,$list) =>{
      const text = $e1.text()
      if(text.includes(this.curriculumBuilder.SubAdminGrade)){
        curriculumBuilder.getSubAdminViewDtlsDrpDwnLst().eq(index).click()
        return false
      }
    })
    curriculumBuilder.getSubAdminViewDtlsSubjectLst().each(($e2,index,$list) =>{
      const text = $e2.text()
      if(text.includes("Tamil")){
        curriculumBuilder.getSubAdminViewDtlsViewIconLst().eq(index).click()
        return false;
      }
    })
    cy.wait(1000)
    curriculumBuilder.getSubAdminEditBtn().should('not.exist')
})
//Post-Condition
it("click on all checkbox for back to default",function(){
  cy.clearLocalStorage()
  cy.visit("https://liverpool.topschool.co.in/")
  cy.fixture("AdminLoginCredentials").then(function (validAdminLoginData) {
    cy.AdminPostSetup(validAdminLoginData.fNew,validAdminLoginData.password)
    })
    home.getSchoolLnk().click({force:true})
    home.getAdminAccountsSectionLnk().click()
    account.getRoleLst().each(($e1,index,$list) =>{
      const actualText = $e1.text()
      if(actualText == "HOD"){
      account.getEditRoleBtnLst().eq(index).trigger('click')
      }
    })
    account.getCheckBoxLst().check({force:true})
    account.getAddRoleBtn().click()
    cy.contains("Role details updated successfully!").should('be.visible')
})

//post - Condition
it("To delete the created theme",function(){
  cy.go('back')
  home.getSchoolLnk().click({force:true})
  home.getCurriculumBuilderSectionLnk().click()
  curriculumBuilder.getTitle().should('have.text',this.curriculumBuilder.Title)
  curriculumBuilder.getGradeLst().each(($e1,index,$list) =>{
    const text = $e1.text()
    if(text.includes(this.curriculumBuilder.Grade)){
      cy.get('td button').eq(index).click()
    }
  })
  curriculumBuilder.getSubLstUnderGrade().each(($e2,index,$list) =>{
    const sub = $e2.text()
    if(sub.includes(this.curriculumBuilder.SubjectName)){
      curriculumBuilder.getEditCurriculumBtnLst().eq(index).click()
      return false;
    }
  })
  curriculumBuilder.getChapterLst().each(($e1,index,$list) =>{
    const text = $e1.text()
    if(text.includes(this.curriculumBuilder.ChapterName)){
      curriculumBuilder.getChapterDltBtn().eq(index).click()
    }
  })
  cy.get('.MuiButton-contained').click()
})

})
