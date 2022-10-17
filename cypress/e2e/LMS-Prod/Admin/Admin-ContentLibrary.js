const adminDashboardPage = require("../../support/pageObjects/LMS-2/AdminDashboardPage")
const adminContentLibraryPage = require("../../support/pageObjects/LMS-2/AdminContentLibraryPage")
const Adminlogin = require('../../support/pageObjects/LMS-2/AdminIndexPage')
const dashboardPage = require('../../support/pageObjects/LMS-1/DashboardPage')
const myPersonalLibraryPage = require('../../support/pageObjects/LMS-1/MyPersonalLibraryPage')
const adminHomePage = require('../../support/pageObjects/LMS-2/AdminHomePage')
var randomstring = require("randomstring")
const dayjs = require('dayjs')
import 'cypress-iframe'
/// <reference types="Cypress-iframe" />

describe("Verify  Content Library functionalities", function () {

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
        cy.fixture("LMS/AdminContentLibrary").as("adminContentLibrary")
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




    it('EL-4736/ES4736_1 Validate user clicks on "Content", library page is displayed and the user is able to view the list of Textbook in the PDF format that is uploaded', function () {
        adminHomePage.getDashboardLnk().click({force:true})
        cy.wait(2000)
        adminDashboardPage.getSideMenuContentLibraryImg().click()
        adminContentLibraryPage.getRiseTextBookLink().scrollIntoView().click()
        adminDashboardPage.getSideMenuContentLibraryImg().click()
        adminContentLibraryPage.getTopSchoolLibrary().click()
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
    })

    it('EL-4736/ES4736_8 Validate user is getting refreshed page if clicks on the “cross button” or “Go Back” button.', function () {
        adminContentLibraryPage.getContentLibraryViewDocumentBackIcon().click()
        cy.isVisible(adminContentLibraryPage.getElaAssignmentsTab())
    })


    it('EL-768/ES768-01 To validate user is able to upload personal resources personal resources like ( videos, pdf, doc, interactive contents ) can be saved under my personal content library.',function () {
        cy.visit(Cypress.env('urlProd'))
        cy.fixture("LMS/ValidTeacherLoginCredentials.json").then(function (validAdminLoginData) {
            this.validAdminLoginData = validAdminLoginData;
            cy.TeacherPostSetupLogin(this.validAdminLoginData.prodUsername, this.validAdminLoginData.prodPassword)
        })
        adminDashboardPage.getContentLibraryBtn().click({force:true});
        adminContentLibraryPage.getTopSchoolLibrary().click()
        myPersonalLibraryPage.getMyPersonalLibraryTab().click()
        myPersonalLibraryPage.getUploadResource().scrollIntoView().selectFile('cypress/fixtures/LMS/ErrorReport.xlsx',{force:true})
    })
    it('EL-768/ES768-04  To validate after successful upload file will contain tags like type of content (radio button) and  class, grade, chapter topic from the drop down.',function () {
        myPersonalLibraryPage.getUploadResoureceGradeDropdown().should('be.visible')
        myPersonalLibraryPage.getUploadResoureceSubjectDropdown().should('be.visible')
        myPersonalLibraryPage.getUploadResoureceChapterDropdown().should('be.visible')
        myPersonalLibraryPage.getUploadResoureceTopicsDropdown().should('be.visible')
    })
})