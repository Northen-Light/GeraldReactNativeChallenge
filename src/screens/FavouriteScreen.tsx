import {View, StyleSheet} from 'react-native';
import * as React from 'react';
import DrawerMenuProvider, {
  DrawerMenuContext,
  DrawerMenuContextType,
  Header,
} from '../components/DrawerMenuProvider.tsx';
import {SCREEN_NAMES} from '../HomeRootStack.tsx';

const FavouriteScreen = () => {
  const {onMenuButtonPress} =
    React.useContext<DrawerMenuContextType>(DrawerMenuContext);

  return (
    <View style={styles.favouriteScreenContainer}>
      <Header
        headerText={SCREEN_NAMES.FAVOURITES}
        onPress={onMenuButtonPress}
      />
    </View>
  );
};

const FavouriteScreenWithDrawerMenu = () => {
  return (
    <DrawerMenuProvider>
      <FavouriteScreen />
    </DrawerMenuProvider>
  );
};

export default FavouriteScreenWithDrawerMenu;

const styles = StyleSheet.create({
  favouriteScreenContainer: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 32,
    borderTopEndRadius: 32,
    backgroundColor: 'white',
  },
});
