"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPurchase = void 0;
const connection_1 = __importDefault(require("../database/connection"));
const tableNames_1 = require("../database/tableNames");
const Product_1 = require("../models/Product");
const Purchase_1 = require("../models/Purchase");
const createPurchase = async (req, res) => {
    let errorCode = 400;
    try {
        const userId = req.body.userId;
        const productId = req.body.productId;
        const quantity = req.body.quantity;
        if (!userId || !productId || !quantity) {
            throw new Error("Body inválido.");
        }
        const findUser = await (0, connection_1.default)(tableNames_1.TABLE_USERS)
            .select()
            .where({ id: userId });
        if (findUser.length === 0) {
            errorCode = 404;
            throw new Error("Usuário não encontrado.");
        }
        const findProduct = await (0, connection_1.default)(tableNames_1.TABLE_PRODUCTS)
            .select()
            .where({ id: productId });
        if (findProduct.length === 0) {
            errorCode = 404;
            throw new Error("Produto não encontrado.");
        }
        const product = new Product_1.Product(findProduct[0].id, findProduct[0].name, findProduct[0].price);
        const purchase = new Purchase_1.Purchase(Date.now().toString(), userId, productId, quantity, product.getPrice() * quantity);
        await (0, connection_1.default)(tableNames_1.TABLE_PURCHASES).insert({
            id: purchase.getId(),
            user_id: purchase.getUserId(),
            product_id: purchase.getProductId(),
            quantity: purchase.getQuantity(),
            total_price: purchase.getTotalPrice()
        });
        res.status(201).send({ message: "Compra registrada", purchase: purchase });
    }
    catch (error) {
        res.status(errorCode).send({ message: error.message });
    }
};
exports.createPurchase = createPurchase;
//# sourceMappingURL=createPurchase.js.map