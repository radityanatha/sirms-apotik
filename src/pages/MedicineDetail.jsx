import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMedicineById } from '../api/api'
import Loading from '../components/Loading'

export default function MedicineDetail() {
  const { id } = useParams()
  const [med, setMed] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMedicineById(id)
      .then(setMed)
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <Loading />
  if (!med) return <p>Obat tidak ditemukan</p>

  return (
    <div>
      <h2>{med.name}</h2>
      <p>Harga: Rp {med.price}</p>
      <p>Stok: {med.stock}</p>
      <p>Deskripsi: {med.description}</p>
    </div>
  )
}
