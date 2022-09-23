const adminPostSetupHomePage = require("../../../support/pageObjects/LMS-2/AdminPostSetupHomePage")
const adminGradebookPageNew = require("../../../support/pageObjects/LMS-2/AdminGradebookPageNew")

describe("Verify Admin student grade book template functionalities", function () {

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
   it("Create new Template", function () {
      adminPostSetupHomePage.getReportsSectionLnk().click({ force: true })
      adminGradebookPageNew.getSiStudentGradebookLnk().click()
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
})
//pre-setup
//1.want to create a new template for grade one manually, if it is not running