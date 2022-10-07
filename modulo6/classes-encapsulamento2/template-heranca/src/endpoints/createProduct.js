"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = void 0;
const connection_1 = __importDefault(require("../database/connection"));
const tableNames_1 = require("../database/tableNames");
const Product_1 = require("../models/Product");
const createProduct = async (req, res) => {
    let errorCode = 400;
    try {
        const name = req.body.name;
        const price = req.body.price;
        if (!name || !price) {
            throw new Error("Body inválido.");
        }
        const product = new Product_1.Product(Date.now().toString(), name, price);
        await (0, connection_1.default)(tableNames_1.TABLE_PRODUCTS).insert({
            id: product.getId(),
            name: product.getName(),
            price: product.getPrice()
        });
        res.status(201).send({ message: "Produto criado", product: product });
    }
    catch (error) {
        res.status(errorCode).send({ message: error.message });
    }
};
exports.createProduct = createProduct;
//# sourceMappingURL=createProduct.js.map