class InventoryPage {
    private title: string;
    private cartLink: string;
    private cartBadge: string;
    //Onesie
    private onesieAddCartBtn: string;
    private removeOnesieBtn:string;
    //Backpack
    private backpackAddCartBtn: string;
    private removeBackpackBtn: string;

    constructor() {
        this.title = ".title";
        this.cartLink = ".shopping_cart_link";
        this.cartBadge = ".shopping_cart_badge";
        //Onesie
        this.onesieAddCartBtn = "#add-to-cart-sauce-labs-onesie";
        this.removeOnesieBtn = "#remove-sauce-labs-onesie";
        //Backpack
        this.backpackAddCartBtn = "#add-to-cart-sauce-labs-backpack";
        this.removeBackpackBtn = "#remove-sauce-labs-backpack";
    }

    public addOnesieToCart() {
        cy.get(this.onesieAddCartBtn).click();
    }

    public addBackpackToCart(){
        cy.get(this.backpackAddCartBtn).click();
    }

    public goToCart(){
        cy.get(this.cartLink).click();
    }

    public getTitle(){
        return cy.get(this.title);
    }

    public getCartBadge(){
        return cy.get(this.cartBadge);
    }

    public getRemoveOnesieBtn(){
        return cy.get(this.removeOnesieBtn);
    }

    public getRemoveBackpackBtn(){
        return cy.get(this.removeBackpackBtn);
    }
}

export { InventoryPage };