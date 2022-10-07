"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserPurchases = void 0;
const connection_1 = __importDefault(require("../database/connection"));
const tableNames_1 = require("../database/tableNames");
const getUserPurchases = async (req, res) => {
    let errorCode = 400;
    try {
        const id = req.params.id;
        const [result] = await connection_1.default.raw(`
        SELECT
            ${tableNames_1.TABLE_USERS}.email,
            ${tableNames_1.TABLE_PRODUCTS}.name AS product_name,
            ${tableNames_1.TABLE_PRODUCTS}.price AS product_price,
            ${tableNames_1.TABLE_PURCHASES}.quantity AS product_quantity,
            ${tableNames_1.TABLE_PURCHASES}.total_price
        FROM ${tableNames_1.TABLE_PURCHASES}
        JOIN ${tableNames_1.TABLE_USERS}
        ON ${tableNames_1.TABLE_PURCHASES}.user_id = ${tableNames_1.TABLE_USERS}.id
        JOIN ${tableNames_1.TABLE_PRODUCTS}
        ON ${tableNames_1.TABLE_PURCHASES}.product_id = ${tableNames_1.TABLE_PRODUCTS}.id
        WHERE ${tableNames_1.TABLE_PURCHASES}.user_id = ${id};
        `);
        res.status(200).send({ purchases: result });
    }
    catch (error) {
        res.status(errorCode).send({ message: error.message });
    }
};
exports.getUserPurchases = getUserPurchases;
//# sourceMappingURL=getUserPurchases.js.map