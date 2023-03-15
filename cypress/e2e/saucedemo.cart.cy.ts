import { LoginPage, InventoryPage, ShoppingCartPage } from "../page/index";

let loginPage:LoginPage;
let inventoryPage:InventoryPage;
let shoppingCartPage:ShoppingCartPage;

describe("Verifying product selection Process for SauceDemo", () => {
    beforeEach(() => {
      cy.visit("https://www.saucedemo.com/");
      loginPage = new LoginPage();
      inventoryPage = new InventoryPage();
      shoppingCartPage = new ShoppingCartPage();
    });

    it("Backpack and Onesie should be added to the Cart", () => {
      cy.visit("https://www.saucedemo.com/");
      loginPage.login("standard_user","secret_sauce");
      // Assertion that verifies that products list is displayed
      inventoryPage.getTitle().should("have.text", "Products");

      inventoryPage.addOnesieToCart();
      inventoryPage.addBackpackToCart();

      //Assertion that verifies the correct clicking of the products
      inventoryPage.getRemoveOnesieBtn().should("be.visible");
      inventoryPage.getRemoveBackpackBtn().should("be.visible");
      inventoryPage.getCartBadge().should("have.text",2);


      inventoryPage.goToCart();

      //Assertion that verifies the two items in the cart and only those
      shoppingCartPage.getItemName().should("contain","Sauce Labs Backpack");
      shoppingCartPage.getItemName().should("contain","Sauce Labs Onesie");
      shoppingCartPage.getItemName().should("have.length",2);
    })
  });
  