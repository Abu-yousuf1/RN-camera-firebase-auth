import React from 'react'
import GoogleSign from "./Components/GoogleSign"
import Camera from './Components/Camera'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    // <View>
    //   <Camera/>
    // </View>
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Home">
           <Stack.Screen name="Home" component={GoogleSign}/>
            <Stack.Screen name="camera" component={Camera} /> 
    </Stack.Navigator>
    </NavigationContainer>
  )
}