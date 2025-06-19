import { useState, useEffect } from 'react'
import { login } from '../api/api'
import logo from '../assets/logors.png'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  // ✅ Redirect jika sudah login
  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      const parsedUser = JSON.parse(user)
      if (parsedUser.role === 'petugas') {
        navigate('/dashboard')
      } else {
        navigate('/')
      }
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await login({ email, password })
      const { token, user } = response
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))

      if (user.role === 'petugas') {
        navigate('/dashboard')
      } else {
        navigate('/')
      }
    } catch (err) {
      console.error(err)
      setError('Login gagal. Cek email dan kata sandi Anda.')
    }
  }

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Selamat Datang di Sistem Apotik</h1>
        <p>
          Kelola sistem apotek Anda dengan mudah dan efisien. Akses inventory,
          penjualan, dan laporan dalam satu platform terintegrasi.
        </p>
      </div>
      <div className="login-right">
        <form onSubmit={handleSubmit} className="login-form">
          <img src={logo} alt="Logo" />
          <h2>Si-Apotek</h2>
          {error && <p className="error">{error}</p>}
          <input
            type="email"
            placeholder="Masukkan email Anda"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Masukkan kata sandi"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">MASUK</button>
        </form>
      </div>
    </div>
  )
}
