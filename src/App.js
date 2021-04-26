import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import store from "./redux/store"

import LayoutComponent from "./components/Layout"
import './scss/index.scss'

const App = () => {

  return (
    <>
      <h1>Đây là App.js</h1>
      <Provider store={store}>
        <BrowserRouter>
          <LayoutComponent></LayoutComponent>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
