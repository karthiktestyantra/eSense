/// <reference types="Cypress"/>

import EsenseAdminCurriculumPlanPage from "../../support/PageObjects/EsenseAdminCurriculumPlanPage";
import AdminPostSetupCurriculumBuilderPage from "../../support/PageObjects/AdminPostSetupCurriculumBuilderPage";

const esenseAdminCurriculamPlanPage = new EsenseAdminCurriculumPlanPage();
const curriculumBuilder = new AdminPostSetupCurriculumBuilderPage();

describe("Verify Curriculum Plan Page functionalities", function () {
  before(function () {
    cy.visit(Cypress.env("url"))
    cy.fixture("mainAdminLoginCredentials").then(function (validAdminLoginData) {
    cy.Mainlogin(validAdminLoginData.username,validAdminLoginData.password)
    })
  })
    beforeEach(function (){  
       cy.viewport(1920,1080)
        cy.fixture("EsenseAdminCurriculumPageCredentials").then(function(curriculumPage){
          cy.fixture("sprint14CurriculumBuilder").then(function(curriculumBuilder){
            this.curriculumBuilder = curriculumBuilder;
          })
            this.curriculumPage = curriculumPage;
      })
   })

      it("To validate that when user Click on 'Start with Chapter' button it's navigating to 'Add New Chapter' pop-up page/EL-4957/ES4957_01",function () {
        esenseAdminCurriculamPlanPage.getCurriculamPlanBtn().click()
    //it("To validate that in one page only 50 Curiculum list or records is dispalyed/EL-4157/ES4157_02",function(){
      cy.wait(2000)
        esenseAdminCurriculamPlanPage.getCurriculumListOfCourseCard().should('have.length.lte',50)
        esenseAdminCurriculamPlanPage.getCurriculumSearchTxtField().type(this.curriculumPage.searchCourseName)
        cy.wait(3000)
  // esenseAdminCurriculamPlanPage.getCurriculumListOfCourseCard().should('contain.text',this.curriculumPage.searchCourseName)
         esenseAdminCurriculamPlanPage.getGradeLst().each(($e1,index,$list)=>{
          const txt = $e1.text()
          if(txt.includes("Grade 9")){
            esenseAdminCurriculamPlanPage.getAddCurriculamPlanBtn().eq(index).click()
            return false; 
          }
        })
        curriculumBuilder.getAddThemeBtn().contains("Start With Theme / Unit").click() || curriculumBuilder.getAddThemeBtn().contains("Add").click()
        curriculumBuilder.getAddChaptertitle().should('be.visible')
      //})

      // it("To validate that user cannot change the format once chosen/EL-4957/ES4957_02",function(){
        curriculumBuilder.getEsenseAdminTotalSessionsTxtFld().clear().type(this.curriculumBuilder.ValidTotalSessionsNum)
        curriculumBuilder.getEsenseAdminThemeNameFld().type(this.curriculumBuilder.ChapterName)
        curriculumBuilder.getAdminThemeDescription().type(this.curriculumBuilder.ChapterDescription)
        curriculumBuilder.getSaveDraftBtn().click()
        cy.contains("successfully_added").should('be.visible')
        cy.wait(1000)
        curriculumBuilder.getAddThemeAddedBtn().should('be.visible')

     //   it("To validate that when user click on 'Save Draft' button, user is able add more Themes, units or chapters based on format choosed/EL-4957/ES4957_03",function(){
      curriculumBuilder.getAddThemeAddedBtn().click()
      curriculumBuilder.getAddChaptertitle().contains("Add New Theme / Unit").should('be.visible')
      esenseAdminCurriculamPlanPage.getChapterCloseIcon().click()

      //it("To validate that user is able to move Curriculam draft to publish among Schools / view as public by clicking 'Publish' button/EL-4957/ES4957_05",function(){
        esenseAdminCurriculamPlanPage.getChapterEditBtn().click({force:true})
        curriculumBuilder.getEsenseAdminThemeNameFld().clear().type(this.curriculumBuilder.EditedChapterName)
        curriculumBuilder.getSaveDraftBtn().click()
        cy.wait(1000)
        esenseAdminCurriculamPlanPage.getPublishBtn().should('be.enabled').click()
      //})
      
      //})
     // it("delete the created chapter",function(){
      esenseAdminCurriculamPlanPage.getCurriculumSearchTxtField().type(this.curriculumPage.searchCourseName)
      cy.wait(3000)
      esenseAdminCurriculamPlanPage.getGradeLst().each(($e1,index,$list)=>{
        const txt = $e1.text()
        if(txt.includes("Grade 9")){
          esenseAdminCurriculamPlanPage.getAddCurriculamPlanBtn().eq(index).click()
          return false; 
        }
      })
        curriculumBuilder.getEsenseAdminChapterLst().each(($e2,index,$list)=>{
          const txt = $e2.text()
          if(txt.includes(this.curriculumBuilder.EditedChapterName)){
            curriculumBuilder.getChapterDltBtn().click()
          }
        })
        curriculumBuilder.getDeleteThemeBtn().click()
     // })

     // it("To validate that 'Topic Duration' field is provided in the 'Topic' section/EL-4978/EL4978_01",function(){
       cy.wait(3000)
        curriculumBuilder.getAddThemeBtn().contains("Start With Theme / Unit").click() || curriculumBuilder.getAddThemeBtn().contains("Add").click()
        curriculumBuilder.getEsenseAdminTotalSessionsTxtFld().clear().type(this.curriculumBuilder.ValidTotalSessionsNum)
        curriculumBuilder.getEsenseAdminThemeNameFld().type(this.curriculumBuilder.ChapterName)
        curriculumBuilder.getAdminThemeDescription().type(this.curriculumBuilder.ChapterDescription)
        esenseAdminCurriculamPlanPage. getAddChapterInPopup().click()
        esenseAdminCurriculamPlanPage. getChapterNumberTxtField().type("02")
        esenseAdminCurriculamPlanPage.getChapterNameDropdown().select("measure")
        esenseAdminCurriculamPlanPage.getAddTopicBtn().click()
        esenseAdminCurriculamPlanPage.getTopicDurationTitle().should('be.visible')
      //it("To validate that "Topic Duration" field is Accepting the values in the form of HH:MM/EL-4978/EL4978_02",function(){
        esenseAdminCurriculamPlanPage.getHourTopicDurationFld().should('have.attr', 'placeholder', '00')
        esenseAdminCurriculamPlanPage.getMinutesTopicDurationFld().should('have.attr', 'placeholder', '00')
     // })
     //it("To validate that by default 00:00 values are displayed/EL-4978/EL4978_03",function(){
        esenseAdminCurriculamPlanPage.getHourTopicDurationTxt().should('be.exist')
        esenseAdminCurriculamPlanPage.getMinuteTopicDurationTxt().should('be.exist')
        esenseAdminCurriculamPlanPage.getTopicDropdown().select("atoms")
        esenseAdminCurriculamPlanPage.getTopicDescriptiontextarea().type(this.curriculumBuilder.ChapterDescription)
        esenseAdminCurriculamPlanPage.getHourTopicDurationFld().type(10)
        esenseAdminCurriculamPlanPage.getMinutesTopicDurationFld().type(30)
        esenseAdminCurriculamPlanPage.getAddTopicBtnInPopup().click()
        esenseAdminCurriculamPlanPage.getSaveDraftbtn().click()
        esenseAdminCurriculamPlanPage.getThemeSaveDraft().click()
        esenseAdminCurriculamPlanPage.getPublishBtn().click()
        cy.wait(2000)
     //})
     // it("delete the created chapter",function(){
      esenseAdminCurriculamPlanPage.getCurriculumSearchTxtField().type(this.curriculumPage.searchCourseName)
      cy.wait(3000)
      esenseAdminCurriculamPlanPage.getGradeLst().each(($e1,index,$list)=>{
        const txt = $e1.text()
        if(txt.includes("Grade 9")){
          esenseAdminCurriculamPlanPage.getAddCurriculamPlanBtn().eq(index).click()
          return false; 
        }
      })
        curriculumBuilder.getEsenseAdminChapterLst().each(($e2,index,$list)=>{
          const txt = $e2.text()
          if(txt.includes(this.curriculumBuilder.ChapterName)){
            curriculumBuilder.getChapterDltBtn().eq(index).click()
          }
        })
        curriculumBuilder.getDeleteThemeBtn().click()
     // })
        
      })
    })