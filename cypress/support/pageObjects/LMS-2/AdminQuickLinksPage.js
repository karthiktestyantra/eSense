class AdminQuickLinksPage {

    getMenuSchoolImg() {
        return cy.get('div.side-nav-icon img[src="/static/media/company.e1656b4d.svg"]')
    }

    getTimetableManagementBtn() {
        return cy.get('div.StudentSchool_schQicLikSectCard__F0UPY p')
    }

    getListOfTimeTableGenerated() {
        return cy.get('table.MuiTable-root tr')
    }

    getTimetableGenerateBtn() {
        return cy.get('button.Timetable_adminTimTbleSectTbleOverviewSelect__2mQZC')
    }

    getEditTimeTableHeader() {
        return cy.get('div.header_font_cls span')
    }

    getViewTimeTableHeader() {
        return cy.get('div.header_font_cls span')
    }

    getViewTimeTableDate() {
        return cy.get('div.liveClassTsrCrdDesc')
    }

    getViewTimeTableDays() {
        return cy.get('div.mbsc-schedule-header-item')
    }

    getViewTimeTableStartTime() {
        return cy.get('[placeholder="h:mm (a|p)m"]')
    }

    getViewTimeTableEndTime() {
        return cy.get('[placeholder="h:mm (a|p)m"]')
    }

    getViewTimeTableAMBtn() {
        return cy.get('.MuiTypography-root')
    }

    getViewTimeTablePMBtn() {
        return cy.get('.MuiTypography-root')
    }

    getViewTimeTableRightArrow() {
        return cy.get('[data-testid="ArrowRightIcon"]')
    }

    getTimetableGeneraAutoBtn() {
        return cy.get('td.MuiTableCell-root:nth-child(5)')
    }

    getTimetableGeneraManualBtn() {
        return cy.get('td.MuiTableCell-root:nth-child(5)')
    }

    getTimetableGradeNameBtn() {
        return cy.get('.MuiTableBody-root > :nth-child(n) > :nth-child(2)')
    }

    getEditTimeTableSaveChangesBtn() {
        return cy.get('button.MuiButton-root').contains('Save Changes')
    }

    getEditTimeTableUpdateMesg() {
        return cy.get('.request_para')
    }

    getTimetableGeneratedDeleteBtn() {
        return cy.get(':nth-child(n) > :nth-child(7) > .adminTimTblActCell > :nth-child(2) > img')
    }

    getTimetableGeneratedEnabledEditBtn() {
        return cy.get('td.MuiTableCell-root span svg[xmlns="http://www.w3.org/2000/svg"]').eq(0)
    }

    getTimetableGenertedDisabledEditBtn() {
        return cy.get(':nth-child(n) > :nth-child(7) > .adminTimTblActCell > [src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKCSURBVHgBvVfBbtpAEH27a1yISCmIpCqqSkRRKtFDD80hR679gPxP/icf0CvHHtpDpRapiFShh1QJjUgLbQLY3u6ubTAkYK9N/CSDWHb3vZ2ZnRkTaIFTNEFxKR6BehVEfnd74OrvXThoiQfEibojiTSryQ1J6hNGQfcGNlrECpsXsiE36u/AkADdPCycEBvaAhrc1DnxWhHSRW0yQWQBGyRfFIGpoOTBcZoGuYTas4HM8jhJgzyIZXcELCAC7oHJJRTHEWd3BCSNdi0RIxiLAuQ9Txsep/qo55Kfvvy4VyMZqwpOpn/7tQ//GNYmocYOaBvKApwiIYr5syJ5ZL8EJYY4Sm7rae9F2JrJSMTCMadubk+AAutsD0Z7A1CzB120QGeFJQ7KhbNnZsk4lObvXzzvcIedi3Pd3A75zyjr3+6DkMYRN5U5NFF40tk2M8ah/5uP2emvP9XvWzaMMP/7MPPC/7HJGTsIjpGsXdEhl5Dc2uYv5AdZk2bfqIDzQbk1mVifdchnS6UZok5W5ObwAMzKBccnY/vj7+v9ITShXND+qrEgd/1qmVxcpC9xyCVyRZH/VRuFiImIOiU485BxLHy7GuxFivj78Knj9niR+rfSzjAvyGd+55ydXg1qP5AETe84Ua5iqdyrUGpVHMc4v72oXsYJuGV035OxSyoKwybqgRa517S617AFG2nD4/TyAOFKUUpwudzecJ6IhDl0ckJcKI6AxRcyYfsE04cUIfeWHMHO+J7I56JAIROnRuiSrxCweRGryNcI8LCB6+let3nQ6QlQ4ERkLKYjRJ24r96UVxJrCAgIORbzRRslG0o54rvID9zd13BaokSIeTyM2Md/RWL80Im7RW4AAAAASUVORK5CYII="]')
    }

    getGeneratTimetableBtn() {
        return cy.get('button.MuiButton-root').contains('Generate Time Slots')
    }

    getTimetableGenerateAutoRadioBtn() {
        return cy.get('div.MuiFormGroup-root label')
    }

    getGeneratedTimetableDaysDropdown() {
        return cy.get('div#demo-simple-select')
    }

    getGeneratedTimetablePeriodTimeDropdown() {
        return cy.get('div#demo-simple-select')
    }

    getGeneratedTimetableRoomDropdown() {
        return cy.get('div#demo-simple-select')
    }

    getGeneratedTimetableZeroLengthDropdown() {
        return cy.get('div#demo-simple-select')
    }

    getGeneratedTimetableZeroOccationDropdown() {
        return cy.get('div#demo-simple-select')
    }

    getGeneratedTimetableBreakLengthDropdown() {
        return cy.get('div#demo-simple-select')
    }

    getGeneratedTimetableBreakOccationDropdown() {
        return cy.get('div#demo-simple-select')
    }

    getGeneratedTimetablePeriodsDropdown() {
        return cy.get('div#demo-simple-select')
    }

    getGeneratedTimetableDropdownValue() {
        return cy.get('ul.MuiList-padding li')
    }

    getGeneratedTimetableGoBackBtn() {
        return cy.get('.prevTimTblGoBackBtn')
    }

    getTimeTableBulkClassCheckBox() {
        return cy.get('input[aria-label="Checkbox demo"]:nth-child(1)')
    }

    getTimeTableBulkDeleteBtn() {
        return cy.get('button[type="button"]').contains('Delete')
    }

    getAddBreakBtn() {
        return cy.get('.add-poc-btn span')
    }

    getAddBreakErrorMesgBtn() {
        return cy.get('.MuiAlert-message')
    }

    getAddBreakDeleteBtn() {
        return cy.get('button.timeTableDelBtn img')
    }

    getGeneratedTimetableBreakNmaeTxtField() {
        return cy.get('input.MuiOutlinedInput-input').eq(2)
    }

    getGeneratedTimetableZeroPeriodDays() {
        return cy.get('div.timeTableWeeklyGrpBtn button', { timeout: 20000 })
    }

    getClassAndLastEditedDropdown() {
        return cy.get('table.MuiTable-root tr th div')
    }

    getSchoolStarTimeHours() {
        return cy.get('span.css-h7tmkn')
    }

    getSchoolEndTimeHours() {
        return cy.get('span.css-h7tmkn')
    }

    getSchoolEndTimeMinutes() {
        return cy.get('div[role="listbox"] span').eq(0)
    }

    getSchoolStarTimeNextArrowBtn() {
        return cy.get('button[title="open next view"]')
    }

    getSchoolEndTimeNextArrowBtn() {
        return cy.get('[data-testid="ArrowRightIcon"]')
    }

    getSchoolStarTimeMinutes() {
        return cy.get('[aria-label="05 minutes"]')
    }

    getSchoolStarTimeBtn() {
        return cy.get('input[placeholder="h:mm (a|p)m"]')
    }

    getSchoolEndTimeBtn() {
        return cy.get('input[placeholder="h:mm (a|p)m"]')
    }

    getSchoolStarTimePM() {
        return cy.get('span.MuiTypography-caption')
    }

    getSchoolStarTimeAM() {
        return cy.get('.css-cysikj > .MuiTypography-root')
    }

    getGeneratedTimetableColumnNames() {
        return cy.get('table.MuiTable-root tr th[scope="col"]')
    }

    getGeneratedTimetableGoBackBtn() {
        return cy.get('.prevTimTblGoBackBtn')
    }

    getSearchTemplateTxtField() {
        return cy.get('input[placeholder="Search a template.."]')
    }

    getTableClassName() {
        return cy.get('td.MuiTableCell-root:nth-child(2)')
    }

    getGeneratedTimetableDeleteBtn() {
        return cy.get('span[style="cursor: pointer;"] img')
    }

    getGeneratedTimetableDownloadPdfBtn() {
        return cy.get('button.MuiButton-root')
    }

    getGeneratedTimetableCheckBox() {
        return cy.get('span.MuiCheckbox-root input[aria-label="Checkbox demo"]')
    }

    getFilterClassNameDropdown() {
        return cy.get('div.MuiSelect-select')
    }

    getFilterClasValuesDropdown() {
        return cy.get('ul.MuiList-root  li[tabindex="-1"]')
    }

    getListOfGeneratedTimetable() {
        return cy.get('.MuiTableBody-root >:nth-child(n) > :nth-child(2)')
    }

    getPaginationNextBtn() {
        return cy.get('button[aria-label="Go to page 2"]')
    }

    getTimeTableListOfGradeName() {
        return cy.get('.MuiTableBody-root > :nth-child(n) > :nth-child(2)')
    }

    getTimeTableListOfDeleteBtn() {
        return cy.get('.adminTimTblActCell > :nth-child(n) > img')
    }

    getTimeTableListOfViewBtn() {
        return cy.get('[data-testid="ChevronRightIcon"]')
    }

    getTimeTableDeleteAndRegenerateBtn() {
        return cy.get('.dlt_generate_prime')
    }

    getTimeTablePopupDeleteBtn() {
        return cy.get('.dlt_btn_prime')
    }

    getGeneratTimetableHeaderTitle() {
        return cy.get('div.header_font_cls')
    }

    getTimeTableGeneratedSuccessMeg() {
        return cy.get('.MuiAlert-message')
    }

    getTimeTableGeneratedHeaderTxt() {
        return cy.get('div.sub_header_font_cls')
    }

    getTimeTableGeneratedClassTxt() {
        return cy.get('div.prcTimTblTitleSect h1')
    }

    getTimeTableGeneratedClassSlots() {
        return cy.get('div.mbsc-schedule-column')
    }

    getTimeTableGeneratedClassSlots() {
        return cy.get('div.slotPrdCrd')
    }

    getTimeTableGeneratedSlotsSubDropdown() {
        return cy.get('div#opt-subjects')
    }

    getTimeTableGeneratedSlotsTeacherDropdown() {
        return cy.get('div#opt-subjects')
    }

    getTimeTableGeneratedZeroPeriodPopup() {
        return cy.get('div.pop-header span ')
    }

    getTimeTableGeneratedSlotsSubDropdownValue() {
        return cy.get('[aria-labelledby="optional-subs"] li')
    }

    getTimeTableGeneratedSlotsTeacherDropValue() {
        return cy.get('ul.MuiList-root li')
    }

    getTimeTableGeneratedSlotAddBtn() {
        return cy.get('button[form="preview-course-staff-add"]')
    }

    getTimeTableGeneratedSlotDeleteBtn() {
        return cy.get('button.sectionCancelBtn')
    }

    getTimeTableGeneratedSaveMsgPopup() {
        return cy.get('.MuiAlert-message')
    }


    getTimeTableGeneratedSlotSaveAndExitBtn() {
        return cy.get('button.MuiButton-sizeMedium')
    }

    getTimeTableGeneratedSlotPublishBtn() {
        return cy.get('button.MuiButton-sizeMedium')
    }

    get60MinOpt(){
        return cy.get('[data-value="12"]')
    }

    get12PeriodsOpt(){
        return cy.get('[data-value="12"]')
    }
}

module.exports = new AdminQuickLinksPage() 