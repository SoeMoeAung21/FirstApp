import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions, ActivityIndicator, Animated, FlatList, TouchableHighlight, SectionList, KeyboardAvoidingView  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import TimeAgo from 'react-native-timeago';
import styles from './SubViewStyles/ActivityFeedStyle';
//imported sences
import AppIcons from '../../Themes/Images'

var activityData = require('../../Data/activityFeedPosts.json')


export default class ActivityFeed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listData : [],
    };

    this.renderListItem = this.renderListItem.bind(this)
  }

 componentDidMount(){
   var tempArray = activityData
   tempArray.forEach(function(item){
     item.isLiked = false
   })
   this.setState({
     listData: tempArray
   })
 }

  render() {
    return (
    <FlatList contentContainerStyle={styles.activityContainerStyle}
      extraData= {this.state}
      data= {this.state.listData}
      renderItem={({item})=>this.renderListItem(item)}/>
    );
  }

renderListItem(item){
  return(
  <View style={styles.mainContainerStyle}>
  <View style={styles.upperContainerStyle}>
    <Image style={styles.profileStyle} source= {AppIcons.speakerIcon}/>
    <View style={styles.textViewStyle}>
      <Text style={styles.profileNameStyle}>{item.owner}</Text>
      <TimeAgo time={item.releaseDate} />
    </View>
  </View>
  <View style={styles.middleContainerStyle}>
    <Text style={styles.contentStyle}>{item.content}</Text>
    <TouchableHighlight onPress={()=>this.imageView(item)} underlayColor= 'transparent'>
      <Image style={styles.postedImageStyle} source= {{url :item.imageUrl}}/>
    </TouchableHighlight>
    <View style={styles.likedStyle}>
      <Image style={styles.likedImageStyle} source={AppIcons.activityFeedLikeIcon}/>
      <Text>{item.like_message}</Text>
    </View>
    <View style={styles.likedStyle}>
      <Image style={styles.likedImageStyle} source={AppIcons.activityFeedCommentIcon}/>
      <Text>Be the first one to comment</Text>
    </View>
  </View>
  <View style={styles.accessoryStyle}>
  <TouchableHighlight onPress={()=>this.likeFunction(item.key, item)} underlayColor= 'transparent'>
    <View style={styles.likeView}>
      <Image style={styles.likeImageStyle} source={item.isLiked ? AppIcons.activityFeedLikeFullIcon : AppIcons.activityFeedLikeIcon}/>
      <Text>Like</Text>
    </View>
  </TouchableHighlight>
  <View style={styles.likeView}>
      <Image style={styles.likeImageStyle} source={AppIcons.activityFeedCommentIcon}/>
      <Text>Comment</Text>
  </View>
  <TouchableHighlight onPress={()=>this.shareFunction()} underlayColor= 'transparent'>
    <View style={styles.likeView}>
      <Image style={styles.likeImageStyle} source={AppIcons.activityFeedShareIcon}/>
      <Text>Share</Text>
    </View>
  </TouchableHighlight>
  </View>
  </View>
  )
}

imageView(item){
  Actions.activityImageView({img:item.imageUrl})
}

likeFunction(key, item){
  var tempArray = activityData
  tempArray[key-1].isLiked = !item.isLiked
  //alert(tempArray[key-1].isLiked + '   ' + !item.isLiked)
  this.setState({
    listData: tempArray
  })
}

shareFunction(){
  Actions.activityShareView()
}




}//End of APP class
