import Home from './pages/jokenpo'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
