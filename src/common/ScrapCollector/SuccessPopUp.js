import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const SuccessPopup = ({onClose}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../images/truck.png')}
        style={styles.truckImage}
      />
      <Text style={styles.heading}>Sent Successfully</Text>
      <Text style={styles.message}>Material will be picked soon.</Text>
      <TouchableOpacity onPress={onClose} style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 70,
    left: 70,
    backgroundColor: '#50C2C9',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  truckImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    marginBottom: 20,
  },
  continueButton: {
    backgroundColor: '#B6F0EC',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
  },
  continueButtonText: {
    color: 'gray',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SuccessPopup;
