/// <reference types="Cypress"/>

import IndexPage from "../../../support/pageObjects2/IndexPage";
import LoginPageAdmin from "../../../support/pageObjects2/LoginPageAdmin";
import AdminBasicInfoPage from "../../../support/pageObjects2/AdminBasicInfoPage";
import AdminDepartmentsPage from "../../../support/pageObjects2/AdminDepartmentsPage";
import AdminGradesPage from "../../../support/pageObjects2/AdminGradesPage";
import AdminInfrastructurePage from "../../../support/pageObjects2/AdminInfrastructurePage";
import AdminAccountsPage from "../../../support/pageObjects2/AdminAccountsPage";
import CurriculumBuilderPage from "../../../support/pageObjects2/CurriculumBuilderPage";

const ip = new IndexPage();
const lpa = new LoginPageAdmin();
const abip = new AdminBasicInfoPage();
const adp = new AdminDepartmentsPage();
const agp = new AdminGradesPage();
const aip = new AdminInfrastructurePage();
const aap = new AdminAccountsPage();
const cbp = new CurriculumBuilderPage();

describe("Verify School Admin Accounts Functionalities", function () {
  before(function () {
   // cy.visit("https://kvb.topschool.co.in/");
    cy.visit("https://liverpool.topschool.co.in")
    ip.getAdmin().click();
    cy.reload();
    cy.fixture("validPreSetupAdminCredentials").then(function (validAdminLoginData) {
      this.validAdminLoginData = validAdminLoginData;
    });
    
  });

  beforeEach(function () {
    cy.fixture("addNewAdmin").then(function (addNewAdminData) {
      this.addNewAdminData = addNewAdminData;
    });

    cy.fixture("addRoleAccount").then(function (addRoleAccountData) {
      this.addRoleAccountData = addRoleAccountData;
    });
  });

  it("Verify that the All the users created for the custom roles to be displayed with the following details - Roles, Admins, Privileges and Actions", function () {
    lpa.getLoginTitle().should("have.text", "Hello Admin");
    cy.title().should("contain", "Top School");
    cy.login(
      this.validAdminLoginData.username,
      this.validAdminLoginData.password
    );
    cy.wait(1000);
    abip.getFiveCarouselIcon().click({ force: true });
    aap.getStepEContent().should("have.text", "E");
    aap.getRolesTabRolesColumn().should("be.visible");
    aap.getRolesTabAdminColumn().should("be.visible");
    aap.getRolesTabPrivilegesColumn().should("be.visible");
    aap.getRolesTabActionsColumn().should("be.visible");
  });

  it("Verify that the Add New Role pop up should be displayed by choosing Add New button under Roles tab", function () {
    aap.getAddNewButton().click();
    aap.getAddNewRolePopupTitle().should("have.text", " Add New Role ");
  });

  it("Verify that the Add New Role pop up should be closed by clicking Cancel button", function () {
    aap.getAddNewRolePopupCancelIcon().click();
  });

  it("Verify that the Add New Role pop up should be closed by clicking Close icon", function () {
    aap.getAddNewButton().click();
    aap.getAddNewRolePopupCloseIcon().click();
  });

  it("Verify that the admin is able to create a role", function () {
    aap.getRoleAddNewButton().click();
    aap.getDesignationName().type(this.addRoleAccountData.addDesignationName);
    aap.getActionsCheckbox().then((el) => {
      cy.wrap(el).click({multiple:true});
    });
    aap.getAddRoleButton().click();
    cy.wait(2000);
  });

  it("Verify that the Edit New Role pop up should be displayed by clicking the edit icon against the created Role", function () {
    aap.getEditRoleIcon().click();
    aap.getEditRolePopupTitle().should("have.text", " Edit Role ");
  });

  it("Verify that the user has provision to edit the Designation name", function () {
    aap.getRoleDesignationName().clear().type(this.addRoleAccountData.editDesignationName);

  });

  it("Verify that the user has provision to edit the privileges in the Edit New Role", function(){
    aap.getPrivilegesCheckBoxes().check()
    aap.getEditRoleIconSaveChanges().click({ force: true });
  })

  it("Verify that the Edit New Role pop up should be closed by clicking Cancel button", function () {
    aap.getEditRoleIcon().click();
    aap.getAddNewRolePopupCancelIcon().click();
  });

  it("Verify that the Edit New Role pop up should be closed by clicking Close icon", function () {
    aap.getEditRoleIcon().click();
    aap.getAddNewRolePopupCloseIcon().click();
  });

  it("Verify that the Add New Admin pop up should be displayed by clicking Add New button under Admins tab", function () {
    aap.getAdminsTab().click({force:true});
    aap.getAddNewButton().click();
    aap.getAddAdminPopupTitle().should("have.text", "Add New Admin");
  });

  it("Verify that the Add New Admin pop up should have mandatory fields and  Continue button, Cancel button and Close icon", function () {
    aap.getAddAdminPopupFullName().should("be.visible");
    aap.getAddAdminPopupEmailAddress().should("be.visible");
    aap.getAddAdminPopupDOB().should("be.visible");
    aap.getAddAdminPopupGender().should("be.visible");
    aap.getAddAdminPopupContact().should("be.visible");
    aap.getAddAdminPopupEmpID().scrollIntoView().should("be.visible");
    aap.getAddAdminPopupSelectRole().scrollIntoView().should("be.visible");
    aap.getAddAdminPopupAddressLine1().scrollIntoView().should("be.visible");
    aap.getAddAdminPopupContinueButton().scrollIntoView().should("be.visible");
    aap.getAddAdminPopupCloseIcon().click();
  });

  it("Verify that the Add New Admin pop up should be closed by clicking Cancel button", function () {
    aap.getAddNewButton().click({ force: true });
    aap.getAddAdminPopupCancelButton().click({ force: true });
  });

  it("Verify that by clicking Add Admin should create a new admin after providing the valid details", function () {
    aap.getAddNewButton().click();
    aap.getAddAdminPopupFullName().type(this.addNewAdminData.fullName);
    let emailDetails = this.addNewAdminData.emailAddress.toString();
    let newEmailId = emailDetails.replace(/(\d+)+/g, function (match, number) {
      return parseInt(number) + 1;
    });
    cy.log(newEmailId);
    cy.readFile("cypress/fixtures/addNewAdmin.json", (err, data) => {
      if (err) {
        return console.error(err);
      }
    }).then((data) => {
      data.emailAddress = newEmailId;
      cy.writeFile("cypress/fixtures/addNewAdmin.json", JSON.stringify(data));
    });
    aap.getAddAdminPopupEmailAddress().type(this.addNewAdminData.emailAddress);
    aap.getAddAdminPopupDOB().type(this.addNewAdminData.dob);
    aap.getAddAdminPopupGender().click();
    aap.getGenderList().each(($el, index, $list) => {
      if ($el.text() === this.addNewAdminData.gender) {
        cy.wrap($el).click();
      }
    });
    aap
      .getAddAdminPopupGender()
      .should("have.text", this.addNewAdminData.gender);
    aap.getAddAdminPopupContact().type(this.addNewAdminData.contactNumber);
    aap.getAddAdminPopupEmpID().type(this.addNewAdminData.empID);
    aap.getAddAdminPopupSelectRole().click();
    aap.getSelectRoleList().each(($ele, index, $list) => {
      if ($ele.text() === this.addNewAdminData.selectRole) {
        cy.wrap($ele).click();
      }
    });
    cy.wait(2000);
    aap
      .getAddAdminPopupSelectRole()
      .should("have.text", this.addNewAdminData.selectRole);
    aap.getAddAdminPopupAddressLine1().type(this.addNewAdminData.addressLine1);
    aap.getAddAdminPopupPincode().type(this.addNewAdminData.pincode);
    cy.wait(3000);
    aap.getAddAdminPopupContinueButton().scrollIntoView().click({force:true});
    cy.wait(2000);
   //aap.getAddAdminPopupCloseIcon().scrollIntoView().click();
  });

  it("Verify that the Delete pop up should be displayed by clicking the admin which need to be deleted", function () {
    cy.wait(2000);
    cy.get('.departmentDeleteIcon').eq(0).click({ force: true });
  });

  it("Verify that the Delete pop up should have Delete Admin, Cancel button and close icon", function () {
    aap.getDeletePopupDeleteAdminButton().should("be.visible");
    aap.getDeletePopupCancelButton().should("be.visible");
    aap.getDeletePopupCloseIcon().should("be.visible");
  });

  it("Verify that the Delete pop up should be closed by clicking cancel button", function () {
    aap.getDeletePopupCancelButton().click({ force: true });
  });

  it("Verify that the Delete pop up should be closed by clicking close button", function () {
    cy.get('.departmentDeleteIcon').eq(0).click({ force: true });
    aap.getDeletePopupCloseIcon().click();
  });

 
  it("Verify that the Actions column should display the Reset Password, Edit and Delete options", function () {
    cy.wait(1000);
    aap.getRowCounts().each((ele, index, $list) => {
      cy.wrap(ele).get(aap.getSendPasswordResetIconList()).should("be.visible");
      cy.wrap(ele).get(aap.getEditIconList()).should("be.visible");
      cy.wrap(ele).get(aap.getDeleteIconList()).should("be.visible");
      let getRowcounts = ele.length;
      cy.log(getRowcounts);
    });
  });

  it("Verify that the Role column display the role of the user", function () {
    aap.getRoleColumnValues().each(($ele, index, $list) => {
      let roleList = $ele.text();
      cy.log(roleList);
    });
  });

  it("Verify that the Privilege column should display the access granted information", function () {
    aap.getPrivilegesColumnValues().each(($ele, index, $list) => {
      let privilegesList = $ele.text();
      cy.log(privilegesList);
    });
  });

  it("Verify that the Edit New Admin pop up should be displayed by clicking the edit icon against the created Admin", function () {
    aap.getEditAdminIcon().click({ force: true });
    aap.getEditAdminPopupTitle().should("have.text", "Edit Admin");
  });

  it("Verify that the Edit New Admin pop up should be closed by clicking Cancel button", function () {
    aap.getAddAdminPopupCancelButton().click({ force: true });
  });

  it("Verify that the Edit New Admin pop up should be closed by clicking Close icon", function () {
    aap.getEditAdminIcon().click({ force: true });
    aap.getEditAdminCloseIcon().click({force:true});
  });

  it("Verify that by clicking reset password against the user Should send an Email to the respective user with the password reset link in the body of the email", function () {
    aap.getSendPasswordResetIcon().click({ force: true });
    aap.getSendToUserOption().click({ force: true });
    cy.wait(1000);
    aap.getEmailSentMessage().should("contain", "Email sent successfully");
  });

  it("Verify that the admin deleted pop up should be displayed by clicking Delete Admin button", function () {
    aap.getAdminRows().then((ele) => {
      cy.log(ele.length);
      for (let i = 0; i < ele.length; i++) {
        aap.getAdminUsernames(i).then((el) => {
          cy.log(el.text());
          if (el.text() === this.addNewAdminData.fullName) {
            aap.getAdminDeleteIcon(i).click();
            aap.getDeletePopupDeleteAdminButton().click();
            aap.getDeletedAdminPopup().should("contain", " has been deleted.");
          }
        });
        aap.getAddNewButton().click({force:true});
        aap.getAddAdminPopupCancelButton().click({ force: true });
      }
    });
    aap.getRolesTab().click({force:true});
  });

  it("verify that the admin should be able to delete the role", function(){
    aap.getRolesTab().click({force:true});
    aap.getRoleRows().then((ele) => {
      cy.log(ele.length);
      for (let i = 0; i < ele.length; i++) {
        aap.getRoleNames(i).then((el) => {
          cy.log(el.text());
          if (el.text() === this.addRoleAccountData.editDesignationName) {
            aap.getRoleDeleteIcon(i).click({multiple:true});
            aap.getDeletePopupDeleteRoleButton().click({force:true});
            aap.getDeletedRolePopup().should("contain", " has been deleted.");
          }
        });
      }
    });
  });

  it("Verify that clicking on Continue should be moved to Curriculum Builder", function () {
    aap.getContinueButton().click({ force: true });
    cbp.getCBScreenTitle().should("have.text", "Curriculum builder");
  });
});
