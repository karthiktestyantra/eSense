import EsenseAdminCurriculumPlanPage from "../../../support/pageObjects/LMS-2/EsenseAdminCurriculumPlanPage";

const esenseAdminCurriculamPlanPage = new EsenseAdminCurriculumPlanPage();

describe("Verify Curriculum Plan Page functionalities", function () {
  before(function () {
    cy.viewport(1920, 1080)
    cy.visit(Cypress.env("url"))
    cy.fixture("LMS/mainAdminLoginCredentials").then(function (validAdminLoginData) {
      cy.Mainlogin(validAdminLoginData.username, validAdminLoginData.password)
    })
  })
  beforeEach(function () {
    cy.fixture("LMS/EsenseAdminCurriculumPageCredentials").then(function (curriculumPage) {
      this.curriculumPage = curriculumPage;
    })
  })

  it("To validate that when user click on “Curriculum Plan”, all pre created Course cards are displayed/EL-2280/ES2280_01", function () {
    esenseAdminCurriculamPlanPage.getCurriculamPlanBtn().contains(this.curriculumPage.curriculumplantxt).click()
    esenseAdminCurriculamPlanPage.getCurriculumListOfCourseCard().should('be.visible')



    //it("To validate that user is able to search the course by entering Course Name into the search bar/EL-2280/ES2280_02",function(){
    esenseAdminCurriculamPlanPage.getCurriculumSearchTxtField().type(this.curriculumPage.searchCourseName)
    cy.wait(3000)
    esenseAdminCurriculamPlanPage.getCurriculumListOfCourseCard().should('contain.text', this.curriculumPage.searchCourseName)

    //})

    // it("To verify that when user Click on Add Curriculam button on any Course card, it's navigating Add Curriculam page./EL-2280/ES2280_03",function(){   
    esenseAdminCurriculamPlanPage.getAddCurriculamPlanBtn().eq(0).click({ force: true })
    esenseAdminCurriculamPlanPage.getAddCurriculamTitle().should('contain', this.curriculumPage.addCurriculumTitleTxt)

    // })

    //it("To validate the Start with Theme/unit and Start with Chapter buttons are provided in Add Curriculam page/EL-2280/ES2280_04",function(){
    esenseAdminCurriculamPlanPage.getListOfAddThemesOrUnitandChaptersBtn().should('be.visible')
    // })

    // it("To validate that when user click on Start with Theme/unit button it's navigating to Add new Theme/Unit pop-up page./EL-2280/ES2280_05",function(){
    esenseAdminCurriculamPlanPage.getListOfAddThemesOrUnitandChaptersBtn().contains(this.curriculumPage.startWiththemeOrUnitTxt).click()
    esenseAdminCurriculamPlanPage.getAddNewThemeOrUnitPopupTitle().should("have.text", this.curriculumPage.addNewThemeOrUnitPopupTitleTxt)


    // it("To validate that when user Click on Start with Chapter button it's navigating to Add New Chapter pop-up page./EL-2280/ES2280_06",function(){
    esenseAdminCurriculamPlanPage.getListOfAddThemesOrUnitandChaptersBtn().contains(this.curriculumPage.startWithChapterTxt).click({ force: true })
    esenseAdminCurriculamPlanPage.getAddNewChapterPopupTitle().should("have.text", this.curriculumPage.addNewChapterTxtPopupTitleTxt)
    esenseAdminCurriculamPlanPage.getCloseIcon().click()
    // })

    // it('To validate that when user click on "Continue" button, user is able to add more Themes, units or chapters based on format choosed/EL-2280/ES2280_07',function(){
    cy.go('back')
    cy.wait(3000)
    esenseAdminCurriculamPlanPage.getListOfCurriculamGradeTxt().each(($e1, index, $list) => {
      const curriculumHeaderTxt = $e1.text()
      if (curriculumHeaderTxt.includes(this.curriculumPage.CurriculamGrade)) {
        esenseAdminCurriculamPlanPage.getAddCurriculamBtn().eq(index).click({ force: true })
        return false;
      }

    })
    //esenseAdminCurriculamPlanPage.getAddCurriculamPlanBtn().eq(2).click()
    esenseAdminCurriculamPlanPage.getListOfAddThemesOrUnitandChaptersBtn().contains(this.curriculumPage.startWithChapterTxt).click({ force: true })
    esenseAdminCurriculamPlanPage.getChapterNumberTxtField().type(this.curriculumPage.chapterNumberTxtField)
    esenseAdminCurriculamPlanPage.getChapterNameDropdown().select(this.curriculumPage.chapterName)
    esenseAdminCurriculamPlanPage.getChapterDiscription().type(this.curriculumPage.chapterDiscription)
    esenseAdminCurriculamPlanPage.getChapterDiscription().then(function (chapterDescription) {
      const descriptionTxt = chapterDescription.text()
      // esenseAdminCurriculamPlanPage.getCalenderIcon().eq(0).click()
      // esenseAdminCurriculamPlanPage.getCalenderIcon().eq(1).click()
      // esenseAdminCurriculamPlanPage.getChapterEndNextArrowBtn().eq(1).click({force:true})
      // esenseAdminCurriculamPlanPage.getChapterEndDate().eq(0).click({force:true})
      // cy.wait(1000)
      esenseAdminCurriculamPlanPage.getChapterTotalSession().type(this.curriculumPage.chapterTotalSession)
      esenseAdminCurriculamPlanPage.getAddTopicBtn().click()
      esenseAdminCurriculamPlanPage.getTopicNameDropDown().select(this.curriculumPage.topicname)
      esenseAdminCurriculamPlanPage.getTopicDescription().type(this.curriculumPage.TopicDescription)
      esenseAdminCurriculamPlanPage.getSaveTopicbtn().click({ force: true })
      esenseAdminCurriculamPlanPage.getAddObjectiveBtn().click()
      esenseAdminCurriculamPlanPage.getObjectiveDiscription().type(this.curriculumPage.ObjectiveDiscription)
      esenseAdminCurriculamPlanPage.getSaveObjectiveBtn().click()
      esenseAdminCurriculamPlanPage.getAddOutComeBtn().click()
      esenseAdminCurriculamPlanPage.getOutComeDiscription().type(this.curriculumPage.outComeDiscription)
      esenseAdminCurriculamPlanPage.getSaveOutcomeBtn().click()
      esenseAdminCurriculamPlanPage.getSaveDraftbtn().click({ force: true })
      cy.wait(3000)
      esenseAdminCurriculamPlanPage.getReattemptAddChapterBtn().should('be.visible')
      esenseAdminCurriculamPlanPage.getChapterDescriptionName().each(($e1, index, $list) => {
        const chapterDescriptionName = $e1.text()
        if (chapterDescriptionName.includes(descriptionTxt)) {
          esenseAdminCurriculamPlanPage.getChapterDeleteBtn().eq(index).click()
          esenseAdminCurriculamPlanPage.getDeleteChapterPopupBtn().click()
          cy.wait(4000)

        }
      })
    })
    // })

    // it('To validate that when user click on "Continue" button, user is able to add more Themes, units or chapters based on format choosed/EL-2280/ES2280_08',function(){
    esenseAdminCurriculamPlanPage.getListOfAddThemesOrUnitandChaptersBtn().contains(this.curriculumPage.startWiththemeOrUnitTxt).click({ force: true })
    esenseAdminCurriculamPlanPage.getThemeName().type(this.curriculumPage.themeNameLessThn50)
    esenseAdminCurriculamPlanPage.getThemeDiscription().type(this.curriculumPage.themeDiscription)
    esenseAdminCurriculamPlanPage.getThemeDiscription().then(function (themeDescription) {
      var themedescriptionTxt = themeDescription.text()
      esenseAdminCurriculamPlanPage.getAddNewChapterBtn().click()
      esenseAdminCurriculamPlanPage.getChapterNumberTxtField().type(this.curriculumPage.chapterNumberTxtField)
      esenseAdminCurriculamPlanPage.getChapterNameDropdown().select(this.curriculumPage.chapterName)
      esenseAdminCurriculamPlanPage.getChapterDiscription().type(this.curriculumPage.chapterDiscription)
      esenseAdminCurriculamPlanPage.getChapterDiscription().then(function (chapterDescription) {
        const descriptionTxt = chapterDescription.text()
        // esenseAdminCurriculamPlanPage.getCalenderIcon().eq(0).click()
        // esenseAdminCurriculamPlanPage.getCalenderIcon().eq(1).click()
        // esenseAdminCurriculamPlanPage.getChapterEndNextArrowBtn().eq(1).click({force:true})
        // esenseAdminCurriculamPlanPage.getChapterEndDate().eq(0).click({force:true})
        cy.wait(1000)
        esenseAdminCurriculamPlanPage.getChapterTotalSession().click().type(this.curriculumPage.chapterTotalSession)
        esenseAdminCurriculamPlanPage.getAddTopicBtn().click()
        esenseAdminCurriculamPlanPage.getTopicNameDropDown().select(this.curriculumPage.topicname)
        esenseAdminCurriculamPlanPage.getTopicDescription().type(this.curriculumPage.TopicDescription)
        esenseAdminCurriculamPlanPage.getSaveTopicbtn().click({ force: true })
        esenseAdminCurriculamPlanPage.getAddObjectiveBtn().click()
        esenseAdminCurriculamPlanPage.getObjectiveDiscription().type(this.curriculumPage.ObjectiveDiscription)
        esenseAdminCurriculamPlanPage.getSaveObjectiveBtn().click()
        esenseAdminCurriculamPlanPage.getAddOutComeBtn().click()
        esenseAdminCurriculamPlanPage.getOutComeDiscription().type(this.curriculumPage.outComeDiscription)
        esenseAdminCurriculamPlanPage.getSaveOutcomeBtn().click()
        esenseAdminCurriculamPlanPage.getEndAddChapterBtn().click()
        esenseAdminCurriculamPlanPage.getThemeSaveDraft().click({ force: true })
        cy.wait(6000)
        esenseAdminCurriculamPlanPage.getReattemptAddThemeBtn().should('be.visible')
        esenseAdminCurriculamPlanPage.getThemeEndDescription().each(($e2, index, $list) => {
          const themeDescriptionName = $e2.text()
          if (themeDescriptionName.includes(themedescriptionTxt)) {
            esenseAdminCurriculamPlanPage.getThemeDeleteBtn().eq(index).click()
            esenseAdminCurriculamPlanPage.getDeleteThemerPopupBtn().click()
            cy.wait(5000)

          }
        })
      })
      // })


      it.skip("To validate that when user is able to save Curriculam as draft by clicking on 'Save Draft' button/EL-2280/ES2280_09", function () {
        //cy.go('back')
        // esenseAdminCurriculamPlanPage.getAddCurriculamPlanBtn().eq(2).click()
        esenseAdminCurriculamPlanPage.getListOfAddThemesOrUnitandChaptersBtn().contains(this.curriculumPage.startWithChapterTxt).click({ force: true })
        esenseAdminCurriculamPlanPage.getChapterNumberTxtField().type(this.curriculumPage.chapterNumberTxtField)
        // esenseAdminCurriculamPlanPage.getChapterDiscription().then(function(chapterDescription){
        // const descriptionTxt = chapterDescription.text()
        esenseAdminCurriculamPlanPage.getChapterNameDropdown().select('Top')
        //  esenseAdminCurriculamPlanPage.getAddChapterNameDropdownText().then(function(chapterDropdown){
        //   const chapterDropdownTxt = chapterDropdown.text()
        // esenseAdminCurriculamPlanPage.getCalenderIcon().eq(0).click()
        // esenseAdminCurriculamPlanPage.getCalenderIcon().eq(1).click()
        // esenseAdminCurriculamPlanPage.getChapterEndNextArrowBtn().eq(1).click({force:true})
        // esenseAdminCurriculamPlanPage.getChapterEndDate().click()
        esenseAdminCurriculamPlanPage.getChapterTotalSession().type(this.curriculumPage.chapterTotalSession)
        esenseAdminCurriculamPlanPage.getAddTopicBtn().click()
        esenseAdminCurriculamPlanPage.getTopicNameDropDown().select('name')
        esenseAdminCurriculamPlanPage.getTopicDescription().type(this.curriculumPage.TopicDescription)
        esenseAdminCurriculamPlanPage.getSaveTopicbtn().click({ force: true })
        esenseAdminCurriculamPlanPage.getAddObjectiveBtn().click()
        esenseAdminCurriculamPlanPage.getObjectiveDiscription().type(this.curriculumPage.ObjectiveDiscription)
        esenseAdminCurriculamPlanPage.getSaveObjectiveBtn().click()
        esenseAdminCurriculamPlanPage.getAddOutComeBtn().click()
        esenseAdminCurriculamPlanPage.getOutComeDiscription().type(this.curriculumPage.outComeDiscription)
        esenseAdminCurriculamPlanPage.getSaveOutcomeBtn().click()
        esenseAdminCurriculamPlanPage.getSaveDraftbtn().click({ force: true })
        cy.wait(6000)
        esenseAdminCurriculamPlanPage.getAddChapterDraftSuccessMsg().should('contain.text', this.curriculumPage.addChapterDraftSuccessMsg)
        esenseAdminCurriculamPlanPage.getAddChapterDraftedHeader().each(($e3, index, $list) => {
          const chapterDraftedHeaderTxt = $e3.text()
          if (chapterDraftedHeaderTxt.includes(chapterDropdownTxt)) {
            esenseAdminCurriculamPlanPage.getAddChapterDraftedHeader().eq(index).should('be.visible')
          }
        })


        // cy.wait(5000)

        // esenseAdminCurriculamPlanPage.getChapterDescriptionName().each(($e1,index,$list)=>{

        //   const chapterDescriptionName = $e1.text()
        //       if(chapterDescriptionName.includes(descriptionTxt)){
        //         esenseAdminCurriculamPlanPage.getChapterDeleteBtn().eq(index).click()
        //         esenseAdminCurriculamPlanPage.getDeleteChapterPopupBtn().click()
        //         cy.wait(4000)

        //       }
        //    })  
      })
    })

    // it("To validate that when user is able to save Curriculam as draft by clicking on 'Save Draft' button/EL-2280/ES2280_09",function (){
    esenseAdminCurriculamPlanPage.getListOfAddThemesOrUnitandChaptersBtn().contains(this.curriculumPage.startWithChapterTxt).click({ force: true })
    esenseAdminCurriculamPlanPage.getChapterNumberTxtField().type(this.curriculumPage.chapterNumberTxtField)
    //       esenseAdminCurriculamPlanPage.getChapterDiscription().then(function(chapterDescription){
    //  const descriptionTxt = chapterDescription.text()
    esenseAdminCurriculamPlanPage.getChapterNameDropdown().select(this.curriculumPage.chapterName)
    // esenseAdminCurriculamPlanPage.getAddChapterNameDropdownText().then(function(chapterDropdown){
    //  const chapterDropdownTxt = chapterDropdown.text()
    esenseAdminCurriculamPlanPage.getChapterDiscription().type(this.curriculumPage.chapterDiscription)
    //  esenseAdminCurriculamPlanPage.getCalenderIcon().eq(0).click()
    //  esenseAdminCurriculamPlanPage.getCalenderIcon().eq(1).click()
    //  esenseAdminCurriculamPlanPage.getChapterEndNextArrowBtn().eq(1).click({force:true})
    //  esenseAdminCurriculamPlanPage.getChapterEndDate().eq(0).click({force:true})
    cy.wait(1000)
    esenseAdminCurriculamPlanPage.getChapterTotalSession().type(this.curriculumPage.chapterTotalSession)
    esenseAdminCurriculamPlanPage.getAddTopicBtn().click()
    esenseAdminCurriculamPlanPage.getTopicNameDropDown().select(this.curriculumPage.topicname)
    esenseAdminCurriculamPlanPage.getTopicDescription().type(this.curriculumPage.TopicDescription)
    esenseAdminCurriculamPlanPage.getSaveTopicbtn().click({ force: true })
    esenseAdminCurriculamPlanPage.getAddObjectiveBtn().click()
    esenseAdminCurriculamPlanPage.getObjectiveDiscription().type(this.curriculumPage.ObjectiveDiscription)
    esenseAdminCurriculamPlanPage.getSaveObjectiveBtn().click()
    esenseAdminCurriculamPlanPage.getAddOutComeBtn().click()
    esenseAdminCurriculamPlanPage.getOutComeDiscription().type(this.curriculumPage.outComeDiscription)
    esenseAdminCurriculamPlanPage.getSaveOutcomeBtn().click()
    esenseAdminCurriculamPlanPage.getSaveDraftbtn().click({ force: true })
    cy.wait(6000)
    esenseAdminCurriculamPlanPage.getAddChapterDraftSuccessMsg().should('contain.text', this.curriculumPage.addChapterDraftSuccessMsg)
    esenseAdminCurriculamPlanPage.getAddChapterDraftedHeader().each(($e3, index, $list) => {
      const chapterDraftedHeaderTxt = $e3.text()
      if (chapterDraftedHeaderTxt.includes(this.curriculumPage.chapterName)) {
        esenseAdminCurriculamPlanPage.getAddChapterDraftedHeader().eq(index).should('be.visible')
        cy.wait(5000)

        esenseAdminCurriculamPlanPage.getChapterDeleteBtn().eq(0).click()
        esenseAdminCurriculamPlanPage.getDeleteChapterPopupBtn().click()
        cy.wait(4000)


      }

      //   cy.wait(5000)

      // //  esenseAdminCurriculamPlanPage.getChapterDescriptionName().each(($e1,index,$list)=>{
      // //    const chapterDescriptionName = $e1.text()
      // //        if(chapterDescriptionName.includes(descriptionTxt)){
      //          esenseAdminCurriculamPlanPage.getChapterDeleteBtn().eq(0).click()
      //          esenseAdminCurriculamPlanPage.getDeleteChapterPopupBtn().click()
      //          cy.wait(4000)

      // //        }
      // //     })


    })
    // })

    // it("To validate that when user click on Start with Theme/unit button it's navigating to Add new Theme/Unit pop-up page./EL-2281/ES2281_01",function (){
    cy.wait(2000)
    esenseAdminCurriculamPlanPage.getListOfAddThemesOrUnitandChaptersBtn().contains(this.curriculumPage.startWiththemeOrUnitTxt).click({ force: true })
    esenseAdminCurriculamPlanPage.getAddThemePopupHeaderTitle().should('contain.text', this.curriculumPage.addNewThemeOrUnitPopupTitleTxt)

    // })

    // it("To validate that Theme Name Textbox is not accepting blank value and throwing error message/EL-2281/ES2281_06",function(){
    esenseAdminCurriculamPlanPage.getThemeName().type(" ")
    esenseAdminCurriculamPlanPage.getThemeDiscription().click()
    esenseAdminCurriculamPlanPage.getThisFieldReqMes().should('be.visible')
    // })

    // it("To validate that when user enters more than 50 charecters into Theme Name Textbox , Error message is displayed/EL-2281/ES2281_05",function(){
    esenseAdminCurriculamPlanPage.getThemeName().type(this.curriculumPage.themeNameLessThn50)
    esenseAdminCurriculamPlanPage.getThemeName().clear()
    esenseAdminCurriculamPlanPage.getThemeName().type(this.curriculumPage.themeNameMoreThn50)
    esenseAdminCurriculamPlanPage.getThemeDiscription().click()
    esenseAdminCurriculamPlanPage.getMax50CharexeedMsg().should('be.visible')
    // })


    // it("To validate that Theme Description Textbox is not accepting blank value and throwing error message/EL-2281/ES2281_11",function(){
    esenseAdminCurriculamPlanPage.getThemeName().clear()
    esenseAdminCurriculamPlanPage.getThemeName().type(this.curriculumPage.themeNameLessThn50)
    esenseAdminCurriculamPlanPage.getThemeDiscription().type(this.curriculumPage.themeDiscriptionMoreThn100).clear()
    esenseAdminCurriculamPlanPage.getThemeName().click()
    esenseAdminCurriculamPlanPage.getThisFieldReqMes().should('be.visible')
    // })

    // it("To validate that when user enters more than 100 charecters into Theme Description Textbox , Error message is displayed/EL-2281/ES2281_10",function(){
    esenseAdminCurriculamPlanPage.getThemeName().clear()
    esenseAdminCurriculamPlanPage.getThemeName().type(this.curriculumPage.themeNameLessThn50)
    esenseAdminCurriculamPlanPage.getThemeDiscription().type(this.curriculumPage.themeDiscriptionMoreThn100)
    esenseAdminCurriculamPlanPage.getMax100CharexeedMsg().should('be.visible')
    // })

    // it("To validate that user is able to select the duration from Start date and End date date picker/EL-2281/ES2281_12",function(){
    // esenseAdminCurriculamPlanPage.getCalenderIcon().eq(0).should('be.visible').click()
    // esenseAdminCurriculamPlanPage.getCalenderIcon().eq(1).click()
    // esenseAdminCurriculamPlanPage.getChapterEndNextArrowBtn().eq(1).click({force:true})
    // esenseAdminCurriculamPlanPage.getChapterEndDate().eq(0).click({force:true})
    // })

    // it("To valildate that user is not able to select the past date from Start Date date picker/EL-2281/ES2281_13",function(){
    // esenseAdminCurriculamPlanPage.getCalenderIcon().eq(0).should('be.visible').click()
    // esenseAdminCurriculamPlanPage.getDisabledDatePickerBtn().should('be.disabled')
    // })

    // it("To valildate that user is not able to select the End Date older than Start Date/EL-2281/ES2281_14 ",function(){
    // esenseAdminCurriculamPlanPage.getCalenderIcon().eq(1).click()
    // cy.get('[data-testid="ArrowLeftIcon"]').eq(1).click({force:true})
    //esenseAdminCurriculamPlanPage.getDisabledDatePickerBtn().should('be.disabled')
    // })

    // it("To validate that when user click on Add Chapter  button, Chapter Section is displayed/EL-2281/ES2281_28",function(){
    esenseAdminCurriculamPlanPage.getAddNewChapterBtn().click()
    esenseAdminCurriculamPlanPage.getChapterNumberTxtField().scrollIntoView().should('be.visible')
    // })

    // it("To validate that Chapter N Textbox is not accepting blank value and throwing error message/EL-2281/ES2281_20",function(){
    esenseAdminCurriculamPlanPage.getThemeDiscription().scrollIntoView().clear()
    esenseAdminCurriculamPlanPage.getThemeDiscription().scrollIntoView().type(this.curriculumPage.themeDiscription)
    esenseAdminCurriculamPlanPage.getChapterNumberTxtField().scrollIntoView().type(this.curriculumPage.chapterNameMoreThn50).clear()
    esenseAdminCurriculamPlanPage.getThemeDiscription().click()
    esenseAdminCurriculamPlanPage.getThisFieldReqMes().should('be.visible')

    // })

    // it("To validate that when user enters more than 50 charecters into Chapter Number Textbox Error message is displayed/EL-2281/ES2281_19",function(){
    esenseAdminCurriculamPlanPage.getChapterNumberTxtField().scrollIntoView().type(this.curriculumPage.chapterNameMoreThn50)
    esenseAdminCurriculamPlanPage.getMax50CharexeedMsg().should('be.visible')
    // })

    // it("To validate that when user enters more than 100 charecters into Chapter Description Textbox/EL-2281/ES2281_24, Error message is displayed",function(){
    esenseAdminCurriculamPlanPage.getChapterNumberTxtField().clear()
    esenseAdminCurriculamPlanPage.getChapterNumberTxtField().type(this.curriculumPage.chapterNumberTxtField)
    esenseAdminCurriculamPlanPage.getChapterDiscription().type(this.curriculumPage.themeDiscriptionMoreThn100)
    esenseAdminCurriculamPlanPage.getChapterNumberTxtField().click()
    esenseAdminCurriculamPlanPage.getMax100CharexeedMsg().should('be.visible')
    // })

    // it("To validate that Chapter Description Textbox is not accepting blank value and throwing error message",function(){
    esenseAdminCurriculamPlanPage.getChapterDiscription().clear()
    esenseAdminCurriculamPlanPage.getThisFieldReqMes().should('be.visible')
    // })

    // it("To validate that when user click on Add Chapter, the chapter is added under Theme/EL-2281/ES2281_27",function(){
    esenseAdminCurriculamPlanPage.getAddThemePopupCloseBtn().click()
    esenseAdminCurriculamPlanPage.getListOfAddThemesOrUnitandChaptersBtn().contains(this.curriculumPage.startWiththemeOrUnitTxt).click({ force: true })
    esenseAdminCurriculamPlanPage.getThemeName().type(this.curriculumPage.themeNameLessThn50)
    esenseAdminCurriculamPlanPage.getThemeDiscription().type(this.curriculumPage.themeDiscription)
    esenseAdminCurriculamPlanPage.getAddNewChapterBtn().click()
    esenseAdminCurriculamPlanPage.getChapterNumberTxtField().type(this.curriculumPage.chapterNumberTxtField)
    esenseAdminCurriculamPlanPage.getChapterNameDropdown().select(this.curriculumPage.chapterName)
    esenseAdminCurriculamPlanPage.getChapterDiscription().type(this.curriculumPage.chapterDiscription)
    esenseAdminCurriculamPlanPage.getChapterDiscription().then(function (chapterDescription) {
      const chapterDescriptionTxt = chapterDescription.text()
      // esenseAdminCurriculamPlanPage.getCalenderIcon().eq(0).click()
      // esenseAdminCurriculamPlanPage.getCalenderIcon().eq(1).click()
      // esenseAdminCurriculamPlanPage.getChapterEndNextArrowBtn().eq(1).click({force:true})
      // esenseAdminCurriculamPlanPage.getChapterEndDate().eq(0).click({force:true})
      esenseAdminCurriculamPlanPage.getChapterTotalSession().type(this.curriculumPage.chapterTotalSession)
      esenseAdminCurriculamPlanPage.getThemeAddChapterBtn().click({ force: true })
      esenseAdminCurriculamPlanPage.getChapterDescriptionName().each(($e6, index, $list) => {
        const chapterDescriptionName = $e6.text()
        if (chapterDescriptionName.includes(chapterDescriptionTxt)) {
          esenseAdminCurriculamPlanPage.getCreatedChapterHeaderTitle().should('be.visible')

        }
      })
    })

    // })


    // it("To validate that user is able to view the created Topics name in Topic Name dropdown",function(){
    esenseAdminCurriculamPlanPage.getAddNewChapterBtn().click()
    esenseAdminCurriculamPlanPage.getChapterNumberTxtField().type(this.curriculumPage.chapterNumberTxtField)
    esenseAdminCurriculamPlanPage.getChapterNameDropdown().should('contain.text', this.curriculumPage.chapterName).select(this.curriculumPage.chapterName)
    esenseAdminCurriculamPlanPage.getAddTopicBtn().click()
    esenseAdminCurriculamPlanPage.getTopicNameDropDown().should('contain.text', this.curriculumPage.topicname).select(this.curriculumPage.topicname)
    esenseAdminCurriculamPlanPage.getTopicDescription().type(this.curriculumPage.TopicDescription)

    // })



    // it("To validate that user is able to enter 100 charecters into Topic Description Textbox/EL-2281/ES2281_32",function(){
    esenseAdminCurriculamPlanPage.getTopicDescription().clear()
    esenseAdminCurriculamPlanPage.getTopicDescription().type(this.curriculumPage.themeDiscriptionMoreThn100)
    esenseAdminCurriculamPlanPage.getAddObjectiveBtn().click()
    esenseAdminCurriculamPlanPage.getMax100CharexeedMsg().should('be.visible')


    // })

    // it("To verify that when user click on Cancel the Add Topic Section in closed/EL-2281/ES2281_37",function(){
    esenseAdminCurriculamPlanPage.getAddTopicCancelBtn().click()
    esenseAdminCurriculamPlanPage.getTopicTitleHeader().should('be.visible')
    // })

    // it("To validate that when user enters more than 100 charecters into Objective Description Textbox , Error message is displayed/EL-2281/ES2281_42",function(){
    esenseAdminCurriculamPlanPage.getAddObjectiveBtn().click()
    esenseAdminCurriculamPlanPage.getObjectiveDiscription().type(this.curriculumPage.themeDiscriptionMoreThn100)
    esenseAdminCurriculamPlanPage.getAddOutComeBtn().click()
    esenseAdminCurriculamPlanPage.getMax100CharexeedMsg().should('be.visible')



    // })

    // it("To validate that Objective Description Textbox is not accepting blank value and throwing error message/EL-2281/ES2281_43",function(){
    esenseAdminCurriculamPlanPage.getObjectiveDiscription().clear()
    esenseAdminCurriculamPlanPage.getThisFieldReqMes().should('be.visible')
    // })

    // it("To verify that when user click on Cancel the Learning Objective Section is closed/EL-2281/ES2281_46",function(){
    esenseAdminCurriculamPlanPage.getObjectiveDiscription().type(this.curriculumPage.ObjectiveDiscription)
    esenseAdminCurriculamPlanPage.getAddObjectiveCancelBtn().click()
    esenseAdminCurriculamPlanPage.getLearningObjectiveTitleheader().should('contain.text', 'Learning Objectives')

    // })



    // it("To validate that when user click on ADD OBJECTIVE button the topic is added under that chapter/EL-2281/ES2281_45",function(){
    esenseAdminCurriculamPlanPage.getAddObjectiveBtn().click()
    esenseAdminCurriculamPlanPage.getObjectiveDiscription().type(this.curriculumPage.ObjectiveDiscription)
    esenseAdminCurriculamPlanPage.getSaveObjectiveBtn().click()
    esenseAdminCurriculamPlanPage.getObjectiveCreated().should('contain.text', this.curriculumPage.ObjectiveDiscription)

    // })

    // it("To validate that when user enters more than 100 charecters into Outcome Description Textbox , Error message is displayed/EL-2281/ES2281_51",function(){
    esenseAdminCurriculamPlanPage.getAddOutComeBtn().click()
    esenseAdminCurriculamPlanPage.getOutComeDiscription().type(this.curriculumPage.themeDiscriptionMoreThn100)
    cy.get('#create_curriculum-outcome-Form > .create_curriculum-btn_container').click()
    esenseAdminCurriculamPlanPage.getMax100CharexeedMsg().should('be.visible')
    // })

    // it("To validate that Outcome Description Textbox is not accepting blank value and throwing error message/EL-2281/ES2281_52",function(){
    esenseAdminCurriculamPlanPage.getOutComeDiscription().clear()
    esenseAdminCurriculamPlanPage.getThisFieldReqMes().should('be.visible')
    // })

    // it("To validate that when user click on ADD OUTCOME button the Learning outcome is added under that chapter/EL-2281/ES2281_53",function(){
    esenseAdminCurriculamPlanPage.getOutComeDiscription().type(this.curriculumPage.outComeDiscription)
    esenseAdminCurriculamPlanPage.getSaveOutcomeBtn().click()
    esenseAdminCurriculamPlanPage.getOutComeCreatedTitleHeader().should('contain.text', this.curriculumPage.outComeDiscription)
    // })

    // it("To validate that user is able to add multiple Learning Outcomes under one Chapter/EL-2281/ES2281_54",function(){
    esenseAdminCurriculamPlanPage.getAddOutComeBtn().click()
    esenseAdminCurriculamPlanPage.getOutComeDiscription().type(this.curriculumPage.outComeDiscription)
    esenseAdminCurriculamPlanPage.getSaveOutcomeBtn().click()
    esenseAdminCurriculamPlanPage.getOutComeCreatedTitleHeader().should('have.length', '2')

    // })

    // it("To verify that when user click on Cancel the Learning Outcome Section is closed/EL-2281/ES2281_55",function(){
    esenseAdminCurriculamPlanPage.getAddOutComeBtn().click()
    esenseAdminCurriculamPlanPage.getOutComeDiscription().type(this.curriculumPage.outComeDiscription)
    esenseAdminCurriculamPlanPage.getOutComeCancelBtn().click()
    esenseAdminCurriculamPlanPage.getLearningOutComeTitleTxt().should('contain.text', 'Learning Outcome')

    // })

    // it("To validate that user is able to create the Theme without creating Chapter/EL-2281/ES2281_57",function(){
    esenseAdminCurriculamPlanPage.getAddThemePopupCloseBtn().click()
    esenseAdminCurriculamPlanPage.getListOfAddThemesOrUnitandChaptersBtn().contains(this.curriculumPage.startWiththemeOrUnitTxt).click({ force: true })
    esenseAdminCurriculamPlanPage.getThemeName().type(this.curriculumPage.themeNameLessThn50)
    esenseAdminCurriculamPlanPage.getThemeDiscription().type(this.curriculumPage.themeDiscription)
    esenseAdminCurriculamPlanPage.getThemeDiscription().then(function (themeDescription) {
      var themedescriptionTxt = themeDescription.text()
      // esenseAdminCurriculamPlanPage.getCalenderIcon().eq(0).click()
      // esenseAdminCurriculamPlanPage.getCalenderIcon().eq(1).click()
      // esenseAdminCurriculamPlanPage.getChapterEndNextArrowBtn().eq(1).click({force:true})
      // esenseAdminCurriculamPlanPage.getChapterEndDate().eq(0).click({force:true})
      esenseAdminCurriculamPlanPage.getChapterTotalSession().type(this.curriculumPage.chapterTotalSession)
      esenseAdminCurriculamPlanPage.getSaveDraftOnlyThemeBtn().click({ force: true })
      esenseAdminCurriculamPlanPage.getOnlyThemeAddedWithoutChapterTxt().should('have.text', '1 Theme Added')
      esenseAdminCurriculamPlanPage.getThemeEndDescription().each(($e2, index, $list) => {
        const themeDescriptionName = $e2.text()
        if (themeDescriptionName.includes(themedescriptionTxt)) {
          esenseAdminCurriculamPlanPage.getThemeDeleteBtn().eq(index).click()
          esenseAdminCurriculamPlanPage.getDeleteThemerPopupBtn().click({ force: true })
        }
      })
    })

  })



})