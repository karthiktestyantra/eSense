const adminDashboardPage = require("../../../support/pageObjects/LMS-2/AdminDashboardPage")
const adminContentLibraryPage = require("../../../support/pageObjects/LMS-2/AdminContentLibraryPage")

describe("Verify Admin Dashboard Site Analytics - Sprint 23(EL-4946)", function () {

    before(function () {
        cy.visit(Cypress.env('urlStagingERP'))
        cy.fixture('LMS/AdminLoginCredentials').then(function (validAdminLoginData) {
            cy.AdminPostSetup(validAdminLoginData.fNew, validAdminLoginData.password)
        })
    })

    beforeEach(function () {
        cy.fixture("LMS/AdminDashboardCredentials").as("adminDashboardCredentials")
    })

    it("EL-4946/ES4946-01 Validate user is able to view Content performance option in the site analytics section of the dashboard.", function () {
        cy.isVisible(adminDashboardPage.getSiteAnalyticsTitle())
        cy.isVisible(adminDashboardPage.getContentPerformanceTab())
        adminDashboardPage.getContentPerformanceTab().click()
    })

    it("EL-4946/ES4946-02 Validate most popular contents of topschool library contents are displayed.", function () {
        cy.wait(2000)
        var expBookName = []
        var actBookName = []
        adminDashboardPage.getBookNameTextContentPerformance().each(($el) => {
            expBookName.push($el.text().trim())
            cy.wrap(expBookName).as('expBookName')
        })
        adminDashboardPage.getSideMenuContentLibraryImg().click()
        cy.wait(1500)
        adminContentLibraryPage.getMostPopularViewAllButton().click()
        cy.wait(3500)
        adminContentLibraryPage.getMostPopularBooksTextInContentLibrary().each(($el) => {
            actBookName.push($el.text().trim())
            cy.wrap(actBookName).as('actBookName')
        })
        cy.get('@expBookName').then((expBookName) => {
            cy.get('@actBookName').then((actBookName) => {
                for (let index = 0; index < expBookName.length; index++) {
                    expect(expBookName[index]).to.equal(actBookName[index])
                }
            })
        })
    })

    it("EL-4946/ES4946-03 Validate Grade filter option is present in the dashboard.", function () {
        adminDashboardPage.getSideMenuAdminDashboardImg().click()
        cy.wait(1500)
        adminDashboardPage.getContentPerformanceTab().click()
        cy.isVisible(adminDashboardPage.getDropdownsInContentPerformance().eq(0))
        adminDashboardPage.getDropdownsInContentPerformance().eq(0).click()
        cy.wait(1500)
        cy.isVisible(adminDashboardPage.getTopPerformersDropdownList().should('have.length', 13))
        cy.clickOnBody()
    })

    it("EL-4946/ES4946-04 Validate in Content type filter all the topschool content library options are listed and by default All is selected and displayed", function () {
        cy.isVisible(adminDashboardPage.getDropdownsInContentPerformance().eq(1))
        cy.wait(2000)
        cy.forceClick(adminDashboardPage.getDropdownsInContentPerformance().eq(1))
        cy.wait(1500)
        cy.isVisible(adminDashboardPage.getTopPerformersDropdownList().should('have.length', 7))
        adminDashboardPage.getTopPerformersDropdownListBox().children()
            .should('contain', 'All')
            .and('contain', 'NCERT TextBook')
            .and('contain', 'Lesson Plan')
            .and('contain', 'Video')
            .and('contain', 'RISE TextBook')
            .and('contain', 'ELA Assignments')
            .and('contain', 'Lesson Plans')
        cy.clickOnBody()
    })

    it("EL-4946/ES4946-05 Validate Content card consist of following details such as: 1.Content Thumbnail 2.Subject & Description 3.Shared (Count) (Workflow Exclusion) 4.Bookmarked (Count).", function () {
        cy.isVisible(adminDashboardPage.getThumbnailImgContentPerformance())
        cy.isVisible(adminDashboardPage.getSubjectNameContentPerformance())
        cy.isVisible(adminDashboardPage.getDescriptionContentPerformance())
        cy.isVisible(adminDashboardPage.getSharedContentPerformance())
        cy.isVisible(adminDashboardPage.getBookmarkedContentPerformance())
        cy.isVisible(adminDashboardPage.getBookNameTextContentPerformance())
    })

    it("EL-4946/ES4946-06 Validate user is redirected to Content details screen by clicking on respective content.", function () {
        adminDashboardPage.getBookNameTextContentPerformance().eq(0).then(($el) => {
            var bookName = $el.text().trim()
            cy.wrap($el).click()
            cy.wait(2500)
            cy.verifyTextEquals(adminContentLibraryPage.getTextBookNameTitle(), bookName)
            adminContentLibraryPage.getContentLibraryViewDocumentBackIcon().click()
            adminDashboardPage.getContentPerformanceTab().scrollIntoView()
            adminDashboardPage.getContentPerformanceTab().click()
            cy.wait(2500)
        })
    })

    it("EL-4946/ES4946-07 Validate contents are displayed on Most popular contents and Grade filter", function () {
        adminDashboardPage.getBookNameTextContentPerformance().eq(0).then(($el) => {
            var bookName = $el.text().trim()
            cy.wrap($el).click()
            cy.wait(2500)
            adminContentLibraryPage.getTagsContentLibrary().eq(0).then(($el) => {
                var gradeName = $el.text().trim()
                cy.wrap(gradeName).as('gradeName')
            })
            adminContentLibraryPage.getContentLibraryViewDocumentBackIcon().click()
            adminDashboardPage.getContentPerformanceTab().scrollIntoView()
            adminDashboardPage.getContentPerformanceTab().click()
            cy.wait(2500)
            cy.get('@gradeName').then((gradeName) => {
                var gradeName = gradeName.slice(0, gradeName.length - 6)
                adminDashboardPage.getDropdownsInContentPerformance().eq(0).click()
                cy.wait(1000)
                adminDashboardPage.getTopPerformersGradeDynamicDropdownList(gradeName).click()
                cy.wait(2000)
                cy.verifyTextContains(adminDashboardPage.getBookNameTextContentPerformance(), bookName)
            })
        })
    })

    it("EL-4946/ES4946-08 Validate user is able to scroll and view the content card.", function () {
        adminDashboardPage.getScrollBarContentPerformance().scrollTo('right')
        cy.isVisible(adminDashboardPage.getBookNameTextContentPerformance())
    })

})

//Author - Karthik