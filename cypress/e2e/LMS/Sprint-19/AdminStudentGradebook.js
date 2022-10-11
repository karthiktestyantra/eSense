const adminPostSetupHomePage = require("../../../support/pageObjects/LMS-2/AdminPostSetupHomePage")
const adminStudentGradebookPage = require("../../../support/pageObjects/LMS-2/AdminStudentGradebookPage")

describe("Verify Admin student grade book functionalities", function () {

  before(function () {
    cy.visit(Cypress.env("urlMain"))
    cy.fixture("LMS/AdminLoginCredentials").then(function (validAdminLoginData) {
      cy.AdminPostSetup(validAdminLoginData.newUsername, validAdminLoginData.password)
    })
  })

  beforeEach(function () {
    cy.fixture("LMS/AdminReports").as("report")
  })

  //pre-condition

  it("Validate that  when user clicks on reports module,pop-appears and contains student Gradebook/EL-5492ES5492_01", function () {
    adminPostSetupHomePage.getReportsSectionLnk().click({ force: true })
    adminStudentGradebookPage.getSiStudentGradebookLnk().should('be.visible')
  })

  it("Validate that when user clicks on the Reports ,user is able to see only Studet Gardebook and Student 360 Report/EL-6082/ES6082_02", function () {
    adminStudentGradebookPage.getSi360reportLnk().should('be.visible')
  })

  it("Validate that when user clicks on the Reports any another reports opened/EL-6082/ES6082_03", function () {
    adminStudentGradebookPage.getSiStudentGradebookLnk().click({force:true})
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

  //  it("Validate that user is able to see the students list in ascending or descending order by clicking arrow icon in any one(First name, Last Name,status ,rollno,test score)/EL-5492/ES5492_09",function(){
  //   cy.get('tbody td.MuiTableCell-alignCenter:nth-child(4)').should(function($trs) {
  //     var arrayOftd = $trs.map(function (i, tr) {
  //       return Cypress.$(tr).find('td').eq(3).text() 
  //     })
  //     var test = arrayOftd.sort()          
  //     expect(arrayOftd).should('be.lte',test)
  //   })
  //   })

  it("Validate that user  able to preview and print a Student Gradebook/EL-5493/ES5493_01", function () {
    adminStudentGradebookPage.getSiRollNoCheckBx().uncheck()
    adminStudentGradebookPage.getSiFirstNameLstInGradebookPage().each(($e1, index, $list) => {
      const txt = $e1.text()
      if (txt === this.report.FullName) {
        adminStudentGradebookPage.getSiViewArrowIcnLstInGradebook().eq(index).click()
      }
    })
    adminStudentGradebookPage.getSiPrintAndPreviewBtn().should('be.visible').and('be.enabled')
  })

  it("Validate that user able to handle all the dropdowns,buttons and print Student Gradebook/EL-5493/ES5493_02", function () {
    adminStudentGradebookPage.getSiButtonLstInViewGradebookPage().each(($e1, index, $list) => {
      cy.wrap($e1).should('be.visible').should('be.enabled')
    })
  })

  it("Validate that user able to update student's scores in bulk so that the performance of all the students can be calculated/EL-5490/ES5490_01", function () {
    adminStudentGradebookPage.getSiGobackBtn().dblclick()
    cy.wait(2000)
    adminStudentGradebookPage.getSiRollNoCheckBx().check()
    adminStudentGradebookPage.getSiGradeDrpdwnInGradebookPage().click()
    adminStudentGradebookPage.getSiGradesLstInGradeDrpDwnPage().contains(this.report.GradeManual).click()
    adminStudentGradebookPage.getSiSectionDrpdwnInGradebookPage().click()
    cy.wait(1000)
    adminStudentGradebookPage.getSiGradesLstInGradeDrpDwnPage().contains("A").click()
    adminStudentGradebookPage.getBulkUploadScoreBtnInGradebookPage().click()
    adminStudentGradebookPage.getSelectFileFrmComputerBtn().click()
    adminStudentGradebookPage.getSiAttachsamplefile().attachFile('LMS/Report_Gradebooktemplate.xlsx')
    adminStudentGradebookPage.getSisamplefileImportBtn().should('have.text', 'Import 1 Student Grades').click()
    cy.contains("Student Grades Imported successfully").should('be.visible')
    adminStudentGradebookPage.getSiFirstNameLstInGradebookPage().each(($e1, index, $list) => {
      const txt = $e1.text()
      if (txt === this.report.FullName) {
        adminStudentGradebookPage.getSiViewArrowIcnLstInGradebook().eq(index).click()
      }
    })
    cy.wait(1000)
    adminStudentGradebookPage.getSiScoresTxtBxLst().eq(2).invoke('attr', 'value').should('eq', '10')
    adminStudentGradebookPage.getSiScoresTxtBxLst().eq(3).invoke('attr', 'value').should('eq', '10')
  })

  it("Validate that user able to upadate few students scores in bulk so that the performance  of selected students can be calcualted/EL-5490/ES5490_02", function () {
    adminStudentGradebookPage.getSiGobackBtn().dblclick()
    cy.wait(2000)
    adminStudentGradebookPage.getSiRollNoCheckBx().check()
    adminStudentGradebookPage.getSiGradeDrpdwnInGradebookPage().click()
    adminStudentGradebookPage.getSiGradesLstInGradeDrpDwnPage().contains(this.report.GradeManual).click()
    adminStudentGradebookPage.getSiSectionDrpdwnInGradebookPage().click()
    cy.wait(1000)
    adminStudentGradebookPage.getSiGradesLstInGradeDrpDwnPage().contains("A").click()
    adminStudentGradebookPage.getBulkUploadScoreBtnInGradebookPage().click()
    adminStudentGradebookPage.getSelectFileFrmComputerBtn().click()
    adminStudentGradebookPage.getSiAttachsamplefile().attachFile('LMS/Report_Gradebooktemplate.xlsx')
    adminStudentGradebookPage.getSisamplefileImportBtn().should('have.text', 'Import 1 Student Grades').click()
    cy.contains("Student Grades Imported successfully").should('be.visible')
    adminStudentGradebookPage.getSiFirstNameLstInGradebookPage().each(($e1, index, $list) => {
      const txt = $e1.text()
      if (txt === this.report.FullName2) {
        adminStudentGradebookPage.getSiViewArrowIcnLstInGradebook().eq(index).click()
      }
    })
    cy.wait(1000)
    adminStudentGradebookPage.getSiScoresTxtBxLst().eq(2).invoke('attr', 'value').should('eq', '10')
    adminStudentGradebookPage.getSiScoresTxtBxLst().eq(3).invoke('attr', 'value').should('eq', '10')
  })
})