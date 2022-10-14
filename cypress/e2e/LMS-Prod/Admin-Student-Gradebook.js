const adminPostSetupHomePage = require("../../support/pageObjects/LMS-2/AdminPostSetupHomePage")
const adminStudentGradebookPage = require("../../support/pageObjects/LMS-2/AdminStudentGradebookPage")
const adminGradeBookPage = require("../../support/pageObjects/LMS-2/AdminGradeBookPage")
const adminGradebookPageNew = require("../../support/pageObjects/LMS-2/AdminGradebookPageNew")

describe("Verify Admin student grade book functionalities - Sprint 19(EL-5492,EL-6082,EL-5493,EL-5490)", function () {

  before(function () {
    cy.visit(Cypress.env("urlMain"))
    cy.fixture("LMS/AdminLoginCredentials").then(function (validAdminLoginData) {
      cy.AdminPostSetup(validAdminLoginData.newUsername, validAdminLoginData.password)
    })
  })

  // before(function () {
  //   cy.visit(Cypress.env('urlProd'))
  //   Adminlogin.getAdminBtn().click()
  //   cy.fixture("LMS/validAdminLoginCredentials").then(function (validAdminLoginData) {
  //     this.validAdminLoginData = validAdminLoginData;
  //     cy.login(this.validAdminLoginData.prodUserName, this.validAdminLoginData.password)
  //   })
  // })

  beforeEach(function () {
    cy.fixture("LMS/AdminReports").as("report")
    cy.fixture("LMS/mainAdminGradebookCredentials").as("AdminReports")
  })

  it("To validate user on clicking view('>') icon redirecting to respective student's adminGradebookPageNew./EL-5489/ES5489-01", function () {
    adminPostSetupHomePage.getReportsSectionLnk().click({ force: true })
    cy.wait(2000)
    adminGradebookPageNew.getSiStudentGradebookLnk().click({ force: true })
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
    adminGradebookPageNew.getSiTitleInGradeBookPage().should('have.text', this.report.FirstName + " Gradebook")
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

  /////////////////////////////////////////////////////////////////////////////////////////////////

  it("Validate user clicks on “Create Template”, the user redirected to the “Create New Template” screen/EL-4151/ES4151_02", function () {
    adminPostSetupHomePage.getReportsSectionLnk().click({ force: true })
    adminGradeBookPage.getStudentGradebookLnk().click({ force: true })
    adminGradeBookPage.getStudentGradeBooktitle().should('have.text', this.report.title)
    adminGradeBookPage.getCreateTemplateBtn().click()
    adminGradeBookPage.getNewTemplateTitleTxt().should('have.text', this.report.Create_Template)
  })

  it("Validate user is able to click on 'My school' radio button/EL-4151/ES4151_03", function () {
    adminGradeBookPage.getTopSchoolRadioBtn().click()
    adminGradeBookPage.getMySchoolRadioBtn().should('be.enabled').click()
  })

  it("Validate user is able to Click on 'Grade' drop down filed, List of values to be loaded based on Grades onboarded for the school/EL-4151/ES4151_05", function () {
    adminGradeBookPage.getGradeDrpDwn().click()
    adminGradeBookPage.getGradeLst().should('have.length.gte', 10)
    adminGradeBookPage.getGradeLst().contains(this.report.Grade).click()
  })

  it("Validate user is able to Click on 'Number of terms' drop down filed/EL-4151/ES4151_08", function () {
    adminGradeBookPage.getNoOfTermsDrpDwn().click({ force: true })
    adminGradeBookPage.getSectionsLst().should('have.length.gte', 1)
    adminGradeBookPage.getSectionsLst().contains(this.report.Terms).click()
  })

  it("Validate user able to click on “Add Test type” in Scholastic activities/EL-4151/ES4151_09", function () {
    adminGradeBookPage.getAddTestBtn().click({ force: true })
  })

  it("Validate whether user is able to allow to add Maximum 5 tests type or not/EL-4151/ES4151_10", function () {
    for (let i = 0; i <= 4; i++) {
      adminGradeBookPage.getAddTestBtn().click({ force: true })
      cy.wait(1000)
    }
    adminGradeBookPage.getAlertMsgTxt().should('have.text', "Maximum five test  only allowed")
  })

  it("Validate User is able to delete the test added/EL-4151/ES4151_16", function () {
    adminGradeBookPage.getDltTestBtnLst().each(($e1, index, $list) => {
      adminGradeBookPage.getDltTestBtnLst().eq(0).click({ force: true })
    })
  })

  it("Validate user is abe to click on term drop down filed/EL-4151/ES4151_11", function () {
    adminGradeBookPage.getAddTestBtn().click({ force: true })
    adminGradeBookPage.getAddTestTermDrpDwn().click({ force: true })
  })

  it("Validate user selected is 1 then Term 1 to be populated in all the test/EL-4151/ES4151_12", function () {
    adminGradeBookPage.getAddTestTermDrpDwnLstTxt().should('have.text', 1).click()
    adminGradeBookPage.getAddTestTermDrpDwn().click({ force: true })
  })

  it("Validate user selected is 2 then Term 1 and Term 2 to be populated in all the test/EL-4151/ES4151_13", function () {
    adminGradeBookPage.getNoOfTermsDrpDwn().click({ force: true })
    adminGradeBookPage.getSectionsLst().contains(2).click()
    adminGradeBookPage.getAddTestTermDrpDwnLstTxt().should('have.text', 12)
    cy.wait(1000)
    adminGradeBookPage.getSectionsLst().eq(1).click()
  })

  it("Validate user is able to List the values fetched from “Test type” master (eSense admin DB)/EL-4151/ES4151_14", function () {
    adminGradeBookPage.getAddTestTstTypeDrpdwn().click({ force: true })
    adminGradeBookPage.getSectionsLst().contains("Annual examination").click()
  })

  it("Validate user is able to Click on 'Section' drop down filed, List of values to be loaded based on section added for the Grade selected during onboarding for the school. By default it will select all sections/EL-4151/ES4151_06", function () {
    adminGradeBookPage.getSectionDrpDwn().click({ force: true })
    adminGradeBookPage.getSectionsLst().should('have.length.gte', 1)
    adminGradeBookPage.getSectionsLst().contains(this.report.Section).click()
  })

  it("Validate user is abel to select Number from 0 to 100 in multiple of 5/EL-4151/ES4151_15", function () {
    adminPostSetupHomePage.getReportsSectionLnk().click({ force: true })
    adminGradeBookPage.getStudentGradebookLnk().click({ force: true })
    adminGradeBookPage.getCreateTemplateBtn().click()
    adminGradeBookPage.getAddTestBtn().click({ force: true })
    cy.wait(1000)
    adminGradeBookPage.getMaxMarksDrpDwn().click({ force: true })
    for (let i = 1; i <= 10; i++) {
      let txt = Number(i * 5);
      adminGradeBookPage.getSectionsLst().eq(i).should('have.text', txt);
    }
    adminGradeBookPage.getSectionsLst().contains(70).click()
  })

  it("Validate user clicks on “Add Subjects” button the list of mandatory and optional subjects with code should be populated based on the grade and section selected/EL-4151/ES4151_17", function () {
    adminGradeBookPage.getGradeDrpDwn().click()
    adminGradeBookPage.getGradeLst().contains(this.report.Grade).click()
    adminGradeBookPage.getNoOfTermsDrpDwn().click()
    adminGradeBookPage.getSectionsLst().contains(this.report.Terms).click()
    adminGradeBookPage.getSectionDrpDwn().click({ force: true })
    adminGradeBookPage.getSectionsLst().contains(this.report.Section).click()
    adminGradeBookPage.getNoOfTermsDrpDwn().click({ force: true })
    adminGradeBookPage.getSectionsLst().eq(0).click()
    adminGradeBookPage.getAddTestTstTypeDrpdwn().click({ force: true })
    adminGradeBookPage.getSectionsLst().contains("Annual examination").click()
    adminGradeBookPage.getAddSubBtn().click({ force: true })
    adminGradeBookPage.getAddSubdrpDwnInAddSub().click({ force: true })
    adminGradeBookPage.getSectionsLst().contains("Tamil").click({ force: true })
    //  adminGradeBookPage.getCodeTxtLst().should('contain.text',"Mathematics").and('contain.text',"Hindi")
    //  .and('contain.text',"English").and('contain.text',"EVS")
    //  adminGradeBookPage.getSubTxtLst().should('contain.text',"Mathematics").and('contain.text',"Hindi")
    //  .and('contain.text',"English").and('contain.text',"EVS")
  })

  it("Validtae subject is selected from the dropdown, system should not allow user to select the same subject again and subject should be grey-out in the list/EL-4151/ES4151_18", function () {
    adminGradeBookPage.getAddTheoryBtnLst().eq(1).click({ force: true })
    adminGradeBookPage.getAddTestTypeDrpDwnInAddTheory().click({ force: true })
    adminGradeBookPage.getSectionsLst().contains("Annual examination").click({ force: true })
    adminGradeBookPage.getAddTestBtn().click({ force: true })
    adminGradeBookPage.getAddTestTermDrpDwn().click({ force: true })
    adminGradeBookPage.getSectionsLst().eq(0).click()
    adminGradeBookPage.getAddTestTstTypeDrpdwn().click({ force: true })
    adminGradeBookPage.getSectionsLst().contains("Half Yearly").click({ force: true })
    adminGradeBookPage.getMaxMarksDrpDwn().click({ force: true })
    adminGradeBookPage.getMaxMarksDrpDwnbtn().scrollTo('bottom').contains(100).click({ force: true })
    adminGradeBookPage.getAddTheoryBtnLst().eq(1).click({ force: true })
    adminGradeBookPage.getAddTestTypeDrpDwnInAddTheory().click({ force: true })
    adminGradeBookPage.getAddTheoryAddTermDrpDwnLst().contains("Annual examination").should('not.exist')
  })

  it("Validate user clicks on Add theory and practical option, following details should be captured/EL-4151/ES4151_19", function () {
    adminGradeBookPage.getAddTheoryTheoryFld().should('be.enabled').and('be.enabled')
    adminGradeBookPage.getAddTheoryPracticalFld().should('be.enabled').and('be.enabled')
  })

  it("Validate user get List of values based on test type added in “Add Test and Subjects to Scholastic details” section", function () {
    adminGradeBookPage.getAddTestTypeDrpDwnInAddTheory().click({ force: true })
    adminGradeBookPage.getAddTheoryAddTermDrpDwnLst().should('contain.text', "Half Yearly")
  })

  it("Validate whether Number (should not exceed the “Test type max. marks”)/EL-4151/ES4151_21", function () {
    adminGradeBookPage.getAddTheoryAddTermDrpDwnLst().contains("Half Yearly").click({ force: true })
    adminGradeBookPage.getAddTheoryTheoryFld().click({ force: true }).type(30, { force: true })
    cy.contains("Marks should  be equal to the  max marks of the test").should('not.exist')
  })

  it("Validate whether error is thrown when marks exceeds or not/EL-4151/ES4151_22", function () {
    adminGradeBookPage.getAddTheoryTheoryFld().click({ force: true }).type(25, { force: true })
    adminGradeBookPage.getErrorMsgTxt().should('have.text', "Marks should  be equal to the  max marks of the test")
  })

  it("Validate user can delete the subject or Theory and Practical  added to the subject/EL-4151/ES4151_25", function () {
    adminGradeBookPage.getAddTheoryDltBtnLst().click({ force: true })
  })

  it("Validate user is able to add Co-Scholastic Activities on clicking on 'Add activity'/EL-4151/ES4151_26", function () {
    cy.scrollTo('bottom')
    adminGradeBookPage.getAddActivityBtn().click({ force: true })
    adminGradeBookPage.getActivityDrpDwn().should('be.visible')
  })

  it("Validate User can add maximum 4 Activities/EL-4151/ES4151_27", function () {
    for (let i = 0; i <= 3; i++) {
      adminGradeBookPage.getAddActivityBtn().click({ force: true })
    }
    adminGradeBookPage.getAlertMsgTxt().contains("Maximum Four Activity can be Added").should('be.visible')
  })

  it("Validate user can delete the Activity added/EL-4151/ES4151_29", function () {
    adminGradeBookPage.getDltActivityBtnLst().each(($e1, index) => {
      adminGradeBookPage.getDltActivityBtnLst().eq(0).click({ force: true })
    })
  })

  it("Validtate user can enter Alpha + Special characters in Activity text field/EL-4151/ES4151_28", function () {
    adminGradeBookPage.getAddActivityBtn().click({ force: true })
    adminGradeBookPage.getActivityDrpDwn().type("123aws", { force: true })
  })

  it("Validate user click on Save and Preview button, redirected to the Template preview screen/EL-4151/ES4151_32", function () {
    adminGradeBookPage.getDltTestBtnLst().eq(1).click({ force: true })
    adminGradeBookPage.getAddTheoryBtnLst().eq(1).click({ force: true })
    adminGradeBookPage.getAddTestTypeDrpDwnInAddTheory().click({ force: true })
    adminGradeBookPage.getAddTheoryAddTermDrpDwnLst().contains("Half Yearly").click({ force: true })
    adminGradeBookPage.getAddTheoryTheoryFld().click({ force: true }).type(50, { force: true })
    adminGradeBookPage.getPracticalFld().type(50, { force: true })
    adminGradeBookPage.getSaveAndPreviewBtn().click({ force: true })
    cy.contains("Gradebook Grade 1 Preview").should('be.visible')
  })

  it("Validtae user click on Cancel button, redirected to the Template list screen/EL-4151/ES4151_33", function () {
    adminGradeBookPage.getCancelBtn().click()
  })

  it("Validate user is able to view the details of the gradebook template by clicking the “View” icon in the template list screen/EL-3974/ES3974_01", function () {
    adminGradeBookPage.getGradesLstInTemplate().each(($e1, index, $list) => {
      const txt = $e1.text()
      if (txt.includes("Grade 1")) {
        adminGradeBookPage.getViewIconsLst().eq(index).click()
        return false
      }
    })
    adminGradeBookPage.getGradeDrpDwn().should('be.visible')
    adminGradeBookPage.getNoOfTermsDrpDwn().should('be.visible')
    adminGradeBookPage.getAddTheoryTheoryFld().should('be.visible')
    adminGradeBookPage.getPracticalFld().should('be.visible')
  })

  it(" Validate User is able to redirected to the “Preview Gradebook(Grade)” screen/EL-3974/ES3974_02", function () {
    cy.contains("Preview Gradebook Grade 1").should('be.visible')
  })

  it("Validate whether user is able to view the details present in the  preview gradebook screen(Scholastic, co-scholastic details)/EL-3974/ES3974_03", function () {
    adminGradeBookPage.getNoOfTermsDrpDwn().should('have.text', "1")
    adminGradeBookPage.getAddTheoryTheoryFld().should('have.value', "50")
    adminGradeBookPage.getPracticalFld().should('have.value', "50")
    adminGradeBookPage.getAddTestTypeDrpDwnInAddTheory().should('have.text', "Half Yearly")
    adminGradeBookPage.getActivityDrpDwn().should('have.value', "123aws")
  })

  it("Validate user is able to click on 'Edit' button/EL-3974/ES3974_04", function () {
    adminGradeBookPage.getEditBtnInViewPage().should('be.enabled').click()
  })

  it("Validate user clicking on Edit button, redirected to Edit Gradebook screen/EL-3974/ES3974_05", function () {
    cy.contains("Edit Gradebook Grade 1").should('be.visible')
  })

  it("Validate user is able to click on 'Create new' button/EL-3974/ES3974_06", function () {
    adminGradeBookPage.getGoBackBtn().click()
    adminGradeBookPage.getGradesLstInTemplate().each(($e1, index, $list) => {
      const txt = $e1.text()
      if (txt.includes("Grade 1")) {
        adminGradeBookPage.getViewIconsLst().eq(index).click()
        return false
      }
    })
    adminGradeBookPage.getCreateNwBtnInViewPage().click()
  })

  it("Validate user clicking on 'create new' button, rediredted to create template screen/EL-3974/ES3974_07", function () {
    cy.contains("Create New Template").should('be.visible')
  })

  //pre_Condition
  it("Delete the created previous grade template", function () {
    adminPostSetupHomePage.getReportsSectionLnk().click({ force: true })
    adminGradeBookPage.getStudentGradebookLnk().click({ force: true })
    cy.wait(1000)
    adminGradeBookPage.getGradesLstInTemplate().each(($e1, index, $list) => {
      const txt = $e1.text()
      if (txt.includes("Grade 1")) {
        adminGradeBookPage.getDltBtnLstForTemplatePage().eq(index).click()
        return false
      }
    })
    adminGradeBookPage.getDeleteConfirmationBtnInTemplate().click()
  })

  /////////////////////////////////////////////////////////////////////////////////////////////////////

  it("Validate user is able to create Gradebook by clicking TopSchool option in the “Create Template” screen/EL-5358/ES5358_01", function () {
    adminPostSetupHomePage.getReportsSectionLnk().click({ force: true })
    cy.wait(1000)
    adminGradebookPageNew.getSiStudentGradebookLnk().click({ force: true })
    adminGradebookPageNew.getSiCreateTemplateBtn().click()
    adminGradebookPageNew.getSiGradeDrpDwnInCreateTemplate().click()
    adminGradebookPageNew.getSiDrpDwnLstInCreateTemplate().contains(this.report.Grade).click()
    adminGradebookPageNew.getSiSectionDrpDwnInCreateTemplate().click()
    adminGradebookPageNew.getSiDrpDwnLstInCreateTemplate().contains(this.report.Section).click()
    adminGradebookPageNew.getSiNoTermsDrpDwnInCreateTemplate().click({ force: true })
    adminGradebookPageNew.getSiDrpDwnLstInCreateTemplate().contains(this.report.Terms).click()
    adminGradebookPageNew.getSiAddTestTypeInCreateTemplate().click({ force: true })
    cy.wait(1000)
    adminGradebookPageNew.getSiAddTestTermDrpDwn().click({ force: true })
    adminGradebookPageNew.getSiDrpDwnLstInCreateTemplate().contains(this.report.Terms).click({ force: true })
    adminGradebookPageNew.getSiTestTypeDrpDwnInCreateTemplate().click({ force: true })
    adminGradebookPageNew.getSiDrpDwnLstInCreateTemplate().contains(this.report.TestType).click({ force: true })
    adminGradebookPageNew.getSiMaxMarksDrpDwnInCreateTemplate().click({ force: true })
    adminGradebookPageNew.getSiDrpDwnLstInCreateTemplate().contains(this.report.MaxMarks).click({ force: true })
    adminGradebookPageNew.getSiAddSubjectInCreateTemplate().click({ force: true })
    adminGradebookPageNew.getSiSubDrpDwnInAddSub().click({ force: true })
    adminGradebookPageNew.getSiDrpDwnLstInGradebook().contains(this.report.Subject).click({ force: true })
    adminGradebookPageNew.getSiAddTheoryInCreateTemplate().click({ force: true })
    adminGradebookPageNew.getSiTestTypeDrpDwnInAddTheoryCreateTemplate().click({ force: true })
    adminGradebookPageNew.getSiDrpDwnLstInCreateTemplate().contains(this.report.TestType).click({ force: true })
    adminGradebookPageNew.getSiTheoryFldInAddTheoryCreateTemplate().type(this.report.TheoryMark, { force: true })
    adminGradebookPageNew.getSiErrorMsgInCreateTemplate().should('be.visible')
    adminGradebookPageNew.getSiPracticalInAddTheoryCreateTemplate().type(this.report.PracticalMark, { force: true })
    adminGradebookPageNew.getSiErrorMsgInCreateTemplate().should('not.be.visible')
    cy.scrollTo('bottom')
    adminGradebookPageNew.getSiAddActivityInCreateTemplate().click({ force: true })
    adminGradebookPageNew.getSiActivityFldInCreateTemplate().type(this.report.Activity, { force: true })
    adminGradebookPageNew.getSiSaveAndPreviewBtnInCreateTemplate().should('be.enabled')
  })

  it("Validate user selects “TopSchool” radio button the preloaded template for the selected grade will be listed/EL-5358/ES5358_02", function () {
    cy.go('back')
    cy.wait(1000)
    adminGradebookPageNew.getSiCreateTemplateBtn().click()
    adminGradebookPageNew.getSiTopSchlRadioBtnInCreateTemplatePage().click({ force: true })
    adminGradebookPageNew.getSiGradeDrpDwnInCreateTemplate().click()
    adminGradebookPageNew.getSiDrpDwnLstInCreateTemplate().contains(this.report.Grade).click()
    adminGradebookPageNew.getSiActivityFldInCreateTemplate().should('have.length', 2)
  })

  it("Validate whether in the preview gradebook template, the following option is available for the user -Edit and create new/EL-5358/ES5358_05", function () {
    adminGradebookPageNew.getSiEditBtnInCreateTemplatePageInTopschool().should('be.enabled').and('be.visible')
    adminGradebookPageNew.getSiCreateNwCreateTemplatePageInTopSchl().should('be.enabled').and('be.visible')
  })

  it("Validate user click on “Edit” button, navigate to preview the gradebook template/EL-5358/ES5358_04", function () {
    adminGradebookPageNew.getSiEditBtnInCreateTemplatePageInTopschool().click()
    cy.contains("Edit Gradebook undefined").should('be.visible')
  })

  ////////////////////////////////////////////////////////////////////////////////////////////////////

  it("Validate user is able to view the list of templates (Preloaded by TopSchool/ New created by School), by clicking on “Student Gradebook” > “Template” in the “Reports” menu/EL-4150/ES4150_01", function () {
    adminStudentGradebookPage.getHarSideMenuAdminReportImg().click()
    cy.wait(1000)
    adminStudentGradebookPage.getHarStudentGradeBookBtn().click({ force: true })
    adminStudentGradebookPage.getHarStudentGradeBookHeaderTitle().contains('Student Gradebook').should('be.visible')
    adminStudentGradebookPage.getHarStudentGradeName().should('be.visible')

  })

  it("Validate whether by default, the TopSchool template logo should be displayed when users edit/reuses the template for their school then their school logo should be replaced and displayed./EL-4150/ES4150_03", function () {
    adminStudentGradebookPage.getHarListOfTemplateTopschoolLogo().should('be.visible')
  })

  it("Validate whether by default,for TopSchool template field value should be “All” once the user edits/reuse the template then the section as per the template should be displayed/EL-4150/ES4150_04", function () {
    adminStudentGradebookPage.getHarListOfTemplateDefaultSecValue().should('be.visible')
  })

  it("Validate whether by default, for TopSchool template field value should be “NA” once the user edits/reuse the template then the last edited details should be displayed/EL-4150/ES4150_06", function () {
    adminStudentGradebookPage.getHarStudentGradeName().each(($e1, index, $list) => {
      const gradeTxt = $e1.text()
      if (gradeTxt.includes('Grade  3')) {
        adminStudentGradebookPage.getHarListOfTemplateEditBtn().scrollIntoView().click()

      }

    })
    adminStudentGradebookPage.getHarNoOfTermsDropdown().eq(1).click()
    adminStudentGradebookPage.getHarNoOfTermsDropdownValue().first().click()
    cy.wait(2000)
    cy.get('.CreateNewTemplate_crtNewTempActioBtnSect__2knbt > :nth-child(1)').click()
    cy.wait(2000)
    const dayjs = require('dayjs')
    cy.log(dayjs().format('DD/MM/YYYY'))
    adminStudentGradebookPage.getHarListOfTemplateLastEdited().invoke('text').then((text) => {
      var splitText = text.split(' ')[2]
      cy.log(splitText)
    })


  })

  it("Validate whether draftstatus is dispalyed, When the gradebook template is saved as a draft/EL-4150/ES4150_08", function () {
    adminStudentGradebookPage.getHarListOfTemplateDraftBtn().scrollIntoView().should('be.visible')
  })

  it("Validate whether Published status is displayed, When the gradebook template is made live for the school to update marks/EL-4150/ES4150_09", function () {
    adminStudentGradebookPage.getHarListOfTemplatePublishedBtn().scrollIntoView().should('be.visible')
  })

  it("Validate whether user is able to enable/disabe toggle button (Publish/unpublish template)/EL-4150/ES4150_10", function () {
    adminStudentGradebookPage.getHarStudentGradeName().each(($e1, index, $list) => {
      const gradeTxt = $e1.text()
      if (gradeTxt.includes('Grade 4')) {
        adminStudentGradebookPage.getHarListOfTemplateEnableAndDisabledBtn().eq(index).click()
      }
    })
    adminStudentGradebookPage.getHarListOfTemplateUnpublishedBtn().click()
    adminStudentGradebookPage.getHarStudentGradeName().each(($e1, index, $list) => {
      const gradeTxt = $e1.text()
      if (gradeTxt.includes('Grade 4')) {
        adminStudentGradebookPage.getHarListOfTemplateEnableAndDisabledBtn().eq(index).click()
      }
    })
    adminStudentGradebookPage.getHarListOfTemplatepublishedBtn().click()
    adminStudentGradebookPage.getHarListOfTemplatePopuppublishedBtn().click()
  })

  it("Validate the grade book template is published the toggle button should be automatically enabled/EL-4150/ES4150_11", function () {
    adminStudentGradebookPage.getHarStudentGradeName().each(($e1, index, $list) => {
      const gradeTxt = $e1.text()
      if (gradeTxt.includes('Grade 3')) {
        adminStudentGradebookPage.getHarListOfTemplateEnableAndDisabledBtn().eq(index).scrollIntoView().should('not.be.disabled')
      }
    })
  })

  it("Validate user is able to edit the preloaded TopSchool template/Created template/EL-4150/ES4150_12", function () {
    adminStudentGradebookPage.getHarStudentGradeName().each(($e1, index, $list) => {
      const gradeTxt = $e1.text()
      if (gradeTxt.includes('Grade  3')) {
        adminStudentGradebookPage.getHarListOfTemplateEditBtn().scrollIntoView().should('be.visible').click()

      }

    })
    adminStudentGradebookPage.getHarNoOfTermsDropdown().eq(1).click()
    adminStudentGradebookPage.getHarNoOfTermsDropdownValue().first().click()
    cy.wait(2000)
    cy.get('.CreateNewTemplate_crtNewTempActioBtnSect__2knbt > :nth-child(1)').click()
    cy.wait(2000)
  })

  it("Validate whether user can delete the template or not/EL-4150/ES4150_13", function () {
    adminStudentGradebookPage.getHarStudentGradeName().each(($e1, index, $list) => {
      const gradeTxt = $e1.text()
      if (gradeTxt.includes('Grade  3')) {
        adminStudentGradebookPage.getHarListOfTemplateDraftDeleteBtn().should('not.be.disabled')

      }

    })
  })

  it("Validate whether user can view the gradebook template details or not/EL-4150/ES4150_14", function () {
    adminStudentGradebookPage.getHarStudentGradeName().each(($e1, index, $list) => {
      const gradeTxt = $e1.text()
      if (gradeTxt.includes('Grade 3')) {
        adminStudentGradebookPage.getHarListOfTemplateEnableAndDisabledBtn().eq(index).should('not.be.disabled')
      }
    })
  })

  it("Validate whether Search and Filter option is available or not/EL-4150/ES4150_15", function () {
    adminStudentGradebookPage.getHarTemplateSearchTxtField().should('be.visible')
    adminStudentGradebookPage.getHarTemplateFilterDropdown().should('be.visible')
  })

  it("Validate user click on Filter option, based on TopSchool/My School, The list should be populated based on the search or filter applied by the user/EL-4150/ES4150_16", function () {
    adminStudentGradebookPage.getHarTemplateSearchTxtField().type(this.AdminReports.TemplateSearchValue)
    adminStudentGradebookPage.getHarStudentGradeName().should('have.text', this.AdminReports.TemplateSearchValue)
  })

  it("Validate whether sort option is available for the following columns (Grade/Last Edited), where users can sort and view the list/EL-4150/ES4150_17", function () {
    adminStudentGradebookPage.getHarTemplateSearchTxtField().clear()
    cy.wait(1000)
    adminStudentGradebookPage.getHarStudentGradeSortBtn().should('be.visible').click()
    adminStudentGradebookPage.getHarStudentLastEditedSortBtn().should('be.visible').click()
    adminStudentGradebookPage.getHarStudentGradeSortBtn().click()
    adminStudentGradebookPage.getHarStudentGradeSortBtn().click()
  })

  it("Validate whether individual selection of the line item or “Select All” option is available in the list while performing actions (Delete / Download as pdf)/EL-4150/ES4150_18", function () {
    adminStudentGradebookPage.getHarAllStudentCheckBx().check()
    adminStudentGradebookPage.getHarDownloadPdfBtn().scrollIntoView().should('be.visible')
    adminStudentGradebookPage.getHarBulkDeleteBtn().scrollIntoView().should('be.visible')
  })

  it("Validate whether 10 records is displayed per page or not/EL-4150/ES4150_21", function () {
    adminStudentGradebookPage.getHarStudentGradeName().should('have.length.lessThan', 11)
  })

  it("To validate that following student Basic Profile details are displayed for the user in the gradebook Preview Page Name,Class,Date of Birth,Fathers Name,Mothers Name,Contact number,Admission number,CBSE Reg No,Roll No,Address/EL-4160/ES4160_01", function () {
    cy.get('a > :nth-child(1) > .side-nav-dashboard > .side-nav-icon > img').click()
    cy.get('#simple-tab-1').click()
    cy.get(':nth-child(7) > :nth-child(5) > .UserDashBoard_EditIcons__opRHW > [aria-label="Edit Student"] > img').click()
    cy.wait(2000)
    const name = cy.get('#fullName').invoke('val').then(sometext => {
      cy.log(sometext)


      adminStudentGradebookPage.getHarSideMenuAdminReportImg().click()
      cy.wait(1000)
      adminStudentGradebookPage.getHarStudentGradeBookBtn().click({ force: true })
      cy.wait(1000)
      adminStudentGradebookPage.getHarGradeBookTab().click()
      adminStudentGradebookPage.getHarGradeBookStudentName().each(($e1, index, $list) => {
        const gradeStdName = $e1.text()
        if (gradeStdName.includes('Mahesh')) {
          adminStudentGradebookPage.getHarGradeBookStudentView().eq(index).click()
        }

      })
      cy.wait(2000)
      adminStudentGradebookPage.getHarGradeBookStudentNameTxt().eq(0).should('contain.text', sometext)

    })


  })

  it("To validate that Total Percentage,Total Grade Total Attendance Result widgets are provided in Gradebook Preview Page/EL-4160/ES4160_02", function () {
    adminStudentGradebookPage.getHarGoBackBtn().scrollIntoView().click()
    adminStudentGradebookPage.getHarTemplateTab().click()
    adminStudentGradebookPage.getHarStudentGradeName().each(($e1, index, $list) => {
      const gradeTxt = $e1.text()
      if (gradeTxt.includes('Grade  3')) {
        adminStudentGradebookPage.getHarListOfTemplateEditBtn().scrollIntoView().click()

      }

    })
    cy.wait(2000)
    adminStudentGradebookPage.getHarSaveAndPreviewBtn().click()
    adminStudentGradebookPage.getHarTotalPercentageWidget().should('be.visible')
    adminStudentGradebookPage.getHarTotalGradeWidget().should('be.visible')
    adminStudentGradebookPage.getHarTotalAttendenceWidget().should('be.visible')
    adminStudentGradebookPage.getHarResultWidget().should('be.visible')

  })

  it("To valiate that for Scholastic Activities if theory and practical are added to the template with 1 & 2 terms selected then  Screen -  4 Gradebook template preview - with term 2 and T&P is displayed/EL-4160/ES4160_04", function () {
    adminStudentGradebookPage.getHarGoBackBtn().click()
    adminStudentGradebookPage.getHarGradeBookTab().click()
    adminStudentGradebookPage.getHarGradeFilterDropdown().eq(0).click()
    adminStudentGradebookPage.getHarGradeFilterDropdownValues().contains('Grade 1').click({ force: true })
    cy.wait(1000)
    adminStudentGradebookPage.getHarSectionFilterDropdown().click()
    adminStudentGradebookPage.getHarSectionFilterDropdownValues().contains('A').click({ force: true })
    adminStudentGradebookPage.getHarGradeBookStudentName().each(($e1, index, $list) => {
      const gradeStdName = $e1.text()
      if (gradeStdName.includes('Teju')) {
        adminStudentGradebookPage.getHarGradeBookStudentView().eq(index).click()
      }

    })
    cy.wait(1000)
    adminStudentGradebookPage.getHartemplatepreviewTerm1().scrollIntoView().should('be.visible')
    adminStudentGradebookPage.getHartemplatepreviewTerm2().scrollIntoView().should('be.visible')


  })



  it("To validate that user is able to add the remarks in Remarks section/EL-4160/ES4160_09", function () {
    adminStudentGradebookPage.getHarGoBackBtn().click()
    adminStudentGradebookPage.getHarGradeBookStudentName().each(($e1, index, $list) => {
      const gradeStdName = $e1.text()
      if (gradeStdName.includes('Teju')) {
        adminStudentGradebookPage.getHarGradeBookStudentView().eq(index).click()

      }
    })
    adminStudentGradebookPage.getHarGradeBookTemplateViewEditBtn().scrollIntoView().click()
    adminStudentGradebookPage.getHarGradeBookStudentRemarksTxtarea().scrollIntoView().should('be.visible')
    adminStudentGradebookPage.getHarGradeBookStudentRemarksTxtarea().scrollIntoView().clear().type('performance is good')
    adminStudentGradebookPage.getHarGradeBookStudentSave().click()
    cy.wait(3000)

  })

  it("To validate that Date Class Teacher Signature Principal Signature Parents Signature is provided in Gradebook template preview page/EL-4160/ES4160_10", function () {
    adminStudentGradebookPage.getHarTemplateTab().click()
    cy.wait(1000)
    adminStudentGradebookPage.getHarStudentGradeName().each(($e1, index, $list) => {
      const gradeTxt = $e1.text()
      if (gradeTxt.includes('Grade  3')) {
        adminStudentGradebookPage.getHarListOfTemplateEnableAndDisabledBtn().eq(index).click()
      }
    })
    adminStudentGradebookPage.getHarStudentReportDate().scrollIntoView().should('be.visible')
    adminStudentGradebookPage.getHarStudentReportClassTeacherSignature().scrollIntoView().should('be.visible')
    adminStudentGradebookPage.getHarStudentReportPrincipalSignature().scrollIntoView().should('be.visible')
    adminStudentGradebookPage.getHarStudentReportParentsSignature().scrollIntoView().should('be.visible')

  })
  it("To validate that when user select Show Grading System From Grading system drop down, Grading details for Scholastic and Co-Scholastic Activities is displayed/EL-4160/ES4160_11", function () {
    adminStudentGradebookPage.getHarStudentReportShowGradingSystemDropdown().scrollIntoView().click()
    adminStudentGradebookPage.getHartShowGradingSystemScholasticGradeTable().should('be.visible')
    adminStudentGradebookPage.getHartShowGradingSystemMarksRangeTable().should('be.visible')
  })

  it("To validate that Preview & Print button is enabled in Gradebook template preview page/EL-4160/ES4160_12", function () {
    adminStudentGradebookPage.getHarGoBackBtn().click()
    adminStudentGradebookPage.getHarGradeBookTab().click()
    adminStudentGradebookPage.getHarGradeBookStudentName().each(($e1, index, $list) => {
      const gradeStdName = $e1.text()
      if (gradeStdName.includes('Teju')) {
        adminStudentGradebookPage.getHarGradeBookStudentView().eq(index).click()

      }
    })

    adminStudentGradebookPage.getHarPreviewPrint().should('not.be.disabled')
  })

  it("To validate that when user click on 'Save as Draft' The template is saved as a draft and the status of the template in the template list screen is updated as “Draft” and the logo is updated as per the school logo/EL-4160/ES4160_13", function () {
    adminStudentGradebookPage.getHarGoBackBtn().click()
    adminStudentGradebookPage.getHarTemplateTab().click()
    adminStudentGradebookPage.getHarStudentGradeName().each(($e1, index, $list) => {
      const gradeTxt = $e1.text()
      if (gradeTxt.includes('Grade  3')) {
        adminStudentGradebookPage.getHarGradeBookTemplateView().eq(index).click()

      }

    })
    adminStudentGradebookPage.getHarGradeBookTemplateViewEditBtn().scrollIntoView().click()
    cy.wait(2000)
    adminStudentGradebookPage.getHarSaveAsDraftBtn().scrollIntoView().click()
    cy.wait(3000)
    adminStudentGradebookPage.getHarListOfTemplateDraftBtn().should('be.visible')

  })

  it("To validate that “Bulk Upload Score button is provided in gradebook listing page/EL-5490/ES5490_01", function () {
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

  ///////////////////////////////////////////////////////////////////////////////////////////////////

  it("Create new Template", function () {
    adminPostSetupHomePage.getReportsSectionLnk().click({ force: true })
    adminGradebookPageNew.getSiStudentGradebookLnk().click({ force: true })
    adminGradebookPageNew.getSiCreateTemplateBtn().click()
    adminGradebookPageNew.getSiGradeDrpDwnInCreateTemplate().click()
    adminGradebookPageNew.getSiDrpDwnLstInCreateTemplate().contains(this.report.Grade).click()
    adminGradebookPageNew.getSiSectionDrpDwnInCreateTemplate().click()
    adminGradebookPageNew.getSiDrpDwnLstInCreateTemplate().contains(this.report.Section).click()
    adminGradebookPageNew.getSiNoTermsDrpDwnInCreateTemplate().click({ force: true })
    adminGradebookPageNew.getSiDrpDwnLstInCreateTemplate().contains(this.report.Terms).click()
    adminGradebookPageNew.getSiAddTestTypeInCreateTemplate().click({ force: true })
    cy.wait(1000)
    adminGradebookPageNew.getSiAddTestTermDrpDwn().click({ force: true })
    adminGradebookPageNew.getSiDrpDwnLstInCreateTemplate().contains(this.report.Terms).click({ force: true })
    adminGradebookPageNew.getSiTestTypeDrpDwnInCreateTemplate().click({ force: true })
    adminGradebookPageNew.getSiDrpDwnLstInCreateTemplate().contains(this.report.TestType).click({ force: true })
    adminGradebookPageNew.getSiMaxMarksDrpDwnInCreateTemplate().click({ force: true })
    adminGradebookPageNew.getSiDrpDwnLstInCreateTemplate().contains(this.report.MaxMarks).click({ force: true })
    adminGradebookPageNew.getSiAddSubjectInCreateTemplate().click({ force: true })
    adminGradebookPageNew.getSiSubDrpDwnInAddSub().click({ force: true })
    adminGradebookPageNew.getSiDrpDwnLstInGradebook().contains(this.report.Subject).click({ force: true })
    adminGradebookPageNew.getSiAddTheoryInCreateTemplate().click({ force: true })
    adminGradebookPageNew.getSiTestTypeDrpDwnInAddTheoryCreateTemplate().click({ force: true })
    adminGradebookPageNew.getSiDrpDwnLstInCreateTemplate().contains(this.report.TestType).click({ force: true })
    adminGradebookPageNew.getSiTheoryFldInAddTheoryCreateTemplate().type(this.report.TheoryMark, { force: true })
    adminGradebookPageNew.getSiErrorMsgInCreateTemplate().should('be.visible')
    adminGradebookPageNew.getSiPracticalInAddTheoryCreateTemplate().type(this.report.PracticalMark, { force: true })
    adminGradebookPageNew.getSiErrorMsgInCreateTemplate().should('not.be.visible')
    cy.scrollTo('bottom')
    adminGradebookPageNew.getSiAddActivityInCreateTemplate().click({ force: true })
    adminGradebookPageNew.getSiActivityFldInCreateTemplate().type(this.report.Activity, { force: true })
    adminGradebookPageNew.getSiSaveAsDraftBtnInCreateTemplate().click({ force: true })
  })

  it("Validate whether edit option is available in action column in the Template list screen/EL-5358/ES5358_01", function () {
    //   adminPostSetupHomePage.getReportsSectionLnk().click({force:true})
    //   adminGradebookPageNew.getSiStudentGradebookLnk().click()
    adminGradebookPageNew.getSiEditBtnLstInTemplatePage().should('be.visible')
  })

  it("Validate user click on “Edit” option,  redirected to the “Edit Gradebook” screen/EL-5359/ES5359_02", function () {
    adminGradebookPageNew.getSiGradeLstInTemplatePage().each(($e1, index, $list) => {
      const txt = $e1.text()
      if (txt === this.report.Grade) {
        adminGradebookPageNew.getSiEditBtnLstInTemplatePage().eq(index).click()
      }
    })
    adminGradebookPageNew.getSiTemplateTitle().should('contain.text', "Edit Gradebook")
  })

  it("Validate whether system allows the user to edit the gradebook as per their requirement except the grade/EL-5359/ES5359_03", function () {
    adminGradebookPageNew.getSiAddTestTypeInCreateTemplate().should('be.enabled')
    adminGradebookPageNew.getSiAddSubjectInCreateTemplate().should('be.enabled')
    adminGradebookPageNew.getSiTheoryFldInAddTheoryCreateTemplate().should('be.enabled')
    adminGradebookPageNew.getSiPracticalInAddTheoryCreateTemplate().should('be.enabled')
    adminGradebookPageNew.getSiAddActivityInCreateTemplate().should('be.enabled')
    adminGradebookPageNew.getSiActivityFldInCreateTemplate().should('be.enabled')
  })

  it("Validate system should not allow user to edit the published gradebook template/EL-5359ES5359_04", function () {
    adminGradebookPageNew.getSiGradeDrpDwnInCreateTemplate().should('not.be.enabled')
    adminGradebookPageNew.getSiSectionDrpDwnInCreateTemplate().should('not.be.enabled')
  })

  it("Validate user once editing is done the following options should be available - Save as Draft , save and preview and cancel button/EL-5359/ES5359_05", function () {
    cy.scrollTo('bottom')
    adminGradebookPageNew.getSiSaveAsDraftBtnInCreateTemplate().should('be.enabled')
    adminGradebookPageNew.getSiSaveAndPreviewBtnInCreateTemplate().should('be.enabled')
    adminGradebookPageNew.getSiCancelBtnInCreateTemplate().should('be.enabled')
  })

  it("Validate user clicks on 'Save as Draft' button/EL-5359/ES5359_06", function () {
    adminGradebookPageNew.getSiSaveAsDraftBtnInCreateTemplate().click()
    adminGradebookPageNew.getSiGradeLstInTemplatePage().each(($e1, index, $list) => {
      const txt = $e1.text()
      if (txt === this.report.Grade) {
        adminGradebookPageNew.getSiStatusLstInTemplatePage().eq(index).should('have.text', "Draft")
      }
    })
  })

  it("Validate user click on Save and Preview button, redirected to the Template preview screen/EL-5359/ES5359_07", function () {
    adminGradebookPageNew.getSiGradeLstInTemplatePage().each(($e1, index, $list) => {
      const txt = $e1.text()
      if (txt === this.report.Grade) {
        adminGradebookPageNew.getSiEditBtnLstInTemplatePage().eq(index).click()
      }
    })
    cy.wait(2000)
    adminGradebookPageNew.getSiSaveAndPreviewBtnInCreateTemplate().click()
    cy.contains("Gradebook " + this.report.Grade + " Preview").should('be.visible')
  })

  it("Validtae user click on Cancel button, redirected to the Template list screen/EL-5359/ES5359_08", function () {
    adminGradebookPageNew.getSiPreviewCancelBtn().click()
    adminGradebookPageNew.getSiTemplateTabInTemplate().should('be.visible')
  })

  it("Validate user click on “Go back” button, redirected to the previous screen/EL-5359/ES5359_09", function () {
    adminGradebookPageNew.getSiGradeLstInTemplatePage().each(($e1, index, $list) => {
      const txt = $e1.text()
      if (txt === this.report.Grade) {
        adminGradebookPageNew.getSiEditBtnLstInTemplatePage().eq(index).click()
      }
    })
    cy.scrollTo('bottom')
    adminGradebookPageNew.getSiCancelBtnInCreateTemplate().click()
    adminGradebookPageNew.getSiTemplateTabInTemplate().should('be.visible')
  })

  it("Validate whether delete option is available in the “Action” column in the template list screen/EL-5145/ES5145_01", function () {
    adminGradebookPageNew.getSiGradeLstInTemplatePage().each(($e1, index, $list) => {
      const txt = $e1.text()
      if (txt === this.report.Grade) {
        adminGradebookPageNew.getSiDltBtnLstInTemplatePage().eq(index).should('be.visible')
      }
    })
  })

  it("Validate system should not allow user to delete the published gradebook template/EL-5145/ES5145_03", function () {
    adminGradebookPageNew.getSiStatusLstInTemplatePage().each(($e1, index, $list) => {
      const txt = $e1.text()
      if (txt === this.report.Status2) {
        adminGradebookPageNew.getSiDltBtnLstInTemplatePage().eq(index).should('not.be.enabled')
      }
    })
  })

  it("Validate user click on Delete option, confirmation popup is displayed with the following option - Delete, cancel,cross/EL-5145/ES5145_05", function () {
    adminGradebookPageNew.getSiGradeLstInTemplatePage().each(($e1, index, $list) => {
      const txt = $e1.text()
      if (txt === this.report.Grade) {
        adminGradebookPageNew.getSiDltBtnLstInTemplatePage().eq(index).click()
      }
    })
    adminGradebookPageNew.getSiDltCloseBtn().should('be.visible')
    adminGradebookPageNew.getSiDltBtnInPopup().should('be.visible')
    adminGradebookPageNew.getSiCancelBtnInPopup().should('be.visible')
  })

  it("Validate user click on  'Cancel' button, redirected to the template listing screen/EL-5145/ES5145_07", function () {
    adminGradebookPageNew.getSiCancelBtnInPopup().should('be.visible').click()
    adminGradebookPageNew.getSiTemplateTabInTemplate().should('be.visible')
  })

  it("Validate user click on 'Cross' button , re-directed to the template listing screen/EL-5145/ES5145_08", function () {
    adminGradebookPageNew.getSiGradeLstInTemplatePage().each(($e1, index, $list) => {
      const txt = $e1.text()
      if (txt === this.report.Grade) {
        adminGradebookPageNew.getSiDltBtnLstInTemplatePage().eq(index).click()
      }
    })
    adminGradebookPageNew.getSiDltCloseBtn().should('be.visible').click()
    adminGradebookPageNew.getSiTemplateTabInTemplate().should('be.visible')
  })

  it("Validate user click on 'delete' button,Successful popup is displayed  and  redirected to the listing screen and the system should remove the selected template from the list/EL-5145/ES5145_06", function () {
    adminGradebookPageNew.getSiGradeLstInTemplatePage().each(($e1, index, $list) => {
      const txt = $e1.text()
      if (txt === this.report.Grade) {
        adminGradebookPageNew.getSiDltBtnLstInTemplatePage().eq(index).click()
      }
    })
    cy.contains("Do you want to delete Gradebook").should('be.visible')
    adminGradebookPageNew.getSiDltBtnInPopup().click()
    cy.contains("Gradebook has been deleted").should('be.visible')
    adminGradebookPageNew.getSiGradeLstInTemplatePage().should('not.contain.text', this.report.Grade)
  })

  /////////////////////////////////////////////////////////////////////////////////////////////////

  it("Validate that  when user clicks on reports module,pop-appears and contains student Gradebook/EL-5492/ES5492_01", function () {
    adminPostSetupHomePage.getReportsSectionLnk().click({ force: true })
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