import Sidebar from '../components/Sidebar'

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <div className="dashboard">
      <Sidebar />
      <main className="dashboard-content">
        <h1>Dashboard</h1>
        <p>Selamat datang, {user?.name || 'Pengguna'}!</p>
        <p>Ini adalah halaman dashboard untuk role: {user?.role}</p>
      </main>
    </div>
  )
}
