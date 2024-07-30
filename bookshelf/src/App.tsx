import Library from "./components/Library/Library";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./App.css"
import GoogleBooksDashboard from "./components/GoogleBooksDashboard/GoogleBooksDashboard";

export default function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/" className="link">Home</Link>
        <Link to="/library" className="link">Library</Link>
        <Link to="/google_books" className="link">Google books</Link>
      </nav>
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/google_books" element={<GoogleBooksDashboard />} />
      </Routes>
    </div>
  )
}
