const mainAdminHomePage = require("../../../support/pageObjects/LMS-2/MainAdminHomePage")
const mainAdminMasterManagementPage = require("../../../support/pageObjects/LMS-2/MainAdminMasterManagementPage")

describe("Verify Master Management domain ranking Page functionalities - Sprint 16(EL-5057)", function () {

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
    mainAdminHomePage.getSystemConfigDrpDwn().click()
    mainAdminHomePage.getMasterManagementLnk().click({ force: true })
    mainAdminMasterManagementPage.getTitle().should('have.text', this.masterManagementCredentials.Title)


    //  it("Validate user is able Add Domain Rakings for all the Grades/EL-5057/ES5057_01",function(){
    mainAdminHomePage.getMasterManagementLnk().click()
    mainAdminMasterManagementPage.getTitle().should('have.text', this.masterManagementCredentials.Title)
    //})

    //it("Validate user is able to add domain mapping",function(){
    mainAdminMasterManagementPage.getDomainMappingTabLnk().click()
    mainAdminMasterManagementPage.getAddNewBtn().click()
    mainAdminMasterManagementPage.getDomainMappingMainSkillTxtBx().type("Knowledge")
    mainAdminMasterManagementPage.getDomainMappingMainSkillDisplayName().type("knowledgeSkill")
    mainAdminMasterManagementPage.getStatusBar().click()
    mainAdminMasterManagementPage.getDomainMappingSubmitBtn().click()
    cy.contains("Domain Skill is successfully Added !").should('be.visible')
    mainAdminMasterManagementPage.getPublicationAddedbtn().click()
    //})

    // it("Validate user is able to Navigate to Domain Ranking tab/EL-5057/ES5057_01",function(){)
    mainAdminMasterManagementPage.getDomainRankingTabLnk().click()
    // })

    //it("Validate user is able to View the Grades Present in System and map the Domain Ranking for each Domain/EL-5057/ES5055_02",function(){
    mainAdminMasterManagementPage.getGradeLstInDomainRanking().should('be.visible')
    //})

    //it("Validate Excellent, Good , Satisfactory , Can do Better Text Fields accepts Alphanumeric characters upto 150 as an input/EL-5057",function(){
    mainAdminMasterManagementPage.getAddNewBtn().click()
    mainAdminMasterManagementPage.getExcellentTxtFldInDomainRanking().type(this.masterManagementCredentials.ExceededChar)
    mainAdminMasterManagementPage.getBetterTxtFldInDomainRanking().click()
    mainAdminMasterManagementPage.getInvalidPopUpTxt().contains("Maximum 150 characters").should('be.visible')
    mainAdminMasterManagementPage.getExcellentTxtFldInDomainRanking().clear().type("Excellent")
    mainAdminMasterManagementPage.getGoodTxtFldInDomainRanking().type(this.masterManagementCredentials.ExceededChar)
    mainAdminMasterManagementPage.getBetterTxtFldInDomainRanking().click()
    mainAdminMasterManagementPage.getInvalidPopUpTxt().contains("Maximum 150 characters").should('be.visible')
    mainAdminMasterManagementPage.getGoodTxtFldInDomainRanking().clear().type("Good")
    mainAdminMasterManagementPage.getSatisfactoryTxtFldInDomainRanking().type(this.masterManagementCredentials.ExceededChar)
    mainAdminMasterManagementPage.getBetterTxtFldInDomainRanking().click()
    mainAdminMasterManagementPage.getInvalidPopUpTxt().contains("Maximum 150 characters").should('be.visible')
    mainAdminMasterManagementPage.getSatisfactoryTxtFldInDomainRanking().clear().type("Satisfacted")
    mainAdminMasterManagementPage.getBetterTxtFldInDomainRanking().type(this.masterManagementCredentials.ExceededChar)
    mainAdminMasterManagementPage.getInvalidPopUpTxt().contains("Maximum 150 characters").should('be.visible')
    mainAdminMasterManagementPage.getBetterTxtFldInDomainRanking().clear().type("Best")
    mainAdminMasterManagementPage.getDomainRankingCancelBtn().click()
    //})

    //it("Validate Domain and Main Skill fields are selected from the auto populated List/EL-5057/",function(){
    mainAdminMasterManagementPage.getGradeLstInDomainRanking().each(($e2, index, $list) => {
      const grade = $e2.text()
      if (grade.includes("Grade 3")) {
        mainAdminMasterManagementPage.getGradeLstInDomainRanking().eq(index).click()
        mainAdminMasterManagementPage.getAddNewBtn().click()
        mainAdminMasterManagementPage.getDomainDrpDwnInDomainRanking().select(this.masterManagementCredentials.DomainName)
        mainAdminMasterManagementPage.getMainSkillDrpDwnInDomainRanking().select(this.masterManagementCredentials.MainSkillValue)
        // })

        //it("Validate user is able to select the status as either 'Active' or 'inActive'/EL-5057/ES5057_03",function(){
        mainAdminMasterManagementPage.getExcellentTxtFldInDomainRanking().clear().type("Excellent")
        mainAdminMasterManagementPage.getGoodTxtFldInDomainRanking().clear().type("Good")
        mainAdminMasterManagementPage.getSatisfactoryTxtFldInDomainRanking().clear().type("Satisfacted")
        mainAdminMasterManagementPage.getBetterTxtFldInDomainRanking().clear().type("Best")
        mainAdminMasterManagementPage.getStatusToggleBtn().click()
        mainAdminMasterManagementPage.getAddPublicationSubmitBtn().click()
        cy.contains("Domain Rank is successfully Added !").should('be.visible')
        mainAdminMasterManagementPage.getPublicationAddedbtn().click()
      }
      })
        mainAdminMasterManagementPage.getMainSkillLstInDomainRanking().each(($e5, index, $list) => {
          const text = $e5.text()
          if (text.includes(this.masterManagementCredentials.MainSkillValue)) {
            mainAdminMasterManagementPage.getStatusTxtInDomainRanking().eq(index).should('have.text', "Active")
            mainAdminMasterManagementPage.getDomainMappingActionsLst().eq(index).click({ force: true })
            mainAdminMasterManagementPage.getActionsLstEditBtn().click() 
            mainAdminMasterManagementPage.getStatusToggleBtn().click()
            mainAdminMasterManagementPage.getAddPublicationSubmitBtn().click()
            mainAdminMasterManagementPage.getPublicationAddedbtn().click()
            cy.wait(1000)
            mainAdminMasterManagementPage.getStatusTxtInDomainRanking().eq(index).should('have.text', "Inactive")
            cy.wait(2000)
          }
        })
        //})

        // it("Validate user is able to edit the records from the 'Domain Ranking' tab/EL-5057/ES5057_04",function(){
        mainAdminMasterManagementPage.getMainSkillLstInDomainRanking().each(($e6, index, $list) => {
          const txt = $e6.text()
          if (txt.includes(this.masterManagementCredentials.MainSkillValue)) {
            mainAdminMasterManagementPage.getDomainMappingActionsLst().eq(index).click({ force: true })
            mainAdminMasterManagementPage.getActionsLstEditBtn().click()
            mainAdminMasterManagementPage.getStatusToggleBtn().click()
            mainAdminMasterManagementPage.getAddPublicationSubmitBtn().click()
            cy.contains("Domain Rank is successfully Updated !").should('be.visible')
            mainAdminMasterManagementPage.getPublicationAddedbtn().click()
            // })

            //it("Valdiate user is able to Cancel the Domain Ranking on click on 'Cancel' button/EL-5057",function(){
            mainAdminMasterManagementPage.getAddNewBtn().click()
            mainAdminMasterManagementPage.getDomainRankingCancelBtn().click()
          }
        })
        //})

        //it("Validate user is able to delete the records from the 'Competencies' tab/EL-5057/ES5057_05",function(){\
        mainAdminMasterManagementPage.getMainSkillLstInDomainRanking().each(($e7, index, $list) => {
          const txt = $e7.text()
          if (txt.includes(this.masterManagementCredentials.MainSkillValue)) {
            mainAdminMasterManagementPage.getDomainMappingActionsLst().eq(index).click({ force: true })
            mainAdminMasterManagementPage.getActionsLstDltBtn().click()
            mainAdminMasterManagementPage.getPublicationPopupDltBtn().click()
            cy.contains("Domain Rank is successfully Deleted !").should('be.visible')
            mainAdminMasterManagementPage.getPopupAccptBtn().click()
          }
        })

        //it("To delete the created domain mapping",function(){
          mainAdminMasterManagementPage.getDomainMappingTabLnk().click()
          mainAdminMasterManagementPage.getDomainMappingMainSkillLst().each(($e3, index, $list) => {
            const txt = $e3.text()
            if (txt.includes(this.masterManagementCredentials.MainSkill)) {
              mainAdminMasterManagementPage.getActionsLst().eq(index).click({ force: true })
            }
          })
          mainAdminMasterManagementPage.getActionsLstDltBtn().click()
          mainAdminMasterManagementPage.getPublicationPopupDltBtn().click()
          cy.contains("Domain Skill is successfully Deleted !").should('be.visible')
          mainAdminMasterManagementPage.getPublicationAddedbtn().click()
        //})
  })
})