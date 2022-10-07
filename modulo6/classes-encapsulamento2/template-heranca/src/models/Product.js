"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.id = id;
        this.name = name;
        this.price = price;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
    setId(newId) {
        this.id = newId;
    }
    setName(newName) {
        this.name = newName;
    }
    setPrice(newPrice) {
        this.price = newPrice;
    }
}
exports.Product = Product;
//# sourceMappingURL=Product.js.map