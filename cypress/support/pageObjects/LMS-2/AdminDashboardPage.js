class AdminDashboardPage {

    getSideMenuAdminSchoolImg() {
        return cy.get('div.side-nav-icon img[src="/static/media/company.e1656b4d.svg"]')
    }

    getSideMenuAdminUserImg() {
        return cy.get('div.side-nav-icon img[src="/static/media/users.d209b37f.svg"]')
    }

    getStudentBtn() {
        return cy.get('button.MuiButtonBase-root').contains('Students')
    }

    getTeacherBtn() {
        return cy.get('button.MuiButtonBase-root').contains('Teacher')
    }

    getSchoolBtn() {
        return cy.get('.menu-txt ').contains('School')
    }

    getAdminsBtn() {
        return cy.get('#scrollable-auto-tab-1')
    }

    getAdminsTableHeader() {
        return cy.get('.MuiTableCell-head').contains('Name & Email')
    }

    getStudentTableHeader() {
        return cy.get('.MuiTableCell-head').contains('Name & Admission No')
    }

    getTeacherTableHeader() {
        return cy.get('.MuiTableCell-head').contains('NAME & USER ID')
    }

    getSideMenuAdminDashboardImg() {
        return cy.get('div.side-nav-icon img[src="/static/media/barChart.5474dbcd.svg"]')
    }

    getGradesAndDepartmentQuickLink() {
        return cy.get('div.StudentSchool_schQicLikSect__sL7xN p').contains('Grades & Stream')
    }

    getAdminAccountsQuickLink() {
        return cy.get('div.StudentSchool_schQicLikSect__sL7xN p').contains('Admin Accounts')
    }

    getStudentNameCount() {
        return cy.xpath('//div[@class="UserDashBoard_studentMeta__12OmY"]/p[@class="MuiTypography-root MuiTypography-body1 css-9l3uo3"]')
    }

    getAdminNameCount() {
        return cy.get('span.adminRoles_userName__20cUY')
    }


    getTeachertNameCount() {
        return cy.xpath('//div[@class="TeacherDashboard_studentMeta__3kQfU"]/p[@class="MuiTypography-root MuiTypography-body1 css-9l3uo3"]')
    }

    getGradesAndSubjectBtn() {
        return cy.get('button#scrollable-auto-tab-1')
    }

    getGobackBnt() {
        return cy.get('div.font-cls')
    }

    getEditableGradeBtn() {
        return cy.get('tbody.MuiTableBody-root td button.sectionsBtn').eq(0)
    }

    getEditableGradePopUpTxt() {
        return cy.get('div.add-section-form span')
    }

    getEditableGradeSection() {
        return cy.get('input.MuiOutlinedInput-input')
    }

    getEditableGradeOptionalSubDropdown() {
        return cy.get('div[data-testid="subjectSelect"]')
    }

    getEditableGradeOptionalSubCheckBox() {
        return cy.get('div.MuiPaper-root input.PrivateSwitchBase-input')
    }

    getEditableGradePopUpSaveBtn() {
        return cy.get('button.sectionSaveBtn')
    }

    getEditableGradePopUpSaveSuccessMeg() {
        return cy.get('div.MuiAlert-message')
    }

    getLisOfGrades() {
        return cy.get('div._1EEDX')
    }

    getLisOfSection() {
        return cy.get('tbody.MuiTableBody-root td button.sectionsBtn')
    }

    getAddNewGradeBtn() {
        return cy.get('button.sectionAddBtn').eq(0)
    }

    getAddNewGradePopupTxt() {
        return cy.get('div.pop-header')
    }

    getAddNewGradePopupCancelBtn() {
        return cy.get('button.sectionCancelBtn ')
    }

    getClassDetailsBtn() {
        return cy.get('span.class-label')
    }

    getClassDetailsBackBtn() {
        return cy.get('img[style="cursor: pointer;"]')
    }

    getClassDetailsDashboardClassName() {
        return cy.get('div.header-container-out div')
    }

    getClassDetailsClassTitle() {
        return cy.get('div.inner-header-container div.class-font')
    }

    getClassDetailsSubjectFilter() {
        return cy.get('div#demo-simple-select-0')
    }

    getClassDetailsCurrentDate() {
        return cy.get('div.ClassDashboard_classDashboardDate__1CYTt')
    }

    getClassDetailsStudentPresentCount() {
        return cy.get('div.ClassDashboard_addUserIcon__l2hkx p')
    }

    getClassDetailsSessionCompletedSec() {
        return cy.get('div.overViewCardItem p.cardTitle').contains('Sessions Completed')
    }

    getClassDetailsPendingTaskSec() {
        return cy.get('div.overViewCardItem p.cardTitle').contains('Pending Tasks')
    }

    getClassDetailsAverageAttendenceSec() {
        return cy.get('div.overViewCardItem p.cardTitle').contains('Average Attendance')
    }

    getClassDetailsMilestoneSection() {
        return cy.get('div.milestone-grid-container p')
    }

    getClassDetailsTopPerformerBtn() {
        return cy.get('button[value="top performers"]')
    }

    getClassDetailsNoNeedAttentionBtn() {
        return cy.get('button[value="needs attention"]')
    }

    getClassDetailsListOfTopPerformer() {
        return cy.get('tr.MuiTableRow-root')
    }

    getClassDetailsTopPerformerCommingSoonTag() {
        return cy.get('div.cmgSoonOverLaySect p')
    }

    getSideMenuContentLibraryImg() {
        return cy.get('div.side-nav-icon img[src="/static/media/book.3c851275.svg"]')
    }

    getSideMenuReportsImg() {
        return cy.get('div.side-nav-icon img[src="/static/media/report.d1121fb6.svg"]')
    }

    getSideMenuStudentGradebookLink() {
        return cy.xpath('//div[.="Student Gradebook"]')
    }

    getCountOfTeacherWidget() {
        return cy.get('div.Dashboard_tchDshTimelineSect__292Ho div.Dashboard_tchDshTimelineCntBg__3tz_h')
    }

    getCountOfGrades() {
        return cy.get('button.sectionsBtn')
    }

    getDashboardCountOfTotalClass() {
        return cy.get('div.MuiBox-root h4 span').eq(0)
    }

    getDashboardCountOfTotalStudent() {
        return cy.get('div.MuiBox-root h4 span').eq(1)
    }

    getDashboardCountOfTotalTeacher() {
        return cy.get('div.MuiBox-root h4 span').eq(2)
    }

    getDashboardCountOfTotalAdmin() {
        return cy.get('div.MuiBox-root h4 span').eq(3)
    }

    getCalenderBtn() {
        return cy.get('div.menu-txt').contains('Calendar')
    }

    getGradeWiseAttendanceInSiteAnalyticsSection() {
        return cy.get('div.MuiTabs-scroller button[role="tab"]').contains("Grade-Wise Attendance")
    }

    getClassWisePerformanceTxtInGradeWiseAttendance() {
        return cy.get('div.gradeWiseWidgetscroll h4')
    }

    getTopPerformersDefaultDropdownText() {
        return cy.xpath('//em[.="STUDENTS"]')
    }

    getTopPerformersDropdowns() {
        return cy.get('[class*=TopPerformers] [aria-haspopup="listbox"]')
    }

    getTopPerformersNameList() {
        return cy.get('[class*=TopPerformers_topPefListBlk] h4')
    }

    getTopPerformersGradeList() {
        return cy.get('[class*="TopPerformers_topPefListItemsInfo"] h6')
    }

    getTopPerformersRankList() {
        return cy.get('[class*="topPefListBlkLeft"] span')
    }

    getTopPerformersRankListDynamic(rank) {
        return cy.xpath("//div[contains(@class,'topPefListBlkLeft')]//span[text()=\"" + rank + "\"]/ancestor::div[contains(@class,'TopPerformers_topPefListBlk__3')]//h4")
    }

    getTopPerformersOverallPercentageList() {
        return cy.get('[class*="TopPerformers_topPefListMark"] h6')
    }

    getTopPerformersDropdownList() {
        return cy.get('[role="listbox"] li')
    }

    getTopPerformersDropdownListBox() {
        return cy.get('[role="listbox"]')
    }

    getTopPerformersScrollBar() {
        return cy.get('.TopPerformers_topPefListBlkList__2zdgM')
    }

    getSiteAnalyticsTitle() {
        return cy.xpath('//p[.="Site Analytics"]')
    }

    getContentPerformanceTab() {
        return cy.xpath('//button[.="Content Performance"]')
    }

    getBookNameTextContentPerformance() {
        return cy.get('[class*="ContentPerformance"] h5')
    }

    getDropdownsInContentPerformance() {
        return cy.xpath('//div[.="All"]')
    }

}
module.exports = new AdminDashboardPage() 