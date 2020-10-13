import {React, useState} from 'react';
import {StyleSheet, View, Modal, ActivityIndicator} from 'react-native';

export default class Loader extends React.Component {
  state = {animating: false};

  render() {
    return (
      <Modal
        transparent={true}
        animationType={'none'}
        visible={true}
        onRequestClose={() => {
          console.log('close modal');
        }}>
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper}>
            <ActivityIndicator animating={true} />
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});