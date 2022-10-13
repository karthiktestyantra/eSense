const adminDashboardPage = require("../../support/pageObjects/LMS-2/AdminDashboardPage")
const adminContentLibraryPage = require("../../support/pageObjects/LMS-2/AdminContentLibraryPage")
const Adminlogin = require('../../support/pageObjects/LMS-2/AdminIndexPage')
const dashboardPage = require('../../support/pageObjects/LMS-1/DashboardPage')
const myPersonalLibraryPage = require('../../support/pageObjects/LMS-1/MyPersonalLibraryPage')
var randomstring = require("randomstring")

describe("Verify Admin Content Add to Collection functionalities", function () {

    before(function () {
        cy.visit(Cypress.env('urlProd'))
        Adminlogin.getAdminBtn().click()
        cy.fixture("LMS/validAdminLoginCredentials").then(function (validAdminLoginData) {
            this.validAdminLoginData = validAdminLoginData;
            cy.login(this.validAdminLoginData.prodUserName, this.validAdminLoginData.password)
        });
    });

    beforeEach(function () {
        cy.viewport(1920, 1080)
    })

    it('Validate user able to Bookmark the text book under the Rise Text book section ', function () {
        for (var i = 1; i <= 3; i++) {
            cy.get('button.MuiButton-root').contains('Continue').click()
            cy.wait(2000)
        }
        cy.get('.continue-btn').click()
        cy.wait(2000)
        cy.get('.continue-btn').click()
        adminDashboardPage.getSideMenuContentLibraryImg().click()
    
        dashboardPage.getContentLibrary().click();
        adminContentLibraryPage.getRiseTextBookLink().scrollIntoView().click()
        adminContentLibraryPage.getViewRiseTextBookNameInList().each(($el) => {
            var bookName = $el.text().trim()
            if (bookName==="I Look in the Mirror") {
                cy.log(bookName)
                cy.wait(4000)
                myPersonalLibraryPage.getLookintheMirrorBookMarkIcon().click()
            }
        })
    
        cy.wait(4000)
        myPersonalLibraryPage.getMyPersonalLibraryTab().click()
        myPersonalLibraryPage.getBookMarkedButton().click()
        cy.wait(4000)
        adminContentLibraryPage.getViewRiseTextBookNameInList().each(($el) => {
            var bookName = $el.text()
            cy.wrap(bookName).as('bookName')
            if (bookName=="I Look in the Mirror") {
                cy.wait(4000)
                myPersonalLibraryPage.getMyPorsonalLibraryLookintheMirrorBookMarkIcon().click()
            }
        })
    })

    it('EL-769/ES769-01   To validate user is able to create  my collection folder under my personal content library.',function () {
        adminContentLibraryPage.getTopSchoolLibrary().click()
        myPersonalLibraryPage.getMyPersonalLibraryTab().click()
        cy.wait(2000)
        myPersonalLibraryPage.getMyCollectionCreateNewBtn().scrollIntoView().click()
        myPersonalLibraryPage.getCreateNewNameOfCollection().type('test automation')
        myPersonalLibraryPage.getCreateNewGread().click()
        myPersonalLibraryPage.getCreateNewGread3Opt().click()
        cy.wait(1000)
        myPersonalLibraryPage.getCreateNewSubject().click()
        myPersonalLibraryPage.getCreateNewSubjectEnglishOpt().click()
        myPersonalLibraryPage.getCreateNewCreateCollection().click()
        cy.go('back')

        myPersonalLibraryPage.getCollectionslist().each(($el) => {
            var bookName = $el.text()
            cy.wrap(bookName).as('bookName')
            if (bookName=="test automation") {
                myPersonalLibraryPage.getCollectionslist().contains('test automation').click()
            }
        })
    })

    it('EL-769/ES769-02 To validate user is able to pick any content from topschool library and mark add to my collection folder.',function () {
        adminContentLibraryPage.getTopSchoolLibrary().click()
        adminContentLibraryPage.getRiseTextBookLink().scrollIntoView().click()
        adminContentLibraryPage.getViewRiseTextBookNameInList().each(($el) => {
            var bookName = $el.text()
            cy.wrap(bookName).as('bookName')
            if (bookName=="I Look in the Mirror") {
                myPersonalLibraryPage.getLookInToMirrorThreeDots().click()
                cy.wait(1000)
                myPersonalLibraryPage.getAddToCollectionBtn().click()
                cy.wait(1000)
                myPersonalLibraryPage.getAutomationCollectionsButton().click()
                cy.contains('Content added to collection').should('be.visible')
            }
        })
    })

    
    it('EL-769/EL-769-03 "To validate  the following details are present  while creating the new collection such as:Name of collection - text input - max 50 characters Subject, Grade - drop down, values from backend.Description - text input - max 1000 characters"',function () {
        myPersonalLibraryPage.getMyPersonalLibraryTab().click()
        myPersonalLibraryPage.getCollectionslist().each(($el) => {
            var bookName = $el.text()
            cy.wrap(bookName).as('bookName')
            if (bookName=="test automation") {
                myPersonalLibraryPage.getCollectionslist().contains('test automation').click()
            }
        })
        myPersonalLibraryPage.getCollectionsEditBtn().click()
        myPersonalLibraryPage.getCreateNewNameOfCollection().type(randomstring.generate(50))
        myPersonalLibraryPage.getCreateNewGread().should('be.visible')
        myPersonalLibraryPage.getCreateNewSubject().should('be.visible')
        myPersonalLibraryPage.getEditCollectionDescriptionTextArea().type(randomstring.generate(1000))
        myPersonalLibraryPage.getEditCollectionCloseIcon().click()
    })

    it('EL-769/EL-769-03 validate user able to delete collection',function () {
        myPersonalLibraryPage.getDeleteCollectionBtn().click()
        myPersonalLibraryPage.getDeleteCollectionPopupBtn().click()
    })

})