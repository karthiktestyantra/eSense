class RequestChange {

    getChangeDropdown() {
        return cy.get('#rc_screen')
    }

    getIssueTextBox() {
        return cy.get('#rc_content')
    }

    getCloseIcon() {
        return cy.get('.model-wrapper > [data-testid=CloseIcon] > path')
    }

    getSendRequest() {
        return cy.get('button[type="submit"]')
    }

    getErrorMessage() {
        return cy.get('.text-danger.mb-3')
    }

    getSuccessfulMessage() {
        return cy.get('.request_success')
    }

    getSuccessfulMessageScreenCloseIcon() {
        return cy.get('.model-wrapper > [data-testid=CloseIcon]')
    }

    getRequestType() {
        return cy.get('.request_para')
    }
}

module.exports = new RequestChange() 