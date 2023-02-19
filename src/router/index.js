import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Splash, Location, Profile, Login, EditProfile, ChangePassword, Register1, DetailKost } from '../pages';//Register2 } from '../pages';
import { BottomNavigator } from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Location" component={Location} options={{ title: 'Location', headerShown: false }} />
      <Tab.Screen name="Profile" component={Profile} options={{ title: 'Profil Anda' }} />
    </Tab.Navigator>
  );
}

const Router = () => {
  return (
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }} />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }} />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ title: 'Edit Profil' }} />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{ title: 'Ubah Password' }} />
      <Stack.Screen
        name="Register1"
        component={Register1}
        options={{ headerShown: false }} />
        <Stack.Screen
        name="DetailKost"
        component={DetailKost}
        options={{ headerShown: false }} />
      {/* <Stack.Screen
        name="Location"
        component={Location}
        options={{ headerShown: false }} /> */}
      {/* <Stack.Screen
        name="Register2"
        component={Register2}
        options={{ headerShown: false }} /> */}
    </Stack.Navigator>
  )
}

export default Router