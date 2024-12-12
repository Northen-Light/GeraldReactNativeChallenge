import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const ContactScreen = () => {
  return (
    <View style={styles.contactScreenContainer}>
      <Text style={styles.bodyText}> Contacts Screen </Text>
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  contactScreenContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  bodyText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});
