class LoginWithPhoneNumberPage{

    getMobileNumberPageText(){
        return cy.get('.login_title')
    }

    getMobileNumber(){
        return cy.get('.MuiOutlinedInput-input')
    }

    getGoBack(){
        return cy.get('.back_txt')
    }

    getLogin(){
        return cy.get('.btn')
    }

    getErrorMessage(){
        return cy.get('.text-danger')
    }
}

export default LoginWithPhoneNumberPage
