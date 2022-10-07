"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("./connection"));
const data_1 = require("./data");
const tableNames_1 = require("./tableNames");
const createTables = async () => {
    await connection_1.default.raw(`
DROP TABLE IF EXISTS ${tableNames_1.TABLE_PURCHASES}, ${tableNames_1.TABLE_PRODUCTS}, ${tableNames_1.TABLE_USERS};

CREATE TABLE IF NOT EXISTS ${tableNames_1.TABLE_USERS}(
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS ${tableNames_1.TABLE_PRODUCTS}(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(6,2) NOT NULL
);

CREATE TABLE IF NOT EXISTS ${tableNames_1.TABLE_PURCHASES}(
    id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    product_id VARCHAR(255) NOT NULL,
    quantity INT NOT NULL,
    total_price DECIMAL(6,2) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES ${tableNames_1.TABLE_USERS}(id),
    FOREIGN KEY (product_id) REFERENCES ${tableNames_1.TABLE_PRODUCTS}(id)
);
    `)
        .then(() => {
        console.log(`Tables created successfully!`);
        insertData();
    })
        .catch((error) => printError(error));
};
const insertData = async () => {
    try {
        await (0, connection_1.default)(tableNames_1.TABLE_USERS)
            .insert(data_1.users)
            .then(() => console.log(`${tableNames_1.TABLE_USERS} populated!`))
            .catch((error) => printError(error));
        await (0, connection_1.default)(tableNames_1.TABLE_PRODUCTS)
            .insert(data_1.products)
            .then(() => console.log(`${tableNames_1.TABLE_PRODUCTS} populated!`))
            .catch((error) => printError(error));
        await (0, connection_1.default)(tableNames_1.TABLE_PURCHASES)
            .insert(data_1.purchases)
            .then(() => console.log(`${tableNames_1.TABLE_PURCHASES} populated!`))
            .catch((error) => printError(error));
    }
    catch (error) {
        console.log(error.sqlMessage || error.message);
    }
    finally {
        console.log("Ending connection!");
        return connection_1.default.destroy();
    }
};
const printError = (error) => {
    console.log(error.sqlMessage || error.message);
};
createTables();
//# sourceMappingURL=migrations.js.map