import { useEffect, useState } from 'react'
import { fetchMedicines } from '../api/api'
import MedicineCard from './MedicineCard'
import Loading from './Loading'

export default function MedicineList() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMedicines()
      .then(setData)
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <Loading />
  if (!data.length) return <p>Tidak ada data obat.</p>

  return (
    <div className="medicine-list">
      {data.map((med) => (
        <MedicineCard key={med.id} med={med} />
      ))}
    </div>
  )
}
