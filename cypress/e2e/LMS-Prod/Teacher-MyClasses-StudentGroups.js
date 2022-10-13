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

    it('EL-994/ES994-01 Validate user is able to create new student groupunder student group tab.', function () {
        cy.forceClick(teacherDashboardPage.getMyclassLnk())
        teacherDashboardPage.getClassMyClasses().eq(0).click()
        teacherGradeBookPage.getGradeTabStudentGradeBook().click()
        teacherGradeBookPage.getStudentGroupsTab().click()
        cy.wait(2000)
        teacherGradeBookPage.getCreateNewGroup().click()
        //teacherGradeBookPage.getUploadFile().attachFile('LMS/Tester.png')
        teacherGradeBookPage.getProfilePic().click()
        teacherGradeBookPage.getGroupNameTextfield().type(this.teacherMyClasses.groupName)
        teacherGradeBookPage.getGroupDescriptionTextfield().type(this.teacherMyClasses.groupDescription)
        teacherGradeBookPage.getAddStudentIcon().click()
        var studentName = []
        teacherGradeBookPage.getStudentNameWhileCreatingGroup().each(($el) => {
            studentName.push($el.text().trim())
        })
        teacherGradeBookPage.getAddStudentPlusIcon().each(($el) => {
            cy.wrap($el).click()
        })
        cy.isEnabled(teacherGradeBookPage.getCreateGroupSaveButton())
        teacherGradeBookPage.getCreateGroupSaveButton().click()
        cy.wait(4000)
        cy.verifyTextContains(teacherGradeBookPage.getAddedGroupTitleText(), this.teacherMyClasses.groupName)
        teacherGradeBookPage.getStudentNameAfterCreatingGroup().each(($el, index) => {
            expect($el.text().trim()).to.equals(studentName[index])
        })
    })

    it('EL-994/ES994-02 Validate the created group card must conatain Group icon, photo, Title, created time, date, about group text shows no. of students in that group along with Edit and delete button.', function () {
        cy.wait(1500)
        cy.isVisible(teacherGradeBookPage.getProfilePicStudentGroup())
        cy.isVisible(teacherGradeBookPage.getAddedGroupTitleText())
        cy.isVisible(teacherGradeBookPage.getCreatedOnStudentGroup())
        cy.isVisible(teacherGradeBookPage.getProfilePicStudentGroup())
        cy.isVisible(teacherGradeBookPage.getNoOfStudentGroup())
        cy.isVisible(teacherGradeBookPage.getEditGroupIcon())
        cy.isVisible(teacherGradeBookPage.getDeleteGroupIcon())
    })

    it("EL-994/ES994-03 Validate To validate detailed pop-up appear on the right side of the screen showing total group students no's, Discussion, group activity, resources related to the particular group.", function () {
        cy.isVisible(teacherGradeBookPage.getGroupStudentsTab())
        cy.isVisible(teacherGradeBookPage.getResourcesTab())
        teacherGradeBookPage.getResourcesTab().click()
        teacherGradeBookPage.getGroupStudentsTab().click()
    })


    it("EL-994/ES994-04 Validate student group card pop-up must have ‘Group students’ list with headers as 'Roll no', Full name' , checkbox to select / unselect and Search bar.", function () {
        cy.isVisible(teacherGradeBookPage.getStudentNameAfterCreatingGroup())
        cy.isVisible(teacherGradeBookPage.getRollNoColumnStudentGroup())
        cy.isVisible(teacherGradeBookPage.getSearchStudentsTextFieldStudentGroup())
        cy.wait(1000)
        // cy.isVisible(teacherGradeBookPage.getCheckBoxStudentGroup())
        teacherGradeBookPage.getCheckBoxStudentGroup().each(($el) => {
            cy.wrap($el).check()
            cy.wait(1000)
            cy.wrap($el).check()
        })
    })

    it("EL-994/ES994-05 Validate search bar is enabled within the stduent group.", function () {
        cy.isVisible(teacherGradeBookPage.getSearchStudentsTextFieldStudentGroup())
        cy.isEnabled(teacherGradeBookPage.getSearchStudentsTextFieldStudentGroup())
    })

    it("EL-994/ES994-06 Validate each  students have row will have remove button", function () {
        cy.isVisible(teacherGradeBookPage.getRemoveButtonStudentGroup())
        cy.isEnabled(teacherGradeBookPage.getRemoveButtonStudentGroup())
    })

    it("EL-994/ES994-07 Validate New stduents can be added by clicking on + button", function () {
        teacherGradeBookPage.getEditGroupIcon().eq(0).click()
        teacherGradeBookPage.getRemoveStudentWhileCreatingGroup().eq(0).click()
        var studentName = []
        teacherGradeBookPage.getStudentNameAfterRemovingStudent().each(($el) => {
            studentName.push($el.text().trim())
        })
        teacherGradeBookPage.getCreateGroupSaveButton().click()
        cy.wait(4000)
        teacherGradeBookPage.getStudentNameAfterCreatingGroup().each(($el, index) => {
            expect($el.text().trim()).to.equals(studentName[index])
        })
        teacherGradeBookPage.getAddNewStudentBtnStudentGroup().click()
        teacherGradeBookPage.getAddStudentPlusIcon().each(($el) => {
            cy.wrap($el).click()
        })
        cy.wait(1000)
        cy.forceClick(teacherGradeBookPage.getDoneBtnStudentGroup())
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

