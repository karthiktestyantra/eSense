import Admin360ReportPage from "../../../support/pageObjects/LMS-2/Admin360ReportPage";
import AdminHomePage from "../../../support/pageObjects/LMS-2/AdminHomePage";

const home = new AdminHomePage();
const report = new Admin360ReportPage();

describe("Verify Domain Mapping functionalities", function () {
  before(function () {
    cy.visit(Cypress.env("urlQAPreSetup"))
    cy.fixture("LMS/AdminLoginCredentials").then(function (validAdminLoginData) {
      cy.AdminPostSetup(validAdminLoginData.fNew, validAdminLoginData.password)
    })
  })
  beforeEach(function () {
    cy.fixture("LMS/Admin360Report").then(function (report) {
      this.report = report;
    })
  })

  //pre-condition
  it("Validate whether report page is displayed with 'Search Box', 'Check Box', 'ROLL NUMBER', 'FIRST NAME', 'LAST NAME', 'LAST ACTIVE', 'REPORTS'/EL-4124ELS4124_1", function () {
    home.getReportLnk().click({ force: true })
    report.get360ReportLnk().click()
    report.get360ReportContents().should('contain.text', "ROLL NO").and('contain.text', "FULL NAME").
      and('contain.text', "LAST ACTIVE").and('contain.text', "REPORTS")
  })

  it("Validate whether user is able to select the grade and section to view the report/EL-4124/ELS4124_2", function () {
    report.getGradeDrpDwn().should('be.visible')
    report.getSectionDrpDwn().should('be.visible')
  })

  it("Validate whether list of students are displayed as per drop down selection/EL-4124/ELS4124_3", function () {
    report.getGradeDrpDwn().click()
    report.getGradeDrpDwnLst().contains(this.report.NothingGrade).click()
    report.getSectionDrpDwn().click()
    report.getSectionDrpDwnLst().contains(this.report.ProperSection).click()
    report.getFrstNameLst().should('not.exist')
    report.getGradeDrpDwn().click()
    report.getGradeDrpDwnLst().contains(this.report.ProperGrade).click()
    report.getSectionDrpDwn().click()
    report.getSectionDrpDwnLst().contains(this.report.ProperSection).click()
    report.getFrstNameLst().should('be.visible')
  })
  //Added An extra grade for running purpose

  it("Validate whether user is able to search a name using “Search” bar/EL-4124/ELS4124_4", function () {
    report.getSearchStudentSearchBar().type(this.report.Student1FrstName)
    report.getFrstNameLst().should('have.text', this.report.Student1FrstName)
  })
  //created a new student in same grade and section

  it("Validate user selects the check box in the 1st column all the students checkbox are selected except the student those have flag raised in front of their name/EL-4124/ELS4124_5", function () {
    report.getSearchStudentSearchBar().clear()
    report.getCheckbxLst().eq(0).check()
    report.getFrstNameLst().each(($e1, index, $list) => {
      const txt = $e1.text()
      if (txt === this.report.Student1FrstName) {
        report.getCheckbxLst().eq(index + 1).should('be.checked')
      }
    })
  })
  //Mention one student as absentee in teacher account and here it mentioned as flag

  it("Validate user selects some check box ' Upload CSV' button, the 'generate Report' and 'Download Report' button should be enabled/EL-4124/ELS4124_6", function () {
    report.getUploadCSVBtn().should('be.visible').and('be.enabled')
    report.getDwnldReportBtn().should('be.visible').and('be.enabled')
    report.getGenerateReportBtn().should('be.visible').and('be.enabled')
  })

  it("Validate user clicks on 'Cancel' button./EL-4124/ELS4124_9,ELS4124_10_2", function () {
    report.getGenerateReportBtn().click()
    report.getCancelReportBtnInGenerateReportPopup().should('be.visible').click()
    report.get360ReportPageTitle().should('be.visible')
  })

  it("Validate user clicks on 'Generate' button/EL-4124/ELS4124_9,ELS4124_10", function () {
    report.getGenerateReportBtn().click()
    report.getGenerateBtnInGenerateReportPopup().should('be.visible').click()
    cy.contains("Report generated successfully").should('be.visible')
    report.getReportGenerateSuccessPopupCloseIcon().click()
  })
})