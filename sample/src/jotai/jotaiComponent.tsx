import { countAtom } from "./jotai"
import { useAtom } from "jotai"
import { useState } from "react"

export const JotaiComponent = () => {
  const [inputNumber, setNumber] = useState(0)
  const [count, setCount] = useAtom(countAtom)

  return (
    <div className="flex flex-col m-4 shadow-md px-10 py-4 rounded-md">
      <div className="flex items-baseline justify-start w-full">
        <h2
          className="cursor-pointer text-3xl mr-4 hover:text-[#4e5ab3]"
          onClick={() => typeof window !== "undefined" && window.open("https://jotai.org/", "_blank")}
        >
          Jotai
        </h2>
        <p>← Click to learn more</p>
      </div>
      <div className="my-5">
        <p className="my-2">JotaiCount:{count}</p>
        <div className="flex flex-col justify-start">
          <button onClick={() => setCount(count + 1)} className="mb-2">
            increment
          </button>
          <div className="flex items-center mb-2">
            <p>Update number : </p>
            <input value={inputNumber} type="number" onChange={(e) => setNumber(Number(e.target.value))} className="w-20" />
            <button onClick={() => setCount(inputNumber)}>update</button>
          </div>
          <button onClick={() => setCount(0)} className="mb-2">
            remove
          </button>
        </div>
      </div>
    </div>
  )
}
