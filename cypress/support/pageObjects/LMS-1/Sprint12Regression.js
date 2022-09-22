class Sprint12Regression{

    getAdminSchoolMenu(){
        return cy.get('.side-nav-icon > img').eq(2);
    }

    getAdminCurriculumBuilderQuickLink(){
        return cy.get('.StudentSchool_schQicLikSectCard__F0UPY:nth-child(4)');
    }

    getViewDetailsButton(id){
        return cy.get('.details-button').eq(id);
    }

    getViewDetailsEditIcon(){
        return cy.get('.editBtnBasicInfo').eq(0);
    }

    getCreateCurriclumGoBackButton(){
        return cy.get('.crtCurrTryBckBtn');
    }

    getCurriclumGoBackButton(){
        return cy.get('.post-setup-bi-back-cls');
    }

    getStartWithChapter(){
        return cy.get('.MuiButton-root').eq(2);
    }

    getChapterNameField(){
        return cy.get('#mui-11');
    }

    getCalendarWorkloadToggle(){
        return cy.get('.MuiSwitch-root');
    }

    getCurriculumRows(){
        return cy.get('tbody tr.MuiTableRow-root');
    }

    getStatusRows(){
        return cy.get('tr td:nth-child(4)');
    }

    getColumns(){
        return cy.get('tr:nth-child(1) td');
    }

    getCell(row,col){
        return cy.get(`tr:nth-child(${row}) td:nth-child(${col})`);
    }

    getPendingClass(index){
        return cy.get('div.Pending').eq(index);
    }

}

module.exports = new Sprint12Regression() 
