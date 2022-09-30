"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ping = void 0;
const ping = async (req, res) => {
    let errorCode = 400;
    try {
        res.status(200).send({ message: "Pong!" });
    }
    catch (error) {
        res.status(errorCode).send({ message: error.message });
    }
};
exports.ping = ping;
//# sourceMappingURL=ping.js.map