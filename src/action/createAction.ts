/*
 * @Author: 邱狮杰
 * @Date: 2021-07-30 23:20:54
 * @LastEditTime: 2021-07-30 23:21:36
 * @FilePath: /reduxEncapsulation/src/action/createAction.ts
 * @Description: createAction
 */

import { Action } from "redux";
import { defaultAction } from "./defaultAction";

export function createAction<T extends object>(
  action: Action["type"],
  fn: (
    actionFn: (
      action: Action["type"],
      transmitInformation?: T
    ) => () => Action | (Action & T)
  ) => (ownAction: Action["type"], params?: T) => Action | (Action & T)
): (params?: T) => Action | (Action & T) {
  return (params?: T) => fn(defaultAction)(action, params);
}
