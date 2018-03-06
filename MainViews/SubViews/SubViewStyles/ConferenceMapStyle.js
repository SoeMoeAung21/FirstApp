import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions } from 'react-native';
var device = Dimensions.get('window');

const styles = StyleSheet.create({
  listViewStyle:{
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  conImageStyle:{
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  listTextStyle:{
    marginLeft: 20,
    fontSize: 16,
  }
});

export default styles;
