import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import firebase from '../firebase';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


 

const Stack = createStackNavigator();


export default class Home extends Component {

  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }


  

   cadastrar_dados =  ()=>{
     data = {nome:'felipe', idade:18};
     db = firebase.firestore();
     res = db.collection('perfilUsuario').doc('cliente').set(data);
     Alert.alert(res);
}

  
  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  
  
  telaServicoCarro = () =>{
       this.props.navigation.navigate('ServicoCarro')
        


  }
  telaServicoMoto = () =>{
       this.props.navigation.navigate('ServicoMoto')
  }
  telaServicoBike = () =>{
    this.props.navigation.navigate('ServicoBike')
  }
  render() {
    this.state = { 
      nome: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid
    }    
    return(
      
        

   <View style={styles.container}>
        <Text style = {styles.textStyle}>
          Seja bem-vindo, {this.state.nome}
        </Text>

  
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => this.signOut()}
       style={styles.touchableOpacityStyle}>
      <Image style={styles.touchableOpacityStyle}
          source={require('../assets/logout.png')}
        
    />
  </TouchableOpacity>
     

      <View style={styles.imagemContainer}>
     
        <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => this.telaServicoCarro()}
        style={styles.imagem}>
        <Image style={styles.imagem}
        source={require('../assets/carros.png')}
        />
           
         </TouchableOpacity>
         
        <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => this.telaServicoMoto()}
        style={styles.imagem}>
        <Image style={styles.imagem}
        source={require('../assets/moto.jpg')}
        />
           
         </TouchableOpacity>

        <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => this.telaServicoBike()}
        style={styles.imagem}>
        <Image style={styles.imagem}
        source={require('../assets/bike.png')}
        />
        </TouchableOpacity>
     
        </View>
       
     
        </View>
       
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#fff',
  },
  
  textStyle: {
    fontSize: 15,
    marginBottom: 20
  },

  imagemContainer:{
    
    marginTop: '12px',
    flexDirection: 'row',
   
    justifyContent: 'center'
    


  },
  imagem:{
    width: '100px',
    height: '100px',
 },
 button:{
   flex:1,
   justifyContent: 'flex-end',
    marginTop: '40px'
  
 },
 touchableOpacityStyle: {
  position: 'absolute',
  width: 35,
  height: 35,
  alignItems: 'center',
  justifyContent: 'center',
  right: 5,
  bottom: 1,
},

});