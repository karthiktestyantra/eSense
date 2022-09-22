class IndexPage {
  getAdmin() {
    return cy.get("div.home-btn-container button.MuiButton-root").eq(0);
  }
  
  getTeacher() {
    return cy.get("div.home-btn-container button.MuiButton-root").eq(1);
  }

  getStudent() {
    return cy.get("div.home-btn-container button.MuiButton-root").eq(2);
  }
}
module.exports = new IndexPage()