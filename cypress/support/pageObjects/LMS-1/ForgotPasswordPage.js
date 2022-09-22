class ForgotPasswordPage{

    getForgotPasswordText(){
        return cy.get('.login_title')
    }

    getEmail(){
        return cy.get('.MuiOutlinedInput-input')
    }

    getSendResetInstructionsButton(){
        return cy.get('.btn')
    }

    getErrorMessage(){
        return cy.get('.text-danger')
    }
}

module.exports = new ForgotPasswordPage()


