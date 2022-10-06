import reactLogo from "./assets/react.svg"
import "./App.css"

import { ZustandComponent } from "./zustand/zustandComponent"
import { XstateComponent } from "./xstate/xstateComponent"
import { JotaiComponent } from "./jotai/jotaiComponent"

function App() {
  return (
    <div className="App">
      <div className="flex justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <div className="mt-8 flex flex-wrap w-full justify-center">
        <ZustandComponent />
        <XstateComponent />
        <JotaiComponent />
      </div>
    </div>
  )
}

export default App
