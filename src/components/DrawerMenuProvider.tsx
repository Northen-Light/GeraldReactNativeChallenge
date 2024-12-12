import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import {ReactNode, useContext} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SCREEN_NAMES, ScreenName} from '../HomeRootStack.tsx';

export type DrawerMenuContextType = {
  onMenuButtonPress: () => void;
};

interface CustomButtonProps {
  text: ScreenName;
}

export const DrawerMenuContext = React.createContext({
  onMenuButtonPress: () => {},
});

const statusBarHeight = 70;

const width = Dimensions.get('window').width;

const timingConfig = {
  duration: 600,
  easing: Easing.bezier(0.25, 0.1, 0.25, 1),
};

const DrawerMenuProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const showMenu = useSharedValue<boolean>(false);

  const drawerMenuContainerAnimStyles = useAnimatedStyle(() => {
    return {
      transform: showMenu.value
        ? [{translateY: withTiming(statusBarHeight, timingConfig)}]
        : [{translateY: withTiming(0, timingConfig)}],
    };
  });

  const rootContainerAnimStyles = useAnimatedStyle(() => {
    return {
      transform: showMenu.value
        ? [
            {translateY: withTiming(statusBarHeight + 12, timingConfig)},
            {translateX: withTiming(width / 1.6, timingConfig)},
            {rotate: withTiming('-10deg', timingConfig)},
          ]
        : [
            {translateY: withTiming(0, timingConfig)},
            {translateX: withTiming(0, timingConfig)},
            {rotate: withTiming('0deg', timingConfig)},
          ],
    };
  });

  const onMenuButtonPress = () => {
    showMenu.value = !showMenu.value;
  };

  const drawerMenuStyles = [
    styles.drawerMenuRootContainer,
    drawerMenuContainerAnimStyles,
  ];

  const rootContainerStyles = [styles.rootContainer, rootContainerAnimStyles];

  return (
    <DrawerMenuContext.Provider value={{onMenuButtonPress}}>
      <Animated.View style={drawerMenuStyles}>
        <DrawerMenu />
      </Animated.View>
      <Animated.View style={rootContainerStyles}>{children}</Animated.View>
    </DrawerMenuContext.Provider>
  );
};

export default DrawerMenuProvider;

const DrawerMenu = () => {
  return (
    <View style={styles.drawerMenuContainer}>
      <View style={styles.drawerMenuTitle}>
        <Text style={styles.drawerMenuTitleText}>Beka</Text>
      </View>
      <View style={styles.drawerMenuSectionOne}>
        <CustomButton text={SCREEN_NAMES.START} />
        <CustomButton text={SCREEN_NAMES.YOUR_CART} />
        <CustomButton text={SCREEN_NAMES.FAVOURITES} />
        <CustomButton text={SCREEN_NAMES.YOUR_ORDERS} />
      </View>
      <UnderLine />
      <View style={styles.drawerMenuSectionTwo}>
        <CustomButton text={SCREEN_NAMES.SIGN_OUT} />
      </View>
    </View>
  );
};

const CustomButton: React.FC<CustomButtonProps> = ({text}) => {
  const {onMenuButtonPress} = useContext(DrawerMenuContext);
  const navigation = useNavigation();
  const routeName = useRoute().name;

  return (
    <TouchableOpacity
      onPress={() => {
        onMenuButtonPress();
        navigation.navigate(text as never);
      }}>
      <Text
        style={[
          styles.customButton,
          {color: routeName === text ? 'red' : 'white'},
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const UnderLine = () => {
  return <View style={styles.underLine} />;
};

const styles = StyleSheet.create({
  rootContainer: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 32,
    borderBottomLeftRadius: 32,
    backgroundColor: 'white',
  },
  drawerMenuRootContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderTopLeftRadius: 32,
    backgroundColor: '#15152f',
    borderBottomLeftRadius: 32,
  },
  drawerMenuContainer: {
    margin: 16,
    marginTop: 32,
    width: '40%',
  },
  drawerMenuTitle: {
    marginTop: 32,
    marginLeft: 48,
  },
  drawerMenuTitleText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
  },
  drawerMenuSectionOne: {
    gap: 32,
    marginTop: 32,
    marginLeft: 16,
  },
  drawerMenuSectionTwo: {
    gap: 30,
    marginTop: 50,
    marginLeft: 16,
  },
  customButton: {
    fontWeight: 'black',
    fontSize: 16,
    color: 'white',
  },
  underLine: {
    height: 1,
    width: '80%',
    marginTop: 50,
    opacity: 0.5,
    backgroundColor: 'white',
  },
});
