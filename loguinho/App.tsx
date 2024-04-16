import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.field}>Login</Text>
      <TextInput placeholder='E-MAIL' style={styles.caixaTexto}/>
      <TextInput placeholder='SENHA' style={styles.caixaTexto}/>
      <StatusBar style="auto" />

      <Button title="Entrar"/>
      <Text style={styles.botao}></Text>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8BFD8',
    alignItems: 'center',
    justifyContent: 'center',
  },

  field:{
    color: '#fff',
    fontSize: 25,
  },

  caixaTexto:{
    backgroundColor: 'white',
    textAlign: 'center',
    width: 300,
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
    color: 'black',
    fontSize: 20,
    marginBottom: 20,
  },

  botao:{
    marginTop: 50,
    padding: 50,
    color: 'black',
    fontSize: 25,
    borderRadius: 10,
  }

});
