import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions, ActivityIndicator, Animated, FlatList, TouchableHighlight, SectionList, KeyboardAvoidingView  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ImageViewer from 'react-native-image-zoom-viewer';
import styles from './SubViewStyles/ActivityImageViewStyle';
//imported sences

import AppIcons from '../../Themes/Images'



export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      image: this.props.img
    };
  }

 componentDidMount(){

 }

  render() {
    return (
      <View style={styles.imageViewStyle}>
        <TouchableHighlight onPress={()=>this.close()} underlayColor= 'transparent'>
          <Text style={styles.closeTextStyle}>Close</Text>
        </TouchableHighlight>
        <ImageViewer imageUrls={[{url: this.state.image}]}/>
      </View>
    );
  }
close(){
  Actions.pop()
}








}//End of APP class
