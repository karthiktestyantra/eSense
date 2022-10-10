class TeacherLiveClassesPage{

    getLiveClassesTab(){
        return cy.get('button.MuiTab-textColorPrimary').contains("Live Classes")
    }
    getCreateNewLiveClassBtn(){
        return cy.get('button.btn-add-group').contains("Create New Live Class")
    }
    getCreateLiveClassTitleTxt(){
        return cy.get('div.classPadd h1')
    }
    getClassDrpDwn(){
        return cy.get('div.MuiInputBase-colorPrimary div.MuiSelect-select').eq(0)
    }
    getSubDrpDwn(){
        return cy.get('div.MuiInputBase-colorPrimary div.MuiSelect-select').eq(1)
    }
    getClassTypeDrpDwn(){
        return cy.get('div.MuiInputBase-colorPrimary div.MuiSelect-select').eq(2)
    }
    getDrpdwnLst(){
        return cy.get('div ul li.MuiMenuItem-gutters:visible')
    }
    getEnterClassTitleFld(){
        return cy.get('input[placeholder="Enter Class Title"]')
    }
    getAttendeeDrpDwn(){
        return cy.get('div.crtLiveInputText p')
    }
    getAttendeeLst(){
        return cy.get('.crtLiveSelStdPrfListItem')
    }
    getAttendeeLstCheckBx(){
        return cy.get('div.crtLiveSelStdPrfListItem input[type="checkbox"]')
    }
    getAttendeeFldCloseBtn(){
        return cy.get('button.crtLiveAddMoreBtn')
    }
    getDateFld(){
        return cy.get('div.date')
    }
    getLastDateInCalendarPopup(){
        return cy.get('button.MuiPickersDay-dayWithMargin').last()
    }
    getStartTimePicker(){
        return cy.get('input[placeholder="h:mm (a|p)m"]').eq(0)
    }
    getPMStartTime(){
        return cy.get('button.MuiButtonBase-root span.MuiTypography-caption').contains("PM")
    }
    getAMStartTime(){
        return cy.get('button.MuiButtonBase-root span.MuiTypography-caption').contains("AM")
    }
    getEndTimePicker(){
        return cy.get('input[placeholder="h:mm (a|p)m"]').eq(1)
    }
    getClockTimer(){
        return cy.get('div[aria-label="Select hours. No time selected"] span[role="option"]')
    }
    getRemindDrpDwn(){
        return cy.get('div.rememberSelectField')
    }
    getAddDescriptionTxtFld(){
        return cy.get('textarea.MuiInputBase-inputMultiline').eq(0)
    }
    getDescriptionAlertMsg(){
        return cy.get('span[role="alert"]')
    }
    getMeetingLnkFld(){
        return cy.get('div.schAdminInputCtr')
    }
    getSaveLiveClassBtn(){
        return cy.get('button[form="classForm"]')
    }
    getCreatedClassesLst(){
        return cy.get('div.todayTextTile h6')
    }
    get
    
}
module.exports = new TeacherLiveClassesPage() 