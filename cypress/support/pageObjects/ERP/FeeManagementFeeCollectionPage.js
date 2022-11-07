class FeeManagementFeeCollectionPage{

    getListOfStudentName() {
        return cy.get('p.name')
    }

    getStudentSearchBtn() {
        return cy.get('input[placeholder="Search..."]')
    }

    getListOfStudentCollectFeeBtn() {
        return cy.get('p.collectFees')
    }

    getPaymentModeDropdown() {
        return cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #demo-simple-select')
    }

    getPaymentModeDropdownList() {
        return cy.get('ul.MuiMenu-list li')
    }
    
    getFeeAmtTxtField() {
        return cy.get('input[name="amount"]')
    }

    getFeeTransactionIdTxtField() {
        return cy.get('input[name="transactionId"]')
    }

    getFeeAttachFile() {
        return cy.get('input.fileUpload')
    }

    getFeeRemarksTextArea() {
        return cy.get('textarea[name="remark"]')
    }

    getFeeCollectionApplyBtn() {
        return cy.get('button[data-testid="applyBtn"]')
    }

    getFeeCollectionCancelBtn() {
        return cy.get('button[data-testid="cancelBtn"]')
    }

    getFeeCollectionAmountTxt() {
        return cy.get('input[name="amount"]')
    }

    getFeeCollectionBankNameTxt() {
        return cy.get('div[aria-labelledby="bank-name demo-simple-select"]')
    }

    getFeeCollectionChaqueNumberTxt() {
        return cy.get('input[name="chequeDdNumber"]')
    }

    getFeeCollectionChaqueStatusTxt() {
        return cy.get(':nth-child(6) > .MuiFormControl-root > .MuiInputBase-root > #demo-simple-select')
    }

    getFeeCollectionNameTxt() {
        return cy.get('input[name="name"]')
    }

    getFeeCollectionTransactionIDTxt() {
        return cy.get('[name="transactionId"]')
    }

    getFeeCollectionRemarksTxt() {
        return cy.get('[id="outlined-area-basic"]')
    }
}
module.exports = new FeeManagementFeeCollectionPage()