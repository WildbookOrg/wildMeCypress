describe('Tests relating to individuals.jsp', function() {
  beforeEach(()=>{
    Cypress.config('baseUrl', 'https://lynx.wildbook.org/'); //production URL: https://lynx.wildbook.org/ https://general-staging.wildbook.org/
    cy.logout();
    cy.fixture('localVariables.json').then((localVars)=>{
      cy.loginLynxStaging(localVars.username, localVars.password);
    });
  });
  afterEach(function () {
    cy.logout();
  });
  it("Should see matching videos or images of collaborator a when logged in as collaborator b", function(){
    cy.fixture('liveVariables.json').then((liveVars) =>{
      cy.logout();
      cy.loginLynxStaging(liveVars.collaboratorB_Username, liveVars.collaboratorB_Password);
      cy.visit("/encounters/searchResults.jsp?ne_lat=&ne_long=&sw_lat=&sw_long=&locationField=&datepicker1=&datepicker2=&dateaddedpicker1=&dateaddedpicker2=&male=male&female=female&unknown=unknown&genusField=&alive=alive&dead=dead&observationKey1=&observationValue1=&numSearchedObs=1&lifeStageField=None&numResights=1&alternateIDField=&individualID=&tissueSampleID=&biomeasurement13C%28operator%29=gteq&biomeasurement13C%28value%29=&biomeasurement15N%28operator%29=gteq&biomeasurement15N%28value%29=&biomeasurement34S%28operator%29=gteq&biomeasurement34S%28value%29=&nameField=&additionalCommentsField=&username=collaborator_a&submitSearch=Search+Sightings");
      cy.contains('a', liveVars.matchingImagesVideos).click();
      cy.contains(liveVars.collaboratorA_imageName).should('exist');
    });
  });
  it("Should not see matching videos or images of collaborator a when logged in as collaborator c", function(){
    cy.fixture('liveVariables.json').then((liveVars) =>{
      cy.logout();
      cy.loginLynxStaging(liveVars.collaboratorC_Username, liveVars.collaboratorC_Password);
      cy.visit("/encounters/searchResults.jsp?ne_lat=&ne_long=&sw_lat=&sw_long=&locationField=&datepicker1=&datepicker2=&dateaddedpicker1=&dateaddedpicker2=&male=male&female=female&unknown=unknown&genusField=&alive=alive&dead=dead&observationKey1=&observationValue1=&numSearchedObs=1&lifeStageField=None&numResights=1&alternateIDField=&individualID=&tissueSampleID=&biomeasurement13C%28operator%29=gteq&biomeasurement13C%28value%29=&biomeasurement15N%28operator%29=gteq&biomeasurement15N%28value%29=&biomeasurement34S%28operator%29=gteq&biomeasurement34S%28value%29=&nameField=&additionalCommentsField=&username=collaborator_a&submitSearch=Search+Sightings");
      cy.contains('a', liveVars.matchingImagesVideos).click();
      cy.contains(liveVars.collaboratorA_imageName).should('not.exist');
    });
  });
  it("Should see results calendar of collaborator a when logged in as collaborator b", function(){
    cy.fixture('liveVariables.json').then((liveVars) =>{
      cy.logout();
      cy.loginLynxStaging(liveVars.collaboratorB_Username, liveVars.collaboratorB_Password);
      cy.visit("/encounters/searchResults.jsp?ne_lat=&ne_long=&sw_lat=&sw_long=&locationField=&datepicker1=&datepicker2=&dateaddedpicker1=&dateaddedpicker2=&male=male&female=female&unknown=unknown&genusField=&alive=alive&dead=dead&observationKey1=&observationValue1=&numSearchedObs=1&lifeStageField=None&numResights=1&alternateIDField=&individualID=&tissueSampleID=&biomeasurement13C%28operator%29=gteq&biomeasurement13C%28value%29=&biomeasurement15N%28operator%29=gteq&biomeasurement15N%28value%29=&biomeasurement34S%28operator%29=gteq&biomeasurement34S%28value%29=&nameField=&additionalCommentsField=&username=collaborator_a&submitSearch=Search+Sightings");
      cy.contains('a', liveVars.resultsCalendar).click();
      cy.contains(liveVars.calendarEventName).should('exist');
    });
  });
  it("Should not see results calendar of collaborator a when logged in as collaborator c", function(){
    cy.fixture('liveVariables.json').then((liveVars) =>{
      cy.logout();
      cy.loginLynxStaging(liveVars.collaboratorC_Username, liveVars.collaboratorC_Password);
      cy.visit("/encounters/searchResults.jsp?ne_lat=&ne_long=&sw_lat=&sw_long=&locationField=&datepicker1=&datepicker2=&dateaddedpicker1=&dateaddedpicker2=&male=male&female=female&unknown=unknown&genusField=&alive=alive&dead=dead&observationKey1=&observationValue1=&numSearchedObs=1&lifeStageField=None&numResights=1&alternateIDField=&individualID=&tissueSampleID=&biomeasurement13C%28operator%29=gteq&biomeasurement13C%28value%29=&biomeasurement15N%28operator%29=gteq&biomeasurement15N%28value%29=&biomeasurement34S%28operator%29=gteq&biomeasurement34S%28value%29=&nameField=&additionalCommentsField=&username=collaborator_a&submitSearch=Search+Sightings");
      cy.contains('a', liveVars.resultsCalendar).click();
      cy.wait(5000);
      cy.contains(liveVars.calendarEventName).should('not.exist');
    });
  });
});
