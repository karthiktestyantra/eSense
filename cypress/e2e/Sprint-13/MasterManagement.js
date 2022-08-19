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
    home.getSystemConfigDrpDwn().click()
    home.getMasterManagementLnk().click()
    masterManage.getTitle().should('have.text',this.masterManagementCredentials.Title)
//  })

  //it("To validate that 'Publications' tab is provided in the 'Master Management'/EL-4138/ES4138_01",function () {
    masterManage.getPublicationTabLnk().should('be.visible').should('have.text',this.masterManagementCredentials.PublicationTabTitle)
 // })

// it("To validate that when user clicks on 'Publications' Tab, Publications list exist in the masters DB is displayed/EL-4138/ES4138_02",function(){
    masterManage.getPublicationTabLnk().click()
    masterManage.getPublicationNameLst().should('be.visible')
 // })

 //it("To validate that 'Add New' Button is provided in the 'Publications' tab/EL-4138/ES4138_03",function(){
    masterManage.getBottomAddNewBtn().should('be.visible')
  //})

 // it("To validate that when user click on 'Add New' button it's navigating to 'Add Publication' pop-up/EL-4138/ES4138_04",function(){
    masterManage.getBottomAddNewBtn().click()
    masterManage.getAddPublicationTitleTxt().should('have.text',this.masterManagementCredentials.AddNewPublicationTitle)
 // })

 // it("To validate that 'Publication' and 'Display Name' Text box is provided in the 'Add Publication' pop-up/EL-4138/ES4138_05",function(){
    masterManage.getPublicationNameTxtFld().should('be.enabled').should('be.visible')
    masterManage.getDisplayNameTxtFld().should('be.enabled').should('be.visible')
//  })

 // it("To validate that 'Status' toggle is provided in the 'Add Publication' pop-up/EL-4138/ES4138_06",function(){
    masterManage.getStatusToggleBtn().should('be.enabled').should('be.visible')
 //})

//  it("To validate that 'Submit' and 'Cancel' buttons is provided the 'Add Publication' pop-up/EL-4138/ES4138_07",function(){
    masterManage.getAddPublicationSubmitBtn().should('be.visible')
    masterManage.getAddPublicationCancenBtn().should('be.visible')
 // })

 // it("To validate that 'Type Publication Name' Place holder is provided in the 'Publication' Text box/EL-4138/ES4138_08",function(){
    masterManage.getPublicationNameTxtFld().invoke('attr','placeholder').should('eq',this.masterManagementCredentials.PublicationPlaceHolderText)
 // })

 // it("To validate that user is able to enter alphanumeric charecters into 'Publication' Textbox/EL-4138/ES4138_09",function(){
    masterManage.getPublicationNameTxtFld().type(this.masterManagementCredentials.AlphanumericCharectors)
 // })

  //it("To validate that 'Type Display Name' Place holder is provided in the 'Display Name' Text box/EL-4138/ES4138_10",function(){
    masterManage.getDisplayNameTxtFld().invoke('attr','placeholder').should('eq',this.masterManagementCredentials.DisplayPlaceHolderText)
 // })

  //it("To validate that user is able to enter alphanumeric charecters into 'Display Name' Textbox/EL-4138/ES4138_11",function(){
    masterManage.getDisplayNameTxtFld().type(this.masterManagementCredentials.AlphanumericCharectors)
 // })

 //it("To validate that user is able to Switch on  and off the 'Status' toggle/EL-4138/ES4138_12",function(){
    masterManage.getStatusToggleBtn().should('have.attr','value','false')
    masterManage.getStatusToggleBtn().click()
    masterManage.getStatusToggleBtn().should('have.attr','value','true')
  //})

 // it("To validate that when user click on 'Submit' button it's navigating back to 'Publications' Tab/EL-4138/ES4138_13",function(){
    masterManage.getAddPublicationSubmitBtn().click()
    masterManage.getPublicationAddedTxt().should('have.text',this.masterManagementCredentials.PublicationAddPopupText)
    masterManage.getPublicationAddedbtn().click()
    masterManage.getPublicationNameLst().contains(this.masterManagementCredentials.AlphanumericCharectors)
 // })

  //it("To verify that when user Switch on the 'Status' toggle and click on 'Submit' button then the status is show as Active in 'Publications' Tab/EL-4138/ES4138_14",function(){
    masterManage.getPublicationNameLst().each(($e1,index,$list) =>{
      const name = $e1.text()
      if(name.includes(this.masterManagementCredentials.AlphanumericCharectors)){
        masterManage.getStatusLst().eq(index).scrollIntoView().should('have.text',"Active")
      }
    })
  //})

 // it("To verify that when user Switch off the 'Status' toggle and click on 'Submit' button then the status is show as Inactive in 'Publications' Tab/EL-4138/ES4138_15",function(){
    masterManage.getPublicationNameLst().each(($e1,index,$list) =>{
      const name = $e1.text()
      if(name.includes(this.masterManagementCredentials.AlphanumericCharectors)){
        masterManage.getActionsLst().eq(index).scrollIntoView().click()
      }
    })
    masterManage.getEditBtn().click()
    masterManage.getStatusToggleBtn().click()
    masterManage.getStatusToggleBtn().should('have.attr','value','false')
    masterManage.getAddPublicationSubmitBtn().click()
    masterManage.getPublicationAddedbtn().click()
    masterManage.getPublicationNameLst().each(($e1,index,$list) =>{
      const name = $e1.text()
      if(name.includes(this.masterManagementCredentials.AlphanumericCharectors)){
        masterManage.getStatusLst().eq(index).scrollIntoView().should('have.text',"Inactive")
      }
    })
 // })

  //it("To validate that when user click on 'Cancel' button, it's navigating to 'Publications' Tab/EL-4138/ES4138_16",function(){
    masterManage.getBottomAddNewBtn().click()
    masterManage.getAddPublicationCancenBtn().click()
    masterManage.getPublicationTabLnk().should('be.visible')
  //})

  //post-condition
 // it("Delete the created publication",function(){
    masterManage.getPublicationNameLst().each(($e1,index,$list) =>{
      const name = $e1.text()
      if(name.includes(this.masterManagementCredentials.AlphanumericCharectors)){
        masterManage.getActionsLst().eq(index).scrollIntoView()
        masterManage.getActionsLst().eq(index).click({force:true})
      }
    })
    masterManage.getDeleteBtn().click()
    masterManage.getPublicationPopupDltBtn().click()
    masterManage.getPublicationAddedbtn().click()
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