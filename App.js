import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Router, Scene, Modal, Lightbox} from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';
import styles from './AppStyle'

import Home from './MainViews/Home';
import AppIcons from './Themes/Images'
import Speaker from './MainViews/SubViews/Speaker';
import Login from './MainViews/Login';
import ConferenceMap from './MainViews/SubViews/ConferenceMap';
import ConferenceMapDetail from './MainViews/SubViews/ConferenceMapDetail';
import Lederboard from './MainViews/SubViews/Lederboard';
import ActivityFeed from './MainViews/SubViews/ActivityFeed';
import ActivityImageView from './MainViews/SubViews/ActivityImageView';
import ActivityShare from './MainViews/SubViews/ActivityShare';
import ActivityCommentView from './MainViews/SubViews/ActivityCommentView';
import NewPostView from './MainViews/SubViews/NewPostView';

export default class App extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      doesUserAlreadyLogin: false
    };
}
  render() {
    return (
      <Router>


      <Lightbox>
      <Scene hideNavBar>
          <Scene key='login' component={Login} initial={!this.state.doesUserAlreadyLogin} type={'reset'}/>
          <Scene key='main' initial={this.state.doesUserAlreadyLogin} titleStyle={styles.homeTitleStyle} navigationBarStyle={styles.homeNavStyle} rightButtonTextStyle={styles.rightTextStyle}
            leftButtonTextStyle={styles.leftTextStyle} rightButtonStyle={styles.rightButtonStyle} leftButtonStyle={styles.leftButtonStyle} backButtonTintColor='white'>
            <Scene key='home' component={Home} title='First App'
            onRight={()=>this.infoButtonFunction()} rightTitle='Info'
            onLeft={()=>this.hambugerButtonFunction()} leftTitle='LogOut'
            />
            <Scene key='activityFeed' component={ActivityFeed} title='Activity Feed'
            onRight={()=>this.newpost()} rightTitle='New Post'/>
            <Scene key='speaker' component={Speaker} title='Speakers'/>
            <Scene key='conferenceMap' component={ConferenceMap} title='Conference Map'/>
            <Scene key='conferenceMapDetail' component={ConferenceMapDetail}/>
            <Scene key='lederboard' component={Lederboard} title='Lederboard'/>
            <Scene key='comment' component={ActivityCommentView} title='Comments'/>
            <Scene key='newPost' component={NewPostView} title='New Post'/>
          </Scene>
          </Scene>
            <Scene key='activityImageView' component={ActivityImageView}/>
            <Scene key='activityShareView' component={ActivityShare}/>
          </Lightbox>

      </Router>
    );
  }
  infoButtonFunction(){
    alert('Welldone')
  }
  hambugerButtonFunction(){
    Actions.login()
  }
  newpost(){
    Actions.newPost()
  }
}
