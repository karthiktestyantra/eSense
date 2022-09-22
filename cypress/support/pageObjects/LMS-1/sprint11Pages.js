class sprint11Pages {

  getTeacher() {
    return cy.get('div[class="d-flex align-items-center"]');
  }
  getLoginTitle() {
    return cy.get('.login_title');
  }
  getUserName() {
    return cy.get('input[name="userName"]');
  }

  getPassword() {
    return cy.get('input[name="password"]');
  }

  getLogin() {
    return cy.get("button[form='loginForm']");
  }

  getdashboarddetailstext() {
    return cy.get('.Dashboard_tchDshTitle__3rghy');
  }

  getmycalss() {
    return cy.get('.side-nav-list-one > :nth-child(2) > :nth-child(1) > .side-nav-dashboard > .side-nav-icon');
  }


  getsubjectscience() {
    return cy.get('[href="/teacher/classes/6/35/Grade 10 - A/57/overview"] > .content-popover > .content-popover_border');
  }

  getassessment() {
    return cy.get('#simple-tab-4');
  }

  getcreatehomebutton() {
    return cy.get('.MuiButton-root');
  }


  getscihomework() {
    return cy.get('.active > .MuiCardContent-root > .group-title-icon > .MuiGrid-container > .MuiGrid-root > .mb-0');
  }

  gethistoryhomework() {
    return cy.get('.unselected-groups > :nth-child(1) > .MuiCardContent-root > .group-title-icon > .MuiGrid-container > .MuiGrid-root > .mb-0');
  }

  gethindihomework() {
    return cy.get(':nth-child(2) > .MuiCardContent-root > .group-title-icon > .MuiGrid-container > .MuiGrid-root > .mb-0');
  }

  getcreatenewhomeworkbutton() {
    return cy.get('.MuiButton-root');
  }

  gettextwindow() {
    return cy.get('.add_homework_class-tittle');
  }

  getsavebutton() {
    return cy.get('.MuiButton-contained');
  }

  getcancelbutton() {
    return cy.get('.homework_action-container > .MuiButton-text');
  }


  createhomeworktittlebox() {
    return cy.get('#mui-15');
  }


  searchbox() {
    return cy.get('#students-search-in-table');
  }

  errormessage() {
    return cy.get('.text-center');
  }

  createhomeworkdescription() {
    return cy.get('#mui-16');
  }

  selectcalender() {
    return cy.get('#mui-21');
  }


  getcalendarbutton() {
    return cy.get('.side-nav-list-one > :nth-child(5)');
  }

  getnextweekbutton() {
    return cy.get('.cal-header-next > .mbsc-button-icon > svg');
  }

  getclassincalendar() {
    return cy.get('.md-custom-event-title');
  }

  getstartsessionbutton() {
    return cy.get(':nth-child(4) > .MuiButton-root');
  }


  gettimetablebutton() {
    return cy.get('#simple-tab-1');
  }

  gettimetablevaue() {
    return cy.get('.MuiTypography-root > .d-flex');
  }


  getmilestonebutton() {
    return cy.get('#simple-tab-2');
  }

  getmilestonevalue() {
    return cy.get(':nth-child(3) > .MuiPaper-root > .MuiCardHeader-root > .MuiCardHeader-content > .MuiCardHeader-subheader');
  }

  getlibrarybutton() {
    return cy.get('#simple-tab-3');
  }

  getlibraryvalue() {
    return cy.get('.mb-3 > strong');
  }

  getwhiteboardbutton() {
    return cy.get('#simple-tab-4');
  }

  getwhiteboardvalue() {
    return cy.get('.button-wrapper > :nth-child(3)');
  }

  getwhiteboardsquare() {
    return cy.get('[title="Rectangle — R or 2"] > .ToolIcon__icon > svg > path');
  }

  getwhiteboardiamond() {
    return cy.get('[title="Diamond — D or 3"] > .ToolIcon__icon');
  }

  getwhiteboardround() {
    return cy.get('[title="Ellipse — E or 4"] > .ToolIcon__icon');
  }

  gettogglebutton() {
    return cy.get('input.MuiSwitch-input');
  }

}

module.exports = new sprint11Pages() 