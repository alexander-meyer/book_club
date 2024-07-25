import Library from "./components/Library/Library";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./App.css"

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/" className="link">Home</Link>
        <Link to="/library" className="link">Library</Link>
      </nav>
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </div>
  )
}

export default App
