import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions, ActivityIndicator, Animated, FlatList, TouchableHighlight, SectionList, KeyboardAvoidingView, MaskedViewIOS  } from 'react-native';
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
        <MaskedViewIOS
        style={{ flex: 1, flexDirection: 'row', height: '100%' }}
        maskElement={
          <View style={{
            backgroundColor: 'transparent',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Text style={{
              fontSize: 60,
              color: 'red',
              fontWeight: 'bold',
            }}>
              SEAGATE
            </Text>
          </View>
        }
      >
      <Image style={{ flex: 1, height: '100%', backgroundColor: '#324376' }} source={require('./husky.jpg')}/>

      </MaskedViewIOS>
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
