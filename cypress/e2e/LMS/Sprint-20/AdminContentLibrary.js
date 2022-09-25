/// <reference types="Cypress-iframe" />
import 'cypress-iframe'

const adminDashboardPage = require("../../../support/pageObjects/LMS-2/AdminDashboardPage")
const adminContentLibraryPage = require("../../../support/pageObjects/LMS-2/AdminContentLibraryPage")

describe("Verify Admin Content Library functionalities", function () {

    before(function () {
        cy.visit(Cypress.env('urlQAPreSetup'))
        cy.fixture("LMS/AdminLoginCredentials").then(function (adminLoginCredentials) {
            cy.AdminPostSetup(adminLoginCredentials.fNew, adminLoginCredentials.password)
        })
    })

    beforeEach(function () {
        cy.viewport(1920, 1080)
        cy.fixture("LMS/AdminContentLibrary").as("adminContentLibrary")
    })

    it('EL-4736/ES4736_1 Validate user clicks on "Content", library page is displayed and the user is able to view the list of Textbook in the PDF format that is uploaded', function () {
        adminDashboardPage.getSideMenuContentLibraryImg().click()
        cy.isVisible(adminContentLibraryPage.getRiseTextBookText())
        cy.isVisible(adminContentLibraryPage.getPdfImg())
    })

    it('EL-4736/ES4736_2,ES4736_7 Validate user is able to perform following actions *Zoom In and Zoom out Text book Page *Back to the previous screen *Rotate the page', function () {
        adminContentLibraryPage.getRiseTextBookTab().click()
        adminContentLibraryPage.getViewRiseTextBookNameInList().eq(1).then((bookName) => {
            var bookName = bookName.text()
            adminContentLibraryPage.getViewRiseTextBookLink().eq(1).click()
            cy.wait(3000)
            cy.verifyTextEquals(adminContentLibraryPage.getViewRiseTextBookNameTitle(), bookName)
        })
        cy.wait(7000)
        adminContentLibraryPage.getContentLibraryViewRiseTextBookIframe()
        adminContentLibraryPage.getContentLibraryZoomInIcon().click()
        cy.verifyAttributeValue(adminContentLibraryPage.getContentLibraryZoomValue(), 'value', this.adminContentLibrary.contentLibraryZoomInIcon)
        adminContentLibraryPage.getContentLibraryZoomOutIcon().click()
        cy.verifyAttributeValue(adminContentLibraryPage.getContentLibraryZoomValue(), 'value', this.adminContentLibrary.contentLibraryZoomOutIcon)
        adminContentLibraryPage.getContentLibraryViewControlsButton().click()
        adminContentLibraryPage.getContentLibraryViewControlsAllButtons().each(($el, index, $list) => {
            cy.wrap($el).click({ force: true })
            cy.wait(1000)
        })
    })

    it('EL-4736/ES4736_3,ES4736_5 Validate User is able to Edit the Number on clicking the page number present at the bottom of the page.', function () {
        adminContentLibraryPage.getContentLibraryViewDocumentBackIcon().click()
        adminContentLibraryPage.getElaAssignmentsTab().click()
        adminContentLibraryPage.getElaAssignmentsViewAllButton().click()
        adminContentLibraryPage.getViewElaAssignmentsLink().eq(0).click()
        cy.wait(7000)
        adminContentLibraryPage.getContentLibraryViewElaAssignmentsIframe()
        cy.setAndVerifyAttributeValue(adminContentLibraryPage.getContentLibraryDocumentSetPage(), 'value', this.adminContentLibrary.contentLibraryDocumentSetPage)
    })

    it('EL-4736/ES4736_4 Validate user on Clicking the arrows in page number is able to navigate to next page.', function () {
        cy.forceClick(adminContentLibraryPage.getContentLibraryDocumentNextPageIcon())
        cy.forceClick(adminContentLibraryPage.getContentLibraryDocumentPreviousPageIcon())
    })

    it('EL-4736/ES4736_6 Validate whether user is able to use the full screen option.', function () {
        adminContentLibraryPage.getContentLibraryZoomValue().click()
        cy.forceClick(adminContentLibraryPage.getContentLibraryZoomFitToWidth())
        adminContentLibraryPage.getContentLibraryDocumentMenuBtn().trigger('click')
        cy.wait(1000)
        cy.isVisible(adminContentLibraryPage.getContentLibraryDocumentFullScreenBtn())
        cy.forceClick(adminContentLibraryPage.getContentLibraryDocumentFullScreenBtn())
        // cy.verifyAttributeValue(adminContentLibraryPage.getContentLibraryDocumentFullScreenBtnText(), 'aria-label', this.adminContentLibrary.contentLibraryDocumentExitFullScreenText)
        // cy.forceClick(adminContentLibraryPage.getContentLibraryDocumentFullScreenBtn())
    })


})