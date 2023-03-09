describe("Verifying product selection Process for SauceDemo", () => {
    beforeEach(() => {
      cy.visit("https://www.saucedemo.com/");
    });

    it("Backpack and Onesie should be added to the Cart", () => {
      cy.visit("https://www.saucedemo.com/");
      cy.get('[data-test="username"]').type("standard_user");
      cy.get('[data-test="password"]').type("secret_sauce");
      cy.get('[data-test="login-button"]').click();
  
      // Assertion that verifies that products list is displayed
      cy.get(".title").should("have.text", "Products");

      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();

      //Assertion that verifies the correct clicking of the products
      cy.get('[data-test="remove-sauce-labs-backpack"]').should("be.visible");
      cy.get('[data-test="remove-sauce-labs-onesie"]').should("be.visible");
      cy.get('.shopping_cart_badge').should("have.text",2);


      cy.get('.shopping_cart_link').click();

      //Assertion that verifies the two items in the cart and only those
      cy.get('.inventory_item_name').should("contain","Sauce Labs Backpack");
      cy.get('.inventory_item_name').should("contain","Sauce Labs Onesie");
      cy.get('.inventory_item_name').should("have.length",2);
    })
  });
  