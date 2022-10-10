class TeacherViewLiveClassesPage {

    getTeacherMyclassImg() {
        return cy.get('div.side-nav-icon img[src="/static/media/myClasses.e2b87f30.svg"]')
    }

    getTeacherMyclassGrade() {
        return cy.get('div.card_roman_txt')
    }

    getTeacherLiveClassesTab() {
        return cy.get('button.MuiButtonBase-root').contains('Live Classes')
    }

    getTeacherListOfLiveClasses() {
        return cy.get('div.markAttCard')
    }

    getTeacherListOfUpcommingClasses() {
        return cy.get('div.todayTextTile p')
    }

    getTeacherListOfUpcommingClassesHeaderTxt() {
        return cy.get('.markAttTitleSect > :nth-child(1) > .MuiTypography-root')
    }

    getTeacherListOfViewBtn() {
        return cy.get('div.markAttCntAction p').eq(0)
    }

    getTeacherLiveclassesTitle() {
        return cy.get('div.todayTextTile h6.MuiTypography-h6').eq(0)
    }

    
    getTeacherLiveclassesPopupTitle() {
        return cy.get('h1.class_title_popup')
    }

    getTeacherLiveclassesDeletePopupBtn() {
        return cy.get('button.liveClsMdlViewActionDeletBtn:visible')
    }

    getTeacherLiveclassesDate() {
        return cy.get('div.markAttTimeSect h6.MuiTypography-h6').eq(0)
    }

    


}
module.exports = new TeacherViewLiveClassesPage() 