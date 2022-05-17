/// <reference types="Cypress"/>

import MainAdminCurriculumPlanPage from "../../support/pageObjects/MainAdminCurriculumPlanPage";
import MainAdminHomePage from "../../support/pageObjects/MainAdminHomePage";

const home = new MainAdminHomePage();
const MainAdminCurriculumPlan = new MainAdminCurriculumPlanPage();

describe("Verify Curriculum Page functionalities", function () {
  before(function () {
    cy.visit(Cypress.env("url"))
    cy.fixture("mainAdminLoginCredentials").then(function (validAdminLoginData) {
    cy.login(validAdminLoginData.username,validAdminLoginData.password)
    })
  })
  beforeEach(function (){
    cy.fixture("mainAdminCurriculumPlanCredentials").then(function(curriculumPage){
      this.curriculumPage = curriculumPage;
    })
  })

  it("To validate that when user click on “Curriculum Plan”, all pre created Course cards are displayed/EL-2280/ES2280_01",function () {
    home.getCurriculumPlanLnk().click()
    MainAdminCurriculumPlan.getCurriculamPlanBtn().contains( this.curriculumPage.curriculumplantxt).click()
    MainAdminCurriculumPlan.getCurriculumListOfCourseCard().should('be.visible')     
   })

 it("To validate that user is able to search the course by entering Course Name into the search bar/EL-2280/ES2280_02",function(){
    MainAdminCurriculumPlan.getCurriculumSearchTxtField().type(this.curriculumPage.searchCourseName)
    cy.wait(3000)
    MainAdminCurriculumPlan.getCurriculumListOfCourseCard().should('contain.text',this.curriculumPage.searchCourseName)
    
  })

  it("To verify that when user Click on Add Curriculam button on any Course card, it's navigating Add Curriculam page./EL-2280/ES2280_03",function(){   
    MainAdminCurriculumPlan.getAddCurriculamPlanBtn().eq(0).click()
    MainAdminCurriculumPlan.getAddCurriculamTitle().should('contain',this.curriculumPage.addCurriculumTitleTxt)

  })

  it("To validate the Start with Theme/unit and Start with Chapter buttons are provided in Add Curriculam page/EL-2280/ES2280_04",function(){
     MainAdminCurriculumPlan.getListOfAddThemesOrUnitandChaptersBtn().should('be.visible')
  })

  it("To validate that when user click on Start with Theme/unit button it's navigating to Add new Theme/Unit pop-up page./EL-2280/ES2280_05",function(){
    MainAdminCurriculumPlan.getListOfAddThemesOrUnitandChaptersBtn().contains(this.curriculumPage.startWiththemeOrUnitTxt).click()
    MainAdminCurriculumPlan.getAddNewThemeOrUnitPopupTitle().should("have.text",this.curriculumPage.addNewThemeOrUnitPopupTitleTxt)
  })
   
  it("To validate that when user Click on Start with Chapter button it's navigating to Add New Chapter pop-up page./EL-2280/ES2280_06",function(){
    MainAdminCurriculumPlan.getListOfAddThemesOrUnitandChaptersBtn().contains(this.curriculumPage.startWithChapterTxt).click({force:true})
    MainAdminCurriculumPlan.getAddNewChapterPopupTitle().should("have.text",this.curriculumPage.addNewChapterTxtPopupTitleTxt)
    MainAdminCurriculumPlan.getCloseIcon().click()
  })

  it('To validate that when user click on "Continue" button, user is able to add more Themes, units or chapters based on format choosed/EL-2280/ES2280_07',function(){
    cy.go('back')
    MainAdminCurriculumPlan.getCurriculumPlanHeaderTxt().each(($e1,index,$list)=>{
     const curriculumHeaderTxt = $e1.text()
     if(curriculumHeaderTxt.includes(this.curriculumPage.addCurriculumHeaderTxt)){
      MainAdminCurriculumPlan.getAddCurriculamPlanBtn().eq(index).click()
     }

    })
    //MainAdminCurriculumPlan.getAddCurriculamPlanBtn().eq(2).click()
    MainAdminCurriculumPlan.getListOfAddThemesOrUnitandChaptersBtn().contains(this.curriculumPage.startWithChapterTxt).click({force:true})
    MainAdminCurriculumPlan.getChapterNumberTxtField().type(this.curriculumPage.chapterNumberTxtField)
    MainAdminCurriculumPlan.getChapterNameDropdown().select('Top')
    MainAdminCurriculumPlan.getChapterDiscription().then(function(chapterDescription){
    const descriptionTxt = chapterDescription.text()
    MainAdminCurriculumPlan.getCalenderIcon().eq(0).click()
    MainAdminCurriculumPlan.getCalenderIcon().eq(1).click()
    MainAdminCurriculumPlan.getChapterEndNextArrowBtn().eq(1).click({force:true})
    MainAdminCurriculumPlan.getChapterEndDate().click()
    MainAdminCurriculumPlan.getChapterTotalSession().type(this.curriculumPage.chapterTotalSession)
    MainAdminCurriculumPlan.getAddTopicBtn().click()
    MainAdminCurriculumPlan.getTopicNameDropDown().select('name')
    MainAdminCurriculumPlan.getTopicDescription().type(this.curriculumPage.TopicDescription)
    MainAdminCurriculumPlan.getSaveTopicbtn().click({force:true})
    MainAdminCurriculumPlan.getAddObjectiveBtn().click()
    MainAdminCurriculumPlan.getObjectiveDiscription().type(this.curriculumPage.ObjectiveDiscription)
    MainAdminCurriculumPlan.getSaveObjectiveBtn().click()
    MainAdminCurriculumPlan.getAddOutComeBtn().click()
    MainAdminCurriculumPlan.getOutComeDiscription().type(this.curriculumPage.outComeDiscription)
    MainAdminCurriculumPlan.getSaveOutcomeBtn().click()
    MainAdminCurriculumPlan.getSaveDraftbtn().click({force:true})
    MainAdminCurriculumPlan.getReattemptAddChapterBtn().should('be.visible')
   MainAdminCurriculumPlan.getChapterDescriptionName().each(($e1,index,$list)=>{
       const chapterDescriptionName = $e1.text()
           if(chapterDescriptionName.includes(descriptionTxt)){
             MainAdminCurriculumPlan.getChapterDeleteBtn().eq(index).click()
             MainAdminCurriculumPlan.getDeleteChapterPopupBtn().click()
             cy.wait(4000)

           }
        })
    })
})

  it('To validate that when user click on "Continue" button, user is able to add more Themes, units or chapters based on format choosed/EL-2280/ES2280_08',function(){
    MainAdminCurriculumPlan.getListOfAddThemesOrUnitandChaptersBtn().contains(this.curriculumPage.startWiththemeOrUnitTxt).click({force:true})
    MainAdminCurriculumPlan.getThemeName().type(this.curriculumPage.themeNameLessThn50)
    MainAdminCurriculumPlan.getThemeDiscription().type(this.curriculumPage.themeDiscription)
    MainAdminCurriculumPlan.getThemeDiscription().then(function(themeDescription){
    var themedescriptionTxt = themeDescription.text()
    MainAdminCurriculumPlan.getAddNewChapterBtn().click()
    MainAdminCurriculumPlan.getChapterNumberTxtField().type(this.curriculumPage.chapterNumberTxtField)
    MainAdminCurriculumPlan.getChapterNameDropdown().select('Top')
    MainAdminCurriculumPlan.getChapterDiscription().then(function(chapterDescription){
      const descriptionTxt = chapterDescription.text()
    MainAdminCurriculumPlan.getCalenderIcon().eq(0).click()
    MainAdminCurriculumPlan.getCalenderIcon().eq(1).click()
    MainAdminCurriculumPlan.getChapterEndNextArrowBtn().eq(1).click({force:true})
    MainAdminCurriculumPlan.getChapterEndDate().click()
    MainAdminCurriculumPlan.getChapterTotalSession().type(this.curriculumPage.chapterTotalSession)
    MainAdminCurriculumPlan.getAddTopicBtn().click()
    MainAdminCurriculumPlan.getTopicNameDropDown().select('name')
    MainAdminCurriculumPlan.getTopicDescription().type(this.curriculumPage.TopicDescription)
    MainAdminCurriculumPlan.getSaveTopicbtn().click({force:true})
    MainAdminCurriculumPlan.getAddObjectiveBtn().click()
    MainAdminCurriculumPlan.getObjectiveDiscription().type(this.curriculumPage.ObjectiveDiscription)
    MainAdminCurriculumPlan.getSaveObjectiveBtn().click()
    MainAdminCurriculumPlan.getAddOutComeBtn().click()
    MainAdminCurriculumPlan.getOutComeDiscription().type(this.curriculumPage.outComeDiscription)
    MainAdminCurriculumPlan.getSaveOutcomeBtn().click()
    MainAdminCurriculumPlan.getEndAddChapterBtn().click()
    MainAdminCurriculumPlan.getThemeSaveDraft().click({force:true})
    cy.wait(6000)
    MainAdminCurriculumPlan.getReattemptAddThemeBtn().should('be.visible')
    MainAdminCurriculumPlan.getThemeEndDescription().each(($e2,index,$list)=>{
        const themeDescriptionName = $e2.text()
            if(themeDescriptionName.includes(themedescriptionTxt)){
              MainAdminCurriculumPlan.getThemeDeleteBtn().eq(index).click()
              MainAdminCurriculumPlan.getDeleteThemerPopupBtn().click()
              cy.wait(5000)

            }
         })
        })
      }) 
      
      
  it("To validate that when user is able to save Curriculam as draft by clicking on 'Save Draft' button/EL-2280/ES2280_09",function (){
     //cy.go('back')
          // MainAdminCurriculumPlan.getAddCurriculamPlanBtn().eq(2).click()
          MainAdminCurriculumPlan.getListOfAddThemesOrUnitandChaptersBtn().contains(this.curriculumPage.startWithChapterTxt).click({force:true})
          MainAdminCurriculumPlan.getChapterNumberTxtField().type(this.curriculumPage.chapterNumberTxtField)
               // MainAdminCurriculumPlan.getChapterDiscription().then(function(chapterDescription){
          // const descriptionTxt = chapterDescription.text()
          MainAdminCurriculumPlan.getChapterNameDropdown().select('Top')
        //  MainAdminCurriculumPlan.getAddChapterNameDropdownText().then(function(chapterDropdown){
        //   const chapterDropdownTxt = chapterDropdown.text()
          MainAdminCurriculumPlan.getCalenderIcon().eq(0).click()
          MainAdminCurriculumPlan.getCalenderIcon().eq(1).click()
          MainAdminCurriculumPlan.getChapterEndNextArrowBtn().eq(1).click({force:true})
          MainAdminCurriculumPlan.getChapterEndDate().click()
          MainAdminCurriculumPlan.getChapterTotalSession().type(this.curriculumPage.chapterTotalSession)
          MainAdminCurriculumPlan.getAddTopicBtn().click()
          MainAdminCurriculumPlan.getTopicNameDropDown().select('name')
          MainAdminCurriculumPlan.getTopicDescription().type(this.curriculumPage.TopicDescription)
          MainAdminCurriculumPlan.getSaveTopicbtn().click({force:true})
          MainAdminCurriculumPlan.getAddObjectiveBtn().click()
          MainAdminCurriculumPlan.getObjectiveDiscription().type(this.curriculumPage.ObjectiveDiscription)
          MainAdminCurriculumPlan.getSaveObjectiveBtn().click()
          MainAdminCurriculumPlan.getAddOutComeBtn().click()
          MainAdminCurriculumPlan.getOutComeDiscription().type(this.curriculumPage.outComeDiscription)
          MainAdminCurriculumPlan.getSaveOutcomeBtn().click()
          MainAdminCurriculumPlan.getSaveDraftbtn().click({force:true})
          cy.wait(6000)
          MainAdminCurriculumPlan.getAddChapterDraftSuccessMsg().should('contain.text',this.curriculumPage.addChapterDraftSuccessMsg)
          MainAdminCurriculumPlan.getAddChapterDraftedHeader().each(($e3,index,$list)=>{
              const chapterDraftedHeaderTxt = $e3.text()
                 if(chapterDraftedHeaderTxt.includes(chapterDropdownTxt)){
                  MainAdminCurriculumPlan.getAddChapterDraftedHeader().eq(index).should('be.visible')
                 }
                })
                  
  
                // cy.wait(5000)
  
                // MainAdminCurriculumPlan.getChapterDescriptionName().each(($e1,index,$list)=>{
                //   const chapterDescriptionName = $e1.text()
                //       if(chapterDescriptionName.includes(descriptionTxt)){
                //         MainAdminCurriculumPlan.getChapterDeleteBtn().eq(index).click()
                //         MainAdminCurriculumPlan.getDeleteChapterPopupBtn().click()
                //         cy.wait(4000)
       
                //       }
                //    })  
              })     
  })  

  it("To validate that when user is able to save Curriculam as draft by clicking on 'Save Draft' button/EL-2280/ES2280_09",function (){
         MainAdminCurriculumPlan.getListOfAddThemesOrUnitandChaptersBtn().contains(this.curriculumPage.startWithChapterTxt).click({force:true})
         MainAdminCurriculumPlan.getChapterNumberTxtField().type(this.curriculumPage.chapterNumberTxtField)
        //       MainAdminCurriculumPlan.getChapterDiscription().then(function(chapterDescription){
        //  const descriptionTxt = chapterDescription.text()
         MainAdminCurriculumPlan.getChapterNameDropdown().select('Top')
        MainAdminCurriculumPlan.getAddChapterNameDropdownText().then(function(chapterDropdown){
         const chapterDropdownTxt = chapterDropdown.text()
         MainAdminCurriculumPlan.getCalenderIcon().eq(0).click()
         MainAdminCurriculumPlan.getCalenderIcon().eq(1).click()
         MainAdminCurriculumPlan.getChapterEndNextArrowBtn().eq(1).click({force:true})
         MainAdminCurriculumPlan.getChapterEndDate().click()
         MainAdminCurriculumPlan.getChapterTotalSession().type(this.curriculumPage.chapterTotalSession)
         MainAdminCurriculumPlan.getAddTopicBtn().click()
         MainAdminCurriculumPlan.getTopicNameDropDown().select('name')
         MainAdminCurriculumPlan.getTopicDescription().type(this.curriculumPage.TopicDescription)
         MainAdminCurriculumPlan.getSaveTopicbtn().click({force:true})
         MainAdminCurriculumPlan.getAddObjectiveBtn().click()
         MainAdminCurriculumPlan.getObjectiveDiscription().type(this.curriculumPage.ObjectiveDiscription)
         MainAdminCurriculumPlan.getSaveObjectiveBtn().click()
         MainAdminCurriculumPlan.getAddOutComeBtn().click()
         MainAdminCurriculumPlan.getOutComeDiscription().type(this.curriculumPage.outComeDiscription)
         MainAdminCurriculumPlan.getSaveOutcomeBtn().click()
         MainAdminCurriculumPlan.getSaveDraftbtn().click({force:true})
         cy.wait(6000)
         MainAdminCurriculumPlan.getAddChapterDraftSuccessMsg().should('contain.text',this.curriculumPage.addChapterDraftSuccessMsg)
         MainAdminCurriculumPlan.getAddChapterDraftedHeader().each(($e3,index,$list)=>{
             const chapterDraftedHeaderTxt = $e3.text()
                if(chapterDraftedHeaderTxt.includes(chapterDropdownTxt)){
                 MainAdminCurriculumPlan.getAddChapterDraftedHeader().eq(index).should('be.visible')
                 cy.wait(5000)
                 
                 MainAdminCurriculumPlan.getChapterDeleteBtn().eq(0).click()
                       MainAdminCurriculumPlan.getDeleteChapterPopupBtn().click()
                       cy.wait(4000)
      

                }
              })  
 
              //   cy.wait(5000)
 
              // //  MainAdminCurriculumPlan.getChapterDescriptionName().each(($e1,index,$list)=>{
              // //    const chapterDescriptionName = $e1.text()
              // //        if(chapterDescriptionName.includes(descriptionTxt)){
              //          MainAdminCurriculumPlan.getChapterDeleteBtn().eq(0).click()
              //          MainAdminCurriculumPlan.getDeleteChapterPopupBtn().click()
              //          cy.wait(4000)
      
              // //        }
              // //     })
            
           
             }) 
            })

            it("To validate that when user click on Start with Theme/unit button it's navigating to Add new Theme/Unit pop-up page./EL-2281/ES2281_01",function (){
             cy.wait(2000)
              MainAdminCurriculumPlan.getListOfAddThemesOrUnitandChaptersBtn().contains(this.curriculumPage.startWiththemeOrUnitTxt).click({force:true})
              MainAdminCurriculumPlan.getAddThemePopupHeaderTitle().should('contain.text',this.curriculumPage.addNewThemeOrUnitPopupTitleTxt)

            })

            it("To validate that Theme Name Textbox is not accepting blank value and throwing error message/EL-2281/ES2281_06",function(){
              MainAdminCurriculumPlan.getThemeName().type(" ")
              MainAdminCurriculumPlan.getThemeDiscription().click()
              MainAdminCurriculumPlan.getThisFieldReqMes().should('be.visible')
            })

            it("To validate that when user enters more than 50 charecters into Theme Name Textbox , Error message is displayed/EL-2281/ES2281_05",function(){
              MainAdminCurriculumPlan.getThemeName().type(this.curriculumPage.themeNameLessThn50)
              MainAdminCurriculumPlan.getThemeName().clear()
              MainAdminCurriculumPlan.getThemeName().type(this.curriculumPage.themeNameMoreThn50)
              MainAdminCurriculumPlan.getThemeDiscription().click()
              MainAdminCurriculumPlan.getMax50CharexeedMsg().should('be.visible')
            })


            it("To validate that Theme Description Textbox is not accepting blank value and throwing error message/EL-2281/ES2281_11",function(){
              MainAdminCurriculumPlan.getThemeName().clear()
              MainAdminCurriculumPlan.getThemeName().type(this.curriculumPage.themeNameLessThn50)
              MainAdminCurriculumPlan.getThemeDiscription().type(this.curriculumPage.themeDiscriptionMoreThn100).clear()
              MainAdminCurriculumPlan.getThemeName().click()
              MainAdminCurriculumPlan.getThisFieldReqMes().should('be.visible')
            })

            it("To validate that when user enters more than 100 charecters into Theme Description Textbox , Error message is displayed/EL-2281/ES2281_10",function(){
              MainAdminCurriculumPlan.getThemeName().clear()
              MainAdminCurriculumPlan.getThemeName().type(this.curriculumPage.themeNameLessThn50)
              MainAdminCurriculumPlan.getThemeDiscription().type(this.curriculumPage.themeDiscriptionMoreThn100)
              MainAdminCurriculumPlan.getMax100CharexeedMsg().should('be.visible')
            })

            it("To validate that user is able to select the duration from Start date and End date date picker/EL-2281/ES2281_12",function(){
              MainAdminCurriculumPlan.getCalenderIcon().eq(0).should('be.visible').click()
              MainAdminCurriculumPlan.getCalenderIcon().eq(1).click()
              MainAdminCurriculumPlan.getChapterEndNextArrowBtn().eq(1).click({force:true})
              MainAdminCurriculumPlan.getChapterEndDate().should('be.enabled').click()
            })

            it("To valildate that user is not able to select the past date from Start Date date picker/EL-2281/ES2281_13",function(){
              MainAdminCurriculumPlan.getCalenderIcon().eq(0).should('be.visible').click()
              MainAdminCurriculumPlan.getDisabledDatePickerBtn().should('be.disabled')
            })

            it("To valildate that user is not able to select the End Date older than Start Date/EL-2281/ES2281_14 ",function(){
              MainAdminCurriculumPlan.getCalenderIcon().eq(1).click()
              cy.get('[data-testid="ArrowLeftIcon"]').eq(1).click()
              MainAdminCurriculumPlan.getDisabledDatePickerBtn().should('be.disabled')
            })

            it("To validate that when user click on Add Chapter  button, Chapter Section is displayed/EL-2281/ES2281_28",function(){
              MainAdminCurriculumPlan.getAddNewChapterBtn().click()
              MainAdminCurriculumPlan.getChapterNumberTxtField().should('be.visible')
            })

            it("To validate that Chapter N Textbox is not accepting blank value and throwing error message/EL-2281/ES2281_20",function(){
              MainAdminCurriculumPlan.getThemeDiscription().clear()
              MainAdminCurriculumPlan.getThemeDiscription().type(this.curriculumPage.themeDiscription)
              MainAdminCurriculumPlan.getChapterNumberTxtField().type(this.curriculumPage.chapterNameMoreThn50).clear()
              MainAdminCurriculumPlan.getThemeDiscription().click()
              MainAdminCurriculumPlan.getThisFieldReqMes().should('be.visible')

            })

            it("To validate that when user enters more than 50 charecters into Chapter Number Textbox Error message is displayed/EL-2281/ES2281_19",function(){
              MainAdminCurriculumPlan.getChapterNumberTxtField().type(this.curriculumPage.chapterNameMoreThn50)
              MainAdminCurriculumPlan.getMax50CharexeedMsg().should('be.visible')
            })

            it("To validate that when user enters more than 100 charecters into Chapter Description Textbox/EL-2281/ES2281_24, Error message is displayed",function(){
              MainAdminCurriculumPlan.getChapterNumberTxtField().clear()
              MainAdminCurriculumPlan.getChapterNumberTxtField().type(this.curriculumPage.chapterNumberTxtField)
              MainAdminCurriculumPlan.getChapterDiscription().type(this.curriculumPage.themeDiscriptionMoreThn100)
              MainAdminCurriculumPlan.getChapterNumberTxtField().click()
              MainAdminCurriculumPlan.getMax100CharexeedMsg().should('be.visible')
            })

            it("To validate that Chapter Description Textbox is not accepting blank value and throwing error message",function(){
              MainAdminCurriculumPlan.getChapterDiscription().clear()
              MainAdminCurriculumPlan.getThisFieldReqMes().should('be.visible')
            })

            it("To validate that when user click on Add Chapter, the chapter is added under Theme/EL-2281/ES2281_27",function(){
              MainAdminCurriculumPlan.getAddThemePopupCloseBtn().click()
              MainAdminCurriculumPlan.getListOfAddThemesOrUnitandChaptersBtn().contains(this.curriculumPage.startWiththemeOrUnitTxt).click({force:true})
              MainAdminCurriculumPlan.getThemeName().type(this.curriculumPage.themeNameLessThn50)
              MainAdminCurriculumPlan.getThemeDiscription().type(this.curriculumPage.themeDiscription)
              MainAdminCurriculumPlan.getAddNewChapterBtn().click()
              MainAdminCurriculumPlan.getChapterNumberTxtField().type(this.curriculumPage.chapterNumberTxtField)
              MainAdminCurriculumPlan.getChapterNameDropdown().select('Top')
               MainAdminCurriculumPlan.getChapterDiscription().then(function(chapterDescription){
               const chapterDescriptionTxt = chapterDescription.text()
              MainAdminCurriculumPlan.getCalenderIcon().eq(0).click()
              MainAdminCurriculumPlan.getCalenderIcon().eq(1).click()
              MainAdminCurriculumPlan.getChapterEndNextArrowBtn().eq(1).click({force:true})
              MainAdminCurriculumPlan.getChapterEndDate().click()
              MainAdminCurriculumPlan.getChapterTotalSession().type(this.curriculumPage.chapterTotalSession)
              MainAdminCurriculumPlan.getThemeAddChapterBtn().click({force:true})
              MainAdminCurriculumPlan.getChapterDescriptionName().each(($e6,index,$list)=>{
              const chapterDescriptionName = $e6.text()
               if(chapterDescriptionName.includes(chapterDescriptionTxt)){
                MainAdminCurriculumPlan.getCreatedChapterHeaderTitle().should('be.visible')  
               
               }
              })
            })
              
            })


            it("To validate that user is able to view the created Topics name in Topic Name dropdown",function(){
              MainAdminCurriculumPlan.getAddNewChapterBtn().click()
              MainAdminCurriculumPlan.getChapterNumberTxtField().type(this.curriculumPage.chapterNumberTxtField)
              MainAdminCurriculumPlan.getChapterNameDropdown().should('contain.text','Top').select('Top').should('contain.text','Top')
              MainAdminCurriculumPlan.getAddTopicBtn().click()
              MainAdminCurriculumPlan.getTopicNameDropDown().should('contain.text','name').select('name')
              MainAdminCurriculumPlan.getTopicDescription().type(this.curriculumPage.TopicDescription)

            })



            it("To validate that user is able to enter 100 charecters into Topic Description Textbox/EL-2281/ES2281_32",function(){
              MainAdminCurriculumPlan.getTopicDescription().clear()
              MainAdminCurriculumPlan.getTopicDescription().type(this.curriculumPage.themeDiscriptionMoreThn100)
              MainAdminCurriculumPlan.getAddObjectiveBtn().click()
              MainAdminCurriculumPlan.getMax100CharexeedMsg().should('be.visible')


          })

          it("To verify that when user click on Cancel the Add Topic Section in closed/EL-2281/ES2281_37",function(){
            MainAdminCurriculumPlan.getAddTopicCancelBtn().click()
            MainAdminCurriculumPlan.getTopicTitleHeader().should('be.visible')
          })

          it("To validate that when user enters more than 100 charecters into Objective Description Textbox , Error message is displayed/EL-2281/ES2281_42",function(){
            MainAdminCurriculumPlan.getAddObjectiveBtn().click()
            MainAdminCurriculumPlan.getObjectiveDiscription().type(this.curriculumPage.themeDiscriptionMoreThn100)
            MainAdminCurriculumPlan.getAddOutComeBtn().click()
            MainAdminCurriculumPlan.getMax100CharexeedMsg().should('be.visible')



        })

        it("To validate that Objective Description Textbox is not accepting blank value and throwing error message/EL-2281/ES2281_43",function(){
          MainAdminCurriculumPlan.getObjectiveDiscription().clear()
          MainAdminCurriculumPlan.getThisFieldReqMes().should('be.visible')
      })

      it("To verify that when user click on Cancel the Learning Objective Section is closed/EL-2281/ES2281_46",function(){
        MainAdminCurriculumPlan.getObjectiveDiscription().type(this.curriculumPage.ObjectiveDiscription)
        MainAdminCurriculumPlan.getAddObjectiveCancelBtn().click()
        MainAdminCurriculumPlan.getLearningObjectiveTitleheader().should('contain.text','Learning Objectives')

      })



      it("To validate that when user click on ADD OBJECTIVE button the topic is added under that chapter/EL-2281/ES2281_45",function(){
        MainAdminCurriculumPlan.getAddObjectiveBtn().click()
        MainAdminCurriculumPlan.getObjectiveDiscription().type(this.curriculumPage.ObjectiveDiscription)
        MainAdminCurriculumPlan.getSaveObjectiveBtn().click()
        MainAdminCurriculumPlan.getObjectiveCreated().should('contain.text',this.curriculumPage.ObjectiveDiscription)

    })

    it("To validate that when user enters more than 100 charecters into Outcome Description Textbox , Error message is displayed/EL-2281/ES2281_51",function(){
      MainAdminCurriculumPlan.getAddOutComeBtn().click()
      MainAdminCurriculumPlan.getOutComeDiscription().type(this.curriculumPage.themeDiscriptionMoreThn100) 
      cy.get('#create_curriculum-outcome-Form > .create_curriculum-btn_container').click()
      MainAdminCurriculumPlan.getMax100CharexeedMsg().should('be.visible')
    })

    it("To validate that Outcome Description Textbox is not accepting blank value and throwing error message/EL-2281/ES2281_52",function(){
      MainAdminCurriculumPlan.getOutComeDiscription().clear()
      MainAdminCurriculumPlan.getThisFieldReqMes().should('be.visible')
    })

    it("To validate that when user click on ADD OUTCOME button the Learning outcome is added under that chapter/EL-2281/ES2281_53",function(){
      MainAdminCurriculumPlan.getOutComeDiscription().type(this.curriculumPage.outComeDiscription)
      MainAdminCurriculumPlan.getSaveOutcomeBtn().click()
      MainAdminCurriculumPlan.getOutComeCreatedTitleHeader().should('contain.text',this.curriculumPage.outComeDiscription)
    })

    it("To validate that user is able to add multiple Learning Outcomes under one Chapter/EL-2281/ES2281_54",function(){
      MainAdminCurriculumPlan.getAddOutComeBtn().click()
      MainAdminCurriculumPlan.getOutComeDiscription().type(this.curriculumPage.outComeDiscription)
      MainAdminCurriculumPlan.getSaveOutcomeBtn().click()
      MainAdminCurriculumPlan.getOutComeCreatedTitleHeader().should('have.length','2')

    })

    it("To verify that when user click on Cancel the Learning Outcome Section is closed/EL-2281/ES2281_55",function(){
      MainAdminCurriculumPlan.getAddOutComeBtn().click()
      MainAdminCurriculumPlan.getOutComeDiscription().type(this.curriculumPage.outComeDiscription)
      MainAdminCurriculumPlan.getOutComeCancelBtn().click()
      MainAdminCurriculumPlan.getLearningOutComeTitleTxt().should('contain.text','Learning Outcome')

    })

    it("To validate that user is able to create the Theme without creating Chapter/EL-2281/ES2281_57",function(){
      MainAdminCurriculumPlan.getAddThemePopupCloseBtn().click()
      MainAdminCurriculumPlan.getListOfAddThemesOrUnitandChaptersBtn().contains(this.curriculumPage.startWiththemeOrUnitTxt).click({force:true})
      MainAdminCurriculumPlan.getThemeName().type(this.curriculumPage.themeNameLessThn50)
      MainAdminCurriculumPlan.getThemeDiscription().type(this.curriculumPage.themeDiscription)
      MainAdminCurriculumPlan.getThemeDiscription().then(function(themeDescription){
        var themedescriptionTxt = themeDescription.text()
      MainAdminCurriculumPlan.getCalenderIcon().eq(0).click()
      MainAdminCurriculumPlan.getCalenderIcon().eq(1).click()
      MainAdminCurriculumPlan.getChapterEndNextArrowBtn().eq(1).click({force:true})
      MainAdminCurriculumPlan.getChapterEndDate().click()
      MainAdminCurriculumPlan.getChapterTotalSession().type(this.curriculumPage.chapterTotalSession)
      MainAdminCurriculumPlan.getSaveDraftOnlyThemeBtn().click({force:true})
      MainAdminCurriculumPlan.getOnlyThemeAddedWithoutChapterTxt().should('contain.text','1 Themes Added')
      MainAdminCurriculumPlan.getThemeEndDescription().each(($e2,index,$list)=>{
        const themeDescriptionName = $e2.text()
            if(themeDescriptionName.includes(themedescriptionTxt)){
              MainAdminCurriculumPlan.getThemeDeleteBtn().eq(index).click()
              MainAdminCurriculumPlan.getDeleteThemerPopupBtn().click()
              cy.wait(5000)

            }
         })
        })



    })


        
  })

  