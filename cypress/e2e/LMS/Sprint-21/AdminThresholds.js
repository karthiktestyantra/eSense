const adminThresholdsPage = require('../../../support/pageObjects/LMS-2/AdminThresholdsPage')

describe("Verify admin school functionalities", function () {

    before(function () {
        cy.visit(Cypress.env('urlQAPreSetup'))
        cy.fixture('LMS/AdminLoginCredentials').then(function (validAdminLoginData) {
            cy.AdminPostSetup(validAdminLoginData.fNew, validAdminLoginData.password)
        })

    })

    beforeEach(function () {
        cy.fixture("LMS/AdminThresholds").as("Thresholds")
    })

    it('EL-6568/ES6568_1 School Admin |Changes in set-up Workload Thresholds for Teachers and Students',function () {
       adminThresholdsPage.getSideMenuAdminUserImg().click()
       adminThresholdsPage.getTeacherThresholdsBtn().click({force:true})
       cy.wait(10000)
       adminThresholdsPage.getThresholdsMaxWorkingHoursDropdown().should('have.text',this.Thresholds.TeacherdefaultThresholdsMaxhours)
       
    })

    it('EL-6568/ES6568_2 Validate when user clicks on Max Working Hours DropDown it is displaying list of hours from 1 to 24 hours.',function () {
        adminThresholdsPage.getThresholdsMaxWorkingHoursDropdown().click()
        adminThresholdsPage.getThresholdsMaxWorkingHoursDropdownValues().should('have.length',24)
        adminThresholdsPage.getThresholdsMaxWorkingHoursDropdownValues().contains(this.Thresholds.TeacherdefaultThresholdsMaxhours).click()
        

    })

    it('EL-6568/ES6568_3 Validate Green Color code is displayed till “X-1” hours (for example the drop-down value should be “Less than 1 hour” till “less than 7 hours”)',function () {
        adminThresholdsPage.getThresholdsMaxWorkingHoursDropdown().then((maxHoursTxt)=>{
             var maxHours = maxHoursTxt.text()
            var mh = maxHours.split(' ')
            var maxhours = mh[0]
            cy.log(maxhours)
            adminThresholdsPage.getThresholdGreenWorkingHoursDropdown().click({force:true})
            adminThresholdsPage.getThresholdGreenWorkingHoursDropdownValues().should('have.length',maxhours-1)
            adminThresholdsPage.getThresholdGreenWorkingHoursDropdownValues().contains(this.Thresholds.GreenWorkingHours).click()

        })
    })

    it('EL-6568/ES6568_4 The yellow color code is displayed when work hours take “More than “Green color” hours” (for example “More than 7 hours”)',function () {
        adminThresholdsPage.getThresholdGreenWorkingHoursDropdown().then((Greenvalue)=>{
            var Hours = Greenvalue.text()
          var greenhours =  Hours.substring(5,17)
            cy.log(greenhours)
            cy.wait(3000)
            adminThresholdsPage.getThresholdYelloWorkingHoursDropdown().should('have.text','More'+' '+greenhours)
  
    })
    })
    it('EL-6568/ES6568_5 The red color code is displayed when work hours take “More than “Yellow color” hours” (for example “More than 7 hours”)',function () {
        adminThresholdsPage.getThresholdGreenWorkingHoursDropdown().then((greenvalue)=>{
        var Hours = greenvalue.text()
        var gh = Hours.split(' ')
        var greenhours = gh[2]
        cy.log(greenhours)
        adminThresholdsPage.getThresholdRedWorkingHoursDropdown().should('have.text','More than'+" "+(Number(greenhours)+1)+" "+'Hours')  
        

    })
    })

    it('EL-6568/ES6568_6 Validate when user clicks on Max Working Hours DropDown it is displaying list of hours from 1 to 8 hours. ',function () {
       adminThresholdsPage.getTeacherThresholdsPopupCloseBtn().click()
       adminThresholdsPage.getStudentBtn().click()
       adminThresholdsPage.getStudentThresholdsBtn().click({force:true})
       adminThresholdsPage.getThresholdsSecondGradeName().click() 
       cy.wait(2000)
       adminThresholdsPage.getStuThresholdsMaxWorkingHoursDropdown().should('have.text',this.Thresholds.StudentDefaultMaxHours)
     
       adminThresholdsPage.getStuThresholdsMaxWorkingHoursDropdown().click()
       cy.wait(2000)
       adminThresholdsPage.getThresholdsMaxWorkingHoursDropdownValues().should('have.length',8)
       adminThresholdsPage.getThresholdsMaxWorkingHoursDropdownValues().contains(this.Thresholds.StudentDefaultMaxHours).click()

    })

    it('EL-6568/ES6568_7 Validate Green Color code is displayed till “X-1” hours (for example the drop-down value should be “Less than 1 hour” till “less than 7 hours”)',function () {
        adminThresholdsPage.getStuThresholdsMaxWorkingHoursDropdown().then((maxHoursTxt)=>{
        var stutxt = maxHoursTxt.text()
        cy.log(stutxt)
        var greenhours =  stutxt.substring(0,1)
        cy.log(greenhours)
        adminThresholdsPage.getStudentThresholdsgreenHoursDropdown().should('have.text',"Less than"+" "+(Number(greenhours)-1)+" "+'Hour')

        })

        })

        it('EL-6568/ES6568_8 The yellow color code is displayed when work hours take “More than “Green color” hours” (for example “More than 7 hours”)',function () {
           cy.wait(2000)
           adminThresholdsPage.getStudentThresholdsgreenHoursDropdown().then((maxHoursTxt)=>{
                var stutxt = maxHoursTxt.text()
                cy.log(stutxt)
                var gh = stutxt.split(' ')
                var greenhours = gh[2]
                 cy.log(greenhours)
                adminThresholdsPage.getThresholdYelloWorkingHoursDropdown().should('have.text',"More than"+" "+greenhours+" "+'Hour')
        
            })
    })

    it('EL-6568/ES6568_8 The red color code is displayed when work hours take “More than “Yellow color” hours” (for example “More than 7 hours”)',function () {
        cy.wait(2000)
        adminThresholdsPage.getThresholdYelloWorkingHoursDropdown().then((maxHoursTxt)=>{
             var stutxt = maxHoursTxt.text()
             cy.log(stutxt)
             var Yh = stutxt.split(' ')
             var yellowHours = Yh[2]
              cy.log(yellowHours)
             adminThresholdsPage.gestutThresholdRedWorkingHoursDropdown().should('have.text',"More than"+" "+(Number(yellowHours)+1)+" "+'Hours')
     
         })

    })

    it('EL-6568/ES6568_9 Validate when user selects “Max “X” hour” as exactly 1 hour, following changes to be applied-Green color - The drop-down is displaying “30 minutes”-The yellow color code is taking “More than “30 minutes”-The red color code is taking “More than “X” hour” (for example 1 hour)',function () {
        adminThresholdsPage.getStuThresholdsMaxWorkingHoursDropdown().click()
        adminThresholdsPage.getThresholdsMaxWorkingHoursDropdownValues().contains('1 Hour').click()
        adminThresholdsPage.getStudentThresholdsgreenHoursDropdown().should('have.text',this.Thresholds.onehourgreenvalue)
        adminThresholdsPage.getThresholdYelloWorkingHoursDropdown().should('have.text',this.Thresholds.onehouryellowvalue)
        adminThresholdsPage.gestutThresholdRedWorkingHoursDropdown().should('have.text',this.Thresholds.onehourredvalue)

    })

})