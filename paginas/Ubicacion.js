import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { Card, CardItem, Body, Input, Item } from 'native-base';
import {StyleSheet, ImageBackground, Image, View} from 'react-native';

export default class Ubicacion extends Component {
  render() {
    const navegar = this.props.navigation;
    return (
      <View>
        <CardItem>
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Ionicons name="md-arrow-back" size={24} color="#08D90B"></Ionicons>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{fontWeight:"500"}}>Post</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
                <Image source={require("./../assets/imgs/1.png")} style={styles.avatar}/>
                <TextInput 
                autoFocus={true} 
                multiline={true} 
                numberOfLines={4} 
                style={{flex: 1}}
                placeholder="¿Qué está pasando?"
                />
            </View>
    
      </SafeAreaView>
        </CardItem>
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