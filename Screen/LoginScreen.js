import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isLoading: false,
    };
  }
  userLogin = () => {
    if (this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter the sign in details!');
    } else {
      this.state({
        isLoading: false,
      });

      setTimeout(() => {
        this.state({
          isLoading: true,
        });
      });
    }
  };

  render() {
    return (
      <View style={StyleSheets.container}>
        <Text style={StyleSheets.logo}>Login</Text>
        <View style={StyleSheets.inputView}>
          <TextInput
            style={StyleSheets.inputText}
            placeholder="Enter username"
            placeholderTextColor="#003f5c"
            value={email}
            onChangeText={(text) => this.setState({email: text})}
          />
        </View>
        <View style={StyleSheets.inputView}>
          <TextInput
            style={StyleSheets.inputText}
            placeholder="Enter password"
            placeholderTextColor="#003f5c"
            value={password}
            onChangeText={(text) => this.setState({password: text})}
          />
        </View>
        <TouchableOpacity>
          <Text
            style={StyleSheets.forgot}
            onPress={() => this.props.navigation.navigate('ForgetPassword')}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={StyleSheets.loginBtn}>
          <Text
            style={StyleSheets.loginText}
            onPress={() => this.props.navigation.navigate('Home')}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={StyleSheets.loginText}>
          <Text
            style={StyleSheets.loginText}
            onPress={() => this.props.navigation.navigate('RegisterScreen')}>
            Register
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
    marginTop: 0,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
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
  loginBtn: {
    width: 250,
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  loginText: {
    color: 'white',
  },
  forgotStyle: {
    color: 'white',
    fontSize: 11,
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
