class MainAdminIndexPage {

      getTitle() {
          return cy.get('div a img');
      }
  
      getUserName() {
        return cy.get('input[name="userName"]');
      }
    
      getPassword() {
        return cy.get('input[name="password"]');
      }
    
      getContinueBtn() {
        return cy.get('button[type="submit"]');
      }
    }
    module.exports = new MainAdminIndexPage()