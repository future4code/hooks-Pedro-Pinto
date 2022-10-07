"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDatabase = void 0;
const BaseDatabase_1 = __importDefault(require("./BaseDatabase"));
const tableNames_1 = require("./tableNames");
class UserDatabase extends BaseDatabase_1.default {
    async getAllUsers() {
        const result = await this.connection(tableNames_1.TABLE_USERS).select();
        return result;
    }
    createUser() { }
    getUserById() { }
}
exports.UserDatabase = UserDatabase;
//# sourceMappingURL=UserDatabase.js.map