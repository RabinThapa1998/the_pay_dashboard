"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidObjectId = void 0;
const ObjectId = require("mongoose").Types.ObjectId;
function isValidObjectId(id) {
    if (ObjectId.isValid(id)) {
        if (String(new ObjectId(id)) === id)
            return true;
        return false;
    }
    return false;
}
exports.isValidObjectId = isValidObjectId;
