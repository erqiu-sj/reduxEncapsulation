/*
 * @Author: 邱狮杰
 * @Date: 2021-07-30 21:55:11
 * @LastEditTime: 2021-08-06 23:55:14
 * @FilePath: /reduxEncapsulation/src/action/defaultAction.ts
 * @Description:  defaultAction
 */

import { Action } from "redux";

// export function defaultAction<T extends object>(
//   action: Action["type"],
//   transmitInformation?: T
// ): () => Action | (Action & T) {
//   return (): Action | (Action & T) => ({
//     type: action,
//     ...transmitInformation,
//   });
// }

export function defaultAction<T, R>(
  action: Action["type"],
  fn?: (action: Action["type"]) => (params: T) => Action | (Action & R)
): (params: T) => Action | (Action & R) {
  if (typeof fn !== "function") return () => ({ type: action });
  return fn(action);
}
console.log(
  defaultAction<string, { type: string; a: string }>("Add", (action) => {
    return (params) => {
      console.log(params); // what? 这个参数是什么时候传进来的。。
      return { type: action + "d", a: params };
    };
  })("what?")
);
