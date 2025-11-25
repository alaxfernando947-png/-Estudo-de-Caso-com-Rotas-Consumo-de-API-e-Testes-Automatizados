import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import axios from 'axios'

export default function StudentDetailsScreen({ route }) {
  const { id } = route.params
  const [student, setStudent] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`https://proweb.leoproti.com.br/alunos/${id}`)
      .then(res => setStudent(res.data))
      .catch(err => console.warn(err))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <ActivityIndicator />
  if (!student) return <Text>Aluno não encontrado</Text>

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{student.nome || student.name}</Text>
      <Text>ID: {student.id}</Text>
      <Text>Email: {student.email || '-'}</Text>
    </View>
  )
}