const adminDashboardPage = require('../../../support/pageObjects/LMS-2/AdminDashboardPage')
const quickLinksPage = require('../../../support/pageObjects/LMS-2/QuickLinksPage')

describe("Verify Notification NoticeBoard functionalities - Sprint 24(EL-8406)", function () {

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

    it('EL-8406/ES8406-01 To validate user is able to create notice for publish now.', function () {
        adminDashboardPage.getDashboardImg().click()
        adminDashboardPage.getGoToMySchoolButton().click()
        quickLinksPage.getAddNoticeBtn().click()
        quickLinksPage.getCreateNewNoticeTitle().type(this.Notice.NoticeTitle)
        quickLinksPage.getCreateNewNoticeTypeDropdown().click()
        quickLinksPage.getCreateNewNoticeTypeGeneralOpt().click()
        quickLinksPage.getCreateNewNoticeDescriptionTextareafield().type(this.Notice.NoticeDescription)
        quickLinksPage.getCreateNewNoticePublishRightNowRedioBtn().check()
        quickLinksPage.getCreateNewNoticeEntireSchoolRedioBtn().check()
        quickLinksPage.getCreateNewNoticeSendBtn().click()
    })
    it('EL-8406/ES8406-04 To validate user is able to update or delete the notice.',function () {
        quickLinksPage.getEditBtn().click()
        cy.wait(2000)
        quickLinksPage.getCreateNewNoticeSaveAndSendBtn().should('be.visible').click()
        quickLinksPage.getNoticeListTitle().each(($e1, index, $list) => {
            const txt = $e1.text()
            if (txt.includes("Test automation")) {
                quickLinksPage.getDeleteBtn().click({ force: true })
                cy.wait(2000)
                quickLinksPage.getCreateNewNoticeDeletePopupDeleteNoticeBtn().click()
                cy.wait(4000)
            }
        })
    })
    it('EL-8406/ES8406-02  To validate user is able to create notice for publish later',function () {
        quickLinksPage.getAddNoticeBtn().click()
        quickLinksPage.getCreateNewNoticeTitle().type(this.Notice.NoticeTitle)
        quickLinksPage.getCreateNewNoticeTypeDropdown().click()
        quickLinksPage.getCreateNewNoticeTypeGeneralOpt().click()
        quickLinksPage.getCreateNewNoticeDescriptionTextareafield().type(this.Notice.NoticeDescription)
        quickLinksPage.getCreateNewNoticePublishLaterOnRedioBtn().check()
        quickLinksPage.getCreateNewNoticeCalenderIcon().click()
        quickLinksPage.getCreateNewNoticeRightArrowBtn().click()
        quickLinksPage.getCreateNewNoticeDateBtn().click()
        quickLinksPage.getCreateNewNoticeSpecificMembersRedioBtn().check()
        quickLinksPage.getCreateNewNoticeAddMembersBtn().click()
        quickLinksPage.getCreateNewNoticeTeacherTab().click()
        quickLinksPage.getCreateNewNoticeAddBtn().click()
        quickLinksPage.getCreateNewNoticeSaveBtn().click()
        quickLinksPage.getCreateNewNoticeSendBtn().click()
    })
})