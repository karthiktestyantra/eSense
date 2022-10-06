class TeacherOverviewPage{
    getWorkloadDetailstxt(){
        return cy.get('div.containerTop p')
    }
    getTodaysWorkloadPercentagTxt(){
        return cy.get('div.todayWrkldSvg text.CircularProgressbar-text')
    }
    getHomeworkAssignedTab(){
        return cy.get('.overviewTbAssign')
    }
    getNxt7daysTabLst(){
        return cy.get('.overvwTbWkLodSectItemSvg')
    }
    getViewFullBtn(){
        return cy.get('button.overvwTbWkLodViewAllBtn')
    }
    getCalenderPopupTitleTxt(){
        return cy.get('p.teaViewWrkLdTitle')
    }
    getMonthAndYearTxtInCalendarPopup(){
        return cy.get('button.mbsc-calendar-button span.mbsc-calendar-title')
    }
    getCalendarDaysInCalendarPopup(){
        return cy.get('div.mbsc-calendar-day div.mbsc-calendar-day-text:visible')
    }
    getAssignmentHomeworkPopupInCalendar(){
        return cy.get('div.row-class div.head-font-cls')
    }
    getCreateHomeworkPopUpTitle(){
        return cy.get('h1.add_homework_class-tittle')
    }
    getCloseIconInCreateHomeworkPopup(){
        return cy.get('div.add_homework_class-wrapper svg.close-icon_notes')
    }
}
module.exports = new TeacherOverviewPage() 