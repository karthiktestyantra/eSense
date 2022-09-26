const teacherDashboardPage = require("../../../support/pageObjects/LMS-2/TeacherDashboardPage")
const teacherCalenderPage = require("../../../support/pageObjects/LMS-2/TeacherCalenderPage")
const teacherClassGradePage = require("../../../support/pageObjects/LMS-2/TeacherClassGradePage")

describe("Verify Teacher Calender functionalities", function () {

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
        cy.get('.vc_resources_dwn_btn').click()
        cy.get('[type="file"]').attachFile('LMS/SampleDocs-sample-pdf-file.pdf')
        cy.wait(4000)
        cy.get(':nth-child(8) > .resource_tittle_container_vc > .vc_resource_txt_container > .noteAttViewBtn').click()
        cy.get('#mui-15').type('Automation Test')
        cy.get(':nth-child(3) > .MuiFormControl-root > .MuiOutlinedInput-root').click({force:true})
        cy.get('.MuiButtonBase-root > [data-testid="ArrowDropDownIcon"]').click()
        
        cy.pause()
        teacherCalenderPage.clickOnStartSessionBtn()
        teacherClassGradePage.validateClassDetailBtn()
        teacherClassGradePage.validateTimetableBtn()
    })

    it('To validate user is redirected to class details screen upon clicking on ""Start session"" button/EL-6982/ES6982-02',function () {
        teacherClassGradePage.validateClassDetailBtn()
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

    it('To validate user is able to view homework details by click on""Homework tab/EL-6984/ES6984-01',function () {
        teacherClassGradePage.clickOnHomeworkTab()
        teacherClassGradePage.valiadteHomeworkPageTitle()
    })

    it('To validate Homework tab consist of total count of homework assingned for the class/EL-6984/ES6984-02',function () {
        teacherClassGradePage.validateCountOfHomework()
    })

    it('To validate preview and Downalod options is displayed against each file/EL-6984/ES6984-04',function () {
        teacherClassGradePage.validateHomeworkPreviewIcon()
        teacherClassGradePage.validateHomeworkDownloadIcon()
    })

    it('To validate Homework attachment list consist of Homework title,created date ,count of attachments/EL-6984/ES6984-05',function () {
        teacherClassGradePage.validateHomeworkTitle()
        teacherClassGradePage.validateHomeworkDate()
        teacherClassGradePage.validateHomeworkAttachement()
    })

    it('To validate user is able to view the"Homework" after clickig on preview icon/EL-6984/ES6984-06',function () {
        teacherClassGradePage.clickOnHomeworkPreviewIcon()
        teacherClassGradePage.validateHomeworkPreviewPage()
        cy.go('back')
        teacherCalenderPage.clickOnClassCheckbox()
        teacherCalenderPage.clickOnForwordBtn()
        teacherCalenderPage.clickOnGrade()
        teacherCalenderPage.clickOnStartSessionBtn()
    })

    it('To validate individual resources is downloaded after user clicks on download/EL-6984/ES6984-07',function () {
        teacherClassGradePage.clickOnHomeworkTab()
        teacherClassGradePage.getHomeworkDownloadIcon().click()
    })

    it('To validate Download all button is available in homeworktab and user is able to download the homework/EL-6984/ES6984-03',function () {
        teacherClassGradePage.getHomeworkDownloadAllBtn().click()
    })
    
    it('To vlaidate that lesson plan pop-up is populated after user clicks on view lesson plan/EL-6982/ES6982-03', function () {
        teacherClassGradePage.clickOnViewLessonPlanPage()
        teacherClassGradePage.validateLessonPlanPage()
    })
    
    it('To valiadte dropdown is availabe in view lesson plan popup if there are multiple lesson plans/EL-6982/ES6982-04', function () {
        teacherClassGradePage.valiadteLessonDropdown()
    })

    it('EL-5686/EL5686_1 Validate teacher is able to create “Lesson plans”', function () {
        teacherClassGradePage.valiadteLessonDropdown()
    })




})//precondition  
    // resource should be present
    // homework should be present