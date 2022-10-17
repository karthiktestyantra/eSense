const adminDashboardPage = require("../../../support/pageObjects/LMS-2/AdminDashboardPage")
const adminContentLibraryPage = require("../../../support/pageObjects/LMS-2/AdminContentLibraryPage")
const myPersonalLibraryPage = require('../../../support/pageObjects/LMS-1/MyPersonalLibraryPage')
import 'cypress-iframe'
/// <reference types="Cypress-iframe" />

describe("Verify  Content Library functionalities", function () {

    before(function () {
        cy.visit(Cypress.env('urlProd'))
        cy.fixture("LMS/ValidTeacherLoginCredentials.json").then(function (validAdminLoginData) {
            this.validAdminLoginData = validAdminLoginData;
            cy.TeacherPostSetupLogin(this.validAdminLoginData.prodUsername, this.validAdminLoginData.prodPassword)
        })
    });

    beforeEach(function () {
        cy.viewport(1920, 1080)
        cy.fixture("LMS/AdminContentLibrary").as("adminContentLibrary")
    })

    it('EL-768/ES768-01 To validate user is able to upload personal resources personal resources like ( videos, pdf, doc, interactive contents ) can be saved under my personal content library.',function () {
        
        adminDashboardPage.getContentLibraryBtn().click({force:true});
        adminContentLibraryPage.getTopSchoolLibrary().click()
        myPersonalLibraryPage.getMyPersonalLibraryTab().click()
        cy.wait(1000)
        myPersonalLibraryPage.getUploadResource().scrollIntoView().selectFile('cypress/fixtures/LMS/ErrorReport.xlsx',{force:true})
    })
    it('EL-768/ES768-04  To validate after successful upload file will contain tags like type of content (radio button) and  class, grade, chapter topic from the drop down.',function () {
        cy.wait(2000)
        cy.isVisible(myPersonalLibraryPage.getUploadResoureceGradeDropdown())
        cy.isVisible(myPersonalLibraryPage.getUploadResoureceSubjectDropdown())
        cy.isVisible(myPersonalLibraryPage.getUploadResoureceChapterDropdown())
        cy.isVisible(myPersonalLibraryPage.getUploadResoureceTopicsDropdown())
    })
})