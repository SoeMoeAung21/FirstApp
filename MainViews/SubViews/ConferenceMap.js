import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions, ActivityIndicator, Animated, FlatList, TouchableHighlight, SectionList, KeyboardAvoidingView  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ImageViewer from 'react-native-image-zoom-viewer';

import styles from './SubViewStyles/ConferenceMapStyle'
//imported sences
import AppIcons from '../../Themes/Images'




export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      conferenceData: [
                      {key: 1, icon: AppIcons.conferenceMapIcon, title: 'Direction to Hotel', image: 'http://static.asiawebdirect.com/m/bangkok/portals/myanmar/homepage/bagan/pagePropertiesImage/bagan.jpg.jpg'},
                      {key: 2, icon: AppIcons.conferenceMapIcon, title: 'Hotel Meeting Space', image: 'http://myanmartravel.indochinacharm.com/wp-content/uploads/2016/09/myanmar-bagan-768x444.jpg'},
                      {key: 3, icon: AppIcons.conferenceMapIcon, title: 'FloorPlan', image: 'https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5383835436001-brightcove-the-best-of-bagan-temples-20170411-063305.jpg'},
                      {key: 4, icon: AppIcons.conferenceMapIcon, title: 'Capacity Chart', image: 'https://api.services.trvl.com/backgrounds/images/bagan_1.jpg'},
      ]
    };
  }

 componentDidMount(){

 }

 refreshingFunction(){
   this.setState({
     refreshing: true
   })
   this.updatingData()
 }

updatingData(){
  var service = this
  setTimeout(function(){
      service.setState({
        refreshing: false
      });
  },2500)
}

  render() {
    return (
      <FlatList
      refreshing={this.state.refreshing}
      onRefresh={()=>this.refreshingFunction()}
      contentContainerStyle={styles.listStyle} data={this.state.conferenceData}
      renderItem={({item})=> this.renderListItem(item)}/>
    );
  }

  renderListItem(item){
    return(
      <TouchableHighlight onPress={()=>this.goToDetailPage(item)} underlayColor= 'transparent'>
      <View style={styles.listViewStyle}>
      <Image source={item.icon} style={styles.conImageStyle}/>
      <Text style={styles.listTextStyle}>{item.title}</Text>
      </View>
      </TouchableHighlight>
    )
  }
goToDetailPage(item){
  Actions.conferenceMapDetail({conDetail: item, title: item.title})
}

}//End of APP class
