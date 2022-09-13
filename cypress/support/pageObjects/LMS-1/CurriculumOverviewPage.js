class CurriculumOverview {

  getCurriculumTitle(){
    return cy.get('.overview_title').eq(1)
  }
  getGradeWithSubject(gradeSubject) {
    return cy.get(".btn").eq(gradeSubject);
  }

  getTheme(themeName) {
    return cy.get(".card_material").eq(themeName);
  }

  getChapterDropdown(chapterArrow) {
    return cy.get(".float-end").eq(chapterArrow);
  }

  getCHNumber(chapterNo){
    return cy.get('.flex-shrink-0.bg-gray:visible').eq(chapterNo)
  }

  getUnitDetails(unitName){
    return cy.get('.mb-2.color-lite:visible').eq(unitName)
  }

  getChapterDetails(chapterName){
    return cy.get('.card_inner_chapter:visible').eq(chapterName)
  }

  getShowTopics(showTopicsArrow){
    return cy.get('.mileChapterShowTop:visible').eq(showTopicsArrow)
  }

  getTopicNumber(topicNumber){
    return cy.get('.text-captialize:visible').eq(topicNumber)
  }

  getTopicName(topicName){
    return cy.get('.topic_inner_card:visible').eq(topicName)
  }
  
  getStepContent() {
    return cy.get(".footer_subtitle");
  }

  getFooterContent() {
    return cy.get(".footer_title");
  }

  getRequest() {
    return cy.contains('Request change');
  }

  getContinue() {
    return cy.contains('Continue');
  }

  getEChapterName(chName){
    return cy.get('.card_material:visible').eq(chName)
  }
  
  getEChapterdown(chapterSelection){
    return cy.get('.fa-chevron-down:visible').eq(chapterSelection)
  }

  getETopicNumber(topicNo){
    return cy.get('.flex-shrink-0.bg-gray:visible').eq(topicNo)
  }

  getETopicName(topicName){
    return cy.get('.card_inner_chapter:visible').eq(topicName)
  }

}
export default CurriculumOverview;
