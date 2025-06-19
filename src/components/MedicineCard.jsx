import { Link } from 'react-router-dom'
export default function MedicineCard({ med }) {
  return (
    <div className="card">
      <h3>{med.name}</h3>
      <p>Harga: Rp {med.price}</p>
      <Link to={`/medicine/${med.id}`}>Detail</Link>
    </div>
  )
}
