import {View, StyleSheet} from 'react-native';
import * as React from 'react';
import DrawerMenuProvider, {
  DrawerMenuContext,
  DrawerMenuContextType,
  Header,
} from '../components/DrawerMenuProvider.tsx';
import {SCREEN_NAMES} from '../HomeRootStack.tsx';

const YourOrdersScreen = () => {
  const {onMenuButtonPress} =
    React.useContext<DrawerMenuContextType>(DrawerMenuContext);

  return (
    <View style={styles.yourOrdersScreenContainer}>
      <Header
        headerText={SCREEN_NAMES.YOUR_ORDERS}
        onPress={onMenuButtonPress}
      />
    </View>
  );
};

const YourOrdersScreenWithDrawerMenu = () => {
  return (
    <DrawerMenuProvider>
      <YourOrdersScreen />
    </DrawerMenuProvider>
  );
};

export default YourOrdersScreenWithDrawerMenu;

const styles = StyleSheet.create({
  yourOrdersScreenContainer: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 32,
    borderTopEndRadius: 32,
    backgroundColor: 'white',
  },
});
