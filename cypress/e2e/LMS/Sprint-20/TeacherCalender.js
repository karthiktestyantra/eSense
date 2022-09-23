import TeacherDashboardPage from "../../../support/pageObjects/LMS-2/TeacherDashboardPage";
import TeacherCalenderPage from "../../../support/pageObjects/LMS-2/TeacherCalenderPage";
import TeacherClassGradePage from "../../../support/pageObjects/LMS-2/TeacherClassGradePage";
const TeacherDashboard = new TeacherDashboardPage();
const TeacherCalender = new TeacherCalenderPage();
const TeacherClassGrade = new TeacherClassGradePage(); 

describe("Verify Admin student grade book functionalities", function () {
    before(function () {
       cy.visit(Cypress.env('urlQAPreSetup'))
       cy.fixture("LMS/TeacherLoginCredentials.json").then(function (validAdminLoginData) {
          cy.TeacherPostSetupLogin(validAdminLoginData.user1, validAdminLoginData.password)
       })
    })
    it('To validate teacher is able to view the class details of all the clases/EL-6982/ES6982-01',function () {
        TeacherDashboard.clickOnMyCalenderLink()
        TeacherCalender.clickOnClassCheckbox()
        TeacherCalender.clickOnForwordBtn()
        TeacherCalender.clickOnGrade()
        TeacherCalender.clickOnStartSessionBtn()
        TeacherClassGrade.validateClassDetailBtn()
        TeacherClassGrade.validateTimetableBtn()
    })
    it('To validate user is able to view class resources details after clicking on "Class resources tab"/EL-6983/ES6983-01.',function () {
        TeacherClassGrade.validateResourceTable()
    })
    it('To validate "count of total resources attached " is displayed after user clicks on Class resources tab/EL-6983/ES6983-02',function () {
        TeacherClassGrade.validateCountOfTotalResourcesAttached()
    })
    it('To validate "Download all" button is available for the user after user clicks on class resources tab/EL-6983/ES6983-03',function () {
        TeacherClassGrade.validateDownloadBtn()
    })
    it('To validate preview and Downalod options is displayed against each file/EL-6983/ES6983-04',function () {
        TeacherClassGrade.validatePreviewIcon()
        TeacherClassGrade.validateDownloadIcon()
    })
    it('To valiadte user is able to downlaod individual resources/EL-6983/ES6983-07',function () {
       TeacherClassGrade.valiadteDownlaodIndividualResources()
    })
    it('To validate user is able to view the file after clickig on preview icon/EL-6983/ES6983-05',function () {
        TeacherClassGrade.validatepreviewPage()
        cy.go('back')
        TeacherCalender.clickOnClassCheckbox()
        TeacherCalender.clickOnForwordBtn()
        TeacherCalender.clickOnGrade()
        TeacherCalender.clickOnStartSessionBtn()
    })
    it('To validate user is able to view and take attendance on clciking Attendance tab/EL-6986/ES6986-01',function () {
        TeacherClassGrade.clickOnAttendenceTab()
        TeacherClassGrade.validatePresentRadioBtn()
        TeacherClassGrade.validateAbsentRadioBtn()
    })
    it('To valiadte"Attendance tab"user able to mark and store attendance of the class/EL-6986/ES6986-03',function () {
        TeacherClassGrade.validatePresentRadioBtn()
        TeacherClassGrade.validateAbsentRadioBtn()
        TeacherClassGrade.validateSaveBtn()
    })
    it('To valiadte Attendance tab consist of total count of students invited/added to the class/EL-6986/ES6986-02',function () {
        TeacherClassGrade.validateAttendenceTablebody()
    })
    it('To validate user is able to view homework details by click on""Homework tab/EL-6984/ES6984-01',function () {
        cy.get('#simple-tab-2').contains('Homework')
    })
    it('To vlaidate that lesson plan pop-up is populated after user clicks on view lesson plan/EL-6982/ES6982-03',function () {
        TeacherClassGrade.clickOnViewLessonPlanPage()
        TeacherClassGrade.validateLessonPlanPage()
    })
    it('To valiadte dropdown is availabe in view lesson plan popup if there are multiple lesson plans/EL-6982/ES6982-04',function () {
        TeacherClassGrade.valiadteLessonDropdown()
    })
    
    
})