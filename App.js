//GOPETI'S TEAM WORK
//DEVELOPERS: GONZALEZ ZAMORA NIDIA VANESSA, LEAL HERNANDEZ BETZY JANETH, RESENDIZ SERRANO ANA JOSEFINA AND SALINAS RIVAS RICARDO
//DOCUMENT THAT DOES ALL THE NAVIGATION WORK 

//IMPORT DEPENDENCIES PREVIOUSLY INSTALLED IN THE APP'S DIRECTORY
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {Foundation} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';

//IMPORT APP'S PAGES 
import Login from './paginas/Login';
import Registro from './paginas/Registro';
import Principal from './paginas/Principal';
import Perfil from './paginas/Perfil';
import Ubicacion from './paginas/Ubicacion';
import Tiempo from './paginas/Tiempo';
import Loading from './paginas/Loading';


import * as firebase from 'firebase';


//DATABASE CONFIGURATION, THIS SCRIPT IS GENERATED AT THE MOMENT OF THE REGISTER OF THE APP IN FIREBASE 
var firebaseConfig = {
    apiKey: "AIzaSyArt4U45Twvqh-mT4-58zFqxXL_qtNfajg",
    authDomain: "gopeti-official2.firebaseapp.com",
    databaseURL: "https://gopeti-official2.firebaseio.com",
    projectId: "gopeti-official2",
    storageBucket: "gopeti-official2.appspot.com",
    messagingSenderId: "563498890964",
    appId: "1:563498890964:web:60813bd502e10a652ced41"
  };

//THIS LINE INITIALIZE THE DATABASE USING THE DB CONFIG 
  firebase.initializeApp(firebaseConfig);

//NAVIGATION CONFIGURATION
const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Principal,
      navigationOptions:{
        tabBarIcon: ({ tintColor }) => <Foundation 
        name="home" 
        size={24} 
        color={tintColor}/>
      }
    },
    Profile: {
      screen: Perfil,
      navigationOptions:{
        tabBarIcon: ({ tintColor }) => <Entypo 
        name="baidu" 
        size={24} 
        color={tintColor}/>
      }
    },
    Track: {
      screen: Ubicacion,
      navigationOptions:{
        tabBarIcon: ({ tintColor }) => <Foundation 
        name="map" 
        size={24} 
        color={tintColor}/>
      }
    },
    Weather: {
      screen: Tiempo,
      navigationOptions:{
        tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons 
        name="weather-partlycloudy" 
        size={40} 
        color="#E9446A"
        />
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#161F3D",
      inactiveTintColor: "#88B8C4",
      showLabel: false,
      style: {
        borderWidth: 0,
        backgroundColor: '#000000', //need change this color code as per prop
        borderTopColor: '#000000',
      },
    }
  }
)

//PAGES THA USE FIREBASE AUTHENTICATION
const AuthStack = createStackNavigator({
  Login: Login,
  Register: Registro
})


//CREATING ROUTES
export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: Loading,
      App: AppTabNavigator,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
);