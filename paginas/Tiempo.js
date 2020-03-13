import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { Card, CardItem, Body, Input, Item } from 'native-base';
import {StyleSheet, ImageBackground, Image, View} from 'react-native';

export default class Tiempo extends Component {
  render() {
    return (
      <View>
        <Text>Tiempo</Text>
      </View>
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