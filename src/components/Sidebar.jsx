import { Link, useNavigate } from 'react-router-dom'

export default function Sidebar() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate('/')
  }

  return (
    <aside className="sidebar">
      <h2>Si-Apotek</h2>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">🏠 Dashboard</Link>
          </li>
          <li>
            <Link to="/stok-obat">📦 Stok Obat</Link>
          </li>
          <li>
            <Link to="/riwayat">🧾 Riwayat</Link>
          </li>
          <li>
            <button onClick={handleLogout}>🚪 Logout</button>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
