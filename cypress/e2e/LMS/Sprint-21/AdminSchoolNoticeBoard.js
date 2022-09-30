const adminDashboardPage = require('../../../support/pageObjects/LMS-2/AdminDashboardPage')
const quickLinksPage = require('../../../support/pageObjects/LMS-2/QuickLinksPage')

describe("Verify admin school functionalities - Sprint 21(EL-6151,EL-6152,EL-6044)", function () {

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
    it('EL-6151/ES6151_1 /Validate user is able to view the "Edit" icon in the “Action” column in the School Notice Board/ Private Notice Board screen.', function () {
        adminDashboardPage.getSchoolBtn().click({ force: true })
        for (let i = 0; i <= 2; i++) {
            quickLinksPage.getAddNoticeBtn().click()
            quickLinksPage.getCreateNewNoticeTitle().type(this.Notice.NoticeTitle)
            quickLinksPage.getCreateNewNoticeTypeDropdown().click()
            quickLinksPage.getCreateNewNoticeTypeGeneralOpt().click()
            quickLinksPage.getCreateNewNoticeDescriptionTextareafield().type(this.Notice.NoticeDescription)
            quickLinksPage.getCreateNewNoticePublishRightNowRedioBtn().check()
            quickLinksPage.getCreateNewNoticeEntireSchoolRedioBtn().check()
            quickLinksPage.getCreateNewNoticeSendBtn().click()
            quickLinksPage.getEditBtn().should('be.visible')
        }
    })
    it('EL-6151/ES6151_2 Validate user click on "Edit" option "Save & Send" button, "Cancel" button and "X" icon is displayed', function () {
        cy.wait(2000)
        quickLinksPage.getEditBtn().click()
        cy.wait(2000)
        quickLinksPage.getCreateNewNoticeSaveAndSendBtn().scrollIntoView().should('be.visible')
        quickLinksPage.getCreateNewNoticeCancelBtn().scrollIntoView().should('be.visible')
        quickLinksPage.getCreateNewNoticeXBtn().should('be.visible')
    })
    it('EL-6151/ES6151_3  Validate "Notice Title" attribute with text field, "Notice Type" attribute with Drop Down Arrow and "Description" attribute is present with text box', function () {
        quickLinksPage.getCreateNewNoticeTitle().scrollIntoView().should('be.visible')
        quickLinksPage.getCreateNewNoticeTypeDropdown().should('be.visible')
        quickLinksPage.getCreateNewNoticeDescriptionTextareafield().should('be.visible')
    })
    it('EL-6151/ES6151_4 Validate "Description" text box is accepting Alphabet,Numbers and Special Characters', function () {
        quickLinksPage.getCreateNewNoticeDescriptionTextareafield().scrollIntoView().clear().type(this.Notice.Alphanumaric)
    })
    it('EL-6151/ES6151_5 Validate "Notice Title" text field is accepting Alphabet,Numbers and Special Characters', function () {
        quickLinksPage.getCreateNewNoticeTitle().scrollIntoView().clear().type(this.Notice.Alphanumaric)
    })
    it('EL-6151/ES6151_6 Validate when clicked on drop down next to "Notice Type" is displaying Tags', function () {
        quickLinksPage.getCreateNewNoticeTypeDropdown().click()
        quickLinksPage.getCreateNewNoticeTypeGeneralOpt().should('be.visible')
        quickLinksPage.getCreateNewNoticeTypeImportantOpt().should('be.visible')
        quickLinksPage.getCreateNewNoticeTypeOthersOpt().should('be.visible')
        quickLinksPage.getCreateNewNoticeTypeGeneralOpt().click()
    })
    it('EL-6151/ES6151_7 Validate Radio button is present for Attribute "Publish Right now" and "Publish later on"', function () {
        cy.wait(2000)
        quickLinksPage.getCreateNewNoticePublishRightNowRedioBtn().should('be.enabled')
        quickLinksPage.getCreateNewNoticePublishLaterOnRedioBtn().should('be.enabled')
    })
    it('EL-6151/ES6151_8 Validate user is not able to select two radio buttons at a time', function () {
        quickLinksPage.getCreateNewNoticePublishRightNowRedioBtn().check().should('be.checked')
        quickLinksPage.getCreateNewNoticePublishLaterOnRedioBtn().should('not.be.checked')
    })
    it('EL-6151/ES6151_9 Validate when the Radio button for "Publish later on" attribute is selected calendar icon is displayed', function () {
        quickLinksPage.getCreateNewNoticePublishLaterOnRedioBtn().check()
        cy.wait(2000)
        quickLinksPage.getCreateNewNoticeCalenderIcon().should('be.visible')
    })
    it('EL-6151/ES6151_10 Validate the Radio button for "Publish Right now" attribute is selected no calendar icon is displayed', function () {
        quickLinksPage.getCreateNewNoticePublishRightNowRedioBtn().check()
        quickLinksPage.getCreateNewNoticeCalenderIcon().should('not.be.enabled')
    })
    it('EL-6151/ES6151_11 Validate Radio button is present for Attribute "Entire School " and "Specific Members"', function () {
        quickLinksPage.getCreateNewNoticeEntireSchoolRedioBtn().should('be.enabled')
        quickLinksPage.getCreateNewNoticeSpecificMembersRedioBtn().should('be.enabled')
    })
    it('EL-6151/ES6151_12 Validate when the Radio button for "Specific Members" attribute is selected "+Add Member" button is enabled.', function () {
        quickLinksPage.getCreateNewNoticeSpecificMembersRedioBtn().check()
        quickLinksPage.getCreateNewNoticeAddMembersBtn().should('be.enabled')
    })
    it('EL-6151/ES6151_13 Validate user click on "+Add Member" button, list of members are displayed', function () {
        quickLinksPage.getCreateNewNoticeAddMembersBtn().click()
        quickLinksPage.getCreateNewNoticeTeacherTab().click()
        quickLinksPage.getCreateNewNoticemembersList().should('be.visible')
        quickLinksPage.getCreateNewNoticeSaveBtn().click()
    })
    it('EL-6151/ES6151_14 Validate the Radio button for "Entire School" attribute is selected "+Add Member" button is disabled.', function () {
        quickLinksPage.getCreateNewNoticeEntireSchoolRedioBtn().check()
        quickLinksPage.getCreateNewNoticeAddMembersBtn().should('not.be.enabled')
    })
    it('EL-6151/ES6151_15 Validate the Radio button for "Entire School" attribute is selected and when user click on "Save & Send", all school members of the notice are notified of the update', function () {
        quickLinksPage.getCreateNewNoticeSaveAndSendBtn().click()
        quickLinksPage.getSchoolNoticeBoardTab().click()
    })
    it('EL-6151/ES6151_17 Validate user click on "Save & Send", the notice details is displayed on the School notice board/ Private Notice Board for the user/ attendees.', function () {
        quickLinksPage.getEditBtn().click()
        quickLinksPage.getCreateNewNoticePublishLaterOnRedioBtn().check()
        quickLinksPage.getCreateNewNoticeCalenderIcon().click()
        quickLinksPage.getCreateNewNoticeRightArrowBtn().click()
        quickLinksPage.getCreateNewNoticeDateBtn().click()
        quickLinksPage.getCreateNewNoticeSpecificMembersRedioBtn().check()
        quickLinksPage.getCreateNewNoticeAddMembersBtn().click()
        quickLinksPage.getCreateNewNoticeTeacherTab().click()
        quickLinksPage.getCreateNewNoticeAddBtn().click()
        quickLinksPage.getCreateNewNoticeSaveBtn().click()
        quickLinksPage.getCreateNewNoticeSaveAndSendBtn().click()
    })
    it('EL-6151/ES6151_18 Validate user click on "Save & Send", a successful pop-up is displayed saying “Notice published successfully” and, the user is redirected to the School notice board.', function () {
        cy.contains(this.Notice.ConformetionMessage).should('be.visible')
        cy.wait(2000)
    })
    it('EL-6151/ES6151_19 Validate user clicks on "Cancel" button no changes are saved and the user is re-directed to the School notice board.', function () {
        quickLinksPage.getEditBtn().click()
        cy.wait(2000)
        quickLinksPage.getCreateNewNoticeCancelBtn().scrollIntoView().click()
        quickLinksPage.getSchoolNoticeBoardTab().should('be.visible')
    })
    it('EL-6151/ES6151_20 Validate user clicks on X, user is re-directed to the School Notice Board..', function () {
        cy.wait(2000)
        quickLinksPage.getEditBtn().click()
        cy.wait(2000)
        quickLinksPage.getCreateNewNoticeXBtn().click()
        quickLinksPage.getSchoolNoticeBoardTab().should('be.visible')
    })
    it('EL-6152/ES6152_1 Validate user is able to view the "Delete" icon in the “Action” column in the School Notice Board/ Private Notice Board screen.', function () {
        quickLinksPage.getDeleteBtn().should('be.visible')
    })
    it('EL-6152/ES6152_3 Validate user clicks on delete, a confirmation pop-up is displayed stating “Are you sure you want to delete the notice?”', function () {
        quickLinksPage.getDeleteBtn().click()
        cy.contains(this.Notice.DeleteMessage).should('be.visible')
        quickLinksPage.getCreateNewNoticeDeletePopupDeleteNoticeBtn().click()
    })
    it('EL-6152/ES6152_5 Validate the user clicks on "Cancel" button user is re-directed to the School Notice Board/ Private Notice Board screen.', function () {
        quickLinksPage.getAddNoticeBtn().click()
        quickLinksPage.getCreateNewNoticeTitle().type(this.Notice.NoticeTitle)
        quickLinksPage.getCreateNewNoticeTypeDropdown().click()
        quickLinksPage.getCreateNewNoticeTypeGeneralOpt().click()
        quickLinksPage.getCreateNewNoticeDescriptionTextareafield().type(this.Notice.NoticeDescription)
        quickLinksPage.getCreateNewNoticePublishRightNowRedioBtn().check()
        quickLinksPage.getCreateNewNoticeEntireSchoolRedioBtn().check()
        quickLinksPage.getCreateNewNoticeSendBtn().click()
        quickLinksPage.getSchoolNoticeBoardTab().click()
        quickLinksPage.getDeleteBtn().click()
        quickLinksPage.getCreateNewNoticeDeletePopupCancelBtn().click()
        quickLinksPage.getSchoolNoticeBoardTab().should('be.visible')
    })
    it('EL-6152/ES6152_6 Validate the user clicks on "X" icon user is re-directed to the School Notice Board/ Private Notice Board screen.', function () {
        quickLinksPage.getAddNoticeBtn().click()
        quickLinksPage.getCreateNewNoticeTitle().type(this.Notice.NoticeTitle)
        quickLinksPage.getCreateNewNoticeTypeDropdown().click()
        quickLinksPage.getCreateNewNoticeTypeGeneralOpt().click()
        quickLinksPage.getCreateNewNoticeDescriptionTextareafield().type(this.Notice.NoticeDescription)
        quickLinksPage.getCreateNewNoticePublishRightNowRedioBtn().check()
        quickLinksPage.getCreateNewNoticeEntireSchoolRedioBtn().check()
        quickLinksPage.getCreateNewNoticeSendBtn().click()
        quickLinksPage.getSchoolNoticeBoardTab().click()
        quickLinksPage.getDeleteBtn().click()
        quickLinksPage.getCreateNewNoticeDeletePopupXBtn().click()
        quickLinksPage.getSchoolNoticeBoardTab().should('be.visible')
    })
    it('EL-6044/ES6044_1 Validate user is able to view the list of notices below the Quick Links section on the School screen', function () {
        quickLinksPage.getSchoolNoticeBoardTab().click()
        quickLinksPage.getNoticeList().should('be.visible')
    })
    it('EL-6044/ES6044_2 Validate Month and Date is displayed on the notice card.', function () {
        quickLinksPage.getNoticeListDate().should('be.visible')
        quickLinksPage.getNoticeListMonth().should('be.visible')
    })
    it('EL-6044/ES6044_3 Validate Title of the notice is displayed on the notice card', function () {
        quickLinksPage.getNoticeListTitle().should('be.visible')
    })
    it('EL-6044/ES6044_4 Validate tags are displayed on the notice card as Important / General/ Other Tags(as per the input by the user)', function () {
        quickLinksPage.getNoticeListTags().should('be.visible')
    })
    it('EL-6044/ES6044_5 Validate Public with icon is displayed for School Notice Board', function () {
        quickLinksPage.getNoticeListPublicWithIcon().should('be.visible')
    })
    it('EL-6044/ES6044_7 Validate Private (counts) with icon is displayed for the Private Notice Board', function () {
        quickLinksPage.getPrivateNoticeBoardTab().click()
        quickLinksPage.getNoticeListPrivateWithIcon().should('be.visible')
    })
    it('EL-6044/ES6044_8 Validate On clicking “Private (counts)" icon the user is able to view all the members.', function () {
        quickLinksPage.getNoticeListPrivateWithIcon().eq(0).click()
        quickLinksPage.getNoticeListPrivateMembers().should('be.visible')
        cy.get('body').click()
    })
    it('EL-6044/ES6044_12 Validate Action button (Edit/ Delete) is present in the each card', function () {
        quickLinksPage.getSchoolNoticeBoardTab().click()
        quickLinksPage.getDeleteBtn().should('be.visible')
        quickLinksPage.getEditBtn().should('be.visible')
    })
    it('EL-6044/ES6044_13 Validate user clicks on "Sort by Dropdown arrow" (All/ General / Important) is displaying', function () {
        quickLinksPage.getSortDropdown().click()
        quickLinksPage.getSortDropdownALLOpt().should('be.visible')
        quickLinksPage.getSortDropdownGeneralOpt().should('be.visible')
        quickLinksPage.getSortDropdownImportantOpt().should('be.visible')
        cy.get('body').click()
    })
    it('EL-6044/ES6044_14 Validate Search textbox is present with a placeholder "Search Notice"', function () {
        quickLinksPage.getSearchBox().should('be.visible')
        quickLinksPage.getCalenderIcon().should('be.visible')
    })
    it('EL-6044/ES6044_17 Validate only 3 Notice Cards are displayed per page(Pagination should be there).', function () {
        quickLinksPage.getNoticeList().should('have.length', 3)
        quickLinksPage.getEditBtn().click()
        quickLinksPage.getCreateNewNoticeTitle().clear().type(this.Notice.NoticeTitle)
        quickLinksPage.getCreateNewNoticeSaveAndSendBtn().click()
        cy.wait(2000)

        quickLinksPage.getNoticeListTitle().each(($e1, index, $list) => {
            const txt = $e1.text()
            if (txt.includes("Test automation")) {
                quickLinksPage.getDeleteBtn().click({ force: true })
                cy.wait(2000)
                quickLinksPage.getCreateNewNoticeDeletePopupDeleteNoticeBtn().click()
                cy.wait(4000)
            }
        })
        cy.wait(4000)
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
    it('EL-6044/ES6044_10 Validate "read more" option is displayed when the description is more than 100 characters', function () {
        quickLinksPage.getAddNoticeBtn().click()
        quickLinksPage.getCreateNewNoticeTitle().type(this.Notice.NoticeTitle)
        quickLinksPage.getCreateNewNoticeTypeDropdown().click()
        quickLinksPage.getCreateNewNoticeTypeGeneralOpt().click()
        quickLinksPage.getCreateNewNoticeDescriptionTextareafield().type(this.Notice.NoticeDescriptionMoreThen100Charecters)
        quickLinksPage.getCreateNewNoticePublishRightNowRedioBtn().check()
        quickLinksPage.getCreateNewNoticeEntireSchoolRedioBtn().check()
        quickLinksPage.getCreateNewNoticeSendBtn().click()
        quickLinksPage.getSchoolNoticeBoardTab()
        quickLinksPage.getReadMoreLink().should('be.visible')
    })
    it('EL-6044/ES6044_11 Validate when user clicks on "read more", he is able to read the full description on the same card.', function () {
        quickLinksPage.getReadMoreLink().click()
        quickLinksPage.getNoticeDescription().should('be.visible')
        quickLinksPage.getSchoolNoticeBoardTab().click()
        quickLinksPage.getNoticeListTitle().each(($e1, index, $list) => {
            const txt = $e1.text()
            if (txt.includes("Test automation")) {
                quickLinksPage.getDeleteBtn().click({ force: true })
                cy.wait(2000)
                quickLinksPage.getCreateNewNoticeDeletePopupDeleteNoticeBtn().click()
                cy.wait(4000)
            }
        })
        quickLinksPage.getPrivateNoticeBoardTab().click()
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
    it('EL-6044/ES6044_9 Validate Notices created for the Specific members is displayed in Private Notice board', function () {
        quickLinksPage.getAddNoticeBtn().click()
        quickLinksPage.getCreateNewNoticeTitle().type(this.Notice.NoticeTitle)
        quickLinksPage.getCreateNewNoticeTypeDropdown().click()
        quickLinksPage.getCreateNewNoticeTypeGeneralOpt().click()
        quickLinksPage.getCreateNewNoticeDescriptionTextareafield().type(this.Notice.NoticeDescription)
        quickLinksPage.getCreateNewNoticePublishRightNowRedioBtn().check()
        quickLinksPage.getCreateNewNoticeSpecificMembersRedioBtn().check()
        quickLinksPage.getCreateNewNoticeAddMembersBtn().click()
        quickLinksPage.getCreateNewNoticeTeacherTab().click()
        cy.wait(1000)
        var txt= []
        cy.get(".noticeStdName").eq(0).then(function($elem) {txt.push($elem.text())})
        quickLinksPage.getCreateNewNoticeAddBtn().click()
        quickLinksPage.getCreateNewNoticeSaveBtn().click()
        quickLinksPage.getCreateNewNoticeSendBtn().click()
        quickLinksPage.getPrivateNoticeBoardTab().click()
        quickLinksPage.getNoticeListPublicWithIcon().click()
        cy.get('.top-cls').then(function($elem) {txt.push($elem.text())})
        txt[0]==txt[1]
        cy.get('body').click()
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
    it('EL-6044/ES6044_16 Validate user select the particular date, user is able to view notices on that particular date', function () {
        adminDashboardPage.getSchoolBtn().click({ force: true })
        quickLinksPage.getSchoolNoticeBoardTab().click()
        quickLinksPage.getAddNoticeBtn().click()
        quickLinksPage.getCreateNewNoticeTitle().type(this.Notice.NoticeTitle)
        quickLinksPage.getCreateNewNoticeTypeDropdown().click()
        quickLinksPage.getCreateNewNoticeTypeGeneralOpt().click()
        quickLinksPage.getCreateNewNoticeDescriptionTextareafield().type(this.Notice.NoticeDescription)
        quickLinksPage.getCreateNewNoticePublishRightNowRedioBtn().check()
        quickLinksPage.getCreateNewNoticeEntireSchoolRedioBtn().check()
        quickLinksPage.getCreateNewNoticeSendBtn().click()
        quickLinksPage.getCalenderIcon().click()
        quickLinksPage.getCalenderIconDate().contains('20').click()
    })
})