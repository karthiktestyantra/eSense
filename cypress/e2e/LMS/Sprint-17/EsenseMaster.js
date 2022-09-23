const mainAdminHomePage = require("../../../support/pageObjects/LMS-2/MainAdminHomePage")
const mainAdminMasterManagementPage = require("../../../support/pageObjects/LMS-2/MainAdminMasterManagementPage")

describe("Verify Master Management Page functionalities", function () {
  
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
    mainAdminHomePage.getMasterManagementLnk().click()
    mainAdminMasterManagementPage.getTitle().should('have.text', this.masterManagementCredentials.Title)
    //})

    //it("Validate user is able to view the list of Test type on clicking the “Test Type” option in the Master menu/EL-5596/ES5596_01",function(){
    mainAdminMasterManagementPage.getTestTypeLnk().click()
    mainAdminMasterManagementPage.getTestTypeLst().should('be.visible')
    //})

    //it("Validate user is  able view following details for the user in the grid (Test Type, Status, Action (View/Edit))/EL-5596/ES5596_02",function(){
    mainAdminMasterManagementPage.getTestTypeContents().should('contain.text', "Test Type").and('contain.text', "Status")
      .and('contain.text', "Actions")
    // })

    //it("Validate user is able to search the test type list in the search option/EL-5596/ES5596_03",function(){
    mainAdminMasterManagementPage.getTestTypeSearchFld().should('be.enabled').click()
    mainAdminMasterManagementPage.getTestTypeSearchFld().type('timer')
    cy.wait(1000)
    mainAdminMasterManagementPage.getTestTypeLst().eq(0).should('contain.text', "Timer")
    //})

    //it("Validate user is able to Click on filter option, Test type and status options are displayed/EL-5596/ES5596_04",function(){
    mainAdminMasterManagementPage.getTesttypeFilterDrpDwn().click()
    mainAdminMasterManagementPage.getTestTypeFilterDrpDwnStatusTxt().should('be.visible')
    //})

    //it("Validate whether test type list is populated based on the search/filter applied by the user/EL-5596/ES5596_05",function(){
    mainAdminMasterManagementPage.getTestTypeFilterStatusDrpDwn().should('be.visible').should('contain.text', "All").and('contain.text', "Active")
      .and('contain.text', "Inactive")
    mainAdminMasterManagementPage.getTestTypeFilterResetBtn().click()
    //})

    //it("Validate user click on 'Cancel' button, navigate to Test type list screen/EL-5565/ES5565_06",function(){
    mainAdminMasterManagementPage.getAddNewBtn().click()
    mainAdminMasterManagementPage.getTestTypeTxtFld().type("Metric")
    mainAdminMasterManagementPage.getStatusToggleBtn().click()
    mainAdminMasterManagementPage.getTestTypeCancelBtn().click()
    //})

    //it("Validate user click on 'Cancel' button, navigate to Test type list screen/EL-5565/ES5565_07",function(){
    mainAdminMasterManagementPage.getAddNewBtn().click()
    mainAdminMasterManagementPage.getTestTypeTxtFld().type("Metric")
    mainAdminMasterManagementPage.getStatusToggleBtn().click()
    mainAdminMasterManagementPage.getTestTypeSubmitBtn().click()
    cy.contains('TestType is successfully Added !').should('be.visible')
    mainAdminMasterManagementPage.getPublicationAddedbtn().click()
    //})

    //it("Validate user is able to create a Test type by clicking the “Test Type” option in the Master menu/EL-5565/ES5565_01",function(){
    mainAdminMasterManagementPage.getTestTypeSearchFld().clear().type('metric')
    mainAdminMasterManagementPage.getDomainMappingMainSkillLst().eq(0).should('have.text', "Metric")
    cy.wait(1000)
    //})

    //it("Validate user is able to enable/disable the status/EL-5565/ES5565_04",function(){
    mainAdminMasterManagementPage.getActionsLst().eq(0).click()
    mainAdminMasterManagementPage.getEditBtn().click()
    mainAdminMasterManagementPage.getStatusToggleBtn().click()
    mainAdminMasterManagementPage.getTestTypeSubmitBtn().click()
    cy.contains('TestType is successfully Updated !').should('be.visible')
    mainAdminMasterManagementPage.getPublicationAddedbtn().click()
    mainAdminMasterManagementPage.getStatusLst().eq(0).should('have.text', "Inactive")
    //})

    //it("Validate user is able click on Edit options in test type details screen/ in action button in the listing screen/EL-5597/ES5597_01",function(){
    mainAdminMasterManagementPage.getActionsLst().eq(0).click()
    mainAdminMasterManagementPage.getEditBtn().click()
    mainAdminMasterManagementPage.getTestTypeTxtFld().clear().type("Metrix")
    mainAdminMasterManagementPage.getStatusToggleBtn().click()
    mainAdminMasterManagementPage.getTestTypeSubmitBtn().click()
    cy.contains('TestType is successfully Updated !').should('be.visible')
    mainAdminMasterManagementPage.getPublicationAddedbtn().click()
    //})

    //it("Validate user is able to click on edit and save the test type details, the system display the updates to the end-user/EL-5597/ES5597_02",function(){
    mainAdminMasterManagementPage.getTestTypeSearchFld().clear().type('metrix')
    mainAdminMasterManagementPage.getDomainMappingMainSkillLst().eq(0).should('have.text', "Metrix")
    //})

    //it("Validate whether delete option is available in the Test type details screen/ in action button in the listing screen/EL-5597/ES5597_03",function(){
    mainAdminMasterManagementPage.getActionsLst().eq(0).click()
    mainAdminMasterManagementPage.getDeleteBtn().click()
    mainAdminMasterManagementPage.getDeleteInsideBtn().should('be.visible').click()
    //})

    //it("Validate user on clicking delete button, Confirmation popup is displayed or not/EL-5597/ES5597_04",function(){
    cy.contains("Test Type is successfully Deleted !").should('be.visible')
    mainAdminMasterManagementPage.getPublicationAddedbtn().click()
    //})
  })
})