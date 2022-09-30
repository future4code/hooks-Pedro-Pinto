"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const connection_1 = __importDefault(require("../database/connection"));
const tableNames_1 = require("../database/tableNames");
const User_1 = require("../models/User");
const createUser = async (req, res) => {
    let errorCode = 400;
    try {
        const email = req.body.email;
        const password = req.body.password;
        if (!email || !password) {
            throw new Error("Body inválido.");
        }
        const user = new User_1.User(Date.now().toString(), email, password);
        await (0, connection_1.default)(tableNames_1.TABLE_USERS).insert({
            id: user.getId(),
            email: user.getEmail(),
            password: user.getPassword()
        });
        res.status(201).send({ message: "Usuário criado", user: user });
    }
    catch (error) {
        res.status(errorCode).send({ message: error.message });
    }
};
exports.createUser = createUser;
//# sourceMappingURL=createUser.js.map