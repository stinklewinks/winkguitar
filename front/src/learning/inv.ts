class Inventory {
    private items!: object;

    addItem(item: object){
        this.items = item;
    }
}

export {Inventory}