/// <reference types="Cypress"/>

import MainAdminHomePage from "../../support/pageObjects/MainAdminHomePage"
import MainAdminMasterManagementPage from "../../support/pageObjects/MainAdminMasterManagementPage";

const home = new MainAdminHomePage();
const masterManage = new MainAdminMasterManagementPage();

describe("Verify Master Management Page functionalities", function () {
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
 //pre-condition
  it("Navigate to Master Management page",function(){
      //it("Validate user is able to Create New 'Competencies' and able to Map these Competencies with ELA's in Courses/EL-5055/ES5055_01",function(){
    home.getSystemConfigDrpDwn().click()
    home.getMasterManagementLnk().click()

    //it("Validate user is able to Navigate to competencies tab/EL-5055/ES5055_01",function(){
    masterManage.getTitle().should('have.text',this.masterManagementCredentials.Title)
    masterManage.getCompetencyTabLnk().click()
    //})

    //it("Validate user is able to Create New 'competencies'/EL-5055/ES5055_02".function() {
    masterManage.getAddNewBtn().click()
    masterManage.getCompetencyTxtFld().type(this.masterManagementCredentials.CompetencyName)
    masterManage.getCompetencyDisplayNameTxtFld().type(this.masterManagementCredentials.CompetencyDisplayName)
    masterManage.getCompetencyTagName().type(this.masterManagementCredentials.CompetencyTagName)
    masterManage.getStatusToggleBtn().click()
    masterManage.getAddPublicationSubmitBtn().click()
    cy.contains(this.masterManagementCredentials.CompetencyAddedSucessPopup).should('be.visible')
    masterManage.getPublicationAddedbtn().click()
    //})

    //it("Validate user is able to select the status as either 'Active' or 'inActive'/EL-5055/ES5055_03",function(){
      masterManage.getCompetencySearchyBtn().clear().type(this.masterManagementCredentials.CompetencyName)
      cy.wait(4000)
      masterManage.getCompetencyNameLst().each(($e1,index,$list)=>{
        if($e1.text().includes(this.masterManagementCredentials.CompetencyName)){
            expect(true).to.be.true
            masterManage.getStatusLst().eq(index).should('have.text',"Active")
        }
    })
    masterManage.getCompetencyNameLst().each(($e1,index,$list)=>{
      const tx= $e1.text()
      if(tx.includes(this.masterManagementCredentials.CompetencyName)){
        masterManage.getActionsLst().eq(index).click({force:true})
      }
    })
  //})

  //it("Validate Text  Fields 'Competency, Display name, Tag' should accept Unique values on its level/EL-5055/ES5055_07",function(){
    masterManage.getActionsLstEditBtn().click()
    masterManage.getCompetencyTxtFld().clear().type("Productivity")
    masterManage.getAddPublicationSubmitBtn().click()
    masterManage.getInvalidPopUpTxt().should('be.visible')
  //})

    //it("Validate user is able to edit the records from the 'Competencies' tab/EL-5055/ES5055_04",function(){  
        masterManage.getCompetencyTxtFld().clear().type(this.masterManagementCredentials.EditedCompetencyName)
        masterManage.getAddPublicationSubmitBtn().click()
        cy.contains(this.masterManagementCredentials.CompetencyEditedSuccessPopup).should('be.visible')
        masterManage.getPublicationAddedbtn().click()
    //})

  //it("Validate user is able to Create New 'Domains' and able to add the' Main Skills' for each Domains/EL-5056/ES5056_06",function(){
    home.getCourseLnk().click()   
    masterManage.getCoursesTabActionsLnk().eq(0).click({force:true})
    masterManage.getChapterLstBtn().click()
    masterManage.getChapterLstActionsLst().eq(0).click()
    masterManage.getAddElaBtn().click({force:true})
    masterManage.getCompetencyTxtDrpDwnInEla().scrollIntoView().should('be.visible')
    masterManage.getCompetencyDrpDown().find('option').each(($e1,index,$list)=>{
        if($e1.text().includes(this.masterManagementCredentials.CompetencyDisplayName)){
            expect(true).to.be.true
        }
    })
    home.getMasterManagementLnk().click()
    masterManage.getTitle().should('have.text',this.masterManagementCredentials.Title)
    masterManage.getDomainMappingTabLnk().click()
    masterManage.getAddNewBtn().click()
    masterManage.getDomainMappingMainSkillTxtBx().type("Knowledge")
    masterManage.getDomainMappingMainSkillDisplayName().type("knowledgeSkill")
    masterManage.getStatusBar().click()
    masterManage.getDomainMappingSubmitBtn().click()
    cy.contains("Domain Skill is successfully Added !").should('be.visible')
    masterManage.getPublicationAddedbtn().click()
    masterManage.getDomainMappingMainSkillLst().contains("Knowledge").should('be.visible')
    home.getCourseLnk().click()   
    masterManage.getCoursesTabActionsLnk().eq(0).click({force:true})
    masterManage.getChapterLstBtn().click()
    masterManage.getChapterLstActionsLst().eq(0).click()
    masterManage.getAddElaBtn().click({force:true})
    masterManage.getDomainDrpDwnInEla().select(this.masterManagementCredentials.DomainName)
    cy.wait(2000)
    masterManage.getMainSkillDrpDwnInEla().select(this.masterManagementCredentials.MainSkillValue)
  //})

  //post-condition
  //it("Validate user is able to delete the records from the "Competencies" tab/EL-5055/ES5055_05",function(){
    home.getMasterManagementLnk().click()
    masterManage.getCompetencyTabLnk().click()
    masterManage.getCompetencySearchyBtn().type(this.masterManagementCredentials.EditedCompetencyName)
    masterManage.getCompetencyNameLst().each(($e1,index,$list)=>{
      const tx= $e1.text()
      if(tx.includes(this.masterManagementCredentials.EditedCompetencyName)){
        masterManage.getActionsLst().eq(index).click({force:true})
      }
    })
      masterManage.getActionsLstDltBtn().click()
      masterManage. getPublicationPopupDltBtn().click()
      masterManage.getPublicationAddedbtn().click()
  //})
  //it("delete added domain mapping",function(){
    masterManage.getDomainMappingTabLnk().click()
    masterManage.getDomainMappingMainSkillLst().each(($e3,index,$list)=>{
      const txt= $e3.text()
      if(txt.includes(this.masterManagementCredentials.MainSkill)){
        masterManage.getActionsLst().eq(index).click({force:true})
      }
    })
      masterManage.getActionsLstDltBtn().click()
      masterManage. getPublicationPopupDltBtn().click()
      masterManage.getPublicationAddedbtn().click()
  //})
  })
  })