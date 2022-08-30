class LoginPage {

  getLoginTitle(){
    return cy.get('.login_title');
  }
  getUserName() {
    return cy.get('input[name="userName"]');
  }

  getPassword() {
    return cy.get('input[name="password"]');
  }

  getRememberMe() {
    return cy.get(".PrivateSwitchBase-input");
  }

  getForgotPassword() {
    return cy.contains('Forgot password?');
  }

  getLogin() {
    //return cy.get("button[form='loginForm']");
    return cy.get('.prime_btn');
  }

  getLoginWithPhoneNumber() {
    return cy.get("button.outline_btn");
  }

  getEmailErrorMessage() {
    return cy.get(".text-danger").eq(1);
  }

  getPasswordErrorMessage() {
    return cy.get(".text-danger").eq(2);
  }

  getLoginErrorMessage(){
    return cy.get(".text-danger");
  }
}
export default LoginPage;
