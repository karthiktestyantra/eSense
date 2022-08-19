class EsenseAdminLessonPlanPage{

    getSideBarLessonPlanBtn(){
           return  cy.get('div.menu-item a span.menu-title').contains('Lesson Plan')
       }

       getLessonPlanHeaderTxt(){
           return cy.get('div#kt_page_title h1').contains('Lesson Plan')
       }

       getAddLessonPlanBtn(){
        return cy.get('button.MuiButton-textPrimary:visible')
    }

    getAddLessonPlanName(){
        return cy.get('tbody.fw-bold tr td span.fw-bolder')
    }

    getAddLessonChapterName(){
        return cy.get('div.bg-gray:visible')
    }

    getLessonPlanChapterAddNewBtn(){
        return cy.get('div.lessonplan svg')
    }

    getLessonPlanSearchTxtFieldBtn(){
        return cy.get('input[placeholder="Search Courses"]')
    }

    getLessonPlanSubjectTxt(){
        return cy.get('.fw-bold :nth-child(1) > .fw-bolder')

    }

    getNoDataFoundTxt(){
        return cy.get('.fw-bold.text-center')

    }

    getFilterBtn(){
        return cy.get('button.filterBtn')

    }

    getFilterPopupHeaderTxt(){
        return cy.get('#contained-modal-title-vcenter')

    }

    getFilterPopupCheckBox(){
        return cy.get('div.d-tree input[type="checkbox"]')

    }

    getFilterPopupCheckBoxClearBtn(){
        return cy.get('button.clearBtn')

    }

    getLessonPlanGradeTab(){
        return cy.get('li.nav-item a').contains('Grade')

    }

    getLessonPlanGradeCheckBox(){
        return cy.get('#gradeCheck-0')

    }

    getLessonPlanGradeCheckBoxOkBtn(){
        return cy.get('button.okBtn')

    }

    getLessonPlanFilterPopupCloseBtn(){
        return cy.get('button.btn-close')

    }


    


    }

       export default EsenseAdminLessonPlanPage;