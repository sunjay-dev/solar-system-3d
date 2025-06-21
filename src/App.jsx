import { Home, Viewer } from "./Pages"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
   <Router>
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viewer" element={<Viewer />} />
      </Routes>
   </Router>
  )
}

export default App
