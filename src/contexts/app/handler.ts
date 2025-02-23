import { DispatchType } from './reducer'
import { StateType } from './state'

export function baseHandler(state: StateType, dispatch: React.Dispatch<DispatchType>) {
  function runProcess(payload: string) {
    dispatch({ type: 'processing', payload })
  }

  function stopProcess() {
    dispatch({ type: 'processing', payload: undefined })
  }

  function handleConfirm(payload: string) {
    dispatch({ type: 'confirm', payload })
  }

  return {
    runProcess,
    stopProcess,
    handleConfirm,
  }
}
