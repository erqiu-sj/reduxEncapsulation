/*
 * @Author: 邱狮杰
 * @Date: 2021-07-30 21:48:59
 * @LastEditTime : 2021-08-06 16:21:30
 * @FilePath     : /reduxEncapsulation/src/reducer/createReducer.ts
 * @Description:
 */
import { Action } from "redux";

export class CreateReducer<S, A> {
  #reducerObj: object;
  #state: S;

  constructor(state: S) {
    this.#state = state;
    this.#reducerObj = {};
  }

  addAction(
    action: Action["type"],
    handler: (state: S, action: Action & A) => S
  ): this {
    if (Reflect.has(this.#reducerObj, action))
      throw new Error("The action exists");
    Reflect.set(this.#reducerObj, action, handler);
    return this;
  }

  finish(): (State: S, action: Action & A) => S {
    return (State: S = this.#state, action: Action & A): S => {
      const fn = Reflect.get(this.#reducerObj, action.type);
      if (typeof fn === "function") return fn.call(null, State, action);
      return State;
    };
  }
}
