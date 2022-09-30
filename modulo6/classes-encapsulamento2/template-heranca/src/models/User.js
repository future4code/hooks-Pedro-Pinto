"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, email, password) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.id = id;
        this.email = email;
        this.password = password;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getPassword() {
        return this.password;
    }
    setId(newId) {
        this.id = newId;
    }
    setEmail(newEmail) {
        this.email = newEmail;
    }
    setPassword(newPassword) {
        this.password = newPassword;
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map