class AdminIndexPage {

    getAdminBtn() {
        return cy.get('button[type="button"]').eq(0);
    }

    getTeacherBtn() {
      return cy.get('button[type="button"]').eq(1);
    }

    getTitle() {
        return cy.get('div a img');
    }

    getUserName() {
      return cy.get('input[name="userName"]');
    }
  
    getPassword() {
      return cy.get('input[name="password"]');
    }
  
    getLoginBtn() {
      return cy.get('button[type="submit"]').contains("Log In");
    }
  }
  module.exports = new AdminIndexPage()