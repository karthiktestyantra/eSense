const mainAdminHomePage = require("../../../support/pageObjects/LMS-2/MainAdminHomePage")
const mainAdminMasterManagementPage = require("../../../support/pageObjects/LMS-2/MainAdminMasterManagementPage")

describe("Verify Master Management Page functionalities - Sprint 16(EL-5055,EL-5056)", function () {

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
  it("Navigate to Master Management page", function () {
    //it("Validate user is able to Create New 'Competencies' and able to Map these Competencies with ELA's in Courses/EL-5055/ES5055_01",function(){
    mainAdminHomePage.getSystemConfigDrpDwn().click()
    mainAdminHomePage.getMasterManagementLnk().click()

    //it("Validate user is able to Navigate to competencies tab/EL-5055/ES5055_01",function(){
    mainAdminMasterManagementPage.getTitle().should('have.text', this.masterManagementCredentials.Title)
    mainAdminMasterManagementPage.getCompetencyTabLnk().click()
    //})

    //it("Validate user is able to Create New 'competencies'/EL-5055/ES5055_02".function() {
    mainAdminMasterManagementPage.getAddNewBtn().click()
    mainAdminMasterManagementPage.getCompetencyTxtFld().type(this.masterManagementCredentials.CompetencyName)
    mainAdminMasterManagementPage.getCompetencyDisplayNameTxtFld().type(this.masterManagementCredentials.CompetencyDisplayName)
    mainAdminMasterManagementPage.getCompetencyTagName().type(this.masterManagementCredentials.CompetencyTagName)
    mainAdminMasterManagementPage.getStatusToggleBtn().click()
    mainAdminMasterManagementPage.getAddPublicationSubmitBtn().click()
    cy.contains(this.masterManagementCredentials.CompetencyAddedSucessPopup).should('be.visible')
    mainAdminMasterManagementPage.getPublicationAddedbtn().click()
    //})

    //it("Validate user is able to select the status as either 'Active' or 'inActive'/EL-5055/ES5055_03",function(){
    mainAdminMasterManagementPage.getCompetencySearchyBtn().clear().type(this.masterManagementCredentials.CompetencyName)
    cy.wait(4000)
    mainAdminMasterManagementPage.getCompetencyNameLst().each(($e1, index, $list) => {
      if ($e1.text().includes(this.masterManagementCredentials.CompetencyName)) {
        expect(true).to.be.true
        mainAdminMasterManagementPage.getStatusLst().eq(index).should('have.text', "Active")
      }
    })
    mainAdminMasterManagementPage.getCompetencyNameLst().each(($e1, index, $list) => {
      const tx = $e1.text()
      if (tx.includes(this.masterManagementCredentials.CompetencyName)) {
        mainAdminMasterManagementPage.getActionsLst().eq(index).click({ force: true })
      }
    })
    //})

    //it("Validate Text  Fields 'Competency, Display name, Tag' should accept Unique values on its level/EL-5055/ES5055_07",function(){
    mainAdminMasterManagementPage.getActionsLstEditBtn().click()
    mainAdminMasterManagementPage.getCompetencyTxtFld().clear().type("Productivity")
    mainAdminMasterManagementPage.getAddPublicationSubmitBtn().click()
    mainAdminMasterManagementPage.getInvalidPopUpTxt().should('be.visible')
    //})

    //it("Validate user is able to edit the records from the 'Competencies' tab/EL-5055/ES5055_04",function(){  
    mainAdminMasterManagementPage.getCompetencyTxtFld().clear().type(this.masterManagementCredentials.EditedCompetencyName)
    mainAdminMasterManagementPage.getAddPublicationSubmitBtn().click()
    cy.contains(this.masterManagementCredentials.CompetencyEditedSuccessPopup).should('be.visible')
    mainAdminMasterManagementPage.getPublicationAddedbtn().click()
    //})

    //it("Validate user is able to Create New 'Domains' and able to add the' Main Skills' for each Domains/EL-5056/ES5056_06",function(){
    mainAdminHomePage.getCourseLnk().click()
    mainAdminMasterManagementPage.getCoursesTabActionsLnk().eq(0).click({ force: true })
    mainAdminMasterManagementPage.getChapterLstBtn().click()
    mainAdminMasterManagementPage.getChapterLstActionsLst().eq(0).click()
    mainAdminMasterManagementPage.getAddElaBtn().click({ force: true })
    mainAdminMasterManagementPage.getCompetencyTxtDrpDwnInEla().scrollIntoView().should('be.visible')
    mainAdminMasterManagementPage.getCompetencyDrpDown().find('option').each(($e1, index, $list) => {
      if ($e1.text().includes(this.masterManagementCredentials.CompetencyDisplayName)) {
        expect(true).to.be.true
      }
    })
    mainAdminHomePage.getMasterManagementLnk().click()
    mainAdminMasterManagementPage.getTitle().should('have.text', this.masterManagementCredentials.Title)
    mainAdminMasterManagementPage.getDomainMappingTabLnk().click()
    mainAdminMasterManagementPage.getAddNewBtn().click()
    mainAdminMasterManagementPage.getDomainMappingMainSkillTxtBx().type("Knowledge")
    mainAdminMasterManagementPage.getDomainMappingMainSkillDisplayName().type("knowledgeSkill")
    mainAdminMasterManagementPage.getStatusBar().click()
    mainAdminMasterManagementPage.getDomainMappingSubmitBtn().click()
    cy.contains("Domain Skill is successfully Added !").should('be.visible')
    mainAdminMasterManagementPage.getPublicationAddedbtn().click()
    mainAdminMasterManagementPage.getDomainMappingMainSkillLst().contains("Knowledge").should('be.visible')
    mainAdminHomePage.getCourseLnk().click()
    mainAdminMasterManagementPage.getCoursesTabActionsLnk().eq(0).click({ force: true })
    mainAdminMasterManagementPage.getChapterLstBtn().click()
    mainAdminMasterManagementPage.getChapterLstActionsLst().eq(0).click()
    mainAdminMasterManagementPage.getAddElaBtn().click({ force: true })
    mainAdminMasterManagementPage.getDomainDrpDwnInEla().select(this.masterManagementCredentials.DomainName)
    cy.wait(2000)
    mainAdminMasterManagementPage.getMainSkillDrpDwnInEla().select(this.masterManagementCredentials.MainSkillValue)
    //})

    //post-condition
    //it("Validate user is able to delete the records from the "Competencies" tab/EL-5055/ES5055_05",function(){
    mainAdminHomePage.getMasterManagementLnk().click()
    mainAdminMasterManagementPage.getCompetencyTabLnk().click()
    mainAdminMasterManagementPage.getCompetencySearchyBtn().type(this.masterManagementCredentials.EditedCompetencyName)
    mainAdminMasterManagementPage.getCompetencyNameLst().each(($e1, index, $list) => {
      const tx = $e1.text()
      if (tx.includes(this.masterManagementCredentials.EditedCompetencyName)) {
        mainAdminMasterManagementPage.getActionsLst().eq(index).click({ force: true })
      }
    })
    mainAdminMasterManagementPage.getActionsLstDltBtn().click()
    mainAdminMasterManagementPage.getPublicationPopupDltBtn().click()
    mainAdminMasterManagementPage.getPublicationAddedbtn().click()
    //})
    //it("delete added domain mapping",function(){
    mainAdminMasterManagementPage.getDomainMappingTabLnk().click()
    mainAdminMasterManagementPage.getDomainMappingMainSkillLst().each(($e3, index, $list) => {
      const txt = $e3.text()
      if (txt.includes(this.masterManagementCredentials.MainSkill)) {
        mainAdminMasterManagementPage.getActionsLst().eq(index).click({ force: true })
      }
    })
    mainAdminMasterManagementPage.getActionsLstDltBtn().click()
    mainAdminMasterManagementPage.getPublicationPopupDltBtn().click()
    mainAdminMasterManagementPage.getPublicationAddedbtn().click()
    //})
  })
})