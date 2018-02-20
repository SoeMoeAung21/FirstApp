import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions } from 'react-native';
var device = Dimensions.get('window');

const styles = StyleSheet.create({
homeNavStyle:{
  backgroundColor: 'red',
},
homeTitleStyle:{
  color: 'white',
},
rightButtonStyle:{
  right: 5
},
leftButtonStyle:{
  left: 5
},
rightTextStyle:{
  color: 'white',
},
leftTextStyle:{
  color: 'white',
}
});

export default styles;
