import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions } from 'react-native';
var device = Dimensions.get('window');

const styles = StyleSheet.create({
mainContainerStyle:{
  backgroundColor: 'white'
},
scrollViewStyle:{
  height: device.height - 60 - 64
},
upperContainerStyle:{
  flexDirection: 'row',
},
newPostTextInputStyle:{
  minHeight: 60,
  width: device.width - 60,
  fontSize: 16,
  padding: 5
},
newPostImageStyle:{
  height: 50,
  width: 50,
  borderWidth: 1,
  borderRadius: 10,
  borderColor: 'gray',

},
selectedImageViewStyle:{
  height: device.height - 170
},
selectedImage:{
  top: 0,
  width: device.width,
  height: device.height - 170
},
removeFunctionStyle:{
  position: 'absolute',
  top: 0,
},
removeButtomStyle:{
  marginLeft: device.width - 70,
  marginTop: 10,
  height: 30,
  width: 60,
  borderWidth: 1,
  borderRadius: 10,
  backgroundColor: 'red',
  alignItems: 'center',
  justifyContent: 'center'
},
removeTextStyle:{
  fontSize: 14,
  color: 'white',
},
underViewStyle:{
  height: 60,
  backgroundColor: 'gray',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  bottom: 0,
},
tagStyle: {
  backgroundColor: '#b3003b',
  borderWidth: 1,
  borderBottomLeftRadius: 10,
  borderTopLeftRadius: 10,
  height: 30,
  width: 30,
  alignItems: 'center',
  justifyContent: 'center'
},
a:{
  fontSize: 14,
  color: 'white'
},
tag:{
  height: 30,
  width: 250,
  borderWidth: 1,
  borderBottomRightRadius: 10,
  borderTopRightRadius: 10,
  backgroundColor: 'white',
  padding: 5
},
sendingViewStyle:{
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 1,
  borderRadius: 10,
  backgroundColor: '#b3003b',
  width: 50,
  height: 20,
  marginLeft: 5,
},
sendingTextStyle:{
  color: 'white',
  fontSize: 16,
}
});

export default styles;
