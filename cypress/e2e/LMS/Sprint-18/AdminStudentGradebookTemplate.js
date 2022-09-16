import AdminPostSetupHomePage from "../../../support/pageObjects/LMS-2/AdminPostSetupHomePage";
import AdminGradebookPageNew from "../../../support/pageObjects/LMS-2/AdminGradebookPageNew";

const home = new AdminPostSetupHomePage();
const gradebook = new AdminGradebookPageNew();

describe("Verify Admin student grade book template functionalities", function () {
   before(function () {
      cy.visit(Cypress.env("urlMain"))
      cy.fixture("LMS/AdminLoginCredentials").then(function (validAdminLoginData) {
         cy.AdminPostSetup(validAdminLoginData.newUsername, validAdminLoginData.password)
      })
   })
   beforeEach(function () {
      cy.fixture("LMS/AdminReports").then(function (report) {
         this.report = report;
      })
   })

   //pre-condition

   it("Create new Template", function () {
      home.getReportsSectionLnk().click({ force: true })
      gradebook.getSiStudentGradebookLnk().click()
      gradebook.getSiCreateTemplateBtn().click()
      gradebook.getSiGradeDrpDwnInCreateTemplate().click()
      gradebook.getSiDrpDwnLstInCreateTemplate().contains(this.report.Grade).click()
      gradebook.getSiSectionDrpDwnInCreateTemplate().click()
      gradebook.getSiDrpDwnLstInCreateTemplate().contains(this.report.Section).click()
      gradebook.getSiNoTermsDrpDwnInCreateTemplate().click({ force: true })
      gradebook.getSiDrpDwnLstInCreateTemplate().contains(this.report.Terms).click()
      gradebook.getSiAddTestTypeInCreateTemplate().click({ force: true })
      cy.wait(1000)
      gradebook.getSiAddTestTermDrpDwn().click({ force: true })
      gradebook.getSiDrpDwnLstInCreateTemplate().contains(this.report.Terms).click({ force: true })
      gradebook.getSiTestTypeDrpDwnInCreateTemplate().click({ force: true })
      gradebook.getSiDrpDwnLstInCreateTemplate().contains(this.report.TestType).click({ force: true })
      gradebook.getSiMaxMarksDrpDwnInCreateTemplate().click({ force: true })
      gradebook.getSiDrpDwnLstInCreateTemplate().contains(this.report.MaxMarks).click({ force: true })
      gradebook.getSiAddSubjectInCreateTemplate().click({ force: true })
      gradebook.getSiSubDrpDwnInAddSub().click({ force: true })
      gradebook.getSiDrpDwnLstInGradebook().contains(this.report.Subject).click({ force: true })
      gradebook.getSiAddTheoryInCreateTemplate().click({ force: true })
      gradebook.getSiTestTypeDrpDwnInAddTheoryCreateTemplate().click({ force: true })
      gradebook.getSiDrpDwnLstInCreateTemplate().contains(this.report.TestType).click({ force: true })
      gradebook.getSiTheoryFldInAddTheoryCreateTemplate().type(this.report.TheoryMark, { force: true })
      gradebook.getSiErrorMsgInCreateTemplate().should('be.visible')
      gradebook.getSiPracticalInAddTheoryCreateTemplate().type(this.report.PracticalMark, { force: true })
      gradebook.getSiErrorMsgInCreateTemplate().should('not.be.visible')
      cy.scrollTo('bottom')
      gradebook.getSiAddActivityInCreateTemplate().click({ force: true })
      gradebook.getSiActivityFldInCreateTemplate().type(this.report.Activity, { force: true })
      gradebook.getSiSaveAsDraftBtnInCreateTemplate().click({ force: true })
   })

   it("Validate whether edit option is available in action column in the Template list screen/EL-5358/ES5358_01", function () {
      //   home.getReportsSectionLnk().click({force:true})
      //   gradebook.getSiStudentGradebookLnk().click()
      gradebook.getSiEditBtnLstInTemplatePage().should('be.visible')
   })

   it("Validate user click on “Edit” option,  redirected to the “Edit Gradebook” screen/EL-5359/ES5359_02", function () {
      gradebook.getSiGradeLstInTemplatePage().each(($e1, index, $list) => {
         const txt = $e1.text()
         if (txt === this.report.Grade) {
            gradebook.getSiEditBtnLstInTemplatePage().eq(index).click()
         }
      })
      gradebook.getSiTemplateTitle().should('contain.text', "Edit Gradebook")
   })

   it("Validate whether system allows the user to edit the gradebook as per their requirement except the grade/EL-5359/ES5359_03", function () {
      gradebook.getSiAddTestTypeInCreateTemplate().should('be.enabled')
      gradebook.getSiAddSubjectInCreateTemplate().should('be.enabled')
      gradebook.getSiTheoryFldInAddTheoryCreateTemplate().should('be.enabled')
      gradebook.getSiPracticalInAddTheoryCreateTemplate().should('be.enabled')
      gradebook.getSiAddActivityInCreateTemplate().should('be.enabled')
      gradebook.getSiActivityFldInCreateTemplate().should('be.enabled')
   })

   it("Validate system should not allow user to edit the published gradebook template/EL-5359ES5359_04", function () {
      gradebook.getSiGradeDrpDwnInCreateTemplate().should('not.be.enabled')
      gradebook.getSiSectionDrpDwnInCreateTemplate().should('not.be.enabled')
   })

   it("Validate user once editing is done the following options should be available - Save as Draft , save and preview and cancel button/EL-5359/ES5359_05", function () {
      cy.scrollTo('bottom')
      gradebook.getSiSaveAsDraftBtnInCreateTemplate().should('be.enabled')
      gradebook.getSiSaveAndPreviewBtnInCreateTemplate().should('be.enabled')
      gradebook.getSiCancelBtnInCreateTemplate().should('be.enabled')
   })

   it("Validate user clicks on 'Save as Draft' button/EL-5359/ES5359_06", function () {
      gradebook.getSiSaveAsDraftBtnInCreateTemplate().click()
      gradebook.getSiGradeLstInTemplatePage().each(($e1, index, $list) => {
         const txt = $e1.text()
         if (txt === this.report.Grade) {
            gradebook.getSiStatusLstInTemplatePage().eq(index).should('have.text', "Draft")
         }
      })
   })

   it("Validate user click on Save and Preview button, redirected to the Template preview screen/EL-5359/ES5359_07", function () {
      gradebook.getSiGradeLstInTemplatePage().each(($e1, index, $list) => {
         const txt = $e1.text()
         if (txt === this.report.Grade) {
            gradebook.getSiEditBtnLstInTemplatePage().eq(index).click()
         }
      })
      cy.wait(2000)
      gradebook.getSiSaveAndPreviewBtnInCreateTemplate().click()
      cy.contains("Gradebook " + this.report.Grade + " Preview").should('be.visible')
   })

   it("Validtae user click on Cancel button, redirected to the Template list screen/EL-5359/ES5359_08", function () {
      gradebook.getSiPreviewCancelBtn().click()
      gradebook.getSiTemplateTabInTemplate().should('be.visible')
   })

   it("Validate user click on “Go back” button, redirected to the previous screen/EL-5359/ES5359_09", function () {
      gradebook.getSiGradeLstInTemplatePage().each(($e1, index, $list) => {
         const txt = $e1.text()
         if (txt === this.report.Grade) {
            gradebook.getSiEditBtnLstInTemplatePage().eq(index).click()
         }
      })
      cy.scrollTo('bottom')
      gradebook.getSiCancelBtnInCreateTemplate().click()
      gradebook.getSiTemplateTabInTemplate().should('be.visible')
   })

   it("Validate whether delete option is available in the “Action” column in the template list screen/EL-5145/ES5145_01", function () {
      gradebook.getSiGradeLstInTemplatePage().each(($e1, index, $list) => {
         const txt = $e1.text()
         if (txt === this.report.Grade) {
            gradebook.getSiDltBtnLstInTemplatePage().eq(index).should('be.visible')
         }
      })
   })

   it("Validate system should not allow user to delete the published gradebook template/EL-5145/ES5145_03", function () {
      gradebook.getSiStatusLstInTemplatePage().each(($e1, index, $list) => {
         const txt = $e1.text()
         if (txt === this.report.Status2) {
            gradebook.getSiDltBtnLstInTemplatePage().eq(index).should('not.be.enabled')
         }
      })
   })

   it("Validate user click on Delete option, confirmation popup is displayed with the following option - Delete, cancel,cross/EL-5145/ES5145_05", function () {
      gradebook.getSiGradeLstInTemplatePage().each(($e1, index, $list) => {
         const txt = $e1.text()
         if (txt === this.report.Grade) {
            gradebook.getSiDltBtnLstInTemplatePage().eq(index).click()
         }
      })
      gradebook.getSiDltCloseBtn().should('be.visible')
      gradebook.getSiDltBtnInPopup().should('be.visible')
      gradebook.getSiCancelBtnInPopup().should('be.visible')
   })

   it("Validate user click on  'Cancel' button, redirected to the template listing screen/EL-5145/ES5145_07", function () {
      gradebook.getSiCancelBtnInPopup().should('be.visible').click()
      gradebook.getSiTemplateTabInTemplate().should('be.visible')
   })

   it("Validate user click on 'Cross' button , re-directed to the template listing screen/EL-5145/ES5145_08", function () {
      gradebook.getSiGradeLstInTemplatePage().each(($e1, index, $list) => {
         const txt = $e1.text()
         if (txt === this.report.Grade) {
            gradebook.getSiDltBtnLstInTemplatePage().eq(index).click()
         }
      })
      gradebook.getSiDltCloseBtn().should('be.visible').click()
      gradebook.getSiTemplateTabInTemplate().should('be.visible')
   })

   it("Validate user click on 'delete' button,Successful popup is displayed  and  redirected to the listing screen and the system should remove the selected template from the list/EL-5145/ES5145_06", function () {
      gradebook.getSiGradeLstInTemplatePage().each(($e1, index, $list) => {
         const txt = $e1.text()
         if (txt === this.report.Grade) {
            gradebook.getSiDltBtnLstInTemplatePage().eq(index).click()
         }
      })
      cy.contains("Do you want to delete Gradebook").should('be.visible')
      gradebook.getSiDltBtnInPopup().click()
      cy.contains("Gradebook has been deleted").should('be.visible')
      gradebook.getSiGradeLstInTemplatePage().should('not.contain.text', this.report.Grade)
   })
})
//pre-setup
//1.want to create a new template for grade one manually, if it is not running