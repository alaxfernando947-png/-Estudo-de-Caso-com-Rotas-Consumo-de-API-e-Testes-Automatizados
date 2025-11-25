import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import StudentsScreen from './src/screens/StudentsScreen'
import StudentDetailsScreen from './src/screens/StudentDetailsScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Students" component={StudentsScreen} />
        <Stack.Screen name="Details" component={StudentDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}