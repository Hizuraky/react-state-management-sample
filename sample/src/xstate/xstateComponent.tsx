import { machine } from "./xstate"
import { useState } from "react"
import { useMachine } from "@xstate/react"

export const XstateComponent = () => {
  const [inputNumber, setNumber] = useState(0)
  const [current, send] = useMachine(machine)
  const { count } = current.context

  return (
    <div className="flex flex-col m-4 shadow-md px-10 py-4 rounded-md" key={machine.id}>
      <div className="flex items-baseline justify-start w-full">
        <h2
          className="cursor-pointer text-3xl mr-4 hover:text-[#4e5ab3]"
          onClick={() => typeof window !== "undefined" && window.open("https://xstate.js.org/", "_blank")}
        >
          XState
        </h2>
        <p>← Click to learn more</p>
      </div>
      <div className="my-5">
        <p className="my-2">XStateCount:{count}</p>
        <div className="flex flex-col justify-start">
          <button onClick={() => send("INCREMENT_COUNT")} className="mb-2">
            increment
          </button>
          <div className="flex items-center">
            <p>Update number : </p>
            <input value={inputNumber} type="number" onChange={(e) => setNumber(Number(e.target.value))} className="w-20" />
            <button onClick={() => send({ type: "UPDATE_COUNT", value: inputNumber })}>update</button>
          </div>
          <button onClick={() => send("REMOVE_COUNT")} className="mb-2">
            remove
          </button>
        </div>
      </div>
    </div>
  )
}
