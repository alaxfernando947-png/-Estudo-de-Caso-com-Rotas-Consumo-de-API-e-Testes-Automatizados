import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'
import axios from 'axios'

export default function StudentsScreen({ navigation }) {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('https://proweb.leoproti.com.br/alunos')
      .then(res => setStudents(res.data))
      .catch(err => console.warn(err))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <ActivityIndicator />

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={students}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Details', { id: item.id })}>
            <Text style={{ padding: 12 }}>{item.nome || item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}