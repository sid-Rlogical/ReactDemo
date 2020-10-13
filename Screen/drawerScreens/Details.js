import * as React from 'react';
import {View, StyleSheet, Text, Image, Button} from 'react-native';
//import {createStackNavigator} from '@react-navigation/stack';

export default class Details extends React.Component {
  /* static navigationOptions = {
    title: 'Details',
  }; */

  goHome = async () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    //const name = this.props.navigation.getParam('name', 'nothing sent');
    //const email = this.props.navigation.getParam('email', 'nothing sent');
    const {name, email, image} = this.props.route.params;
    return (
      <View style={styles.container}>
        <View style={styles.imageView}>
          <Image style={styles.profileImgStyle} source={{uri: image}} />
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>User name: </Text>
          <Text style={styles.text}>{name}</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>Email: </Text>
          <Text style={styles.text}>{email}</Text>
        </View>
        <Button title="Home" style={styles.buttonView} onPress={this.goHome} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    justifyContent: 'center',
  },
  textView: {
    width: '100%',
    marginBottom: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImgStyle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 50,
  },
  imageView: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonView: {
    marginBottom: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
});
