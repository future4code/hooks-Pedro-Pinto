"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const UserDatabase_1 = require("../database/UserDatabase");
const getUsers = async (req, res) => {
    let errorCode = 400;
    try {
        const userDatabase = new UserDatabase_1.UserDatabase();
        const result = await userDatabase.getAllUsers;
        res.status(200).send({ users: result });
    }
    catch (error) {
        res.status(errorCode).send({ message: error.message });
    }
};
exports.getUsers = getUsers;
//# sourceMappingURL=getUsers.js.map