import {View, StyleSheet} from 'react-native';
import * as React from 'react';
import DrawerMenuProvider, {
  DrawerMenuContext,
  DrawerMenuContextType,
  Header,
} from '../components/DrawerMenuProvider.tsx';
import {SCREEN_NAMES} from '../HomeRootStack.tsx';

const StartScreen = () => {
  const {onMenuButtonPress} =
    React.useContext<DrawerMenuContextType>(DrawerMenuContext);

  return (
    <View style={styles.startScreenContainer}>
      <Header headerText={SCREEN_NAMES.START} onPress={onMenuButtonPress} />
    </View>
  );
};

const StartScreenWithDrawerMenu = () => {
  return (
    <DrawerMenuProvider>
      <StartScreen />
    </DrawerMenuProvider>
  );
};

export default StartScreenWithDrawerMenu;

const styles = StyleSheet.create({
  startScreenContainer: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 32,
    borderTopEndRadius: 32,
    backgroundColor: 'white',
  },
});
