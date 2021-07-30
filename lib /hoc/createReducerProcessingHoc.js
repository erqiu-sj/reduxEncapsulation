"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReducerProcessingHoc = void 0;
/*
 * @Author: 邱狮杰
 * @Date: 2021-07-30 22:52:47
 * @LastEditTime: 2021-07-30 23:16:02
 * @FilePath: /reduxEncapsulation/src/hoc/createReducerProcessingHoc.tsx
 * @Description: createReducerProcessingHoc
 */
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
/**
 * @param { stirng } hocName  hoc component name for debugging
 * @param { Component } BaseComponent react component
 * @param { MapStateToProps } mapStateToProps
 * @param { MapDispatchToProps } mapDispatchToProps
 * @returns Returns a high-level component wrapped in mapstatetoprops and mapdispatchtoprops
 */
function createReducerProcessingHoc(hocName, BaseComponent, mapStateToProps, mapDispatchToProps) {
    class Hoc extends react_1.Component {
        render() {
            const resetProps = __rest(this.props, []);
            return react_1.default.createElement(BaseComponent, Object.assign({}, resetProps));
        }
    }
    Hoc.displayName = `${hocName}(${BaseComponent.name})`;
    // @ts-ignore
    return react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Hoc);
}
exports.createReducerProcessingHoc = createReducerProcessingHoc;
