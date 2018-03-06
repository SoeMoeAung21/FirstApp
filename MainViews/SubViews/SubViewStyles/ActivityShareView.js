import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions, ActivityIndicator, Animated, FlatList, TouchableHighlight, SectionList, KeyboardAvoidingView  } from 'react-native';
import { Actions } from 'react-native-router-flux';
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
        
      </View>
    );
  }
close(){
  Actions.pop()
}








}//End of APP class
