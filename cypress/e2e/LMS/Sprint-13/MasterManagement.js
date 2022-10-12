const mainAdminHomePage = require("../../../support/pageObjects/LMS-2/MainAdminHomePage")
const mainAdminMasterManagementPage = require("../../../support/pageObjects/LMS-2/MainAdminMasterManagementPage")

describe("Verify Master Management Page functionalities - Sprint 13(EL-4138)", function () {
  before(function () {
    cy.viewport(1920, 1080)
    cy.visit(Cypress.env("url"))
    cy.fixture("LMS/mainAdminLoginCredentials").then(function (validAdminLoginData) {
      cy.Mainlogin(validAdminLoginData.username, validAdminLoginData.password)
    })
  })

  beforeEach(function () {
    cy.fixture("LMS/mainAdminMasterManagementCredentials").as("masterManagementCredentials")
  })

  //pre-condition before execution
  it("Navigate to Master Management page", function () {
    mainAdminHomePage.getSystemConfigDrpDwn().click()
    mainAdminHomePage.getMasterManagementLnk().click()
    mainAdminMasterManagementPage.getTitle().should('have.text', this.masterManagementCredentials.Title)
    //  })

    //it("To validate that 'Publications' tab is provided in the 'Master Management'/EL-4138/ES4138_01",function () {
    mainAdminMasterManagementPage.getPublicationTabLnk().should('be.visible').should('have.text', this.masterManagementCredentials.PublicationTabTitle)
    // })

    // it("To validate that when user clicks on 'Publications' Tab, Publications list exist in the masters DB is displayed/EL-4138/ES4138_02",function(){
    mainAdminMasterManagementPage.getPublicationTabLnk().click()
    mainAdminMasterManagementPage.getPublicationNameLst().should('be.visible')
    // })

    //it("To validate that 'Add New' Button is provided in the 'Publications' tab/EL-4138/ES4138_03",function(){
    mainAdminMasterManagementPage.getBottomAddNewBtn().should('be.visible')
    //})

    // it("To validate that when user click on 'Add New' button it's navigating to 'Add Publication' pop-up/EL-4138/ES4138_04",function(){
    mainAdminMasterManagementPage.getBottomAddNewBtn().click()
    mainAdminMasterManagementPage.getAddPublicationTitleTxt().should('have.text', this.masterManagementCredentials.AddNewPublicationTitle)
    // })

    // it("To validate that 'Publication' and 'Display Name' Text box is provided in the 'Add Publication' pop-up/EL-4138/ES4138_05",function(){
    mainAdminMasterManagementPage.getPublicationNameTxtFld().should('be.enabled').should('be.visible')
    mainAdminMasterManagementPage.getDisplayNameTxtFld().should('be.enabled').should('be.visible')
    //  })

    // it("To validate that 'Status' toggle is provided in the 'Add Publication' pop-up/EL-4138/ES4138_06",function(){
    mainAdminMasterManagementPage.getStatusToggleBtn().should('be.enabled').should('be.visible')
    //})

    //  it("To validate that 'Submit' and 'Cancel' buttons is provided the 'Add Publication' pop-up/EL-4138/ES4138_07",function(){
    mainAdminMasterManagementPage.getAddPublicationSubmitBtn().should('be.visible')
    mainAdminMasterManagementPage.getAddPublicationCancenBtn().should('be.visible')
    // })

    // it("To validate that 'Type Publication Name' Place holder is provided in the 'Publication' Text box/EL-4138/ES4138_08",function(){
    mainAdminMasterManagementPage.getPublicationNameTxtFld().invoke('attr', 'placeholder').should('eq', this.masterManagementCredentials.PublicationPlaceHolderText)
    // })

    // it("To validate that user is able to enter alphanumeric charecters into 'Publication' Textbox/EL-4138/ES4138_09",function(){
    mainAdminMasterManagementPage.getPublicationNameTxtFld().type(this.masterManagementCredentials.AlphanumericCharectors)
    // })

    //it("To validate that 'Type Display Name' Place holder is provided in the 'Display Name' Text box/EL-4138/ES4138_10",function(){
    mainAdminMasterManagementPage.getDisplayNameTxtFld().invoke('attr', 'placeholder').should('eq', this.masterManagementCredentials.DisplayPlaceHolderText)
    // })

    //it("To validate that user is able to enter alphanumeric charecters into 'Display Name' Textbox/EL-4138/ES4138_11",function(){
    mainAdminMasterManagementPage.getDisplayNameTxtFld().type(this.masterManagementCredentials.AlphanumericCharectors)
    // })

    //it("To validate that user is able to Switch on  and off the 'Status' toggle/EL-4138/ES4138_12",function(){
    mainAdminMasterManagementPage.getStatusToggleBtn().should('have.attr', 'value', 'false')
    mainAdminMasterManagementPage.getStatusToggleBtn().click()
    mainAdminMasterManagementPage.getStatusToggleBtn().should('have.attr', 'value', 'true')
    //})

    // it("To validate that when user click on 'Submit' button it's navigating back to 'Publications' Tab/EL-4138/ES4138_13",function(){
    mainAdminMasterManagementPage.getAddPublicationSubmitBtn().click()
    mainAdminMasterManagementPage.getPublicationAddedTxt().should('have.text', this.masterManagementCredentials.PublicationAddPopupText)
    mainAdminMasterManagementPage.getPublicationAddedbtn().click()
    mainAdminMasterManagementPage.getPublicationNameLst().contains(this.masterManagementCredentials.AlphanumericCharectors)
    // })

    //it("To verify that when user Switch on the 'Status' toggle and click on 'Submit' button then the status is show as Active in 'Publications' Tab/EL-4138/ES4138_14",function(){
    mainAdminMasterManagementPage.getPublicationNameLst().each(($e1, index, $list) => {
      const name = $e1.text()
      if (name.includes(this.masterManagementCredentials.AlphanumericCharectors)) {
        mainAdminMasterManagementPage.getStatusLst().eq(index).scrollIntoView().should('have.text', "Active")
      }
    })
    //})

    // it("To verify that when user Switch off the 'Status' toggle and click on 'Submit' button then the status is show as Inactive in 'Publications' Tab/EL-4138/ES4138_15",function(){
    mainAdminMasterManagementPage.getPublicationNameLst().each(($e1, index, $list) => {
      const name = $e1.text()
      if (name.includes(this.masterManagementCredentials.AlphanumericCharectors)) {
        mainAdminMasterManagementPage.getActionsLst().eq(index).scrollIntoView().click()
      }
    })
    mainAdminMasterManagementPage.getEditBtn().click()
    mainAdminMasterManagementPage.getStatusToggleBtn().click()
    mainAdminMasterManagementPage.getStatusToggleBtn().should('have.attr', 'value', 'false')
    mainAdminMasterManagementPage.getAddPublicationSubmitBtn().click()
    mainAdminMasterManagementPage.getPublicationAddedbtn().click()
    mainAdminMasterManagementPage.getPublicationNameLst().each(($e1, index, $list) => {
      const name = $e1.text()
      if (name.includes(this.masterManagementCredentials.AlphanumericCharectors)) {
        mainAdminMasterManagementPage.getStatusLst().eq(index).scrollIntoView().should('have.text', "Inactive")
      }
    })
    // })

    //it("To validate that when user click on 'Cancel' button, it's navigating to 'Publications' Tab/EL-4138/ES4138_16",function(){
    mainAdminMasterManagementPage.getBottomAddNewBtn().click()
    mainAdminMasterManagementPage.getAddPublicationCancenBtn().click()
    mainAdminMasterManagementPage.getPublicationTabLnk().should('be.visible')
    //})

    //post-condition
    // it("Delete the created publication",function(){
    mainAdminMasterManagementPage.getPublicationNameLst().each(($e1, index, $list) => {
      const name = $e1.text()
      if (name.includes(this.masterManagementCredentials.AlphanumericCharectors)) {
        mainAdminMasterManagementPage.getActionsLst().eq(index).scrollIntoView()
        mainAdminMasterManagementPage.getActionsLst().eq(index).click({ force: true })
      }
    })
    mainAdminMasterManagementPage.getDeleteBtn().click()
    mainAdminMasterManagementPage.getPublicationPopupDltBtn().click()
    mainAdminMasterManagementPage.getPublicationAddedbtn().click()
  })
})

  // it("Script for add new btn",function(){
  //   cy.visit('https://cyborg.topschool.co.in');
  //   cy.get('div a img').should('be.visible');
  //   cy.get('input[name="userName"]').type("admin");
  //   cy.get('input[name="password"]').type("Test@123");
  //   cy.get('button[type="submit"]').click({force:true});
  //   cy.url().should('contain','dashboard');
  //   cy.wait(1000);
  //   cy.get('div span.menu-title').contains("System Configuration").click();
  //   cy.get('div span.menu-title').contains("Masters Management").click();
  //   cy.wait(1000);
  //   cy.get('div.card-header ul li a').contains("Publication").click();
  //   cy.wait(2000);
  //   cy.get('button.flex-center').should('be.visible')
  // })

 // })