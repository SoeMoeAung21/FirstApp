import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions } from 'react-native';
var device = Dimensions.get('window');

const styles = StyleSheet.create({
scrollViewStyle : {
  backgroundColor: 'red',
},
mainContainerStyle:{
  alignItems: 'center',
  justifyContent: 'center',
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
  borderBottomWidth: 1,
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
keyboardAvoidingCommentViewStyle:{
  alignItems: 'center',
  justifyContent: 'center'
},
overallCommentTextViewStyle:{
  backgroundColor: 'white',
  width: device.width,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',

},
commentTextStyle:{
  height: 30,
  width: device.width - 100,
  borderWidth: 1,
  borderRadius: 10,
  bottom: 0,
},
commentImageStyle:{
  height:40,
  width: 50,
  tintColor: 'blue',
},
flatListMainViewStyle:{
  marginTop: 1,
  backgroundColor: 'gray',
},

commentViewStyle:{
  alignItems: 'center',
  width: device.width -30,
},
secondCommentViewStyle:{
  flexDirection: 'row',
  width: device.width -50,
  borderBottomWidth: 1,
  alignItems: 'center',
},
commentOwnerProfileStyle:{
  marginLeft: 5,
  width: 50,
  height: 50,
  marginRight: 5,
},
ownerTextStyle:{
  fontSize: 16,
  marginBottom: 5,
  fontWeight: 'bold'
},
commentedStyle:{
  minHeight: 50,
  padding: 5,
},
contentCommentStyle:{
  marginLeft: 20,
},
});

export default styles;
