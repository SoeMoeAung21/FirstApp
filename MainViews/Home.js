import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions, ActivityIndicator, Animated, FlatList, TouchableHighlight  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ImageSlider from 'react-native-image-slider';
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
      ],
      testData: []

    };
  }

 componentDidMount(){




 }

  render() {
    return (
      <View style={styles.mainContainer}>
      <View style={styles.upperContainer}>
          <ImageSlider images={['http://openwalls.com/image/49228/thumb3_red_sky_mirrored_by_the_water.jpg',
          'https://i.pinimg.com/originals/24/19/9b/24199bf533ebeac14c9b8b5579677a9d.jpg',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUtOxE7IC7A4ZakuDdzc1W0Cr3Mo_F9wlYDIJ3j7s-qEDEy21t']}/>
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
      <TouchableHighlight onPress={()=>this.subView(item)} underlayColor= 'transparent'>
        <View style={styles.secondContainer}>
          <Image style={styles.imageStyle} source={item.image}/>
          <Text style={styles.titleStyle}>{item.title}</Text>
        </View>
      </TouchableHighlight>
  )
}
subView(item){
  if (item.key===1){
    alert(item.title)
    //Actions.myProfile()
  }else if(item.key=== 2){
    Actions.activityFeed()
  }else if(item.key=== 3){
    alert(item.title)
    //Actions.agenda()
  }else if(item.key === 4){
    Actions.speaker()
  }else if(item.key === 5){
    alert(item.title)
    //Actions.exhibitor()
  }else if(item.key === 6){
    alert(item.title)
    //Actions.sponsor()
  }else if(item.key === 7){
    alert(item.title)
    //Actions.attendee()
  }else if(item.key === 8){
    alert(item.title)
    //Actions.survey()
  }else if(item.key === 9){
    Actions.conferenceMap()
  }else if (item.key ===10){
    alert(item.title)
    //Actions.socialMedia()
  }else if (item.key === 11){
    Actions.lederboard()
  }
}

}//End of APP class
