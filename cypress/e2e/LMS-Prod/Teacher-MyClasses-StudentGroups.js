const teacherDashboardPage = require("../../support/pageObjects/LMS-2/TeacherDashboardPage")
const teacherGradeBookPage = require("../../support/pageObjects/LMS-2/TeacherGradeBookPage")

describe("Verify Teacher My Classes - Student Groups functionalities", function () {

    before(function () {
        cy.visit(Cypress.env('urlProd'))
        cy.fixture("LMS/TeacherLoginCredentials").then(function (teacherLoginCredentials) {
            cy.TeacherPostSetupLogin(teacherLoginCredentials.teacher2, teacherLoginCredentials.password)
        })
    })

    beforeEach(function () {
        cy.viewport(1920, 1080)
        cy.fixture("LMS/TeacherMyClasses").as("teacherMyClasses")
    })

    it('Validate teacher is able to create the Student Groups', function () {
        cy.forceClick(teacherDashboardPage.getMyclassLnk())
        teacherDashboardPage.getClassMyClasses().eq(0).click()
        teacherGradeBookPage.getGradeTabStudentGradeBook().click()
        teacherGradeBookPage.getStudentGroupsTab().click()
        cy.wait(2000)
        teacherGradeBookPage.getCreateNewGroup().click()
        //teacherGradeBookPage.getUploadFile().attachFile('LMS/Tester.png')
        teacherGradeBookPage.getGroupNameTextfield().type(this.teacherMyClasses.groupName)
        teacherGradeBookPage.getGroupDescriptionTextfield().type(this.teacherMyClasses.groupDescription)
        teacherGradeBookPage.getAddStudentIcon().click()
        var studentName = []
        teacherGradeBookPage.getStudentNameWhileCreatingGroup().each(($el) => {
            studentName.push($el.text().trim())
        })
        cy.log(studentName)
        teacherGradeBookPage.getAddStudentPlusIcon().each(($el) => {
            cy.wrap($el).click()
        })
        teacherGradeBookPage.getCreateGroupSaveButton().click()
        cy.wait(4000)
        cy.verifyTextContains(teacherGradeBookPage.getAddedGroupTitleText(), this.teacherMyClasses.groupName)
        teacherGradeBookPage.getStudentNameAfterCreatingGroup().each(($el, index) => {
            expect($el.text().trim()).to.equals(studentName[index])
        })
    })

    it('Validate teacher is able to Edit the Student Groups', function () {
        cy.wait(1500)
        teacherGradeBookPage.getEditGroupIcon().eq(0).click()
        teacherGradeBookPage.getRemoveStudentWhileCreatingGroup().eq(0).click()
        var studentName = []
        teacherGradeBookPage.getStudentNameAfterRemovingStudent().then(($el) => {
            studentName.push($el.text().trim())
        })
        teacherGradeBookPage.getCreateGroupSaveButton().click()
        cy.wait(4000)
        teacherGradeBookPage.getStudentNameAfterCreatingGroup().each(($el, index) => {
            expect($el.text().trim()).to.equals(studentName[index])
        })
    })

    it('Validate teacher is able to Delete the Student Groups', function () {
        cy.wait(1500)
        teacherGradeBookPage.getDeleteGroupIcon().each(($el) => {
            cy.wrap($el).click()
            teacherGradeBookPage.getDeleteYesRemoveButton().click()
        })
        cy.wait(1500)
        cy.isVisible(teacherGradeBookPage.getNoGroupsFoundMsg())
    })

})