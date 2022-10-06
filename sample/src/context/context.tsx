import type { Reducer, Dispatch, ReactNode, FC } from "react"
import { createContext, useReducer } from "react"

type ContextState = {
  count: number
}

type Actions =
  | {
      type: "INCREMENT_COUNT"
    }
  | {
      type: "REMOVE_COUNT"
    }
  | {
      type: "UPDATE_COUNT"
      payload: number
    }

const initialState = { count: 0 }

export const CountContext = createContext(
  {} as {
    state: ContextState
    dispatch: Dispatch<Actions>
  }
)

const countReducer: Reducer<ContextState, Actions> = (state, action) => {
  switch (action.type) {
    case "INCREMENT_COUNT":
      return { count: state.count + 1 }
    case "REMOVE_COUNT":
      return initialState
    case "UPDATE_COUNT":
      return { count: action.payload }
    default:
      return initialState
  }
}

export const CountContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(countReducer, initialState)
  return <CountContext.Provider value={{ state, dispatch }}>{children}</CountContext.Provider>
}
