const teacherDashboardPage = require("../../../support/pageObjects/LMS-2/TeacherDashboardPage")
const teacherELAPage = require("../../../support/pageObjects/LMS-2/TeacherELAPage")

describe("Verify techer content library functionalities - Sprint 16(EL-3977,EL-3978)", function () {

  before(function () {
    cy.visit(Cypress.env("urlQA"))
    cy.fixture("LMS/TeacherLoginCredentials").then(function (validAdminLoginData) {
      cy.TeacherPostSetupLogin(validAdminLoginData.user, validAdminLoginData.password)
    })
  })

  beforeEach(function () {
    cy.fixture("LMS/TeacherELACredentials").as("teacher")
  })

  //pre-condition
  it("To verify that ELA cards are provided in left pannel in 'Assignment' Tab/EL-3978/ES3978_01", function () {
    teacherDashboardPage.getMyclassLnk().click({ force: true })
    teacherELAPage.getMyClassSubName().contains(this.teacher.Grade).click({ force: true })
    teacherELAPage.getAssessmentTab().click()
    teacherELAPage.getAssignmentBtn().click({ force: true })
    teacherELAPage.getELACardLst().should('be.visible')
  })

  it("To verify that Teacher is able to view the ELA's in Content Library page/EL-3977/ES3977_01", function () {
    teacherELAPage.getAddELABtn().click()
    teacherELAPage.getELATitleLstInAddELASect().should('be.visible')
  })

  it("To verify that Teacher is able to click on 'View ELA' button/EL-3977/ES3977_02", function () {
    teacherELAPage.getELATitleLstInAddELASect().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.teacher.ELAName)) {
        teacherELAPage.getViewELABtnInELAAddSect().eq(index).should('be.enabled').click()
      }
    })
  })

  it("To verify that when Teacher clicks on 'View ELA' button It's navigating to 'Assign ELA' page/EL-3977/ES3977_03", function () {
    teacherELAPage.getAssignELATitle().contains("Assign as Classwork").should('be.visible')
  })

  it("To verify that in 'Assign ELA' page ELA details are displayed/EL-3977/ES3977_04", function () {
    teacherELAPage.getELAQuestionsCheckBx().should('have.length', 4)
  })

  it("To verify that 'Cancel' button is is provided in the  'Assign ELA' page/EL-3977/ES3977_06", function () {
    teacherELAPage.getAssignELACancelBtn().should('be.visible').should('be.enabled')
  })

  it("To verify that Error message is thrown when teacher don’t select any question for a student/EL-3977/ES3977_13", function () {
    teacherELAPage.getELAAssignBtn().should('not.be.enabled')
  })

  it("To verify that when teacher click on 'Assign' button the confirmation pop-up “ELA is successfully assigned” is dispalyed/EL-3977/ES3977_10", function () {
    teacherELAPage.getELAQuestionsCheckBx().eq(0).click()
    teacherELAPage.getELAQuestionsCheckBx().eq(1).click()
    teacherELAPage.getELAAssignBtn().click()
    cy.contains("Successfully Assigned").should('be.visible')
    teacherELAPage.getAssignELACloseIcn().click()
  })

  it("To verify that when user Click on 'Cancel' button the 'Select Questions to Assign' pop-up page is closed/EL-3977/ES3977_11", function () {
    teacherELAPage.getAddELABtn().click()
    teacherELAPage.getELATitleLstInAddELASect().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.teacher.ELAName)) {
        teacherELAPage.getViewELABtnInELAAddSect().eq(index).should('be.enabled').click()
      }
    })
    teacherELAPage.getAssignELACancelBtn().click()
    teacherELAPage.getAssignmentExpandCard().should('be.visible')
  })

  it("To verify that Teacher can Assign Multiple questions to a single student/EL-3977/ES3977_12", function () {
    teacherELAPage.getELACardQuestnNumbersLst().eq(0).should('be.visible')
    teacherELAPage.getELACardQuestnNumbersLst().eq(1).should('be.visible')
  })

  //post condition
  it("Delete the assigned ELA Card", function () {
    teacherELAPage.getELACardLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.teacher.ELAName)) {
        teacherELAPage.getELACardLst().eq(index).click({ force: true })
        teacherELAPage.getDltBtnLstInELACard().eq(index).click()
      }
    })
    teacherELAPage.getDltELACardPopup().should('be.visible')
    teacherELAPage.getDltCnfrmBtnInELA().click()
  })

})