
class AdminCalenderHomePage{
    getCreateNewBtn(){
        return cy.get('button.css-79xub')
    }
    getAppointmentBtn(){
        return cy.get('div.calendar-list-title').contains('Appointments')
    }
    getEnterAppointmentTitlefield(){
        return cy.get('input.css-mnn31')
    }
    getCreateApointmentAddPeopleLink(){
        return cy.get('button.css-1ujsas3')
    }
    getCreateApointmentTeacherTab(){
        return cy.get('button.css-1q2h7u5').contains('Teachers')
    }
    getCreateAppointmentTeacherSearchField(){
        return cy.get('input.css-7g5oui')
    }
    getCreateAppointmentTeacherCheckbox(){
        return cy.get('div.stdDialSrchRstList input').eq(0)
    }
    getCreateAppointmentCloseLink(){
        return cy.get('button.css-1ujsas3')
    }
    getCreateApointmentDate(){
        return cy.get('div.css-1bn53lx').eq(0)
    }
    getCreateApointmentDateselect(day){
        return cy.get('button.MuiPickersDay-dayWithMargin').contains(day)
    }
    getCreateAppointmentStartTime(){
        return cy.get('div.css-1bn53lx').eq(1)
    }
    getCreateAppointmentStartTimeing(){
        return cy.get('[aria-label="6 hours"]')
    }
    getCreateAppointmentStartTimeingAM(){
        return  cy.get('span.css-1v2gfp5').contains('AM')
    }
    getCreateAppointmentEndTime(){
        return cy.get('div.css-1bn53lx').eq(2)
    }
    getCreateAppointmentEndTimeing(){
        return cy.get('[aria-label="6 hours"]')
    }
    getCreateAppointmentEndTimeingPM(){
        return  cy.get('span.css-1v2gfp5').contains('PM')
    }
    getCreateAppointmentRemindDropdown(){
        return cy.get('.MuiFormControl-root > .MuiOutlinedInput-root > #demo-simple-select')
    }
    getCreateAppointmentRemindDropdownDonotremindOpt(){
        return cy.get('.MuiList-root > [tabindex="0"]')
    }
    getCreateAppointmentAddDescription(){
        return cy.get('.textAreaReminder')
    }
    getCreateAppointmentAppointmentTypeDropdown(){
        return cy.get('.css-tzsjye').eq(1)
    }
    getCreateAppointmentAppointmentType(){
        return cy.get('.MuiFormControl-root > :nth-child(2) > .MuiOutlinedInput-root > #demo-simple-select').eq(0)
    }
    getCreateAppointmentAppointmentTypeOnlineOpt(){
        return cy.get('li[data-value="ONLINE"]')
    }
    getCreateAppointmentAppointmentTypeOfflineOpt(){
        return cy.get('li[data-value="OFFLINE"]')
    }
    getCreateAppointmentMeetingLink(){
        return cy.get('input[class="MuiOutlinedInput-input MuiInputBase-input css-1x5jdmq"]').eq(1)
    }
    getCreateAppointmentSaveAppointmentBtn(){
        return cy.contains('Save Appointment')
    }
    getAppointmentCheckbox(){
        return cy.get('input[name="Appointment"]')
    }
    getAppointmentAutomation(){
        return cy.get('strong')
    }
    getCreateAppointmentXBtn(){
        return cy.get('.report-wrapper > [data-testid="CloseIcon"]')
    }
    getAppointmentEditAppointmentBtn(){
        return cy.get('button.liveClsMdlViewActionEditBtn ')
    }
    getAppointmentDeleteAppointmentBtn(){
        return cy.get('button.liveClsMdlViewActionDeletBtn ')
    }
    getAppointmentSaveAppointmentBtn(){
        return cy.get('button.reminder_prime_btn')
    }
    getAppointmentCancelAppointmentBtn(){
        return cy.get('button.appointmentModalCancelBtn ')
    }
    getDeletePopupDeleteAppointmentBtn(){
        return cy.get('button.dlt_prime-delete')
    }
    getDeletePopupCancelAppointmentBtn(){
        return cy.get('button.dlt_outline ')
    }
    getDeletePopupXBtn(){
        return cy.get('.close-icon_delete_reminder')
    }
    getCreateAppointmentAttendeesCount(){
        return cy.get('.crtLivePplList  span')
    }
    getCreateAppointmentAdminBtn(){
        return cy.get('.MuiTab-textColorPrimary').eq(2)
    }
    getCreateAppoinmentAdminList(){
        return cy.get('[class="d-flex txtcenter"]')
    }
    getCreateAppointmentDateTextfield(){
        return cy.get('input.MuiInputBase-inputAdornedEnd').eq(0)
    }
    getCreateAppointmentStartTimeTextfield(){
        return cy.get('input.MuiInputBase-inputAdornedEnd').eq(1)
    }
    getCreateAppointmentEndTimeTextfield(){
        return cy.get('input.MuiInputBase-inputAdornedEnd').eq(2)
    }
    getCreateAppointmentLocationDropdown(){
        return cy.get(':nth-child(8) > .MuiFormControl-root > :nth-child(2) > .MuiOutlinedInput-root > #demo-simple-select')
    }
    getCreateAppointmentLocationRoomList(){
        return cy.get('li.MuiButtonBase-root')
    }
    getCreateAppointmentLocationOfficeOpt(){
        return cy.contains('office')
    }
    getCreateAppointmentStudentTab(){
        return cy.get('.MuiTab-textColorPrimary').contains('Students')
    }
    getCreateAppointmentGreadsDropDown(){
        return cy.xpath('//div[@id="grouped-select"]')
    }
    getCreateAppointmentSectionsDropDown(){
        return cy.get('[id="demo-simple-select"]').eq(0)
    }
    
    getExamLink(){
        return cy.xpath('//div[@class="calendar-popper-sub-list"]/div[.="Exam"]')
    }

    getCreateExamsDropdowns(){
        return cy.get('#demo-simple-select-helper')
    }

    getCreateExamSubjectDropdown(){
        return cy.get(':nth-child(2) > .MuiFormControl-root > .MuiOutlinedInput-root > #demo-simple-select-helper')
    }

    getCreateExamsDropdownsList(){
        return cy.get('[role="listbox"] li')
    }

    getExamCheckbox(){
        return cy.get('[name="Exam"]')
    }

    getSaveExamBtn(){
        return cy.xpath('//button[.="Save Exam"]')
    }

    getEnterExamTitleTextFieldCreateExam(){
        return cy.get('[placeholder="Enter Exam Title"]')
    }

    getAttachFileCreateExam(){
        return cy.get('[type="file"]')
    }

    getDateOfExamTextFieldCreateExam(){
        return cy.get('[placeholder="ddd d mmm, yyyy"]')
    }

    getStartEndTimeCreateExam(){
        return cy.get('[placeholder="h:mm (a|p)m"]')
    }

    getEditExamBtn(){
        return cy.xpath('//button[.="Edit Exam"]')
    }

    getDeleteExamBtn(){
        return cy.xpath('//button[.="Delete"]')
    }

    getDeleteExamConfrmBtn(){
        return cy.xpath('//button[.="Delete Exam"]')
    }

    getExamTypeCreateExam(){
        return cy.get('[id="demo-simple-select"]')
    }

    getExamTextYourCalender(){
        return cy.get('[class="md-custom-event-wrapper"] span')
    }

    getExamTitleTextEditExam(){
        return cy.get('[class="view_reminder-tittle"]')
    }

    getAmPmTimeCreateExam(){
        return cy.get('[type="button"] span[class="MuiTypography-root MuiTypography-caption css-1v2gfp5"]')
    }

    getDateCreateExam(){
        return cy.xpath('//div[@class="PrivatePickersSlideTransition-root css-dhopo2"]//button[contains(@class,"MuiButtonBase-root MuiPickersDay-root MuiPickersDay-dayWithMargin")]')
    }

    getDateInYourCalender(){
        return cy.xpath('//div[contains(@class,"mbsc-calendar-table-active")]//div[contains(@class,"mbsc-calendar-cell mbsc-calendar-day mbsc-windows mbsc-ltr mbsc-calendar-day-marked")]')
    }
}
module.exports=new AdminCalenderHomePage()