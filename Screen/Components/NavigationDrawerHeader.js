import React from 'react-native';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';

export default class NavigationHeader extends React.Component {
  toggleDrawer = () => {
    this.navigationProps.toggleDrawer();
  };

  render() {
    return (
      <View style={styles.mainView}>
        <TouchableOpacity onPress={this.toggleDrawer}>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
  },
  sideMenuBtn: {
    width: 25,
    height: 25,
    marginLeft: 5,
  },
});
