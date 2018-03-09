import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions } from 'react-native';
var device = Dimensions.get('window');

const styles = StyleSheet.create({
shareViewStyle:{
  alignItems: 'center',
  backgroundColor: 'rgba(0,0,0,0.75)',
  position: 'absolute',
  width: device.width,
  height: device.height,
  top: 64
},
closeTextStyle:{
  fontSize: 20,
  color: 'white',
  marginLeft: device.width - 70,
  marginTop: 30
},
mainComponent:{
  alignItems: 'center',
  backgroundColor: 'rgb(255,255,255)',
  height: 250,
  width: 250,
  top: (device.height)/5,
},
shareView:{
    justifyContent: 'center',
    height: 50,
    width: 250,
    backgroundColor:'rgb(0,0,0)',
},
shareStyle:{
  marginLeft:10,
  fontSize: 20,
  color: 'rgb(255,255,255)',
  fontWeight: 'bold',
},
textVewStyle:{
  borderBottomWidth: 1,
  height: 50,
  alignItems: 'center',
  justifyContent: 'center'
},
textStyle:{
  width: 200,
  fontSize: 18,
  color: 'rgb(0,0,0)'

}

});

export default styles;
