import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions } from 'react-native';
var device = Dimensions.get('window');

const styles = StyleSheet.create({
keyboardAvoidingStyle:{
  alignItems: 'center',
  justifyContent: 'center'
},
loginImageStyle:{
  marginTop: 50,
  height: 200,
  width: 300,
  borderRadius: 20,
  //backgroundColor: 'red'
},
appNameStyle:{
  fontSize: 30,
  marginTop: 50,
  fontWeight: 'bold',
  textAlign: 'center',
  textShadowColor: 'red',
  textDecorationLine: 'underline',
  textShadowRadius: 50,
  textShadowOffset: {width: 5, height: 5},
  fontStyle: 'italic',
  textDecorationStyle: 'dashed',
  writingDirection: 'ltr',
},
emailStyle:{
  height: 30,
  marginTop: 150,
  width: device.width - 100,
},
passwordStyle:{
  height: 30,
  marginTop: 5,
  width: device.width -100,
},
loginButtonSyle: {
  marginTop: 30,

}

});

export default styles;
