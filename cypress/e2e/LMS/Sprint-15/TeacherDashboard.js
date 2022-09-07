// import TeacherDashboardPage from "../../../support/pageObjects/LMS-2/TeacherDashboardPage";

// const teacherDashboardPage = new TeacherDashboardPage()

// describe("Verify Esense Teacher Login Page functionalities", function () {
//     before(function () {
//       cy.visit(Cypress.env('urlQA'))
//         cy.fixture('LMS/TeacherLoginCredentials').then(function(validTeacherLoginData){
//         cy.TeacherPostSetupLogin(validTeacherLoginData.user,validTeacherLoginData.password)  
//         })
//     })
//     beforeEach(function (){  
//         cy.fixture('LMS/TeacherDashboardCredentials').then(function(teacherDashboard){
//             this.teacherDashboard = teacherDashboard;
//       })
//    })

//    it("To verify that “Did you take this class?” pending task card is provided in the Dashboard/EL-4018/ES4018_01",function () {
//     teacherDashboardPage.getPendingActionCard().should('be.visible')
      
//    })

//    it("To verify that Class Name and Subject are provided on “Did you take this class?” pending task card/EL-4018/ES4018_02",function () {
//     teacherDashboardPage.getPendingActionCardClassAndSubject().should('be.visible') 
//   })

//   it("To verify that date is provided on “Did you take this class?” pending task card/EL-4018/ES4018_03",function () {
//     teacherDashboardPage.getHomeworkPendingCardDate().should('be.visible')

//   })

//   it.skip("To verify that “Provide Feedback” button is provided on the  “Did you take this class?” pending task card/EL-4018/ES4018_04",function () {
//     teacherDashboardPage.getProvideFeedbackBtn().scrollIntoView().should('be.visible')

//   })

//   it("To verify that “Close” button is provided on the top right of  “Did you take this class?” pending task card/EL-4018/ES4018_05",function () {
//     teacherDashboardPage.getPendingCardCloseIcon().should('be.visible')

//   })

//   it.skip("To verify that when teacher click on Provide FeedBack button it's navigating to Feedback pop-up page/EL-4018/ES4018_06",function () {
//     teacherDashboardPage.getProvideFeedbackBtn().click()
//     teacherDashboardPage.getPendingCardFeedbackHeader().should('be.visible')

//   })

//   it("To verify that when teacher give feedback, “Feedback completed” pop-up is dispalyed/EL-4018/ES4018_08",function () {
//     teacherDashboardPage.getPendingCardFeedback1stEmojiImg().click()
//     teacherDashboardPage.getPendingCardFeedbackDescription().type(this.teacherDashboard.feedbackpoints)
//     teacherDashboardPage.getPendingCardFeedbackContinueBtn().click()
//     teacherDashboardPage.getPendingCardFeedback2ndEmojiImg().click()
//     teacherDashboardPage.getPendingCardFeedbackDescription().type(this.teacherDashboard.feedbackpoints)
//     teacherDashboardPage.getPendingCardFeedbackContinueBtn().click()
//     teacherDashboardPage.getPendingCardFeedbackDescription().type(this.teacherDashboard.feedbackpoints)
//     teacherDashboardPage.getPendingFeedbackSubmitBtn().should('be.visible')

//   })

//   it("To verify that teacher should not be able to close the pending task by  clicking on Close button,since it is mandatory for teacher to provide feedback once in a month./EL-4018/ES4018_09",function () {
//     teacherDashboardPage.getPendingCardFeedbackPopupCloseBtn().scrollIntoView().should('be.visible').click()

//   })

//   it("To verify that Add Lesson Plan Card is provided in the Dashboard/EL-4024/ES4024_01",function () {
//       teacherDashboardPage.getAddLessonPlanCardTxt().scrollIntoView().should('be.visible') 

//   })

//   it("To verify the on Add Lesson Plan Card is displayed with Class-Subject Name and Date/EL-4024/ES4024_02",function () {
//      teacherDashboardPage.getAddLessonPlanCardSubName().should('be.visible')
//      teacherDashboardPage.getAddLessonPlanCardSubDate().should('be.visible')
  
//   })

//   it("To verify that Add Lesson Plan buttton is provided in Add Lesson Plan Card/EL-4024/ES4024_03",function () {
//     teacherDashboardPage.getAddLessonPlanBtn().scrollIntoView().should('be.visible')
 
//   })

//  it("To verify that Close buttton is provided in Add Lesson Plan Card/EL-4024/ES4024_04",function () {
//     teacherDashboardPage.getPendingCardCloseIcon().should('be.visible')
 
//   })

//   it("To verify that when Teacher click on “Add Lesson Plan” button, it's navigating to Calendar page/EL-4024/ES4024_06",function () {
//     teacherDashboardPage.getAddLessonPlanBtn().click()
//     teacherDashboardPage.getCalenderPageHeaderTxt().should('be.visible')
 
//   })

//   it("To verify the teacher is able to Add Lesson Plan by clicking Save button/EL-4024/ES4024_07",function () {
//     teacherDashboardPage.getCalenderAddLessonPlanBtn().click()
//     teacherDashboardPage.getCreateLessonIcon().click()
//     teacherDashboardPage.getCreateLessonThemeDropdown().click()
//     teacherDashboardPage.getCreateLessonThemeDropdownValue().last().click()
//     teacherDashboardPage.getCreateLessonChapterDropdown().click({force:true})
//     teacherDashboardPage.getCreateLessonChapterDropdownValue().first().click({force:true})
//     teacherDashboardPage.getCreateLessonTopicDropdown().click()
//     teacherDashboardPage.getCreateLessonTopicDropdownValue().first().click()
//     teacherDashboardPage.getCreateLessonLearningObjectiveTxtField().scrollIntoView().type(this.teacherDashboard.LessonObjectiveValue)
//     teacherDashboardPage.getCreateLessonSearchTxtField().scrollIntoView().type(this.teacherDashboard.assessmentvalue)
//     teacherDashboardPage.getCreateLessonRemarksTxtField().scrollIntoView().type(this.teacherDashboard.remarksvalue)
//     teacherDashboardPage.getCreateLessonPlanSaveBtn().should('be.visible')
//     teacherDashboardPage.getCreateLessonPlanGobackBt().scrollIntoView().click()
 
//   })

//   it("To verify that Milestone Completion Card is provided in the Dashboard/EL-4026/ES4026_01",function () {
//      teacherDashboardPage.getMilestonePendingCardTxt().scrollIntoView().should('be.visible')
 
//   })

//   it("To verify the on Milestone Completion Card is displayed with Class-Subject Name/EL-4026/ES4026_02",function () {
//     teacherDashboardPage.getMilestoneSubName().should('be.visible')  

//   })

//   it("To verify that Mark Complete buttton is provided in Milestone Completion Card/EL-4026/ES4026_03",function () {
//     teacherDashboardPage.getPendingMilestoneBtn().should('be.visible')

//   })

//   it("To verify that Close buttton is provided in Milestone Completion Card/EL-4026/ES4026_04",function () {
//     teacherDashboardPage.getPendingCardMilestoneCloseIcon().should('be.visible')

//   })

//   it("To verify that when Teacher click on “Mark Complete” button, it's navigating to Milestone Tab in My classes page/EL-4026/ES4026_06",function () {
//     teacherDashboardPage.getPendingMilestoneBtn().click()
//     cy.url().should('include','milestones')

//   })

  
//   it("To verify that in Milestones tab by default it will scrool to the chapter or theme which is not marked as 100% complete./EL-4026/ES4026_08",function () {
//     teacherDashboardPage.getMilestoneChapterCompletionPercentage().should('have.text','0 %')

//   })

   
 
// })