const esenseAdminCurriculumPlanPage = require("../../../support/pageObjects/LMS-2/EsenseAdminCurriculumPlanPage")
const adminPostSetupCurriculumBuilderPage = require("../../../support/pageObjects/LMS-2/AdminPostSetupCurriculumBuilderPage")

describe("Verify admin Curriculum Plan Page functionalities - Sprint 15(EL-4957,EL-4978)", function () {

  before(function () {
    cy.visit(Cypress.env("url"))
    cy.viewport(1920, 1080)
    cy.fixture("LMS/mainAdminLoginCredentials").then(function (validAdminLoginData) {
      cy.Mainlogin(validAdminLoginData.username, validAdminLoginData.password)
    })
  })

  beforeEach(function () {
    cy.fixture("LMS/EsenseAdminCurriculumPageCredentials").as("curriculumPage")
    cy.fixture("LMS/sprint14CurriculumBuilder").as("curriculumBuilder")
  })

  it("To validate that when user Click on 'Start with Chapter' button it's navigating to 'Add New Chapter' pop-up page/EL-4957/ES4957_01", function () {
    esenseAdminCurriculumPlanPage.getCurriculamPlanBtn().click()
    //it("To validate that in one page only 50 Curiculum list or records is dispalyed/EL-4157/ES4157_02",function(){
    cy.wait(2000)
    esenseAdminCurriculumPlanPage.getCurriculumListOfCourseCard().should('have.length.lte', 50)
    esenseAdminCurriculumPlanPage.getCurriculumSearchTxtField().type(this.curriculumPage.searchCourseName)
    cy.wait(3000)
    // esenseAdminCurriculumPlanPage.getCurriculumListOfCourseCard().should('contain.text',this.curriculumPage.searchCourseName)
    esenseAdminCurriculumPlanPage.getGradeLst().each(($e1, index, $list) => {
      const txt = $e1.text()
      if (txt.includes("Grade 9")) {
        esenseAdminCurriculumPlanPage.getAddCurriculamPlanBtn().eq(index).click()
        return false;
      }
    })
    adminPostSetupCurriculumBuilderPage.getAddThemeBtn().contains("Start With Theme / Unit").click() || adminPostSetupCurriculumBuilderPage.getAddThemeBtn().contains("Add").click()
    adminPostSetupCurriculumBuilderPage.getAddChaptertitle().should('be.visible')
    //})

    // it("To validate that user cannot change the format once chosen/EL-4957/ES4957_02",function(){
    adminPostSetupCurriculumBuilderPage.getEsenseAdminTotalSessionsTxtFld().clear().type(this.curriculumBuilder.ValidTotalSessionsNum)
    adminPostSetupCurriculumBuilderPage.getEsenseAdminThemeNameFld().type(this.curriculumBuilder.ChapterName)
    adminPostSetupCurriculumBuilderPage.getAdminThemeDescription().type(this.curriculumBuilder.ChapterDescription)
    adminPostSetupCurriculumBuilderPage.getSaveDraftBtn().click()
    cy.contains("successfully_added").should('be.visible')
    cy.wait(1000)
    adminPostSetupCurriculumBuilderPage.getAddThemeAddedBtn().should('be.visible')

    //   it("To validate that when user click on 'Save Draft' button, user is able add more Themes, units or chapters based on format choosed/EL-4957/ES4957_03",function(){
    adminPostSetupCurriculumBuilderPage.getAddThemeAddedBtn().click()
    adminPostSetupCurriculumBuilderPage.getAddChaptertitle().contains("Add New Theme / Unit").should('be.visible')
    esenseAdminCurriculumPlanPage.getChapterCloseIcon().click()

    //it("To validate that user is able to move Curriculam draft to publish among Schools / view as public by clicking 'Publish' button/EL-4957/ES4957_05",function(){
    esenseAdminCurriculumPlanPage.getChapterEditBtn().click({ force: true })
    adminPostSetupCurriculumBuilderPage.getEsenseAdminThemeNameFld().clear().type(this.curriculumBuilder.EditedChapterName)
    adminPostSetupCurriculumBuilderPage.getSaveDraftBtn().click()
    cy.wait(1000)
    esenseAdminCurriculumPlanPage.getPublishBtn().should('be.enabled').click()
    //})

    //})
    // it("delete the created chapter",function(){
    esenseAdminCurriculumPlanPage.getCurriculumSearchTxtField().type(this.curriculumPage.searchCourseName)
    cy.wait(3000)
    esenseAdminCurriculumPlanPage.getGradeLst().each(($e1, index, $list) => {
      const txt = $e1.text()
      if (txt.includes("Grade 9")) {
        esenseAdminCurriculumPlanPage.getAddCurriculamPlanBtn().eq(index).click()
        return false;
      }
    })
    adminPostSetupCurriculumBuilderPage.getEsenseAdminChapterLst().each(($e2, index, $list) => {
      const txt = $e2.text()
      if (txt.includes(this.curriculumBuilder.EditedChapterName)) {
        adminPostSetupCurriculumBuilderPage.getChapterDltBtn().click()
      }
    })
    adminPostSetupCurriculumBuilderPage.getDeleteThemeBtn().click()
    // })

    // it("To validate that 'Topic Duration' field is provided in the 'Topic' section/EL-4978/EL4978_01",function(){
    cy.wait(3000)
    adminPostSetupCurriculumBuilderPage.getAddThemeBtn().contains("Start With Theme / Unit").click() || adminPostSetupCurriculumBuilderPage.getAddThemeBtn().contains("Add").click()
    adminPostSetupCurriculumBuilderPage.getEsenseAdminTotalSessionsTxtFld().clear().type(this.curriculumBuilder.ValidTotalSessionsNum)
    adminPostSetupCurriculumBuilderPage.getEsenseAdminThemeNameFld().type(this.curriculumBuilder.ChapterName)
    adminPostSetupCurriculumBuilderPage.getAdminThemeDescription().type(this.curriculumBuilder.ChapterDescription)
    esenseAdminCurriculumPlanPage.getAddChapterInPopup().click()
    esenseAdminCurriculumPlanPage.getChapterNumberTxtField().type("02")
    esenseAdminCurriculumPlanPage.getChapterNameDropdown().select("measure")
    esenseAdminCurriculumPlanPage.getAddTopicBtn().click()
    esenseAdminCurriculumPlanPage.getTopicDurationTitle().should('be.visible')
    //it("To validate that "Topic Duration" field is Accepting the values in the form of HH:MM/EL-4978/EL4978_02",function(){
    esenseAdminCurriculumPlanPage.getHourTopicDurationFld().should('have.attr', 'placeholder', '00')
    esenseAdminCurriculumPlanPage.getMinutesTopicDurationFld().should('have.attr', 'placeholder', '00')
    // })
    //it("To validate that by default 00:00 values are displayed/EL-4978/EL4978_03",function(){
    esenseAdminCurriculumPlanPage.getHourTopicDurationTxt().should('be.exist')
    esenseAdminCurriculumPlanPage.getMinuteTopicDurationTxt().should('be.exist')
    esenseAdminCurriculumPlanPage.getTopicDropdown().select("atoms")
    esenseAdminCurriculumPlanPage.getTopicDescriptiontextarea().type(this.curriculumBuilder.ChapterDescription)
    esenseAdminCurriculumPlanPage.getHourTopicDurationFld().type(10)
    esenseAdminCurriculumPlanPage.getMinutesTopicDurationFld().type(30)
    esenseAdminCurriculumPlanPage.getAddTopicBtnInPopup().click()
    esenseAdminCurriculumPlanPage.getSaveDraftbtn().click()
    esenseAdminCurriculumPlanPage.getThemeSaveDraft().click()
    esenseAdminCurriculumPlanPage.getPublishBtn().click()
    cy.wait(2000)
    //})
    // it("delete the created chapter",function(){
    esenseAdminCurriculumPlanPage.getCurriculumSearchTxtField().type(this.curriculumPage.searchCourseName)
    cy.wait(3000)
    esenseAdminCurriculumPlanPage.getGradeLst().each(($e1, index, $list) => {
      const txt = $e1.text()
      if (txt.includes("Grade 9")) {
        esenseAdminCurriculumPlanPage.getAddCurriculamPlanBtn().eq(index).click()
        return false;
      }
    })
    adminPostSetupCurriculumBuilderPage.getEsenseAdminChapterLst().each(($e2, index, $list) => {
      const txt = $e2.text()
      if (txt.includes(this.curriculumBuilder.ChapterName)) {
        adminPostSetupCurriculumBuilderPage.getChapterDltBtn().eq(index).click()
      }
    })
    adminPostSetupCurriculumBuilderPage.getDeleteThemeBtn().click()
    // })

  })
})