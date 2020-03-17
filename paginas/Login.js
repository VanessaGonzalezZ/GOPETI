import React, { Component } from 'react';
import { Button, Icon, Text, Card } from 'native-base';
import {Input, Item } from 'native-base';
import {Image, StyleSheet, View, LayoutAnimation, SafeAreaView, StatusBar} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import {Ionicons} from '@expo/vector-icons';

import * as firebase from 'firebase';

export default class Login extends Component {

  state = {
    email: "",
    password: "",
    errorMessage: null
  };

  handleLogin = () => {
    const {email, password} = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => this.setState({errorMessage: error.message}));

  };

  render() {
    LayoutAnimation.easeInEaseOut();
    return (
      <SafeAreaView>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#E3FDF5', '#FFE6FA']}>
      <StatusBar barStyle="light-content"></StatusBar>
      <Image source={require("../assets/imgs/icono.png")} style={{position:'relative', height: 100, width:100, alignSelf:'center', marginTop:150}}></Image>
      


        <View padder contentContainerStyle = {misEstilos.content}>    
        <View>
            <View header bordered> 
              <Text style={misEstilos.lineText}>Bienvenido! Inicia sesión</Text>
            </View>
            <View>
              {this.state.errorMessage && <Text >{this.state.errorMessage}</Text>}
            </View>
            <View header bordered style={{alignContent:'center', 
            marginStart:15, 
            marginEnd:15, 
            marginTop:40}}>
                <Card bordered style={{padding:25, borderRadius: 10}}>
                      <Item rounded style={{marginBottom:12}}>
                        <Input 
                        placeholder='Email' 
                        onChangeText={email => this.setState({ email })} 
                        value={this.state.email}></Input>
                      </Item>
                      <Item rounded style={{marginBottom:12}}>
                        <Input 
                        secureTextEntry  
                        placeholder='Password' 
                        onChangeText={password => this.setState({ password })} 
                        value={this.state.password}/>
                      </Item>
                      <Item style={{alignSelf:'center'}}>
                      <Button success onPress={this.handleLogin}>
                        <Text>Login</Text>
                      </Button>
                      </Item>
                </Card>
            </View>
        </View>
        </View>
            <Button style={{alignSelf:'center', marginTop: 40}} onPress={() =>this.props.navigation.navigate("Register")}>
                <Text> Si no tienes una cuenta, ¡Registrate aquí! </Text>
            </Button>
            </LinearGradient>
      </SafeAreaView>
    );
  }
}

const misEstilos = StyleSheet.create({
    content: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal:40,
      marginVertical:40
    },
    textCenter:{
      textAlign: 'center',
      width: '100%',
    },
    boton: {
      marginLeft: '70%',
    },
    body: {
      paddingVertical: 35,
    },
    lineText:{
        textAlign: 'center',
        justifyContent:'center',
        color: 'black',
        marginTop:40,
        fontWeight: '700'
    },
  });