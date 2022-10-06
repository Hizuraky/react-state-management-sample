import { useZustand } from "./zustand"
import { useState } from "react"

export const ZustandComponent = () => {
  const { count, incrementCount, removeCount, updateCount } = useZustand((state) => state)
  const [inputNumber, setNumber] = useState(0)

  return (
    <div className="flex flex-col m-4 shadow-md px-10 py-4 rounded-md">
      <div className="flex items-baseline justify-start w-full">
        <h2
          className="cursor-pointer text-3xl mr-4"
          onClick={() => typeof window !== "undefined" && window.open("https://zustand-demo.pmnd.rs/", "_blank")}
        >
          Zustand
        </h2>
        <p>← Click to learn more</p>
      </div>
      <div className="my-5">
        <p className="my-2">ZustandCount:{count}</p>
        <div className="flex flex-col justify-start">
          <button onClick={incrementCount} className="mb-2">
            increment
          </button>
          <div className="flex items-center">
            <p>Update number : </p>
            <input value={inputNumber} type="number" onChange={(e) => setNumber(Number(e.target.value))} className="w-20" />
            <button onClick={() => updateCount(inputNumber)}>update</button>
          </div>
          <button onClick={removeCount} className="mb-2">
            remove
          </button>
        </div>
      </div>
    </div>
  )
}
