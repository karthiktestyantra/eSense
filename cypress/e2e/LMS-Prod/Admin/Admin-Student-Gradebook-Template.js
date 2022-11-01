const adminPostSetupHomePage = require("../../../support/pageObjects/LMS-2/AdminPostSetupHomePage")
const adminStudentGradebookPage = require("../../../support/pageObjects/LMS-2/AdminStudentGradebookPage")
const adminGradeBookPage = require("../../../support/pageObjects/LMS-2/AdminGradeBookPage")
const adminGradebookPageNew = require("../../../support/pageObjects/LMS-2/AdminGradebookPageNew")
const indexPage = require('../../../support/pageObjects/LMS-1/IndexPage')

describe("Sprint 19(EL-6082,EL-5493,EL-5358,EL-4151) - Verify Admin student grade book template functionalities", function () {

  before(function () {
    cy.visit(Cypress.env('urlProd'))
    indexPage.getAdmin().click();
    cy.fixture("LMS/validAdminLoginCredentials").then(function (validAdminLoginData) {
      this.validAdminLoginData = validAdminLoginData;
      cy.login(this.validAdminLoginData.prodUserName, this.validAdminLoginData.password)
    })
  })

  beforeEach(function () {
    cy.fixture("LMS/AdminReports").as("report")
    cy.fixture("LMS/mainAdminGradebookCredentials").as("AdminReports")
  })

  //pre-condition
  it("To validate user on clicking view('>') icon redirecting to respective student's adminGradebookPageNew./EL-5489/ES5489-01", function () {
    adminPostSetupHomePage.getReportsSectionLnk().click({ force: true })
    cy.wait(2000)
    adminGradebookPageNew.getSiStudentGradebookLnk().click({ force: true })
    adminGradebookPageNew.getSiTemplateTabInTemplate().click()
    adminGradebookPageNew.getSiGradeDrpDwnInCreateTemplate().click()
    cy.wait(2000)
    adminGradebookPageNew.getSiDrpDwnLstInGradebook().contains(this.report.GradeManualProd).click()
    cy.wait(1000)
    adminGradebookPageNew.getSiFirstNameLstInGradebook().each(($e1, index, $list) => {
      const txt = $e1.text()
      if (txt === this.report.FullNameProd) {
        adminGradebookPageNew.getSiViewArrowIcnLstInGradebook().eq(index).click()
      }
    })
    adminGradebookPageNew.getSiTitleInGradeBookPage().should('have.text', this.report.FirstNameProd + " Gradebook")
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
    //cy.contains("Practical Mark not applicable for the Test Type").should('be.visible')
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
    cy.get('table tr td p').eq(4).should('contain.text', 100)
  })

  it("To validate The score exceeding the limit for the test type set/EL-5489/ES5489-10", function () {
    adminGradebookPageNew.getSiScholosticsMarksfldLst().eq(0).type('{backspace}')
    adminGradebookPageNew.getSiScholosticsMarksfldLst().eq(0).type(0)
    
  })

  it("To validate Error message  shown if the entered marks is greater than the test mark assigned for the test/EL-5489/ES5489-11", function () {
    adminGradebookPageNew.getSiScholosticsMarksfldLst().eq(1).type('{backspace}')
    adminGradebookPageNew.getSiScholosticsMarksfldLst().eq(1).type(2)
    //cy.contains("Please enter the value not more then 10").should('be.visible')
  })

  it("To validate Based on marks grades are auto populating/EL-5489/ES5489-12", function () {
    adminGradebookPageNew.getSiSaveBtnInEditGradebookPage().click()
    cy.wait(1000)
    adminGradebookPageNew.getSiFirstNameLstInGradebook().each(($e1, index, $list) => {
      const txt = $e1.text()
      if (txt === this.report.FullNameProd) {
        adminGradebookPageNew.getSiViewArrowIcnLstInGradebook().eq(index).click()
      }
    })
  })

  it("To validate grading system configured in backend by clicking show grading system button/EL-5489/ES5489-25", function () {
    adminGradebookPageNew.getSiShowGradingSystemBtnInEditGradebookPage().click()
    cy.wait(1000)
    adminGradebookPageNew.getSiShowGradingSystemBtnInEditGradebookPage().should('contain.text', "Hide")
    adminGradebookPageNew.getSiTotalGradeLst().should('contain', "E")
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
      if (txt === this.report.FullNameProd) {
        adminGradebookPageNew.getSiViewArrowIcnLstInGradebook().eq(index).click()
      }
    })
    adminGradebookPageNew.getSiTotalPercntTxtInViewPage().find('h1').should('have.text', "54%")
  })

  it("To validate Grade is dislpayed based on total percentage/EL-5489/ES5489-29", function () {
    adminGradebookPageNew.getSiTotalGradeTxtInViewPage().find('h1').should('have.text', "C1")
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
      if (txt === this.report.FullNameProd) {
        adminGradebookPageNew.getSiViewArrowIcnLstInGradebook().eq(index).click()
      }
    })
    adminGradebookPageNew.getSiCancelBtnInViewPage().click()
    adminGradebookPageNew.getSiStudentGradebookPageTitle().should('have.text', "Student Gradebook")
  })

  it("To validate user able to get Grading details for Scholastic and Co-Scholastic Activities by clicking show grading system/EL-5489/ES5489-34", function () {
    adminGradebookPageNew.getSiFirstNameLstInGradebook().each(($e1, index, $list) => {
      const txt = $e1.text()
      if (txt === this.report.FullNameProd) {
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

  ///////////////////////////////////////////////////////////////////////////////////////////////////

  it("Validate user is able to view the list of templates (Preloaded by TopSchool/ New created by School), by clicking on “Student Gradebook” > “Template” in the “Reports” menu/EL-4150/ES4150_01", function () {
    cy.clearLocalStorage()
    cy.clearCookies()
    cy.visit(Cypress.env('urlProd'))
    indexPage.getAdmin().click();
    cy.fixture("LMS/validAdminLoginCredentials").then(function (validAdminLoginData) {
      this.validAdminLoginData = validAdminLoginData;
      cy.login(this.validAdminLoginData.prodUserName, this.validAdminLoginData.password)
    })
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
      if (gradeTxt.includes('Grade 1')) {
        adminStudentGradebookPage.getHarListOfTemplateEditBtn().eq(0).scrollIntoView().click()
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
      if (gradeTxt.includes('Grade 1')) {
        adminStudentGradebookPage.getHarListOfTemplateEditBtn().eq(0).scrollIntoView().should('be.visible').click()

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
      if (gradeTxt.includes('Grade 1')) {
        adminStudentGradebookPage.getHarListOfTemplateDraftDeleteBtn().should('not.be.disabled')

      }

    })
  })

  it("Validate whether user can view the gradebook template details or not/EL-4150/ES4150_14", function () {
    adminStudentGradebookPage.getHarStudentGradeName().each(($e1, index, $list) => {
      const gradeTxt = $e1.text()
      if (gradeTxt.includes('Grade 1')) {
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
    adminStudentGradebookPage.getHarStudentGradeName().eq(0).should('have.text', this.AdminReports.TemplateSearchValue)
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
    cy.wait(1000)
    cy.get('[aria-label="Edit Student"]').eq(2).click()
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
        if (gradeStdName.includes('Karthik')) {
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
      if (gradeTxt.includes('Grade 1')) {
        adminStudentGradebookPage.getHarListOfTemplateEditBtn().eq(0).scrollIntoView().click()
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
    adminStudentGradebookPage.getHarGradeFilterDropdownValues().contains('Grade 4').click({ force: true })
    cy.wait(1000)
    adminStudentGradebookPage.getHarSectionFilterDropdown().click()
    adminStudentGradebookPage.getHarSectionFilterDropdownValues().contains('A').click({ force: true })
    adminStudentGradebookPage.getHarGradeBookStudentName().each(($e1, index, $list) => {
      const gradeStdName = $e1.text()
      if (gradeStdName.includes('Karthik')) {
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
      if (gradeStdName.includes('Karthik')) {
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
      if (gradeTxt.includes('Grade 1')) {
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
      if (gradeStdName.includes('Karthik')) {
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
      if (gradeTxt.includes('Grade 1')) {
        adminStudentGradebookPage.getHarGradeBookTemplateView().eq(index).click()

      }

    })
    adminStudentGradebookPage.getHarGradeBookTemplateViewEditBtn().scrollIntoView().click()
    cy.wait(2000)
    adminStudentGradebookPage.getHarSaveAsDraftBtn().scrollIntoView().click()
    cy.wait(3000)
    adminStudentGradebookPage.getHarListOfTemplateDraftBtn().should('be.visible')

  })

  ///////////////////////////////////////////////////////////////////////////////////////////////////////

  //pre-condition
  it("Create new Template", function () {
    cy.clearLocalStorage()
    cy.clearCookies()
    cy.visit(Cypress.env('urlProd'))
    indexPage.getAdmin().click();
    cy.fixture("LMS/validAdminLoginCredentials").then(function (validAdminLoginData) {
      this.validAdminLoginData = validAdminLoginData;
      cy.login(this.validAdminLoginData.prodUserName, this.validAdminLoginData.password)
    })
    adminPostSetupHomePage.getReportsSectionLnk().click({ force: true })
    cy.wait(1000)
    adminGradebookPageNew.getSiStudentGradebookLnk().click({ force: true })
    adminGradebookPageNew.getSiCreateTemplateBtn().click()
    adminGradebookPageNew.getSiGradeDrpDwnInCreateTemplate().click()
    adminGradebookPageNew.getSiDrpDwnLstInCreateTemplate().contains(this.report.Grade3).click()
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
      if (txt === this.report.Grade3) {
        adminGradebookPageNew.getSiEditBtnLstInTemplatePage().eq(index).click()
        return false;
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
      if (txt === this.report.Grade3) {
        adminGradebookPageNew.getSiStatusLstInTemplatePage().eq(index).should('have.text', "Draft")
      }
    })
  })

  it("Validate user click on Save and Preview button, redirected to the Template preview screen/EL-5359/ES5359_07", function () {
    adminGradebookPageNew.getSiGradeLstInTemplatePage().each(($e1, index, $list) => {
      const txt = $e1.text()
      if (txt === this.report.Grade3) {
        adminGradebookPageNew.getSiEditBtnLstInTemplatePage().eq(index).click()
        return false;
      }
    })
    cy.wait(2000)
    adminGradebookPageNew.getSiSaveAndPreviewBtnInCreateTemplate().click()
    cy.contains("Gradebook " + this.report.Grade3 + " Preview").should('be.visible')
  })

  it("Validtae user click on Cancel button, redirected to the Template list screen/EL-5359/ES5359_08", function () {
    adminGradebookPageNew.getSiPreviewCancelBtn().click()
    adminGradebookPageNew.getSiTemplateTabInTemplate().should('be.visible')
  })

  it("Validate user click on “Go back” button, redirected to the previous screen/EL-5359/ES5359_09", function () {
    adminGradebookPageNew.getSiGradeLstInTemplatePage().each(($e1, index, $list) => {
      const txt = $e1.text()
      if (txt === this.report.Grade3) {
        adminGradebookPageNew.getSiEditBtnLstInTemplatePage().eq(index).click()
        return false;
      }
    })
    cy.scrollTo('bottom')
    adminGradebookPageNew.getSiCancelBtnInCreateTemplate().click()
    adminGradebookPageNew.getSiTemplateTabInTemplate().should('be.visible')
  })

  it("Validate whether delete option is available in the “Action” column in the template list screen/EL-5145/ES5145_01", function () {
    adminGradebookPageNew.getSiGradeLstInTemplatePage().each(($e1, index, $list) => {
      const txt = $e1.text()
      if (txt === this.report.Grade3) {
        adminGradebookPageNew.getSiDltBtnLstInTemplatePage().eq(index).should('be.visible')
        return false;
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
      if (txt === this.report.Grade3) {
        adminGradebookPageNew.getSiDltBtnLstInTemplatePage().eq(index).click()
        return false;
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
      if (txt === this.report.Grade3) {
        adminGradebookPageNew.getSiDltBtnLstInTemplatePage().eq(index).click()
        return false;
      }
    })
    adminGradebookPageNew.getSiDltCloseBtn().should('be.visible').click()
    adminGradebookPageNew.getSiTemplateTabInTemplate().should('be.visible')
  })

  it("Validate user click on 'delete' button,Successful popup is displayed  and  redirected to the listing screen and the system should remove the selected template from the list/EL-5145/ES5145_06", function () {
    adminGradebookPageNew.getSiGradeLstInTemplatePage().each(($e1, index, $list) => {
      const txt = $e1.text()
      if (txt === this.report.Grade3) {
        adminGradebookPageNew.getSiDltBtnLstInTemplatePage().eq(index).click()
      }
    })
    cy.contains("Do you want to delete Gradebook").should('be.visible')
    cy.wait(1500)
    adminGradebookPageNew.getSiDltBtnInPopup().click()
    cy.contains("Gradebook has been deleted").should('be.visible')
    cy.wait(1500)
    adminGradebookPageNew.getSiGradeLstInTemplatePage().should('not.contain.text', this.report.Grade3)
  })

})

