import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions } from 'react-native';
var device = Dimensions.get('window');

const styles = StyleSheet.create({
imageViewStyle:{
  backgroundColor: 'black',
  position: 'absolute',
  flex: 1,
  width: device.width,
  height: device.height,
},
closeTextStyle:{
  fontSize: 18,
  color: 'white',
  marginLeft: device.width - 70,
  marginTop: 30
},
postedImageStyle:{
  height: 200,
  width: device.width - 30
}
});

export default styles;
