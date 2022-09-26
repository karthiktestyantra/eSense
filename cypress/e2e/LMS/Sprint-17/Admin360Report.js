const teacherDashboardPage = require("../../../support/pageObjects/LMS-2/TeacherDashboardPage")
const teacher360ReportPage = require("../../../support/pageObjects/LMS-2/Teacher360ReportPage")
const teacherELAPage = require("../../../support/pageObjects/LMS-2/TeacherELAPage")

describe("Verify admin 360 report functionalities", function () {

  before(function () {
    cy.visit(Cypress.env("urlQAPreSetup"))
    cy.fixture("LMS/TeacherLoginCredentials").then(function (validAdminLoginData) {
      cy.TeacherPostSetupLogin(validAdminLoginData.user1, validAdminLoginData.password)
    })
  })

  beforeEach(function () {
    cy.fixture("LMS/TeacherELACredentials").as("report")
    cy.fixture("LMS/Admin360Report").as("repo")
  })

  //pre-condition
  it("To Create New Assigned ELA", function () {
    teacherDashboardPage.getMyclassLnk().click({ force: true })
    teacherELAPage.getMyClassSubName().contains(this.report.Grade).click({ force: true })
    teacherELAPage.getAssessmentTab().click()
    teacherELAPage.getAssignmentBtn().click({ force: true })
    teacherELAPage.getAddELABtn().click()
    teacherELAPage.getELATitleLstInAddELASect().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.report.newELAName)) {
        teacherELAPage.getViewELABtnInELAAddSect().eq(index).should('be.enabled').click()
      }
    })
    teacherELAPage.getELAQuestionsCheckBx().eq(0).click()
    teacherELAPage.getELAQuestionsCheckBx().eq(1).click()
    teacherELAPage.getELAAssignBtn().click()
    cy.contains("Successfully Assigned").should('be.visible')
    teacherELAPage.getAssignELACloseIcn().click()
  })

  it("Validate that user is able to view the class and Student list of the resepective class/EL-4079/ES4079_01", function () {
    teacherDashboardPage.getReportLnk().click({ force: true })
    teacher360ReportPage.get360ReportLnk().click({ force: true })
    teacher360ReportPage.get360ReportTitleTxt().should('have.text', "360˚ Reports")
    teacher360ReportPage.get360ReportContents().should('contain.text', "ROLL NO").and('contain.text', "FULL NAME")
      .and('contain.text', "LAST ACTIVE").and('contain.text', "REPORTS")
  })

  it("Validate that user is able to view the class and Student list of the resepective class/EL-4079/ES4079_02", function () {
    teacher360ReportPage.getNameLstIn360report().contains(this.report.student1).should('be.visible')
    teacher360ReportPage.getGradeDrpDwnInReport().click()
    teacher360ReportPage.getGradeDrpDwnLstInReport().contains(this.report.GradeDrpDwn).click()
    teacher360ReportPage.getNameLstIn360report().should('contain.text', this.report.student1).and('contain.text', this.report.student2)
  })

  it("Validate that user is able to view 360-degree report of the student that have dependency on the ELA evaluated for the class after each chapter/EL-4079/ES4079_04", function () {
    teacher360ReportPage.getPendingFlagLst().eq(0).should('be.visible').trigger('mouseover')
    cy.contains("1 ELA Pending").should('be.visible')
  })

  it("Validate that user is able to view the indiviual report of the student by clicking on 'View Report' button/EL-4079/ES4079_05", function () {
    teacher360ReportPage.getNameLstIn360report().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.report.student1)) {
        teacher360ReportPage.getViewReportLst().eq(index).click()
      }
    })
    teacher360ReportPage.getNameInReport().should('have.text', this.report.student1+this.report.student1Init)
    teacher360ReportPage.getClassSectInReport().should('contain.text', this.report.GradeDrpDwn)
    teacher360ReportPage.getDetailsInReport().should('be.visible')
  })

  it("Validate that user is able to view the  reports of Health report,My Grade, My Competency,Subject Performance/EL-4079/ES4079_06", function () {
    teacher360ReportPage.getSubContentsLstInReport().contains("Health Report").should('be.visible')
    teacher360ReportPage.getSubContentsLstInReport().contains("My Grades").should('be.visible')
    teacher360ReportPage.getSubContentsLstInReport().contains("My Competency").should('be.visible')
    teacher360ReportPage.getSubContentsLstInReport().contains("Subject Performance").should('be.visible')
    teacher360ReportPage.getSubContentsLstInReport().contains("My Yearly Performance").should('be.visible')
  })

  it("Validate that user is able to view all the student report for only his/her subject class/EL-4079/ES4079_07", function () {
    teacher360ReportPage.getClassSectInReport().should('contain.text', this.repo.StudentReport)
  })

  it("Validate that user should not find Preview & Print button to take the print of the Student Report/EL-4079/ES4079_08", function () {
    teacher360ReportPage.getPreviewAndPrintBtnInReport().should('be.visible').should('be.enabled')
  })

  it("Validate that user is able to navigate to My Yearly Performance tab under Reports Module/EL-4095/ES4095_01", function () {
    teacher360ReportPage.getSubContentsLstInReport().contains("My Yearly Performance").click()
    teacher360ReportPage.getMyEarlyPerformanceTitle().should('be.visible')
  })

  it("Validate that user is able to navigate to My Competency tab under Reports Module/EL-4097/ES4097_01", function () {
    teacher360ReportPage.getSubContentsLstInReport().contains("My Competency").click()
    teacher360ReportPage.getMyCompetencyModules().should('be.visible')
  })

  it("Validate that user is able to view “Competency” for the different(all) subject using the drop-down at the top right of the heading/EL-4097/ES4097_02", function () {
    teacher360ReportPage.getMyCompetencyRHSDrpDwn().should('be.visible').click()
    teacher360ReportPage.getMyCompetencyRHSDrpDwnLst().should('be.visible')
  })

  it("Validate that user is able to view “Competency” only for the subjects handled by him/her using the drop-down at the top right of the heading/EL-4098/ES4098_02", function () {
    teacher360ReportPage.getMyCompetencyRHSDrpDwnLst().should('contain.text', "Science").and('contain.text', "Social Science")
    teacher360ReportPage.getMyCompetencyRHSDrpDwnLst().contains("Social Science").click()
  })

  it("Validate that user is able to navigate to 'Health Report' tab under Reports Module/EL-4101/ES4101_01", function () {
    teacher360ReportPage.getSubContentsLstInReport().contains("Health Report").click()
    cy.wait(1000)
  })

  it("Validate that user is able to add the Health Report on clicking on '+Add Report' button/EL-4101/ES4101_02", function () {
    // teacher360ReportPage.getMyCompetencyAddReportsBtn().should('be.visible').click()
    teacher360ReportPage.getHealthAddReportBtn().click()
  })

  it("Validate that School type drop down value should auto-populates from the List/EL-4101/ES4101_04", function () {
    teacher360ReportPage.getAddReportSchlType().click()
    teacher360ReportPage.getGradeDrpDwnLstInReport().should('contain.text', "Primary School").and('contain.text', "Middle School").and('contain.text', "Secondary School")
    teacher360ReportPage.getGradeDrpDwnLstInReport().contains("Middle School").click()
    //teacher360ReportPage.getHealthReportAddedCloseIcn().click()
  })

  it("Validate that Grades  drop down value should auto-populates from the List/EL-4101/ES4101_05", function () {
    teacher360ReportPage.getAddReportGrade().click()
    teacher360ReportPage.getGradeDrpDwnLstInReport().contains("Grade").should('be.visible')
    teacher360ReportPage.getGradeDrpDwnLstInReport().contains("Grade 4").click()
    //teacher360ReportPage.getHealthReportAddedCloseIcn().click()
  })

  it("Validate that Height Text is accpecting Numberical Values upto 2 char/EL-4101/ES4101_08", function () {
    teacher360ReportPage.getAddReportWeightTxt().type(120)
    teacher360ReportPage.getAddReportHeightTxt().type(12.123456)
    teacher360ReportPage.getAddReportAddBtn().click()
    teacher360ReportPage.getErrorMsgInAddHealthReport().contains("Height must be a Number").should('be.visible')
    teacher360ReportPage.getHealthReportAddedCloseIcn().click()
  })

  // it("Validate that user is able to add the Health Report on clicking on '+Add Report' button/EL-4101/ES4101_02",function(){
  //   teacher360ReportPage.getGradeDrpDwnLstInReport().contains("Middle School").click()
  //   teacher360ReportPage.getAddReportGrade().click()
  //   teacher360ReportPage.getGradeDrpDwnLstInReport().contains("Grade 6").click()
  //   teacher360ReportPage.getAddReportWeightTxt().type(120)
  //   teacher360ReportPage.getAddReportHeightTxt().type(12)
  //   teacher360ReportPage.getAddReportAddBtn().click()
  // })

  it("Validate that user is able to view  Health report cards for the  “Primary School, Middle School, Secondary School/EL-4101/ES4101_03", function () {
    teacher360ReportPage.getAddedHealthReportLst().should('be.visible')
  })

  it("Validate that user is able to navigate to 'Subject Performance' tab under Reports Module/EL-4100/ES4100_01", function () {
    teacher360ReportPage.getSubContentsLstInReport().contains("Subject Performance").should('be.enabled').click()
  })

  it("Validate that User can view “Learning Outcome” and “Parameters” for different subject using the drop-down at the top right of the heading/EL-4100/ES4100_02", function () {
    teacher360ReportPage.getMyCompetencyRHSDrpDwn().should('be.visible').click()
    teacher360ReportPage.getMyCompetencyRHSDrpDwnLst().should('be.visible')
    teacher360ReportPage.getMyCompetencyRHSDrpDwnLst().should('contain.text', "Tamil").and('contain.text', "Science")
      .and('contain.text', "Social Science")
    teacher360ReportPage.getMyCompetencyRHSDrpDwnLst().contains("Social Science").click()
  })

  it("Validate that the Subject Performance includes 'Chapter','Topic','Learning Outcome','All Parameter' details/EL-4100/ES4100_03", function () {
    teacher360ReportPage.getSubPerformanceContentLst().should('contain.text', "Learning Outcomes").should('be.visible')
      .and('contain.text', "All Parameters").should('be.visible').and('contain.text', "topic").should('be.visible')
      .and('contain.text', "Chapter").should('be.visible')
  })

  //post-condition
  it("Delete the assigned ELA Card", function () {
    teacherDashboardPage.getMyclassLnk().click({ force: true })
    teacherELAPage.getMyClassSubName().contains(this.report.Grade).click({ force: true })
    teacherELAPage.getAssessmentTab().click()
    teacherELAPage.getAssignmentBtn().click({ force: true })
    teacherELAPage.getELACardLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.report.newELAName)) {
        teacherELAPage.getELACardLst().eq(index).click({ force: true })
      }
    })
    teacherELAPage.getELACardLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.report.newELAName)) {
        teacherELAPage.getDltBtnLstInELACard().eq(index).click()
      }
    })
    teacherELAPage.getDltELACardPopup().should('be.visible')
    teacherELAPage.getDltCnfrmBtnInELA().click()
  })

  it("Validate that 'My Yearly Performance' report should be generated for each student only when All ELA has been assigned to the student/EL-4095/ES4095_05", function () {
    teacherDashboardPage.getReportLnk().click({ force: true })
    cy.wait(4000)
    teacher360ReportPage.get360ReportLnk().click({ force: true })
    cy.wait(5000)
    teacher360ReportPage.getGradeDrpDwnInReport().click()
    teacher360ReportPage.getGradeDrpDwnLstInReport().contains("Grade 3").click()
    cy.wait(2000)
    teacher360ReportPage.getNameLstIn360report().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes("pele")) {
        teacher360ReportPage.getViewReportLst().eq(index).click()
      }
    })
    teacher360ReportPage.getSubContentsLstInReport().contains("My Yearly Performance").should('not.exist')
  })

  it("Validate that the calculation for Competency for the chapter=( sum of all the ranks scored in Competency by the student)/ (Total number of questions assigned to the student)/EL-4097/ES4097_05", function () {
    teacher360ReportPage.getMyCompetencyTabLnk().click()
    teacher360ReportPage.getMyCompetencyRHSDrpDwn().click()
    teacher360ReportPage.getMyCompetencyRHSDrpDwnLst().contains(this.report.Subject).click()
    teacher360ReportPage.getMyCompetencyRankTxt().should('have.text', "Competency  excellent")
  })

  it("Validate that under each chapter for the specific subject Learning Outcome, the statement will be pulled from evaluated ELA/EL-4100/ES4100_04", function () {
    teacher360ReportPage.getSubContentsLstInReport().contains("Subject Performance").click()
    teacher360ReportPage.getMyCompetencyRHSDrpDwn().click()
    teacher360ReportPage.getMyCompetencyRHSDrpDwnLst().contains(this.report.Subject).click()
    teacher360ReportPage.getSubPerformanceRanktxt().eq(1).should('have.text', "domain good")
  })
})