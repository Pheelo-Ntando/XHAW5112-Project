// app.tsx
import 'react-native-gesture-handler'; // Must be at the top
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Import page components
import Page1 from './screens/Page1';
import Page2 from './screens/Page2';
import Page3 from './screens/Page3';
import Page4 from './screens/Page4';
import Page5 from './screens/Page5';

// Create the Drawer Navigator
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomePage">
        <Drawer.Screen name="Homepage" component={Page1} />
        <Drawer.Screen name="6 Weeks Course" component={Page2} />
        <Drawer.Screen name="6 Months Course" component={Page3} />
        <Drawer.Screen name="Checkout" component={Page4} />
        <Drawer.Screen name="Contact Us" component={Page5} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
