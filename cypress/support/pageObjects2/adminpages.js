class adminpages{

    getadminbutton(){
        return cy.get('.home-btn-container > :nth-child(2)');
    }

    verifydashboard(){
        return cy.get('p.Dashboard_tchDshTitle__3qlHU');
    }
    
    usersbutton(){
        return cy.get(':nth-child(2) > a > :nth-child(1)');
    }


   studentbutton(){
       return cy.get('#simple-tab-1');
   }

  workloadbutton(){
      return cy.get('.adminRoleseltFild > .MuiButton-root');
  }


  workloadverify(){
      return cy.get('.viewTchWrkLodTitle');
  }
  
  workloadclosebutton(){
      return cy.get('[data-testid="CloseIcon"] > path');
  }
  deacitivateaccountclick(){
      return cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(2)');
  }
  
  deavtivatebutton(){
      return cy.get('.my-3 > .MuiButton-root');
  }

  activatedeactiveaccountclick(){
      return cy.get('.my-3 > .MuiButton-root');
  }
  
  activatebutton(){
      return cy.get('.stdPrfDeactiSect > .MuiButton-root');
  }
  
  de_activateaccountclick(){
      return cy.get('.btns > .MuiButton-text');
  }

  editbutton(){
      return cy.get('.MuiButton-contained');
  }

  maxworkhours(){
      return cy.get('.w-50 > .MuiOutlinedInput-root > #demo-simple-select');
  }

 selecthours(){
    //  return cy.get('[data-value="16"]');
    return cy.get('[data-value="8"]');
 }

 getWorkingHours(){
     return cy.get('.tchWrkLodList > :nth-child(1) > .MuiFormControl-root > .MuiOutlinedInput-root > #demo-simple-select');
 }
  
 getWorkingHoursDropdown(){
    return cy.get('ul li');
}

 updatebutton(){
     return cy.get('.MuiButton-contained');
 }

 getEmailSentMessage(){
     return cy.get('.MuiAlert-message');
 }
 

 workloaddataclickinlist(){
     return cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(2) > .MuiBox-root');
 }

viewallbutton(){
    return cy.get('[style="display: flex; justify-content: space-between; margin-bottom: 15px;"] > .MuiButton-root');
}

verifymonthlyworkload(){
    return cy.get('.stdViewPrfCalBlk > .MuiTypography-root');
}

closeiconcal(){
    return cy.get('.stdViewPrfCalBlk > [data-testid="CloseIcon"]');
}

closebutton(){
    return cy.get('[data-testid="CloseIcon"]');
}


teacherbutton(){
    return cy.get('#simple-tab-0');
}

teacherdeactivateuser(){
    return cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(2) > .MuiBox-root');
}

monthworkloadverify(){
    return cy.get('.teaViewPrfCalBlk > .MuiTypography-root');
}

monthlycloseicon(){
    return cy.get('.teaViewPrfCalBlk > [data-testid="CloseIcon"] > path');
}


sendbutton(){
    return cy.get(':nth-child(1) > :nth-child(6) > .TeacherDashboard_EditIcons__3F3tm > :nth-child(4) > img');
}

sendtouser(){
    return cy.get(':nth-child(2) > .MuiTypography-h6').contains("Send to User");
}

sendtoadmin(){
    return cy.get(':nth-child(2) > .MuiTypography-h6').contains("Send to Admin");
}

teacherdetails(){
    return cy.get(':nth-child(1) > .tchPrfWrkListDetails');
}

acedemicdetails(){
    return cy.get(':nth-child(2) > .tchPrfWrkListDetails');
}

previousmonthclick(){
    return cy.get('.mbsc-calendar-button-prev > .mbsc-button-icon > svg');
}

nextmonthclick(){
    return cy.get('.mbsc-calendar-button-next > .mbsc-button-icon > svg');
}

teacheruser(){
    return cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(2)');
}

studentuser(){
    return cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(2) > .MuiBox-root');
}

viewall(){
    return cy.get('[style="display: flex; justify-content: space-between; margin-bottom: 15px;"] > .MuiButton-root');
}

relativelylow(){
    return cy.get('.tchPrfRcnWkLodSectTab > :nth-child(3) > p');
}

moderate(){
    return cy.get('.tchPrfRcnWkLodSectTab > :nth-child(2) > p');
}

relativelyhigh(){
    return cy.get('.tchPrfRcnWkLodSectTab > :nth-child(1) > p');
}

studentdetails(){
    return cy.get(':nth-child(1) > .tchPrfWrkListDetails');
}

sendmessagetostudent(){
    return cy.get(':nth-child(2) > .tchPrfWrkListDetails');
}

sendmessagetoparentsguadrians(){
    return cy.get(':nth-child(3) > .tchPrfWrkListDetails');
}

studentreports(){
    return cy.get(':nth-child(4) > .tchPrfWrkListDetails');
}

close(){
    return cy.get('[data-testid="CloseIcon"] > path');
}

calenderbutton(){
    return cy.get(':nth-child(4) > a > .side-nav-dashboard');
}

createnewbutton(){
    return cy.get('.MuiButton-root');
}

event(){
    return cy.get('.calEntrEvent > .calendar-content-popover');
}


eventtitle(){
    return cy.get('.MuiInput-input');
}


multipledaycheckbox(){
    return cy.get('input[value="Multiple"]');
}

singledatcheckbox(){
    return cy.get('input[value="Single"]');
}


startdate(){
    return cy.get('.css-1x5jdmq:visible').eq(0);
}

enddate(){
    return cy.get('.css-1x5jdmq:visible').eq(1);
}


start1(){
    return cy.get('.css-i44wyl').eq(1);
}

end1(){
    return cy.get('.css-i44wyl').eq(2);
}

dateofevent1(){
    return cy.get('input[placeholder="ddd d mmm, yyyy"]');
}

datepicker(){
    return cy.get('[role="cell"]');
}

createeenttext(){
    return cy.get('.reminder_title_popup');
}


startdatemultiple(){
    return cy.get('.css-1x5jdmq').eq(1);
}

enddatmultiple(){
    return cy.get('.css-1x5jdmq').eq(2);
}


starttime(){
    return cy.get('.css-1uvydh2').eq(0);
}

endtime(){
    return cy.get('.css-1uvydh2').eq(1);
}

listbox(){
    return cy.get('div[role="listbox"]');
}

timepicker(){
    return cy.get('.css-h7tmkn[role="option"]');
}


ambutton(){
    return cy.get('.css-cysikj > .MuiTypography-root');
}

pmbutton(){
    return cy.get('.css-sfp64 > .MuiTypography-root');
}

adddescription(){
    return cy.get('.css-1hof3tc');
}

eventtypedropdown(){
    return cy.get('#demo-simple-select');
}

schooleventverify(){
    return cy.get('.eventSchEvnTypTxt');
}

classeventverify(){
    return cy.get('.eventSchEvnTypChk');
}

staffeventverify(){
    return cy.get('.eventAddPrt');
}

extracheckbox(){
    return cy.get('div.eventSchEvnTypChk label span input');
}


pretimerequires(){
    return cy.get(':nth-child(9) > .MuiFormControl-root > .MuiOutlinedInput-root > #demo-simple-select');
}

timepre(){
    return cy.get(':nth-child(1) > .MuiFormControl-root > .MuiOutlinedInput-root > #demo-simple-select');
}

addparticipant(){
    return cy.get('.eventAddPrt');
}

studentsverifypopup(){
    return cy.get('.stdDiaTabSect > .MuiButton-root');
}

teacherverifypopup(){
    return cy.get('.toggleopen');
}

studverifypopup(){
    return cy.get('.togglestudent');
}

grade(){
    return cy.get('.css-b1884d .MuiSelect-select').eq(0);
}

section(){
    return cy.get('.css-b1884d .MuiSelect-select').eq(1);
}

sectionvalue(){
    return cy.get('ul[role="listbox"] li').eq(0);
}

closeicon(){
    return cy.get('.stdDiaPopupBlockSect > [data-testid="CloseIcon"] > path');
}

classdropdown(){
    return cy.get(':nth-child(1) > .MuiOutlinedInput-root > #grouped-select');
}

classsection(){
    return cy.get(':nth-child(2) > .MuiOutlinedInput-root > #grouped-select');
}

valueA(){
    return cy.get('.MuiMenuItem-root');
}

closeiconforpopup(){
    return cy.get('.stdDiaPopupBlockSect > [data-testid="CloseIcon"] > path');
}

closeall(){
    return cy.get('.close-icon_reminder');
}

studetcheckbox(){
    return cy.get('.stdDialSrchRstList input[type="checkbox"]');
}

teachercheckbox(){
    return cy.get('.stdDialSrchRstList input[type="checkbox"]');
}


cb(){
    return cy.get('.stdDiaPopupBlockSect > [data-testid="CloseIcon"] > path');
}

starttime1(){
    return cy.get('.css-1uvydh2').eq(1);
}

endtime1(){
    return cy.get('.css-1uvydh2').eq(2);
}

savebutton(){
    return cy.get('.MuiButton-contained');
}


























































}

export default adminpages;