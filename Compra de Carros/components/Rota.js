import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import Home from './Home';
import Tipos from './Tipos';
import Lambo from './Lambo';
import Cama from './Cama';
import Ford from './Ford';
import Mustang from './Mustang';

const Stack = createStackNavigator();

export default function rotasbotao(){
  return(
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name='Home' component={Home}/>
<Stack.Screen name='Tipos' component={Tipos}/>
<Stack.Screen name='Lamborghini' component={Lambo}/>
<Stack.Screen name='Camaro' component={Cama}/>
<Stack.Screen name='Ford' component={Ford}/>
<Stack.Screen name='Mustang' component={Mustang}/>
</Stack.Navigator>
</NavigationContainer>
  );
} 