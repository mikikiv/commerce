describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  const products = [
    {
      name: 'green keycaps',
      price: '$10.00'
    },
    {
      name: 'red keycaps',
      price: '$10.00'
    },
    {
      name: 'blue keycaps',
      price: '$10.00'
    }
  ];
  it('displays all 3 products on the homepage', () => {
    cy.dataCy('product-tag').should('have.length', 3);
    for (const product of products) {
      cy.dataCy('product-tag')
        .eq(products.indexOf(product))
        .within(() => {
          cy.dataCy('product-name').should('have.text', product.name);
          cy.dataCy('product-price').should('contain.text', product.price);
        });
    }
  });
});
