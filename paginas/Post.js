import React, { Component } from 'react';
import {StyleSheet, 
    Image, 
    View, 
    SafeAreaView, 
    TouchableOpacity, 
    TextInput,
    Text} from 'react-native';
import {Icon} from 'native-base';
import {Ionicons} from '@expo/vector-icons';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import fire from '../Fire';
import * as ImagePicker from 'expo-image-picker';
import Fire from '../Fire';

const firebase = require("firebase");
require("firebase/firestore");

export default class Post extends Component {
    state ={
        text: "",
        image: null
    };

    componentDidMount() {
        this.getPhotoPermission();
    };

    getPhotoPermission = async () => {
        if(Constants.platform.android){
            const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);

            if(status != "granted") {
                alert("GOPETI solicita acceso a tu Galería");
            }
        }
    };

    handlePost = () => {
        Fire.shared
        .addPost({ text: this.state.text.trim(), localUri: this.state.image})
        .then(ref => {
            this.setState({ text: "", image: null });
            this.props.navigation.goBack();
        })
        .catch(error => {
            alert(error.message);
        });
    };

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3]
        });

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };

  render() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Icon name='arrow-back'/>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.handlePost}>
                    <Text style={{fontWeight: "500" }}>Post</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.inputContainer}>
                <Image source={require("./../assets/imgs/1.png")} style={styles.avatar}></Image>
                <TextInput 
                autoFocus={true} 
                multiline={true} 
                numberOfLines={4} 
                style={{flex: 1}}
                placeholder="¿Qué está pasando?"
                onChangeText={text => this.setState({text})}
                value={this.state.text}
                ></TextInput>
            </View>

            <TouchableOpacity style={styles.photo} onPress={this.pickImage}>
                <Ionicons name="md-camera" size={40} color="#483D8B"></Ionicons>
            </TouchableOpacity>

            <View style={{marginHorizontal:32, marginTop: 32, height: 150}}>
                <Image source={{ uri: this.state.image }} style={{width: "100%", height:"100%"}}></Image>
            </View>

        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex:1
  },
  header: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 35,
      paddingVertical: 12,
      borderBottomWidth: 3,
      borderBottomColor: "#D8D90B",
      marginTop: 35
  },
  inputContainer: {
      margin: 32,
      flexDirection: "row"
  },
  avatar: {
      width: 48,
      height: 48,
      borderRadius: 24,
      marginRight: 16,
  },
  photo: {
      alignItems: "flex-end",
      marginHorizontal: 32
  }
});