const teacherDashboardPage = require("../../../support/pageObjects/LMS-2/TeacherDashboardPage")
const teacherCalenderPage = require("../../../support/pageObjects/LMS-2/TeacherCalenderPage")
const teacherClassGradePage = require("../../../support/pageObjects/LMS-2/TeacherClassGradePage")

describe("Verify Admin student grade book functionalities", function () {

    before(function () {
        cy.visit(Cypress.env('urlQAPreSetup'))
        cy.fixture("LMS/TeacherLoginCredentials").then(function (validAdminLoginData) {
            cy.TeacherPostSetupLogin(validAdminLoginData.user1, validAdminLoginData.password)
        })
    })
    it('To validate teacher is able to view the class details of all the clases/EL-6982/ES6982-01', function () {
        teacherDashboardPage.clickOnMyCalenderLink()
        teacherCalenderPage.clickOnClassCheckbox()
        teacherCalenderPage.clickOnForwordBtn()
        teacherCalenderPage.clickOnGrade()
        teacherCalenderPage.clickOnStartSessionBtn()
        teacherClassGradePage.validateClassDetailBtn()
        teacherClassGradePage.validateTimetableBtn()
    })
    it('To validate user is able to view class resources details after clicking on "Class resources tab"/EL-6983/ES6983-01.', function () {
        teacherClassGradePage.validateResourceTable()
    })
    it('To validate "count of total resources attached " is displayed after user clicks on Class resources tab/EL-6983/ES6983-02', function () {
        teacherClassGradePage.validateCountOfTotalResourcesAttached()
    })
    it('To validate "Download all" button is available for the user after user clicks on class resources tab/EL-6983/ES6983-03', function () {
        teacherClassGradePage.validateDownloadBtn()
    })
    it('To validate preview and Downalod options is displayed against each file/EL-6983/ES6983-04', function () {
        teacherClassGradePage.validatePreviewIcon()
        teacherClassGradePage.validateDownloadIcon()
    })
    it('To valiadte user is able to downlaod individual resources/EL-6983/ES6983-07', function () {
        teacherClassGradePage.valiadteDownlaodIndividualResources()
    })
    it('To validate user is able to view the file after clickig on preview icon/EL-6983/ES6983-05', function () {
        teacherClassGradePage.validatepreviewPage()
        cy.go('back')
        teacherCalenderPage.clickOnClassCheckbox()
        teacherCalenderPage.clickOnForwordBtn()
        teacherCalenderPage.clickOnGrade()
        teacherCalenderPage.clickOnStartSessionBtn()
    })
    it('To validate user is able to view and take attendance on clciking Attendance tab/EL-6986/ES6986-01', function () {
        teacherClassGradePage.clickOnAttendenceTab()
        teacherClassGradePage.validatePresentRadioBtn()
        teacherClassGradePage.validateAbsentRadioBtn()
    })
    it('To valiadte"Attendance tab"user able to mark and store attendance of the class/EL-6986/ES6986-03', function () {
        teacherClassGradePage.validatePresentRadioBtn()
        teacherClassGradePage.validateAbsentRadioBtn()
        teacherClassGradePage.validateSaveBtn()
    })
    it('To valiadte Attendance tab consist of total count of students invited/added to the class/EL-6986/ES6986-02', function () {
        teacherClassGradePage.validateAttendenceTablebody()
    })
    it('To vlaidate that lesson plan pop-up is populated after user clicks on view lesson plan/EL-6982/ES6982-03', function () {
        teacherClassGradePage.clickOnViewLessonPlanPage()
        teacherClassGradePage.validateLessonPlanPage()
    })
    it('To valiadte dropdown is availabe in view lesson plan popup if there are multiple lesson plans/EL-6982/ES6982-04', function () {
        teacherClassGradePage.valiadteLessonDropdown()
    })


})