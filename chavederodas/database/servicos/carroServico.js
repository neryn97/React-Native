import React, { Component, } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Image, TextInput} from 'react-native';
import {Card, Icon} from 'react-native-elements'
import PropTypes from "prop-types"
import icon from "react-native-vector-icons/FontAwesome"
import firebase from 'firebase';
 

export default class carroServico extends Component {
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }
  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }
  observacao = () => {
    this.props.navigation.navigate('Observacao')
    
  }


  render() {
    this.setState = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid
    }
    return (
     <View style={styles.container}>
      <Text style={{fontSize:15}}>Contrate um dos nossos serviços</Text>

        
          
        <View style={styles.containerServicos}>
           <Card> 
            <Card.Title>Troca de Pneus</Card.Title>
            <Card.Divider/>
            <Card.Image style={styles.img}
              styles={"padding:10"} 
              source={require('../assets/trocadepneu.png')}
          />
            <Button style={styles.button}
              color="green"
              title="Contratar"
              onPress={() => this.userLogin()} />  
           
        
           </Card>
         
            <Card> 
            <Card.Title style={styles.textStyle}>Troca de olio</Card.Title>
            <Card.Divider/>
            <Card.Image style={styles.img}
              styles={"padding:10"} 
              source={require('../assets/alinhamento.jpg')}
            />
              
               <Button
                color="green"
                title="Contratar"
                onPress={() => this.userLogin()}
                />
            </Card>
        
          
            </View>
            <View style={styles.containerServicos}>
             <Card>
              <Card.Title style={styles.textStyle}>Troca de bateria</Card.Title>
              <Card.Divider/>
              <Card.Image style={styles.img}
                styles={"padding:10"} 
                source={require('../assets/trocadeBateria.jpeg')}
                />
              <Button
                color="green"
                title="Contratar"
                onPress={() => this.observacao()}
                />
              </Card>

               <Card>
              <Card.Title style={styles.textStyle}>Revisao</Card.Title>
              <Card.Divider/>
              <Card.Image style={styles.img}
                styles={"padding:10"} 
                source={require('../assets/revisao.jpeg')}
                />
              <Button style={styles.button}
                color="green"
                title="Contratar"
                onPress={() => this.observacao()}
                />
              </Card>
            </View>
            <TextInput
             placeholder="Observação"  
          
        

            
           
           
            
          />

            
            <TouchableOpacity style= {styles.sair}
              activeOpacity={0.7}
              onPress={() => this.signOut()}
              style={styles.touchableOpacityStyle}>
              <Image style={styles.touchableOpacityStyle}
              source={require('../assets/logout.png')}
             />   
            </TouchableOpacity>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    backgroundColor: '#fff',

   
    
  
  
    },
  textStyle: {
    fontSize: 15,
    marginBottom: 20
  },
  img:{
    width: '120px',
    height: '120px',
    
  },
 touchableOpacityStyle: {
  position: 'absolute',
  width: 20,
  height: 20,
  alignItems: 'flex-start',
  justifyContent: 'center',
  right: 5,
  bottom: 1,

  
},

sair:{
    position: 'absolute',
},

comentarios:{
  borderWidth: 1,
  borderColor: '#000',
  width: "250px",
},
button:{
  width:'20px'

},
containerServicos:{
  display: 'flex',
  flexDirection:'row'
  },
  card:{
    flexDirection: 'row',
    width: '200px'

  }
  



});
