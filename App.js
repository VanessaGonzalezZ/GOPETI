//GOPETI'S TEAM WORK
//DEVELOPERS: GONZALEZ ZAMORA NIDIA VANESSA, LEAL HERNANDEZ BETZY JANETH, RESENDIZ SERRANO ANA JOSEFINA AND SALINAS RIVAS RICARDO
//DOCUMENT THAT DOES ALL THE NAVIGATION WORK 

//IMPORT DEPENDENCIES PREVIOUSLY INSTALLED IN THE APP'S DIRECTORY
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {MaterialIcons} from '@expo/vector-icons';
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
import Post from './paginas/Post';


import * as firebase from 'firebase';

const AppContainer = createStackNavigator(
  {
    default: createBottomTabNavigator(
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
            color={tintColor}
            />
          }
        },
        Post: {
          screen: Post,
          navigationOptions:{
            tabBarIcon: ({tintColor}) => <MaterialIcons
            name="add-a-photo"
            size={30}
            color={tintColor}/>
          }
        }
      },
      {
        defaultNavigationOptions: {
          tabBarOnPress: ({navigation, defaultHandler}) => {
            if(navigation.state.key === 'Post'){
              navigation.navigate("postModal")
            } else {
              defaultHandler();
            }
          }
        },
        tabBarOptions: {
          activeTintColor: '#FFFF00',
          inactiveTintColor: "#FFFFFF",
          showLabel: false,
          style: {
            borderWidth: 0,
            backgroundColor: '#191970', //need change this color code as per prop
            borderTopColor: '#000000'}
        }
      }
    ),
    postModal: {
      screen: Post
    }
  },
  {
    mode: "modal",
    headerMode:"none"
  }
)

//PAGES THA USE FIREBASE AUTHENTICATION
const AuthStack = createStackNavigator({
  Login: Login,
  Register: Registro
});


//CREATING ROUTES
export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: Loading,
      App: AppContainer,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
);