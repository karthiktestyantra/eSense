/// <reference types="Cypress"/>

import IndexPage from "../../../support/pageObjects2/IndexPage";
import LoginPageAdmin from "../../../support/pageObjects2/LoginPageAdmin";
import AdminBasicInfoPage from "../../../support/pageObjects2/AdminBasicInfoPage";
import AdminDepartmentsPage from "../../../support/pageObjects2/AdminDepartmentsPage";
import AdminGradesPage from "../../../support/pageObjects2/AdminGradesPage";
import AdminInfrastructurePage from "../../../support/pageObjects2/AdminInfrastructurePage";
import AdminAccountsPage from "../../../support/pageObjects2/AdminAccountsPage";

const ip = new IndexPage();
const lpa = new LoginPageAdmin();
const abip = new AdminBasicInfoPage();
const adp = new AdminDepartmentsPage();
const agp = new AdminGradesPage();
const aip = new AdminInfrastructurePage();
const aap = new AdminAccountsPage();

describe("Verify School Admin Infrastructure Functionalities", function () {
  before(function () {
    cy.visit("https://liverpool.topschool.co.in")
    cy.exec("npm cache clear --force");
    ip.getAdmin().click();
    cy.reload();
    cy.fixture("validPreSetupAdminCredentials").then(function (
      validAdminLoginData
    ) {
      this.validAdminLoginData = validAdminLoginData;
    });
  });

  beforeEach(function(){
    cy.fixture("addInfrastructure").then(function (infraData) {
      this.infraData = infraData;
    });
  });

  it("Verify that the Infrastructure should display following details  such as Infrastructure Name, Floors, Description and Rooms", function () {
    lpa.getLoginTitle().should("have.text", "Hello Admin");
    cy.title().should("contain", "Top School");
    cy.login(
      this.validAdminLoginData.username,
      this.validAdminLoginData.password
    );
    cy.wait(1000);
    abip.getFourthCarouselIcon().click({ force: true });
    aip.getStepDContent().should("have.text", "D");
    aip.getInfrastructureColumnTitle().should("be.visible");
    aip.getFloorColumnTitle().should("be.visible");
    aip.getDescriptionColumnTitle().should("be.visible");
    aip.getRoomsColumnTitle().should("be.visible");
  });

  it("Verify that the Admin should be able fill the infrastructure details and able to add the details to the backend by clicking Add button", function(){
    aip.getAddInfrastructureButton().click();
    aip.getInfrastructureName().click().type(this.infraData.addInfrastructureName);
    aip.getNoOfFloors().click().type(this.infraData.addNoOfFloor);
    aip.getInfrastructureDescription().click().type(this.infraData.addInfrastructureDescription);
    aip.getAddInfrastructureButtonInPopup().click();
    cy.wait(1000);
    aip.getInfrastructureList().should('contain',this.infraData.addInfrastructureName);
    aip.getInfrastructureDeleteIcon().click();
    aip.getDeleteInfrastructureButton().should("be.visible");
    aip.getDeleteInfraCancelButton().should("be.visible");
    aip.getDeleteInfraCancelButton().click({force:true});
  });

  it("Verify that for each Infrastructure entry, Provision should be given for Add Room, Edit and Delete icons", function () {
    aip.getRowcounts().each((ele, index, $list) => {
      cy.wrap(ele).get(aip.getEditIconsList()).should("be.visible");
      cy.wrap(ele).get(aip.getDeleteIconsList()).should("be.visible");
      let getRowcounts = ele.length;
      cy.log(getRowcounts);
    });
  });

  it("Verify that the Add Room pop up should be displayed by clicking on + Add room option", function () {
    aip.getAddRoomsOption().click();
    aip.getAddRoomPopupTitle().should("have.text", "Add Room");
  });

  it("Verify that the Add Room pop up should have Room Name *, Floor Level, Description, Cancel, Add Room Button and close icon", function () {
    aip.getAddRoomPopupRoomName().should('be.visible')
    aip.getAddRoomPopupFloorLevel().should('be.visible');
    aip.getAddRoomPopupGrade().should('be.visible');
    aip.getAddRoomPopupDescription().should('be.visible');
    aip.getAddRoomPopupAddRoomButton().should('be.visible');
    aip.getAddRoomPopupCancelButton().should('be.visible');
    aip.getAddRoomPopupCloseIcon().should('be.visible');
  });

  it("Verify that the Cancel button should close the Add Room pop up", function () {
    aip.getAddRoomPopupCancelButton().click();
  });

  it("Verify that the close icon should close the Add Room pop up", function () {
    aip.getAddRoomsOption().click();
    aip.getAddRoomPopupCloseIcon().click();
  });


  it("Verify that the Delete Infrastructure pop up should be displayed with options Delete Infrastructure and Cancel by clicking the Delete Infrastructure icon", function () {
    aip.getInfrastructureDeleteIcon().click();
    aip.getDeleteInfrastructureButton().should("be.visible");
    aip.getDeleteInfraCancelButton().should("be.visible");
  });


  it("Verify that the Cancel button should close the Delete Infrastructure pop up", function(){
    aip.getInfrastructureDeleteIcon().click({force:true});
    aip.getDeleteInfraCancelButton().click({force:true});
  });

  it("Verify that by Delete Infrastructure button should inactivate the Infrastructure at the backend", function(){
    let rowNum = 0;
    aip.getInfrastructureNameLists(rowNum).then((el)=>{
      let infraName = el.text();
      cy.log(infraName);
      aip.getDeleteRow(rowNum).click();
      aip.getDeleteInfrastructureButton().click({force:true});
    });
   });

  it("Verify that the Add Infrastructure pop up should be displayed by clicking on + Add Infrastructure button", function(){
    cy.wait(2000);
    aip.getAddInfrastructureButton().click();
    aip.getAddInfrastructurePopupTitle().should('have.text','Add Infrastructure');
  });

  it("Verify that the Add Infrastructure pop up should have Infrastructure Name *, No.of Rooms, Description, Cancel, Add Button and close icon", function(){
    aip.getInfrastructureName().should("be.visible");
    aip.getNoOfFloors().should("be.visible");
    aip.getInfrastructureDescription().should("be.visible");
    aip.getAddInfrastructureButtonInPopup().should("be.visible");
    aip.getCancelInfrastructurePopup().should("be.visible");
    aip.getCloseIconPopup().should("be.visible");
  });

  it("Verify that the Cancel button should close the Add Infrastructure pop up", function(){
    aip.getCancelInfrastructurePopup().click({force:true});
  });

  it("Verify that the close icon should close the Add Infrastructure pop up", function(){
    aip.getAddInfrastructureButton().click();
    aip.getCloseIconPopup().click();
  });

  it("Verify that the Admin should be able fill the room details and able to add the details to the backend by clicking Add Room button", function(){
    aip.getAddRoomsOption().click();
    aip.getAddRoomPopupRoomName().type(this.infraData.addRoomName);
    aip.getAddRoomPopupFloorLevel().type(this.infraData.addRoomFloor);
    aip.getAddRoomPopupGrade().click();
    aip.getAddRoomPopupGradeDropdownValues().first().click({force:true});
    aip.getAddRoomPopupDescription().type(this.infraData.addRoomDescription);
    aip.getAddRoomPopupAddRoomButton().click();
  });

  it("To verify that when user clicks on 'Add Room' button the add room pop-up is dispalyed", function(){
    aip.getAddRoomsOption().click();
    aip.getAddRoomPopupTitle().should('have.text','Add Room');
});

it("To verify that Add Room pop up should have Room Name*, Floor Level, Grade, Description, Add Room and Cancel options", function(){
    aip.getAddRoomPopupRoomName().should('be.visible');
    aip.getAddRoomPopupFloorLevel().should('be.visible');
    aip.getAddRoomPopupGrade().should('be.visible');
    aip.getAddRoomPopupDescription().should('be.visible');
    aip.getAddRoomPopupAddRoomButton().should('be.visible');
    aip.getAddRoomPopupCancelButton().should('be.visible');
});

it("To verify that user should be able to enter 50 charecters into 'Room Name' text box", function(){
    aip.getAddRoomPopupRoomName().type(this.infraData.addRoomNameWithExactRange);
    aip.getRoomNameFieldLength().should('contain','50 of  50');
});

it("To verify that user should be able to enter 50 charecters into 'Floor No' text box", function(){
    aip.getAddRoomPopupFloorLevel().type(this.infraData.addRoomFloorWithExactRange);
    aip.getFloorLevelFieldLength().should('contain','50 of  50');
});

it("To verify that user should be able to select the grade from 'Grade' dropdown", function(){
  aip.getAddRoomPopupGrade().click();
  aip.getAddRoomPopupGradeDropdownValues().first().click({force:true});
});

it("To verify that user should be able to enter 100 charecters into 'Description' text box", function(){
  aip.getAddRoomPopupDescription().type(this.infraData.addRoomDescriptionWithExactRange);
  aip.getDescFieldLength().should('contain','100 of  100');
});

it("To verify that when user clicks on 'Cancel' button the pop-up is closed", function(){
  aip.getAddRoomPopupCancelButton().click();
  cy.wait(2000);
});

it("Verify that the Admin is able to delete the Infrastructure", function () {
  aip.getInfrastructureDeleteIcon().click({force:true});
  aip.getDeleteInfrastructureButton().click({force:true});
  aip.getDeleteInfrastructureMessage().should('have.text','Deleted Successfully');
  cy.wait(2000);
});

  it("Verify that clicking on Continue should be moved to Step E, Which is Admin Accounts", function(){
    aip.getContinueButton().click({force:true});
    aap.getStepEContent().should('have.text', 'E');
  });
  
});
