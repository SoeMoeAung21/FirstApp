import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions, ActivityIndicator, Animated, FlatList, TouchableHighlight, SectionList, KeyboardAvoidingView  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ImageViewer from 'react-native-image-zoom-viewer';
import styles from './SubViewStyles/ActivityShareViewStyle';
//imported sences

import AppIcons from '../../Themes/Images'



export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

 componentDidMount(){

 }

  render() {
    return (
      <View style={styles.shareViewStyle}>
      <TouchableHighlight onPress={()=>this.close()} underlayColor= 'transparent'>
        <Text style={styles.closeTextStyle}>X</Text>
      </TouchableHighlight>

      <View style={styles.mainComponent}>
        <View style={styles.shareView}>
          <Text style={styles.shareStyle}>Share</Text>
        </View>
        <TouchableHighlight onPress={()=>this.facebook()} underlayColor= 'transparent'>
          <View style={styles.textVewStyle}>
            <Text style={styles.textStyle}>Facebook</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={()=>this.twitter()} underlayColor= 'transparent'>
          <View style={styles.textVewStyle}>
            <Text style={styles.textStyle}>Twitter</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={()=>this.google()} underlayColor= 'transparent'>
          <View style={styles.textVewStyle}>
            <Text style={styles.textStyle}>Google+</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={()=>this.other()} underlayColor= 'transparent'>
          <View style={styles.textVewStyle}>
            <Text style={styles.textStyle}>Other</Text>
          </View>
        </TouchableHighlight>
      </View>
      </View>
    );
  }
close(){
  Actions.pop()
}

facebook(){
  alert('Facebook')
}
twitter(){
  alert('Twitter')
}
google(){
  alert('Google')
}
other(){
  alert('Other')
}




}//End of APP class
