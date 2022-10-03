const teacherDashboardPage = require("../../../support/pageObjects/LMS-2/TeacherDashboardPage")
const teacherProfileAccountInformationPage = require("../../../support/pageObjects/LMS-2/TeacherProfileAccountInformationPage")

describe("Verify Teacher Profile Account Information Functionalities - Sprint 22(EL-6285)", function () {

    before(function () {
        cy.visit(Cypress.env("urlQAPreSetup"))
        cy.fixture("LMS/TeacherLoginCredentials").then(function (validLoginData) {
            cy.TeacherPostSetupLogin(validLoginData.user1, validLoginData.password)
        })
    })

    beforeEach(function () {
        cy.fixture("LMS/TeacherProfileAccountInformation").as("teacherProfileAccountInformation")
    })

    it("EL-6285/ES6285-01 Validate user is able  to view account information by clicking on Account Information option avialable in profile menu", function () {
        cy.forceClick(teacherDashboardPage.getMyProfileLink())
        cy.wait(1000)
        cy.isVisible(teacherDashboardPage.getMyProfileAccountInformationLink())
    })

    it("EL-6285/ES6285-02 Validate user is redirected to Account and Support screen if user clicks on Account information tab", function () {
        cy.forceClick(teacherDashboardPage.getMyProfileAccountInformationLink())
        cy.waitFor(cy.isVisible(teacherProfileAccountInformationPage.getAccountAndSupportTitle()))
    })

})