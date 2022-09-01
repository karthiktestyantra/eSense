/// <reference types="Cypress"/>

import MainAdminHomePage from "../../support/pageObjects/MainAdminHomePage"
import MainAdminMasterManagementPage from "../../support/pageObjects/MainAdminMasterManagementPage";

const home = new MainAdminHomePage();
const masterManage = new MainAdminMasterManagementPage();

describe("Verify Domain Mapping functionalities", function () {
  before(function () {
    cy.visit(Cypress.env("url"))
    cy.fixture("mainAdminLoginCredentials").then(function (validAdminLoginData) {
      cy.Mainlogin(validAdminLoginData.username, validAdminLoginData.password)
    })
  })
  beforeEach(function () {
    cy.viewport(1920, 1080)
    cy.fixture("mainAdminMasterManagementCredentials").then(function (masterManagementCredentials) {
      this.masterManagementCredentials = masterManagementCredentials;
    })
  })
  //pre-condition
  it("Validate user is able to click on 'Add domain' button/EL-5056/ES5056_01", function () {
    home.getSystemConfigDrpDwn().click()
    home.getMasterManagementLnk().click()
    masterManage.getDomainMappingTabLnk().click()
    masterManage.getAddDomainBtn().click()
    masterManage.getDomainMappingAddTxtFld().should('be.enabled')
    //})
    // it("Validate user choose to not to add can click on cancel button, will hide the input field, and return to left panel Domain list view/EL-5056/ES5056_03",function(){
    masterManage.getDomainRankingCancelBtn().click()
    masterManage.getDomainMappingAddTxtFld().should('not.exist')
    // })
    // it("Validate user enter domain name and then click on cancel button, again click on add domain button but previuosly enter domain name is present/EL-5056/ES5056_04",function(){
    masterManage.getAddDomainBtn().click()
    masterManage.getDomainMappingAddTxtFld().type("Blah")
    masterManage.getDomainRankingCancelBtn().click()
    masterManage.getDomainLst().should('not.have.text', "Blah")
    // })
    //it("Validate user is able to click on 'Add new' button/EL-5056/ES5056_05",function(){
    masterManage.getAddNewBtn().click()
    masterManage.getAddPublicationTitleTxt().should('have.text', "Add Domain Mapping")
    // })
    //it("Validate user is able to add domain mapping/EL-5056/ES5056_06",function(){
    masterManage.getDomainMappingMainSkillTxtBx().type("Knowledge")
    masterManage.getDomainMappingMainSkillDisplayName().type("knowledgeSkill")
    masterManage.getStatusBar().click()
    masterManage.getDomainMappingSubmitBtn().click()
    cy.contains("Domain Skill is successfully Added !").should('be.visible')
    masterManage.getPublicationAddedbtn().click()
    //})
    //it("Validate user fill domain mapping details but disable the status, submitted domain skill is not present in the list/EL-5056/ES5056_07",function(){
    masterManage.getDomainMappingMainSkillLst().each(($e3, index, $list) => {
      const txt = $e3.text()
      if (txt.includes(this.masterManagementCredentials.MainSkill)) {
        masterManage.getActionsLst().eq(index).click({ force: true })
      }
    })
    masterManage.getActionsLstEditBtn().click()
    masterManage.getStatusBar().click()
    masterManage.getDomainMappingSubmitBtn().click()
    masterManage.getPublicationAddedbtn().click()
    masterManage.getDomainMappingMainSkillLst().each(($e3, index, $list) => {
      const txt = $e3.text()
      if (txt.includes(this.masterManagementCredentials.MainSkill)) {
        masterManage.getStatusLstInDomainMappingLst().eq(index).should('have.text', "Inactive")
      }
    })
    masterManage.getDomainRankingTabLnk().click()
    masterManage.getAddNewBtn().click()
    masterManage.getDomainDrpDwnInDomainRanking().select(this.masterManagementCredentials.DomainName)
    masterManage.getMainSkillDrpDwnInDomainRankingLst().should('contain.text', "knowledgeSkill")
    masterManage.getDomainRankingCancelBtn().click()
    //})
    //it("Validate user is able to enter Max length of 150 character in Main skill and main skill display name/EL-5056/ES5056_10",function(){
    masterManage.getDomainMappingTabLnk().click()
    masterManage.getDomainMappingMainSkillLst().each(($e3, index, $list) => {
      const txt = $e3.text()
      if (txt.includes(this.masterManagementCredentials.MainSkill)) {
        masterManage.getActionsLst().eq(index).click({ force: true })
      }
    })
    masterManage.getActionsLstEditBtn().click()
    masterManage.getDomainMappingMainSkillTxtBx().clear().type(this.masterManagementCredentials.AtmostChar)
    masterManage.getDomainMappingMainSkillDisplayName().clear().type(this.masterManagementCredentials.AtmostChar)
    masterManage.getStatusToggleBtn().click()
    masterManage.getInvalidPopUpTxt().should('not.exist')
    //})
    //it("Validate user is able to edit domain mapping/EL-5056/ES5056_08",function(){
    masterManage.getDomainMappingMainSkillTxtBx().clear().type(this.masterManagementCredentials.EditedMainSkill)
    masterManage.getDomainMappingMainSkillDisplayName().clear().type(this.masterManagementCredentials.EditedMainSkill)
    masterManage.getDomainMappingSubmitBtn().click()
    cy.contains("Domain Skill is successfully Updated !").should('be.visible')
    masterManage.getPublicationAddedbtn().click()
    //})
    //it("Validate user is able to delete System tag/EL-5056/ES5056_09",function(){
    masterManage.getDomainMappingMainSkillLst().each(($e3, index, $list) => {
      const txt = $e3.text()
      if (txt.includes(this.masterManagementCredentials.EditedMainSkill)) {
        masterManage.getActionsLst().eq(index).click({ force: true })
      }
    })
    masterManage.getActionsLstDltBtn().click()
    masterManage.getPublicationPopupDltBtn().click()
    cy.contains("Domain Skill is successfully Deleted !").should('be.visible')
    masterManage.getPublicationAddedbtn().click()
    //})
    //it("Validate Pagination to be displayed in case of more than 10 records per page. 10 records will be viewed with scroll button on the page/EL-5056/ES5056_11",function(){
    // for (let i = 0; i < 9; i++) {
    //   const element = this.masterManagementCredentials.EditedMainSkill+[i]
    //   masterManage.getAddNewBtn().click()
    //   masterManage.getDomainMappingMainSkillTxtBx().type(element)
    //   masterManage.getDomainMappingMainSkillDisplayName().type("knowledgeSkill"+[i])
    //   masterManage.getStatusBar().click()
    //   masterManage.getDomainMappingSubmitBtn().click()
    //   cy.contains("Domain Skill is successfully Added !").should('be.visible')
    //   masterManage.getPublicationAddedbtn().click()
    //   cy.wait(1000)
    // }
    // masterManage.getDomainMappingMainSkillLst().should('have.length',10)
    // masterManage.getPaginationLst().should('have.length',2)
    // cy.wait(1000)
    //   masterManage.getDomainMappingMainSkillLst().each(($e3,index,$list) => {
    //     const power = $e3.text()
    //   if(power.includes("power"+[index])){
    //     cy.wait(1000)
    //     masterManage.getActionsLst().eq(index).click({force:true})
    //   }
    //   masterManage.getActionsLstDltBtn().click()
    //   masterManage. getPublicationPopupDltBtn().click()
    //   cy.contains("Domain Skill is successfully Deleted !").should('be.visible')
    //   masterManage.getPublicationAddedbtn().click()
    // })
  })
})
