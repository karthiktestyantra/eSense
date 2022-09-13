class TopSchoolLibraryPage {
  
  getTopSchoolLibraryTab() {
    return cy.get('button[value="content"]');
  }

  getTopSchoolLibraryPageConfirmTitle(){
    return cy.get('h3.mb-3');
  }

  getViewLessonPlan(){
    return cy.get('#simple-tabpanel-1 > .MuiBox-root > :nth-child(1) > .MuiGrid-spacing-xs-1 > :nth-child(4) > .MuiPaper-root > .MuiCardActions-root > .MuiGrid-container > .MuiGrid-grid-xs-10 > [data-testid="cntLibCardBtn_3"]')
  }

  getLessonPlanPageConfirmTitle(){
    return cy.get('p.MuiTypography-root').eq(0);
  }

  getBackArrowIcon(){
    return cy.get('svg[data-testid="ArrowBackIcon"]');
  }

  getActionIcon(){
    return cy.get('svg[data-testid="MoreVertIcon"]').eq(0);
  }

  getAddToMyPersonalCollection(){
    return cy.get('li[value="add-collection"]');
  }

  getDownloadToViewOffline(){
    return cy.get('li[value="download"]');
  }

  getVideoTab(){
    return cy.get('.MuiTabs-fixed .MuiTab-root:nth-child(2)').eq(1);
  }

  getViewVideo(){
    return cy.contains('View Video');
  }

  getRelatedVideoPageTitle(){
    return cy.contains('Related Video');
  }

  getRelatedPresentationTitle(){
    return cy.contains('Related Presentation');
  }

  getMostPopularContentCount(){
    return cy.get('p.MuiTypography-root>div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-2.css-isbt42').eq(0);
  }

  getMostPopularIndividualCardCount(){
    return cy.get('p.MuiTypography-root>div[xpath="1"]>div');
  }

}

export default TopSchoolLibraryPage;
