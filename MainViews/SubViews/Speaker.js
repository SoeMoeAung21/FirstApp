import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions, ActivityIndicator, Animated, FlatList, TouchableHighlight, SectionList, RefreshControl  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './SubViewStyles/SpeakerStyle'
//imported sences
import AppIcons from '../../Themes/Images'

var allMembers = require('../../Data/members.json')

var exampleData = [
  {title : 'A', data: [{key: 1, name: 'Apple', type: 'Fruit'}, {key: 2, name: 'Ant', type: 'Animal'}]},
  {title : 'B', data: [{key: 1, name: 'Banana', type: 'Fruit'}, {key: 2, name: 'Boar', type: 'Animal'}, {key: 3, name: 'Boat', type:'Vehicle'}]},
  {title : 'C', data: [{key: 1, name: 'Cake', type: 'Food'}, {key: 2, name: 'Cow', type: 'Animal'}, {key: 3, name: 'Car', type:'Vehicle'}, {key: 4, name: 'Cat', type: 'Animal'}]},
]



export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

 componentDidMount(){
   var tempArray = [];
   allMembers.forEach(
     function(oneMember){
       if(oneMember.type === 'Speaker'){
         tempArray.push(oneMember)
       }
     }
   );
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
    })
  }, 2500);
}

  render() {
    return (
      <SectionList
      refreshing={this.state.refreshing}
      onRefresh={()=>this.refreshingFunction()}
      style={{flex: 1,}} ListHeaderComponent={()=>this.headerComponent()}
      renderItem={({item}) => this.sectionListItem(item)}
      renderSectionHeader={({section}) => this.sectionHeader(section)}
      sections={exampleData}
  />
    );
  }



sectionHeader(section){
  return(
    <Text style={styles.speakerTitleStyle}>{section.title}</Text>
  )
}

sectionListItem(item){
  return(
    <View style={styles.eachViewStyle}>
      <Image style={styles.subViewImageStyle} source={AppIcons.speakerIcon}/>
    <View style={styles.textViewStyle}>
      <Text style={styles.nameStyle}>{item.name}</Text>
      <Text style={styles.typeStyle}>{item.type}</Text>
    </View>
    </View>
  )
}

headerComponent(){
  return(
    <View style={styles.searchingViewStyle}>
    <TextInput style={styles.textInputStyle} placeholder={'speaker name or company'}>
    </TextInput>
    </View>
  )
}


}//End of APP class
