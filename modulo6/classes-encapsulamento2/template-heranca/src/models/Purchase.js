"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Purchase = void 0;
class Purchase {
    constructor(id, userId, productId, quantity, totalPrice) {
        this.id = id;
        this.userId = userId;
        this.productId = productId;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
        this.id = id;
        this.userId = userId;
        this.productId = productId;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
    }
    getId() {
        return this.id;
    }
    getUserId() {
        return this.userId;
    }
    getProductId() {
        return this.productId;
    }
    getQuantity() {
        return this.quantity;
    }
    getTotalPrice() {
        return this.totalPrice;
    }
    setId(newId) {
        this.id = newId;
    }
    setUserId(newUserId) {
        this.userId = newUserId;
    }
    setProductId(newProductId) {
        this.productId = newProductId;
    }
    setQuantity(newQuantity) {
        this.quantity = newQuantity;
    }
    setTotalPrice(newTotalPrice) {
        this.totalPrice = newTotalPrice;
    }
}
exports.Purchase = Purchase;
//# sourceMappingURL=Purchase.js.map