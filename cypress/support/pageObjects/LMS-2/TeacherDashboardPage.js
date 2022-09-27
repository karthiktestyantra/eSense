class TeacherDashboardPage {

    getAttendencePendingTxt() {
        return cy.get('div.Dashboard_cardContainer__270hq p')
    }

    getPendingActionCard() {
        return cy.get('div.Dashboard_tchDshPendActItem__2aKVR')
    }

    getAttendenceCardSubjectName() {
        return cy.get('div.Dashboard_tchDshPendActText__2_6js h6.MuiTypography-root')
    }

    getPendingActionCardClassAndSubject() {
        return cy.get('div.Dashboard_tchDshPendActText__2_6js h6')
    }

    getHomeworkCardSubjectName() {
        return cy.get('div.Dashboard_tchDshPendActText__2_6js h6')
    }

    getAssifnHomeworkPopupTitle() {
        return cy.get('h1.add_homework_class-tittle')
    }

    getAttendenceCardSubjectDate() {
        return cy.get('.Dashboard_tchDshPendActCnt__3s7IL > .Dashboard_tchDshPendActText__2_6js > .MuiTypography-body1')
    }

    getHomeworkTitleTxtField() {
        return cy.get('input[id="mui-3"]')
    }

    getHomeworkDescriptionTxtField() {
        return cy.get('textarea[id="mui-4"]')
    }

    getHomeworkClockBtn() {
        return cy.get('input[placeholder="h:mm (a|p)m"]')
    }

    getHomeworkClockRightArrowBtn() {
        return cy.get('[data-testid="ArrowRightIcon"]')
    }

    getHomeworkClockHourBtn() {
        return cy.get('div span.css-h7tmkn:nth-child(2)')
    }

    getHomeworkClockMinuteBtn() {
        return cy.get('div[role="listbox"] span').contains("20")
    }

    getMalestoneProgressTitleHeader() {
        return cy.get('div.Dashboard_progressBar__3DZ5H h1')
    }

    getHomeworkApproxTimeDropdown() {
        return cy.get('#demo-simple-select')
    }

    getMarkattendeceSubmitBtn() {
        return cy.get('button.attendSubBtn').contains('submit')
    }

    getMarkattendeceSubmitPopupMesg() {
        return cy.get('h1.mainRcdTitle')
    }

    getMarkattendeceSubmitPopupStudentCountDetails() {
        return cy.get('div[data-test-id="CircularProgressbarWithChildren__children"]')
    }

    getMarkattendeceSubmitPopupSubmitBtn() {
        return cy.get('button.prime_btn').contains('Yes,Submit')
    }

    getMarkattendeceGoBackBtn() {
        return cy.get('p.back').eq(1).contains('Go Back')
    }

    getMarkattendeceSubmitPopupCancelBtn() {
        return cy.get('.mainRcdAction > .MuiButton-outlined')
    }

    getMarkattendecePageTitle() {
        return cy.get('p.attendTableTit')
    }

    getMarkattendeceCancelBtn() {
        return cy.get('button.attendCancellBtn')
    }

    
    getMarkAsAbsentRadioBtn() {
        return cy.get('[data-testid="absent"]')
    }

    getMarkpresentRadioBtn() {
        return cy.get('[data-testid="present"]')
    }

    
    getMarkattendeceUploadCsvBtn() {
        return cy.get('button.attendUplCSVBtn')
    }

    getMarkattendeceUploadCsvPopupCloseBtn() {
        return cy.get('svg[data-testid="CloseIcon"]')
    }

    getSideMenuTeacherDashboardImg() {
        return cy.get('.active > .side-nav-dashboard > .menu-txt')
    }

    getMarkattendeceStudentList() {
        return cy.get('p.resources_student_name')
    }

    getMarkattendeceUploadSampleFile() {
        return cy.get('button.BulkUpload_downloadSampleTxt__1UJTp')
    }

    getAssignHomeworkPopupSaveBtn() {
        return cy.get('.MuiButton-contained')
    }

    getMarkClassAttendenceBtn() {
        return cy.get('button.pendActBtn')
    }


    getAttendenceCardMarkAttendanceBtn() {
        return cy.get('div.Dashboard_tchDshPendActFlexSect__E8rdD button.MuiButton-root')
    }

    
    getMarkAttendanceBtn() {
        return cy.get('button.prime_btn')
    }

    getBulkuploadImportBtn() {
        return cy.get('button.BulkUpload_bulkImport__spFpc')
    }

    getProvideFeedbackBtn() {
        return cy.get('div.Dashboard_tchDshPendActFlexSect__E8rdD button.MuiButton-root').contains('PROVIDE FEEDBACK')
    }

    getAttendenceCardCloseIcon() {
        return cy.get('[data-testid="CloseIcon"]')
    }

    getAttachsamplefile() {
        return cy.get('input#file-input')
    }

    getAddLessonPlanCardTxt() {
        return cy.get('div.Dashboard_cardContainer__270hq p').contains('ADD LESSONPLAN')
    }

    getPendingCardCloseIcon() {
        return cy.get('[data-testid="CloseIcon"]')
    }

    getPendingCardMilestoneCloseIcon() {
        return cy.get('[data-testid="CloseIcon"]')
    }

    getMilestoneChapterCompletionPercentage() {
        return cy.get('div [data-test-id="CircularProgressbarWithChildren__children"] strong')
    }

    getPendingCardFeedbackHeader() {
        return cy.get('div.top-cont').contains('Feedback')
    }

    getAddLessonPlanBtn() {
        return cy.get('button.MuiButton-root').contains('ADD LESSONPLAN')
    }

    getCreateLessonIcon() {
        return cy.get('div.createIcon')
    }

    getCreateLessonThemeDropdown() {
        return cy.get('div#theme')
    }

    getCreateLessonChapterDropdown() {
        return cy.get('div#chapter')
    }

    getCreateLessonTopicDropdown() {
        return cy.get('div#topic')
    }

    getCreateLessonLearningObjectiveTxtField() {
        return cy.get('input#mui-5')
    }

    getCreateLessonSearchTxtField() {
        return cy.get('div.ql-editor ')
    }

    getCreateLessonRemarksTxtField() {
        return cy.get('input#mui-6')
    }

    getCreateLessonPlanSaveBtn() {
        return cy.get('button.sectionSaveBtn ')
    }

    getCreateLessonPlanGobackBt() {
        return cy.get('span.mt-0').contains('Go Back')
    }

    getMilestonePendingCardTxt() {
        return cy.get('div.Dashboard_cardContainer__270hq p').contains('MILESTONE COMPLETION')
    }

    getCreateLessonTopicDropdownValue() {
        return cy.get('ul[role="listbox"] li')
    }

    getCreateLessonThemeDropdownValue() {
        return cy.get('ul[role="listbox"] li')
    }

    getCreateLessonChapterDropdownValue() {
        return cy.get('ul[role="listbox"] li :visible')
    }

    getCalenderAddLessonPlanBtn() {
        return cy.get('button.view_lesson_btn ').contains('Add Lesson Plan')
    }

    getCalenderPageHeaderTxt() {
        return cy.get('div.calendarTopSect').contains('Your Calendar')
    }

    getPendingCardFeedbackPopupCloseBtn() {
        return cy.get('[data-testid="pop-close-id"]')
    }

    getAddLessonPlanCardSubName() {
        return cy.get('div.Dashboard_tchDshPendActText__2_6js h6')
    }

    getMilestoneSubName() {
        return cy.get('div.Dashboard_tchDshPendActText__2_6js h6')
    }

    getPendingMilestoneBtn() {
        return cy.get('button.Dashboard_tchDshPendActBtn__3PCld').contains('MARK COMPLETE')
    }

    getAddLessonPlanCardSubDate() {
        return cy.get('div.Dashboard_tchDshPendActText__2_6js p')
    }


    getPendingCardFeedback1stEmojiImg() {
        return cy.get('img[data-testid="one-text-amazing"]')
    }

    getPendingCardFeedback2ndEmojiImg() {
        return cy.get('img[data-testid="two-text-amazing"]')
    }

    getPendingFeedbackSubmitBtn() {
        return cy.get('div.button-cls span')
    }

    getPendingCardFeedbackContinueBtn() {
        return cy.get('div[data-testid="feed-test-id"]')
    }


    getPendingCardFeedbackDescription() {
        return cy.get('textarea[id="rc_content"]')
    }

    getMarkAttendencePageHeader() {
        return cy.get('div p.attendTableTit')
    }

    getMarkAttendenceCardSubName() {
        return cy.get('div.Dashboard_tchDshPendActText__2_6js h6')
    }

    getMarkAttendenceImg() {
        return cy.get('div.MuiGrid-root img[src="/static/media/attendMark.0f5cfd41.svg"]')
    }

    getMilestoneDropdown() {
        return cy.get('div.MuiFilledInput-underline')
    }

    getMarkAttendencePageSubmitBtn() {
        return cy.get('div button.attendSubBtn')
    }

    getMarkAttendenceBtn() {
        return cy.get('button.Dashboard_tchDshPendActBtn__3PCld').contains('MARK ATTENDANCE')
    }

    getHomeworkPendingCardDate() {
        return cy.get(':nth-child(n)> .Dashboard_tchDshPendActText__2_6js .MuiTypography-body1')
    }

    getMarkAttendencePopupSubmitBtn() {
        return cy.get('div button.prime_btn')
    }

    getMarkAttendencePopupCanceBtn() {
        return cy.get('button.attendCancellBtn ')
    }

    getMilestoneDropdownValues() {
        return cy.get('ul[role="listbox"] li')
    }

    getMilestoneGraphBar() {
        return cy.get(':nth-child(n)> [style="position: relative; overflow: hidden; display: block; z-index: 0; background-color: rgb(238, 238, 238); width: 30px; height: 100%; min-height: 140px; border-radius: 1000px; align-self: center;"]')
    }


    getAssignHomeworkBtn() {
        return cy.get('div.Dashboard_tchDshPendActItem__2aKVR button.Dashboard_tchDshPendActBtn__3PCld').contains('ASSIGN HOMEWORK')
    }

    getHomeworkPendingCardTitle() {
        return cy.get('div.Dashboard_tchDshPendActItem__2aKVR p').contains('HOMEWORK PENDING')
    }

    getMarkAttendenceSavePopupMsg() {
        return cy.get('div.MuiAlert-message')
    }

    getMyclassLnk() {
        return cy.get('div.menu-txt').contains("My Classes")
    }

    getReportLnk() {
        return cy.get('div.menu-txt').contains("Reports")
    }

    getMyCalenderLink() {
        return cy.contains('My Calendar')
    }

    //Buiness logic

    clickOnMyCalenderLink() {
        this.getMyCalenderLink().click({ force: true })
    }

}
module.exports = new TeacherDashboardPage() 