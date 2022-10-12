const mainAdminHomePage = require("../../../support/pageObjects/LMS-2/MainAdminHomePage")
const mainAdminMasterManagementPage = require("../../../support/pageObjects/LMS-2/MainAdminMasterManagementPage")

describe("Verify Domain Mapping functionalities - Sprint 16(EL-5056)", function () {

  before(function () {
    cy.visit(Cypress.env("url"))
    cy.fixture("LMS/mainAdminLoginCredentials").then(function (validAdminLoginData) {
      cy.Mainlogin(validAdminLoginData.username, validAdminLoginData.password)
    })
  })

  beforeEach(function () {
    cy.viewport(1920, 1080)
    cy.fixture("LMS/mainAdminMasterManagementCredentials").as("masterManagementCredentials")
  })

  //pre-condition
  it("Validate user is able to click on 'Add domain' button/EL-5056/ES5056_01", function () {
    mainAdminHomePage.getSystemConfigDrpDwn().click()
    mainAdminHomePage.getMasterManagementLnk().click()
    mainAdminMasterManagementPage.getDomainMappingTabLnk().click()
    mainAdminMasterManagementPage.getAddDomainBtn().click()
    mainAdminMasterManagementPage.getDomainMappingAddTxtFld().should('be.enabled')
    //})
    // it("Validate user choose to not to add can click on cancel button, will hide the input field, and return to left panel Domain list view/EL-5056/ES5056_03",function(){
    mainAdminMasterManagementPage.getDomainRankingCancelBtn().click()
    mainAdminMasterManagementPage.getDomainMappingAddTxtFld().should('not.exist')
    // })
    // it("Validate user enter domain name and then click on cancel button, again click on add domain button but previuosly enter domain name is present/EL-5056/ES5056_04",function(){
    mainAdminMasterManagementPage.getAddDomainBtn().click()
    mainAdminMasterManagementPage.getDomainMappingAddTxtFld().type("Blah")
    mainAdminMasterManagementPage.getDomainRankingCancelBtn().click()
    mainAdminMasterManagementPage.getDomainLst().should('not.have.text', "Blah")
    // })
    //it("Validate user is able to click on 'Add new' button/EL-5056/ES5056_05",function(){
    mainAdminMasterManagementPage.getAddNewBtn().click()
    mainAdminMasterManagementPage.getAddPublicationTitleTxt().should('have.text', "Add Domain Mapping")
    // })
    //it("Validate user is able to add domain mapping/EL-5056/ES5056_06",function(){
    mainAdminMasterManagementPage.getDomainMappingMainSkillTxtBx().type("Knowledge")
    mainAdminMasterManagementPage.getDomainMappingMainSkillDisplayName().type("knowledgeSkill")
    mainAdminMasterManagementPage.getStatusBar().click()
    mainAdminMasterManagementPage.getDomainMappingSubmitBtn().click()
    cy.contains("Domain Skill is successfully Added !").should('be.visible')
    mainAdminMasterManagementPage.getPublicationAddedbtn().click()
    //})
    //it("Validate user fill domain mapping details but disable the status, submitted domain skill is not present in the list/EL-5056/ES5056_07",function(){
    mainAdminMasterManagementPage.getDomainMappingMainSkillLst().each(($e3, index, $list) => {
      const txt = $e3.text()
      if (txt.includes(this.masterManagementCredentials.MainSkill)) {
        mainAdminMasterManagementPage.getActionsLst().eq(index).click({ force: true })
      }
    })
    mainAdminMasterManagementPage.getActionsLstEditBtn().click()
    mainAdminMasterManagementPage.getStatusBar().click()
    mainAdminMasterManagementPage.getDomainMappingSubmitBtn().click()
    mainAdminMasterManagementPage.getPublicationAddedbtn().click()
    mainAdminMasterManagementPage.getDomainMappingMainSkillLst().each(($e3, index, $list) => {
      const txt = $e3.text()
      if (txt.includes(this.masterManagementCredentials.MainSkill)) {
        mainAdminMasterManagementPage.getStatusLstInDomainMappingLst().eq(index).should('have.text', "Inactive")
      }
    })
    mainAdminMasterManagementPage.getDomainRankingTabLnk().click()
    mainAdminMasterManagementPage.getAddNewBtn().click()
    mainAdminMasterManagementPage.getDomainDrpDwnInDomainRanking().select(this.masterManagementCredentials.DomainName)
    mainAdminMasterManagementPage.getMainSkillDrpDwnInDomainRankingLst().should('contain.text', "knowledgeSkill")
    mainAdminMasterManagementPage.getDomainRankingCancelBtn().click()
    //})
    //it("Validate user is able to enter Max length of 150 character in Main skill and main skill display name/EL-5056/ES5056_10",function(){
    mainAdminMasterManagementPage.getDomainMappingTabLnk().click()
    mainAdminMasterManagementPage.getDomainMappingMainSkillLst().each(($e3, index, $list) => {
      const txt = $e3.text()
      if (txt.includes(this.masterManagementCredentials.MainSkill)) {
        mainAdminMasterManagementPage.getActionsLst().eq(index).click({ force: true })
      }
    })
    mainAdminMasterManagementPage.getActionsLstEditBtn().click()
    mainAdminMasterManagementPage.getDomainMappingMainSkillTxtBx().clear().type(this.masterManagementCredentials.AtmostChar)
    mainAdminMasterManagementPage.getDomainMappingMainSkillDisplayName().clear().type(this.masterManagementCredentials.AtmostChar)
    mainAdminMasterManagementPage.getStatusToggleBtn().click()
    mainAdminMasterManagementPage.getInvalidPopUpTxt().should('not.exist')
    //})
    //it("Validate user is able to edit domain mapping/EL-5056/ES5056_08",function(){
    mainAdminMasterManagementPage.getDomainMappingMainSkillTxtBx().clear().type(this.masterManagementCredentials.EditedMainSkill)
    mainAdminMasterManagementPage.getDomainMappingMainSkillDisplayName().clear().type(this.masterManagementCredentials.EditedMainSkill)
    mainAdminMasterManagementPage.getDomainMappingSubmitBtn().click()
    cy.contains("Domain Skill is successfully Updated !").should('be.visible')
    mainAdminMasterManagementPage.getPublicationAddedbtn().click()
    //})
    //it("Validate user is able to delete System tag/EL-5056/ES5056_09",function(){
    mainAdminMasterManagementPage.getDomainMappingMainSkillLst().each(($e3, index, $list) => {
      const txt = $e3.text()
      if (txt.includes(this.masterManagementCredentials.EditedMainSkill)) {
        mainAdminMasterManagementPage.getActionsLst().eq(index).click({ force: true })
      }
    })
    mainAdminMasterManagementPage.getActionsLstDltBtn().click()
    mainAdminMasterManagementPage.getPublicationPopupDltBtn().click()
    cy.contains("Domain Skill is successfully Deleted !").should('be.visible')
    mainAdminMasterManagementPage.getPublicationAddedbtn().click()
    //})
    //it("Validate Pagination to be displayed in case of more than 10 records per page. 10 records will be viewed with scroll button on the page/EL-5056/ES5056_11",function(){
    // for (let i = 0; i < 9; i++) {
    //   const element = this.masterManagementCredentials.EditedMainSkill+[i]
    //   mainAdminMasterManagementPage.getAddNewBtn().click()
    //   mainAdminMasterManagementPage.getDomainMappingMainSkillTxtBx().type(element)
    //   mainAdminMasterManagementPage.getDomainMappingMainSkillDisplayName().type("knowledgeSkill"+[i])
    //   mainAdminMasterManagementPage.getStatusBar().click()
    //   mainAdminMasterManagementPage.getDomainMappingSubmitBtn().click()
    //   cy.contains("Domain Skill is successfully Added !").should('be.visible')
    //   mainAdminMasterManagementPage.getPublicationAddedbtn().click()
    //   cy.wait(1000)
    // }
    // mainAdminMasterManagementPage.getDomainMappingMainSkillLst().should('have.length',10)
    // mainAdminMasterManagementPage.getPaginationLst().should('have.length',2)
    // cy.wait(1000)
    //   mainAdminMasterManagementPage.getDomainMappingMainSkillLst().each(($e3,index,$list) => {
    //     const power = $e3.text()
    //   if(power.includes("power"+[index])){
    //     cy.wait(1000)
    //     mainAdminMasterManagementPage.getActionsLst().eq(index).click({force:true})
    //   }
    //   mainAdminMasterManagementPage.getActionsLstDltBtn().click()
    //   mainAdminMasterManagementPage. getPublicationPopupDltBtn().click()
    //   cy.contains("Domain Skill is successfully Deleted !").should('be.visible')
    //   mainAdminMasterManagementPage.getPublicationAddedbtn().click()
    // })
  })
})
