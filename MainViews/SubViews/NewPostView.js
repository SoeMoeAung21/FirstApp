import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions, ActivityIndicator, Animated, FlatList, TouchableHighlight, SectionList, KeyboardAvoidingView  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './SubViewStyles/NewPostViewStyle';
//imported sences
import AppIcons from '../../Themes/Images'

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      marginBottomValue: 64,
      selectedImage: null,

    };
  }

 componentDidMount(){

 }

renderImageFunction(){
  return(
    <View>
      <Image style={styles.selectedImage} source= {this.state.selectedImage}/>
        <TouchableHighlight style={styles.removeFunctionStyle} onPress={()=>this.removingImage()} underlayColor='transparent'>
          <View style={styles.removeButtomStyle}>
            <Text style={styles.removeTextStyle}>Remove</Text>
          </View>
        </TouchableHighlight>
    </View>

  )
}

  render() {
    return (
      <View style={styles.mainContainerStyle}>
      <ScrollView style={styles.scrollViewStyle}>
      <View style={styles.upperContainerStyle}>
        <TextInput style={styles.newPostTextInputStyle} multiline={true} placeholder= 'Start typing or add photo ...'/>
        <TouchableHighlight  onPress={()=>this.selectingImage()} underlayColor= 'transparent'>
          <Image style={styles.newPostImageStyle} source={AppIcons.cameraGrayIcon}/>
        </TouchableHighlight>
      </View>
      <View style={styles.selectedImageViewStyle}>
        {this.state.selectedImage ? this.renderImageFunction() : null}
      </View>
      </ScrollView>
      <KeyboardAvoidingView style={styles.keyboardAvoidStyle} behavior= {'position'}>
      <View style={[styles.underViewStyle,{marginBottom: this.state.marginBottomValue}]}>
        <View style={styles.tagStyle}>
          <Text style={styles.a}>@</Text>
        </View>
        <TextInput style={styles.tag} placeholder= 'Tag a...'/>
        <TouchableHighlight onPress={()=>this.sendingFunciton()} underlayColor='transparent'>
          <View style={styles.sendingViewStyle}>
            <Text style={styles.sendingTextStyle}>Send</Text>
          </View>
        </TouchableHighlight>
      </View>
      </KeyboardAvoidingView>
      </View>

    );
  }


selectingImage(){
  if(this.state.selectedImage === null){
    this.setState({
      selectedImage: AppIcons.spiderman
    })
  }
}

removingImage(){
  this.setState({
    selectedImage: null
  })
}

sendingFunciton(){
  alert('Send')
}

}//End of APP class
