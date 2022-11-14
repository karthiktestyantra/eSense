const adminDashboardPage = require('../../../support/pageObjects/LMS-2/AdminDashboardPage')
const quickLinksPage = require('../../../support/pageObjects/LMS-2/QuickLinksPage')
const adminQuickLinksPage = require("../../../support/pageObjects/LMS-2/AdminQuickLinksPage")

describe("Verify Notification NoticeBoard functionalities - Sprint 24(EL-8406,EL-8017)", function () {

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
        cy.wait(4000)
        adminDashboardPage.getSchoolBtn().click({force:true})
    })
    it('ES8017_1  Validate the drop options in Zero period Occurance “Before all periods” is changed to “After all periods” .',function () {
        
        quickLinksPage.getTimeTableManagementTab().click()
        adminQuickLinksPage.getTimetableGenerateBtn().click()
        adminQuickLinksPage.getGeneratedTimetableDaysDropdown().eq(0).click()
        adminQuickLinksPage.getGeneratedTimetableDropdownValue().contains('6').click()
        adminQuickLinksPage.getGeneratedTimetablePeriodsDropdown().eq(1).click()
        adminQuickLinksPage.getGeneratedTimetableDropdownValue().contains('5').click()
        cy.wait(2000)
        adminQuickLinksPage.getViewTimeTableStartTime().eq(0).click({ force: true })
        adminQuickLinksPage.getViewTimeTableAMBtn().contains("AM").click({ force: true })
        adminQuickLinksPage.getViewTimeTableRightArrow().click()
        cy.wait(2000)
        adminQuickLinksPage.getViewTimeTableStartTime().eq(0).click({ force: true })
        cy.wait(1000)
        adminQuickLinksPage.getViewTimeTableEndTime().eq(1).click({ force: true })
        adminQuickLinksPage.getViewTimeTablePMBtn().contains('PM').click({ force: true })
        adminQuickLinksPage.getViewTimeTableRightArrow().click()
        adminQuickLinksPage.getViewTimeTablePMBtn().contains('PM').click({ force: true })
        cy.wait(2000)
        adminQuickLinksPage.getViewTimeTableEndTime().eq(1).click({ force: true })
        cy.wait(1000)
        adminQuickLinksPage.getGeneratedTimetableRoomDropdown().eq(3).click()
        adminQuickLinksPage.getGeneratedTimetableDropdownValue().first().click()
        adminQuickLinksPage.getGeneratedTimetablePeriodTimeDropdown().eq(2).click()
        adminQuickLinksPage.getGeneratedTimetableDropdownValue().contains('25 Minutes').click()
        for (var i = 0; i < 6; i++) {
            adminQuickLinksPage.getGeneratedTimetableZeroPeriodDays().eq(i).click()
        }
        adminQuickLinksPage.getGeneratedTimetableZeroLengthDropdown().eq(4).click()
        adminQuickLinksPage.getGeneratedTimetableDropdownValue().contains('20 Minutes').click()
        adminQuickLinksPage.getGeneratedTimetableZeroOccationDropdown().eq(5).click()
        adminQuickLinksPage.getGeneratedTimetableDropdownValue().contains('Before 1st Period').click()
        adminQuickLinksPage.getGeneratedTimetableBreakNmaeTxtField().type('lunch')
        adminQuickLinksPage.getGeneratedTimetableBreakLengthDropdown().eq(6).click()
        adminQuickLinksPage.getGeneratedTimetableDropdownValue().contains('50 Minutes').click()
        adminQuickLinksPage.getGeneratedTimetableBreakOccationDropdown().eq(7).click()
        adminQuickLinksPage.getGeneratedTimetableDropdownValue().first().click()
        cy.wait(5000)
    })

    it('ES8017_2 Validate the value in the Zero Period length dropdown is ranging up to 60 minutes. ',function () {
        adminQuickLinksPage.getGeneratedTimetableZeroLengthDropdown().eq(4).click()
        cy.isVisible(adminQuickLinksPage.get60MinOpt().scrollIntoView())
        adminQuickLinksPage.getGeneratedTimetableDropdownValue().contains('20 Minutes').click()
    })

    it('ES8017_3 Validate the value in the "Periods/Day" dropdown is in the range of 1 to 12.',function () {
        adminQuickLinksPage.getGeneratedTimetablePeriodsDropdown().eq(1).click()
        cy.isVisible(adminQuickLinksPage.get12PeriodsOpt().scrollIntoView())
        adminQuickLinksPage.getGeneratedTimetableDropdownValue().contains('5').click()
    })
})