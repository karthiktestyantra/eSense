const adminHomePage = require("../../../support/pageObjects/LMS-2/AdminHomePage")
const admin360ReportPage = require("../../../support/pageObjects/LMS-2/Admin360ReportPage")

describe("Verify Domain Mapping functionalities", function () {

  before(function () {
    cy.visit(Cypress.env("urlQAPreSetup"))
    cy.fixture("LMS/AdminLoginCredentials").then(function (validAdminLoginData) {
      cy.AdminPostSetup(validAdminLoginData.fNew, validAdminLoginData.password)
    })
  })

  beforeEach(function () {
    cy.fixture("LMS/Admin360Report").as("report")
  })

  //pre-condition
  it("Validate whether report page is displayed with 'Search Box', 'Check Box', 'ROLL NUMBER', 'FIRST NAME', 'LAST NAME', 'LAST ACTIVE', 'REPORTS'/EL-4124ELS4124_1", function () {
    adminHomePage.clickOnReportLnk()
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
    admin360ReportPage.getSearchStudentSearchBar().type(this.report.Student1FrstName)
    admin360ReportPage.getFrstNameLst().should('have.text', this.report.Student1FrstName)
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
    admin360ReportPage.get360reporttTableLst().eq(2).should('have.text', this.report.Student1FrstName)
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

  it("")

  })