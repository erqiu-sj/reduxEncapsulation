import { bindActionCreators, ActionCreator, Dispatch } from 'redux'
import { useMemo } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

export function useConnect<S, R extends object, A extends object>(selector: (val: S) => R, actions?: A): (R | Dispatch<any>)[] | (R | A)[] {
  const dispatch = useDispatch()
  const data = useSelector(selector, shallowEqual)
  if (!actions) {
    return [data, dispatch]
  }
  return [
    data,
    useMemo(() => {
      return bindActionCreators(actions as ActionCreator<A>, dispatch) as A
    }, [actions, dispatch]),
  ]
}
