/*
 * @Author: 邱狮杰
 * @Date: 2021-07-30 21:55:11
 * @LastEditTime: 2021-08-07 09:43:13
 * @FilePath: /reduxEncapsulation/src/action/defaultAction.ts
 * @Description:  defaultAction
 */

import { Action } from "redux";

export function defaultAction<T, R>(
  action: Action["type"],
  fn?: (action: Action["type"]) => (params: T) => Action | (Action & R)
): (params: T) => Action | (Action & R) {
  if (typeof fn !== "function") return () => ({ type: action });
  return fn(action);
}
