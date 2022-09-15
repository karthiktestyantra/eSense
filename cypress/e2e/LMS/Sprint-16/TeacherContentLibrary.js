import TeacherDashboardPage from "../../../support/pageObjects/LMS-2/TeacherDashboardPage";
import TeacherELAPage from "../../../support/pageObjects/LMS-2/TeacherELAPage";

const home = new TeacherDashboardPage();
const teacherELA = new TeacherELAPage();

describe("Verify techer content library functionalities", function () {
  before(function () {
    cy.visit(Cypress.env("urlQA"))
    cy.fixture("LMS/TeacherLoginCredentials").then(function (validAdminLoginData) {
      cy.TeacherPostSetupLogin(validAdminLoginData.user, validAdminLoginData.password)
    })
  })
  beforeEach(function () {
    cy.fixture("LMS/TeacherELACredentials").then(function (teacher) {
      this.teacher = teacher;
    })
  })
  //pre-condition

  it("To verify that ELA cards are provided in left pannel in 'Assignment' Tab/EL-3978/ES3978_01", function () {
    home.getMyclassLnk().click({ force: true })
    teacherELA.getMyClassSubName().contains(this.teacher.Grade).click({ force: true })
    teacherELA.getAssessmentTab().click()
    teacherELA.getAssignmentBtn().click({ force: true })
    teacherELA.getELACardLst().should('be.visible')
  })

  it("To verify that Teacher is able to view the ELA's in Content Library page/EL-3977/ES3977_01", function () {
    teacherELA.getAddELABtn().click()
    teacherELA.getELATitleLstInAddELASect().should('be.visible')
  })

  it("To verify that Teacher is able to click on 'View ELA' button/EL-3977/ES3977_02", function () {
    teacherELA.getELATitleLstInAddELASect().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.teacher.ELAName)) {
        teacherELA.getViewELABtnInELAAddSect().eq(index).should('be.enabled').click()
      }
    })
  })

  it("To verify that when Teacher clicks on 'View ELA' button It's navigating to 'Assign ELA' page/EL-3977/ES3977_03", function () {
    teacherELA.getAssignELATitle().contains("Assign as Classwork").should('be.visible')
  })

  it("To verify that in 'Assign ELA' page ELA details are displayed/EL-3977/ES3977_04", function () {
    teacherELA.getELAQuestionsCheckBx().should('have.length', 4)
  })

  it("To verify that 'Cancel' button is is provided in the  'Assign ELA' page/EL-3977/ES3977_06", function () {
    teacherELA.getAssignELACancelBtn().should('be.visible').should('be.enabled')
  })

  it("To verify that Error message is thrown when teacher don’t select any question for a student/EL-3977/ES3977_13", function () {
    teacherELA.getELAAssignBtn().should('not.be.enabled')
  })

  it("To verify that when teacher click on 'Assign' button the confirmation pop-up “ELA is successfully assigned” is dispalyed/EL-3977/ES3977_10", function () {
    teacherELA.getELAQuestionsCheckBx().eq(0).click()
    teacherELA.getELAQuestionsCheckBx().eq(1).click()
    teacherELA.getELAAssignBtn().click()
    cy.contains("Successfully Assigned").should('be.visible')
    teacherELA.getAssignELACloseIcn().click()
  })

  it("To verify that when user Click on 'Cancel' button the 'Select Questions to Assign' pop-up page is closed/EL-3977/ES3977_11", function () {
    teacherELA.getAddELABtn().click()
    teacherELA.getELATitleLstInAddELASect().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.teacher.ELAName)) {
        teacherELA.getViewELABtnInELAAddSect().eq(index).should('be.enabled').click()
      }
    })
    teacherELA.getAssignELACancelBtn().click()
    teacherELA.getAssignmentExpandCard().should('be.visible')
  })

  it("To verify that Teacher can Assign Multiple questions to a single student/EL-3977/ES3977_12", function () {
    teacherELA.getELACardQuestnNumbersLst().eq(0).should('be.visible')
    teacherELA.getELACardQuestnNumbersLst().eq(1).should('be.visible')
  })

  //post condition
  it("Delete the assigned ELA Card", function () {
    teacherELA.getELACardLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.teacher.ELAName)) {
        teacherELA.getELACardLst().eq(index).click({ force: true })
        teacherELA.getDltBtnLstInELACard().eq(index).click()
      }
    })
    teacherELA.getDltELACardPopup().should('be.visible')
    teacherELA.getDltCnfrmBtnInELA().click()
  })

})