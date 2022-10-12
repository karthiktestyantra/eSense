const mainAdminHomePage = require("../../../support/pageObjects/LMS-2/MainAdminHomePage")
const mainAdminGradeManagementPage = require("../../../support/pageObjects/LMS-2/MainAdminGradeManagementPage")

describe("Verify Grade Management Page functionalities - Sprint 14(EL-4471)", function () {

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

  it("To Validate user is able to navigate to 'Grades' Module/EL-4471/ES4471_01", function () {
    mainAdminHomePage.getGradeManagementLnk().click()
    mainAdminGradeManagementPage.getPageTitle().should('be.visible')
    // })
    //it("To Validate user is able to set flag as 'Display Name Editable' for each grade/EL-4471/ES4471_02",function(){
    mainAdminGradeManagementPage.getGradeLst().each(($e1, index, $list) => {
      const actualText = $e1.text()
      if (actualText.includes("Grade 8")) {
        mainAdminGradeManagementPage.getActionsLst().eq(index).trigger('click')
      }
    })
    mainAdminGradeManagementPage.getEditBtn().click()
    mainAdminGradeManagementPage.getIsEditableBtn().click()
    mainAdminGradeManagementPage.getEditGradeSubmitBtn().click()
    mainAdminGradeManagementPage.getEditGradePopUpSubmit().click()
    mainAdminHomePage.getGradeManagementLnk().click()
    mainAdminGradeManagementPage.getGradeLst().each(($e1, index, $list) => {
      const actualText = $e1.text()
      if (actualText.includes("Grade 8")) {
        mainAdminGradeManagementPage.getEditableLst().eq(index).should('have.text', "No")
      }
    })
    // })
    //it("To Validate user is not able to edit the grades on school admin login, if the flag has not  been set to 'iseditable' option/EL-4471/ES-4471_04",function(){
    mainAdminGradeManagementPage.getGradeLst().each(($e1, index, $list) => {
      const actualText = $e1.text()
      if (actualText.includes("Grade 8")) {
        mainAdminGradeManagementPage.getActionsLst().eq(index).trigger('click')
      }
    })
    mainAdminGradeManagementPage.getEditBtn().click()
    mainAdminGradeManagementPage.getIsEditableBtn().click()
    mainAdminGradeManagementPage.getEditGradeSubmitBtn().click()
    mainAdminGradeManagementPage.getEditGradePopUpSubmit().click()
    mainAdminHomePage.getGradeManagementLnk().click()
    mainAdminGradeManagementPage.getGradeLst().each(($e1, index, $list) => {
      const actualText = $e1.text()
      if (actualText.includes("Grade 8")) {
        mainAdminGradeManagementPage.getEditableLst().eq(index).should('have.text', "Yes")
      }
    })
  })
})
