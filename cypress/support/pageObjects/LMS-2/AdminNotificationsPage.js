class AdminNotificationsPage{

    getViewResourcesLink(){
        return cy.get('div.notmdlunused button')
    }

    getUnutilizedResources(){
        return cy.get('div.content-card')
    }

    getUnutilizedResourcesDescriptionTxt(){
        return cy.get('[class="subtitle mt-3 w-50"]')
    }

    getUnutilizedResourcesConut(){
        return cy.get('.text-size')
    }

    getNotificationFilterDropDown(){
        return cy.get('input[class="MuiSelect-nativeInput"]')
    }

    getUnutilizedResourcesSubject(){
        return cy.get('div.card-subject')
    }
    getUnutilizedResourcesGrade(){
        return cy.get('div.card-tags div').eq(0)
    }

    getUnutilizedResourcesType(){
        return cy.get('div.card-tags div').eq(1)
    }

    getUnutilizedResourcesDeleteIcon(){
        return cy.get('button.icon_bg span.MuiTouchRipple-root')
    }
}

module.exports = new AdminNotificationsPage();