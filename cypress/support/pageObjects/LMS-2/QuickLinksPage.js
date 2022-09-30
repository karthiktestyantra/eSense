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
        return cy.get('button.css-1ujsas3').contains('Cancel').scrollIntoView()
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
    getSchoolNoticeBoardTab(){
        return cy.get('button.css-1q2h7u5').contains('School Notice Board')
    }
    getPrivateNoticeBoardTab(){
        return cy.get('button.css-1q2h7u5').contains('Private Notice Board')
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
    getCreateNewNoticeDeletePopupDeleteNoticeBtn(){
        return cy.get('button.css-1hw9j7s').contains(' Delete Notice')
    }
    getNoticeList(){
        return cy.get('div.StudentSchool_schNotBordList__3ggOt')
    }
    getNoticeListDate(){
        return cy.get('p.StudentSchool_schNotBordListDate__2RKqU')
    }
    getNoticeListMonth(){
        return cy.get('p.StudentSchool_schNotBordListMnth__3vdMo')
    }
    getNoticeListTitle(){
        return cy.get('p.StudentSchool_schNotBordListTitle__2JyUo')
    }
    getNoticeListTags(){
        return cy.get('div.StudentSchool_schNotBordCntTags__TYXuW h1')
    }
    getNoticeListPublicWithIcon(){
        return cy.get('div.StudentSchool_schNotBordCntTags__TYXuW p')
    }
    getNoticeListPrivateWithIcon(){
        return cy.get('div.StudentSchool_schNotBordCntTags__TYXuW p')
    }
    getNoticeListPrivateMembers(){
        return cy.get('div.admin-row-cls-out')
    }
    getSearchBox(){
        return cy.get('input.css-7g5oui')
    }
    getCalenderIcon(){
        return cy.get('div.noticeSchoolTabDatePicker img')
    }
    getSortDropdown(){
        return cy.get('div.css-1v4ccyo div')
    }
    getSortDropdownALLOpt(){
        return cy.get('li.css-1km1ehz').contains('All')
    }
    getSortDropdownGeneralOpt(){
        return cy.get('li.css-1km1ehz').contains('General')
    }
    getSortDropdownImportantOpt(){
        return cy.get('li.css-1km1ehz').contains('Important')
    }
    getDeleteList(){
        return cy.xpath('//div[@class="StudentSchool_schNotBordList__3ggOt MuiBox-root css-0"]//button[2]')
    }
    getReadMoreLink(){
        return cy.get('p.StudentSchool_schNotBordListDesc__2TvCM span')
    }
    getNoticeDescription(){
        return cy.get('p.StudentSchool_schNotBordListDesc__2TvCM p.text')
    }

}
module.exports=new QuickLinksPage()