const adminPostSetupHomePage = require("../../../support/pageObjects/LMS-2/AdminPostSetupHomePage")
const adminGradebookPageNew = require("../../../support/pageObjects/LMS-2/AdminGradebookPageNew")

describe("Verify Admin student grade book Page functionalities - Sprint 18(EL-5489)", function () {

  before(function () {
    cy.clearLocalStorage()
    cy.visit(Cypress.env("urlMain"))
    cy.fixture("LMS/AdminLoginCredentials").then(function (validAdminLoginData) {
      cy.AdminPostSetup(validAdminLoginData.newUsername, validAdminLoginData.password)
    })
  })

  beforeEach(function () {
    cy.fixture("LMS/AdminReports").as("report")
  })

  //pre-condition
  it("To validate user on clicking view('>') icon redirecting to respective student's adminGradebookPageNew./EL-5489/ES5489-01", function () {
    adminPostSetupHomePage.getReportsSectionLnk().click({ force: true })
    cy.wait(2000)
    adminGradebookPageNew.getSiStudentGradebookLnk().click({force:true})
    adminGradebookPageNew.getSiTemplateTabInTemplate().click()
    adminGradebookPageNew.getSiGradeDrpDwnInCreateTemplate().click()
    cy.wait(2000)
    adminGradebookPageNew.getSiDrpDwnLstInGradebook().contains(this.report.GradeManual).click()
    cy.wait(1000)
    adminGradebookPageNew.getSiFirstNameLstInGradebook().each(($e1, index, $list) => {
      const txt = $e1.text()
      if (txt === this.report.FullName) {
        adminGradebookPageNew.getSiViewArrowIcnLstInGradebook().eq(index).click()
      }
    })
    adminGradebookPageNew.getSiTitleInGradeBookPage().should('have.text', this.report.FirstName+" Gradebook")
  })

  it("To validate user on clicking edit option permission is enabled for scholastic, co-scholastic,remarks fields to edit/EL-5489/ES5489-02", function () {
    adminGradebookPageNew.getSiEditBtnInViewPageInGradebook().click()
    adminGradebookPageNew.getSiRemarksfldInViewPageInGradebook().should('be.enabled')
    adminGradebookPageNew.getSiScholosticsMarksfldLst().each(($e1, index, $list) => {
      cy.wrap($e1).eq(index).click()
      return false;
    })
  })

  it("To validate whether system is allowing subject teacher to add the scores for a subject  without any assigned teacher/EL-5489/ES5489-03", function () {
    adminGradebookPageNew.getSiScholosticsMarksfldLst().eq(0).click().type(10)
    adminGradebookPageNew.getSiScholosticsMarksfldLst().eq(1).click().type(10)
    cy.contains("Please enter the value under 0").should('not.exist')
  })

  it("To validate teacher able to edit the scores the student/EL-5489/ES5489-04", function () {
    adminGradebookPageNew.getSiScholosticsMarksfldLst().eq(6).click().type(10)
    adminGradebookPageNew.getSiScholosticsMarksfldLst().eq(7).click().type(10)
    cy.contains("Practical Mark not applicable for the Test Type").should('be.visible')
  })

  it("To validate user able to add score for the templates for which practical and theory score not added while creating template/EL-5489/ES5489-06", function () {
    for (var i = 0; i <= 9; i++) {
      adminGradebookPageNew.getSiScholosticsMarksfldLst().eq(i).clear().type(10)
    }
  })

  it("To valdiate system  allowing only to enter numeric values to update scores/EL-5489/ES5489-07", function () {
    adminGradebookPageNew.getSiScholosticsMarksfldLst().eq(0).type("AA")
  })

  it("To validate Marks obtained and grades be auto populated based on the scores added against each test/EL-5489/ES5489-08", function () {
    let txt = "A"
    adminGradebookPageNew.getSiActivitiesTermTxtBx().eq(0).type('{backspace}')
    adminGradebookPageNew.getSiActivitiesTermTxtBx().eq(0).click().type(5)
    adminGradebookPageNew.getSiActivitiesTermTxtBx().eq(1).type('{backspace}')
    adminGradebookPageNew.getSiActivitiesTermTxtBx().eq(1).click().type(5)
    adminGradebookPageNew.getSiCoScholosticGradeTxtBx().should('have.text', txt)
  })

  it("To validate marks obtained is equal to the Period test, Notebook, Subject enrichment, Half yearly/EL-5489/ES5489-09", function () {
    adminGradebookPageNew.getSiPeriodicTestTerm1().should('contain.text', 20)
    adminGradebookPageNew.getSiPeriodicTestTerm2().should('contain.text', 100)
  })

  it("To validate The score exceeding the limit for the test type set/EL-5489/ES5489-10", function () {
    adminGradebookPageNew.getSiScholosticsMarksfldLst().eq(0).type('{backspace}')
    adminGradebookPageNew.getSiScholosticsMarksfldLst().eq(0).type(0)
    adminGradebookPageNew.getSiScholosticsMarksfldLst().eq(1).type('{backspace}')
    adminGradebookPageNew.getSiScholosticsMarksfldLst().eq(1).type(2)
  })

  it("To validate Error message  shown if the entered marks is greater than the test mark assigned for the test/EL-5489/ES5489-11", function () {
    cy.contains("Please enter the value not more then 10").should('be.visible')
  })

  it("To validate Based on marks grades are auto populating/EL-5489/ES5489-12", function () {
    adminGradebookPageNew.getSiSaveBtnInEditGradebookPage().click()
    cy.wait(1000)
    adminGradebookPageNew.getSiFirstNameLstInGradebook().each(($e1, index, $list) => {
      const txt = $e1.text()
      if (txt === this.report.FullName) {
        adminGradebookPageNew.getSiViewArrowIcnLstInGradebook().eq(index).click()
      }
    })
  })

  it("To validate grading system configured in backend by clicking show grading system button/EL-5489/ES5489-25", function () {
    adminGradebookPageNew.getSiShowGradingSystemBtnInEditGradebookPage().click()
    cy.wait(1000)
    adminGradebookPageNew.getSiShowGradingSystemBtnInEditGradebookPage().should('contain.text', "Hide")
    adminGradebookPageNew.getSiTotalGradeLst().eq(2).should('have.text', "C1")
  })

  it("To validate co-scholastic fields acepting only numeric values in the range 1 to 5/EL-5489/ES5489-18", function () {
    adminGradebookPageNew.getSiEditBtnInViewPageInGradebook().click()
    for (let i = 0; i <= 6; i++) {
      adminGradebookPageNew.getSiActivitiesTermTxtBx().eq(0).type('{backspace}')
      adminGradebookPageNew.getSiActivitiesTermTxtBx().eq(0).click().type(i)
    }
    cy.contains("Please enter 1 to 5 number Value").should('be.visible')
  })

  it("To validate error message shown if marks entered is out of range in the term2 field against each activity/EL-5489/ES5489-23", function () {
    for (let i = 0; i <= 6; i++) {
      adminGradebookPageNew.getSiActivitiesTermTxtBx().eq(1).type('{backspace}')
      adminGradebookPageNew.getSiActivitiesTermTxtBx().eq(1).click().type(i)
    }
    cy.contains("Please enter 1 to 5 number Value").should('be.visible')
  })

  it("To validate Grade  is auto populating  Based on scores added in Term 1 + Term 2/EL-5489/ES5489-24", function () {
    let grade = 'A'
    for (let i = 5; i >= 1; i--) {
      adminGradebookPageNew.getSiActivitiesTermTxtBx().eq(0).type('{backspace}')
      adminGradebookPageNew.getSiActivitiesTermTxtBx().eq(0).click().type(i)
      adminGradebookPageNew.getSiActivitiesTermTxtBx().eq(1).type('{backspace}')
      adminGradebookPageNew.getSiActivitiesTermTxtBx().eq(1).click().type(i)
      adminGradebookPageNew.getSiCoScholosticGradeTxtBx().should('have.text', grade)
      grade = String.fromCharCode(grade.charCodeAt() + 1)
    }
  })

  it("To validate user able to add remarks  in the REMARKS field/EL-5489/ES5489-26", function () {
    adminGradebookPageNew.getSiRemarksTxtareaFld().clear().type("Do well!!!")
  })

  it("To validate user is able to save the entered marks details by clicking save button/EL-5489/ES5489-27", function () {
    adminGradebookPageNew.getSiSaveBtnInEditGradebookPage().click()
  })

  it("To validate total pecentage is displayed based on total marks obtained/EL-5489/ES5489-28", function () {
    adminGradebookPageNew.getSiFirstNameLstInGradebook().each(($e1, index, $list) => {
      const txt = $e1.text()
      if (txt === this.report.FullName) {
        adminGradebookPageNew.getSiViewArrowIcnLstInGradebook().eq(index).click()
      }
    })
    adminGradebookPageNew.getSiTotalPercntTxtInViewPage().find('h1').should('have.text', "15%")
  })

  it("To validate Grade is dislpayed based on total percentage/EL-5489/ES5489-29", function () {
    adminGradebookPageNew.getSiTotalGradeTxtInViewPage().find('h1').should('have.text', "E")
  })

  it("To validate total attendence  displayed in percentage and it is reflacted from student platform/EL-5489/ES5489-30", function () {
    adminGradebookPageNew.getSiTotalAttendanceTxtInViewPage().find('p').should('have.text', 'Total Attendance')
  })

  it("To validate result is displayed either PASS or FAIL/EL-5489/ES5489-31", function () {
    adminGradebookPageNew.getSiResultInViewPage().find('h1').should('have.text', 'Fail')
  })

  it("To validate after entering all the details and clicking save option is directed to gradebook screen/EL-5489/ES5489-32", function () {
    adminGradebookPageNew.getSiEditBtnInViewPageInGradebook().click()
    adminGradebookPageNew.getSiSaveBtnInEditGradebookPage().click()
    adminGradebookPageNew.getSiStudentGradebookPageTitle().should('have.text', "Student Gradebook")
  })

  it("To validate user is redirected to gradebook screen after clicking the Cancel button/EL-5489/ES5489-33", function () {
    adminGradebookPageNew.getSiFirstNameLstInGradebook().each(($e1, index, $list) => {
      const txt = $e1.text()
      if (txt === this.report.FullName) {
        adminGradebookPageNew.getSiViewArrowIcnLstInGradebook().eq(index).click()
      }
    })
    adminGradebookPageNew.getSiCancelBtnInViewPage().click()
    adminGradebookPageNew.getSiStudentGradebookPageTitle().should('have.text', "Student Gradebook")
  })

  it("To validate user able to get Grading details for Scholastic and Co-Scholastic Activities by clicking show grading system/EL-5489/ES5489-34", function () {
    adminGradebookPageNew.getSiFirstNameLstInGradebook().each(($e1, index, $list) => {
      const txt = $e1.text()
      if (txt === this.report.FullName) {
        adminGradebookPageNew.getSiViewArrowIcnLstInGradebook().eq(index).click()
      }
    })
    adminGradebookPageNew.getSiShowGradingSystemBtnInEditGradebookPage().click()
    cy.wait(1000)
    adminGradebookPageNew.getSiScholasticActivInShowGradebkPage().contains("Scholastic Activities").should('be.visible')
    adminGradebookPageNew.getSiCoScholosticActivInShowGradeBkPage().contains("Co-Scholastic Activities").should('be.visible')
  })

  it("To validate user able to view  print and preview  option  to privew and print the marks card", function () {
    adminGradebookPageNew.getSiPreviewAndPrintBtn().should('be.enabled').should('be.visible')
  })
})

 //In gradebook Created term1 and term2 and added periodic test as max mark 20, sub enrichment as max mark 100
 //sub:DataTransferItemList,grade:5 manually published