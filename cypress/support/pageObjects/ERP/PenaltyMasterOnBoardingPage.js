class PenaltytMasterOnBoardingPage {

    getPresetupPenaltyMasterContinueBtn() {
        return cy.get('button.continue-btn').contains("Continue")
    }

    getPenaltyMasterTitleTxt() {
        return cy.get('p.title')
    }

    getPenaltyMasterAddBtn() {
        return cy.get('button.MuiButtonBase-root').contains('Add New')
    }

    getPenaltyNameTextField() {
        return cy.get('input[name="penaltyName"]')
    }

    getPenaltyTypeDropdown() {
        return cy.get('div.MuiSelect-select').eq(0)
    }


}
module.exports = new PenaltytMasterOnBoardingPage()