/*
 * @Author: 邱狮杰
 * @Date: 2021-07-30 21:46:28
 * @LastEditTime: 2021-07-30 23:23:27
 * @FilePath: /reduxEncapsulation/src/index.ts
 * @Description: entry
 */
import { createAction } from "./action/createAction";
import { defaultAction } from "./action/defaultAction";
import { CreateReducer } from "./reducer/createReducer";
import { createReducerProcessingHoc } from "./hoc/createReducerProcessingHoc";

export {
  CreateReducer,
  defaultAction,
  createAction,
  createReducerProcessingHoc,
};
