import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getObatById as fetchMedicineById } from '../api/api'
import Loading from '../components/Loading'

const MedicineDetail = () => {
  const { id } = useParams()
  const [medicine, setMedicine] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMedicineById(id)
        setMedicine(data)
      } catch (error) {
        console.error('Gagal memuat data obat:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [id])

  if (loading) return <Loading />

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{medicine.nama_obat}</h1>
      <p>
        <strong>Kategori:</strong> {medicine.kategori?.nama_kategori || '-'}
      </p>
      <p>
        <strong>Stok:</strong> {medicine.stok}
      </p>
      <p>
        <strong>Harga:</strong> Rp{medicine.harga}
      </p>
    </div>
  )
}

export default MedicineDetail
