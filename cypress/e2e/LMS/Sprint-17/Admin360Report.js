import Teacher360ReportPage from "../../../support/pageObjects/LMS-2/Teacher360ReportPage";
import TeacherDashboardPage from "../../../support/pageObjects/LMS-2/TeacherDashboardPage";
import TeacherELAPage from "../../../support/pageObjects/LMS-2/TeacherELAPage";

const home = new TeacherDashboardPage();
const report = new Teacher360ReportPage();
const teacherELA = new TeacherELAPage();

describe("Verify admin 360 report functionalities", function () {
  before(function () {
    cy.visit(Cypress.env("urlQAPreSetup"))
    cy.fixture("LMS/TeacherLoginCredentials").then(function (validAdminLoginData) {
      cy.TeacherPostSetupLogin(validAdminLoginData.user1, validAdminLoginData.password)
    })
  })
  beforeEach(function () {
    cy.fixture("LMS/TeacherELACredentials").then(function (report) {
      this.report = report;
    })
    cy.fixture("LMS/Admin360report").then(function (repo) {
      this.repo = repo;
    })
  })

  //pre-condition
  it("To Create New Assigned ELA", function () {
    home.getMyclassLnk().click({ force: true })
    teacherELA.getMyClassSubName().contains(this.report.Grade).click({ force: true })
    teacherELA.getAssessmentTab().click()
    teacherELA.getAssignmentBtn().click({ force: true })
    teacherELA.getAddELABtn().click()
    teacherELA.getELATitleLstInAddELASect().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.report.newELAName)) {
        teacherELA.getViewELABtnInELAAddSect().eq(index).should('be.enabled').click()
      }
    })
    teacherELA.getELAQuestionsCheckBx().eq(0).click()
    teacherELA.getELAQuestionsCheckBx().eq(1).click()
    teacherELA.getELAAssignBtn().click()
    cy.contains("Successfully Assigned").should('be.visible')
    teacherELA.getAssignELACloseIcn().click()
  })

  it("Validate that user is able to view the class and Student list of the resepective class/EL-4079/ES4079_01", function () {
    home.getReportLnk().click({ force: true })
    report.get360ReportLnk().click({ force: true })
    report.get360ReportTitleTxt().should('have.text', "360˚ Reports")
    report.get360ReportContents().should('contain.text', "ROLL NO").and('contain.text', "FULL NAME")
      .and('contain.text', "LAST ACTIVE").and('contain.text', "REPORTS")
  })

  it("Validate that user is able to view the class and Student list of the resepective class/EL-4079/ES4079_02", function () {
    report.getNameLstIn360report().contains(this.report.student1).should('be.visible')
    report.getGradeDrpDwnInReport().click()
    report.getGradeDrpDwnLstInReport().contains(this.report.GradeDrpDwn).click()
    report.getNameLstIn360report().should('contain.text', this.report.student1).and('contain.text', this.report.student2)
  })

  it("Validate that user is able to view 360-degree report of the student that have dependency on the ELA evaluated for the class after each chapter/EL-4079/ES4079_04", function () {
    report.getPendingFlagLst().eq(0).should('be.visible').trigger('mouseover')
    cy.contains("1 ELA Pending").should('be.visible')
  })

  it("Validate that user is able to view the indiviual report of the student by clicking on 'View Report' button/EL-4079/ES4079_05", function () {
    report.getNameLstIn360report().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.report.student1)) {
        report.getViewReportLst().eq(index).click()
      }
    })
    report.getNameInReport().should('have.text', this.report.student1 + " " + this.report.student1Init)
    report.getClassSectInReport().should('contain.text', this.report.GradeDrpDwn)
    report.getDetailsInReport().should('be.visible')
  })

  it("Validate that user is able to view the  reports of Health report,My Grade, My Competency,Subject Performance/EL-4079/ES4079_06", function () {
    report.getSubContentsLstInReport().contains("Health Report").should('be.visible')
    report.getSubContentsLstInReport().contains("My Grades").should('be.visible')
    report.getSubContentsLstInReport().contains("My Competency").should('be.visible')
    report.getSubContentsLstInReport().contains("Subject Performance").should('be.visible')
    report.getSubContentsLstInReport().contains("My Yearly Performance").should('be.visible')
  })

  it("Validate that user is able to view all the student report for only his/her subject class/EL-4079/ES4079_07", function () {
    report.getClassSectInReport().should('contain.text', this.repo.StudentReport)
  })

  it("Validate that user should not find Preview & Print button to take the print of the Student Report/EL-4079/ES4079_08", function () {
    report.getPreviewAndPrintBtnInReport().should('be.visible').should('be.enabled')
  })

  it("Validate that user is able to navigate to My Yearly Performance tab under Reports Module/EL-4095/ES4095_01", function () {
    report.getSubContentsLstInReport().contains("My Yearly Performance").click()
    report.getMyEarlyPerformanceTitle().should('be.visible')
  })

  it("Validate that user is able to navigate to My Competency tab under Reports Module/EL-4097/ES4097_01", function () {
    report.getSubContentsLstInReport().contains("My Competency").click()
    report.getMyCompetencyModules().should('be.visible')
  })

  it("Validate that user is able to view “Competency” for the different(all) subject using the drop-down at the top right of the heading/EL-4097/ES4097_02", function () {
    report.getMyCompetencyRHSDrpDwn().should('be.visible').click()
    report.getMyCompetencyRHSDrpDwnLst().should('be.visible')
  })

  it("Validate that user is able to view “Competency” only for the subjects handled by him/her using the drop-down at the top right of the heading/EL-4098/ES4098_02", function () {
    report.getMyCompetencyRHSDrpDwnLst().should('contain.text', "Science").and('contain.text', "Social Science")
    report.getMyCompetencyRHSDrpDwnLst().contains("Social Science").click()
  })

  it("Validate that user is able to navigate to 'Health Report' tab under Reports Module/EL-4101/ES4101_01", function () {
    report.getSubContentsLstInReport().contains("Health Report").click()
    cy.wait(1000)
  })

  it("Validate that user is able to add the Health Report on clicking on '+Add Report' button/EL-4101/ES4101_02", function () {
    // report.getMyCompetencyAddReportsBtn().should('be.visible').click()
    report.getHealthAddReportBtn().click()
  })

  it("Validate that School type drop down value should auto-populates from the List/EL-4101/ES4101_04", function () {
    report.getAddReportSchlType().click()
    report.getGradeDrpDwnLstInReport().should('contain.text', "Primary School").and('contain.text', "Middle School").and('contain.text', "Secondary School")
    report.getGradeDrpDwnLstInReport().contains("Middle School").click()
    //report.getHealthReportAddedCloseIcn().click()
  })

  it("Validate that Grades  drop down value should auto-populates from the List/EL-4101/ES4101_05", function () {
    report.getAddReportGrade().click()
    report.getGradeDrpDwnLstInReport().contains("Grade").should('be.visible')
    report.getGradeDrpDwnLstInReport().contains("Grade 4").click()
    //report.getHealthReportAddedCloseIcn().click()
  })

  it("Validate that Height Text is accpecting Numberical Values upto 2 char/EL-4101/ES4101_08", function () {
    report.getAddReportWeightTxt().type(120)
    report.getAddReportHeightTxt().type(12.123456)
    report.getAddReportAddBtn().click()
    report.getErrorMsgInAddHealthReport().contains("Height must be a Number").should('be.visible')
    report.getHealthReportAddedCloseIcn().click()
  })

  // it("Validate that user is able to add the Health Report on clicking on '+Add Report' button/EL-4101/ES4101_02",function(){
  //   report.getGradeDrpDwnLstInReport().contains("Middle School").click()
  //   report.getAddReportGrade().click()
  //   report.getGradeDrpDwnLstInReport().contains("Grade 6").click()
  //   report.getAddReportWeightTxt().type(120)
  //   report.getAddReportHeightTxt().type(12)
  //   report.getAddReportAddBtn().click()
  // })

  it("Validate that user is able to view  Health report cards for the  “Primary School, Middle School, Secondary School/EL-4101/ES4101_03", function () {
    report.getAddedHealthReportLst().should('be.visible')
  })

  it("Validate that user is able to navigate to 'Subject Performance' tab under Reports Module/EL-4100/ES4100_01", function () {
    report.getSubContentsLstInReport().contains("Subject Performance").should('be.enabled').click()
  })

  it("Validate that User can view “Learning Outcome” and “Parameters” for different subject using the drop-down at the top right of the heading/EL-4100/ES4100_02", function () {
    report.getMyCompetencyRHSDrpDwn().should('be.visible').click()
    report.getMyCompetencyRHSDrpDwnLst().should('be.visible')
    report.getMyCompetencyRHSDrpDwnLst().should('contain.text', "Tamil").and('contain.text', "Science")
      .and('contain.text', "Social Science")
    report.getMyCompetencyRHSDrpDwnLst().contains("Social Science").click()
  })

  it("Validate that the Subject Performance includes 'Chapter','Topic','Learning Outcome','All Parameter' details/EL-4100/ES4100_03", function () {
    report.getSubPerformanceContentLst().should('contain.text', "Learning Outcomes").should('be.visible')
      .and('contain.text', "All Parameters").should('be.visible').and('contain.text', "topic").should('be.visible')
      .and('contain.text', "Chapter").should('be.visible')
  })

  //post-condition
  it("Delete the assigned ELA Card", function () {
    home.getMyclassLnk().click({ force: true })
    teacherELA.getMyClassSubName().contains(this.report.Grade).click({ force: true })
    teacherELA.getAssessmentTab().click()
    teacherELA.getAssignmentBtn().click({ force: true })
    teacherELA.getELACardLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.report.newELAName)) {
        teacherELA.getELACardLst().eq(index).click({ force: true })
      }
    })
    teacherELA.getELACardLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.report.newELAName)) {
        teacherELA.getDltBtnLstInELACard().eq(index).click()
      }
    })
    teacherELA.getDltELACardPopup().should('be.visible')
    teacherELA.getDltCnfrmBtnInELA().click()
  })

  it("Validate that 'My Yearly Performance' report should be generated for each student only when All ELA has been assigned to the student/EL-4095/ES4095_05", function () {
    home.getReportLnk().click({ force: true })
    cy.wait(4000)
    report.get360ReportLnk().click({force:true})
    cy.wait(5000)
    report.getGradeDrpDwnInReport().click()
    report.getGradeDrpDwnLstInReport().contains("Grade 3").click()
    cy.wait(2000)
    report.getNameLstIn360report().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes("beckam")) {
        report.getViewReportLst().eq(index).click()
      }
    })
    report.getSubContentsLstInReport().contains("My Yearly Performance").should('not.exist')
  })

  it("Validate that the calculation for Competency for the chapter=( sum of all the ranks scored in Competency by the student)/ (Total number of questions assigned to the student)/EL-4097/ES4097_05", function () {
    report.getMyCompetencyTabLnk().click()
    report.getMyCompetencyRHSDrpDwn().click()
    report.getMyCompetencyRHSDrpDwnLst().contains(this.report.Subject).click()
    report.getMyCompetencyRankTxt().should('have.text', "Competency  excellent")
  })

  it("Validate that under each chapter for the specific subject Learning Outcome, the statement will be pulled from evaluated ELA/EL-4100/ES4100_04", function () {
    report.getSubContentsLstInReport().contains("Subject Performance").click()
    report.getMyCompetencyRHSDrpDwn().click()
    report.getMyCompetencyRHSDrpDwnLst().contains(this.report.Subject).click()
    report.getSubPerformanceRanktxt().eq(1).should('have.text', "domain good")
  })
})