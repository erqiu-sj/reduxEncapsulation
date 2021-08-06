/*
 * @Author: 邱狮杰
 * @Date: 2021-07-30 21:55:11
 * @LastEditTime : 2021-08-06 16:26:48
 * @FilePath     : /reduxEncapsulation/src/action/defaultAction.ts
 * @Description:  defaultAction
 */

import { Action } from "redux";

export function defaultAction<T extends object>(
  action: Action["type"],
): (params: T) => Action | (Action & T) {
  return (params: T): Action | (Action & T) => ({
    type: action,
    ...params
  });
}

