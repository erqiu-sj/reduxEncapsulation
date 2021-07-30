"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CreateReducer_reducerObj, _CreateReducer_state;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReducer = void 0;
class CreateReducer {
    constructor(state) {
        _CreateReducer_reducerObj.set(this, void 0);
        _CreateReducer_state.set(this, void 0);
        __classPrivateFieldSet(this, _CreateReducer_state, state, "f");
        __classPrivateFieldSet(this, _CreateReducer_reducerObj, {}, "f");
    }
    addAction(action, handler) {
        if (Reflect.has(__classPrivateFieldGet(this, _CreateReducer_reducerObj, "f"), action))
            throw new Error("The action exists");
        Reflect.set(__classPrivateFieldGet(this, _CreateReducer_reducerObj, "f"), action, handler);
        return this;
    }
    finish() {
        return (State = __classPrivateFieldGet(this, _CreateReducer_state, "f"), action) => {
            const fn = Reflect.get(__classPrivateFieldGet(this, _CreateReducer_reducerObj, "f"), action.type);
            if (typeof fn === "function")
                return fn.call(null, State, action);
            return __classPrivateFieldGet(this, _CreateReducer_state, "f");
        };
    }
}
exports.CreateReducer = CreateReducer;
_CreateReducer_reducerObj = new WeakMap(), _CreateReducer_state = new WeakMap();
