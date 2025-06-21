import { Home, Planet } from "./Pages"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  return (
   <Router>
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planet/" element={<Planet />} />
      </Routes>
   </Router>
  )
}

export default App
