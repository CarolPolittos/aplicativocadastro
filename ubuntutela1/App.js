import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const Voltar = () =>{

  }

  const [nome, setNome] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

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

      <TextInput placeholder="NOME DA INSTITUIÇÃO" style={styles.TextInput} onChangeText={text=>setNome(text)} />
      <TextInput placeholder="E-MAIL" style={styles.TextInput} onChangeText={text=>setEmail(text)} />
      <TextInput placeholder="CNPJ" style={styles.TextInput} onChangeNumber={Number=>setCnpj(Number)} value={Number} keyboardType="numeric" />
      <TextInput placeholder="TELEFONE" style={styles.TextInputtelefone} onChangeNumber={Number=>setTelefone(Number)} value={Number} keyboardType="numeric" />
      <TextInput secureTextEntry={true} placeholder="DIGITE SUA SENHA" style={styles.TextInput} />
      <TextInput secureTextEntry={true} placeholder="CONFIRME SUA SENHA" style={styles.TextInputcsenha} onChangeText={text=>setSenha(text)} />
      <TextInput placeholder="DESCRIÇÃO" style={styles.TextInputdescrição} onChangeText={text=>setNome(text)} />

      <TouchableOpacity style={styles.btnContinuar} onPress={()=>continuar()}>
        <Text style={{color: 'white', textAlign:'center', fontSize:23,fontWeight: "bold"}}> CONTINUAR </Text>
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
    marginBottom: 10,


  },
  TextInputdescrição:{
   
    width: '80%',
    height: 70,
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
