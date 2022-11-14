const adminDashboardPage = require('../../../support/pageObjects/LMS-2/AdminDashboardPage')
const adminNotificationsPage = require('../../../support/pageObjects/LMS-2/AdminNotificationsPage')

describe("Verify School Admin Notification Underutilized Resources functionalities - Sprint 24(EL-6158)", function () {

    before(function () {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.clearLocalStorageSnapshot();
        cy.visit(Cypress.env('urlMain'))
        cy.fixture('LMS/AdminLoginCredentials').then(function (validAdminLoginData) {
            cy.AdminPostSetup(validAdminLoginData.newUsername, validAdminLoginData.password)
        })
        cy.saveLocalStorage();
    })
    beforeEach(function () {
        cy.restoreLocalStorage();
        cy.viewport(1920, 1080)
    })

    it('ES6158_1 Validate user is able to view underutilized resources under Notification.', function () {
        adminDashboardPage.getNotificationTab().scrollIntoView().click()
        adminNotificationsPage.getViewResourcesLink().click()
        cy.isVisible(adminNotificationsPage.getUnutilizedResources())
    })


    it('ES6158_2  Validate Resources that are not accessed (no clicks) from 30 days of upload are displayed under underutilised resources.', function () {

    })

    it('ES6158_3 Validate static text “These are all the resources you have uploaded in the past but haven’t really used them and it’s taking up unnecessary space in the system.” is present below "Under Ultilised Resources"', function () {
        adminNotificationsPage.getUnutilizedResourcesDescriptionTxt().then(($ele) => {
            if ($ele.text() === 'These are all the resources you have uploaded in the past but haven’t really used them  and it’s taking up unnecessary space in the system.') {
                cy.log('True')
            }
        })
    })

    it('ES6158_4 Validate total number of unused content are displayed in "Underutilised Resources".', function () {
        var cardLength=adminNotificationsPage.getUnutilizedResources()
        var cardLength1 = cardLength.length
        cy.log(cardLength1)
        adminNotificationsPage.getUnutilizedResourcesConut().then(($ele) => {
            var txt = $ele.text().split(' ')
            var Total = txt[0]
            if (cardLength1 === Total) {
                cy.log('true')
            }
        })
    })

    it('ES6158_5 Validate Content filter is present and is selected as "All Content" by default.',function () {
        adminNotificationsPage.getNotificationFilterDropDown().should('have.value','all')
    })

    it('ES6158_6 "Validate each card consist of the -Name of a subject -Chapter and topic -Grade -Type of content -Delete Icon',function () {
        cy.isVisible(adminNotificationsPage.getUnutilizedResourcesSubject())
        cy.isVisible(adminNotificationsPage.getUnutilizedResourcesGrade())
        cy.isVisible(adminNotificationsPage.getUnutilizedResourcesType())
        cy.isVisible(adminNotificationsPage.getUnutilizedResourcesDeleteIcon())
    })

    it('ES6158_7  Validate user is able to view the content as per the type of content.',function () {
        cy.isVisible(adminNotificationsPage.getUnutilizedResourcesViewLink())
    })

    it('ES6158_8  "Validate user on clicking the delete icon a pop is displayed with -Yes Delete button. -Cancel button"',function () {
        adminNotificationsPage.getUnutilizedResourcesDeleteIcon().click({force:true})
        cy.isVisible(adminNotificationsPage.getUnutilizedResourcesYesDeleteBtn())
        cy.isVisible(adminNotificationsPage.getUnutilizedResourcesCancelBtn())
    })

    it('ES6158_9 Validate when user clicks on "Yes,Delete" button the content is deleted and user is redirected to the Underutilised Resource screen',function () {
        cy.isVisible(adminNotificationsPage.getUnutilizedResourcesYesDeleteBtn())
    })

    it('ES6158_10  Validate when user clicks on "Cancel" button, user is redirected to the Underutilised Resource screen',function () {
        adminNotificationsPage.getUnutilizedResourcesCancelBtn().click()
        cy.isVisible(adminNotificationsPage.getUnutilizedResourcesDeleteIcon())
    })
})