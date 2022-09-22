class EnterOTPPage{

    getVerify(){
        return cy.get('.MuiButton-root').eq(0)
    }

    getResendOTP(){
        return cy.get('.MuiButton-root').eq(1)
    }

    getOTPInputbox(otpNumber){
        return cy.get('.otpInput').eq(otpNumber)
    }

    getDisplayedOTPNumber(){
        return cy.get('.font-weight-bold')
    }

}

module.exports = new EnterOTPPage()