import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "@screens/signin/signin-screen";
import PunchListScreen from "@screens/punch-list/punch-list-screen";
import SettingsScreen from "@screens/settings/settings-screen";
import CalendarScreen from "@screens/calendar/calendar-screen";
import NewPunchScreen from "@screens/new-punch/new-punch-screen";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="SignIn"
      >
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="PunchListScreen" component={PunchListScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
        <Stack.Screen name="NewPunchScreen" component={NewPunchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
