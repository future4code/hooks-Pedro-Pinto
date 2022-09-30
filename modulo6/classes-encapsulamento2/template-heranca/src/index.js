"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const ping_1 = require("./endpoints/ping");
const createUser_1 = require("./endpoints/createUser");
const getUsers_1 = require("./endpoints/getUsers");
const createProduct_1 = require("./endpoints/createProduct");
const getProducts_1 = require("./endpoints/getProducts");
const createPurchase_1 = require("./endpoints/createPurchase");
const getUserPurchases_1 = require("./endpoints/getUserPurchases");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`);
});
app.get("/ping", ping_1.ping);
app.post("/users", createUser_1.createUser);
app.get("/users", getUsers_1.getUsers);
app.post("/products", createProduct_1.createProduct);
app.get("/products", getProducts_1.getProducts);
app.post("/purchases", createPurchase_1.createPurchase);
app.get("/users/:id/purchases", getUserPurchases_1.getUserPurchases);
//# sourceMappingURL=index.js.map