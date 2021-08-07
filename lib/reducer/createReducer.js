"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _reducerObj, _state;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReducer = void 0;
class CreateReducer {
    constructor(state) {
        _reducerObj.set(this, void 0);
        _state.set(this, void 0);
        __classPrivateFieldSet(this, _state, state);
        __classPrivateFieldSet(this, _reducerObj, {});
    }
    addAction(action, handler) {
        if (Reflect.has(__classPrivateFieldGet(this, _reducerObj), action))
            throw new Error("The action exists");
        Reflect.set(__classPrivateFieldGet(this, _reducerObj), action, handler);
        return this;
    }
    finish() {
        return (State = __classPrivateFieldGet(this, _state), action) => {
            const fn = Reflect.get(__classPrivateFieldGet(this, _reducerObj), action.type);
            if (typeof fn === "function")
                return fn.call(null, State, action);
            return State;
        };
    }
}
exports.CreateReducer = CreateReducer;
_reducerObj = new WeakMap(), _state = new WeakMap();
