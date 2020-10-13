import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class ForgetPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
    };
  }

  render() {
    return (
      <View style={StyleSheets.container}>
        <Text style={StyleSheets.logo}>Forgot Password</Text>
        <View style={StyleSheets.inputView}>
          <TextInput
            style={StyleSheets.inputText}
            placeholder="Enter email"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({email: text})}
          />
        </View>
        <TouchableOpacity style={StyleSheets.loginBtn}>
          <Text
            style={StyleSheets.loginText}
            onPress={() => this.props.navigation.navigate('Home')}>
            Forget Password
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={StyleSheets.loginText}>
          <Text
            style={StyleSheets.loginText}
            onPress={() => this.props.navigation.navigate('LoginScreen')}>
            Back to Login
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

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
    top: 10,
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
