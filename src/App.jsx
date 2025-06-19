import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MedicineDetail from './pages/MedicineDetail'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function AppContent() {
  const location = useLocation()
  const isLoginPage = location.pathname === '/'

  return (
    <>
      {!isLoginPage && <Header />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/medicine/:id" element={<MedicineDetail />} />
      </Routes>
      {!isLoginPage && <Footer />}
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
