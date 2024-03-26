describe('Header', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('links to the correct page', () => {
    cy.dataCy('logo').click();
    cy.location('pathname').should('eq', '/');

    // cy.on('uncaught:exception', (err, runnable) => {
    //   expect(err.message).to.include('NEXT_NOT_FOUND');

    //   // return false to prevent the error from
    //   // failing this test
    //   return false;
    // });
    // cy.dataCy('link-item').first().click();
    // cy.location('pathname').should('eq', '/fake-menu');

    // cy.dataCy('link-item').last().click();
    // cy.location('pathname').should('eq', '/fake-menu-2');
  });

  it.only('searches  results', () => {
    cy.dataCy('search-input').type('green keycaps{enter}');
    cy.location('pathname').should('contain', '/search');
  });
});
