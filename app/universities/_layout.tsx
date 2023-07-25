import React from "react";
import { Stack } from "expo-router";
import HeaderBack from "../../components/buttons/HeaderBack";

const unstable_settings = {
  initialRouteName: "index",
};
const _layout = () => (
  <>
    <Stack screenOptions={{ headerShown: false, gestureEnabled: true }}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          headerTitle: "Üniversiteler",
          headerLeft: () => <HeaderBack />,
          headerTitleAlign: "center",

          // headerRight: () => <PreferencesButton />,
        }}
      />
      <Stack.Screen
        name="details"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="filters"
        options={{
          headerShown: false,
          presentation: "modal",
        }}
      />
    </Stack>
  </>
);

export default _layout;
