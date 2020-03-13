import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { Card, CardItem, Body, Input, Item } from 'native-base';
import {StyleSheet, ImageBackground, Image, View} from 'react-native';

export default class Ubicacion extends Component {
  render() {
    const navegar = this.props.navigation;
    return (
      <Container>
        <Header/>
        <Content>
        <Card>
        <Text>Aquí no funciona nada</Text>
        </Card>
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical onPress={() => { navegar.navigate('Principal')}}>
              <Icon type="Foundation" name="home" />
              <Text>Home</Text>
            </Button>
            <Button vertical onPress={() => { navegar.navigate('Perfil')}}>
              <Icon type="Entypo" name="baidu" />
              <Text>Perfil</Text>
            </Button>
            <Button vertical onPress={() => { navegar.navigate('Ubicacion')}}>
              <Icon  type="Foundation" name="map" />
              <Text>Ubicación</Text>
            </Button>
            <Button vertical onPress={() => { navegar.navigate('Tiempo')}}>
              <Icon  type="MaterialCommunityIcons" name="weather-partlycloudy" />
              <Text>Tiempo</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1 
  },
  logoImg:{
    width: '30%',
    height: '20%',
    alignContent: 'center', 
  },
  cosaImg:{
    //width: 'screenWidth', 
    //height: 'screenHeight', 
    position: 'absolute', 
    top: 0, 
    left: 0 
  },
});