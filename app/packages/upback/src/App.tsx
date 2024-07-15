import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Main from './components/Main'
import BackupDemo from './components/BackupDemo'

export type RootStackParamsList = {
  Main: undefined
  BackupDemo: undefined
}

const Stack = createNativeStackNavigator<RootStackParamsList>()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Main' component={Main} />
        <Stack.Screen name='BackupDemo' component={BackupDemo} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App