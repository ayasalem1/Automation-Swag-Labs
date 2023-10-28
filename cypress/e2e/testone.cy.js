/// <reference types= "cypress" />

Cypress.Commands.add("loginfortheuser",(username,password)=>{

  cy.visit("https://www.saucedemo.com")
  
// cy.get('#APjFqb').type("aya{enter}")
//     cy.get('.FPdoLc > center > .gNO89b').click
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
 
});
Cypress.Commands.add("add_to_cart",(number_of_items)=>{

  for (let i = 0; i < number_of_items; i++) {
    cy.get(".btn").eq(i).click()
    
  }


});

describe('swag lab', () => {

  it('add all the item to the cart ',()=>{
   
   
    
    
    cy.loginfortheuser("standard_user","secret_sauce")
    cy.wait(1000)
    
       cy.add_to_cart(5);
       
       cy.get('.shopping_cart_badge').invoke('text').should('include',5)
       
       cy.get(".shopping_cart_link").click()
       cy.wait(1000)
       cy.get('[data-test="checkout"]').click()
       cy.wait(1000)
       cy.get('[data-test="firstName"]').type("aya")
       
       cy.get('[data-test="lastName"]').type("salem")
       
       cy.get('[data-test="postalCode"]').type("123")
       cy.wait(1000)
       cy.get('[data-test="continue"]').click()
       cy.wait(1000)
       cy.get('[data-test="finish"]').click()
       cy.get('.complete-header').invoke('text').should('contain',"Thank you for your order!")

  });
  
  
});