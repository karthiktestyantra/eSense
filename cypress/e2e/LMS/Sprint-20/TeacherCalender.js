import TeacherDashboardPage from "../../../support/pageObjects/LMS-2/TeacherDashboardPage";
import TeacherCalenderPage from "../../../support/pageObjects/LMS-2/TeacherCalenderPage";
import TeacherClassGradePage from "../../../support/pageObjects/LMS-2/TeacherClassGradePage";
const TeacherDashboard = new TeacherDashboardPage();
const TeacherCalender = new TeacherCalenderPage();
const TeacherClassGrade = new TeacherClassGradePage(); 

describe("Verify Admin student grade book functionalities", function () {
    this.beforeEach(function () {
       cy.visit(Cypress.env('urlQAPreSetup'))
       cy.fixture("LMS/TeacherLoginCredentials.json").then(function (validAdminLoginData) {
          cy.TeacherPostSetupLogin(validAdminLoginData.user1, validAdminLoginData.password)
       })
    })
    it('To validate teacher is able to view the class details of all the clases/EL-6982/ES6982-01',function () {
        TeacherDashboard.getMyCalenderLink().click({force:true})
        TeacherCalender.getClassesCheckbox().check({force:true})
        TeacherCalender.getForwordWeekButton().click()
        TeacherCalender.getGreade3A().click()
        TeacherCalender.getStartSessionButton().click()
        TeacherClassGrade.getClassDetailsButton().should('have.text','Class Details')
        TeacherClassGrade.getTimetableButton().should('have.text','Timetable')
    })
    it('To vlaidate that lesson plan pop-up is populated after user clicks on view lesson plan/EL-6982/ES6982-03',function () {
        TeacherDashboard.getMyCalenderLink().click({force:true})
        TeacherCalender.getClassesCheckbox().check({force:true})
        TeacherCalender.getForwordWeekButton().click()
        TeacherCalender.getGreade3A().click()
        TeacherCalender.getStartSessionButton().click()
        TeacherClassGrade.getViewLessonPlaneButton().click()
        cy.contains('lesson plan 1').should('be.visible')
        
    })
    it('To valiadte dropdown is availabe in view lesson plan popup if there are multiple lesson plans/EL-6982/ES6982-04',function () {
        TeacherDashboard.getMyCalenderLink().click({force:true})
        TeacherCalender.getClassesCheckbox().check({force:true})
        TeacherCalender.getForwordWeekButton().click()
        TeacherCalender.getGreade3A().click()
        TeacherCalender.getStartSessionButton().click()
        TeacherClassGrade.getViewLessonPlaneButton().click()
        cy.contains('lesson plan').should('be.visible')
    })
})