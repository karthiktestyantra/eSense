class AdminInfrastructurePage {
    
    getStepDContent(){
        return cy.get('.circle span').eq(0);
    }

    getInfrastructureColumnTitle(){
        return cy.get('.infra-table-head-out .w-20');
    }

    getFloorColumnTitle(){
        return cy.get('.infra-table-head-out .w-10');
    }

    getDescriptionColumnTitle(){
        return cy.get('.infra-table-head-out .w-30').eq(0);
    }

    getRoomsColumnTitle(){
        return cy.get('.infra-table-head-out .w-30').eq(1);
    }

    getAddRoomsOption(){
        return cy.get('.rooms-btn-out').eq(0);
    }

    getAddRoomPopupTitle(){
        return cy.get('.header-row .font-cls');
    }

    getAddRoomPopupRoomName(){
        return cy.get('[name = "buildingRoomName"]');
    }

    getAddRoomPopupFloorLevel(){
        return cy.get('[name = "floor"]');
    }

    getAddRoomPopupGrade(){
        return cy.get('#demo-simple-select');
    }

    getAddRoomPopupGradeDropdownValues(){
        return cy.get('ul li');
    }

    getAddRoomPopupDescription(){
        return cy.get('input[name = "description"]');
    }

    getAddRoomPopupAddRoomButton(){
        return cy.get('.add-btn');
    }

    getAddRoomPopupCancelButton(){
        return cy.get('.cancel-btn');
    }

    getAddRoomPopupCloseIcon(){
        return cy.get('img.curPointEvent');
    }

    getRoomNameFieldLength(){
        return cy.get('span.textAreaWrd').eq(0);
    }

    getFloorLevelFieldLength(){
        return cy.get('span.textAreaWrd').eq(1);
    }

    getDescFieldLength(){
        return cy.get('span.textAreaWrd').eq(2);
    }

    getRoomDeleteIcon(){
        return cy.get('.delete-out');
    }

    getInfraEditIcon(){
        return cy.get('.rooms-edit-out');
    }

    getDeleteRoomButton(){
        return cy.get('div.delete-button');
    }

    getEditInfraSaveChangesButton(){
        return cy.get('div.edit-btn span');
    }

    getEditInfraUpdatedMessage(){
        return cy.get('.MuiAlert-message');
    }

    getInfrastructureDeleteIcon(){
        return cy.get('.rooms-delete-out').eq(0);
    }

    getDeleteInfrastructureButton(){
        return cy.get('.delete-button');
    }

    getDeleteInfrastructureMessage(){
        return cy.get('.MuiAlert-message.css-1w0ym84');
    }
  
    getDeleteInfraCancelButton(){
        return cy.get('.cancel-button > span');
    }

    getInfrastructureList(){
        return cy.get('.infra-table-container');
    }

    getInfrastructureNameLists(rowNumber){
        return cy.get('.infra-name-font').eq(rowNumber);
    }

    getEditIconsList(){
        return ".rooms-edit-out";
    }

    getDeleteIconsList(){
        return ".rooms-delete-out";
    }

    getDeleteRow(rowNum){
        return cy.get(".rooms-delete-out").eq(rowNum);
    }

    getRowcounts(){
        return cy.get('.infra-table-row-out')
    }

    getAddInfrastructureButton(){
        return cy.get('.add-infra-btn span')
    }

    getAddInfrastructurePopupTitle(){
        return cy.get('.add-infra-popup-container .font-cls')
    }

    getInfrastructureName(){
        return cy.get('[name="buildingName"]')
    }

    getNoOfFloors(){
        return cy.get('[name="floors"]')
    }

    getInfrastructureDescription(){
        return cy.get('input[name="description"]')
    }
    getAddInfrastructureButtonInPopup(){
        return cy.get('.add-btn')
    }

    getCancelInfrastructurePopup(){
        return cy.get('.cancel-btn')
    }

    getCloseIconPopup(){
        return cy.get('.curPointEvent')
    }

    getContinueButton(){
        return cy.get(".continue-btn")
    }

}
export default AdminInfrastructurePage