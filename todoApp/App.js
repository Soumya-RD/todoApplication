import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Scr001 from './screens/Scr001';
import Scr002 from './screens/Scr002';
import Scr003 from './screens/Scr003';
import Scr004 from './screens/Scr004';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* Styling the header */}
        <Stack.Screen name='Scr001' component={Scr001}
          options={{
            title: '',
            headerStyle: { backgroundColor: '#efe6dd' }
          }}

        />
        <Stack.Screen name='Scr002' component={Scr002}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#efe6dd'
            }
          }}
        />
        <Stack.Screen name='Scr003' component={Scr003}
          options={{
            title: 'Your Activities',
            headerStyle: {
              backgroundColor: '#cbdfbd'
            },
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: 'bold',

            },

          }}
        />
        < Stack.Screen name='Scr004' component={Scr004}
          options={{
            title: 'Add new Task',
            headerTitleStyle: {
              fontWeight: 'bold'
            },
            headerStyle: {
              backgroundColor: '#a4bab7',
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
  }
});
