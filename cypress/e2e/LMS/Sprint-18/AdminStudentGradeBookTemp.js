const adminStudentGradebookPage = require("../../../support/pageObjects/LMS-2/AdminStudentGradebookPage")

describe("Verify admin student grade book temp functionalities", function () {

  before(function () {
    cy.visit(Cypress.env('urlStagingPostSetup'))
    cy.fixture('LMS/AdminLoginCredentials').then(function (validAdminLoginData) {
      cy.AdminPostSetup(validAdminLoginData.updUserName, validAdminLoginData.password)
    })
  })

  beforeEach(function () {
    cy.fixture("LMS/mainAdminGradebookCredentials").as("AdminReports")
  })

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
      adminStudentGradebookPage.getHarGradeBookStudentNameTxt().eq(0).should('include', sometext)

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

})



// create 4 grades for template
// make grade 3 A as draft
// grade 4 A for bulk upload
// grade 3 A student is teju
// grade 4 A student is mahesh
// social science for bulk upload sub


