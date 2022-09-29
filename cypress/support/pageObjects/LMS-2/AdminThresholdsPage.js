class AdminThresholdsPage {

    getSideMenuAdminUserImg() {
        return cy.get('div.side-nav-icon img[src="/static/media/users.d209b37f.svg"]')
    } 

    getTeacherThresholdsBtn() {
        return cy.get('button.TeacherDashboard_saveChangesBtn__2EJTY').contains('Workload Thresholds')
    } 

    getStudentThresholdsBtn() {
        return cy.get('button.UserDashBoard_saveChangesBtn__3XLyJ').contains('Workload Thresholds')
    } 
 
    getThresholdsMaxWorkingHoursDropdown() {
        return cy.get('div.MuiSelect-select').eq(1)
    } 

    getStudentThresholdsgreenHoursDropdown() {
        return cy.get('div.MuiSelect-select').eq(2)
    } 

    getStuThresholdsMaxWorkingHoursDropdown() {
        return cy.get('div.MuiSelect-select').eq(1)
    } 

    getThresholdGreenWorkingHoursDropdown() {
        return cy.get('div.MuiSelect-select').eq(2)
    } 

    getThresholdStuYelloowWorkingHoursDropdown() {
        return cy.get('div.tchWrkLodListItemSelect p.MuiTypography-root').eq(0)
    } 

    getThresholdsMaxWorkingHoursDropdownValues() {
        return cy.get('ul.MuiList-root li')
    } 

    getThresholdsSecondGradeName() {
        return cy.get('div.stdWrkTabBtn button').eq(1)
    } 

    getThresholdsFirstGradeName() {
        return cy.get('div.stdWrkTabBtn button').eq(0)
    } 

    getThresholdGreenWorkingHoursDropdownValues() {
        return cy.get('ul.MuiList-root li')
    } 

    getThresholdYelloWorkingHoursDropdown() {
        return cy.get('div.tchWrkLodListItemSelect p').eq(0)
    } 

    gestutThresholdRedWorkingHoursDropdown() {
        return cy.get('div.tchWrkLodListItemSelect p').eq(1)
    } 

    getThresholdRedWorkingHoursDropdown() {
        return cy.get(':nth-child(3) > .tchWrkLodListItemSelect > .MuiTypography-root')
    } 

    getTeacherThresholdsPopupCloseBtn() {
        return cy.get('svg.viewTchWrkLodClose ')
    } 

    getStudentBtn() {
        return cy.get('button.MuiButtonBase-root').contains('Students')
    }

}
module.exports = new AdminThresholdsPage() 