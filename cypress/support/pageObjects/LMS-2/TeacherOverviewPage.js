const cypress = require("cypress")

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
    getElAPageTitleTxt(){
        return cy.get('.elalistheader').contains("Extended Learning Assignment")
    }
    getOverviewTab(){
        return cy.get('button[role="tab"]').contains("Overview")
    }
    getMonthTxtInOverviewViewFullPopup(){
        return cy.get('div.mbsc-calendar-controls div span.mbsc-calendar-month')
    }
    getNxtArrowIconInCalendarPopup(){
        return cy.get('button.mbsc-calendar-button-next:visible')
    }
    getPrevArrowIconInCalendarPopup(){
        return cy.get('button.mbsc-calendar-button-prev:visible')
    }
    getCloseIconInCalendarPopup(){
        return cy.get('div svg.teaViewWrkLdClose:visible')
    }
    getStudentsTab(){
        return cy.get('button[role="tab"]').contains("Students")
    }
    getRollNoCheckBx(){
        return cy.get('span.chk-success input[aria-label="select all desserts"]')
    }
    getViewDetailsIconInStudentsTab(){
        return cy.get('svg[data-testid="ArrowForwardIosIcon"]')
    }
    getRecentWorkloadtxtInViewdetail(){
        return cy.get('div.TeacherProfile_tchPrfRcnWkLod__1TH_N p.TeacherProfile_tchPrfRcnWkLodTitle__3dm1M')
    }
}
module.exports = new TeacherOverviewPage() 