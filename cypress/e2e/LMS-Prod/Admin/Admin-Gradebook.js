const adminPostSetupHomePage = require("../../../support/pageObjects/LMS-2/AdminPostSetupHomePage")
const adminStudentGradebookPage = require("../../../support/pageObjects/LMS-2/AdminStudentGradebookPage")
const adminGradeBookPage = require("../../../support/pageObjects/LMS-2/AdminGradeBookPage")
const adminGradebookPageNew = require("../../../support/pageObjects/LMS-2/AdminGradebookPageNew")

describe("Sprint 19(EL-5490,EL-5492) - Verify Admin student grade book functionalities", function () {

  before(function () {
    cy.visit(Cypress.env('urlProd'))
    cy.fixture('LMS/validAdminLoginCredentials').then(function (validAdminLoginData) {
      cy.AdminPostSetup(validAdminLoginData.prodUserName, validAdminLoginData.password)
    })
  })

  beforeEach(function () {
    cy.fixture("LMS/AdminReports").as("report")
  })


  it("To validate that “Bulk Upload Score button is provided in gradebook listing page/EL-5490/ES5490_01", function () {
    adminStudentGradebookPage.getHarSideMenuAdminReportImg().click()
    cy.wait(1000)
    adminStudentGradebookPage.getHarStudentGradeBookBtn().click({ force: true })
    adminStudentGradebookPage.getHarGradeBookTab().click()
    adminStudentGradebookPage.getHarGradeFilterDropdown().eq(0).click()
    cy.wait(1000)
    adminStudentGradebookPage.getHarGradeFilterDropdownValues().contains('Grade 4').click({ force: true })
    cy.wait(1000)
    adminStudentGradebookPage.getHarSectionFilterDropdown().click()
    cy.wait(1000)
    adminStudentGradebookPage.getHarSectionFilterDropdownValues().contains('A').click({ force: true })
    adminStudentGradebookPage.getHarGradeBookStudentName().each(($e1, index, $list) => {
      const gradeStdName = $e1.text()
      if (gradeStdName.includes('Mahesh')) {
        adminStudentGradebookPage.getHarGradeBookStudentNameCheckBx().eq(index).click()
      }

    })

    adminStudentGradebookPage.getHarBulkUploadScore().should('be.visible')

  })

  it("To validate that when user click on Bulk Upload Score” button a pop-up is displayed to the user/EL-5490/ES5490_02", function () {
    adminStudentGradebookPage.getHarBulkUploadScore().click()
    adminStudentGradebookPage.getHarBulkUploadPopupTitle().should('have.text', 'Upload Student Grades in bulk')
  })

  it("To validate that when user click on “Download Sample File” link the template with the student's list and test type is downloaded to the users local system/EL-5490/ES5490_03", function () {
    adminStudentGradebookPage.getHarDownloadsamplefile().should('be.visible')
  })

  it("To validate that when user click on Select file from computer” button user is able browse from their local system and upload the file/EL-5490/ES5490_05", function () {
    adminStudentGradebookPage.getHarAttachsamplefile().attachFile('LMS/Report_recent.xlsx')
    adminStudentGradebookPage.getHarAttachsamplefileDeleteBtn().should('be.visible')

  })

  it("To validate that user is able to view the file uploading status/EL-5490/ES5490_06", function () {

    adminStudentGradebookPage.getHarsamplefileImportBtn().should('have.text', 'Import 1 Student Grades').click()
    cy.wait(3000)
    adminStudentGradebookPage.getHarsamplefileSuccessMes().should('be.visible')
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })

  })

  it("To validate that when user click on “Import Grades” button, details is updated in the respective gradebook of the students of the respective class/EL-5490/ES5490_10", function () {
    adminStudentGradebookPage.getHarGradeBookStudentName().each(($e1, index, $list) => {
      const gradeStdName = $e1.text()
      if (gradeStdName.includes('Mahesh')) {
        adminStudentGradebookPage.getHarGradeBookStudentView().eq(index).click()
      }

    })

    adminStudentGradebookPage.getHarGradeBookStudentTableSub().each(($e1, index, $list) => {
      const tableSubName = $e1.text()
      if (tableSubName.includes('Social Science')) {
        adminStudentGradebookPage.getHarGradeBookStudentTableTheoryMark().eq(index).should('have.value', '20')
        return false;
      }
    })
  })

  it("To validate that while importing if there is any mismatch in the input fields the error screen is displayed to the user/EL-5490/ES5490_12", function () {
    adminStudentGradebookPage.getHarGoBackBtn().click()
    adminStudentGradebookPage.getHarGradeFilterDropdown().eq(0).click()
    cy.wait(1000)
    adminStudentGradebookPage.getHarGradeFilterDropdownValues().contains('Grade 4').click({ force: true })
    cy.wait(1000)
    adminStudentGradebookPage.getHarSectionFilterDropdown().click()
    adminStudentGradebookPage.getHarSectionFilterDropdownValues().contains('A').click({ force: true })
    adminStudentGradebookPage.getHarGradeBookStudentName().each(($e1, index, $list) => {
      const gradeStdName = $e1.text()
      if (gradeStdName.includes('Mahesh')) {
        adminStudentGradebookPage.getHarGradeBookStudentNameCheckBx().eq(index).click()
      }

    })

    adminStudentGradebookPage.getHarBulkUploadScore().click()
    adminStudentGradebookPage.getHarAttachsamplefile().attachFile('LMS/ErrorReport.xlsx')
    adminStudentGradebookPage.getHarsamplefileImportBtn().click()
    cy.wait(1000)
    adminStudentGradebookPage.getErrorImportPopup().should('have.text', 'There seems to be a problem.')
  })

  it("To validate that User can Re-update the file by clicking on Re-upload button/EL-5490/ES5490_13", function () {
    adminStudentGradebookPage.getErrorImportPopupReuploadBtn().should('be.visible')
  })

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////


  it("Validate that  when user clicks on reports module,pop-appears and contains student Gradebook/EL-5492/ES5492_01", function () {
    cy.clearLocalStorage()
    cy.visit(Cypress.env("urlMain"))
    cy.fixture("LMS/AdminLoginCredentials").then(function (validAdminLoginData) {
      cy.AdminPostSetup(validAdminLoginData.newUsername, validAdminLoginData.password)
    })
    adminPostSetupHomePage.getReportsSectionLnk().click({ force: true })
    cy.wait(1500)
    adminStudentGradebookPage.getSiStudentGradebookLnk().should('be.visible')
  })

  it("Validate that when user clicks on the Reports ,user is able to see only Studet Gardebook and Student 360 Report/EL-6082/ES6082_02", function () {
    adminStudentGradebookPage.getSi360reportLnk().should('be.visible')
  })

  it("Validate that when user clicks on the Reports any another reports opened/EL-6082/ES6082_03", function () {
    adminStudentGradebookPage.getSiStudentGradebookLnk().click({ force: true })
    adminStudentGradebookPage.getSiGradebookPageTitle().should('have.text', "Student Gradebook")
  })

  it("Validate that when user clicks on  students gradebooks, Students list is displayed/EL-5492/ES5492_02", function () {
    adminStudentGradebookPage.getSiGradebookTabLnk().click()
    adminStudentGradebookPage.getSiStudentsLstInGradebookPage().should('have.length.above', 0).and('be.visible')
  })

  it("Validate that  user able to select student and edit scores of student under gradebooks tab/EL-5492/ES5492_03", function () {
    adminStudentGradebookPage.getSiViewIconsLstInGradebookPage().eq(0).click()
    adminStudentGradebookPage.getSiEditBtnInViewGradebookpage().should('be.enabled').click()
    adminStudentGradebookPage.getSiScoresTxtBxLst().eq(0).should('be.enabled')
  })

  it("Validate that  user not  able to select student and edit scores of student under gradebooks tab when template is not created/EL-5492/ES5492_04", function () {
    adminStudentGradebookPage.getSiGobackBtn().dblclick()
    adminStudentGradebookPage.getSiGradeDrpdwnInGradebookPage().click()
    adminStudentGradebookPage.getSiGradesLstInGradeDrpDwnPage().contains(this.report.Grade).click()
    cy.contains("No Data Found!").should('be.visible')
  })

  it("Validate that user is able to handle all the drop downs like  Grade drop down,Section drop down,All terms dropdown/EL-5492/ES5492_05", function () {
    adminStudentGradebookPage.getSiGradeDrpdwnInGradebookPage().dblclick()
    adminStudentGradebookPage.getSiSectionDrpdwnInGradebookPage().dblclick()
    adminStudentGradebookPage.getSiAllTermsDrpdwnInGradebookPage().dblclick()
  })

  it("Validate that user is able to see the students list is  displaying as per the dropdown selection under Gradebook tab/EL-5492/ES5492_06", function () {
    adminStudentGradebookPage.getSiGradeDrpdwnInGradebookPage().click()
    adminStudentGradebookPage.getSiGradesLstInGradeDrpDwnPage().contains(this.report.GradeManual).click()
    adminStudentGradebookPage.getSiFirstNameLstInGradebookPage().should('contain.text', this.report.FirstName)
  })

  it("Validate  that when user clicks on Roll No checkbox BULK UPLOAD SCORE button  is enabled/EL-5492/ES5492_07", function () {
    adminStudentGradebookPage.getSiRollNoCheckBx().check()
    adminStudentGradebookPage.getBulkUploadScoreBtnInGradebookPage().should('be.enabled')
    adminStudentGradebookPage.getSiRollNoCheckBx().uncheck()
  })

  it("Validate that when user clicks on particular Roll no checkbox other check boxes not selected/EL-5492/ES5492_08", function () {
    adminStudentGradebookPage.getSiStudentsCheckBxslst().eq(1).check()
    adminStudentGradebookPage.getSiStudentsCheckBxslst().eq(2).should('not.be.checked')
    adminStudentGradebookPage.getSiStudentsCheckBxslst().eq(0).should('not.be.checked')
  })

})

