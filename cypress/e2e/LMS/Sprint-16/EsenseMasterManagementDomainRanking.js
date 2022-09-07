import MainAdminHomePage from "../../../support/pageObjects/LMS-2/MainAdminHomePage"
import MainAdminMasterManagementPage from "../../../support/pageObjects/LMS-2/MainAdminMasterManagementPage";

const home = new MainAdminHomePage();
const masterManage = new MainAdminMasterManagementPage();

describe("Verify Master Management Page functionalities", function () {
  before(function () {
    cy.viewport(1920, 1080)
    cy.visit(Cypress.env("url"))
    cy.fixture("LMS/mainAdminLoginCredentials").then(function (validAdminLoginData) {
      cy.Mainlogin(validAdminLoginData.username, validAdminLoginData.password)
    })
  })
  beforeEach(function () {
    cy.fixture("LMS/mainAdminMasterManagementCredentials").then(function (masterManagementCredentials) {
      this.masterManagementCredentials = masterManagementCredentials;
    })
  })
  //pre-condition
  it("Navigate to Master Management page", function () {
    home.getSystemConfigDrpDwn().click()
    home.getMasterManagementLnk().click({ force: true })
    masterManage.getTitle().should('have.text', this.masterManagementCredentials.Title)


    //  it("Validate user is able Add Domain Rakings for all the Grades/EL-5057/ES5057_01",function(){
    home.getMasterManagementLnk().click()
    masterManage.getTitle().should('have.text', this.masterManagementCredentials.Title)
    //})

    //it("Validate user is able to add domain mapping",function(){
    masterManage.getDomainMappingTabLnk().click()
    masterManage.getAddNewBtn().click()
    masterManage.getDomainMappingMainSkillTxtBx().type("Knowledge")
    masterManage.getDomainMappingMainSkillDisplayName().type("knowledgeSkill")
    masterManage.getStatusBar().click()
    masterManage.getDomainMappingSubmitBtn().click()
    cy.contains("Domain Skill is successfully Added !").should('be.visible')
    masterManage.getPublicationAddedbtn().click()
    //})

    // it("Validate user is able to Navigate to Domain Ranking tab/EL-5057/ES5057_01",function(){)
    masterManage.getDomainRankingTabLnk().click()
    // })

    //it("Validate user is able to View the Grades Present in System and map the Domain Ranking for each Domain/EL-5057/ES5055_02",function(){
    masterManage.getGradeLstInDomainRanking().should('be.visible')
    //})

    //it("Validate Excellent, Good , Satisfactory , Can do Better Text Fields accepts Alphanumeric characters upto 150 as an input/EL-5057",function(){
    masterManage.getAddNewBtn().click()
    masterManage.getExcellentTxtFldInDomainRanking().type(this.masterManagementCredentials.ExceededChar)
    masterManage.getBetterTxtFldInDomainRanking().click()
    masterManage.getInvalidPopUpTxt().contains("Maximum 150 characters").should('be.visible')
    masterManage.getExcellentTxtFldInDomainRanking().clear().type("Excellent")
    masterManage.getGoodTxtFldInDomainRanking().type(this.masterManagementCredentials.ExceededChar)
    masterManage.getBetterTxtFldInDomainRanking().click()
    masterManage.getInvalidPopUpTxt().contains("Maximum 150 characters").should('be.visible')
    masterManage.getGoodTxtFldInDomainRanking().clear().type("Good")
    masterManage.getSatisfactoryTxtFldInDomainRanking().type(this.masterManagementCredentials.ExceededChar)
    masterManage.getBetterTxtFldInDomainRanking().click()
    masterManage.getInvalidPopUpTxt().contains("Maximum 150 characters").should('be.visible')
    masterManage.getSatisfactoryTxtFldInDomainRanking().clear().type("Satisfacted")
    masterManage.getBetterTxtFldInDomainRanking().type(this.masterManagementCredentials.ExceededChar)
    masterManage.getInvalidPopUpTxt().contains("Maximum 150 characters").should('be.visible')
    masterManage.getBetterTxtFldInDomainRanking().clear().type("Best")
    masterManage.getDomainRankingCancelBtn().click()
    //})

    //it("Validate Domain and Main Skill fields are selected from the auto populated List/EL-5057/",function(){
    masterManage.getGradeLstInDomainRanking().each(($e2, index, $list) => {
      const grade = $e2.text()
      if (grade.includes("Grade")) {
        masterManage.getGradeLstInDomainRanking().eq(index).click()
        masterManage.getAddNewBtn().click()
        masterManage.getDomainDrpDwnInDomainRanking().select(this.masterManagementCredentials.DomainName)
        masterManage.getMainSkillDrpDwnInDomainRanking().select(this.masterManagementCredentials.MainSkillValue)
        // })

        //it("Validate user is able to select the status as either 'Active' or 'inActive'/EL-5057/ES5057_03",function(){
        masterManage.getExcellentTxtFldInDomainRanking().clear().type("Excellent")
        masterManage.getGoodTxtFldInDomainRanking().clear().type("Good")
        masterManage.getSatisfactoryTxtFldInDomainRanking().clear().type("Satisfacted")
        masterManage.getBetterTxtFldInDomainRanking().clear().type("Best")
        masterManage.getStatusToggleBtn().click()
        masterManage.getAddPublicationSubmitBtn().click()
        cy.contains("Domain Rank is successfully Added !").should('be.visible')
        masterManage.getPublicationAddedbtn().click()
        masterManage.getPublicationNameLst().each(($e4, index, $list) => {
          const text = $e4.text()
          if (text.includes(this.masterManagementCredentials.DomainName)) {
            masterManage.getStatusTxtInDomainRanking().eq(index).should('have.text', "Active")
            masterManage.getDomainMappingActionsLst().eq(index).click({ force: true })
            masterManage.getActionsLstEditBtn().click()
            masterManage.getStatusToggleBtn().click()
            masterManage.getAddPublicationSubmitBtn().click()
            masterManage.getPublicationAddedbtn().click()
            cy.wait(1000)
            masterManage.getStatusTxtInDomainRanking().eq(index).should('have.text', "Inactive")
            cy.wait(2000)
          }
        })
        //})

        // it("Validate user is able to edit the records from the 'Domain Ranking' tab/EL-5057/ES5057_04",function(){
        masterManage.getPublicationNameLst().each(($e4, index, $list) => {
          const txt = $e4.text()
          if (txt.includes(this.masterManagementCredentials.DomainName)) {
            masterManage.getDomainMappingActionsLst().eq(index).click({ force: true })
            masterManage.getActionsLstEditBtn().click()
            masterManage.getStatusToggleBtn().click()
            masterManage.getAddPublicationSubmitBtn().click()
            cy.contains("Domain Rank is successfully Updated !").should('be.visible')
            masterManage.getPublicationAddedbtn().click()
            // })

            //it("Valdiate user is able to Cancel the Domain Ranking on click on 'Cancel' button/EL-5057",function(){
            masterManage.getAddNewBtn().click()
            masterManage.getDomainRankingCancelBtn().click()
          }
        })
        //})

        //it("Validate user is able to delete the records from the 'Competencies' tab/EL-5057/ES5057_05",function(){\
        masterManage.getPublicationNameLst().each(($e1, index, $list) => {
          const txt = $e1.text()
          if (txt.includes(this.masterManagementCredentials.DomainName)) {
            masterManage.getDomainMappingActionsLst().eq(index).click({ force: true })
            masterManage.getActionsLstDltBtn().click()
            masterManage.getPublicationPopupDltBtn().click()
            cy.contains("Domain Rank is successfully Deleted !").should('be.visible')
            masterManage.getPopupAccptBtn().click()
          }
        })
      } else {
        return false
      }
    })
  })
})