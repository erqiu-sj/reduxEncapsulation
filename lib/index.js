"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useConnect = exports.useActions = exports.createReducerProcessingHoc = exports.defaultAction = exports.CreateReducer = void 0;
/*
 * @Author: 邱狮杰
 * @Date: 2021-07-30 21:46:28
 * @LastEditTime: 2021-08-07 09:42:26
 * @FilePath: /reduxEncapsulation/src/index.ts
 * @Description: entry
 */
const defaultAction_1 = require("./action/defaultAction");
Object.defineProperty(exports, "defaultAction", { enumerable: true, get: function () { return defaultAction_1.defaultAction; } });
const createReducer_1 = require("./reducer/createReducer");
Object.defineProperty(exports, "CreateReducer", { enumerable: true, get: function () { return createReducer_1.CreateReducer; } });
const createReducerProcessingHoc_1 = require("./hoc/createReducerProcessingHoc");
Object.defineProperty(exports, "createReducerProcessingHoc", { enumerable: true, get: function () { return createReducerProcessingHoc_1.createReducerProcessingHoc; } });
const hooks_1 = require("./hooks");
Object.defineProperty(exports, "useActions", { enumerable: true, get: function () { return hooks_1.useActions; } });
Object.defineProperty(exports, "useConnect", { enumerable: true, get: function () { return hooks_1.useConnect; } });
