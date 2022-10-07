"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = void 0;
const connection_1 = __importDefault(require("../database/connection"));
const tableNames_1 = require("../database/tableNames");
const getProducts = async (req, res) => {
    let errorCode = 400;
    try {
        const result = await (0, connection_1.default)(tableNames_1.TABLE_PRODUCTS).select();
        res.status(200).send({ products: result });
    }
    catch (error) {
        res.status(errorCode).send({ message: error.message });
    }
};
exports.getProducts = getProducts;
//# sourceMappingURL=getProducts.js.map