/*
 * @Author: 邱狮杰
 * @Date: 2021-07-30 21:55:11
 * @LastEditTime: 2021-07-30 23:21:31
 * @FilePath: /reduxEncapsulation/src/action/defaultAction.ts
 * @Description:  defaultAction
 */

import { Action } from "redux";

export function defaultAction<T extends object>(
  action: Action["type"],
  transmitInformation?: T
): () => Action | (Action & T) {
  return (): Action | (Action & T) => ({
    type: action,
    ...transmitInformation,
  });
}
