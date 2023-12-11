import { View, Text} from 'react-native'
import React from 'react'
import Screen1 from './Screen1'
import Screen2 from './Screen2'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './src/screens/Splash/Splash';
import Login from './src/screens/Login/Login';

const Drawer = createDrawerNavigator();
const App = () => {
  return (

     <View>
      <Text>Fareed</Text>
     </View>

    // <NavigationContainer>
    //   <Drawer.Navigator initialRouteName="Screen1">
    //     <Drawer.Screen name="Screen1" component={Screen1}/>
    //     <Drawer.Screen name="Screen2" component={Screen2} />
    //   </Drawer.Navigator>
    // </NavigationContainer>
  )
}

export default App