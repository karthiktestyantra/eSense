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
    
}
module.exports = new TeacherLiveClassesPage() 