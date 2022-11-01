const adminPostSetupHomePage = require("../../../support/pageObjects/LMS-2/AdminPostSetupHomePage")
const adminStudentGradebookPage = require("../../../support/pageObjects/LMS-2/AdminStudentGradebookPage")
const adminGradeBookPage = require("../../../support/pageObjects/LMS-2/AdminGradeBookPage")
const adminGradebookPageNew = require("../../../support/pageObjects/LMS-2/AdminGradebookPageNew")
const indexPage = require('../../../support/pageObjects/LMS-1/IndexPage')

describe("Sprint 19(EL-6082,EL-5493,EL-5358,EL-4151) - Verify Admin student grade book functionalities", function () {

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
  it("Validate user clicks on “Create Template”, the user redirected to the “Create New Template” screen/EL-4151/ES4151_02", function () {
    adminPostSetupHomePage.getReportsSectionLnk().click({ force: true })
    cy.wait(1000)
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
    adminGradeBookPage.getSectionsLst().contains("Annual exam").click()
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
    adminGradeBookPage.getSectionsLst().contains("Annual exam").click()
    adminGradeBookPage.getAddSubBtn().click({ force: true })
    adminGradeBookPage.getAddSubdrpDwnInAddSub().click({ force: true })
    adminGradeBookPage.getSectionsLst().contains("English").click({ force: true })
  })

  it("Validtae subject is selected from the dropdown, system should not allow user to select the same subject again and subject should be grey-out in the list/EL-4151/ES4151_18", function () {
    adminGradeBookPage.getAddTheoryBtnLst().eq(1).click({ force: true })
    adminGradeBookPage.getAddTestTypeDrpDwnInAddTheory().click({ force: true })
    adminGradeBookPage.getSectionsLst().contains("Annual exam").click({ force: true })
    adminGradeBookPage.getAddTestBtn().click({ force: true })
    adminGradeBookPage.getAddTestTermDrpDwn().click({ force: true })
    adminGradeBookPage.getSectionsLst().eq(0).click()
    adminGradeBookPage.getAddTestTstTypeDrpdwn().click({ force: true })
    adminGradeBookPage.getSectionsLst().contains("Half Yearly").click({ force: true })
    adminGradeBookPage.getMaxMarksDrpDwn().click({ force: true })
    adminGradeBookPage.getMaxMarksDrpDwnbtn().scrollTo('bottom').contains(100).click({ force: true })
    adminGradeBookPage.getAddTheoryBtnLst().eq(1).click({ force: true })
    adminGradeBookPage.getAddTestTypeDrpDwnInAddTheory().click({ force: true })
    adminGradeBookPage.getAddTheoryAddTermDrpDwnLst().contains("Annual exam").should('not.exist')
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

  ///////////////////////////////////////////////////////////////////////////////////////////////////////


  //pre-condition
  it("Validate user is able to create Gradebook by clicking TopSchool option in the “Create Template” screen/EL-5358/ES5358_01", function () {
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
    adminGradebookPageNew.getSiActivityFldInCreateTemplate().should('have.length', 1)
  })

  it("Validate whether in the preview gradebook template, the following option is available for the user -Edit and create new/EL-5358/ES5358_05", function () {
    adminGradebookPageNew.getSiEditBtnInCreateTemplatePageInTopschool().should('be.enabled').and('be.visible')
    adminGradebookPageNew.getSiCreateNwCreateTemplatePageInTopSchl().should('be.enabled').and('be.visible')
  })

  it("Validate user click on “Edit” button, navigate to preview the gradebook template/EL-5358/ES5358_04", function () {
    adminGradebookPageNew.getSiEditBtnInCreateTemplatePageInTopschool().click()
    cy.contains("Edit Gradebook undefined").should('be.visible')
  })

})

