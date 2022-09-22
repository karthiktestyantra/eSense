class UserPostSetupPage {

    getTeacherBulkUploadCSVButton() {
      return cy.get('div[class*="TeacherAccounts_bulk_upload_out_cls"]');
    }

    getUploadTeacherAccountPopupTitle(){
        return cy.get('h2.MuiDialogTitle-root')
    }

    getDownloadTeachersProfileLink(){
        return cy.get('.css-1ujsas3')
    }

    getSelectFileFromComputerOption(){
      return cy.get('[class*="fileUploadPopup_bulkUpload"]')
    }

    getUploadTeacherAccountPopupCloseIcon(){
      return cy.get('[data-testid="CloseIcon"]')
    }

    getSchoolMenu(){
      return cy.contains('School')
    }

    getQuickLinksTitle(){
      return cy.get('p[class*="StudentSchool_schQicLikTitle"]')
    }

    getSchoolNoticeBoardTitle(){
      return cy.get('button[role="tab"]').eq(0)
    }

    getSchoolInformationLink(){
      return cy.get('.StudentSchool_schQicLikSectCard__F0UPY').eq(0)
    }

    getGradesAndDepartmentsLink(){
      return cy.get('.StudentSchool_schQicLikSectCard__F0UPY').eq(1)
    }

    getSchoolInfrastructureLink(){
      return cy.get('.StudentSchool_schQicLikSectCard__F0UPY').eq(2)
    }

    getCurriculumBuilderLink(){
      return cy.get('.StudentSchool_schQicLikSectCard__F0UPY').eq(3)
    }

    getTimetableManagementLink(){
      return cy.get('.StudentSchool_schQicLikSectCard__F0UPY').eq(4);
    }

    getAdminAccountsLink(){
      return cy.get('.StudentSchool_schQicLikSectCard__F0UPY').eq(5);
    }

    getAddNoticeButton(){
      return cy.get('button.noticeAddMembBtnFill')
    }

    getSchoolInformationPageTitle(){
      return cy.get('.font-cls-post-nav')
    }
    
    getSchoolInfoGoBackButton(){
      return cy.get('.post-setup-bi-back-cls .font-cls')
    }

    getSchoolInfoSaveChangesButton(){
      return cy.get('.continue-btn')
    }

    getGradesandDepartmentsPageTitle(){
      return cy.get('.font-cls-post-nav')
    }

    getDepartmentsTab(){
      return cy.get('#scrollable-auto-tab-0')
    }

    getGradesTab(){
      return cy.get('#scrollable-auto-tab-1')
    }

    getDeptandGradesGoBackButton(){
      return cy.get('.font-cls')
    }

    getSchoolInfrastructurePageTitle(){
      return cy.get('.font-cls-post-nav')
    }

    getSchoolInfrastructureGoBackButton(){
      return cy.contains('Go back')
    }

    getCurriculumBuilderPageTitle(){
      return cy.get('.font-cls-post-nav')
    }

    getCurriculumBuilderGoBackButton(){
      return cy.contains('Go back')
    }

    getTimetableManagementPageTitle(){
      return cy.get('.font-cls-post-nav')
    }
    getTimeTableManagementTitle(){
      return cy.get('h2').contains("Timetable Management")
    }

    getTimetableManagementGoBackButton(){
      return cy.go('back')
    }

    getAdminAccountsPageTitle(){
      return cy.get('.font-cls-post-nav')
    }

    getAdminAccountsSaveChangesButton(){
      return cy.get('.continue-btn')
    }

    getAdminAccountsGoBackButton(){
      return cy.contains('Go back')
    }

    getUsersMenu(){
      return cy.contains('Users')
    }

    getUsersListTitle(){
      return cy.get('p[class*=".StudentUsers"]')
    }

    getTeacherList(){
      return cy.get('.MuiTable-root')
    }

    getTeachersFilter(){
      return cy.get('.userDashselectField')
    }

    getTeachersFilterDropdownValues(){
      return cy.get('ul.MuiList-root li[role="option"]')
    }

    getTeacherClassesColumnValues(){
      return cy.get('tr td:nth-child(4)')
    }

    getWorkloadThresholdsButton(){
      return cy.get('.TeacherDashboard_saveChangesBtn__2EJTY').eq(0)
    }

    getWorkloadThresholdsPopupTitle(){
      return cy.get('h1.viewTchWrkLodTitle')
    }

    getWorkloadThresholdsCloseIcon(){
      return cy.get('[data-testid=CloseIcon] > path')
    }

    getTeacherDeleteIcon(){
      return cy.get('.TeacherDashboard_EditIcons__3F3tm button.MuiButton-root:nth-child(3)').eq(0)
    }

    getDeactivateAccount(){
      return cy.get('h6.MuiTypography-h6').eq(0)
    }

    getDeleteAccount(){
      return cy.get('h6.MuiTypography-h6').eq(1)
    }

    getDelPopupDeleteAccountbutton(){
      return cy.get('button.delete')
    }

    getDelPopupCancelButton(){
      return cy.get('button.cancel')
    }

    getStudentNameList(){
      return cy.get('.UserDashBoard_studentMeta__12OmY > :nth-child(1)');
    }

    getStudentSearchBar(){
      return cy.get('input[type="search"]');
    }

    getTeachersTab(){
      return cy.get('#simple-tab-0');
    }
  }
  module.exports = new UserPostSetupPage() 