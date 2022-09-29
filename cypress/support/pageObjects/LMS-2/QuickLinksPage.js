class QuickLinksPage{
    getAddNoticeBtn(){
        return cy.get('button.noticeAddMembBtnFill')
    }
    getCreateNewNoticeTitle(){
        return cy.get('#noticetitle')
    }
    getCreateNewNoticeTypeDropdown(){
        return cy.get('#demo-simple-select')
    }
    getCreateNewNoticeTypeGeneralOpt(){
        return cy.get('li.css-1km1ehz').contains('General')
    }
    getCreateNewNoticeTypeImportantOpt(){
        return cy.get('li.css-1km1ehz').contains('Important')
    }
    getCreateNewNoticeTypeOthersOpt(){
        return cy.get('li.css-1km1ehz').contains('Others')
    }
    getCreateNewNoticeDescriptionTextareafield(){
        return cy.get('div.css-1hof3tc')
    }
    getCreateNewNoticePublishRightNowRedioBtn(){
        return  cy.get('.css-1m9pwf3').eq(0)
    }
    getCreateNewNoticePublishLaterOnRedioBtn(){
        return  cy.get('.css-1m9pwf3').eq(1)
    }
    getCreateNewNoticeEntireSchoolRedioBtn(){
        return  cy.get('.css-1m9pwf3').eq(2)
    }
    getCreateNewNoticeSpecificMembersRedioBtn(){
        return  cy.get('.css-1m9pwf3').eq(3)
    }
    getCreateNewNoticeSendBtn(){
        return cy.get('button.css-1hw9j7s').contains('Send')
    }
    getEditBtn(){
        return cy.get('button.css-1ujsas3').eq(0)
    }
    getDeleteBtn(){
        return cy.get('button.css-1ujsas3').eq(1)
    }
    getCreateNewNoticeSaveAndSendBtn(){
        return cy.get('button.css-1hw9j7s').contains('Save & Send')
    }
    getCreateNewNoticeCancelBtn(){
        return cy.get('button.css-1ujsas3').contains('Cancel')
    }
    getCreateNewNoticeXBtn(){
        return cy.get('div.reminderPadd svg').scrollIntoView()
    }
    getCreateNewNoticeCalenderIcon(){
        return cy.get('svg[data-testid="CalendarIcon"]')
    }
    getCreateNewNoticeAddMembersBtn(){
        return cy.get('button.css-79xub')
    }
    getCreateNewNoticeTeacherTab(){
        return cy.get('button.css-1q2h7u5').contains('Teachers')
    }
    getCreateNewNoticemembersList(){
        return cy.get('[class="stdDialSrchRstBlk noticeAddMembScroll"]')
    }
    getCreateNewNoticeGoBackBtn(){
        return cy.get('div.noticeAddMembNav')
    }
    getCreateNewNoticeSchoolNoticeBoardBtn(){
        return cy.get('button.css-1q2h7u5').contains('School Notice Board')
    }
    getCreateNewNoticeRightArrowBtn(){
        return cy.get('[data-testid="ArrowRightIcon"]')
    }
    getCreateNewNoticeDateBtn(){
        return cy.get('button.css-ub1r1').contains('20')
    }
    getCreateNewNoticeAddBtn(){
        return cy.get('button.css-eaye9s').eq(0)
    }
    getCreateNewNoticeSaveBtn(){
        return cy.get('button.noticeAddMembActionBtnSave')
    }
    getCreateNewNoticeDeletePopupXBtn(){
        return cy.get('.delete_reminder-wrapper svg')
    }
    getCreateNewNoticeDeletePopupCancelBtn(){
        return cy.get('button.css-79xub')
    }
    getTimeTableManagementBtn(){
        return cy.xpath('//p[.="Timetable Management"]')
    }
    getQuickLinksTitle(){
        return cy.get('[class*="schQicLikTitle"]')
    }
}
module.exports=new QuickLinksPage()