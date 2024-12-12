Candidate Name: Prateek Patnaik


# Problem Statement
As per my understanding of the problem statement, we have to create a simple React Native application 
with the following features:

1. A Tab Navigator with two tabs:
   - Home
   - Contact
2. The Home tab should have a Stack Navigator with five screens:
   - Start
   - Your Cart
   - Favorites
   - Your Orders
   - Sign Out
3. Each of above screens (screens present inside Home Tab) should have a drawer menu screen attached to it and when
   the drawer menu is opened, it should show the following options:
    - Home
    - Contact
    - About
    - Settings
    - Sign Out
4. The Drawer menu opens with an animation as mentioned in the problem statement.

# Solution
I have designed the UI hierarchy of the application to like something like this:
``` 
Tab Navigator
  - HomeRootStack
     - Start Screen with drawer menu
     - Your Cart Screen with drawer menu
     - Favorites Screen with drawer menu
     - Your Orders Screen with drawer menu
     - Sign Out Screen with drawer menu
  - Contact Screen
```

Used typescript for the development of the application and code hierarchy is pretty simple
and easy to understand. UI code lies in `src` folder of root directory and inside the `src` folder, 
there are two folders named :
1. `components` - This folder contains all the reusable components used in the application like DrawerMenu, 
   Header, etc.
2. `screens` - This folder contains all the screens of the application.

I have used the below libraries : 
1. @react-navigation/native (for navigation)
2. @react-navigation/stack (for stack navigation)
3. @react-navigation/bottom-tabs (for tab navigation)
4. react-native-reanimated (for animations)
5. other supporting libraries like gesture-handler, react-native-screens, react-native-safe-area-context, etc.

# Steps to run the application
1. Mentioned in the README.md file of the root directory.
2. Screen recording of the application is present in the root directory with the name `product-screen-recording.mov`.