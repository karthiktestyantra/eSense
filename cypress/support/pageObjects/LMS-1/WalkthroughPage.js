class WalkthroughPage{

    getLoginSuccessfulMsg(){
        return cy.get('.MuiAlert-message')
    }

    getTitle(){
        return cy.get('h2[class^="slide-title"]:visible')
    }


    getCloseIcon(){
        return cy.get('svg[data-testid="CancelIcon"]:visible')
    }

    getNextIcon(){
        return cy.get('svg[data-testid="ArrowForwardIcon"]:visible')
    }

    getcarousel(){
        return cy.get('.dot:visible')
    }

    getLogout(){
        return cy.get('.float-right')
    }
}
module.exports = new WalkthroughPage()