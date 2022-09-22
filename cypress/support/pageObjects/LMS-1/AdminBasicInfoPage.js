class AdminBasicInfoPage{

    getLogoutIcon(){
        return cy.get(".logoutBtn");
    }

    getLoginSuccessfulMessage(){
        return cy.get(".MuiAlert-message");
    }

    getFirstCarouselIcon(){
        return cy.get('.step-container> :nth-child(1)');
    }

    getSecondCarouselIcon(){
        return cy.get('.step-container> :nth-child(2)');
    }

    getThirdCarouselIcon(){
        return cy.get('.step-container > :nth-child(3)');
    }

    getFourthCarouselIcon(){
        return cy.get('.step-container > :nth-child(4)');
    }

    getFiveCarouselIcon(){
        return cy.get('.step-container > :nth-child(5)');
    }

    getStepAContent(){
        return cy.get('.circle').eq(0);
    }

    getSchoolAndBranch(){
        return cy.get('.bi-form-header-font-cls').eq(0);
    }

    getCBSEAffiliation(){
        return cy.get('.bi-form-header-font-cls').eq(1);
    }

    getContactDetails(){
        return cy.get('.bi-form-header-font-cls').eq(2);
    }

    getSocialLinks(){
        return cy.get('.bi-form-header-font-cls').eq(3);
    }

    getPointOfContact(){
        return cy.get('.bi-form-header-font-cls').eq(4);
    }

    getBasicInfoTitle(){
        return cy.get('.text-capitalize');
    }

    getDepartmentsTitle(){
        return cy.get('.text-capitalize');
    }

    getGradesTitle(){
        return cy.get('.text-capitalize');
    }

    getInfrastructureTitle(){
        return cy.get('.text-capitalize');
    }

    getAdminAccountsTitle(){
        return cy.get('p.overview_subtitle');
    }

    getMySChoolSectionTitle(){
        return cy.get('.my-sch-section-cls-out>.right-cls>.stepper-sch-text-cls');
    }

    getCurriculumBuilderSectionTitle(){
        return cy.get('.curriculum-builder-section-cls-out>.right-cls-out>.stepper-sch-text-cls');
    }

    getTeacherAccountsTitle(){
        return cy.get('.teacher-accounts-section-out>.right-cls-out>.stepper-sch-text-cls');
    }

    getTimetableBuilderTitle(){
        return cy.get('.timetable-builder-section-out>.right-cls-out>.stepper-sch-text-cls');
    }

    getInstituteName(){
        return cy.get('input[name="institution_name"]');
    }

    getBranchName(){
        return cy.get('input[name="branch_name"]');
    }

    getTrust(){
        return cy.get('input[name="trust"]');
    }

    getDateOfFirstOpening(){
        return cy.get('input[placeholder="mm/dd/yyyy"]').eq(0);
    }

    getCalendarIconOfDateOfFirstOpening(){
        return cy.get('svg[data-testid="CalendarIcon"]').eq(0);
    }

    getCalendarPreviousIcon(){
        return cy.get('svg[data-testid="ArrowLeftIcon"]');
    }

    getCalendarNextIcon(){
        return cy.get('svg[data-testid="ArrowRightIcon"]');
    }

    getCalendarYearDropdown(){
        return cy.get('svg[data-testid="ArrowDropDownIcon"]');
    }

    getCalendarYear(){
        return cy.get('.PrivatePickersYear-yearButton');
    }

    getCalendarDay(){
        return cy.get('.MuiPickersDay-root:visible');
    }

    getAffiliationType(){
        return cy.get('input[name="affliation_type"]');
    }

    getAffiliationNumber(){
        return cy.get('input[name="affliation_number"]');
    }

    getAffiliationType(){
        return cy.get('input[name="affliation_type"]');
    }

    getDateofAffiliationPeriodStartDate(){
        return cy.get('input[placeholder="mm/dd/yyyy"]').eq(1);
    }

    getDateofAffiliationPeriodEndDate(){
        return cy.get('input[placeholder="mm/dd/yyyy"]').eq(2);
    }

    getGreaterDateErrorMessage(){
        return cy.get('.MuiAlert-message.css-1w0ym8')
    }

    getCalendarIconOfAffiliationStartDate(){
        return cy.get('svg[data-testid="CalendarIcon"]').eq(1);
    }

    getCalendarIcoOfAffiliationEndDate(){
        return cy.get('svg[data-testid="CalendarIcon"]').eq(2);
    }

    getPhoneNumber(){
        return cy.get('input[name="phone_number"]');
    }

    getEmail(){
        return cy.get('input[name="email"]');
    }

    getWebsite(){
        return cy.get('input[name="website"]');
    }

    getAddressOne(){
        return cy.get('textarea[name="address_one"]');
    }

    getAddressTwo(){
        return cy.get('textarea[name="address_two"]');
    }

    getPincode(){
        return cy.get('input[name="pincode"]');
    }

    getState(){
        return cy.get('input[name="state"]');
    }

    getCity(){
        return cy.get('input[name="city"]');
    }

    getContinueButton(){
        return cy.get('.continue-btn');
    }

    getFacebookLink(){
        return cy.get('input[name="fb_link"]');
    }

    getInstagramLink(){
        return cy.get('input[name="insta_link"]');
    }

    getYoutubeLink(){
        return cy.get('input[name="youtube_link"]');
    }

    getAddPOCButton(){
        return cy.get('.add-poc-btn');
    }

    getAddPOCPopupTitle(){
        return cy.get('.poc-pop-head-font');
    }

    getPOCContactName(){
        return cy.get('input[name="pocName"]');
    }

    getPOCContactEmail(){
        return cy.get('input[name="pocEmail"]');
    }

    getPOCPhoneNumber(){
        return cy.get('input[name="pocPhoneNumber"]');
    }

    getPOCDesignation(){
        return cy.get('input[name="pocDesignation"]');
    }

    getPOCAddButton(){
        return cy.get('.add-button>span');
    }

    getPOCCancelButton(){
        return cy.get('.cancel-button>span');
    }

    getPOCCloseIcon(){
        return cy.get('.close-btn > img');
    }

    getPOCAddedMessage(){
        return cy.get('.MuiAlert-message.css-1w0ym84');
    }

    getAddedPOCContact(){
        return cy.get('.added-poc-cls-out');
    }

    getDeleteAddedPOC(){
        return cy.get('.delete-button > span');
    }

    getAddedPOCContactVerify(){
        return cy.get('.left-profession-name-cls-out>.name-cls');
    }

}
module.exports = new AdminBasicInfoPage() 