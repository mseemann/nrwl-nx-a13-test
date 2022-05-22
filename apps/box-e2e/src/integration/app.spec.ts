describe('box', () => {
  beforeEach(() => cy.visit('/'));

  it('should navigate to feature a', () => {
    cy.get('a[href="/feature-a"]')
        .should('exist')
        .click();

    cy.get('[data-cy="test"]')
        .should('exist');

  });
});
