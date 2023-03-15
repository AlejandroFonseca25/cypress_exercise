class ShoppingCartPage {
    private itemName:string;

    constructor () {
        this.itemName = ".inventory_item_name";
    }

    public getItemName(){
        return cy.get(this.itemName);
    }
}

export { ShoppingCartPage };