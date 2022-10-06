import { CountContext } from "./context"
import { useState, useContext } from "react"

export const ContextComponent = () => {
  const { state, dispatch } = useContext(CountContext)
  const [inputNumber, setNumber] = useState(0)

  return (
    <div className="flex flex-col m-4 shadow-md px-10 py-4 rounded-md">
      <div className="flex items-baseline justify-start w-full">
        <h2
          className="cursor-pointer text-3xl mr-4 hover:text-[#4e5ab3]"
          onClick={() =>
            typeof window !== "undefined" && window.open("https://ja.reactjs.org/docs/hooks-reference.html#usecontext", "_blank")
          }
        >
          Context
        </h2>
        <p>← Click to learn more</p>
      </div>
      <div className="my-5">
        <p className="my-2">ContextCount:{state.count}</p>
        <div className="flex flex-col justify-start mb-2">
          <button onClick={() => dispatch({ type: "INCREMENT_COUNT" })} className="mb-2">
            increment
          </button>
          <div className="flex items-center">
            <p>Update number : </p>
            <input value={inputNumber} type="number" onChange={(e) => setNumber(Number(e.target.value))} className="w-20" />
            <button onClick={() => dispatch({ type: "UPDATE_COUNT", payload: inputNumber })}>update</button>
          </div>
          <button onClick={() => dispatch({ type: "REMOVE_COUNT" })} className="mb-2">
            remove
          </button>
        </div>
      </div>
    </div>
  )
}
