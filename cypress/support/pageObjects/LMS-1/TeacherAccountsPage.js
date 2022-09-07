class TeacherAccountsPage {

  getTeacherAccountsScreenTitle() {
    return cy.get('div[class*="TeacherAccounts_header"]')
  }

  getAddTeacherButton() {
    return cy.get('div[class*="TeacherAccounts_add_teacher_button"]')
  }

  getNewTeacherAccountTitle() {
    return cy.get(".header-row .font-cls")

  }
  getBasicDetailsTab() {
    return cy.get("button#scrollable-auto-tab-0")
  }

  getAcademicDetailsTab() {
    return cy.get("button#scrollable-auto-tab-1")
  }

  getSectionsandSubjectsTab() {
    return cy.get("button#scrollable-auto-tab-2")
  }

  getUsersMenu() {
    return cy.contains("Users")
  }

  getAddTeacherIcon() {
    return cy.get('div[class*="TeacherDashboard_AddUserIcon"]')
  }

  getUploadProfilePicture() {
    return cy.get(".font-cls")
  }

  getPersonalDetailsSection() {
    return cy.get(".sub-head-cont-row-out .font-cls").eq(0)
  }

  getEmergencyContactSection() {
    return cy.get(".sub-head-cont-row-out .font-cls").eq(1)
  }

  getEmployeeDetailsSection() {
    return cy.get(".sub-head-cont-row-out .font-cls").eq(2)
  }

  getAddressDetails() {
    return cy.get(".sub-head-cont-row-out .font-cls").eq(3)
  }

  getBasicTabSaveChangesButton() {
    return cy.get('[form="bi-submit"]')
  }

  getBasicDetailsCancelButton() {
    return cy.get('.cancel-btn-cls')
  }

  getAcademicDetailsCancelButton(){
    return cy.get('.cancel-btn');
  }

  getSectionsCancelButton() {
    return cy.get('.cancel-btn-cls > span')
  }

  getCloseIcon() {
    return cy.get('.header-row img  ')
  }

  getAddTeacherFullName() {
    return cy.get('input[name="fullName"]')
  }

  getAddTeacherEmailAddress() {
    return cy.get('input[name="email"]')
  }

  getAddTeacherDOB() {
    return cy.get(':nth-child(4) > .MuiTextField-root > .MuiOutlinedInput-root')
  }

  getAddTeacherGender() {
    return cy.get("#mui-component-select-gender")
  }

  getAddTeacherGenderList() {
    return cy.get("li[tabindex]")
  }

  getAddTeacherContact() {
    return cy.get('input[name="contact"]')
  }

  getAddTeacherBloodGroup() {
    return cy.get('.schAdminSelctCtr > .MuiOutlinedInput-root > #demo-simple-select')
  }

  getAddTeacherBloodGroupList(){
    return cy.get('ul li[role="option"]')
  }

  getAddEmergencyContact() {
    return cy.get('.add-emergency-button-out .font-cls')
  }

  getEmergencyContactFullName(){
    return cy.get('[name="emergencyContactName"]')
  }

  getEmergencyContactPhoneNumber(){
    return cy.get('[name="emergencyContactPhone"]')
  }

  getEmergencyContactRemoveIcon(){
    return cy.get('.remove-cls-out')
  }

  getEmpID(){
    return cy.get('[name="empid"]')
  }

  getDesignation(){
    return cy.get('[name="designation"]')
  }

  getAddressLine1(){
    return cy.get('[name="address_one"]')
  }

  getAddressLine2(){
    return cy.get('[name="address_two"]')
  }

  getPincode(){
    return cy.get('[name="pincode"]')
  }

  getState(){
    return cy.get('input[name="state"]')
  }

  getCity(){
    return cy.get('input[name="city"]')
  }

  getAcademicDetailsSection(){
    return cy.get('.academic-ta-section-form-out .font-cls').eq(0)
  }

  getQualificationsSection(){
    return cy.get('.academic-ta-section-form-out .font-cls').eq(1)
  }

  getDepartment(){
    return cy.get('#demo-simple-select')
  }

  getDepartmentDropdpwn(){
    return cy.get('ul li[role="option"]')
  }

  getBranches(){
    return cy.get('#opt-subjects')
  }

  getBranchesDropdown(){
    return cy.get('.MuiListItemText-root span')
  }

  getAddQualificationButton(){
    return cy.get('.add-qualification-show-btn .font-cls')
  }

  getQualificationTitle(){
    return cy.get('input[name="qualificationTitle"]')
  }

  getYearOfPassing(){
    return cy.get('.ml-text-field-cls > .MuiOutlinedInput-root > #demo-simple-select')
  }

  getUploadCertificationButton(){
    return cy.get('img[alt="UploadIcon"]')
    //return cy.contains('Upload Certification')
  }

  getQualificationAddButton(){
    return cy.get('.add-btn')
  }

  getQualificationCancelButton(){
    return cy.get('.cancel-btn')
  }

  getAcademicTabSaveChangesButton() {
    return cy.get('div.continue-btn span')
  }

  getGradeSelectionSection(){
    return cy.get('.sub-header-row .font-cls').eq(0)
  }

  getSectionsSection(){
    return cy.get('.sub-header-row .font-cls').eq(1)
  }

  getSelectGradeDropdown(){
    return cy.get('#opt-subjects')
  }
  
  getSelectGradeDropdownValues(){
    return cy.get('ul[aria-labelledby="optional-subs"] li')
  }

  getGradesWithClassTeacher(){
    return cy.get('.section-row-ta-out .left-cls').eq(0)
  }

  getSelectSubjectsDropdown(){
    return cy.get('.MuiSelect-select').eq(0)
  }

  getSectionsTabSaveChangesButton() {
    return cy.get('[form="sectionForm"]')
  }

  getStudentsTab(){
    return cy.get('#simple-tab-1')
  }

  getAddStudentIcon(){
    return cy.get('div[class*="UserDashBoard_AddUserIcon"]')
  }

  getAddStudentScreenTitle(){
    return cy.get('div[class*="AddorEditUser_addEditTitle"]')
  }

  getStudentsBasicDetailsTab(){
    return cy.get('#simple-tab-0')
  }

  getStudentsAcademicDetailsTab(){
    return cy.get('#simple-tab-1')
  }

  getStudentUploadProfilePicture(){
    return cy.get('.AcademicDetails_icon_out_cls__3EAT7 > input')
  }

  getStudentPrimaryDetailsSection(){
    return cy.get('.AcademicDetails_BasicDetailsTitleText__3pQx8').eq(0)
  }

  getStudentGuardianDetailsSection(){
    return cy.get('.AcademicDetails_BasicDetailsTitleText__3pQx8').eq(1)
  }

  getStudentAddressSection(){
    return cy.get('.AcademicDetails_BasicDetailsTitleText__3pQx8').eq(2)
  }

  getStudentFullName(){
    return cy.get('#fullName')
  }

  getStudentEmail(){
    return cy.get('input[name="email"]')
  }

  getStudentDOB(){
    return cy.get('input[placeholder="dd/mm/yyyy"]')
  }

  getStudentGender(){
    return cy.get('[style="display: flex; align-items: center;"] > .MuiFormControl-root > .MuiOutlinedInput-root > #demo-simple-select')
   // return cy.get('input[name="gender"]')
  }

  getStudentGenderDropdownValues(){
    return cy.get('ul li[role="option"]')
  }

  getStudentContactNumber(){
    return cy.get('input[name="contactNumber"]')
  }

  getStudentBloodGroup(){
    return cy.get('.MuiInputBase-colorPrimary div[role="button"]').eq(2)
  }

  getStudentBloodGroupDropdownValues(){
    return cy.get('ul li[role="option"]')
  }

  getStudentFathersName(){
    return cy.get('input[name="fathersName"]')
  }

  getStudentMothersName(){
    return cy.get('input[name="mothersName"]')
  }

  getStudentFathersEmail(){
    return cy.get('input[name="fathersEmail"]')
  }

  getStudentMothersEmail(){
    return cy.get('input[name="mothersEmail"]')
  }

  getStudentFathersOccupation(){
    return cy.get('input[name="fathersOccupation"]')
  }

  getStudentMothersOccupation(){
    return cy.get('input[name="mothersoccupation"]')
  }

  getStudentFathersContact(){
    return cy.get('input[name="fathersContact"]')
  }

  getStudentMothersContact(){
    return cy.get('input[name="mothersContact"]')
  }

  getStudentAddressLineOne(){
    return cy.get('input[name="addressLineOne"]')
  }

  getStudentAddressLineTwo(){
    return cy.get('input[name="addressLineTwo"]')
  }

  getStudentPincode(){
    return cy.get('input[name="pinCode"]')
  }

  getStudentState(){
    return cy.get('input[name="State"]')
  }

  getStudentCity(){
    return cy.get('input[name="City"]')
  }

  getStudentsAddStudentButton(){
    return cy.get('button[class*="AcademicDetails_saveChangesBtn"]')
  }

  getStudentsCancelButton(){
    return cy.get('button[class*="AcademicDetails_userCancelBtn"]')
  }

  getStudentsCloseIcon(){
    return cy.get('svg[data-testid="CloseIcon"]')
  }

  getStudentAcademicYear(){
    return cy.get('.css-i3pbo > .MuiFormControl-root > .MuiOutlinedInput-root > #demo-simple-select');
  }

  getStudentGrade(){
    return cy.get('.css-10bl4s4 > .MuiGrid-container > :nth-child(2) > .MuiFormControl-root > .MuiOutlinedInput-root > #demo-simple-select');
  }

  getStudentGradeDropdownValues(){
    return cy.get('ul li');
  }

  getStudentSection(){
    return cy.get(':nth-child(3) > .MuiFormControl-root > .MuiOutlinedInput-root > #demo-simple-select');
  }

  getStudentSectionDropdownValues(){
    return cy.get('ul li.MuiMenuItem-root');
  }

  getStudentAdmissionNo(){
    return cy.get('input[id="AdmissionNo"]');
  }

  getStudentRollNo(){
    return cy.get('input[id="RollNo"]');
  }

  getStudentAcademicDetailsSaveChangesBtn(){
    return cy.get('.AcademicDetails_saveChangesBtn__5Hcqk');
  }

  getStudentSearch(){
    return cy.get('input[type="search"]')
  }

  getStudentList(){
    return cy.get('.adminRoleTable tbody tr >td:nth-child(2)')
  }

  getContinueButton() {
    return cy.get(".continue-btn span")
  }

  getSelectRelationDrpDwn(){
    return cy.get('#demo-simple-select')
  }

  getSelectRelationDrpDwnLst(){
    return cy.get('div ul li[role="option"]')
  }

  getGuardianNameTxtFld(){
    return cy.get('input[id="Guardian Name*"]')
  }

  getContactNumTxtFld(){
    return cy.get('input[id="Contact Number*"]')
  }

  getEmailAdrssTxtFld(){
    return cy.get('input[id="Email Address"]')
  }
  getDiscardBtn(){
    return cy.get('button.cancel').contains("Discard")
  }
}
export default TeacherAccountsPage;
