import { bindActionCreators, ActionCreator } from 'redux'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

export function useActions<A extends object>(actions: A): A {
  const dispatch = useDispatch()
  return useMemo(() => {
    return bindActionCreators(actions as ActionCreator<A>, dispatch) as A
  }, [actions, dispatch])
}
