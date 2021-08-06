"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2021-07-30 21:55:11
 * @LastEditTime : 2021-08-06 16:26:48
 * @FilePath     : /reduxEncapsulation/src/action/defaultAction.ts
 * @Description:  defaultAction
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultAction = void 0;
function defaultAction(action) {
    return (params) => (Object.assign({ type: action }, params));
}
exports.defaultAction = defaultAction;
