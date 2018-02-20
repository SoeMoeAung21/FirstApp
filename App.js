import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Router, Scene, Modal} from 'react-native-router-flux';
import styles from './AppStyle'

import Home from './MainView/Home';
import AppIcons from './Themes/Images'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene>
          <Scene key='home' component={Home} title='First App' titleStyle={styles.homeTitleStyle} navigationBarStyle={styles.homeNavStyle}
          onRight={()=>this.infoButtonFunction()} rightTitle='Info' rightButtonStyle={styles.rightButtonStyle} rightButtonTextStyle={styles.rightTextStyle}
          onLeft={()=>this.hambugerButtonFunction()} leftTitle='Menu' leftButtonStyle={styles.leftButtonStyle} leftButtonTextStyle={styles.leftTextStyle}
          />
        </Scene>
      </Router>
    );
  }
  infoButtonFunction(){
    alert('Welldone')
  }
  hambugerButtonFunction(){
    alert('Welcome')
  }
}
