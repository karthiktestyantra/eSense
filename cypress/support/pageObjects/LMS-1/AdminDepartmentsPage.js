class AdminDepartmentsPage {
    
    getStepBContent(){
        return cy.get(":nth-child(1) > .v-stepper > .circle");
    }

    getWholeDeptPage(){
        return cy.get('.bi-form-divide-cls');
    }

    getDepartmentsTitle(){
        return cy.get('.text-capitalize');
    }

    getDepartmentHeader(){
        return cy.get('table>thead>tr>th:nth-child(1)');
    }

    getForGradesHeader(){
        return cy.get('table>thead>tr>th:nth-child(2)');
    }

    getMandatorySubjectsHeader(){
        return cy.get('table>thead>tr>th:nth-child(3)');
    }

    getDepartmentEditIcon(){
        return cy.get('.departmentEditIcon').eq(0);
    }

    getGradeCheckboxPreSetup(){
        return cy.get('[type="checkbox"]')
    }

    getGradePlusIconPreSetup(){
        return cy.get('[class*="root sectionAddBtn"]')
    }

    getGradesTextPreSetup(){
        return cy.get('[class*="grade-name"] div')
    }

    getSectionNameTextfieldPreSetup(){
        return cy.get('[type="text"]')
    }

    getOptionalSubDropdownPreSetup(){
        return cy.get('#opt-subjects')
    }

    getOptionalSubDropdownListChechboxPreSetup(){
        return cy.get('[aria-labelledby="optional-subs"] input')
    }

    getAddSectionBtnPreSetup(){
        return cy.get('[class*="sectionSaveBtn"]')
    }

    getStreamDropdownInSectionPreSetup(){
        return cy.get('#deparment')
    }

    getSectionBtnPreSetup(){
        return cy.get('[class*="sectionsBtn"]')
    }

    getGradePlusIconPreSetupDynamic(grade){
        return cy.xpath('//div[.="'+grade+'"]/ancestor::tr//button[contains(@class,"sectionAddBtn")]')
    }

    getDepartmentDeleteIcon(id){
        return cy.get('td .departmentDeleteIcon').eq(id);
    }

    getDeptDeleteIcon(){
        return cy.get('td .departmentDeleteIcon').eq(0);
    }

    getAddDepartmentOption(){
        return cy.get('.MuiTypography-root > .MuiButton-root');
    }

    getAddTeacherOption(){
        return cy.get('[class*="TeacherAccounts_add_teacher_button"]')
    }

    getNameTextfieldAddTeacher(){
        return cy.get('[name="fullName"]')
    }

    getEmailTextfieldAddTeacher(){
        return cy.get('[name="email"]')
    }

    getCalenderIconAddTeacher(){
        return cy.get('[data-testid="CalendarIcon"]')
    }

    getCalenderYearIcon(){
        return cy.get('[class*="MuiIconButton-sizeSmal"] [data-testid="ArrowDropDownIcon"]')
    }

    getGenderDropdown(){
        return cy.get('#mui-component-select-gender')
    }

    getGenderDropdownList(){
        return cy.get('[role="option"]')
    }

    getSectionCheckBoxTeacherPreSetup(){
        return cy.get('[type="checkbox"]')
    }

    getEmployeeIdTextfieldTeacherPreSetup(){
        return cy.get('[name="empid"]')
    }

    getDesignationTextfieldTeacherPreSetup(){
        return cy.get('[name="designation"]')
    } 
    
    getAddress1TextfieldTeacherPreSetup(){
        return cy.get('[name="address_one"]')
    } 

    getAddress2TextfieldTeacherPreSetup(){
        return cy.get('[name="address_two"]')
    } 

    getPincodeTextfieldTeacherPreSetup(){
        return cy.get('[name="pincode"]')
    } 

    getAcademicDetailsDropdownsTeacherPreSetup(){
        return cy.get('[aria-haspopup="listbox"]')
    } 

    getQualificationTitleAcademicDetailsTeacherPreSetup(){
        return cy.get('[name="qualificationTitle"]')
    } 

    getQualificationAddBtnAcademicDetailsTeacherPreSetup(){
        return cy.get('[class="add-btn"] span')
    } 

    getAcademicDetailsAddQualificationBtnTeacherPreSetup(){
        return cy.xpath('//div[text()="+ Add Qualification"]')
    } 

    getContinueBtnBasicDetailsTeacherPreSetup(){
        return cy.get('[class="modal-content teacher-account-popup-container"] [class*="continue-btn"]')
    } 

    getContactNumberTeacherPreSetup(){
        return cy.get('[name="contact"]')
    }

    getBloodGroupTeacherPreSetup(){
        return cy.get('[name="contact"]')
    }

    getCalenderYear(Year){
        return cy.xpath('//div[.="'+Year+'"]')
    }

    getCalenderDay(Day){
        return cy.xpath('//div[contains(@class,"PrivatePickersSlideTransition-root ")]//button[text()="'+Day+'"]')
    }

    getDeleteIconGradesPreSetup(){
        return cy.get('[class*="departmentDeleteIcon"] img');
    }

    getDeleteIconTeacherPreSetup(){
        return cy.get('[class*="TeacherAccounts_icon_del"] img');
    }

    getDeleteIconPOCPreSetup(){
        return cy.get('[class*="delBtnBasicInfo"] img');
    }

    getDeleteConfirmBtnPOCPreSetup(){
        return cy.get('[class="delete-button"] span');
    }

    getDeleteBtnSectionPreSetup(){
        return cy.get('[class*="delete-section"]');
    }

    getDeleteConfirmBtnSectionPreSetup(){
        return cy.get('[class*="deptDeletebtn"]');
    }

    getDeleteConfirmBtnGradesPreSetup(){
        return cy.get('[class*="deptDeletebtn"]');
    }

    getDeleteConfirmBtnTeacherPreSetup(){
        return cy.get('[class="delete-button"] span');
    }

    getAddDepartmentTitle(){
        return cy.get('.MuiDialogTitle-root');
    }

    getEditDepartmentTitle(){
        return cy.get('.editDepartTitle');
    }

    getDepartmentName(){
        return cy.get('.MuiOutlinedInput-root>.MuiOutlinedInput-input').eq(0);
    }

    getForGrades(){
        return cy.get('#checkboxes');
    }

    getMandatorySubjects(){
        return cy.get('.MuiOutlinedInput-root>.MuiOutlinedInput-input').eq(2);
    }

    getMandatorySubjectsOption(){
        return cy.get('#checkboxes-tags-demo-listbox')
    }

    getAddButton(){
        return cy.get('.deptSavebtn');
    }

    getCancelButton(){
        return cy.get('.deptCancelbtn');
    }

    getCloseIcon(){
        return cy.get('.closeModal');
    }

    getDepartmentRows(){
        return cy.get('tbody tr');
    }

    getDepartmentNames(index){
        return cy.get('tbody tr td:nth-child(1)').eq(index);
    }

    getForGradesOption4(){
        return cy.get('#checkboxes-listbox')
    }

    getDeletePopupDeleteButton(){
        return cy.get('.deptDeletebtn');
    }

    getDeletePopupCancelButton(){
        return cy.get('.deptCancelDisabledbtn');
    }

    getDeleteDepartmentPopup(){
        return cy.get('.font-cls');
    }

    getContinueButton(){
        return cy.get('.continue-btn');
    }

}

module.exports= new AdminDepartmentsPage()