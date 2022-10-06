import reactLogo from "./assets/react.svg"
import "./App.css"
import { RecoilRoot } from "recoil"
import { store } from "./redux/redux"
import { Provider } from "react-redux"

import { ZustandComponent } from "./zustand/zustandComponent"
import { XstateComponent } from "./xstate/xstateComponent"
import { JotaiComponent } from "./jotai/jotaiComponent"
import { RecoilComponent } from "./recoil/recoilComponent"
import { ReduxComponent } from "./redux/reduxComponent"
import { ContextComponent } from "./context/contextComponent"
import { CountContextProvider } from "./context/context"

function App() {
  return (
    <CountContextProvider>
      <Provider store={store}>
        <RecoilRoot>
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
              <RecoilComponent />
              <ReduxComponent />
              <ContextComponent />
            </div>
          </div>
        </RecoilRoot>
      </Provider>
    </CountContextProvider>
  )
}

export default App
