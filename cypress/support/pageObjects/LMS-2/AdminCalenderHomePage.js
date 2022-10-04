
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
        return cy.get('span.css-h7tmkn').contains('6')
    }
    getCreateAppointmentStartTimeingAM(){
        return  cy.get('span.css-1v2gfp5').contains('AM')
    }
    getCreateAppointmentEndTime(){
        return cy.get('div.css-1bn53lx').eq(2)
    }
    getCreateAppointmentEndTimeing(){
        return cy.get('span.css-h7tmkn').contains('6')
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
        return cy.get('.MuiFormControl-root > :nth-child(2) > .MuiOutlinedInput-root > #demo-simple-select')
    }
    getCreateAppointmentAppointmentTypeOnlineOpt(){
        return cy.get('.MuiList-root > [tabindex="0"]')
    }
    getCreateAppointmentMeetingLink(){
        return cy.get('#mui-11')
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
}
module.exports=new AdminCalenderHomePage()