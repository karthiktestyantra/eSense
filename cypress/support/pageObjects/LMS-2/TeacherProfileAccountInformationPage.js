class TeacherProfileAccountInformationPage {

    getAccountAndSupportTitle() {
        return cy.xpath('//p[.=" Account & Support"]')
    }

    getBasicAndAcademicDetailsTab() {
        return cy.get('[class*="ensese-student-tab"] button')
    }

    getClassTeacherForGrade(grade) {
        return cy.xpath("//div[text()=\"" + grade + "\"]/..//div/span[text()=' Class Teacher?']")
    }

    getTextFieldsBasicAndAcademicDetails() {
        return cy.get('[type="text"]')
    }

    getRequestChangePopUpBody() {
        return cy.get('.model-content')
    }

    getRequestChangePopUpCloseIcon() {
        return cy.get('[data-testid="CloseIcon"]')
    }

    getTellUsBitMoreTextFieldRequestChangePopUp() {
        return cy.get('#rc_content')
    }

    getSupportAndFeedbackTab() {
        return cy.get('[href="/teacher/account-info/support"]')
    }

    getTicketDescriptionText() {
        return cy.xpath('//div[@class="supportAndFeedTable"]//td/div[text()]')
    }

    getRequestSentSuccessMsg() {
        return cy.xpath('//div[@class="report-content"]/p')
    }

    getSubmitBtnRequestChangePopUp() {
        return cy.get('[type="submit"]')
    }

    getWordsCountTextRequestChangePopUp() {
        return cy.get('.words_count')
    }

    getRequestChangeBtnInBasicAndAcademicDetails() {
        return cy.get('[class*="clickbtn"]')
    }

    getRequestChangePopUpTitle() {
        return cy.xpath('//h1[.="Request Change"]')
    }

    getGradeTextFieldAcademicDetails() {
        return cy.xpath('//input[@type="text"]/preceding::div[@title]/label[.="Grade"]')
    }

    getQualificationNameDetails() {
        return cy.get('[class*=qualification-added]')
    }

    getQualificationDetailsViewFileBtn() {
        return cy.get('[class*=qualification-added]').contains('View File')
    }

    getQualificationDetailsPdfFile() {
        return cy.get('[data-testid="pdf-view"]')
    }

    getQualificationDetailsPdfFileCloseIcon() {
        return cy.get('[data-testid="CloseIcon"]')
    }

    getProfilePictureBasicDetails() {
        return cy.get('[type="text"]')
    }

    getEmergencyContactsBody() {
        return cy.xpath('//h5[.="Emergency Contact(s) "]/../parent::div')
    }

    //Business Logic

    verifyPersonalDetailsFieldsArePresent() {
        cy.isVisible(this.getProfilePictureBasicDetails())
        cy.get('body')
            .children()
            .should('contain', "Full Name")
            .and('contain', "Email Address")
            .and('contain', "Date of Birth")
            .and('contain', "Gender")
            .and('contain', "Contact Number")
    }

    verifyEmergencyContactDetailsFieldsArePresent() {
        this.getEmergencyContactsBody()
            .children()
            .should('contain', "Contact 1")
            .and('contain', "Full Name")
            .and('contain', "Phone Number")
            .and('contain', "Contact 2")
    }

    verifyAcademicDetailsFieldsArePresent() {
        cy.get('body')
            .children()
            .should('contain', "Academic Details")
            .and('contain', "Qualification Details")
            .and('contain', "Grade Selection")
            .and('contain', "Sections")
            .and('contain', "Subjects")
    }
}
module.exports = new TeacherProfileAccountInformationPage() 