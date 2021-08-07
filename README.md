# redux_encapsulation

## developing..

`yarn add @zealforchange/redux-encapsulation`

```typescript tsx
import { Action } from "redux";
import {
  ConnectedComponent,
  MapDispatchToProps,
  MapStateToProps,
} from "react-redux";
import { ComponentType } from "react";

export declare function defaultAction<T extends object>(
  action: Action["type"],
  transmitInformation?: T | undefined
): () => Action | (Action & T);

export declare function createAction<T extends object>(
  action: Action["type"],
  fn: (
    actionFn: (
      action: Action["type"],
      transmitInformation?: T | undefined
    ) => () => Action | (Action & T)
  ) => (
    ownAction: Action["type"],
    params?: T | undefined
  ) => Action | (Action & T)
): (params?: T | undefined) => Action | (Action & T);

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
```

[docs](/docs.md)
