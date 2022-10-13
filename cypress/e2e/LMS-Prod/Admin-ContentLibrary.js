const adminDashboardPage = require("../../support/pageObjects/LMS-2/AdminDashboardPage")
const adminContentLibraryPage = require("../../support/pageObjects/LMS-2/AdminContentLibraryPage")
const Adminlogin = require('../../support/pageObjects/LMS-2/AdminIndexPage')
const dashboardPage = require('../../support/pageObjects/LMS-1/DashboardPage')
const myPersonalLibraryPage = require('../../support/pageObjects/LMS-1/MyPersonalLibraryPage')

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
            cy.log(bookName)
            if (bookName==="I Look in the Mirror") {
                cy.log(bookName)
                myPersonalLibraryPage.getLookintheMirrorBookMarkIcon().eq(0).click()
            }
        })
    
        cy.wait(4000)
        myPersonalLibraryPage.getMyPersonalLibraryTab().click()
        myPersonalLibraryPage.getBookMarkedButton().click()
        adminContentLibraryPage.getViewRiseTextBookNameInList().each(($el) => {
            var bookName = $el.text()
            cy.wrap(bookName).as('bookName')
            if (bookName=="I Look in the Mirror") {
                myPersonalLibraryPage.getLookintheMirrorBookMarkIcon().click()
            }
        })
    })

    it('Validate user able to Add to collection text book ',function () {
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
                myPersonalLibraryPage.getDefultCollectionsBtton().click()
                cy.contains('Content added to collection').should('be.visible')
            }
        })
    })

})