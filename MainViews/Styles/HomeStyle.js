import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions } from 'react-native';
var device = Dimensions.get('window');

const styles = StyleSheet.create({
mainContainer: {
  flex: 1
},
upperContainer:{
  flex: 0.3,
  backgroundColor: '#00b33c'
},
flatListStyle:{
  width: device.width -10,
  left:5,
  right: 5,
  //backgroundColor: 'red'
},
secondContainer: {
  alignItems: 'center',
  justifyContent: 'center',
  width: (device.width -10)/4,
  marginLeft: 0,
  marginRight: 0,
  marginTop: 5,
},
imageStyle:{
  width: 80,
  height: 80
}

});

export default styles;
