import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions, ActivityIndicator, Animated, FlatList, TouchableHighlight, SectionList, KeyboardAvoidingView  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './Styles/LoginStyle'
//imported sences
//import AppIcons from '../../Themes/Images'




export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

 componentDidMount(){

 }

  render() {
    return (
      <KeyboardAvoidingView style={styles.keyboardAvoidingStyle} behavior={'position'}>
        <Image style={styles.loginImageStyle} source= {require('./husky.jpg')}/>
        <Text style={styles.appNameStyle}>SEAGATE</Text>
        <TextInput style={styles.emailStyle} placeholder='Email'>
        </TextInput>
        <TextInput style={styles.passwordStyle} placeholder='Password' secureTextEntry={true}>
        </TextInput>
        <Button style={styles.loginButtonSyle} onPress={()=>this.loginButton()} title='Login' color= 'blue'/>
      </KeyboardAvoidingView>
    );
  }

loginButton(){
  Actions.main({type: 'reset'})
}







}//End of APP class
