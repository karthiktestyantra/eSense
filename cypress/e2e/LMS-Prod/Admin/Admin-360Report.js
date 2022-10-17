const adminHomePage = require("../../../support/pageObjects/LMS-2/AdminHomePage")
const admin360ReportPage = require("../../../support/pageObjects/LMS-2/Admin360ReportPage")
const Adminlogin = require('../../../support/pageObjects/LMS-2/AdminIndexPage')

describe("Verify 360 Report functionalities - Sprint 20(EL-4124,EL-4092)", function () {

  before(function () {
    cy.visit(Cypress.env('urlProd'))
    Adminlogin.getAdminBtn().click()
    cy.fixture("LMS/validAdminLoginCredentials").then(function (validAdminLoginData) {
      this.validAdminLoginData = validAdminLoginData;
      cy.login(this.validAdminLoginData.prodUserName, this.validAdminLoginData.password)
    });
  });

  beforeEach(function () {
    cy.fixture("LMS/Admin360Report").as("report")
  })

  //pre-condition
  it("Validate whether report page is displayed with 'Search Box', 'Check Box', 'ROLL NUMBER', 'FIRST NAME', 'LAST NAME', 'LAST ACTIVE', 'REPORTS'/EL-4124/ELS4124_1", function () {
    for (var i = 1; i <= 3; i++) {
      cy.get('button.MuiButton-root').contains('Continue').click()
      cy.wait(2000)
    }
    for (var i = 1; i <= 2; i++) {
      cy.get('.continue-btn').click()
    }
    adminHomePage.clickOnReportLnk()
    cy.wait(1000)
    admin360ReportPage.clickOn360ReportLnk()
    admin360ReportPage.verify360ReportContents()
  })

  it("Validate whether user is able to select the grade and section to view the report/EL-4124/ELS4124_2", function () {
    admin360ReportPage.verifyGradeDropDownIsVisible()
    admin360ReportPage.verifySectionDropDownIsVisible()
  })

  it("Validate whether list of students are displayed as per drop down selection/EL-4124/ELS4124_3", function () {
    admin360ReportPage.clickOnGradeDrpDwn()
    admin360ReportPage.getGradeDrpDwnLst().contains(this.report.NothingGrade).click()
    admin360ReportPage.getSectionDrpDwn().click()
    admin360ReportPage.getSectionDrpDwnLst().contains(this.report.ProperSection).click()
    admin360ReportPage.getFrstNameLst().should('not.exist')
    admin360ReportPage.getGradeDrpDwn().click()
    admin360ReportPage.getGradeDrpDwnLst().contains(this.report.ProperGrade).click()
    admin360ReportPage.getSectionDrpDwn().click()
    admin360ReportPage.getSectionDrpDwnLst().contains(this.report.ProperSection).click()
    admin360ReportPage.getFrstNameLst().should('be.visible')
  })
  //Added An extra grade for running purpose

  it("Validate whether user is able to search a name using “Search” bar/EL-4124/ELS4124_4", function () {
    admin360ReportPage.getSearchStudentSearchBar().type(this.report.Student1FrstNameProd)
    admin360ReportPage.getFrstNameLst().should('have.text', this.report.Student1FrstNameProd)
  })
  //created a new student in same grade and section

  it("Validate user selects the check box in the 1st column all the students checkbox are selected except the student those have flag raised in front of their name/EL-4124/ELS4124_5", function () {
    admin360ReportPage.getSearchStudentSearchBar().clear()
    admin360ReportPage.getCheckbxLst().eq(0).check()
    admin360ReportPage.getFrstNameLst().each(($e1, index, $list) => {
      const txt = $e1.text()
      if (txt === this.report.Student1FrstName) {
        admin360ReportPage.getCheckbxLst().eq(index + 1).should('be.checked')
      }
    })
  })
  //Mention one student as absentee in teacher account and here it mentioned as flag

  it("Validate user selects some check box ' Upload CSV' button, the 'generate Report' and 'Download Report' button should be enabled/EL-4124/ELS4124_6", function () {
    admin360ReportPage.getUploadCSVBtn().should('be.visible').and('be.enabled')
    admin360ReportPage.getDwnldReportBtn().should('be.visible').and('be.enabled')
    admin360ReportPage.getGenerateReportBtn().should('be.visible').and('be.enabled')
  })

  it("Validate user clicks on 'Cancel' button./EL-4124/ELS4124_9,ELS4124_10_2", function () {
    admin360ReportPage.getGenerateReportBtn().click()
    admin360ReportPage.getCancelReportBtnInGenerateReportPopup().should('be.visible').click()
    admin360ReportPage.get360ReportPageTitle().should('be.visible')
  })

  it("Validate user clicks on 'Generate' button/EL-4124/ELS4124_9,ELS4124_10", function () {
    admin360ReportPage.getGenerateReportBtn().click()
    admin360ReportPage.getGenerateBtnInGenerateReportPopup().should('be.visible').click()
    cy.contains("Report generated successfully").should('be.visible')
    admin360ReportPage.getReportGenerateSuccessPopupCloseIcon().click()
  })

  it("Validate user clicks on the bulk, the student with the flag option is not selected/EL-4124/ELS4124_10", function () {
    admin360ReportPage.getDisableCheckBxForFlagImg().should('not.be.checked')
  })

  //23-9
  it("EL-4124/ELS4124_12 Validate each column “Roll No” of student, next column is having student “Profile picture”, then next column “First Name”, next column “Last Name”, next column “Last Active”, and at last “View reports”", function () {
    admin360ReportPage.get360reporttTableLst().eq(1).should('have.text', this.report.Student1RollNo)
    admin360ReportPage.get360reporttTableLst().eq(2).should('have.text', this.report.FirstStudentName)
    admin360ReportPage.get360reporttTableLst().eq(3).should('be.visible')
    admin360ReportPage.get360reporttTableLst().eq(4).should('be.visible')
  })

  it("EL-4124/ELS4124_13 Validate user clicks on “View reports” user is able to see the individual report of the student", function () {
    admin360ReportPage.getFrstNameLst().each(($e1, index, $list) => {
      const txt = $e1.text()
      if (txt === this.report.Student1FrstName) {
        admin360ReportPage.getViewReportsLst().eq(index).click()
      }
    })
    admin360ReportPage.getReportPageTitle().should('have.text', this.report.ReportPageTitleForStudent1)
  })

  it("EL-4124/ELS4124_15 Validate user clicks on “Preview & Print” button, tags such as “Excellent”,” Good”, “Satisfactory”, “Can do better” should be removed in the Report Card Page", function () {
    admin360ReportPage.getPreviewAndPrintBtnInReportPageTitle().click()
    cy.contains("Excellent").should('not.exist')
    cy.contains("Good").should('not.exist')
    cy.contains("Satisfactory").should('not.exist')
    cy.contains("Can do Better").should('not.exist')
  })

  it("EL-4124/ELS4124_16 Validate whether user is able to toggle between different tabs by clicking on the heading of the tabs in the 360 degree reports", function () {
    admin360ReportPage.getGoBackBtn().click()
    admin360ReportPage.get360ReportMajorTabs().eq(0).should('have.text', "Health Report")
    admin360ReportPage.get360ReportMajorTabs().eq(1).should('have.text', "My Grades")
    admin360ReportPage.get360ReportMajorTabs().eq(2).should('have.text', "My Competency")
    admin360ReportPage.get360ReportMajorTabs().eq(3).should('have.text', "Subject Performance")
    admin360ReportPage.get360ReportMajorTabs().eq(4).should('have.text', "My Yearly Performance")
  })

  it("EL-4124/ELS4124_18 Validate whether Student basic details is visible for the “School Admin”", function () {
    adminHomePage.getUsersLnk().click({ force: true })
    admin360ReportPage.getStudentsTabInUsersPage().click()
    admin360ReportPage.getMajorHeadTabInUsersPage().should('contain.text', "Name & Admission No").and('contain.text', "class").and('contain.text', "Class teacher")
      .and('contain.text', "ACTIONS")
  })

  it("EL-4124/ELS4124_18 Validate data is getting populated as soon as teacher has uploaded the ELA scorers", function () {
    adminHomePage.clickOnReportLnk()
    admin360ReportPage.clickOn360ReportLnk()
    admin360ReportPage.clickOnGradeDrpDwn()
    admin360ReportPage.getGradeDrpDwnLst().contains(this.report.ProperGrade).click()
    admin360ReportPage.getSectionDrpDwn().click()
    admin360ReportPage.getSectionDrpDwnLst().contains(this.report.ProperSection).click()
    admin360ReportPage.getFrstNameLst().each(($e1, index, $list) => {
      const txt = $e1.text()
      if (txt === this.report.Student1FrstName) {
        admin360ReportPage.getViewReportsLst().eq(index).click()
      }
    })
    admin360ReportPage.getPreviewAndPrintBtnInReportPageTitle().click()
    admin360ReportPage.getScoresDataInPreviewAndPrintPage().should('be.visible')
  })

  it("EL-4092/ELS4093_1 Validate user clicks on the tab “My Grade”, user is able to view “My Grade” read only tab", function () {
    admin360ReportPage.getGoBackBtn().click()
    admin360ReportPage.get360ReportMajorTabs().contains("My Grades").click()
    admin360ReportPage.getMyGradesPageContents().should('contain.text', "Hindi III").and('contain.text', "English III").should('be.visible')
  })

  it("EL-4092/ELS4093_2 Validate whether 'My Grade' tab is displaying Subject name, Subject Teacher profile picture, Name of subject teacher", function () {
    admin360ReportPage.getMyGradeTeacherProfilePicLst().should('be.visible')
    admin360ReportPage.getMyGradeTeacherNameLst().each(($e1, index, $list) => {
      admin360ReportPage.getMyGradeTeacherNameLst().eq(index).should('have.text', "ronaldo")
    })
  })

  it("EL-4092/ELS4093_3 Validate whether 'My Grade' tab is displaying 'Student score', 'Total marks' of the assessment and 'Assessment name'", function () {
    admin360ReportPage.getAssessmentNameForStudentInMyGradePage().eq(0).should('contain.text', "Annual examination")
    admin360ReportPage.getAssessmentNameForStudentInMyGradePage().eq(1).should('contain.text', "Marks Obtained")
    admin360ReportPage.getAssessmentNameForStudentInMyGradePage().eq(2).should('contain.text', "GRADE")
  })

  //Pre-Condition
  //1.need a grade without students
  //2.for pele only pending flag should display

})
