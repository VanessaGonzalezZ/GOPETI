import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Label, Picker, Title, Left,
        Card, CardItem, Body, Input, Item} from 'native-base';
import {StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, StatusBar} from 'react-native';
import * as firebase from 'firebase';

export default class Registro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }

  state = {
    nameP: "",
    especie: "",
    edad: "",
    seña: "",
    nameD: "",
    edadD:"",
    domicilio: "",
    telefono: "",
    email: "",
    password:"",
    avatar:null
  }

  handleSignUp = () =>{
    firebase
    .auth()
    .createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(userCredentials => {
      return userCredentials.user.updateProfile({
        displayName: this.state.nameP
      })
    });
  }

  render() {
    return (
      <Container>
        <Header className="component-header">
          <Left>
            <Button transparent>
              <Icon name='arrow-back' onPress={() => this.props.navigation.goBack()}/>
            </Button>
          </Left>
          <Body>
            <Title>GOPETI</Title>
          </Body>
        </Header>
        <Content padder contentContainerStyle = {misEstilos.content}>
        <>
      <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <Card>
            <CardItem header bordered>
              <Text>Datos de la Mascota</Text>
            </CardItem>
            <CardItem bordered>
              <Body style = {misEstilos.content}>
                <Item rounded style={{marginBottom:12}}>
                  <Input type='text'
                        autoCapitalize="none" 
                        placeholder='Nombre' 
                        onChangeText={nameP => this.setState({ nameP })} 
                        value={this.state.nameP}/>
                  <Input type='text'
                        autoCapitalize="none" 
                        placeholder='Especie' 
                        onChangeText={especie => this.setState({ especie })} 
                        value={this.state.especie}/>
                </Item>
                <Item rounded style={{marginBottom:12}}>
                  <Input type='number'
                        autoCapitalize="none" 
                        placeholder='Edad' 
                        onChangeText={edad => this.setState({ edad })} 
                        value={this.state.edad}/>
                </Item>
                <Item rounded style={{backgroundColor: "#FFFF00"}}>
                  <Label>Tamaño</Label>
                </Item>
                <Item rounded picker style={{marginBottom:12}}>
                  <Picker
                    id=""
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    placeholder="Tamaño"
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.selected2}
                    onValueChange={this.onValueChange2.bind(this)}>
                    <Picker.Item label="Pequeño" value="key0" />
                    <Picker.Item label="Mediano" value="key1" />
                    <Picker.Item label="Grande" value="key2" />
                  </Picker>
                </Item>
                <Item rounded style={{marginBottom:12}}>
                  <Input type='text' 
                        autoCapitalize="none" 
                        placeholder='Seña Distintiva' 
                        onChangeText={seña => this.setState({ seña })} 
                        value={this.state.seña}/>
                </Item>
                <Item rounded style={{backgroundColor: "#FFFF00"}}>
                  <Label>Género</Label>
                </Item>
                <Item rounded picker style={{marginBottom:12}}>
                  <Picker
                    mode="dropdown"
                    iosHeader="Select your SIM"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    placeholder="Tamaño"
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.selected2}
                    onValueChange={this.onValueChange2.bind(this)}>
                    <Picker.Item label="Hembra" value="key0" />
                    <Picker.Item label="Macho" value="key1" />
                  </Picker>
                </Item>
              </Body>
            </CardItem>
            </Card>
            <Card>
                <CardItem header bordered>
                    <Text>Datos del Dueño</Text>
                </CardItem>
            <CardItem bordered>
                <Body style = {misEstilos.content}>
                    <Item rounded style={{marginBottom:12}}>
                        <Input type='text' 
                        autoCapitalize="none" 
                        placeholder='Nombre Completo' 
                        onChangeText={nameD => this.setState({ nameD })} 
                        value={this.state.nameD}/>
                    </Item>
                    <Item rounded style={{marginBottom:12}}>
                        <Input type='text' 
                        autoCapitalize="none" 
                        placeholder='Edad' 
                        onChangeText={edadD => this.setState({ edadD })} 
                        value={this.state.edadD}/>
                    </Item>
                    <Item rounded style={{marginBottom:12}}>
                        <Input type='text' 
                        autoCapitalize="none" 
                        placeholder='Domicilio' 
                        onChangeText={domicilio => this.setState({ domicilio })} 
                        value={this.state.domicilio}/>
                    </Item>
                    <Item rounded style={{marginBottom:12}}>
                        <Input type='number' 
                        autoCapitalize="none" 
                        placeholder='Número de teléfono' 
                        onChangeText={telefono => this.setState({ telefono })} 
                        value={this.state.telefono}/>
                    </Item>
                    <Item rounded style={{marginBottom:12}}>
                      <Input type='email' 
                        autoCapitalize="none" 
                        placeholder='Correo' 
                        onChangeText={email => this.setState({ email })} 
                        value={this.state.email}/>
                    </Item>
                    <Item rounded style={{marginBottom:12}}>
                      <Input type='text' 
                        autoCapitalize="none" 
                        placeholder='Contraseña' 
                        onChangeText={password => this.setState({ password })} 
                        value={this.state.password}/>
                    </Item>
                </Body>
            </CardItem>
            </Card>
            </ScrollView>
            </>  
        </Content>
        <Footer>
          <FooterTab>
            <Button success style = {misEstilos.content} onPress={this.handleSignUp}>
              <Text> Guardar Datos </Text>
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

  });