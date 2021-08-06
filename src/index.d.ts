/*
 * @Author: 邱狮杰
 * @Date: 2021-07-30 21:46:35
 * @LastEditTime : 2021-08-06 16:37:30
 * @FilePath     : /reduxEncapsulation/src/index.d.ts
 * @Description: create reducer
 */
import { Action } from "redux";
import {
  ConnectedComponent,
  MapDispatchToProps,
  MapStateToProps,
} from "react-redux";
import { ComponentType } from "react";

export declare function defaultAction<T extends object>(action: Action["type"]): (params: T) => Action | (Action & T)

export declare class CreateReducer<S, A> {
  constructor(state: S);
  addAction(
    action: Action["type"],
    handler: (state: S, action: Action & A) => S
  ): this;
  finish(): (State: S | undefined, action: Action & A) => S;
}

export declare function createReducerProcessingHoc<I, S, Sr, Dr>(
  hocName: string,
  BaseComponent: ComponentType<I>,
  mapStateToProps?: MapStateToProps<Sr, any, S> | undefined,
  mapDispatchToProps?: MapDispatchToProps<Dr, any> | undefined
): ConnectedComponent<ComponentType<I>, unknown>;
