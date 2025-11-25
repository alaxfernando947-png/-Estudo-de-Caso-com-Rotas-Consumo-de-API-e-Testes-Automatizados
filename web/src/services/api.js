import axios from 'axios'

const api = axios.create({
  baseURL: 'https://proweb.leoproti.com.br'
})

export async function getStudents() {
  const res = await api.get('/alunos')
  return res.data
}

export async function getStudentById(id) {
  const res = await api.get(`/alunos/${id}`)
  return res.data
}

export default api