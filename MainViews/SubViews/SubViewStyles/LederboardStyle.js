import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions } from 'react-native';
var device = Dimensions.get('window');

const styles = StyleSheet.create({
leaderListStyle:{
  justifyContent: 'center'
},
mainListView:{
  flexDirection: 'row',
  borderBottomWidth: 1,
  alignItems: 'center'
},
keyStyle:{
  marginLeft: 10,
  width: 20
},
imageStyle:{
  width: 50,
  height: 50,
  marginLeft: 5,
  marginTop: 10,
},
nameStyle:{
  marginLeft: 5,
  width: device.width - 130,
},
rankStyle:{
  right: 0,
  width: 50,
}

});

export default styles;
