import {View, StyleSheet} from 'react-native';
import * as React from 'react';
import DrawerMenuProvider, {
  DrawerMenuContext,
  DrawerMenuContextType,
} from '../components/DrawerMenuProvider.tsx';
import {Header} from '../components/Header.tsx';
import {SCREEN_NAMES} from '../HomeRootStack.tsx';

const SignOutScreen = () => {
  const {onMenuButtonPress} =
    React.useContext<DrawerMenuContextType>(DrawerMenuContext);

  return (
    <View style={styles.signOutScreenContainer}>
      <Header headerText={SCREEN_NAMES.SIGN_OUT} onPress={onMenuButtonPress} />
    </View>
  );
};

const SignOutScreenWithDrawerMenu = () => {
  return (
    <DrawerMenuProvider>
      <SignOutScreen />
    </DrawerMenuProvider>
  );
};

export default SignOutScreenWithDrawerMenu;

const styles = StyleSheet.create({
  signOutScreenContainer: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 32,
    borderTopEndRadius: 32,
    backgroundColor: 'white',
  },
});
