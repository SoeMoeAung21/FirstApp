import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions } from 'react-native';
var device = Dimensions.get('window');

const styles = StyleSheet.create({
activityContainerStyle:{
  padding: 15,
  backgroundColor: 'red'
},
mainContainerStyle:{
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  marginBottom: 15
},
upperContainerStyle:{
  flexDirection: 'row',
  borderBottomWidth: 1,
  width: device.width - 30,
},
profileStyle:{
  marginLeft: 5,
  width: 50,
  height: 50,
},
textViewStyle:{
  marginLeft: 5,
  justifyContent: 'center',
},
profileNameStyle:{
  fontSize: 16,
  fontWeight: 'bold'
},
lastPostedDateStyle:{
  marginTop: 5,
  color: 'gray'
},
middleContainerStyle:{
  borderBottomWidth: 1,
},
contentStyle:{
  marginTop: 5,
  marginLeft: 5,
  marginBottom: 5
},
postedImageStyle:{
  height: 200,
  width: device.width - 30
},
likedStyle:{
  marginTop: 5,
  marginLeft: 5,
  flexDirection: 'row',
  marginBottom: 5
},
likedImageStyle:{
  height: 20,
  width: 30,
  tintColor: 'blue'
},
accessoryStyle:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: device.width - 30,
  //backgroundColor: '#55aa55'
},
likeView:{
  flexDirection: 'row',
  marginTop: 5,
  alignItems: 'center'
},
likeImageStyle:{
  width: 40,
  height: 30,
  tintColor: 'blue'
},
});

export default styles;
