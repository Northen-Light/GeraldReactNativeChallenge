import {View, StyleSheet} from 'react-native';
import * as React from 'react';
import DrawerMenuProvider, {
  DrawerMenuContext,
  DrawerMenuContextType,
  Header,
} from '../components/DrawerMenuProvider.tsx';
import {SCREEN_NAMES} from '../HomeRootStack.tsx';

const YourCartScreen = () => {
  const {onMenuButtonPress} =
    React.useContext<DrawerMenuContextType>(DrawerMenuContext);

  return (
    <View style={styles.yourCartScreenContainer}>
      <Header headerText={SCREEN_NAMES.YOUR_CART} onPress={onMenuButtonPress} />
    </View>
  );
};

const YourCardScreenWithDrawerMenu = () => {
  return (
    <DrawerMenuProvider>
      <YourCartScreen />
    </DrawerMenuProvider>
  );
};

export default YourCardScreenWithDrawerMenu;

const styles = StyleSheet.create({
  yourCartScreenContainer: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 32,
    borderTopEndRadius: 32,
    backgroundColor: 'white',
  },
});
