class RescheduleClassPage {

  getRescheduleClassPopupTitle() {
    return cy.get(".res_title_popup");
  }

  getRescheduleReason() {
    return cy.get(".MuiFormControl-root>.res_subtitle");
  }

  getSelectDate() {
    return cy.get('input[placeholder="dd mmm yyyy"]');
  }

  getStartTime() {
    return cy.get('input[placeholder="h:mm (a|p)m"]').eq(0);
  }

  getEndTime() {
    return cy.get('input[placeholder="h:mm (a|p)m"]').eq(1);
  }

  getSendRequest(){
      return cy.get("button[type='submit']");
  }

  getCloseIcon(){
      return cy.get('svg[data-testid="CloseIcon"]').eq(1);
  }



}

export default RescheduleClassPage;
