class AdminGradesAndStreamPage {

    getGradePageTitle() {
        return cy.get('div.header-font-cls')
    }
    getEditIcnsLst() {
        return cy.get('button.departmentEditIcon')
    }
    getStreamNameTxtFld() {
        return cy.get('input[type="text"]').eq(0)
    }
    getStreamGradeDrpDwn() {
        return cy.get('input[type="text"]').eq(1)
    }
    getDeptcancelBtn() {
        return cy.get('button.deptCancelbtn')
    }
    getAddStreamBtn() {
        return cy.get('button.addDepartmentPopup')
    }
    getGradesLstInGradeDrpDwn() {
        return cy.get('#checkboxes-listbox')
    }
    getmandatorySubdrpdwn() {
        return cy.get('div.MuiInputBase-adornedEnd input[type="text"]').eq(1)
    }
    getMandatorySubLst() {
        return cy.get('#checkboxes-tags-demo-listbox')
    }
    getSubmitBtnInAddStream() {
        return cy.get('button[type="submit"]:visible').contains("Add")
    }
    getStreamLst() {
        return cy.get('tbody tr td.MuiTableCell-body:nth-child(1)')
    }
    getDltBtnLst() {
        return cy.get('button.departmentDeleteIcon')
    }
    getDltBtnInDltSect() {
        return cy.get('button.deptDeletebtn')
    }
    getGradesAndSubTab() {
        return cy.get('button[role="tab"]').contains("Grades and subject")
    }
    getGradescheckBxInGradesAndSub() {
        return cy.get('input[type="checkbox"]').eq(0)
    }

}
module.exports = new AdminGradesAndStreamPage() 