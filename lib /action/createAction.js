"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2021-07-30 23:20:54
 * @LastEditTime: 2021-07-30 23:21:36
 * @FilePath: /reduxEncapsulation/src/action/createAction.ts
 * @Description: createAction
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAction = void 0;
const defaultAction_1 = require("./defaultAction");
function createAction(action, fn) {
    return (params) => fn(defaultAction_1.defaultAction)(action, params);
}
exports.createAction = createAction;
