import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions, ActivityIndicator, Animated, FlatList, TouchableHighlight, SectionList, KeyboardAvoidingView  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './SubViewStyles/LederboardStyle'
//imported sences
import AppIcons from '../../Themes/Images'




export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      leaderboardData: [
                        {key:1,  icon: null, name: 'Sandy Gregory', rank: 206},
                        {key:2,  icon: null, name: 'Sandy Gregory', rank: 206},
                        {key:3,  icon: null, name: 'Sandy Gregory', rank: 206},
                        {key:4,  icon: null, name: 'Sandy Gregory', rank: 206},
                        {key:5,  icon: null, name: 'Sandy Gregory', rank: 206},
                        {key:6,  icon: null, name: 'Sandy Gregory', rank: 206},
                        {key:7,  icon: null, name: 'Sandy Gregory', rank: 206},
                        {key:8,  icon: null, name: 'Sandy Gregory', rank: 206},
                        {key:9,  icon: null, name: 'Sandy Gregory', rank: 206},
                        {key:10,  icon: null, name: 'Sandy Gregory', rank: 206},
                        {key:11,  icon: null, name: 'Sandy Gregory', rank: 206},
                        {key:12,  icon: null, name: 'Sandy Gregory', rank: 206},
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

this.state.leaderboardData.forEach(function(item){
  item.name ='Ms. ' + item.name
  item.rank = item.rank + 10
})
   service = this
   setTimeout(function(){
     service.setState({
       refreshing: false
     })
   },2500)
 }

  render() {
    return (
      <FlatList
      refreshing={this.state.refreshing}
      onRefresh={()=>this.refreshingFunction()}
      contentContainerStyle={styles.leaderListStyle} data={this.state.leaderboardData}
      renderItem={({item})=> this.renderListItem(item)}
      />
    );
  }

renderListItem(item){
  return(
    <View style={styles.mainListView}>
    <Text style={styles.keyStyle}>{item.key}</Text>
    <Image source={AppIcons.attendeeIcon} style={styles.imageStyle}/>
    <Text style={styles.nameStyle}>{item.name}</Text>
    <Text style={styles.rankStyle}>{item.rank}</Text>
    </View>
  )
}







}//End of APP class
