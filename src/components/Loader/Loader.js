import React from 'react';
import {StyleSheet, View, Modal, ActivityIndicator, Text} from 'react-native';

const Loader = props => {
  const isLoading = props.isLoading;
  const title = props.title ? props.title : 'Loading...';
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={isLoading}
      style={styles.model}
      onRequestClose={() => {}}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator animating={isLoading} color="#555" size="large" />
          <Text style={styles.loadingText}>{title}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  model: {zIndex: 1100},
  loadingText: {color: '#555', fontSize: 20, marginTop: 20},
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#rgba(0, 0, 0, 0.7)',
    zIndex: 1000,
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    // height: 100,
    // width: 100,
    padding: 20,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Loader;
