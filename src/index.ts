/*
 * @Author: 邱狮杰
 * @Date: 2021-07-30 21:46:28
 * @LastEditTime: 2021-08-07 09:42:26
 * @FilePath: /reduxEncapsulation/src/index.ts
 * @Description: entry
 */
import { defaultAction } from "./action/defaultAction";
import { CreateReducer } from "./reducer/createReducer";
import { createReducerProcessingHoc } from "./hoc/createReducerProcessingHoc";

export { CreateReducer, defaultAction, createReducerProcessingHoc };
