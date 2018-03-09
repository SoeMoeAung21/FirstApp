import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions, ActivityIndicator, Animated, FlatList, TouchableHighlight, SectionList, KeyboardAvoidingView, Keyboard  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import TimeAgo from 'react-native-timeago';
import styles from './SubViewStyles/ActivityCommentStyle';
//imported sences
import AppIcons from '../../Themes/Images'



export default class ActivityFeed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      item: this.props.data,
      overallCommentTextViewMargin: 0,
      focusValue: this.props.isAutoFocus,
    };

  }

componentWillMount(){
  this.keyboardDidShowListener= Keyboard.addListener('keyboardDidShow',()=>this.keyboardDidShow() );
  this.keyboardDidHideListener= Keyboard.addListener('keyboardDidHide',()=>this.keyboardDidHide() );
  this.addKeyToComments();
}

componentWillUnmount(){
    this.keyboardDidHideListener.remove();
    this.keyboardDidHideListener.remove();
}

 addKeyToComments(){
   var i = 0
   var temp = this.state.item
   temp.comments.forEach(function(oneComment){
     oneComment.key = i
     i++
   })
   this.setState({
     item : temp
   })
 }


  render() {
    return (
      <KeyboardAvoidingView style={styles.keyboardAvoidingCommentViewStyle} behavior={'position'}>
        <ScrollView style={styles.scrollViewStyle} contentContainerStyle={styles.mainContainerStyle} contentInset={{bottom: 0}}>
          <View style={styles.upperContainerStyle}>
            <Image style={styles.profileStyle} source= {AppIcons.attendeeIcon}/>
            <View style={styles.textViewStyle}>
              <Text style={styles.profileNameStyle}>{this.state.item.owner}</Text>
              <TimeAgo time={this.state.item.releaseDate} />
            </View>
          </View>
          <View style={styles.middleContainerStyle}>
            <Text style={styles.contentStyle}>{this.state.item.content}</Text>
            <TouchableHighlight onPress={()=>this.imageView(this.state.item)} underlayColor= 'transparent'>
              <Image style={styles.postedImageStyle} source= {{url :this.state.item.imageUrl}}/>
            </TouchableHighlight>
            <View style={styles.likedStyle}>
              <Image style={styles.likedImageStyle} source={AppIcons.activityFeedLikeIcon}/>
              <Text>{this.state.item.like_message}</Text>
            </View>
            <View style={styles.likedStyle}>
              <Image style={styles.likedImageStyle} source={AppIcons.activityFeedCommentIcon}/>
              <Text>Be the first one to comment</Text>
            </View>
          </View>
          <View style={styles.accessoryStyle}>
          <TouchableHighlight onPress={()=>this.likeFunction(this.state.item)} underlayColor= 'transparent'>
            <View style={styles.likeView}>
              <Image style={styles.likeImageStyle} source={this.state.item.isLiked ? AppIcons.activityFeedLikeFullIcon : AppIcons.activityFeedLikeIcon}/>
              <Text>Like</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={()=>this.commentFunction()} underlayColor= 'transparent'>
            <View style={styles.likeView}>
              <Image style={styles.likeImageStyle} source={AppIcons.activityFeedCommentIcon}/>
              <Text>Comment</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={()=>this.shareFunction()} underlayColor= 'transparent'>
            <View style={styles.likeView}>
              <Image style={styles.likeImageStyle} source={AppIcons.activityFeedShareIcon}/>
              <Text>Share</Text>
            </View>
          </TouchableHighlight>
          </View>

          <View >
            {this.renderCommentsList(this.state.item.comments)}
          </View>

        </ScrollView>
          <View style={[styles.overallCommentTextViewStyle, {marginBottom: this.state.overallCommentTextViewMargin}]}>
            <TextInput ref="commentTextBox" autoFocus={this.state.focusValue} style={styles.commentTextStyle} placeholder='Comment Here'>
            </TextInput>
            <TouchableHighlight onPress={()=>this.commentedFunction()} underlayColor= 'transparent'>
              <Image style={styles.commentImageStyle} source={AppIcons.activityFeedCommentIcon}/>
            </TouchableHighlight>
          </View>
      </KeyboardAvoidingView>
    );
  }


  renderCommentsList(commentList){
    return(commentList.map(function(object){
      return(
        <View key={object.key} style={styles.flatListMainViewStyle}>
        <View style={styles.commentViewStyle}>
        <View style={styles.secondCommentViewStyle}>
          <Image style={styles.commentOwnerProfileStyle} source={AppIcons.attendeeIcon}/>
          <View>
            <Text style={styles.ownerTextStyle}>{object.owner}</Text>
            <TimeAgo time={object.commentDate}/>
          </View>
        </View>
        </View>
        <View style={styles.commentedStyle}>
          <Text style={styles.contentCommentStyle}>{object.content}</Text>
        </View>
        </View>
      )

    })
  )
  }

  imageView(item){
    Actions.activityImageView({img:this.state.item.imageUrl})
  }

  likeFunction(content){

    content.isLiked = !content.isLiked
    //alert(tempArray[key-1].isLiked + '   ' + !item.isLiked)
    this.setState({
      item: content
    })
  }

  shareFunction(){
    Actions.activityShareView()
  }

commentFunction(){
  this.refs.commentTextBox.focus()
}

commentedFunction(){
  alert('klafj')
}

keyboardDidShow(){
  this.setState({
    overallCommentTextViewMargin: 65,
  })

}

keyboardDidHide(){
  this.setState({
    overallCommentTextViewMargin: 0,
  })
}

}//End of APP class
