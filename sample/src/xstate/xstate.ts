import { createMachine, assign } from "xstate"

export type XStateState = {
  count: number
}

export const machine = createMachine<XStateState>(
  {
    id: "xstate",
    initial: "count",
    predictableActionArguments: true,
    context: {
      count: 0
    },
    states: {
      count: {
        on: {
          INCREMENT_COUNT: [{ target: "count", actions: "incrementCount" }],
          REMOVE_COUNT: [{ target: "count", actions: "removeCount" }],
          UPDATE_COUNT: [{ target: "count", actions: "updateCount" }]
        }
      }
    }
  },
  {
    actions: {
      incrementCount: assign((_ctx) => ({
        count: _ctx.count + 1
      })),
      removeCount: assign(() => ({
        count: 0
      })),
      updateCount: assign((_, { value }) => {
        return {
          count: value
        }
      })
    }
  }
)
