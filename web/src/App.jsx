import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import StudentsList from './pages/StudentsList'
import StudentDetails from './pages/StudentDetails'
import { Container, Navbar } from 'react-bootstrap'

export default function App() {
  return (
    <>
      <Navbar bg="light" className="mb-3">
        <Container>
          <Navbar.Brand as={Link} to="/">Meu Estudo de Caso</Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        <Routes>
          <Route path="/" element={<StudentsList />} />
          <Route path="/alunos/:id" element={<StudentDetails />} />
        </Routes>
      </Container>
    </>
  )
}