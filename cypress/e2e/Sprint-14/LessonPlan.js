/// <reference types="Cypress"/>

import EsenseAdminLessonPlanPage from "../../support/PageObjects/EsenseAdminLessonPlanPage";

const esenseAdminLessonPlanPage = new EsenseAdminLessonPlanPage();

describe("Verify Esense Admin Main Login Page functionalities", function () {
  before(function () {
    cy.visit(Cypress.env("url"))
    cy.fixture("mainAdminLoginCredentials").then(function (validAdminLoginData) {
    cy.Mainlogin(validAdminLoginData.username,validAdminLoginData.password)
    })
  })
    beforeEach(function (){  
        cy.fixture('EsenseAdminLessonPlanCredentials').then(function(lessonPlanPage){
            this.lessonPlanPage = lessonPlanPage;
      })
   })
   it("To validate esense admin is able to free-search a particular lesson plan/EL-4135/ES4135_01",function () {
       esenseAdminLessonPlanPage.getSideBarLessonPlanBtn().click()
       cy.wait(5000)
       esenseAdminLessonPlanPage.getLessonPlanSearchTxtFieldBtn().type( this.lessonPlanPage.Searchtxt)
      
   

  // it("To validate esense admin is able to view the result with entered text./EL-4135/ES4135_02",function () {
      esenseAdminLessonPlanPage.getLessonPlanSubjectTxt().should('contain.text',this.lessonPlanPage.Searchtxt) 

  // it("To validate esense admin is able to view the text to refine the search for no-match search criteria./EL-4135/ES4135_03",function () {
      esenseAdminLessonPlanPage.getLessonPlanSearchTxtFieldBtn().type(this.lessonPlanPage.invalidsearchtxt) 
      esenseAdminLessonPlanPage.getNoDataFoundTxt().should('be.visible')

    // it("To validate esense admin is able to view the filter pop-up/EL-4135/ES4135_04",function () {
      esenseAdminLessonPlanPage.getLessonPlanSearchTxtFieldBtn().clear()
      esenseAdminLessonPlanPage.getLessonPlanSearchTxtFieldBtn().type('tamil')
      esenseAdminLessonPlanPage.getLessonPlanSubjectTxt().should('contain.text',this.lessonPlanPage.Searchtxt) 
      esenseAdminLessonPlanPage.getFilterBtn().click()
      esenseAdminLessonPlanPage.getFilterPopupHeaderTxt().should('be.visible')

  // it("To validate esense admin is able to clear the selected category/ies./EL-4135/ES4135_06",function () {
      esenseAdminLessonPlanPage.getFilterPopupCheckBox().click({multiple:true})
      esenseAdminLessonPlanPage.getFilterPopupCheckBoxClearBtn().should('be.visible').click()
    
    // it("To validate esense admin is able to select the grade to filter the results./EL-4135/ES4135_07",function () {
      esenseAdminLessonPlanPage.getLessonPlanGradeTab().click()
      esenseAdminLessonPlanPage.getLessonPlanGradeCheckBox().click()
      esenseAdminLessonPlanPage.getLessonPlanGradeCheckBoxOkBtn().click()
      esenseAdminLessonPlanPage.getLessonPlanSubjectTxt().should('be.visible')

    // it("To validate esense admin is able to clear the selected grade/s./EL-4135/ES4135_08",function () {
      esenseAdminLessonPlanPage.getFilterBtn().click()  
      esenseAdminLessonPlanPage.getLessonPlanGradeTab().click()
      esenseAdminLessonPlanPage.getFilterPopupCheckBoxClearBtn().should('be.visible').click()

    // it("To validate esense admin is able to close the filter pop-up/EL-4135/ES4135_09",function () {    
      esenseAdminLessonPlanPage.getLessonPlanFilterPopupCloseBtn().should('be.visible').click()
      esenseAdminLessonPlanPage.getLessonPlanHeaderTxt().should('be.visible')

     // it("To validate esense admin is able to filter results with both the category and grade selection./EL-4135/ES4135_10",function () {      
        esenseAdminLessonPlanPage.getFilterBtn().click()
        esenseAdminLessonPlanPage.getFilterPopupCheckBox().eq(0).click()
        esenseAdminLessonPlanPage.getLessonPlanGradeTab().click()
        esenseAdminLessonPlanPage.getLessonPlanGradeCheckBox().click()
        esenseAdminLessonPlanPage.getLessonPlanGradeCheckBoxOkBtn().click()
        esenseAdminLessonPlanPage.getLessonPlanSubjectTxt().should('be.visible')

    

})  
})