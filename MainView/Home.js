import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions, ActivityIndicator, Animated, FlatList  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './Styles/HomeStyle'
//imported sences
import AppIcons from '../Themes/Images'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
            {key: 1, image: AppIcons.myProfileIcon, title: 'My Profile'},
            {key: 2, image: AppIcons.activityFeedIcon, title: 'Activity Feed'},
            {key: 3, image: AppIcons.agendaIcon, title: 'Agenda'},
            {key: 4, image: AppIcons.speakerIcon, title: 'Speakers'},
            {key: 5, image: AppIcons.exhibitorIcon, title: 'Exhibitors'},
            {key: 6, image: AppIcons.sponsorIcon, title: 'Sponsors'},
            {key: 7, image: AppIcons.attendeeIcon, title: 'Attendees'},
            {key: 8, image: AppIcons.sruveysIcon, title: 'Surveys'},
            {key: 9, image: AppIcons.conferenceMapIcon, title: 'Conference Map'},
            {key: 10, image: AppIcons.socialMediaIcon, title: 'Social Media'},
            {key: 11, image: AppIcons.leaderboardIcon, title: 'Lederboard'},
      ]

    };
  }

 componentDidMount(){

 }

  render() {
    return (
      <View style={styles.mainContainer}>
      <View style={styles.upperContainer}>
      </View>
      <FlatList contentContainerStyle={styles.flatListStyle}
      data={this.state.data}
      renderItem={({item}) => this.renderListItem(item)}
      numColumns={4} horizonal={false}
      />
      </View>
    );
  }

  renderListItem(item){
  return(

        <View style={styles.secondContainer}>
          <Image style={styles.imageStyle} source={item.image}/>
          <Text style={styles.titleStyle}>{item.title}</Text>
        </View>

  )
}


}//End of APP class
