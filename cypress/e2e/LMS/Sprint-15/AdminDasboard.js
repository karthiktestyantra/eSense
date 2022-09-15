import AdminDashboardPage from "../../../support/pageObjects/LMS-2/AdminDashboardPage";

const adminDashboardPage = new AdminDashboardPage()

describe("Verify admin dashboard functionalities", function () {
    before(function () {
        cy.visit(Cypress.env('urlQAPreSetup'))
        cy.fixture('LMS/AdminLoginCredentials').then(function (validAdminLoginData) {
            cy.AdminPostSetup(validAdminLoginData.fNew, validAdminLoginData.password)
        })
    })
    beforeEach(function () {
        cy.fixture('LMS/AdminDashboardCredentials').then(function (adminDashboard) {
            this.adminDashboard = adminDashboard;
        })
    })

    it("Validate admin click on Quick link, “Grade and Departments” page with Academic Setup Grades and Department page in an editable mode with pagination./EL-4063/ES4063_01", function () {
        adminDashboardPage.getSideMenuAdminSchoolImg().click()
        adminDashboardPage.getGradesAndDepartmentQuickLink().click()
        adminDashboardPage.getGradesAndSubjectBtn().click()
        adminDashboardPage.getEditableGradeBtn().click()
        adminDashboardPage.getEditableGradePopUpTxt().should('contain.text', 'Edit Grade')
        adminDashboardPage.getEditableGradeSection().clear()
        adminDashboardPage.getEditableGradeSection().type(this.adminDashboard.sectiongradename)
        adminDashboardPage.getEditableGradeOptionalSubDropdown().click()
        adminDashboardPage.getEditableGradeOptionalSubCheckBox().uncheck({ force: true })
        adminDashboardPage.getEditableGradeOptionalSubCheckBox().check()
        adminDashboardPage.getEditableGradePopUpSaveBtn().click({ force: true })
        adminDashboardPage.getEditableGradePopUpSaveSuccessMeg().should('contain.text', 'Section updated successfully!')

    })

    it("Validate admin Click on “Grades and subject ” Tab, Will show all list of Grades along with its section./EL-4063/ES4063_02", function () {
        adminDashboardPage.getLisOfGrades().should('be.visible')
        adminDashboardPage.getLisOfSection().should('be.visible')
    })

    it("Validate admin click on particular Section " + " button, Add new section/Edit  Pop-up screen will be displayed/EL-4063/ES4063_03", function () {
        adminDashboardPage.getAddNewGradeBtn().click()
        adminDashboardPage.getAddNewGradePopupTxt().should('contain.text', 'Add New Section')
        adminDashboardPage.getAddNewGradePopupCancelBtn().click({ force: true })
    })

    it("Validate admin click on the “Class Details” Quick link will navigate to Overview “Class Dashboard” with a back button and with Class title/EL-4063/ES4063_04", function () {
        adminDashboardPage.getEditableGradeBtn().click()
        adminDashboardPage.getClassDetailsBtn().click()
        adminDashboardPage.getClassDetailsBackBtn().should('be.visible')
        adminDashboardPage.getClassDetailsClassTitle().scrollIntoView().should('be.visible')
    })

    it("Validate admin click on the “Class Details” Quick link will naviagate to  Overview “Class Dashboard”/EL-4063/ES4063_05", function () {

        adminDashboardPage.getClassDetailsDashboardClassName().should('be.visible')

    })

    it("Validate admin is able to view Class overview - Class name”, “Subject” as filter, current “Date”, ”no of Student Present”./EL-4063/ES4063_06", function () {
        adminDashboardPage.getClassDetailsSubjectFilter().should('be.visible')
        adminDashboardPage.getClassDetailsCurrentDate().should('be.visible')
        adminDashboardPage.getClassDetailsStudentPresentCount().should('be.visible')
    })

    it("Validate admin is able to view Class overview - “no. of “Session completed”, no. of “Pending Tasks”, “Average Attendance” in percentage./EL-4063/ES4063_07", function () {
        adminDashboardPage.getClassDetailsSessionCompletedSec().should('be.visible')
        adminDashboardPage.getClassDetailsPendingTaskSec().should('be.visible')
        adminDashboardPage.getClassDetailsAverageAttendenceSec().should('be.visible')

    })

    it("Validate admin is able to view Milestones Completed” section  on the right side of the “class profile” screen./EL-4063/ES4063_09", function () {
        adminDashboardPage.getClassDetailsMilestoneSection().should('be.visible')

    })

    it("Validate admin is able to view Class performance” , below “upcoming session” section and  show the chart,average score of class, showing top “3 Top Performers” on “Needs Attention”/EL-4063/ES4063_10", function () {
        adminDashboardPage.getClassDetailsTopPerformerBtn().should('be.visible')
        adminDashboardPage.getClassDetailsNoNeedAttentionBtn().should('be.visible')
        adminDashboardPage.getClassDetailsListOfTopPerformer().should('be.visible')

    })

    it("Valdiate admin is should be able to see the  “coming soon” tag as data is not available now if there is no class performance is listed/EL-4063/EL-4063_11", function () {
        adminDashboardPage.getClassDetailsTopPerformerCommingSoonTag().should('have.text', this.adminDashboard.CommingsoonTxt)

    })



})