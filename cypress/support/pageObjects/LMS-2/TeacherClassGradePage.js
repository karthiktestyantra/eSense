class TeacherClassGradePage {
    getClassDetailsButton() {
        return cy.get('#simple-tab-0').contains('Class Details')
    }
    getTimetableButton() {
        return cy.get('#simple-tab-1').contains('Timetable')
    }
    getViewLessonPlaneButton() {
        return cy.get('[class="sessionContentTopicSectRight MuiBox-root css-0"]')
    }
    getResourceTable() {
        return cy.get('tbody tr td ')
    }
    getlessonPage() {
        return cy.contains('lesson plan 1')
    }
    getLessonPlanDropdown() {
        return cy.contains('lesson plan')
    }
    getClassGradeResourceList() {
        return cy.get('tbody tr')
    }
    getResourceCount() {
        return cy.get('div.classDetailResouceHead h1')
    }
    getDownloadBtn() {
        return cy.get('.btn-contained')
    }
    getPreviewIcon() {
        return cy.get('tbody tr td img').eq(1)
    }
    getDowloadIcon() {
        return cy.get('tbody tr td img').eq(2)
    }
    getPreviewPage() {
        return cy.get('.classResPrevSect')
    }
    getAttendenceTab() {
        return cy.get('.css-1q2h7u5').contains('Attendance')
    }
    getPresentRedioBtn() {
        return cy.get('[name="radio1"]')
    }
    getAbsentRedioBtn() {
        return cy.get('[name="radio2"]')
    }
    getAttendenceTablebody() {
        return cy.get('tbody tr')
    }
    getSaveBtn() {
        return cy.get('.attendSubBtn')
    }

    //Buiness logic

    validateResourceTable() {
        cy.wait(2000)
        this.getResourceTable().should('be.visible')
    }

    validateCountOfTotalResourcesAttached() {
        this.getClassGradeResourceList().each(($e1, index, $list) => {
            this.getResourceCount().invoke('text').length
            const divText = Cypress.$('div.classDetailResouceHead h1').text()
            const count = divText.split(" ")
            $list.length == count[0]
        })
    }
    valiadteLessonDropdown() {
        this.getLessonPlanDropdown().should('be.visible')
    }
    clickOnViewLessonPlanPage() {
        this.getViewLessonPlaneButton().click()
    }
    validateLessonPlanPage() {
        this.getlessonPage().should('be.visible')
    }
    validateClassDetailBtn() {
        this.getClassDetailsButton().should('have.text', 'Class Details')
    }
    validateTimetableBtn() {
        this.getTimetableButton().should('have.text', 'Timetable')
    }
    validateDownloadBtn() {
        this.getDownloadBtn().should('be.visible')
    }
    validatePreviewIcon() {
        cy.wait(1000)
        this.getPreviewIcon().should('be.visible')
    }
    validateDownloadIcon() {
        cy.wait(1000)
        this.getDowloadIcon().should('be.visible')
    }
    validatepreviewPage() {
        this.getPreviewIcon().click()
        this.getPreviewPage().should('be.visible')
    }
    valiadteDownlaodIndividualResources() {
        cy.wait(1000)
        this.getDowloadIcon().should('exist').and('be.visible')
    }
    clickOnAttendenceTab() {
        this.getAttendenceTab().click()
    }
    validatePresentRadioBtn() {
        for (let i = 0; i < this.getPresentRedioBtn().length; i++) {
            this.getPresentRedioBtn().should('be.enabled').and('be.visible')
        }
    }
    validateAbsentRadioBtn() {
        for (let i = 0; i < this.getAbsentRedioBtn().length; i++) {
            this.getAbsentRedioBtn().should('be.enabled').and('be.visible')
        }
    }
    validateAttendenceTablebody() {
        this.getAttendenceTablebody().should('exist').and('be.visible')
    }
    validateSaveBtn() {
        this.getSaveBtn().scrollIntoView().should('be.enabled').and('be.visible')
    }

}
module.exports = new TeacherClassGradePage() 