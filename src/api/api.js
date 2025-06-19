import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE + '/api', // pastikan /api jika endpoint pakai prefix itu
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// 📦 Obat
export const getAllObat = () => api.get('/obat').then((res) => res.data)
export const fetchMedicines = getAllObat // 🔁 alias untuk getAllObat, biar ga duplikat
export const getObatById = (id) =>
  api.get(`/obat/${id}`).then((res) => res.data)
export const createObat = (payload) =>
  api.post('/obat', payload).then((res) => res.data)
export const updateObat = (id, payload) =>
  api.put(`/obat/${id}`, payload).then((res) => res.data)
export const deleteObat = (id) =>
  api.delete(`/obat/${id}`).then((res) => res.data)

// 📚 Kategori Obat
export const getKategoriObat = () =>
  api.get('/kategori-obat').then((res) => res.data)

// 📊 Stok Obat
export const getStokObat = () => api.get('/stok-obat').then((res) => res.data)

// 🧾 Antrian & AntrianDetail
export const getAntrian = () => api.get('/antrian').then((res) => res.data)
export const getAntrianDetail = (id) =>
  api.get(`/antrian-detail/${id}`).then((res) => res.data)

// 🗂️ Riwayat
export const getRiwayat = () => api.get('/riwayat').then((res) => res.data)

// 💡 Login (jika endpoint LoginApi)
export const login = (credentials) =>
  api.post('/login', credentials).then((res) => res.data)

export default api
