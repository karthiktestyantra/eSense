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
    getHomeworkTab() {
        return cy.contains('Homework')
    }
    getHomeworkpageTitle() {
        return cy.get('div.homeworkContentSect h3')
    }
    getHomeworkPreviewIcon() {
        return cy.get('.vc_resources_dwn_btn img').eq(0)
    }
    getHomeworkDownloadIcon() {
        return cy.get('.vc_resources_dwn_btn img').eq(1)
    }
    getHomeworkTitle() {
        return cy.get('.homeworkDetails h3')
    }
    getHomeworkDate() {
        return cy.get('.date')
    }
    getHomeworkPreviewPage() {
        return cy.get('.add_homework_class-content')
    }
    getHomeworkDownloadAllBtn() {
        return cy.contains('Download All')
    }

    //Buiness logic

    validateResourceTable() {
        cy.wait(3000)
        this.getResourceTable().should('be.visible')
    }

    validateCountOfTotalResourcesAttached() {
        this.getClassGradeResourceList().each(($e1, index, $list) => {
            const divText = Cypress.$('div.classDetailResouceHead h1').text()
            const count = divText.split(" ")
            $list.length == count[0]
        })
    }
    valiadteLessonDropdown() {
        this.getLessonPlanDropdown().should('be.visible')
    }
    clickOnViewLessonPlanPage() {
        this.getViewLessonPlaneButton().click({ force: true })
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
    clickOnHomeworkTab() {
        this.getHomeworkTab().click()
    }
    valiadteHomeworkPageTitle() {
        this.getHomeworkpageTitle().should('contain', " Homeworks Attached")
    }
    validateCountOfHomework() {
        const divText = Cypress.$('div.homeworkContentSect h3').text()
        const count = divText.split(" ")
        cy.log(count[0])
    }
    validateHomeworkPreviewIcon() {
        this.getHomeworkPreviewIcon().should('exist').and('be.visible')
    }
    validateHomeworkDownloadIcon() {
        this.getHomeworkDownloadIcon().should('exist').and('be.visible')
    }
    validateHomeworkTitle() {
        this.getHomeworkTitle().should('be.visible')
    }
    validateHomeworkDate() {
        this.getHomeworkDate().should('be.visible')
    }
    validateHomeworkAttachement() {
        const divText = Cypress.$('.attachment span').text()
        const count = divText.split(" ")
        cy.log(count[0])
    }
    clickOnHomeworkPreviewIcon() {
        this.getHomeworkPreviewIcon().click()
    }
    validateHomeworkPreviewPage() {
        this.getHomeworkPreviewPage().should('be.visible')
    }
    createResource(filePath) {
        if (cy.get('.view_classes_count').eq(0).invoke('text') == 0) {
            cy.get('[type="file"]').attachFile(filePath)
        }
    }
    createHomework() {
        if (cy.get('.view_classes_count').eq(2).invoke('text') == 0) {
            cy.get('.noteAttViewBtn').eq(1).click()
            cy.get('div.css-1v4ccyo').eq(0).type('Automation Test')
            cy.get('[placeholder="dd/mm/yyyy"]').click({ force: true })
            cy.wait(2000)
            cy.get('.css-sldnni').click({ force: true })
            cy.wait(2000)
            cy.contains('2024').click({ force: true })
            cy.wait(2000)
            cy.contains('24').click({ force: true })
            cy.wait(2000)
            cy.get('#mui-12').click({ force: true })
            cy.wait(2000)
            cy.get('[class="MuiTypography-root MuiTypography-caption css-1v2gfp5"]').eq(1).click({ force: true })
            cy.wait(2000)
            cy.get('body').click({ force: true })
            cy.wait(2000)
            cy.get('div.css-qiwgdb').click({ force: true })
            cy.wait(2000)
            cy.contains('30-60 mins').click({ force: true })
            cy.wait(2000)
            cy.contains('Save').click({ force: true })
        }
    }
}
module.exports = new TeacherClassGradePage() 