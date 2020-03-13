import React, { Component } from 'react';
import { Container, Header, Content, Footer, Image, FooterTab, Button, Icon, Text, Label, View } from 'native-base';
import { Card, CardItem, Body, Input, Item } from 'native-base';
import {StyleSheet, TextInput, TouchableOpacity, StatusBar, LayoutAnimation} from 'react-native';

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
      <Container>
      <Header>
      <CardItem style={{backgroundColor:'#FFFF00'}}>
            <Text style={{
              color:'#000000', 
              alignItems:'center', 
              fontFamily:'sans-serif-medium'}}>GOPETI  </Text>
            <Icon type='FontAwesome' name="paw" />
            </CardItem>
        </Header>
        <Content padder contentContainerStyle = {misEstilos.content}>    
        <Icon source={require("../assets/imgs/icono.png")}
              style={{position:"absolute", bottom: -323, right: -225, 
                      width:100, height:100}} />
        <Card>
            <CardItem header bordered> 
              <Text style={misEstilos.lineText}>Bienvenido! Inicia sesión</Text>
            </CardItem>
            <CardItem>
              {this.state.errorMessage && <Text >{this.state.errorMessage}</Text>}
            </CardItem>
            <CardItem header bordered style={{alignContent:'center'}}>
                <CardItem bordered>
                    <Body>
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
                      <Item>
                      <Button success onPress={this.handleLogin}>
                        <Text>Login</Text>
                      </Button>
                      </Item>
                    </Body>
                </CardItem>
            </CardItem>
        </Card>
        </Content>
        <Footer>
          <FooterTab>
            <Button onPress={() =>this.props.navigation.navigate("Register")}>
                <Text> Si no tienes una cuenta, ¡Registrate aquí! </Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const misEstilos = StyleSheet.create({
    content: {
      flex: 1,
      justifyContent: 'center',
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
        color: 'blue',
    },
  });