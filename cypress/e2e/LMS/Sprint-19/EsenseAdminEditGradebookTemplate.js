import EsenseAdminGradePage from "../../../support/pageObjects/LMS-2/EsenseAdminGradePage";

const esenseAdminGradePage = new EsenseAdminGradePage();

describe("Verify admin edit grade book template", function () {
   before(function () {
      cy.visit(Cypress.env("url"))
      cy.fixture("LMS/mainAdminLoginCredentials").then(function (validAdminLoginData) {
         cy.Mainlogin(validAdminLoginData.username, validAdminLoginData.password)
      })
   })
   beforeEach(function () {
      cy.fixture('LMS/mainAdminGradebookCredentials').then(function (EsenseAdminGradesCredentials) {
         this.esenseAdminGradesCredentials = EsenseAdminGradesCredentials;
      })
   })

   it("To validate Edit option is present in  Action column in the template list screen. /EL-5594/ES5594-02", function () {
      esenseAdminGradePage.getHarMenuGradebookTemplateBtn().click()
      esenseAdminGradePage.getHarListOfEditBtn().should('not.be.disabled')

      //it("To validate user is redirected  to "Edit Gradebook" screen on clciking "Edit" button./EL-5595/ES5594-03",function () {
      esenseAdminGradePage.getHarListOfEditBtn().eq(0).scrollIntoView().click()
      cy.url().should('contain', 'edit-template')

      //})

      //it("To validate user is able to edit the  template except the grade./EL-5594/ES5594-04",function () {
      esenseAdminGradePage.getHarNumOfThemeDropdown().eq(1).click()
      esenseAdminGradePage.getHarNumOfThemeDropdownValue().contains('1').click()
      //   esenseAdminGradePage.getHarTermDropdown().eq(2).click({force:true})
      //   esenseAdminGradePage.getHarTermDropdownValue().contains('2').click({force:true})
      cy.wait(2000)
      esenseAdminGradePage.getHarNumOfTesttypeDropdown().eq(3).click({ force: true })
      esenseAdminGradePage.getHarNumOfTesttypeDropdownValue().contains('Half Yearly').click({ force: true })
      esenseAdminGradePage.getHarActivity1().eq(0).scrollIntoView().clear({ force: true }).type('exam', { force: true })

      // })

      //it("To validate user is able to save template as draft after clicking on "Save As Draft/EL-5594/ES5594-05",function () {
      esenseAdminGradePage.getHarSaveDraftBtn().scrollIntoView().should('be.visible').click({ force: true })
      //})

      //it("To validate user is redirected to previous screen on clicking cancel button./EL-5594/ES5594-06",function () {
      esenseAdminGradePage.getHarListOfEditBtn().eq(0).scrollIntoView().click()
      esenseAdminGradePage.getHarCancelBtn().scrollIntoView().should('be.visible').click({ force: true })
      esenseAdminGradePage.getHarCreateTemplatePgeHeader().should('have.text', 'Gradebook Template')
      //})

      //it("To valiadte esense admin is able to delete the created template./EL-5595/ES5594-01",function () {
      esenseAdminGradePage.getHarDeleteBtn().eq(0).should('not.be.disabled')
      //})

      //it("To validate wether delete option is present in "Action column" in the template list screen./EL-5595/ES5594-02",function () {
      esenseAdminGradePage.getHarListOfGradebookColumnHeadername().each(($e1, index, $list) => {
         const columnName = $e1.text()
         if (columnName.includes('ACTION')) {
            esenseAdminGradePage.getHarDeleteBtn().eq(0).scrollIntoView().should('be.visible')
         }
      })
      //})

      //it("To validate user is able to delete the selected grade by clciking on delet icon./EL-5595/ES5594-04",function () {
      esenseAdminGradePage.getHarListOfGradeName().each(($e1, index, $list) => {
         const gradeName = $e1.text()
         if (gradeName.includes(this.esenseAdminGradesCredentials.DraftedGrade)) {
            esenseAdminGradePage.getHarListOfGradebookTableCheckBx().eq(index).click()

         }

         esenseAdminGradePage.getHarListOfDraft().each(($e2, index, $list) => {
            const draftTxt = $e2.text()
            if (draftTxt.includes('Draft')) {
               esenseAdminGradePage.getHarDeleteBtn().eq(index).should('not.be.disabled')

            }
         })
         return false;
      })
      //   it("To validate user is not able to delete the publish gradebook template./EL-5595/ES5594-05",function () {
      esenseAdminGradePage.getHarListOfPublished().each(($e1, index, $list) => {
         const publishTxt = $e1.text()
         if (publishTxt.includes('Published')) {
            esenseAdminGradePage.getHarDeleteBtn().eq(0).should('not.be.enabled')

         }
      })
      //})

      //   it(" To validate "Confirmation pop-up is displayed when user clciks  on  delete icon./EL-5595/ES5594-06",function () {
      esenseAdminGradePage.getHarListOfGradeName().each(($e1, index, $list) => {
         const gradeName = $e1.text()
         if (gradeName.includes(this.esenseAdminGradesCredentials.DraftedGrade)) {
            esenseAdminGradePage.getHarListOfGradebookTableCheckBx().eq(index).click()

         }

         cy.get('button.MuiButton-root').each(($e2, index, $list) => {
            const draftTxt = $e2.text()
            if (draftTxt.includes('Draft')) {
               esenseAdminGradePage.getHarDeleteBtn().eq(index).click()

            }
         })
         return false;
      })
      esenseAdminGradePage.getHarDeletePopupTxt().should('contain.text', 'Do you want to delete Gradebook')
      //})

      //   it("To validate user is redirected to template listing screen by clicking on cancel button./EL-5595/ES5594-10",function () {
      esenseAdminGradePage.getHarPopupDeleteCancelBtn().should('be.visible').click()
      esenseAdminGradePage.getHarListOfGradeName().should('be.visible')
      //})

      //   it("To validate esense admin is able to view(>) the created template/EL-5593/ES5591_01",function () {
      esenseAdminGradePage.getHarListOfGradeName().each(($e1, index, $list) => {
         const gradeName = $e1.text()
         if (gradeName.includes(this.esenseAdminGradesCredentials.DraftedGrade)) {
            esenseAdminGradePage.getHarListOfGradebookTableViewBtn().eq(index).click()

         }
      })

      cy.url().should('contain', 'view')

      //})


      //   it("To validate user is able to view the details of grade book template by clicking on view icon. /EL-5593/ES5591_02",function () {
      esenseAdminGradePage.getHarNumOfThemeDropdown().eq(1).should('be.visible')
      esenseAdminGradePage.getHarTermDropdown().eq(2).should('be.visible')
      esenseAdminGradePage.getHarNumOfTesttypeDropdown().eq(3).should('be.visible')
      esenseAdminGradePage.getHarActivity1().eq(0).should('be.visible')

      //})

      // it("To validate scholastic details conatins test type ,trems,max marks and it  is diaplyed to the user/EL-5593/ES5591_04",function () {
      esenseAdminGradePage.getHarTermDropdown().should('be.visible')
      esenseAdminGradePage.getHarNumOfTesttypeDropdown().eq(3).should('be.visible')
      esenseAdminGradePage.getHarNumOfMaxMarksDropdown().eq(4).should('be.visible')
      //})

      // it("To validate wether  Edit option is present  in preview gradebook template./EL-5593/ES5591_06",function () {
      esenseAdminGradePage.getHarEditBtn().should('not.be.disabled')

      //})

      // it("To validate wether  Create New  option is present in preview gradebook template./EL-5593/ES5591_07",function () {
      esenseAdminGradePage.getHarCreateNewBtn().scrollIntoView().should('not.be.disabled')
      //})

      // it("user is able to create a new gradebook template by clicking the “Create Template” button in the template listing screen/EL-5591/ES5591-01",function () {
      esenseAdminGradePage.getHarGoBackBtn().scrollIntoView().click()
      esenseAdminGradePage.getHarCreateNewTemplateBtn().click()
      esenseAdminGradePage.getHarGradeDropdown().eq(0).click()
      esenseAdminGradePage.getHarGradeValue().contains(this.esenseAdminGradesCredentials.NewlyCreatedGrade).click()
      // var CreatedgradeTxt;
      esenseAdminGradePage.getHarGradeDropdown().then(function (gradeDropTxt) {
         var CreatedgradeTxt = gradeDropTxt.text()
         cy.log(CreatedgradeTxt)
         esenseAdminGradePage.getHarNumOfThemeDropdown().eq(1).should('be.visible').click()
         esenseAdminGradePage.getHarNumOfThemeDropdownValue().contains('1').click()
         esenseAdminGradePage.getHarAddTestTypeLink().should('be.visible').click()
         esenseAdminGradePage.getHarTermDropdown().eq(2).click({ force: true })
         esenseAdminGradePage.getHarTermDropdownValue().contains('1').click({ force: true })
         cy.wait(2000)
         esenseAdminGradePage.getHarNumOfTesttypeDropdown().eq(3).should('be.visible').click({ force: true })
         esenseAdminGradePage.getHarNumOfTesttypeDropdownValue().contains('Half Yearly').click({ force: true })
         esenseAdminGradePage.getHarNumOfMaxMarksDropdown().eq(4).click({ force: true })
         esenseAdminGradePage.getHarMaxMarksDropdownValue().contains('100').click({ force: true })
         esenseAdminGradePage.getHarAddSubjectLink().click({ force: true })
         esenseAdminGradePage.getHarSubjectDropdown().eq(5).should('be.visible').click({ force: true })
         esenseAdminGradePage.getHarSubjectDropdownValue().contains('Tamil').click({ force: true })
         esenseAdminGradePage.getHarAddTheoryandPracticalLink().click({ force: true })
         esenseAdminGradePage.getHarPracTestTypeDropdown().eq(6).should('be.visible').click({ force: true })
         esenseAdminGradePage.getHarPrcTestTypeDropdownValue().contains('Half Yearly').click({ force: true })
         esenseAdminGradePage.getHarPracTheoryTxtField().type('100', { force: true })
         esenseAdminGradePage.getHarPracPracticalTxtField().type('0', { force: true })
         esenseAdminGradePage.getHarAddActivityLink().scrollIntoView().click({ force: true })
         esenseAdminGradePage.getHarActivity1().eq(0).scrollIntoView().clear({ force: true }).type('exam 1', { force: true })
         esenseAdminGradePage.getHarSaveDraftBtn().scrollIntoView().click({ force: true })
         cy.on('window:alert', (txt) => {
            //Mocha assertions
            expect(txt).to.contains('Gradebook saved');
         })

         cy.wait(4000)
         esenseAdminGradePage.getHarListOfGradeName().should('contain.text', '2Grade')

      })
      // it("To validate user is able to  preview and publish the gradebook."/EL-5591/ES5591-19",function () {  
      esenseAdminGradePage.getHarListOfGradeName().each(($e1, index, $list) => {
         const gradeName = $e1.text()
         if (gradeName.includes(this.esenseAdminGradesCredentials.NewlyCreatedGrade)) {
            esenseAdminGradePage.getHarListOfTemplateEnableAndDisabledBtn().eq(index).click()

         }
      })
      esenseAdminGradePage.getHarPublishBtn().scrollIntoView().should('be.visible').click()
      esenseAdminGradePage.getHarPublishPopupYesBtn().click()

      esenseAdminGradePage.getHarListOfGradeName().each(($e1, index, $list) => {
         const gradeName = $e1.text()
         if (gradeName.includes(this.esenseAdminGradesCredentials.NewlyCreatedGrade)) {
            esenseAdminGradePage.getHarListOfTemplateEnableAndDisabledBtn().eq(index).click()

         }
      })
      esenseAdminGradePage.getHaUnPublishPopupYesBtn().click()
      cy.wait(2000)
      esenseAdminGradePage.getHarListOfGradeName().each(($e1, index, $list) => {
         const gradeName = $e1.text()
         if (gradeName.includes(this.esenseAdminGradesCredentials.NewlyCreatedGrade)) {
            esenseAdminGradePage.getHarDeleteBtn().eq(index).click()

         }
      })
      esenseAdminGradePage.getHarPopupDeleteBtn().click()
      esenseAdminGradePage.getHarPopupDeleteSuccessMesg().should('contain.text', 'has been deleted.')

      //})

      // it("To validate basic information have  mandatory "number of terms" dropdown and contains "1" and "2" respectively /EL-5591/ES5591-03",function () {
      esenseAdminGradePage.getHarCreateNewTemplateBtn().click()
      esenseAdminGradePage.getHarGradeDropdown().eq(0).click()
      esenseAdminGradePage.getHarGradeValue().contains(this.esenseAdminGradesCredentials.NewlyCreatedGrade).click()
      esenseAdminGradePage.getHarNumOfThemeDropdown().eq(1).click()
      esenseAdminGradePage.getHarNumOfThemeDropdownValue().contains('1').should('be.visible')
      esenseAdminGradePage.getHarNumOfThemeDropdownValue().contains('2').should('be.visible')
      esenseAdminGradePage.getHarNumOfThemeDropdownValue().contains('1').click()
      //})

      // it("To validate create new template screen has Select Grade Dropdown (Mandatory)./EL-5591/ES5591-04",function () {
      esenseAdminGradePage.getHarMandatoryGradeTxt().should('contain.text', '*')

      //})

      // it("To validate user can add maximum 5 tests by  clicking add test type button /EL-5591/ES5591-05",function () {
      for (var i = 1; i <= 5; i++) {
         esenseAdminGradePage.getHarAddTestTypeLink().click({ force: true })
         cy.log(i)
      }

      //})

      // it("To validate If number of term selected is 1 then Term 1 to be populated in all the test./EL-5591/ES5591-09",function () {
      esenseAdminGradePage.getHarTermDropdown().eq(2).click({ force: true })
      esenseAdminGradePage.getHarTermDropdownValue().should('have.length', '1')

      // it("To validate If number of term selected is 2 then Term 1 and Term 2 to be populated in all the test./EL-5591/ES5591-10",function () {
      esenseAdminGradePage.getHarNumOfThemeDropdown().eq(1).click({ force: true })
      esenseAdminGradePage.getHarNumOfThemeDropdownValue().contains('2').click({ force: true })
      esenseAdminGradePage.getHarTermDropdown().eq(2).click({ force: true })
      esenseAdminGradePage.getHarTermDropdownValue().should('have.length', '2')
      // })
      // it("To validate maxmarks dropdown is mandatory and  contains marks in the multiples of 5./EL-5591/ES5591-12",function () {
      esenseAdminGradePage.getHarMaxMarksDrpDwn().click({ force: true })
      for (let i = 1; i <= 10; i++) {
         let txt = Number(i * 5);
         esenseAdminGradePage.getHarSectionsLst().eq(i).should('have.text', txt);
      }

      //})

      // it("To validate scholastic details have mandatory delete option./EL-5591/ES5591-12",function () {
      esenseAdminGradePage.getHarAddTestTypeDeleteBtn().should('not.be.disabled')

      //})

      // it("To Validate co-schoastic activities have mandatory add activity button and user able to add maximum "4"activities by clicking it."/EL-5591/ES5591-17",function () {
      for (var i = 1; i <= 4; i++) {
         esenseAdminGradePage.getHarAddActivityLink().scrollIntoView().click({ force: true })
         cy.log(i)
      }
      //})
      // it("To validate delete in option present in co-scholastic activites"/EL-5591/ES5591-19",function () {
      esenseAdminGradePage.getHarAddActivityDeleteBtn().should('be.visible')
      //})

   })

})

//pre setup
//1. one grade should be set as draft to verify draft scdnarios --> grade 9
//2. newly created grade 2 to verify end to end scenario ---> which is not at all created before