import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import MedicineDetail from './pages/MedicineDetail'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medicine/:id" element={<MedicineDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
