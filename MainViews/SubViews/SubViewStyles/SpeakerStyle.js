import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions } from 'react-native';
var device = Dimensions.get('window');

const styles = StyleSheet.create({

speakerTitleStyle:{
  flex: 1,
  backgroundColor: '#4d1919',
  height: 20,
  fontSize: 18,
  color: 'white',

},
subViewImageStyle:{
  width: 60,
  height: 60
},
eachViewStyle: {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  borderBottomWidth: 1
},
nameStyle:{
 fontSize: 18,
},
typeStyle:{
  marginTop: 5,
  color: 'gray'
},
textViewStyle:{
  marginLeft: 20,
},
searchingViewStyle:{
  alignItems: 'center',
  justifyContent: 'center',
  height: 40,
  backgroundColor: '#7575a3'
},
textInputStyle:{
  height: 30,
  borderWidth: 1,
  borderRadius: 10,
  width: device.width - 20,
  backgroundColor: 'white'
}


});

export default styles;
