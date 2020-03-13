//PRINCIPAL PAGE, IT SHOWS PUBLICATIONS

//IMPORTS DEPENDENCIES AND THEIR ELEMENTS
import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Card, Left,
      CardItem,
      Thumbnail,
      Body,
      Right,
      View} from 'native-base';
import {StyleSheet, Image} from 'react-native';
import * as firebase from 'firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';

//CREATING CLASS TO CONSTRUCT THE PAGE
export default class Principal extends Component {
  //VARIABLES USED TO SEND INFO TO THE DB
  state = {
    email: "",
    displayName: ""
  }

  //CREATE CONSTANT TO CALL DB AND DECLARE VARIABLES INTO IT
  componentDidMount(){
    const {email, displayName} = firebase.auth().currentUser

    this.setState({email, displayName});
  }

  //METHOD TO LOGOUT YOUR ACCOUNT
  signOutUser = () => {
    firebase.auth().signOut();
  };

  //RENDERING PAGE
  render() {
    const navegar = this.props.navigation;
    return (
      <Container>
        <Header>
        <Right>
          <Button danger onPress={this.signOutUser}>
            <Text style={{color:'#E0FFFF'}}>Salir</Text>
          </Button>
        </Right>
        </Header>
        <Content>
          <Card>
          <CardItem>
              <Left>
                <Thumbnail source={require('./../assets/imgs/1.png')}/>
                <Body >
                  <Text>Bienvenido {this.state.email} </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Thumbnail source={require('./../assets/imgs/1.png')}/>
                <Body >
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('./../assets/imgs/2.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon type='Ionicons' name="ios-chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('./../assets/imgs/3.jpg')}/>
                <Body >
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('./../assets/imgs/4.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('./../assets/imgs/5.jpg')}/>
                <Body >
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('./../assets/imgs/7.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('./../assets/imgs/1.png')}/>
                <Body >
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('./../assets/imgs/2.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('./../assets/imgs/3.jpg')}/>
                <Body >
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('./../assets/imgs/4.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('./../assets/imgs/5.jpg')}/>
                <Body >
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('./../assets/imgs/7.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#F5FCFF',
  },
  texto:{
    fontSize:20,
    textAlign:'center',
    margin:10,
  },
  backgroundImage:{ 
    flex: 1,
    resizeMode: 'contain',
  },
  cardText:{
    textAlign:'right',
  }

});
