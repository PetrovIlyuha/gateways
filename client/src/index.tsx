import ReactDOM from "react-dom"
import "./index.css"
import App from "./app/layout/App"
import {BrowserRouter as Router} from "react-router-dom"
import reportWebVitals from "./reportWebVitals"
import {store, StoreContext} from "./app/stores/store"

ReactDOM.render(
  <Router>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </Router>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
