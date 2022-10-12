const adminPostSetupHomePage = require("../../../support/pageObjects/LMS-2/AdminPostSetupHomePage")
const adminGradesAndStreamPage = require("../../../support/pageObjects/LMS-2/AdminGradesAndStreamPage")

describe("Verify Admin grades and stream functionalities - Sprint 19(EL-5967)", function () {

  before(function () {
    cy.visit(Cypress.env("urlMain"))
    cy.fixture("LMS/AdminLoginCredentials").then(function (validAdminLoginData) {
      cy.AdminPostSetup(validAdminLoginData.newUsername, validAdminLoginData.password)
    })
  })

  beforeEach(function () {
    cy.fixture("LMS/AdminQuickLink").as("report")
  })

  //pre-condition
  it("Validate that when user clicks on 'Grades and department' academic  setup page is dispalyed/EL-5967/ES5967_01", function () {
    adminPostSetupHomePage.getSchoolLnk().click({ force: true })
    adminPostSetupHomePage.getGradesAndDeptSectionBtn().click()
    adminGradesAndStreamPage.getGradePageTitle().should('have.text', "Academic Setup")
  })

  it("Validate that user able to edit the all the departments present in the 'departments' minor tab/EL-5967/ES5967_02", function () {
    adminGradesAndStreamPage.getEditIcnsLst().each(($e1, index, $list) => {
      cy.wrap($e1).click()
      adminGradesAndStreamPage.getStreamNameTxtFld().should('be.visible').and('be.enabled')
      adminGradesAndStreamPage.getDeptcancelBtn().click()
      cy.wait(1000)
    })
  })

  it("Validate that user able to add the department by clicking on Add department and entering all the mandatory fields/EL-5967/ES5967_03", function () {
    adminGradesAndStreamPage.getAddStreamBtn().click()
    adminGradesAndStreamPage.getStreamNameTxtFld().type("Bio")
    adminGradesAndStreamPage.getStreamGradeDrpDwn().click()
    adminGradesAndStreamPage.getGradesLstInGradeDrpDwn().last().click()
    adminGradesAndStreamPage.getStreamGradeDrpDwn().click()
    adminGradesAndStreamPage.getmandatorySubdrpdwn().click()
    adminGradesAndStreamPage.getMandatorySubLst().first().click()
    adminGradesAndStreamPage.getmandatorySubdrpdwn().click()
    adminGradesAndStreamPage.getSubmitBtnInAddStream().click()
  })

  it("Validate that user able to delete the all the departments by clicking delete icon under 'departments' minor tab/EL-5967/ES5967_04", function () {
    cy.wait(2000)
    adminGradesAndStreamPage.getStreamLst().each(($e1, index, $list) => {
      const txt = $e1.text()
      if (txt === "Bio") {
        adminGradesAndStreamPage.getDltBtnLst().eq(index).click()
      }
    })
    adminGradesAndStreamPage.getDltBtnInDltSect().click()
  })

  it("Validate that user is  able to select and unselectthe grade checkbox/EL-5967/ES5967_05", function () {
    adminGradesAndStreamPage.getGradesAndSubTab().click()
    cy.wait(2000)
    adminGradesAndStreamPage.getGradescheckBxInGradesAndSub().uncheck()
    cy.wait(1000)
    adminGradesAndStreamPage.getGradescheckBxInGradesAndSub().should('not.be.checked')
    adminGradesAndStreamPage.getGradescheckBxInGradesAndSub().check()
    adminGradesAndStreamPage.getGradescheckBxInGradesAndSub().should('be.checked')
  })

})