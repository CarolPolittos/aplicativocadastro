import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Form } from 'react-native';

export default function App() {

  const Voltar = () =>{

  }

  const [cep, setCep] = useState('');
  const [endereço, setEndereço] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [nolocal, setNolocal] = useState('');
  const [horario, setHorario] = useState('');

  const continuar = () =>{
    //alert(Nome);
  }

  return (
   
 
    <View style={styles.container}>
      <TouchableOpacity style={styles.bntvoltar} onPress={()=>Voltar()}>
        <Text style={{color: '#0e52b2', textAlign:'left', fontSize:18,fontWeight: "bold"}}> VOLTAR </Text>
      </TouchableOpacity>
     
      <Text style={styles.Text}>CADASTRA-SE</Text>
      <StatusBar style="auto" />

      <TextInput placeholder="DIGITE SEU CEP" style={styles.TextInput} onChangeNumber={Number=>setCep(Number)} value={Number} keyboardType="numeric" />
      <TextInput placeholder="ENDEREÇO" style={styles.TextInput} onChangeText={text=>setEndereço(text)} />
      <TextInput placeholder="NUMERO" style={styles.TextInputNumero} onChangeNumber={Number=>setNumero(Number)} value={Number} keyboardType="numeric" />
      <TextInput placeholder="COMPLEMENTO" style={styles.TextInputtelefone} onChangeText={text=>setComplemento(text)} />
      <TextInput placeholder="TEM LOCAL PARA BANHO/REFEIÇÃO" style={styles.TextInput} onChangeText={text=>setNolocal(text)} />
      <TextInput placeholder="HORARIO DE FUNCIONAMENTO" style={styles.TextInputcsenha} onChangeText={text=>setHorario(text)} />

      <TouchableOpacity style={styles.btnContinuar} onPress={()=>continuar()}>
        <Text style={{color: 'white', textAlign:'center', fontSize:23,fontWeight: "bold"}}> CADASTRAR </Text>
      </TouchableOpacity>


    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  TextInput:{
 
    width: '80%',
    height: 50,
    backgroundColor: `#dcdcdc`,
    borderRadius: 20,
    paddingLeft:10,
    marginBottom: 10


  },
  TextInputNumero:{

    width: '40%',
    height: 50,
    backgroundColor: `#dcdcdc`,
    borderRadius: 20,
    paddingLeft:10,
    marginBottom: 10
  },

  TextInputtelefone:{
    width: '80%',
    height: 50,
    backgroundColor: `#dcdcdc`,
    borderRadius: 20,
    paddingLeft:10,
    marginBottom: 10,
  },
  TextInputcsenha:{
    
    width: '80%',
    height: 50,
    backgroundColor: `#dcdcdc`,
    borderRadius: 20,
    paddingLeft:10,
    marginBottom: 60
  },

  Text:{
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    fontWeight:'800',
    color: `#00bfff`,
    marginBottom: 15,
  },
  btnContinuar:{
    
    width: '40%',
    height: 50,
    backgroundColor: `#0e52b2`,
    borderRadius: 30,
    justifyContent: 'center',
  
  },
  bntvoltar:{
    
    width: '70%',
    height: 50,
    backgroundColor: `white`,
    borderRadius: 30,
    justifyContent: 'center',
    marginBottom: 60,
  },
});
