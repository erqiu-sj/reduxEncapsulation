/*
 * @Author: 邱狮杰
 * @Date: 2021-07-30 22:52:47
 * @LastEditTime: 2021-07-30 23:16:02
 * @FilePath: /reduxEncapsulation/src/hoc/createReducerProcessingHoc.tsx
 * @Description: createReducerProcessingHoc
 */
import React, { ComponentType, Component } from 'react'
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'
/**
 * @param { stirng } hocName  hoc component name for debugging
 * @param { Component } BaseComponent react component
 * @param { MapStateToProps } mapStateToProps
 * @param { MapDispatchToProps } mapDispatchToProps
 * @returns Returns a high-level component wrapped in mapstatetoprops and mapdispatchtoprops
 */
export function createReducerProcessingHoc<I, S, Sr, Dr>(hocName: string, BaseComponent: ComponentType<I>, mapStateToProps?: MapStateToProps<Sr, any, S>, mapDispatchToProps?: MapDispatchToProps<Dr, any>) {
  class Hoc extends Component<I, unknown> {
    static displayName = `${hocName}(${BaseComponent.name})`
    render() {
      const { ...resetProps } = this.props
      return <BaseComponent {...resetProps} />
    }
  }
  // @ts-ignore
  return connect(mapStateToProps, mapDispatchToProps)(Hoc)
}
