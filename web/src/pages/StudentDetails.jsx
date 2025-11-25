import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getStudentById } from '../services/api'
import { Card, Spinner, Button, Alert } from 'react-bootstrap'

export default function StudentDetails() {
  const { id } = useParams()
  const [student, setStudent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    getStudentById(id)
      .then(data => mounted && setStudent(data))
      .catch(e => mounted && setError(e.message || 'Erro ao carregar'))
      .finally(() => mounted && setLoading(false))
    return () => { mounted = false }
  }, [id])

  if (loading) return <Spinner animation="border" />
  if (error) return <Alert variant="danger">{error}</Alert>
  if (!student) return <Alert variant="warning">Aluno não encontrado</Alert>

  return (
    <Card>
      <Card.Body>
        <Card.Title>{student.nome || student.name || student.Nome}</Card.Title>
        <Card.Text>
          <strong>ID:</strong> {student.id} <br />
          <strong>Email:</strong> {student.email || student.Email || '—'} <br />
        </Card.Text>
        <Button as={Link} to="/">Voltar</Button>
      </Card.Body>
    </Card>
  )
}