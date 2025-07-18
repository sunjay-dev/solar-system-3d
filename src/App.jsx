import { Home, Viewer } from "./Pages"
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';
export default function App() {
  return (
   <Router>
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viewer" element={<Navigate to="/viewer/earth" />} />
        <Route path="/viewer/:planet" element={<Viewer />} />
      </Routes>
   </Router>
  )
}