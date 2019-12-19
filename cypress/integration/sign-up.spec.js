describe('Sign up', function() {
  function buildFormSelector(formName){
    return `[data-${formName}-form] form`;
  }

  function getFormInput(inputName, customFormSelector){
    const formSelector = customFormSelector || buildFormSelector('user');
    return cy.get(`${formSelector} input[name=${inputName}]`);
  }

  it('should redirect to user auth form after creating a new user', function() {
    cy.visit('http://localhost:9000');
    cy.get('[data-sign-up-link]').click();
    getFormInput('name').type('Rafael Camargo');
    getFormInput('email').type('hello@rafaelcamargo.com');
    getFormInput('password').type('123');
    cy.get(buildFormSelector('user')).submit();
    cy.get(buildFormSelector('user-auth')).should('be.visible');
  })
})
