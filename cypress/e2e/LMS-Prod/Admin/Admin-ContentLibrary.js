const adminDashboardPage = require("../../support/pageObjects/LMS-2/AdminDashboardPage")
const adminContentLibraryPage = require("../../support/pageObjects/LMS-2/AdminContentLibraryPage")
const Adminlogin = require('../../support/pageObjects/LMS-2/AdminIndexPage')
const dashboardPage = require('../../support/pageObjects/LMS-1/DashboardPage')
const myPersonalLibraryPage = require('../../support/pageObjects/LMS-1/MyPersonalLibraryPage')
var randomstring = require("randomstring")
const dayjs = require('dayjs')

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

    it('EL-756/ES756-01  To validate user is able to  view text book under Topschool library.', function () {
        cy.wait(1000)
        cy.get('.step-container > :nth-child(3)').click()
        cy.wait(1000)
        cy.get('a.continue-btn').contains("Continue").click()
        cy.wait(1000)
        cy.get('button.continue-btn').contains("Continue").click()
        cy.wait(1000)
        adminDashboardPage.getSideMenuContentLibraryImg().click()
        dashboardPage.getContentLibrary().click();
        adminContentLibraryPage.getRiseTextBookLink().scrollIntoView().click()
        adminContentLibraryPage.getViewRiseTextBookNameInList().should('be.visible')
    })
    it('EL-756/ES756-05 To validate user can add the content to the personal library by clicking on action button.',function () {
        adminContentLibraryPage.getTopSchoolLibrary().click()
        adminContentLibraryPage.getRiseTextBookLink().scrollIntoView().click()
        adminContentLibraryPage.getViewRiseTextBookNameInList().each(($el) => {
            var bookName = $el.text().trim()
            if (bookName==="I Look in the Mirror") {
                cy.log(bookName)
                cy.wait(4000)
                myPersonalLibraryPage.getLookintheMirrorBookMarkIcon().click()
                return false
            }
        })
        cy.wait(4000)
        myPersonalLibraryPage.getMyPersonalLibraryTab().click()
        cy.wait(2000)
        myPersonalLibraryPage.getBookMarkedButton().click()
        cy.wait(3000)
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

    it('EL-771/ES771-01 To validate user is able to create timelines under my personal content library.',function () {
        adminContentLibraryPage.getTopSchoolLibrary().click()
        myPersonalLibraryPage.getMyPersonalLibraryTab().click()
        myPersonalLibraryPage.getTimeLineBtn().click()
        cy.wait(1000)
        myPersonalLibraryPage.getTimeLineCreateNewBtn().should('be.enabled').click()
        cy.wait(1000)
    })

    it('EL-771/ES771-02 To validate user is able to add new interactive timelines  by clicking on ceate new button.',function () {
        myPersonalLibraryPage.getCreateTimeLineGreadDropDown().click()
        myPersonalLibraryPage.getCreateTimeLineGreadDropDownGread3Opt().click()
        myPersonalLibraryPage.getCreateTimeLineSubjectDropDown().click()
        myPersonalLibraryPage.getCreateTimeLineSubjectDropDownEnglishOpt().click()
        myPersonalLibraryPage.getCreateTimeLineDescriptionTextAera().type(randomstring.generate(10))
        myPersonalLibraryPage.getCreateTimeLineCreateNewBtn().click()
        myPersonalLibraryPage.getCreateNewTimelineCard().should('be.visible')
        cy.go('back')
        myPersonalLibraryPage.getTimeLinesList().each(($el) => {
            var bookName = $el.text()
            cy.wrap(bookName).as('bookName')
            if (bookName=="Automation") {
                myPersonalLibraryPage.getTimeLineThreeDotIcon().click()
                myPersonalLibraryPage.getTimeLineDeleteBtn().should('be.visible')
            }
        })
    })
    it('EL-771/ES771-04 To validate user is able to edit the file after clicking on three dots present in the uploaded card.',function () {
        myPersonalLibraryPage.getTimeLineEditBtn().should('be.visible')
        cy.get('body').click()
    })
    it('EL-757/ES757-01  To validate user is able to  view and paly the video  under esense library .',function () {
        adminContentLibraryPage.getTopSchoolLibrary().click()
        myPersonalLibraryPage.getMyPersonalLibraryTab().click()
        myPersonalLibraryPage.getVideoBtn().click()
        cy.wait(1000)
        myPersonalLibraryPage.getViewVideoBtn().scrollIntoView().click()
    })
    it('EL-757/ES757-02 To validate  user is able to play the video under video conatiner page.',function () {
        myPersonalLibraryPage.getVideoFrame().should('be.visible')
    })
    it('EL-757/ES757-03  To validate user is navigated to previous page after clicking on back button.',function () {
        myPersonalLibraryPage.getVideoBackBtn().scrollIntoView().click()
        myPersonalLibraryPage.getViewVideoBtn().should('be.visible')
    })
})