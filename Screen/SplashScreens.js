import React, { useState, useEffect } from 'react';


import {ActivityIndicator, StyleSheet, View, Image} from  'react-native';
import {AsyncStorage} from '@react-native-community/async-storage'

export default class SplashScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          isLoading: true
        };
      }

    render() {

    }
}
 