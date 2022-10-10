class TeacherMyclassesOverviewPage{
    getOverviewTab(){
        return cy.get('button.MuiTab-textColorPrimary').contains('Overview')
    }
    getOverviewSessionsCompletedTab(){
        return cy.get('div.card-container').contains('Sessions Completed')
    }
    getOverviewSessionsCompletedCount(){
        return cy.get('div.card-container p.cardCount').eq(0)
    }
    getOverviewPendingActionsTab(){
        return cy.get('div.card-container').contains('Pending Actions')
    }
    getOverviewPendingActionsCount(){
        return cy.get('div.card-container p.cardCount').eq(1)
    }
    getOverviewAverageAttendanceTab(){
        return cy.get('div.card-container').contains('Average Attendance')
    }
    getOverviewAverageAttendanceCount(){
        return cy.get('div.card-container p.cardCount').eq(2)
    }
    getOverviewPendingActionsCard(){
        return cy.get('div.pendActListSect div.MuiCardContent-root')
    }
}
module.exports=new TeacherMyclassesOverviewPage() 