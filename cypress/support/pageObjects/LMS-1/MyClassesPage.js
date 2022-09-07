class MyClassesPage{

    getMyClassesIcon(){
        return cy.get('.side-nav-icon').eq(1)
    }

    getGradeWithSection(){
        return cy.get('.card_roman_txt')
    }

    getSubject(subjectData){
        return cy.get('.classTitle').eq(subjectData)
    }

    getTotalStudents(studentCount){
        return cy.get('.classCount').eq(studentCount)
    }

    getArrowButton(menuNumber){
        return cy.get('.popover-arrow').eq(menuNumber)
    }

    getClassTitle(){
        return cy.get('.ClassDashboard_classDashboardTitle__DGee9')
    }

    getOverviewTab(){
        return cy.get(".MuiButtonBase-root").eq(0)
    }

    getStudentsTab(){
        return cy.get(".MuiButtonBase-root").eq(1)
    }

    getMilestonesTab(){
        return cy.get(".MuiButtonBase-root").eq(2)
    }

    getTimetableTab(){
        return cy.get(".MuiButtonBase-root").eq(3)
    }

    getAssessmentsTab(){
        return cy.get(".MuiButtonBase-root").eq(4)
    }

    getDiscussionsTab(){
        return cy.get(".MuiButtonBase-root").eq(5)
    }

    getLiveClassesTab(){
        return cy.get(".MuiButtonBase-root").eq(6)
    }

    getSessionsCompleted(){
        return cy.get("div.card-grid-content>p.MuiTypography-root:nth-of-type(2)").eq(0)
    }

    getPendingTasks(){
        return cy.get("div.card-grid-content>p.MuiTypography-root:nth-of-type(2)").eq(1)
    }

    getAverageAttendance(){
        return cy.get("div.card-grid-content>p.MuiTypography-root:nth-of-type(2)").eq(2)
    }

    getStartLiveSession(){
        return cy.get("div.cardInfoBtnSect>a.MuiButton-root")
    }

    getTopPerformersTab(){
        return cy.get("div.MuiToggleButtonGroup-root>button.MuiButtonBase-root:nth-of-type(1)")
    }

    getNeedsAttentionTab(){
        return cy.get("div.MuiToggleButtonGroup-root>button.MuiButtonBase-root:nth-of-type(2)")
    }

    getCompletedStatus(){
        return cy.get(".milestone-chapter-status.completed").eq(0)
    }

    getOngoingStatus(){
        return cy.get(".milestone-chapter-status.ongoing").eq(0)
    }

    getPendingStatus(){
        return cy.get(".milestone-chapter-status.pending").eq(0)
    }

    getSelectAllStudentsCheckbox(){
        return cy.get("input[type='checkbox']")
    }

    getUploadCSV(){
        return cy.get(".MuiButton-root").eq(0)
    }

    getSendMail(){
        return cy.get(".MuiButton-root").eq(1)
    }

    getSendAssignment(){
        return cy.get(".MuiButton-root").eq(2)
    }

    getCreateGroup(){
        return cy.get(".MuiButton-root").eq(3)
    }

    getAllStudentsSection(){
        return cy.get('button[value="allstudent"]')
    }

    getStudentGroupSection(){
        return cy.get('button[value="studentgroup"]')
    }

    getCreateNewGroup(){
        return cy.get('button.MuiButton-root').eq(0)
    }

    getTodaysDateAtTop(){
        return cy.get('.ClassDashboard_dayFormat__2P2qt')
    }

    getSearchStudentUnderAllStudents(){
        return cy.get('input[placeholder="Search a student..."]')
    }

    getStudentName(){
        return cy.get('tbody>tr>td:nth-of-type(3)')
    }

    getRollNoUnderAllStudents(){
        return cy.get('thead>tr>th:nth-of-type(2)>span')
    }

    getFirstNameUnderAllStudents(){
        return cy.get('thead>tr>th:nth-of-type(4)>span')
    }

    getLastNameUnderAllStudents(){
        return cy.get('thead>tr>th:nth-of-type(5)>span')
    }

    getLastActiveAllStudents(){
        return cy.get('thead>tr>th:nth-of-type(6)>span')
    }

    getAttendanceUnderAllStudents(){
        return cy.get('thead>tr>th:nth-of-type(7)>span')
    }

    getRollNoUnderGroupStudentsTab(){
        return cy.get('.MuiDataGrid-columnHeaderTitle').eq(0)
    }

    getFullNameUnderGroupStudentsTab(){
        return cy.get('.MuiDataGrid-columnHeaderTitle').eq(1)
    }

    getCheckboxUnderGroupStudentsTab(){
        return cy.get('..PrivateSwitchBase-input').eq(0)
    }

    getRemoveIconUnderGroupStudentsTab(){
        return cy.get('.MuiButton-root').eq(1)
    }

    getSearchStudentUnderStudentGroup(){
        return cy.get('#students-search-in-table')
    }

    getStudentFullNameUnderGroupStudentTab(){
        return cy.get('div[data-field="fullName"]')
    }

    getAddNewStudentInGroup(){
        return cy.get('button[aria-label="add"]')
    }

    getAddStudentPopupTitle(){
        return cy.get('h3.addStdTit>strong')
    }

    getTimetableYearContent(){
        return cy.get('div.MuiTypography-root>div.d-flex')
    }

    getTotalChaptersUnderMilestonesTab(){
        return cy.contains('Total Chapters')
    }

    getTotalTopicsUnderMilestonesTab(){
        return cy.contains('Total Topics')
    }

    getMilestoneCompletedUnderMilestonesTab(){
        return cy.contains('Milestone completed')
    }

    getHomeworkTab(){
        return cy.get('button[value="homework"]')
    }

    getAssessmentTab(){
        return cy.get('button[value="assessments"]')
    }
}

export default MyClassesPage