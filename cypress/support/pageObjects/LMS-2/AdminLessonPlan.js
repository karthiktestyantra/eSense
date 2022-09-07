class AdminLessonPlan {

    getAdminBtn() {
        return cy.get('button[type="button"]').eq(0);
    }
    
  }
  export default AdminLessonPlan;