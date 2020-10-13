import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {event} from 'react-native-reanimated';

export default class RegisterScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
    };
    // this.keyboardHeight = Animated.value(0);
  }

  render() {
    return (
      <View style={StyleSheets.container}>
        <Text style={StyleSheets.logo}> Register </Text>
        <View style={StyleSheets.inputView}>
          <TextInput
            style={StyleSheets.inputText}
            placeholder="Enter username"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({username: text})}
          />
        </View>
        <View style={StyleSheets.inputView}>
          <TextInput
            style={StyleSheets.inputText}
            placeholder="Enter Email"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({email: text})}
          />
        </View>
        <View style={StyleSheets.inputView}>
          <TextInput
            style={StyleSheets.inputText}
            placeholder="Enter password"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({password: text})}
          />
        </View>
        <TouchableOpacity style={StyleSheets.loginBtn}>
          <Text style={StyleSheets.loginText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity style={StyleSheets.loginText}>
          <Text
            style={StyleSheets.loginText}
            onPress={() => this.props.navigation.navigate('LoginScreen')}>
            Already have an account? Login
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
/*const StyleSheets = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
    marginTop: 0,
  },
  inputView: {
    width: 250,
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  forgot: {
    color: 'white',
    fontSize: 11,
  },
  register: {
    width: 250,
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: 'white',
  },
  loginBtn: {
    width: 250,
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});*/
const StyleSheets = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#fb5b5a',
    marginBottom: 20,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  forgot: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
