describe('Shopping Cart', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('users can add products to the cart', () => {
    cy.dataCy('product-tag').first().click();
    cy.dataCy('Material').contains('Rubber').click();
    cy.get('[aria-label="Add to cart"]').click();
    cy.dataCy('cart-quantity-nav-display').contains('1');
  });
});
