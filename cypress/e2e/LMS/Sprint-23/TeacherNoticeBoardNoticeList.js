const adminDashboardPage = require('../../../support/pageObjects/LMS-2/AdminDashboardPage')
const quickLinksPage = require('../../../support/pageObjects/LMS-2/QuickLinksPage')

describe("Verify admin school functionalities - Sprint 21(EL-8129)", function () {

    before(function () {
        cy.visit(Cypress.env('urlMain'))
        cy.fixture('LMS/AdminLoginCredentials').then(function (validAdminLoginData) {
            cy.AdminPostSetup(validAdminLoginData.newUsername, validAdminLoginData.password)
        })
    })
    beforeEach(function () {
        cy.viewport(1920, 1080)
        cy.fixture("LMS/AdminNotice.json").as("Notice")
    })
    it('ES8129/ES8129_1 Validate Teacher is able to view the list of all notices.', function () {
        adminDashboardPage.getSchoolBtn().click({ force: true })
        quickLinksPage.getAddNoticeBtn().click()
        quickLinksPage.getCreateNewNoticeTitle().type(this.Notice.NoticeTitle)
        quickLinksPage.getCreateNewNoticeTypeDropdown().click()
        quickLinksPage.getCreateNewNoticeTypeGeneralOpt().click()
        quickLinksPage.getCreateNewNoticeDescriptionTextareafield().type(this.Notice.NoticeDescription)
        quickLinksPage.getCreateNewNoticePublishRightNowRedioBtn().check()
        quickLinksPage.getCreateNewNoticeEntireSchoolRedioBtn().check()
        quickLinksPage.getCreateNewNoticeSendBtn().click()
        quickLinksPage.getSchoolNoticeBoardTab().click()
        quickLinksPage.getNoticeList().should('be.visible')
    })
    it('ES8129/ES8129_2 Validate Title of the notice is displayed.', function () {
        quickLinksPage.getNoticeListTitle().should('be.visible')
    })
    it('ES8129/ES8129_3 Validate Important / General/ Other Tags(as per the input by the user).', function () {
        quickLinksPage.getNoticeListTags().should('be.visible')
    })
    it('ES8129/ES8129_4 Validate If Notice is shared with entire school ,"Public" with icon is displayed.', function () {
        quickLinksPage.getNoticeListPublicWithIcon().should('be.visible')
        quickLinksPage.getEditBtn().click()
        quickLinksPage.getCreateNewNoticeSpecificMembersRedioBtn().check()
        quickLinksPage.getCreateNewNoticeAddMembersBtn().click()
        quickLinksPage.getCreateNewNoticeTeacherTab().click()
        cy.wait(2000)
        quickLinksPage.getCreateNewNoticeAddBtn().click()
        quickLinksPage.getCreateNewNoticeSaveBtn().click()
        quickLinksPage.getCreateNewNoticeSaveAndSendBtn().click()
    })
    it('ES8129/ES8129_5 Validate If Notice is shared with private members, Private (counts) with icon is displayed. ', function () {
        quickLinksPage.getPrivateNoticeBoardTab().click()
        quickLinksPage.getNoticeListPrivateWithIcon().should('be.visible')
    })
    it('ES8129/ES8129_6 Validate user on clicking “Private (counts) with the icon” the user is able to view all the members.', function () {
        quickLinksPage.getPrivateNoticeList().should('be.visible')
        quickLinksPage.getNoticeListTitle().each(($e1, index, $list) => {
            const txt = $e1.text()
            if (txt.includes("Test automation")) {
                quickLinksPage.getDeleteBtn().click({ force: true })
                cy.wait(2000)
                quickLinksPage.getCreateNewNoticeDeletePopupDeleteNoticeBtn().click()
                cy.wait(4000)
            }
        })
        quickLinksPage.getSchoolNoticeBoardTab().click()
    })
})

//author - Manohara