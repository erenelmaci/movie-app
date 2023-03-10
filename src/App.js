import "./App.css"
import AuthContext from "./context/AuthContext"
import Router from "./router/Router"

function App() {
  return (
    <div className="App">
      <Router />
      <AuthContext />
    </div>
  )
}

export default App
