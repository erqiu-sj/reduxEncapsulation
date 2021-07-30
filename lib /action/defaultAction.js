"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2021-07-30 21:55:11
 * @LastEditTime: 2021-07-30 23:21:31
 * @FilePath: /reduxEncapsulation/src/action/defaultAction.ts
 * @Description:  defaultAction
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultAction = void 0;
function defaultAction(action, transmitInformation) {
    return () => (Object.assign({ type: action }, transmitInformation));
}
exports.defaultAction = defaultAction;
