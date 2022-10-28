import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './database/usuarios/login'
import Cadastro from './database/usuarios/cadastro'
import Home from './database/usuarios/home';
import firebase from './database/firebase'
import ServicoCarro from './database/servicos/carroServico'
import ServicoMoto from './database/servicos/motoServico'
import ServicoBike from './database/servicos/bikeServico'
import Observacao from './database/comentarios/observacao'
const Stack = createStackNavigator();
function MinhasTelas() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Cadastro" 
        component={Cadastro} 
        options={{ title: 'Cadastro' }}
      />       
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={
          {title: 'Login'},
          {headerLeft: null} 
        }
      />
      <Stack.Screen 
        name="ServicoCarro" 
        component={ServicoCarro} 
        options={
          {title: 'Detalhes De Servico'},
          {headerLeft: null} 
        }
      />
        <Stack.Screen 
        name="ServicoMoto" 
        component={ServicoMoto} 
        options={
          {title: 'Detalhes De Servico'},
          {headerLeft: null} 
        }
      />
         <Stack.Screen 
        name="ServicoBike" 
        component={ServicoBike} 
        options={
          {title: 'Detalhes De Servico'},
          {headerLeft: null} 
        }
      />
      
      <Stack.Screen 
       name="Home" 
       component={Home} 
       options={
         { title: 'Home' },
         {headerLeft: null} 
       }
      />
        <Stack.Screen 
       name="Observacao" 
       component={Observacao} 
       options={
         { title: 'Observação' },
         {headerLeft: null} 
       }
      />
    </Stack.Navigator>
  );
}
export default function App() {
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  return (
    <NavigationContainer>
      <MinhasTelas />
    </NavigationContainer>
  );
}