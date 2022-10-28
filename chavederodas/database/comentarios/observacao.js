import * as React from 'react';
import { Text, View, StyleSheet, TextInput} from 'react-native';




export default function App() {
  return (
    <View style={styles.container}>
      
      <TextInput style={{marginVertical: '80px'}}
          
          placeholder="Faça um comentário"
          
        />  
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

})


