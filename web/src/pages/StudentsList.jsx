import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getStudents } from '../services/api'
import { Table, Spinner, Alert } from 'react-bootstrap'

export default function StudentsList() {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    getStudents()
      .then(data => mounted && setStudents(data))
      .catch(e => mounted && setError(e.message || 'Erro ao carregar'))
      .finally(() => mounted && setLoading(false))
    return () => { mounted = false }
  }, [])

  if (loading) return <Spinner animation="border" />
  if (error) return <Alert variant="danger">{error}</Alert>

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {students.map(s => (
          <tr key={s.id}>
            <td>{s.id}</td>
            <td>{s.nome || s.name || s.Nome}</td>
            <td>
              <Link to={`/alunos/${s.id}`}>Ver detalhes</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}