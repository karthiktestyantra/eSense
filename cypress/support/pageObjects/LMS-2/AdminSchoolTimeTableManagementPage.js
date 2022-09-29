class AdminSchoolTimeTableManagementPage{

    getGoBackButtonTimeTableManagement(){
        return cy.get('[class="go-back"] strong')
    }
    
}
module.exports = new AdminSchoolTimeTableManagementPage() 