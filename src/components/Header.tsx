import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as React from 'react';

export const Header = ({
  headerText,
  onPress,
}: {
  headerText: string;
  onPress: any;
}) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.menuIcon}>☰</Text>
      </TouchableOpacity>
      <Text style={styles.headerText}>{headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    gap: 24,
    margin: 24,
    opacity: 0.5,
    marginTop: Platform.OS === 'android' ? 20 : 80,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  menuIcon: {
    fontSize: 32,
  },
  headerText: {
    fontSize: 24,
  },
});
