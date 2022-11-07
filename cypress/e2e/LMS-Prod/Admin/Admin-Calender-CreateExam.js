const adminDashboardPage = require("../../../support/pageObjects/LMS-2/AdminDashboardPage")
const adminCalenderHomePage = require("../../../support/pageObjects/LMS-2/AdminCalenderHomePage")
const adminlogin = require('../../../support/pageObjects/LMS-2/AdminIndexPage')
const dayjs = require('dayjs')

describe("Verify Admin Calender Exam related functionalities", function () {

    var title = []
    before(function () {
        cy.visit(Cypress.env('urlProd'))
        adminlogin.getAdminBtn().click()
        cy.fixture("LMS/validAdminLoginCredentials").then(function (validAdminLoginData) {
            this.validAdminLoginData = validAdminLoginData;
            cy.login(this.validAdminLoginData.prodUserName, this.validAdminLoginData.password)
        });
    });

    beforeEach(function () {
        cy.viewport(1920, 1080)
        cy.fixture("LMS/AdminCalenderExam").as("adminCalenderExam")
    })

    it('EL-111/ES111-01 Validate user is able to create an exam in calendar', function () {
        cy.forceClick(adminDashboardPage.getCalenderBtn())
        adminCalenderHomePage.getCreateNewBtn().click()
        adminCalenderHomePage.getExamLink().click()
        adminCalenderHomePage.getCreateExamsDropdowns().eq(0).click()
        adminCalenderHomePage.getCreateExamsDropdownsList().contains(this.adminCalenderExam.examGrade).click()
        cy.wait(1000)
        adminCalenderHomePage.getCreateExamSubjectDropdown().click()
        adminCalenderHomePage.getCreateExamsDropdownsList().contains(this.adminCalenderExam.examSubject).click()
        adminCalenderHomePage.getEnterExamTitleTextFieldCreateExam().type(this.adminCalenderExam.examTitle)
        adminCalenderHomePage.getDateOfExamTextFieldCreateExam().click()
        adminCalenderHomePage.getDateCreateExam().contains(Number(dayjs().format('DD')) + 1).click()
        adminCalenderHomePage.getStartEndTimeCreateExam().eq(0).click()
        adminCalenderHomePage.getAmPmTimeCreateExam().eq(0).click()
        cy.clickOnBody()
        adminCalenderHomePage.getStartEndTimeCreateExam().eq(1).click()
        cy.wait(1000)
        adminCalenderHomePage.getAmPmTimeCreateExam().eq(1).click()
        cy.clickOnBody()
        adminCalenderHomePage.getExamTypeCreateExam().click()
        adminCalenderHomePage.getCreateExamsDropdownsList().eq(1).click()
        adminCalenderHomePage.getAttachFileCreateExam().attachFile('LMS/SampleDocs-sample-pdf-file.pdf')
        adminCalenderHomePage.getSaveExamBtn().click()
        cy.wait(4000)
        adminCalenderHomePage.getExamCheckbox().check()
        adminCalenderHomePage.getDateInYourCalender().contains(Number(dayjs().format('DD')) + 1).click()
        cy.verifyTextContains(adminCalenderHomePage.getExamTextYourCalender(), this.adminCalenderExam.examTitle)
    })

    it('EL-111/ES111-04 Validate any deleteion ,updation,creation  in exam for admin is reflecetd for the teacher', function () {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit(Cypress.env("urlProd"))
        cy.fixture("LMS/TeacherLoginCredentials").then(function (teacherLoginCredentials) {
            cy.TeacherPostSetupLogin(teacherLoginCredentials.teacher2, teacherLoginCredentials.password)
        })
        cy.forceClick(adminDashboardPage.getCalenderBtn())
        adminCalenderHomePage.getExamCheckbox().check()
        adminCalenderHomePage.getDateInYourCalender().contains(Number(dayjs().format('DD')) + 1).click()
        cy.verifyTextContains(adminCalenderHomePage.getExamTextYourCalender(), this.adminCalenderExam.examTitle)
    })

    it('EL-111/ES111-02 Validate user is able  to edit the exam', function () {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit(Cypress.env("urlProd"))
        adminlogin.getAdminBtn().click()
        cy.fixture("LMS/validAdminLoginCredentials").then(function (validAdminLoginData) {
            this.validAdminLoginData = validAdminLoginData;
            cy.login(this.validAdminLoginData.prodUserName, this.validAdminLoginData.password)
        });
        cy.forceClick(adminDashboardPage.getCalenderBtn())
        adminCalenderHomePage.getExamCheckbox().check()
        adminCalenderHomePage.getExamTextYourCalender().eq(0).click()
        cy.wait(1000)
        adminCalenderHomePage.getExamTitleTextEditExam().then(($el) => {
            title.push($el.text())
            adminCalenderHomePage.getEditExamBtn().click()
            adminCalenderHomePage.getEnterExamTitleTextFieldCreateExam().type('01')
            adminCalenderHomePage.getSaveExamBtn().click()
            cy.wait(4000)
            cy.verifyTextContains(adminCalenderHomePage.getExamTextYourCalender(), title[0] + '01')
        })
    })

    it('EL-111/ES111-04 Validate any deleteion ,updation,creation  in exam for admin is reflecetd for the teacher', function () {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit(Cypress.env("urlProd"))
        cy.fixture("LMS/TeacherLoginCredentials").then(function (teacherLoginCredentials) {
            cy.TeacherPostSetupLogin(teacherLoginCredentials.teacher2, teacherLoginCredentials.password)
        })
        cy.forceClick(adminDashboardPage.getCalenderBtn())
        adminCalenderHomePage.getExamCheckbox().check()
        adminCalenderHomePage.getDateInYourCalender().contains(Number(dayjs().format('DD')) + 1).click()
        cy.verifyTextContains(adminCalenderHomePage.getExamTextYourCalender(), title[0] + '01')
    })

    it('EL-111/ES111-03 Validate user is able to delete the exam', function () {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit(Cypress.env("urlProd"))
        adminlogin.getAdminBtn().click()
        cy.fixture("LMS/validAdminLoginCredentials").then(function (validAdminLoginData) {
            this.validAdminLoginData = validAdminLoginData;
            cy.login(this.validAdminLoginData.prodUserName, this.validAdminLoginData.password)
        })
        cy.forceClick(adminDashboardPage.getCalenderBtn())
        adminCalenderHomePage.getExamCheckbox().check()
        adminCalenderHomePage.getExamTextYourCalender().then(($el) => {
            var len = $el.length
            for (let index = 0; index < len; index++) {
                cy.forceClick(adminCalenderHomePage.getExamTextYourCalender().eq(0))
                cy.wait(1000)
                adminCalenderHomePage.getDeleteExamBtn().click()
                cy.wait(1000)
                adminCalenderHomePage.getDeleteExamConfrmBtn().click()
                cy.wait(3000)
            }
        })
    })

    it('EL-111/ES111-04 Validate any deleteion ,updation,creation  in exam for admin is reflecetd for the teacher', function () {
        cy.wait(1000)
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.wait(1000)
        cy.visit(Cypress.env("urlProd"))
        cy.fixture("LMS/TeacherLoginCredentials").then(function (teacherLoginCredentials) {
            cy.TeacherPostSetupLogin(teacherLoginCredentials.teacher2, teacherLoginCredentials.password)
        })
        cy.forceClick(adminDashboardPage.getCalenderBtn())
        adminCalenderHomePage.getExamCheckbox().check()
        adminCalenderHomePage.getExamTextYourCalender().should('not.exist')
    })

})