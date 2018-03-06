import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions, ActivityIndicator, Animated, FlatList, TouchableHighlight, SectionList, KeyboardAvoidingView  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ImageViewer from 'react-native-image-zoom-viewer';
import styles from './SubViewStyles/ConferenceMapDetailStyle'
//imported sences
//import AppIcons from '../../Themes/Images'

const images = [{
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'
}, {
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'
}, {
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'
}]


export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      detail: this.props.conDetail
    };
  }

 componentDidMount(){

 }

  render() {
    return (
      <ImageViewer imageUrls={[{url: this.state.detail.image}]}/>

    );
  }









}//End of APP class
